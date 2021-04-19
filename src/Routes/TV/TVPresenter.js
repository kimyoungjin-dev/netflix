import Loader from "Components/Loader";
import Massage from "Components/Massage";
import Poster from "Components/Poster";
import Section from "Components/Section";
import PropTypes from "prop-types";
import styled from "styled-components";
import PageTitle from "Components/PageTitle";

const Container = styled.div`
  padding: 0px 20px;
`;

const TVPresenter = ({ topRated, popular, airingToday, loading, error }) => (
  <>
    {loading ? (
      <>
        <Loader />
        <PageTitle title="NetFlix | TV Show" />
      </>
    ) : (
      <Container>
        {topRated && topRated.length > 0 && (
          <Section title="Weekly Movie">
            {topRated.map((show) => (
              <Poster
                key={show.id}
                id={show.id}
                title={show.original_name}
                year={show.first_air_date}
                isMovie={false}
                imgUrl={show.poster_path}
                rating={show.vote_average}
              />
            ))}
          </Section>
        )}

        {popular && popular.length > 0 && (
          <Section title="인기 TV">
            {popular.map((show) => (
              <Poster
                key={show.id}
                id={show.id}
                title={show.original_name}
                year={show.first_air_date}
                isMovie={false}
                imgUrl={show.poster_path}
                rating={show.vote_average}
              />
            ))}
          </Section>
        )}

        {airingToday && airingToday.length > 0 && (
          <Section title="Today on TV">
            {airingToday.map((show) => (
              <Poster
                key={show.id}
                id={show.id}
                title={show.original_name}
                year={show.first_air_date}
                isMovie={false}
                imgUrl={show.poster_path}
                rating={show.vote_average}
              />
            ))}
          </Section>
        )}
        {error && <Massage color="red" text={error} />}
      </Container>
    )}
  </>
);

TVPresenter.propTypes = {
  topRated: PropTypes.array,
  popular: PropTypes.array,
  airingToday: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};
export default TVPresenter;
