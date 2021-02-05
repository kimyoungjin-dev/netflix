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
    const data = await movieApi.nowPlaying();
    console.log(data);
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
