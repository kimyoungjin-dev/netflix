import { trending } from "api";
import React, { useEffect, useState } from "react";
import TVTrendingPresenter from "./TVTrendingPresenter";

const TVTrendingContainer = () => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getMovies = async () => {
    try {
      const {
        data: { results },
      } = await trending.showTrending();
      setResult(results);
    } catch (error) {
      setError("TV information cannot be loaded. :(");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div>
      <TVTrendingPresenter result={result} loading={loading} error={error} />
    </div>
  );
};

export default TVTrendingContainer;
