import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Massage from "Components/Massage";
import YoutubeIcon from "images/YoutubeImage.jpeg";
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

const TitleContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Title = styled.h3`
  font-size: 35px;
  margin-bottom: 20px;
`;

const Seasons = styled.span`
  font-size: 17px;
  margin-left: 10px;
`;

const SeasonName = styled.span`
  font-size: 12px;
  margin: 0px 4px;
`;
const ItemContainer = styled.div`
  margin-top: 15px;
  margin-bottom: 10px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Item = styled.span`
  font-size: 17px;
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
  font-size: 17px;
  opacity: 0.6;
  line-height: 1.5;
`;

const ItemTitle = styled.span`
  color: white;
  font-size: 26px;
  margin-right: 10px;
`;

const MovieMaker = styled.div`
  margin: 30px 0px;
  display: flex;
  flex-direction: column;
  color: white;
  opacity: 0.6;
  justify-content: space-between;
  height: 15%;
  font-style: oblique;
`;

//YouTubeContainer
const YouTubeContainer = styled.div`
  flex-direction: column;
  width: 100%;
  height: 20vh;
  display: flex;
  position: relative;
  justify-content: space-between;
  cursor: pointer;
  & :last-child {
  }
`;

const YoutubeContents = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
`;

const YoutubeImage = styled.div`
  border-radius: 20px;
  height: 110px;
  width: 110px;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  background-color: blue;
`;

const YoutubeLinkAdress = styled.div`
  margin-left: 20px;
  text-decoration: underline;
  opacity: 0.6;
  font-size: 18px;
`;

const YouTubeIconImage = styled.img`
  position: absolute;
  width: 55px;
  height: 55px;
  top: 20px;
  left: -20px;
  border-radius: 100%;
`;

//Components
const DetailPresenter = ({ result, loading, error }) => {
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
              <TitleContainer>
                <Title>
                  {result.original_title
                    ? result.original_title
                    : result.original_name}
                </Title>

                <Seasons>
                  {result.seasons &&
                    result.seasons.map((season, index) => (
                      <SeasonName key={index}>
                        {`${
                          index !== result.seasons.length - 1
                            ? `${season.name}`
                            : ` / ${season.name}`
                        }`}
                      </SeasonName>
                    ))}
                </Seasons>
              </TitleContainer>

              <ItemContainer>
                <Item>{`${
                  result.release_date
                    ? result.release_date.substring(0, 4)
                    : result.first_air_date.substring(0, 4)
                }년`}</Item>
                <Divider>•</Divider>
                <Item>
                  {`${
                    result.runtime
                      ? result.runtime
                      : result.episode_run_time &&
                        result.episode_run_time[0] &&
                        result.episode_run_time[0]
                  }분`}
                </Item>
                {result.imdb_id && (
                  <DbButtion
                    onClick={() =>
                      (window.location = `https://www.imdb.com/title/${
                        result.imdb_id && result.imdb_id
                      }`)
                    }
                  >
                    Preview
                  </DbButtion>
                )}
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
                  <ItemTitle>Production Company</ItemTitle>
                  {result.production_companies &&
                    result.production_companies[0].name}
                </Item>

                <Item>
                  <ItemTitle>Production_countries</ItemTitle>
                  {result.production_countries &&
                    result.production_countries[0].name}
                </Item>
                <Item>
                  <ItemTitle>Genres</ItemTitle>
                  {result.genres &&
                    result.genres.map((genre, index) =>
                      index === result.genres.length - 1
                        ? genre.name
                        : `${genre.name} / `
                    )}
                </Item>
              </MovieMaker>
              <YouTubeContainer>
                <YoutubeContents
                  onClick={() =>
                    (window.location = `https:www.youtube.com/watch?v=${
                      result.videos.results && result.videos.results[0].key
                    }`)
                  }
                >
                  <YoutubeImage
                    bgImage={
                      result.poster_path && result.poster_path
                        ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                        : require("images/YoutubeImage.jpeg")
                    }
                  />

                  <YoutubeLinkAdress>
                    {`https://www.youtube.com/watch?v=${
                      result.videos.results && result.videos.results[0].key
                    }`}
                  </YoutubeLinkAdress>
                </YoutubeContents>

                <YouTubeIconImage src={YoutubeIcon}></YouTubeIconImage>

                <YoutubeContents
                  onClick={() =>
                    (window.location = `https:www.youtube.com/watch?v=${
                      result.videos.results && result.videos.results[0].key
                    }`)
                  }
                >
                  <YoutubeImage
                    bgImage={
                      result && result.backdrop_path && result.backdrop_path
                        ? `https://image.tmdb.org/t/p/original${
                            result.backdrop_path && result.backdrop_path
                          }`
                        : ` https://image.tmdb.org/t/p/original${
                            result.poster_path && result.poster_path
                          }`
                    }
                  />
                  <YoutubeLinkAdress>{`https://www.youtube.com/watch?v=${
                    result.videos.results && result.videos.results[0].key
                  }`}</YoutubeLinkAdress>
                </YoutubeContents>
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
