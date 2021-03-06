import React from "react";
import RadioMenu from "./RadioMenu";
import DropdownMenu from "./DropdownMenu";
import styled from "styled-components";
import { primaryColor } from "../../../constants";
import { useGlobal } from "reactn";

const Wraper = styled.div`
  grid-area: Sort;
  @media (min-width: 1190px) {
    display: inline-grid;
    justify-self: start;
    margin-left: 30px;
  }
`;

const SortButton = styled.button`
  background-color: rgba(0, 0, 0, 0);
  color: ${primaryColor};
  font-size: 1em;
  font-weight: bold;
  padding: 5px 1em;
  border: 5px solid ${primaryColor};
  border-radius: 3px;
  cursor: pointer;
  transition: linear 100ms;
  width: 95%;
  margin-bottom: 10px;
  &:hover {
    background: ${primaryColor};
    border: 5px solid rgba(102, 37, 103, 0);
    color: white;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.45);
  }
  &:active {
    background-color: rgba(0, 0, 0, 0);
    color: ${primaryColor};
    box-shadow: 0px 0px 0px rgba(0, 0, 0, 0);
    border: 5px solid ${primaryColor};
  }
`;

export default function SortMenu() {
  const [books, setBooks] = useGlobal("books");
  const [allBooks, setAllBooks] = useGlobal("allBooks");
  const [sort, setSort] = useGlobal("sort"); // eslint-disable-line no-unused-vars
  const [sortOrder, setSortOrder] = useGlobal("sortOrder"); // eslint-disable-line no-unused-vars

  function sortBooks() {
    let sortedBooks, sortedAllBooks;
    if (sortOrder === "ascending") {
      sortedBooks = [...books].sort((a, b) =>
        a[sort] < b[sort] ? -1 : a[sort] > b[sort] ? 1 : 0
      );
      sortedAllBooks = [...allBooks].sort((a, b) =>
        a[sort] < b[sort] ? -1 : a[sort] > b[sort] ? 1 : 0
      );
    } else {
      sortedBooks = [...books].sort((a, b) =>
        a[sort] > b[sort] ? -1 : a[sort] < b[sort] ? 1 : 0
      );
      sortedAllBooks = [...allBooks].sort((a, b) =>
        a[sort] > b[sort] ? -1 : a[sort] < b[sort] ? 1 : 0
      );
    }
    setBooks(sortedBooks);
    setAllBooks(sortedAllBooks);
  }

  return (
    <Wraper>
      <DropdownMenu />
      <RadioMenu />
      <SortButton onClick={sortBooks}>Sort</SortButton>
    </Wraper>
  );
}
