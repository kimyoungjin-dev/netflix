import Loader from "Components/Loader";
import Section from "Components/Section";
import React from "react";
import styled from "styled-components";
import Poster from "Components/Poster";
import Massage from "Components/Massage";

const Container = styled.div`
  padding: 0px 20px;
`;

const TVTrendingPresenter = ({ result, error, loading }) => {
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          {result && result.length > 0 && (
            <Section title="Tv Week">
              {result.map((movie) => (
                <Poster
                  key={movie.id}
                  id={movie.id}
                  title={movie.original_title}
                  rating={movie.vote_average}
                  year={movie.release_date}
                  imgUrl={movie.poster_path}
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

export default TVTrendingPresenter;
