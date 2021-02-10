import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Massage from "Components/Massage";
import Poster from "Components/Poster";
import Helmet from "react-helmet";

const Container = styled.div`
  padding: 0px 20px;
`;

const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) => (
  <>
    {loading ? (
      <>
        <Helmet>
          <title>NetFlix | Home</title>
        </Helmet>
        <Loader />
      </>
    ) : (
      <Container>
        {nowPlaying && nowPlaying.length > 0 && (
          <Section title="최신 영화">
            {nowPlaying.map((movie) => (
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

        {upcoming && upcoming.length > 0 && (
          <Section title="개봉예정 영화">
            {upcoming.map((movie) => (
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

        {popular && popular.length > 0 && (
          <Section title="인기영화">
            {popular.map((movie) => (
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

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcoming: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
