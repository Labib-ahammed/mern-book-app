import { Button, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { ValidationError, useForm } from '@formspree/react';

const Footer = () => {
  const [state, handleSubmit] = useForm("xkgngbkg");
  return (
    <>
      <footer className="p-4 bg-slate-800 flex flex-col gap-10 sm:flex-row sm:justify-between sm:items-center">
        <div className="">
          <h2 className="text-white text-2xl font-semibold text-center my-3">
            Request a Book
          </h2>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-2 flex flex-col gap-4">
              <TextInput
                placeholder="Enter the book name"
                type="text"
                name="book"
                required
              />
              <TextInput
                placeholder="Enter the book author name"
                type="text"
                name="author"
                required
              />

              <TextInput placeholder="Enter your email" type="email" name="email" required />
              <ValidationError field="email" prefix="Email" errors={state.errors} />
            </div>
            <Button size="lg" gradientDuoTone="purpleToPink" disabled={state.submitting} type="submit"
            className="mt-4"
            >
              {state.submitting ? "Submitting" : "Request"}
            </Button>
          </form>
        </div>
        <div className="text-center">
          <Link to="/" className="text-white">
            <span className="bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 p-2 rounded-lg text-white font-semibold">
              RED
            </span>
            BOOK'S
          </Link>
          <div className="text-white flex gap-4 mt-4 justify-center text-xs sm:flex-col md:text-[17px]">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/books">Books</Link>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/contact">Contact us</Link>
          </div>
        </div>
      </footer>
      <p className="text-center text-gray-300 text-sm bg-slate-900 p-3">
        Copyright © {new Date().getFullYear()} RED BOOK. All rights reserved.
      </p>
    </>
  );
};

export default Footer;
