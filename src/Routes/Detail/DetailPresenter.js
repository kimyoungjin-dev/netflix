import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Massage from "Components/Massage";
import YoutubeImage from "images/YoutubeImage.jpeg";
import { AiFillStar } from "react-icons/ai";

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  padding-left: 50px;
  display: flex;
`;

const Backdrop = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  top: -30px;
  left: 0;
  background-image: url(${(props) => props.bgImage});
  background-position: center;
  background-size: cover;
  filter: blur(4px);
  opacity: 0.5;
  z-index: -1;
`;

//
const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 86%;
  margin-right: 30px;
  border-radius: 5px;
`;

const Data = styled.div`
  margin-left: 25px;
  font-size: 18px;
  width: 70%;
`;

const Title = styled.h3`
  font-size: 35px;
  margin-bottom: 20px;
`;

const ItemContainer = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Item = styled.span`
  font-size: 15px;
`;

const Vote = styled.span`
  color: yellow;
  font-size: 20px;
  margin-left: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    margin-left: 5px;
    font-size: 15px;
  }
`;

const Popularity = styled.span`
  margin-left: 10px;
  color: rgb(56, 173, 85);
`;

const DbButtion = styled.button`
  all: unset;
  background: #fdc830;
  background: -webkit-linear-gradient(to right, #f37335, #fdc830);
  background: linear-gradient(to right, #f37335, #fdc830);
  margin-left: 10px;
  color: black;
  padding: 3px;
  border-radius: 3px;
  cursor: pointer;
`;

const Divider = styled.span`
  margin: 0px 15px;
`;

const OverView = styled.p`
  font-size: 14px;
  opacity: 0.6;
  line-height: 1.5;
`;

//Center Title
const MovieMaker = styled.div`
  margin: 30px 0px;
  display: flex;
  flex-direction: column;
  color: white;
  opacity: 0.8;
  justify-content: space-between;
  height: 15%;
  font-style: oblique;
`;

//YouTubeContainer
const YouTubeContainer = styled.div`
  display: flex;
  width: 70%;
  position: relative;
  height: auto;
  justify-content: space-between;
  position: relative;
  cursor: pointer;
`;

const YouTubeLink = styled.div`
  border-radius: 20px;
  height: 150px;
  width: 200px;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
`;

const YouTubeIcon = styled.img`
  position: absolute;
  width: 40px;
  height: 40px;
  top: -10px;
  left: -9px;
  border-radius: 30%;
`;

//Components
const DetailPresenter = ({ result, loading, error }) => {
  console.log(result);
  return (
    <HelmetProvider>
      {loading ? (
        <>
          <Helmet>
            <title>Loading...</title>
          </Helmet>
          <Loader />
        </>
      ) : result ? (
        <Container>
          <Helmet>
            <title>
              {result.original_title
                ? result.original_title
                : result.original_name}
            </title>
          </Helmet>

          <Backdrop
            bgImage={`https://image.tmdb.org/t/p/original${result.backdrop_path}`}
          ></Backdrop>
          <Content>
            <Cover
              bgImage={`https://image.tmdb.org/t/p/original${result.poster_path}`}
            />
            <Data>
              <Title>
                {result.original_title
                  ? result.original_title
                  : result.original_name}
              </Title>

              <ItemContainer>
                <Item>{`${
                  result.release_date
                    ? result.release_date.substring(0, 4)
                    : result.first_air_date.substring(0, 4)
                }년`}</Item>
                <Divider>•</Divider>
                <Item>
                  {`${
                    result.runtime ? result.runtime : result.episode_run_time[0]
                  }분`}
                </Item>
                <DbButtion
                  onClick={() =>
                    (window.location = `https://www.imdb.com/title/${
                      result.imdb_id && result.imdb_id
                    }`)
                  }
                >
                  Preview
                </DbButtion>
                <Vote>
                  {result.vote_average && result.vote_average}
                  <AiFillStar />
                </Vote>
                <Popularity>
                  {`${Math.floor(result.popularity && result.popularity)} View`}
                </Popularity>
              </ItemContainer>

              <OverView>{result.overview}..</OverView>
              <MovieMaker>
                <Item>
                  {`Director :
                  ${
                    result.production_companies &&
                    result.production_companies[0].name
                  }`}
                </Item>
                <Item>
                  {`Production place
 : ${result.production_countries && result.production_countries[0].name}`}
                </Item>
                <Item>
                  {`Genres :${
                    result.genres &&
                    result.genres.map((genre, index) =>
                      index === result.genres.length - 1
                        ? genre.name
                        : `${genre.name} / `
                    )
                  }`}
                </Item>
              </MovieMaker>
              <YouTubeContainer>
                <YouTubeLink
                  bgImage={
                    result.poster_path && result.poster_path
                      ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                      : require("images/YoutubeImage.jpeg")
                  }
                  onClick={() =>
                    (window.location = `https:www.youtube.com/watch?v=${
                      result.videos &&
                      result.videos.results &&
                      result.videos.results[0].key
                    }`)
                  }
                ></YouTubeLink>

                <YouTubeLink
                  bgImage={
                    result.backdrop_path && result.backdrop_path
                      ? `https://image.tmdb.org/t/p/original${result.backdrop_path}`
                      : require("images/YoutubeImage.jpeg")
                  }
                  onClick={() =>
                    (window.location = `https:www.youtube.com/watch?v=${
                      result.videos &&
                      result.videos.results &&
                      result.videos.results[0].key
                    }`)
                  }
                >
                  <YouTubeIcon src={YoutubeImage} />
                </YouTubeLink>
              </YouTubeContainer>
            </Data>
          </Content>
          {error && <Massage color="red" text={error} />}
        </Container>
      ) : null}
    </HelmetProvider>
  );
};

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};
export default DetailPresenter;
