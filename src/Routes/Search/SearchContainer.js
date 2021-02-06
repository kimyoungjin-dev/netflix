import { movieApi } from "api";
import React, { useEffect, useState } from "react";
import SearchPresenter from "./SearchPresenter";

const SearchContainer = () => {
  const [tvResults, setTvResults] = useState(null);
  const [movieResults, setMovieResults] = useState(null);
  const [SearchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handdleSumbit = (event) => {
    event.preventDefault();
    if (SearchTerm !== "") {
      SearchByTerm();
    }
    setSearchTerm("");
  };

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setSearchTerm(value);
  };

  const SearchByTerm = async () => {
    setLoading(true);
    try {
      const {
        data: { results: movieResults },
      } = await movieApi.search(SearchTerm);
      const {
        data: { results: tvResults },
      } = await movieApi.search(SearchTerm);
      setMovieResults(movieResults);
      setTvResults(tvResults);
    } catch (error) {
      setError("Movie information cannot be loaded.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <SearchPresenter
        onChange={onChange}
        handdleSumbit={handdleSumbit}
        SearchTerm={SearchTerm}
        movieResults={movieResults}
        tvResults={tvResults}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default SearchContainer;
