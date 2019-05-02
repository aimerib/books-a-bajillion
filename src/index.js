import React from "react";
import ReactDOM from "react-dom";
import { setGlobal } from "reactn";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

setGlobal({
  books: [],
  allBooks: [],
  searchTerm: "",
  sort: "",
  sortOrder: "ascending"
});

ReactDOM.render(<App />, document.getElementById("root"));

serviceWorker.unregister();
