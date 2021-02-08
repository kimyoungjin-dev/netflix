import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";

const Container = styled.div`
  font-size: 15px;
`;

const Rating = styled.span`
  position: absolute;
  bottom: 0;
  right: 0;
  margin-bottom: 3px;
  opacity: 0;

  & :first-child {
    color: yellow;
    opacity: 0.9;
    font-size: 10px;
  }
`;

const Image = styled.div`
  height: 180px;
  background-size: cover;
  border-radius: 4px;
  background-position: center;
  transition: opacity 0.1s linear;
  background-image: url(${(props) => props.bgUrl});
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.4;
      border: 1px solid white;
    }
    ${Rating} {
      opacity: 0.8;
    }
  }
`;

const Title = styled.span`
  display: block;
  margin: 8px 0px;
`;

const Year = styled.span`
  color: gray;
`;

const Poster = ({ id, title, year, imgUrl, isMovie = false, rating }) => {
  return (
    <Link to={isMovie ? `/movie/${id}` : `show/${id}`}>
      <Container>
        <ImageContainer>
          <Image
            bgUrl={
              imgUrl
                ? `https://image.tmdb.org/t/p/original${imgUrl}`
                : require("../images/BlankPoster.jpg").default
            }
          />
          <Rating>
            <span>
              <AiFillStar />
            </span>
            {rating}
          </Rating>
        </ImageContainer>
        <Title>{title}</Title>
        <Year>{year}</Year>
      </Container>
    </Link>
  );
};
Poster.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string,
  imgUrl: PropTypes.string,
  isMovie: PropTypes.bool,
  rating: PropTypes.number,
};
export default Poster;
