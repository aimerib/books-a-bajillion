import React from "react";
import styled, { keyframes } from "styled-components";
import spinner from "../assets/spinner.svg";
import { primaryColor } from "../constants";

const spin = keyframes`
  from{transform: rotate(-90deg) scale(0.5);}
  to{transform: rotate(270deg) scale(0.5);}
`;

// Here we create a component that will rotate everything we pass in over two seconds
const Spinner = styled.div`
  display: inline;
  animation: ${spin};
  animation-duration: 800ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
`;

const Loader = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  background-color: #fafafa;
  border-radius: 10px;
  box-shadow: 0px 10px 25px -5px rgb(0, 0, 0);
`;
const Wraper = styled.div`
  width: 100vw;
  height: 100vh;
  display: grid;
  align-items: center;
  justify-items: center;
  color: ${primaryColor};
  transition: 500ms ease-out;
`;

export default function Loading() {
  return (
    <Wraper>
      <Loader>
        <h1 style={{ paddingTop: 30 }}>Loading Books...</h1>

        <Spinner>
          <img src={spinner} alt="Loading Books..." />
        </Spinner>
      </Loader>
    </Wraper>
  );
}
