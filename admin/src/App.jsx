import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import BookList from "./Components/BookList";

const App = () => {
  const [file, setFile] = useState(null);
  const [progressCover, setProgressCover] = useState(0); // Changed to number
  const [progressFile, setProgressFile] = useState(0); // New state for file upload progress
  const [coverFile, setCoverFile] = useState(null);
  const [url, setUrl] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");

  const firebaseConfig = {
    apiKey: "AIzaSyDSUWU26D9ScJhG9nPFFAD5U2zjFQz--vs",
    authDomain: "book-store-pdf.firebaseapp.com",
    projectId: "book-store-pdf",
    storageBucket: "book-store-pdf.appspot.com",
    messagingSenderId: "284379926840",
    appId: "1:284379926840:web:ed3ae2bcca8c75ae9671cd",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    if (name === "title") {
      setTitle(value);
    }
    if (name === "author") {
      setAuthor(value);
    }
    if (name === "genre") {
      setGenre(value);
    }
  };

  const handleFileChange = (e, type) => {
    const selectedFile = e.target.files[0];
    if (type === "cover") {
      setCoverFile(selectedFile);
    } else {
      setFile(selectedFile);
    }
  };

  const handleFileUpload = async (type) => {
    const selectedFile = type === "cover" ? coverFile : file;
    if (!selectedFile) return;

    const fileWithDate = new Date().getTime() + "-";

    const storageRef = ref(
      storage,
      `${type === "cover" ? "coverImage" : "books"}/fileWithDate+${selectedFile.name}`
    );

    const uploadTask = uploadBytesResumable(storageRef, selectedFile);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        if (type === "cover") {
          setProgressCover(progress); // Update cover progress
        } else {
          setProgressFile(progress); // Update file progress
        }
      },
      (error) => {
        console.log("upload file error", error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          if (type === "cover") {
            setCoverUrl(downloadURL);
            alert("Cover image uploaded successfully");
          } else {
            setUrl(downloadURL);
            alert("Book uploaded successfully");
          }
        });
      }
    );
  };

  const uploadToDataBase = async (e) => {
    e.preventDefault();

    if (!url || !coverUrl) {
      console.log("File URLs are not ready yet.");
      return;
    }

    try {
      const response = await fetch(
        `https://mern-book-app-alpha.vercel.app/api/postbook`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            author,
            genre,
            downloadLink: url,
            coverImage: coverUrl,
          }),
        }
      );

      if (!response.ok) throw new Error("Failed to upload book data.");

      const data = await response.json();
      console.log(data);
      alert("Book data uploaded successfully!");

      resetForm();
    } catch (error) {
      console.log("Error uploading to database", error.message);
      alert("Error uploading book data.");
    }
  };

  const resetForm = () => {
    setTitle("");
    setAuthor("");
    setGenre("");
    setFile(null);
    setCoverFile(null);
    setUrl("");
    setCoverUrl("");
    setProgressCover(0); // Reset progress
    setProgressFile(0); // Reset progress
  };

  return (
    <div className="w-full text-center">
      <h1 className="text-2xl text-center m-3">RED BOOK | ADMIN</h1>
      <form className="p-5 flex flex-col gap-3" onSubmit={uploadToDataBase}>
        <div className="flex justify-between items-center border border-gray-800 p-3 rounded-md">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            placeholder="Enter book title"
            className="border border-gray-600 p-2"
            required
            onChange={handleOnChange}
            value={title}
          />
        </div>

        <div className="flex justify-between items-center border border-gray-800 p-3 rounded-md">
          <label htmlFor="author">Author</label>
          <input
            type="text"
            name="author"
            placeholder="Enter author name"
            className="border border-gray-600 p-2"
            required
            onChange={handleOnChange}
            value={author}
          />
        </div>

        <div className="flex justify-between items-center border border-gray-800 p-3 rounded-md">
          <label htmlFor="genre">Genre</label>
          <select name="genre" onChange={handleOnChange} value={genre} required>
            <option value="">Select Genre</option>
            <option value="novel">Novel</option>
            <option value="horror">Horror</option>
            <option value="romantic">Romantic</option>
            <option value="islamic">Islamic</option>
            <option value="adventure">Adventure</option>
            <option value="thriller">Thriller</option>
            <option value="detective">Detective</option>
            <option value="story">Story</option>
            <option value="fiction">Fiction</option>
            <option value="academic">Academic</option>
            <option value="games">Games</option>
          </select>
        </div>

        <div className="flex justify-between items-center border border-gray-800 p-3 rounded-md">
          <label htmlFor="coverImage">Cover Image</label>
          <input
            type="file"
            name="coverImage"
            onChange={(e) => handleFileChange(e, "cover")}
            className="border border-gray-600 p-2 w-[110px]"
          />
          <button
            type="button"
            onClick={() => handleFileUpload("cover")}
            className="p-2 bg-teal-500 text-white rounded-md m-2"
          >
            {progressCover > 0
              ? `${Math.round(progressCover)}%`
              : "Upload Cover"}
          </button>
        </div>

        <div className="flex justify-between items-center border border-gray-800 p-3 rounded-md">
          <label htmlFor="file">File Upload</label>
          <input
            type="file"
            name="file"
            id="file"
            onChange={(e) => handleFileChange(e)}
            className="border border-gray-600 p-2 w-[110px]"
            required
          />
          <button
            type="button"
            onClick={() => handleFileUpload("file")}
            className="p-2 bg-teal-500 text-white rounded-md m-2"
          >
            {progressFile > 0 ? `${Math.round(progressFile)}%` : "Upload File"}
          </button>
        </div>

        <button
          type="submit"
          className="p-2 bg-teal-500 text-white rounded-md w-4/5 m-auto"
        >
          Submit Book
        </button>
      </form>
      <BookList />
    </div>
  );
};

export default App;
