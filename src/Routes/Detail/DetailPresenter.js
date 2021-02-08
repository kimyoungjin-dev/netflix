import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import { Helmet, HelmetProvider } from "react-helmet-async";

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
  height: 80%;
  margin-right: 30px;
  border-radius: 5px;
`;

const Data = styled.div`
  margin-left: 25px;
  font-size: 18px;
  width: 70%;
`;

const Title = styled.h3`
  font-size: 32px;
  margin-bottom: 20px;
`;

const ItemContainer = styled.div`
  margin-bottom: 30px;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0px 15px;
`;

const OverView = styled.p`
  font-size: 14px;
  opacity: 0.6;
  line-height: 1.5;
`;

const Vote = styled.span`
  color: yellow;
  font-size: 14px;
`;

//https://www.imdb.com/title/tt2948372//
const DbButtion = styled.a`
  all: unset;
  background-color: white;
  margin-left: 20px;
  margin-top: 10px;
  color: black;
  padding: 2px;
  border-radius: 3px;
  cursor: pointer;
`;

const DetailPresenter = ({ result, loading, error }) => {
  {
    console.log(result);
  }
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
                <Item>
                  {`${
                    result.release_date
                      ? result.release_date.substring(0, 4)
                      : result.first_air_date.substring(0, 4)
                  }년`}
                </Item>
                <Divider>•</Divider>
                <Item>
                  {`${
                    result.runtime ? result.runtime : result.episode_run_time[0]
                  }분`}
                </Item>
                <Divider>•</Divider>
                <Item>
                  {result.genres &&
                    result.genres.map((genre, index) =>
                      index === result.genres.length - 1
                        ? genre.name
                        : `${genre.name} / `
                    )}
                </Item>
                <Divider>•</Divider>
                <Vote>
                  {Math.floor(result.vote_average)
                    ? "✪".repeat(Math.floor(result.vote_average))
                    : "1"}
                </Vote>
                <DbButtion
                  onClick={() =>
                    (window.location = `https://www.imdb.com/title/${
                      result && result.imdb_id && result.imdb_id
                    }`)
                  }
                >
                  imdb
                </DbButtion>
              </ItemContainer>
              <OverView>{result.overview}..</OverView>
            </Data>
          </Content>
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
