import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Container = styled.div`
  font-size: 15px;
`;

const Image = styled.div`
  height: 300px;
  width: 200px;
  background-size: cover;
  background-position: center center;
  border-radius: 4px;
  transition: opacity 0.1s linear;
  background-image: url(${(props) => props.bgUrl});
`;

const ImageContainer = styled.div`
  margin: 10px 0;
  height: 300px;
  width: 200px;
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

const TitleYear = styled.div`
  width: 230px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.span`
  font-size: 14px;
`;

const Year = styled.span`
  font-size: 12px;
  color: gray;
  font-style: italic;
`;

const Poster = ({ id, title, year, imgUrl, isMovie = false }) => {
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
        </ImageContainer>

        <TitleYear>
          <Title>
            {title && title.length > 18
              ? `${title.substring(0, 18)}...`
              : title}
          </Title>
          <Year>{year && year.substring(0, 4)}</Year>
        </TitleYear>
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
