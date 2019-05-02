import React from "react";

import SortMenu from "./SortMenu";
import SearchBar from "./SearchBar";
import styled from "styled-components";

const Wraper = styled.div`
  background-color: #f9f6f6;
  width: 100vw;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.45);
  z-index: 3;
  position: sticky;
  top: 0;
  display: grid;
  justify-items: center;
  grid-gap: 15px;
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-template-areas:
    "Avatar"
    "Name";

  @media (min-width: 1190px) {
    display: flex;
    align-items: center;
  }
`;

export default function Navbar() {
  return (
    <Wraper>
      <SortMenu />
      <SearchBar />
    </Wraper>
  );
}
