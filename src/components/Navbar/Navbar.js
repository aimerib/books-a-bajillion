import React, { useState } from "react";

import SortMenu from "./SortMenu";
import SearchBar from "./SearchBar";
import styled from "styled-components";

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 3;
  margin-bottom: 50px;
  min-width: 300px;
`;

const NavBar = styled.div`
  background-color: #f9f6f6;
  width: 100vw;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.45);
  display: grid;
  justify-items: center;
  grid-gap: 15px;
  grid-template-columns: 100%;
  grid-template-rows: auto;
  grid-template-areas:
    "Sort"
    "Search";
  min-width: 300px;
  @media (min-width: 1190px) {
    display: flex;
    align-items: center;
  }
`;

const NavbarOpenCloseButton = styled.button`
  display: none;
  @media (max-width: 1190px) {
    display: block;
    height: 50px;
    width: 50px;
    background-color: purple;
    border-radius: 0 0 50% 50%;
    position: absolute;
    left: 50%;
    transform: translateX(calc(-50% - 9px));
    border: none;
    cursor: pointer;
  }
`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      <NavBar isOpen={isOpen}>
        <SortMenu />
        <SearchBar />
      </NavBar>
      <NavbarOpenCloseButton />
    </Wrapper>
  );
}
