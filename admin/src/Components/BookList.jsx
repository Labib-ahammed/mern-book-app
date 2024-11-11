import React, { useState, useEffect } from "react";

const BookList = () => {
  const [book, setBook] = useState([]);
  const [error, setError] = useState(null); // State to hold any error messages

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch("https://mern-book-app-alpha.vercel.app/api/allbook?order=asc");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setBook(data);
      } catch (err) {
        console.error(err);
        setError(err.message); // Set error message in state
      }
    };

    fetchBooks();
  }, []);

  const handelDelete = async (id) => {
    try {
      const response = await fetch(
        `https://mern-book-app-alpha.vercel.app/api/bookdelete/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      await response.json(); // Await the response to ensure it completes
      setBook(book.filter((b) => b._id !== id)); // Update state after successful deletion
    } catch (err) {
      console.error(err);
      alert("Error deleting book: " + err.message); // Alert user of deletion error
    }
  };

  return (
    <div className="min-h-screen">
      {error && <p className="text-red-600">{error}</p>}{" "}
      {/* Display error message */}
      {book.length > 0 ? (
        <>
          <h1 className="m-8 text-3xl font-medium">Book List</h1>
          <table className="m-auto">
            <thead>
              <tr>
                <th className="border-2 border-gray-800">Cover Image</th>
                <th className="border-2 border-gray-800">Title</th>
                <th className="border-2 border-gray-800">Author</th>
                <th className="border-2 border-gray-800">Delete</th>
              </tr>
            </thead>
            <tbody>
              {book.map((bookItem) => (
                <tr key={bookItem._id}>
                  <td className="border-2 border-gray-800 w-8">
                    <img src={bookItem.coverImage} alt={bookItem.title} />
                  </td>
                  <td className="border-2 border-gray-800">
                    {bookItem.title.substring(0, 17)}
                  </td>
                  <td className="border-2 border-gray-800">
                    {bookItem.author.substring(0, 17)}
                  </td>
                  <td
                    onClick={() => handelDelete(bookItem._id)}
                    className="border-2 border-gray-800 cursor-pointer"
                  >
                    X
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <h1 className="m-8 text-xl font-medium">No books available.</h1> // Optional message when no books are present
      )}
    </div>
  );
};

export default BookList;
