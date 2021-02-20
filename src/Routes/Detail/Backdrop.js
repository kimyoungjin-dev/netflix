import Loader from "Components/Loader";
import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const BackdropImage = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  background-image: url(${(props) => props.bgImage});
  background-position: center;
  background-size: cover;
  filter: blur(4px);
  z-index: -1;
`;

const Backdrop = ({ result, loading, error }) => {
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <BackdropImage
            bgImage={`https://image.tmdb.org/t/p/original${
              result && result.backdrop_path && result.backdrop_path
                ? result.backdrop_path
                : require("../../images/BlankPoster.jpg").default
            }`}
          ></BackdropImage>
        </Container>
      )}
    </>
  );
};

export default Backdrop;
