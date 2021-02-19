import Loader from "Components/Loader";
import React from "react";
import styled from "styled-components";
import { AiOutlineTrademarkCircle } from "react-icons/ai";
import { BiCameraMovie, BiMovie } from "react-icons/bi";

const Container = styled.div`
  margin-top: 20px;
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
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 10px;
  & svg {
    margin-right: 10px;
  }
`;

const Overview = styled.span`
  font-size: 20px;
  display: block;
  opacity: 0.6;
`;

const MovieProduction = styled.div`
  display: flex;
  margin: 20px 0px;
  font-size: 30px;

  & svg {
    margin-right: 10px;
  }
`;

const ProductionCompaniesContainer = styled.div``;

const ProductionCompanies = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  line-height: 2;
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
const MovieEpisodePresenter = ({ result, loading, error }) => {
  console.log(result);
  return (
    <div>
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
          <ProductionCompaniesContainer>
            {result.production_companies.map((movie) => (
              <ProductionCompanies key={movie.id}>
                <Image
                  bgImage={`https://image.tmdb.org/t/p/original${movie.logo_path}`}
                />
                <CompanyName>{movie.name}</CompanyName>
              </ProductionCompanies>
            ))}
          </ProductionCompaniesContainer>
        </Container>
      )}
    </div>
  );
};

export default MovieEpisodePresenter;
