import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import { Helmet, HelmetProvider } from "react-helmet-async";
import Massage from "Components/Massage";

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 25%;
  padding-left: 20px;
  margin-right: 40px;
`;

const CoverContainer = styled.div`
  width: 400px;
  height: 100%;
`;

const Cover = styled.div`
  background-image: url(${(props) => props.bgImage});
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 80%;
  position: relative;
`;

const PosterTitle = styled.div`
  font-size: 50px;
`;

const Resume = styled.h1``;

const SubResume = styled.span`
  font-size: 25px;
`;

const LastEpisode = styled.h3`
  margin-top: 10px;
  color: auto;
  opacity: 0.6;
  font-size: 18px;
  width: 100%;
  height: 13.5%;
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
              {result && result.tagline && result.tagline}
            </LastEpisode>
          </CoverContainer>

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
