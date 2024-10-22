import React from "react";
import { Navbar } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
const Header = () => {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <Navbar
      fluid
      className="bg-slate-600 text-white px-3 border-b border-gray-800 lg:py-5 md:py-5"
    >
      <Link to="/" className="text-white">
        <span className="bg-gradient-to-r  from-indigo-500 via-purple-500 to-pink-500 p-2 rounded-lg text-white font-semibold">
          RED
        </span>
        BOOK'S
      </Link>

      <Navbar.Toggle className="hover:bg-slate-700 lg:hidden" />
      <Navbar.Collapse>
        <Navbar.Link
          active={pathname === "/search"}
          as={"div"}
          className="text-white hover:text-gray-800 hover:bg-teal-500"
        >
          <Link to="/search" className="flex gap-2 items-center">
            Search
          </Link>
        </Navbar.Link>
        <Navbar.Link
          active={pathname === "/"}
          as={"div"}
          className="text-white hover:text-gray-800 hover:bg-teal-500"
        >
          <Link to="/">Home</Link>
        </Navbar.Link>
        <Navbar.Link
          active={pathname === "/about"}
          as={"div"}
          className="text-white hover:text-gray-800 hover:bg-teal-500"
        >
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link
          active={pathname === "/books"}
          as={"div"}
          className="text-white hover:text-gray-800 hover:bg-teal-500"
        >
          <Link to="/books">Books</Link>
        </Navbar.Link>
        <Navbar.Link
          active={pathname === "/contact"}
          as={"div"}
          className="text-white hover:text-gray-800 hover:bg-teal-500"
        >
          <Link to="/contact">Contact</Link>
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
