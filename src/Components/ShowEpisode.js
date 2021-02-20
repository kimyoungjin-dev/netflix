import React, { useState, useEffect } from "react";
import Loader from "Components/Loader";
import { Link, Route } from "react-router-dom";
import styled from "styled-components";
import { VscTriangleDown } from "react-icons/vsc";
import Season from "Components/Season";
import { movieApi, tvApi } from "api";
import Massage from "./Massage";

const Container = styled.div`
  color: white;
  font-size: 18px;
`;

const Contents = styled.div``;

const Description = styled.h2`
  font-size: 20px;
  margin: 20px 0px;
  line-height: 1.5;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
`;

const EpisodeAnecdotes = styled.div`
  width: 99%;
  display: flex;
`;

const EpisodeBox = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const List = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

const Title = styled.div`
  font-size: 23px;
`;

const TitleColor = styled.span`
  margin-left: 9px;
  opacity: 0.7;
  margin-top: 3px;
`;

const LastOverview = styled.div`
  display: flex;
  flex-direction: column;
  height: 20vh;
`;

const LastOverviewTitle = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;

const LastPostContainer = styled.div`
  width: 20%;
`;

const Image = styled.div`
  border-radius: 10px;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  width: 100%;
`;

const SeasonContainer = styled.div``;

const SeansonTitleIcon = styled.div`
  display: flex;
`;

const SeasonTitle = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
`;

const SeasonIcon = styled.span`
  margin-left: 5px;
`;

const EpisodeContainer = (props) => {
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
          <Contents>
            <Description>
              {result && result.overview && result.overview.substring(0, 300)}
            </Description>
            <EpisodeAnecdotes>
              <EpisodeBox>
                <List>
                  <Title>Next Episode Air date</Title>
                  <TitleColor>
                    {result && result.next_episode_to_air
                      ? result.next_episode_to_air.air_date
                      : "Not View"}
                  </TitleColor>
                </List>

                <List>
                  <Title>Season Number</Title>
                  <TitleColor>
                    Next Season
                    {result.next_episode_to_air
                      ? result.next_episode_to_air.season_number
                      : result.number_of_seasons}
                  </TitleColor>
                </List>

                <List>
                  <Title>Last Episode to air date</Title>
                  <TitleColor>
                    {result &&
                      result.last_episode_to_air &&
                      result.last_episode_to_air.air_date}
                  </TitleColor>
                </List>
              </EpisodeBox>
              <EpisodeBox>
                <LastOverview>
                  <LastOverviewTitle>마지막회 줄거리</LastOverviewTitle>
                  <TitleColor>
                    {`${
                      result &&
                      result.last_episode_to_air.overview.substring(0, 300)
                    }...`}
                  </TitleColor>
                </LastOverview>
              </EpisodeBox>

              <LastPostContainer>
                <Image
                  bgImage={`https://image.tmdb.org/t/p/original${
                    result && result.backdrop_path && result.backdrop_path
                  }`}
                />
              </LastPostContainer>
            </EpisodeAnecdotes>
            <Link to={`/show/${result.id}/episode/season`}>
              <SeasonContainer>
                <SeansonTitleIcon>
                  <SeasonTitle>All seasons View</SeasonTitle>
                  <SeasonIcon>
                    <VscTriangleDown />
                  </SeasonIcon>
                </SeansonTitleIcon>
              </SeasonContainer>
            </Link>
            <Route component={Season} path="/show/:id/episode/season" />
          </Contents>
          {error && <Massage color="red" text={error} />}
        </Container>
      )}
    </>
  );
};

export default EpisodeContainer;
