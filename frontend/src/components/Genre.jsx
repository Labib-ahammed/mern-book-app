import React from "react";
// importing the genre Images
import Novel from "./assets/novel.jpg";
import Horror from "./assets/Horror.jpg";
import Romantic from "./assets/Romantic-Books.jpg";
import Islamic from "./assets/Islamic-Books.jpg";
import Adventure from "./assets/Adventure-new.jpg";
import Thriller from "./assets/Thiller.jpg";
import Detective from "./assets/Detective.jpg";
import Story from "./assets/Story-Books.jpg";
import Fiction from "./assets/fiction.jpg";
import Academic from "./assets/Academic.jpg"

// creating an array of all the images
const genres = [
  { src: Novel, alt: "Novel", value: "novel" },
  { src: Horror, alt: "Horror", value: "horror" },
  { src: Romantic, alt: "Romantic", value: "romantic" },
  { src: Islamic, alt: "Islamic", value: "islamic" },
  { src: Adventure, alt: "Adventure", value: "adventure" },
  { src: Thriller, alt: "Thriller", value: "thriller" },
  { src: Detective, alt: "Detective", value: "detective" },
  { src: Story, alt: "Story", value: "story" },
  { src: Fiction, alt: "Fiction", value: "fiction" },
  {src: Academic, alt: "Academic", value: "academic"}
];
const Genre = ({ onSelectGenre }) => {
  return (
    <section>
      <h2 className="text-3xl text-white font-semibold my-3 text-center lg:text-4xl md:text-4xl">
        Genre
      </h2>
      <div className="flex justify-center flex-wrap h-52 md:h-72 overflow-x-auto items-center">
        {genres.map((genre, idx) => (
          <div
            key={idx}
            className="w-[160px] p-2 cursor-pointer my-2 flex flex-col justify-center items-center md:w-1/3"
            onClick={() => onSelectGenre(genre.value)}
          >
            <img
              src={genre.src}
              alt={genre.alt}
              className="w-full h-36 object-cover rounded-full lg:w-60 lg:h-60 relative md:w-52 md:h-52 "
            />
            <h3 className="text-white text-center text-xl font-semibold my-1">
              {genre.alt}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Genre;
