import PropTypes from "prop-types";

const SearchPresenter = ({
  SearchTerm,
  movieResults,
  tvResults,
  loading,
  error,
}) => null;

SearchPresenter.propTypes = {
  SearchTerm: PropTypes.string,
  movieResults: PropTypes.array,
  tvResults: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};
export default SearchPresenter;
