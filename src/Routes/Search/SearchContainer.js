import React, { useState } from "react";
import SearchPresenter from "./SearchPresenter";

const SearchContainer = () => {
  const [tvResults, setTvResults] = useState(null);
  const [movieResults, setMovieResults] = useState(null);
  const [SearchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <div>
      <SearchPresenter
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
