import React, { useState, useEffect } from "react";
import Loader from "Components/Loader";
import styled from "styled-components";
import { movieApi, tvApi } from "api";
import Massage from "./Massage";

const Container = styled.div`
  padding-bottom: 20px;
`;

const SeasonContainer = styled.div`
  display: flex;
  height: 100%;
  flex-wrap: wrap;
`;

const SeasonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Air_date = styled.div`
  opacity: 0.8;
`;

const SeasonContents = styled.div`
  margin-right: 60px;
`;

const Title = styled.div`
  margin: 10px 0px;
  font-size: 18px;
  margin-right: 15px;
`;

const Image = styled.div`
  background-position: center center;
  background-size: cover;
  background-image: url(${(props) => props.bgImage});
  height: 100px;
  width: 180px;
  border-radius: 5px;
`;

const Season = (props) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <SeasonContainer>
            {result.seasons.map((show) => (
              <SeasonContents key={show.id}>
                <SeasonBox>
                  <Title>{show.name}</Title>
                  <Air_date>{show.air_date}</Air_date>
                </SeasonBox>
                <Image
                  bgImage={
                    show.poster_path === null
                      ? require("../images/BlankPoster.jpg").default
                      : `https://image.tmdb.org/t/p/original${show.poster_path}`
                  }
                />
              </SeasonContents>
            ))}
          </SeasonContainer>
          {error && <Massage color="red" text={error} />}
        </Container>
      )}
    </>
  );
};

export default Season;
