import Loader from "Components/Loader";
import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const SeasonContainer = styled.div``;

const Title = styled.div`
  margin: 15px 0px;
  font-weight: 600;
  font-size: 20px;
`;

const ImageContainer = styled.div`
  height: 130px;
  width: 100%;
`;

const Image = styled.div`
  background-position: center center;
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  height: 130px;
  width: 230px;
`;

const SeasonPresenter = ({ loading, result, error }) => {
  console.log(result);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <SeasonContainer>
            {result &&
              result.seasons &&
              result.seasons.map((season, index) => (
                <Title key={index}>{season.name}</Title>
              ))}

            <ImageContainer>
              <Image
                bgImage={`https://image.tmdb.org/t/p/original${result.seasons.map(
                  (e) => e.poster_path
                )}`}
              />
            </ImageContainer>
          </SeasonContainer>
        </Container>
      )}
    </>
  );
};

export default SeasonPresenter;
