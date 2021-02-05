import React from "react";
import HomePresenter from "./HomePresenter";

const HomeContainer = () => {
  const [nowPlaying, setNowPlaying] = useState(null);
  const [popular, setPopular] = useState(null);
  const [upcoming, setUpcoming] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
