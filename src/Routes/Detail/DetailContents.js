import Loader from "Components/Loader";
import React from "react";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { Link, Route } from "react-router-dom";
import Overview from "Components/Overview";
import MovieEpisode from "Components/MovieEpisode";
import ShowEpisode from "Components/ShowEpisode";
import Help from "Components/Help";
import Creadit from "Components/Creadit";
import Review from "Components/Review";
import LinkPath from "Components/LinkPath";

const Container = styled.div`
  position: relative;
  margin-left: 10px;
`;

const NetflexOriginal = styled.div`
  display: flex;
  font-weight: bold;
`;

const Netflex = styled.span`
  font-size: 70px;
`;

const Original = styled.div`
  font-size: 70px;
  margin-left: 15px;
  opacity: 0.5;
`;

const Title = styled.div`
  font-size: 40px;
  margin: 20px 0px;
  font-weight: 600;
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
    transition: 1s;
    opacity: 0.7;
  }
`;

const DetailContents = ({
  props: {
    location: { pathname },
  },
  result,
  loading,
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

          <div style={{ display: "flex", alignItems: "center" }}>
            <Title>
              {result && result.original_name
                ? result.original_name
                : result.original_title}
            </Title>

            <div
              style={{ display: "flex", alignItems: "center", marginLeft: 20 }}
            >
              <span style={{ fontSize: 30 }}> {result.vote_average} </span>
              <div>
                <AiFillStar size="30" color="yellow" />
              </div>
            </div>
          </div>

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
            path={isMovie ? LinkPath.movieOverView : LinkPath.tvOverView} //overview
            component={Overview}
          />

          <Route path={LinkPath.movieEpisode} component={MovieEpisode} />

          <Route path={LinkPath.tvEpisode} component={ShowEpisode} />

          <Route
            path={isMovie ? LinkPath.movieHelp : LinkPath.tvHelp}
            component={Help}
          />

          <Route
            path={isMovie ? LinkPath.movieCredit : LinkPath.tvCredit}
            component={Creadit}
          />

          <Route
            path={isMovie ? LinkPath.movieReview : LinkPath.tvReview}
            component={Review}
          />
        </Container>
      )}
    </>
  );
};

export default DetailContents;
