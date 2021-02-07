import { tvApi } from "api";
import React, { useEffect, useState } from "react";
import TVPresenter from "./TVPresenter";

const TVContainer = () => {
  const [topRated, setTopRated] = useState(null);
  const [popular, setPopular] = useState(null);
  const [airingToday, setAiringToday] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getMovies = async () => {
    try {
      const {
        data: { results: topRated },
      } = await tvApi.topRated();

      const {
        data: { results: popular },
      } = await tvApi.popular();

      const {
        data: { results: airingToday },
      } = await tvApi.airingToday();
      setTopRated(topRated);
      console.log(topRated);
      setPopular(popular);
      setAiringToday(airingToday);
    } catch (error) {
      setError("Movie information cannot be loaded.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <TVPresenter
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default TVContainer;
