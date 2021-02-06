import PropTypes from "prop-types";
import styled from "styled-components";
import { AiOutlineSearch } from "react-icons/ai";
import Section from "Components/Section";
import Loader from "Components/Loader";

const Container = styled.div`
  height: 40px;
  padding-right: 50px;
`;

const Form = styled.form`
  all: unset;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const Input = styled.input`
  all: unset;
  font-size: 30px;
  width: 25%;
  text-align: center;
`;

const SearchButton = styled.button`
  all: unset;
  font-size: 30px;
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
                <span>{movie.name}</span>
              ))}
            </Section>
          )}

          {tvResults && tvResults.length > 0 && (
            <Section title="TvResults">
              {tvResults.map((show) => (
                <span>{show.name}</span>
              ))}
            </Section>
          )}
        </Container>
      </>
    )}
  </Container>
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
