import { Button, Spinner, TextInput, Card } from "flowbite-react";
import React, { useState } from "react";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchTerm) return;

    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://mern-book-app-alpha.vercel.app/api/booksearch?query=${encodeURIComponent(
          searchTerm
        )}&order=desc`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setError("Failed to fetch results. Please try again.");
    } finally {
      setLoading(false);
      setSearchTerm("");
    }
  };
  return (
    <div className="min-h-screen text-white">
      <h1 className="text-2xl text-center my-3">Search</h1>
      <form className="w-full my-8" onSubmit={handleSearch}>
        <div className="flex gap-2 justify-center">
          <TextInput
            type="text"
            placeholder="Search for books..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button gradientDuoTone="purpleToPink" type="submit">
            Search
          </Button>
        </div>
      </form>
      {loading && <Spinner size="lg" className="mx-auto flex justify-center"/>}
      {error && <p className="text-red-500 text-center font-bold">{error}</p>}
      <section>
        {searchResults.length > 0 ? (
          <div className="flex flex-wrap gap-4 justify-center my-5">
            {searchResults.map((book) => (
              <Card
                key={book._id}
                className="max-w-[46.33%] bg-slate-600 max-h-[550px] sm:max-h-[600px]"
                imgSrc={`${book.coverImage}`}
                imgAlt={`${book.title.substring(0, 17)}`}
                horizontal
              >
                <h5 className="text-xs font-bold tracking-tight text-gray-300">
                  {book.title.substring(0, 17)}
                  {book.title.length > 17 ? "..." : ""}
                </h5>
                <p className="font-normal text-gray-400 text-[10px]">
                  {book.author.substring(0, 13)}
                  {book.author.length > 13 ? "..." : ""}
                </p>

                <Button
                  pill
                  gradientDuoTone="purpleToPink"
                  href={`${book.downloadLink}`}
                  target="_blank"
                >
                  Download
                </Button>
              </Card>
            ))}
          </div>
        ) : (
          !loading && (
            <p className="text-red-500 text-center font-bold">Search a book</p>
          )
        )}
      </section>
    </div>
  );
};

export default Search;
