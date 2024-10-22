import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Search from "./pages/Search";
import Footer from "./components/Footer";
import Book from "./pages/Book";
import Privacy from "./pages/Privacy"
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Search" element={<Search />} />
        <Route path="/books" element={<Book />} />
        <Route path="/privacy-policy" element={<Privacy />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
