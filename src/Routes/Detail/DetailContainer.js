import React, { useState } from "react";
import DetailPresenter from "./DetailPresenter";

const DetailContainer = () => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  return (
    <div>
      <DetailPresenter result={result} loading={loading} error={error} />
    </div>
  );
};

export default DetailContainer;
