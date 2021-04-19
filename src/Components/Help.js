import React, { useEffect, useState } from "react";
import Loader from "Components/Loader";
import { movieApi, tvApi } from "api";
import styled from "styled-components";
import Massage from "./Massage";

const Container = styled.div``;

const Description = styled.h2`
  font-size: 17px;
  margin: 20px 0px;
  line-height: 1.2;
  padding-bottom: 20px; // --line
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
`;

const TitleAContent = styled.div`
  display: flex;
  font-size: 24px;
`;

const Help = (props) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getDetail();
  }, []);

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

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <Description>
            {result && result.overview && result.overview.substring(0, 500)}
          </Description>

          <TitleAContent>
            <span>자막지원</span>
            <div>
              {result &&
                result.spoken_languages &&
                result.spoken_languages.map((i, index) => (
                  <span key={index} style={{ marginLeft: 10 }}>
                    {i.name}
                  </span>
                ))}
            </div>
          </TitleAContent>
          {error && <Massage color="red" text={error} />}
        </Container>
      )}
    </>
  );
};

export default Help;
