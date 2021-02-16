import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Massage from "Components/Massage";
import YoutubeIcon from "images/YoutubeImage.jpeg";
import { AiFillStar, AiOutlineConsoleSql } from "react-icons/ai";

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
  height: 56%;
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
  font-size: 17px;
  margin-right: 10px;
`;

const MoviMakerYoutubeContainer = styled.div`
  height: 22vh;
  margin: 8px 0px;
  width: 100%;
`;

const MovieMakerYoutubeList = styled.div`
  display: flex;
  width: 100%;
`;

const MovieMaker = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  opacity: 0.6;
  font-style: oblique;
  justify-content: space-between;
  width: 90%;
`;

const YouTubeContainer = styled.div`
  margin-left: 40px;
  margin-top: 10px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  & :last-child {
  }
`;

const YoutubeContents = styled.a`
  display: flex;
  width: 80px;
  height: 11vh;
`;

const YoutubeImage = styled.div`
  height: 60px;
  width: 60px;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  border-radius: 4px;
  margin-right: 13px;
  border-radius: 100%;
`;

const YouTubeIconImage = styled.img`
  width: 30px;
  height: 30px;
  left: -8px;
  top: -10px;
  position: absolute;
  border-radius: 100%;
`;

const SeasonsContainer = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 13.5vh;
  font-size: 14px;
`;

const SeasonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

const SeasonList = styled.div`
  :not(:first-child) {
    margin-left: 35px;
  }
`;
const SeasonName = styled.div`
  font-weight: 600;
  margin: 5px 0px;
`;

const SeasonYear = styled.div`
  opacity: 0.6;
`;

const SeasonImage = styled.img`
  height: 60px;
  width: 120px;
  border-radius: 5px;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
`;

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

              <OverView>
                {result.overview && result.overview.substring(0, 330)}..
              </OverView>

              <MoviMakerYoutubeContainer>
                <MovieMakerYoutubeList>
                  <MovieMaker>
                    <Item>
                      <ItemTitle>Production Company</ItemTitle>
                      {result.production_companies[0] &&
                        result.production_companies[0].name}
                    </Item>

                    <Item>
                      <ItemTitle>Production_countries</ItemTitle>
                      {result.production_countries[0] &&
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
                      href={`https://youtube.com/watch?v=${
                        result.videos.results[0] && result.videos.results[0].key
                      }`}
                      target="_blank"
                    >
                      <YoutubeImage
                        bgImage={
                          result.poster_path && result.poster_path
                            ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                            : require("images/YoutubeImage.jpeg")
                        }
                      />
                      <YouTubeIconImage src={YoutubeIcon} />
                    </YoutubeContents>

                    <YoutubeContents
                      href={`https://youtube.com/watch?v=${
                        result.videos.results[0] && result.videos.results[0].key
                      }`}
                      target="_blank"
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
                    </YoutubeContents>
                  </YouTubeContainer>
                </MovieMakerYoutubeList>
              </MoviMakerYoutubeContainer>

              <SeasonsContainer>
                <SeasonBox>
                  {result.seasons &&
                    result.seasons.map((season) => (
                      <>
                        <SeasonList>
                          <SeasonImage
                            bgImage={`https://image.tmdb.org/t/p/original${
                              season.poster_path && season.poster_path
                            }`}
                          />
                          <SeasonName>{season.name && season.name}</SeasonName>
                          <SeasonYear>
                            {season.air_date && season.air_date.substring(0, 4)}
                          </SeasonYear>
                        </SeasonList>
                      </>
                    ))}
                </SeasonBox>
              </SeasonsContainer>
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
