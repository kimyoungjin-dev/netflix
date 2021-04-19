import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Massage from "Components/Massage";
import PageTitle from "Components/PageTitle";

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 25%;
  padding-left: 20px;
  margin-right: 40px;
`;

const Cover = styled.div`
  background-image: url(${(props) => props.bgImage});
  background-position: center;
  background-size: cover;
  position: relative;
  width: 300px;
  height: 510px;
  border-radius: 5px;
`;

const DetailPresenter = ({ result, loading, error }) => {
  return (
    <>
      {loading ? (
        <>
          <PageTitle title="MovieDetail" />
          <Loader />
        </>
      ) : result ? (
        <Container>
          <PageTitle
            title={
              result.original_title
                ? result.original_title
                : result.original_name
            }
          />
          <Cover
            bgImage={`https://image.tmdb.org/t/p/original${result.poster_path}`}
          />

          {error && <Massage color="red" text={error} />}
        </Container>
      ) : null}
    </>
  );
};

DetailPresenter.propTypes = {
  result: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};
export default DetailPresenter;
