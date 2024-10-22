import React from "react";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="min-h-96 flex items-center lg:h-[550px]">
      <div className="container mx-auto px-4">
        <h1 className="text-5xl lg:text-6xl text-center font-bold text-white mb-8">
          Welcome to <br />
          <span className="bg-gradient-to-r from-indigo-500 via-gray-300 to-purple-500 bg-clip-text text-transparent">
            RED BOOK
          </span>
        </h1>
        <p className="text-gray-300 text-xs leading-6 lg:text-center">
          Discover the world of literature with us.Download any book you want
          for free.RED BOOK a large number of books collection.
        </p>
        <Button
          gradientDuoTone="purpleToBlue"
          className="my-5 Button-style lg:mx-auto"
          pill
          size="lg"
        >
          <Link to="/books">Browse Books</Link>
        </Button>
      </div>
    </section>
  );
};

export default Hero;
