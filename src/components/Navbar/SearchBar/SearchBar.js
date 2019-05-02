import React from "react";
import { useGlobal } from "reactn";
import { makeStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import { primaryColor } from "../../../constants";

const useStyles = makeStyles({
  search: {
    borderRadius: 4,
    position: "relative",
    backgroundColor: "white",
    border: "1px solid #ced4da",
    width: "80vw",
    padding: 10,
    "@media (min-width: 550px)": {
      width: "30vw"
    }
  },
  searchInput: {
    fontSize: 20
  }
});

const ClearButton = styled.button`
  background-color: rgba(0, 0, 0, 0);
  color: ${primaryColor};
  font-size: 2em;
  font-weight: bold;
  margin: 20px;
  padding: 0 1em;
  border: 5px solid ${primaryColor};
  border-radius: 3px;
  height: 58px;
  cursor: pointer;
  transition: linear 100ms;
  width: 85vw;
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
  @media (min-width: 550px) {
    width: 176px;
  }
`;
const Wraper = styled.div`
  grid-area: Name;
  right: 20px;

  @media (min-width: 1190px) {
    position: absolute;
  }
`;

export default function SearchBar() {
  const [search, setSearch] = useGlobal("searchTerm");
  const [books, setBooks] = useGlobal("books"); // eslint-disable-line no-unused-vars
  const [allBooks, setAllBooks] = useGlobal("allBooks"); // eslint-disable-line no-unused-vars
  const [mbr, setMBR] = useGlobal("masterBooksRecord"); // eslint-disable-line no-unused-vars
  const [sort, setSort] = useGlobal("sort"); // eslint-disable-line no-unused-vars

  function handleChange({ target: { value } }) {
    const regex = new RegExp(value, "gi");
    const searchResults = allBooks
      .map(book => {
        const match = book.title.match(regex);
        return !match ? null : book;
      })
      .filter(book => !!book);
    setBooks(searchResults);
    setSearch(value);
  }

  function clearSearch() {
    setBooks([...mbr]);
    setAllBooks([...mbr]);
    setSearch("");
    setSort("");
  }

  const classes = useStyles();
  return (
    <Wraper>
      <TextField
        id="standard-full-width"
        style={{ margin: 20 }}
        placeholder="Search Book Titles"
        fullWidth
        margin="normal"
        className={classes.search}
        InputProps={{
          disableUnderline: true,
          classes: { input: classes.searchInput }
        }}
        onChange={handleChange}
        value={search}
      />
      <ClearButton onClick={() => clearSearch()}>Clear</ClearButton>
    </Wraper>
  );
}
