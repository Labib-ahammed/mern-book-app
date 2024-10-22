import express from "express";
import Book from "../model/books.model.js";
const route = express.Router();

route.get("/allbook", async (req, res) => {
  try {
    const allbook = await Book.find();
    res.json(allbook);
  } catch (error) {
    console.log(error.message);
  }
});
route.post("/postbook", async (req, res) => {
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    res.status(201).json(newBook);
  } catch (error) {
    console.log(error.message);
  }
});

route.delete("/bookdelete/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBook = await Book.findByIdAndDelete(id);
    if (!deletedBook) {
      res.status(404).json({ message: "No book found" });
    }
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server Error" });
  }
});

route.get("/booksearch", async (req, res) => {
  try {
    const { query } = req.query;
    const book = await Book.find({ title: { $regex: query, $options: "i" } });
    res.json(book);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server Error" });
  }
});

export default route;
