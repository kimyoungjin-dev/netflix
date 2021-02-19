import Loader from "Components/Loader";
import React from "react";
import { withRouter } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  height: 36vh;
  font-size: 17px;
`;

const Contents = styled.div``;

const Description = styled.h2`
  font-size: 24px;
  margin: 20px 0px;
  line-height: 1.5;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
`;

const TitleAContent = styled.div`
  display: flex;
`;

const Title = styled.span`
  font-size: 24px;
`;

const Languages = styled.span`
  margin-top: 4px;
  font-size: 20px;
  margin-bottom: 31px;
  margin-left: 10px;
  opacity: 0.8;
  & span {
    margin-left: 29px;
  }
`;

const PosterTitle = styled.div`
  font-size: 30px;
  font-family: "Open Sans", sans-serif;
`;

const PosterContainer = styled.div`
  margin-top: 10px;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Image = styled.div`
  height: 150px;
  width: 150px;
  background-position: center center;
  background-size: cover;
  background-image: url(${(props) => props.bgImage});
  margin-top: 10px;
`;

const LogoName = styled.span`
  font-size: 30px;
  text-align: center;
`;

const HelpPresenter = withRouter(({ result, error, loading }) => {
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <Contents>
            <Description>
              {result && result.overview && result.overview.substring(0, 500)}
            </Description>

            <TitleAContent>
              <Title>자막지원</Title>
              <Languages>
                {result &&
                  result.spoken_languages &&
                  result.spoken_languages.map((i, index) => (
                    <span key={index}>{i.name}</span>
                  ))}
              </Languages>
            </TitleAContent>
            <PosterTitle>Poster</PosterTitle>
            <PosterContainer>
              <ImageContainer>
                <LogoName>
                  {result && result.networks
                    ? result.networks.map((logo) => logo.name)
                    : result.title}

                  <Image
                    bgImage={`https://image.tmdb.org/t/p/original${
                      result.networks
                        ? result.networks.map((logo) => logo.logo_path)
                        : result.poster_path
                    }`}
                  />
                </LogoName>
              </ImageContainer>
            </PosterContainer>
          </Contents>
        </Container>
      )}
    </>
  );
});

export default HelpPresenter;
