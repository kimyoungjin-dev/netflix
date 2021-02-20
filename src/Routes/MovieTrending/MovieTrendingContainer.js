import { trending } from "api";
import React, { useEffect, useState } from "react";
import MovieTrendingPresenter from "./MovieTrendingPresenter";

const MovieTrendingContainer = () => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getResult = async () => {
    try {
      const {
        data: { results },
      } = await trending.movieTrending();
      setResult(results);
    } catch (error) {
      setError("Movie information cannot be loaded(:");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getResult();
  }, []);

  return (
    <div>
      <MovieTrendingPresenter result={result} loading={loading} error={error} />
    </div>
  );
};

export default MovieTrendingContainer;
