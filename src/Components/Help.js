import React, { useEffect, useState } from "react";
import Loader from "Components/Loader";
import { movieApi, tvApi } from "api";
import styled from "styled-components";
import Massage from "./Massage";

const Container = styled.div`
  height: 31vh;
`;

const Contents = styled.div``;

const Description = styled.h2`
  font-size: 20px;
  margin: 20px 0px;
  line-height: 1.5;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
`;

const TitleAContent = styled.div`
  display: flex;
  margin-bottom: 40px;
  font-size: 24px;
`;

const Title = styled.span``;

const Languages = styled.span`
  margin-left: 10px;
  opacity: 0.8;
  & span {
    margin-left: 29px;
  }
`;

const PosterTitle = styled.div`
  font-size: 30px;
  margin-right: 30px;
  display: flex;
  align-items: center;
  font-family: "Open Sans", sans-serif;
`;

const PosterContainer = styled.div`
  display: flex;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
`;

const Image = styled.div`
  width: 150px;
  height: 150px;
  background-position: center center;
  background-size: cover;
  background-image: url(${(props) => props.bgImage});
`;

const LogoName = styled.h3`
  font-size: 30px;
  text-align: center;
  margin-bottom: 20px;
`;

const Help = (props) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getDetail();
  }, []);

  const getDetail = async () => {
    const {
      history: { push },
      match: {
        params: { id },
      },
    } = props;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }

    const {
      location: { pathname },
    } = props;
    const isMovie = pathname.includes("movie");

    try {
      if (isMovie) {
        const { data: result } = await movieApi.movieDetail(id);
        setResult(result);
      } else {
        const { data: result } = await tvApi.showDetail(id);
        setResult(result);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

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
            <PosterContainer>
              <PosterTitle>Poster</PosterTitle>

              <ImageContainer>
                <LogoName>
                  {result && result.networks
                    ? result.networks.map((logo) => logo.name)
                    : result.title}
                </LogoName>
                <Image
                  bgImage={`https://image.tmdb.org/t/p/original${
                    result.networks
                      ? result.networks.map((logo) => logo.logo_path)
                      : result.poster_path
                  }`}
                />
              </ImageContainer>
            </PosterContainer>
          </Contents>
          {error && <Massage color="red" text={error} />}
        </Container>
      )}
    </>
  );
};

export default Help;
