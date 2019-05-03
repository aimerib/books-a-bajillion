import React, { useState } from "react";

import SortMenu from "./SortMenu";
import SearchBar from "./SearchBar";
import styled from "styled-components";

import upArrow from "../../assets/arrow-up.svg";
import downArrow from "../../assets/arrow-down.svg";

const Wrapper = styled.div`
  position: sticky;
  z-index: 3;
  margin-bottom: 50px;
  min-width: 300px;
  width: 100vw;
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
  @media (max-width: 1190px) {
    top: ${props => (props.isOpen ? "0px" : "-290px")};
    transition: top 300ms cubic-bezier(0.17, 0.04, 0.03, 0.94);
    position: absolute;
  }

  @media (min-width: 1190px) {
    display: flex;
    align-items: center;
  }
`;

const NavbarOpenCloseButton = styled.button`
  display: none;
  margin-top: ${props => (props.isOpen ? "290px" : "0px")};
  @media (min-width: 550px) {
    margin-top: ${props => (props.isOpen ? "251px" : "0px")};
  }
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

    transition: margin 300ms cubic-bezier(0.17, 0.04, 0.03, 0.94);
    &:after {
      content: url(${props => (props.isOpen ? upArrow : downArrow)});
    }
  }
`;

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(true);

  function toggleNavbar() {
    setIsOpen(!isOpen);
  }

  return (
    <Wrapper>
      <NavBar isOpen={isOpen}>
        <SortMenu />
        <SearchBar />
      </NavBar>
      <NavbarOpenCloseButton onClick={toggleNavbar} isOpen={isOpen} />
    </Wrapper>
  );
}
