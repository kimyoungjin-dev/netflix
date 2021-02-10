import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { AiFillStar } from "react-icons/ai";
import PropTypes from "prop-types";

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
  margin: 10px 0;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.4;
      border: 1px solid white;
      transform: scale(1.2);
      transition: transform 0.5s linear;
    }
  }
`;

const Title = styled.span`
  font-size: 14px;
`;

const YearRatingContainer = styled.span`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;

const StarRating = styled.div`
  width: 27%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;

  & svg {
    color: yellow;
    opacity: 0.7;
  }
`;

const Year = styled.span`
  font-size: 12px;
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

        <Title>
          {title && title.length > 18 ? `${title.substring(0, 18)}...` : title}
        </Title>
        <YearRatingContainer>
          <Year>{year && year.substring(0, 4)}</Year>
          <StarRating>
            <AiFillStar />
            {rating}
          </StarRating>
        </YearRatingContainer>
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
