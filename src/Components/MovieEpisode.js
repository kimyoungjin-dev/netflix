import React, { useState, useEffect } from "react";
import { movieApi, tvApi } from "api";
import Loader from "Components/Loader";
import styled from "styled-components";
import { AiOutlineTrademarkCircle } from "react-icons/ai";
import { BiCameraMovie } from "react-icons/bi";
import Massage from "./Massage";

const Container = styled.div`
  margin-top: 10px;
`;

const Imdb = styled.a`
  border-radius: 10px;
  font-size: 20px;
  background: #fdc830;
  background: -webkit-linear-gradient(to right, #f37335, #fdc830);
  background: linear-gradient(to right, #f37335, #fdc830);
  padding: 5px;
  color: black;
`;

const OverviewTitle = styled.span`
  display: flex;
  font-size: 23px;
  margin-top: 20px;
  margin-bottom: 10px;
  & svg {
    margin-right: 5px;
  }
`;

const Overview = styled.span`
  font-size: 20px;
  display: block;
  opacity: 0.6;
  line-height: 1.5;
`;

const MovieProduction = styled.div`
  display: flex;
  margin: 20px 0px;
  font-size: 30px;

  & svg {
    margin-right: 10px;
  }
`;

const ProductionCompanies = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  line-height: 2;
  opacity: 0.7;
`;

const CompanyName = styled.h3`
  font-size: 20px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgImage});
  height: 30px;
  width: 30px;
  background-position: center center;
  background-size: cover;
  border-radius: 100%;
  margin-right: 10px;
`;

const MovieEpisode = (props) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <Imdb
            target="_blank"
            href={`https://www.imdb.com/title/${result.imdb_id}`}
          >
            Movie Preview
          </Imdb>
          <OverviewTitle>
            <AiOutlineTrademarkCircle />
            All the plot
          </OverviewTitle>
          <Overview> {`${result.overview.substring(0, 300)}...`}</Overview>
          <MovieProduction>
            <BiCameraMovie />
            MovieProduction
          </MovieProduction>
          {result.production_companies.map((movie) => (
            <ProductionCompanies key={movie.id}>
              <Image
                bgImage={`https://image.tmdb.org/t/p/original${movie.logo_path}`}
              />
              <CompanyName>{movie.name}</CompanyName>
            </ProductionCompanies>
          ))}
          {error && <Massage color="red" text={error} />}
        </Container>
      )}
    </>
  );
};

export default MovieEpisode;
