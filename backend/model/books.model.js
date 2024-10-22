import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String
    },
    coverImage: {
        type: String
    },
    genre:{
        type: String
    },
    downloadLink:{
        type: String,
        required: true
    }
})

const Book = mongoose.model("Book", bookSchema);
export default Book;