import PropTypes from "prop-types";

const HomePresenter = ({ nowPlaying, popular, upcoming, loading, error }) =>
  null;

DetailPresenter.propTypes = {
  nowPlaying: PropTypes.array,
  popular: PropTypes.array,
  upcoming: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default HomePresenter;
