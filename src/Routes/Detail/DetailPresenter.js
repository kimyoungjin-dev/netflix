import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Helmet from "react-helmet";

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
  width: 50%;
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

const DetailPresenter = ({ result, loading, error }) => {
  return (
    <>
      {loading ? (
        <>
          <Helmet>
            <title>Loading | NetFlix</title>
          </Helmet>
          <Loader />
        </>
      ) : (
        <Container>
          <Helmet>
            <title>
              {result && result.original_title
                ? result.original_title
                : result && result.original_name}
            </title>
          </Helmet>

          <Backdrop
            bgImage={`https://image.tmdb.org/t/p/original${
              result && result.backdrop_path
            }`}
          ></Backdrop>
          <Content>
            <Cover
              bgImage={`https://image.tmdb.org/t/p/original${
                result && result.poster_path
              }`}
            />
            <Data>
              <Title>
                {result && result.original_title
                  ? result.original_title
                  : result && result.original_name}
              </Title>
              <ItemContainer>
                <Item>
                  {`${
                    result && result.release_date
                      ? result.release_date.substring(0, 4)
                      : result && result.first_air_date.substring(0, 4)
                  }년`}
                </Item>
                <Divider>•</Divider>
                <Item>
                  {`${
                    result && result.runtime
                      ? result.runtime
                      : result && result.episode_run_time[0]
                  }분`}
                </Item>
                <Divider>•</Divider>
                <Item>
                  {`장르 : ${
                    result &&
                    result.genres &&
                    result.genres.map((genre, index) =>
                      index === result.genres.length - 1
                        ? genre.name
                        : `${genre.name}/`
                    )
                  }`}
                </Item>
              </ItemContainer>
              <OverView>{result && result.overview}</OverView>
            </Data>
          </Content>
        </Container>
      )}
    </>
  );
};

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};
export default DetailPresenter;
