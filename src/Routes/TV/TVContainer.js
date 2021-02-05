import React from "react";
import TVPresenter from "./TVPresenter";

const TVContainer = () => {
  const [topRated, topRated] = useState(null);
  const [popular, setPopular] = useState(null);
  const [airingToday, airingToday] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
