import { Button, Card } from "flowbite-react";
import React, {useState, useEffect} from "react";

const Book = () => {
  const [book, setBook] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    fetch("https://mern-book-app-alpha.vercel.app/api/allbook?order=desc")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Can not connect to DB server.");
        }
        return response.json();
      })
      .then((data) => setBook(data))
      .catch((err) => {
        console.error("Error fetching books: ", err.message);
        setError(err.message); // Set error message
      });
  }, []);


  return (
    <div className="container mx-auto min-h-screen">
      <h1 className="text-3xl text-white font-semibold my-5 text-center">
        BOOKS
      </h1>
      {/* pasting HomeBooks modifyed code */}
      <section className="my-10">
        {!book.length && (
          <div className="text-white font-semibold text-xl text-center">
            No books found 😢
          </div>
        )}
        {error && (
          <div className="text-red-600 font-semibold text-xl text-center">
            {error}
          </div>
        )}
        <div className="flex flex-wrap gap-4 justify-center">
          {book.map((b) => (
            <Card
              key={b._id}
              className="max-w-[46.33%] bg-slate-600 max-h-[550px] sm:max-h-[600px]"
              imgSrc={`${b.coverImage}`}
              imgAlt={`${b.title.substring(0, 17)}`}
              horizontal
            >
              <h5 className="text-xs font-bold tracking-tight text-gray-300">
                {b.title.substring(0, 17)}
                {b.title.length > 17 ? "..." : ""}
              </h5>
              <p className="font-normal text-gray-400 text-[10px]">
                {b.author.substring(0, 13)}
                {b.author.length > 13 ? "..." : ""}
              </p>

              <Button
                pill
                gradientDuoTone="purpleToPink"
                href={`${b.downloadLink}`}
                target="_blank"
              >
                Download
              </Button>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Book;
