import React from "react";
import styled from "styled-components";
import genericCover from "../../assets/books.svg";
import { primaryColor } from "../../constants";
import starIcon from "../../assets/star.svg";
import filledStarIcon from "../../assets/filledStar.svg";

const BookInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.4);
`;

const BookFront = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: white;
  color: black;
  z-index: 2;
  background-image: ${props =>
    props.cover ? `url(${props.cover})` : `url(${genericCover})`};
  background-size: 120%;
  background-repeat: no-repeat;
  background-position: top;
`;

const BookBack = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-color: white;
  color: black;
  font-weight: bold;
  transform: rotateY(180deg);
  z-index: 1;
  text-align: left;
  overflow: hidden;
`;

const Wraper = styled.div`
  width: 220px;
  height: 350px;
  background-color: transparent;
  margin: 10px;
  perspective: 10000px;
  &:hover ${BookInner} {
    transform: rotateY(180deg);
  }
`;

const BookTitle = styled(props => {
  const stars = [];
  if (props.rating) {
    for (let i = 1; i <= Math.round(props.rating); i++) {
      stars.unshift(<img src={filledStarIcon} alt="star icon" />);
    }
    for (let i = Math.round(props.rating); i < 5; i++) {
      stars.push(
        <img className="filled-star" src={starIcon} alt="star icon" />
      );
    }
  } else {
    for (let i = 1; i <= 5; i++) {
      stars.push(<img src={starIcon} alt="star icon" />);
    }
  }
  return (
    <div className={props.className}>
      <div className="title">{props.title}</div>
      <div className="rating">
        {stars.map((star, index) => (
          <div style={{ display: "inline" }} key={index}>
            {star}
          </div>
        ))}
      </div>
    </div>
  );
})`
  position: absolute;
  width: 100%;
  height: 55%;
  bottom: 0px;
  background-color: ${primaryColor};
  & .title {
    margin: 20px 5px 0px 5px;
    color: white;
    font-size: 1.5em;
    font-weight: bold;
  }
  & .rating {
    margin-top: 20px;
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    & .filled-star {
      fill: yellow;
      color: yellow;
    }
  }
`;

const Description = styled.div`
  overflow: hidden;
  position: relative;
  line-height: 1em;
  text-align: justify;
  margin-right: 1em;
  padding-right: 1em;
  padding-left: 1em;
  font-size: small;
`;

const ReadMore = styled.button`
  position: absolute;
  bottom: 15px;
  transform: translateX(50%);
  right: 50%;
  background-color: rgba(0, 0, 0, 0);
  color: ${primaryColor};
  font-size: 0.9em;
  font-weight: bold;
  padding: 5px 0.6em;
  border: 5px solid ${primaryColor};
  border-radius: 3px;
  cursor: pointer;
  transition: linear 100ms;
  text-decoration: none;
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

export default function Book({
  title,
  author,
  isbn,
  rating,
  description,
  cover,
  year,
  url
}) {
  return (
    <Wraper>
      <BookInner>
        <BookFront cover={cover}>
          <BookTitle title={title} rating={rating} />
        </BookFront>
        <BookBack>
          <p style={{ lineHeight: 1, paddingLeft: "1em" }}>Author: {author}</p>
          <p
            style={{
              fontWeight: "normal",
              fontSize: "small",
              paddingLeft: "1em"
            }}
          >
            Year: {year} &nbsp; ISBN: {isbn}
          </p>

          <Description>{description}</Description>
          <ReadMore as="a" href={url}>
            Read More
          </ReadMore>
        </BookBack>
      </BookInner>
    </Wraper>
  );
}
