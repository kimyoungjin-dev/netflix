import PropTypes from "prop-types";
import styled from "styled-components";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Massage from "Components/Massage";

const Container = styled.div`
  padding: 0px 20px;
`;

const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      {nowPlaying && nowPlaying.length > 0 && (
        <Section title="Now Play">
          {nowPlaying.map((movie) => (
            <span>{movie.title}</span>
          ))}
        </Section>
      )}

      {upcoming && upcoming.length > 0 && (
        <Section title="UpComing">
          {upcoming.map((movie) => (
            <span>{movie.title}</span>
          ))}
        </Section>
      )}

      {popular && popular.length > 0 && (
        <Section title="Popular">
          {popular.map((movie) => (
            <span>{movie.title}</span>
          ))}
        </Section>
      )}
      {error && <Massage color="red" text={error} />}
    </Container>
  );

HomePresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcoming: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
