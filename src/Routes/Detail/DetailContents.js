import Loader from "Components/Loader";
import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { Link, Route, withRouter } from "react-router-dom";
import Overview from "./Overview";
import MovieEpisode from "./MovieEpisode";
import Episode from "./Episode";
import Help from "./Help";
import OverviewPresenter from "./Overview";

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
`;

const NetflexOriginal = styled.div`
  font-family: "Oswald", sans-serif;
  display: flex;
`;

const Netflex = styled.div`
  font-size: 70px;
`;

const Original = styled.div`
  font-size: 70px;
  opacity: 0.6;
  margin-left: 10px;
`;

const Title = styled.div`
  font-family: "Reggae One", cursive;
  font-size: 60px;
  margin-top: 20px;
  margin-bottom: 40px;
  font-weight: 600;
`;

const VoteContainer = styled.div`
  position: absolute;
  right: 30px;
  top: px;
  display: flex;
  font-size: 55px;
`;

const Vote = styled.div``;

const VoteIcon = styled.span`
  color: yellow;
  margin-left: 5px;
`;

const ItemContainer = styled.div`
  opacity: 0.6;
  font-size: 20px;
  margin-right: 10px;
  display: flex;
`;

const Item = styled.div`
  margin-right: 10px;
  margin-bottom: 10px;
`;

const Tab = styled.div`
  display: flex;
  opacity: 0.8;
  padding: 5px;
`;

const TabTitle = styled.h2`
  opacity: 0.7;
  margin-right: 40px;
  font-size: 30px;
  font-family: "Nunito", sans-serif;
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
`;

const DetailContents = withRouter(
  ({ location: { pathname }, result, loading, error }) => {
    const isMovie = pathname.includes("movie");

    return (
      <>
        {loading ? (
          <Loader />
        ) : (
          <Container>
            <NetflexOriginal>
              <Netflex>Netflex</Netflex>
              <Original>Original</Original>
            </NetflexOriginal>
            <Title>
              {result && result.original_name
                ? result.original_name
                : result.original_title}
            </Title>
            <VoteContainer>
              <Vote> {result.vote_average} </Vote>
              <VoteIcon>
                <AiFillStar />
              </VoteIcon>
            </VoteContainer>
            <ItemContainer>
              <Item>
                {`${
                  result.first_air_date
                    ? result.first_air_date.substring(0, 4)
                    : result.release_date && result.release_date.substring(0, 4)
                } |
              ${
                result.seasons
                  ? result.seasons.map((season) => season.name)
                  : "First Season"
              } |
              ${
                result.episode_run_time && result.episode_run_time
                  ? result.episode_run_time
                  : result.runtime && result.runtime
              }`}
              </Item>
            </ItemContainer>

            <Tab>
              <Link
                to={
                  isMovie
                    ? `/movie/${result.id}/overview`
                    : `/show/${result.id}/overview`
                }
              >
                <TabTitle
                  current={
                    pathname === isMovie
                      ? `/movie/:id/overview`
                      : `/show/:id/overview`
                  }
                >
                  Overview
                </TabTitle>
              </Link>

              <Link
                to={
                  isMovie
                    ? `/movie/${result.id}/movieepisode`
                    : `/show/${result.id}/episode`
                }
              >
                <TabTitle
                  current={
                    isMovie ? `/movie/:id/movieepisode` : `/show/:id/episode`
                  }
                >
                  {isMovie ? "MovieEpisode" : "ShowEpisode"}
                </TabTitle>
              </Link>

              <Link
                to={
                  isMovie
                    ? `/movie/${result.id}/help`
                    : `/show/${result.id}/help`
                }
              >
                <TabTitle
                  current={
                    pathname === isMovie ? `/movie/:id/help` : `/show/:id/help`
                  }
                >
                  Help
                </TabTitle>
              </Link>
            </Tab>

            <Route
              path={isMovie ? `/movie/:id/overview` : `/show/:id/overview`} //overview
              component={Overview}
            />

            <Route path="/movie/:id/movieepisode" component={MovieEpisode} />

            <Route path="/show/:id/episode" component={Episode} />

            <Route
              path={isMovie ? `/movie/:id/help` : `/show/:id/help`}
              component={Help}
            />
          </Container>
        )}
      </>
    );
  }
);

export default DetailContents;
