import Loader from "Components/Loader";
import Section from "Components/Section";
import React from "react";
import styled from "styled-components";
import Poster from "Components/Poster";
import Massage from "Components/Massage";
import PageTitle from "Components/PageTitle";

const Container = styled.div`
  padding: 0px 20px;
`;

const MovieTrendingPresenter = ({ result, error, loading }) => {
  return (
    <>
      {loading ? (
        <>
          <Loader />
          <PageTitle title="NetFlix | Popular Movies this week" />
        </>
      ) : (
        <Container>
          {result && result.length > 0 && (
            <Section title="Movie this week">
              {result.map((movie) => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  title={movie.original_title}
                  rating={movie.vote_average}
                  year={movie.release_date}
                  imgUrl={movie.poster_path}
                  isMovie={true}
                />
              ))}
            </Section>
          )}
          {error && <Massage color="red" text={error} />}
        </Container>
      )}
    </>
  );
};

export default MovieTrendingPresenter;
