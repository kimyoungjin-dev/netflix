import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { movieApi, tvApi } from "api";
import { AiFillStar } from "react-icons/ai";
import Loader from "./Loader";
import Massage from "./Massage";

const Container = styled.div``;

const Contents = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 20px;
  flex-direction: column;
  & svg {
    margin-right: 5px;
    font-size: 30px;
    color: orange;
  }
`;

const Author = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin-right: 5px;
`;

const Content = styled.div`
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 17px;
`;

const CreatedAt = styled.span`
  font-size: 12px;
  opacity: 0.6;
`;

const Url = styled.a`
  font-size: 14px;
  opacity: 0.6;
  margin-bottom: 5px;
`;

const Rating = styled.span`
  display: flex;
  align-items: center;
  font-size: 18px;
`;

const Review = (props) => {
  const [review, setReview] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  console.log(review, loading);

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
          data: { results: review },
        } = await movieApi.review(id);
        setReview(review);
      } else {
        const {
          data: { results: review },
        } = await tvApi.review(id);
        setReview(review);
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
          {review
            .filter((v, index) => index < 3)
            .map((movie) => (
              <Contents key={movie.id}>
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Author>Writer : {movie.author}</Author>
                  <Rating>
                    <AiFillStar size="14" />
                    <span style={{ marginRight: 10 }}>
                      {movie.author_details.rating} rating
                    </span>
                  </Rating>
                  <CreatedAt>{movie.created_at.substring(0, 10)}</CreatedAt>
                </div>
                <Content>{movie.content}</Content>
                <Url href={movie.url} target="_blank">
                  리뷰 : {movie.url}
                </Url>
              </Contents>
            ))}
          {error && <Massage color="red" text={error} />}
        </Container>
      )}
    </>
  );
};

export default Review;
