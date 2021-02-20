import { movieApi, tvApi } from "api";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Loader from "./Loader";
import Massage from "./Massage";

const Container = styled.div``;

const CreaditContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Contents = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 15px;
  margin-bottom: 85px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 100%;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: 600;
  text-align: center;
  margin: 5px 0px;
`;

const Character = styled.div`
  font-size: 14px;
  text-align: center;
  opacity: 0.6;
`;

const Creadit = (props) => {
  const [creaditData, setCreaditData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getData = async () => {
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
        const {
          data: { cast },
        } = await movieApi.movieCreadit(id);
        setCreaditData(cast);
      } else {
        const {
          data: { cast },
        } = await tvApi.showCreadit(id);
        setCreaditData(cast);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <CreaditContainer>
            {creaditData
              .filter((v, index) => index < 20)
              .map((movie) => (
                <Contents key={movie.id}>
                  <Image
                    bgImage={
                      movie.profile_path === null
                        ? require("../images/profile.jpeg").default
                        : `https://image.tmdb.org/t/p/original${movie.profile_path}`
                    }
                  />
                  <Name>{movie.name}</Name>
                  <Character>{movie.character}</Character>
                </Contents>
              ))}
          </CreaditContainer>
          {error && <Massage color="red" text={error} />}
        </Container>
      )}
    </>
  );
};

export default Creadit;
