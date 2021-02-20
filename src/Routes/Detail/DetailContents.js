import Loader from "Components/Loader";
import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { Link, Route, withRouter } from "react-router-dom";
import Overview from "Components/Overview";
import MovieEpisode from "Components/MovieEpisode";
import ShowEpisode from "Components/ShowEpisode";
import Help from "Components/Help";
import Creadit from "Components/Creadit";
import Review from "Components/Review";

const Container = styled.div`
  position: relative;
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
  margin-left: 15px;
`;

const Title = styled.div`
  font-family: "Reggae One", cursive;
  font-size: 60px;
  margin: 40px 0px;
  font-weight: 600;
`;

const VoteContainer = styled.div`
  position: absolute;
  right: 30px;
  top: 120px;
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
  margin-bottom: 10px;
  width: 100%;
`;

const Item = styled.div`
  margin-right: 20px;
  & span {
    margin-right: 10px;
  }
`;

const RuntimeBtn = styled.button`
  all: unset;
  padding: 3px;
  background: #c6ffdd;
  background: -webkit-linear-gradient(to right, #f7797d, #fbd786, #c6ffdd);
  background: linear-gradient(to right, #f7797d, #fbd786, #c6ffdd);
  color: black;
  border-radius: 10px;
`;
const Tab = styled.div`
  display: flex;
`;

const TabTitle = styled.h2`
  margin-right: 40px;
  font-size: 30px;
  font-family: "Nunito", sans-serif;
  &:hover {
    border-bottom: 2px solid red;
  }
`;

const DetailContents = ({
  props: {
    location: { pathname },
  },
  result,
  loading,
  error,
}) => {
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
              {result.first_air_date
                ? result.first_air_date.substring(0, 4)
                : result.release_date && result.release_date.substring(0, 4)}
            </Item>
            <Item>
              {result.seasons
                ? result.seasons.map((season) => <span>{season.name}</span>)
                : "First Season"}
            </Item>
            <RuntimeBtn>
              {result.episode_run_time && result.episode_run_time
                ? result.episode_run_time
                : result.runtime && result.runtime}
              minutes
            </RuntimeBtn>
          </ItemContainer>

          <Tab>
            <Link
              to={
                isMovie
                  ? `/movie/${result.id}/overview`
                  : `/show/${result.id}/overview`
              }
            >
              <TabTitle>Overview</TabTitle>
            </Link>
            <Link
              to={
                isMovie
                  ? `/movie/${result.id}/movieepisode`
                  : `/show/${result.id}/episode`
              }
            >
              <TabTitle>{isMovie ? "MovieEpisode" : "ShowEpisode"}</TabTitle>
            </Link>
            <Link
              to={
                isMovie ? `/movie/${result.id}/help` : `/show/${result.id}/help`
              }
            >
              <TabTitle>Help</TabTitle>
            </Link>

            <Link
              to={
                isMovie
                  ? `/movie/${result.id}/creadit`
                  : `/show/${result.id}/creadit`
              }
            >
              <TabTitle>Creadit</TabTitle>
            </Link>

            <Link
              to={
                isMovie
                  ? `/movie/${result.id}/review`
                  : `/show/${result.id}/review`
              }
            >
              <TabTitle>Review</TabTitle>
            </Link>
          </Tab>

          <Route
            path={isMovie ? `/movie/:id/overview` : `/show/:id/overview`} //overview
            component={Overview}
          />

          <Route path="/movie/:id/movieepisode" component={MovieEpisode} />

          <Route path="/show/:id/episode" component={ShowEpisode} />

          <Route
            path={isMovie ? `/movie/:id/help` : `/show/:id/help`}
            component={Help}
          />

          <Route
            path={isMovie ? `/movie/:id/creadit` : `/show/:id/creadit`}
            component={Creadit}
          />

          <Route
            path={isMovie ? `/movie/:id/review` : `/show/:id/review`}
            component={Review}
          />
        </Container>
      )}
    </>
  );
};

export default DetailContents;
