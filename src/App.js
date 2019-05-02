import React, { useState, useEffect } from "react";
import { useGlobal } from "reactn";
import Bookshelf from "./components/Bookshelf";
import Navbar from "./components/Navbar";
import { googleBooksAPIKey } from "./constants";

import "./App.css";

function App() {
  const [books, setBooks] = useGlobal("books"); // eslint-disable-line no-unused-vars
  const [allBooks, setAllBooks] = useGlobal("allBooks"); // eslint-disable-line no-unused-vars
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    try {
      fetch("https://aimeri-bookshelf.aimeri.now.sh")
        .then(response => response.json())
        .then(async data => {
          const booksPromise = await data.map(async book => {
            let description = null,
              rating = null,
              cover = null,
              url = null;
            let bookDetailsJSON = await fetch(
              `https://www.googleapis.com/books/v1/volumes?q=${
                book.title
              }&maxResults=1&key=${googleBooksAPIKey}`
            );
            let bookDetails = await bookDetailsJSON.json();
            if (book.isbn && bookDetails.items) {
              description = bookDetails.items[0].volumeInfo.description
                ? bookDetails.items[0].volumeInfo.description
                : description;
              rating = bookDetails.items[0].volumeInfo.averageRating
                ? bookDetails.items[0].volumeInfo.averageRating
                : rating;
              cover = bookDetails.items[0].volumeInfo.imageLinks
                ? bookDetails.items[0].volumeInfo.imageLinks.thumbnail
                : cover;
              url = bookDetails.items[0].volumeInfo.previewLink
                ? bookDetails.items[0].volumeInfo.previewLink
                : url;
            }
            return { ...book, description, rating, cover, url };
          });
          const augumentedBooks = await Promise.all(booksPromise);
          setBooks(augumentedBooks);
          setLoading(false);
        });
    } catch (error) {
      console.log(error);
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (isLoading) {
    return <p>Loading</p>;
  } else {
    return (
      <div className="App">
        <Navbar />
        <Bookshelf />
      </div>
    );
  }
}

export default App;
