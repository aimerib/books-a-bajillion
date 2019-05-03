import React from "react";
import { useGlobal } from "reactn";
import Book from "./Book";
import styled from "styled-components";

const Wraper = styled.div`
  transform: translateX(-17px);
  margin: 20px 20px 20px 37px;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-gap: 10px;
  justify-items: center;
  @media (min-width: 520px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-areas:
      "header header"
      "content content";
  }
  @media (min-width: 865px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-areas:
      "header header"
      "content content";
  }
  @media (min-width: 1084px) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      "header header header"
      "content content content";
  }
  @media (min-width: 1460px) {
    grid-template-columns: repeat(5, 1fr);
    grid-template-areas:
      "header header header header"
      "content content content content";
  }
`;

export default function Bookshelf() {
  // eslint-disable-next-line no-unused-vars
  const [books, setBooks] = useGlobal("books");
  return (
    <Wraper>
      {books.map((book, index) => (
        <Book
          title={book.title}
          author={book.author}
          isbn={book.isbn}
          rating={book.rating}
          description={book.description}
          cover={book.cover}
          year={book.year}
          url={book.url}
          key={index}
        />
      ))}
    </Wraper>
  );
}
