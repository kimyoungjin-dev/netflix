import PropTypes from "prop-types";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import Section from "Components/Section";
import Loader from "Components/Loader";
import Massage from "Components/Massage";
import Poster from "Components/Poster";
import Helmet from "react-helmet";

const Container = styled.div`
  width: 100%;
`;

const Form = styled.form`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20px;
`;

const Input = styled.input`
  all: unset;
  font-size: 20px;
  padding: 10px;
  border: 1px solid white;

  &:hover {
    border: 1px solid white;
    opacity: 0.5;
  }
  &::placeholder {
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const SearchButton = styled.button`
  all: unset;
  margin-left: 20px;
  margin-top: 5px;
  font-size: 30px;
  color: white;
`;

const SearchPresenter = ({
  handdleSumbit,
  SearchTerm,
  onChange,
  movieResults,
  tvResults,
  loading,
  error,
}) => (
  <>
    <Helmet>
      <title>Search | NetFlix</title>
    </Helmet>

    <Container>
      <Form onSubmit={handdleSumbit}>
        <Input
          onChange={onChange}
          value={SearchTerm}
          placeholder="Search Movie or tv Show!"
        />
        <SearchButton>
          <AiOutlineSearch type="submit" />
        </SearchButton>
      </Form>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Container>
            {movieResults && movieResults.length > 0 && (
              <Section title="MovieResults">
                {movieResults.map((movie) => (
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

            {tvResults && tvResults.length > 0 && (
              <Section title="TvResults">
                {tvResults.map((show) => (
                  <Poster
                    key={show.id}
                    id={show.id}
                    title={show.original_name}
                    year={show.first_air_date}
                    isMovie={false}
                    imgUrl={show.poster_path}
                  />
                ))}
              </Section>
            )}
          </Container>
        </>
      )}
      {error && <Massage color="red" text={error} />}

      {movieResults &&
        tvResults &&
        movieResults.length === 0 &&
        tvResults.length === 0 && (
          <Massage
            color="yellow"
            text=" No results were found for your search"
          />
        )}
    </Container>
  </>
);

SearchPresenter.propTypes = {
  SearchTerm: PropTypes.string,
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  handdleSumbit: PropTypes.func.isRequired,
};
export default SearchPresenter;
