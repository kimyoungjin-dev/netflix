import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div``;

const Image = styled.div`
  background-image: url(${(props) => props.bgUrl});
`;

const Rating = styled.span``;

const ImageContainer = styled.div;

const Year = styled.span``;

const Title = styled.span``;

const Poster = ({ id, title, year, ismovie = false, imageUrl, rating }) => {
  return (
    <Link to={ismovie ? `/movie/${id}` : `/show/${id}`}>
      <Container>
        <ImageContainer>
          <Image bgUrl={imageUrl} />
          <Rating>
            <span role="img" aria-label="rating">
              별
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
  ismovie: PropTypes.bool,
  imageUrl: PropTypes.string.isRequired,
  rating: PropTypes.number,
};
export default Poster;
