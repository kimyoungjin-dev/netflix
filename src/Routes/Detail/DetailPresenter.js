import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Massage from "Components/Massage";

const Container = styled.div`
  margin-right: 10px;
  position: relative;
  height: 100vh;
  width: 50%;
  padding-left: 50px;
  display: flex;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  z-index: 1;
  height: 100%;
`;
const CoverContainer = styled.div`
  width: 400px;
  height: 100vh;
`;

const Cover = styled.div`
  background-image: url(${(props) => props.bgImage});
  background-position: center;
  background-size: cover;
  height: 80%;
  width: 100%;
  position: relative;
`;

const PosterTitle = styled.div`
  position: absolute;
  bottom: 230px;
  left: 65px;
  font-size: 50px;
`;

const Resume = styled.h2`
  margin-bottom: 10px;
`;

const SubResume = styled.span`
  font-size: 23px;
`;

const LastEpisode = styled.h3`
  margin-top: 10px;
  color: auto;
  opacity: 0.6;
  font-size: 18px;
  width: 100%;
  height: 100%;
  font-family: "Truculenta", sans-serif;
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

          <Content>
            <CoverContainer>
              <Cover
                bgImage={`https://image.tmdb.org/t/p/original${result.poster_path}`}
              />
              <PosterTitle>
                <Resume>Resume</Resume>
                <SubResume>
                  {`${
                    result.production_companies &&
                    result.production_companies[0].name.substring(0, 30)
                  }...`}
                </SubResume>
              </PosterTitle>
              <LastEpisode>
                {`${
                  result.last_episode_to_air
                    ? result.last_episode_to_air.overview &&
                      result.last_episode_to_air.overview.substring(0, 180)
                    : result.overview.substring(0, 180)
                }...`}
              </LastEpisode>
            </CoverContainer>
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
