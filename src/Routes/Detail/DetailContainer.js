import { movieApi, tvApi } from "api";
import React, { useEffect, useState } from "react";
import DetailPresenter from "./DetailPresenter";
import styled from "styled-components";
import Backdrop from "./Backdrop";
import DetailContents from "./DetailContents";

const Container = styled.div`
  display: flex;
`;

const DetailContainer = (props) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [good, setGood] = useState(1);
  const getDetail = async () => {
    const {
      history: { push },
      match: {
        params: { id },
      },
    } = props;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      return push("/");
    }

    const {
      location: { pathname },
    } = props;
    const isMovie = pathname.includes("movie");

    try {
      if (isMovie) {
        const { data: result } = await movieApi.movieDetail(id);
        setResult(result);
      } else {
        const { data: result } = await tvApi.showDetail(id);
        setResult(result);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDetail();
  }, []);
  return (
    <Container>
      <Backdrop result={result} loading={loading} error={error} />
      <DetailPresenter result={result} loading={loading} error={error} />
      <DetailContents
        result={result}
        loading={loading}
        error={error}
        props={props}
      />
    </Container>
  );
};

export default DetailContainer;
