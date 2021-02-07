import { movieApi } from "api";
import React, { useEffect, useState } from "react";
import HomePresenter from "./HomePresenter";

const HomeContainer = () => {
  const [nowPlaying, setNowPlaying] = useState(null);
  const [popular, setPopular] = useState(null);
  const [upcoming, setUpcoming] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getMovies = async () => {
    try {
      const {
        data: { results: nowPlaying },
      } = await movieApi.nowPlaying();
      const {
        data: { results: popular },
      } = await movieApi.popular();
      const {
        data: { results: upcoming },
      } = await movieApi.upcoming();

      setNowPlaying(nowPlaying);
      setPopular(popular);
      setUpcoming(upcoming);
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
      <HomePresenter
        nowPlaying={nowPlaying}
        popular={popular}
        upcoming={upcoming}
        loading={loading}
        error={error}
      />
    </div>
  );
};

export default HomeContainer;
