import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { movieApi, tvApi } from "api";
import { AiFillStar } from "react-icons/ai";
import Loader from "./Loader";
import { IoListCircleSharp } from "react-icons/io5";
import Massage from "./Massage";

const Container = styled.div``;

const NoReview = styled.h1`
  font-size: 40px;
  height: 49.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Contents = styled.div`
  margin-bottom: 30px;
  display: flex;
  justify-content: center;

  flex-direction: column;
  & svg {
    margin-right: 5px;
    font-size: 30px;
    color: orange;
  }
`;

const Author = styled.h2`
  margin-top: 60px;
  font-size: 30px;
  font-weight: 600;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 50px;
  width: 50px;
  border-radius: 20px;
  margin: 10px 0px;
`;

const Content = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 24px;
`;

const CreatedAt = styled.span`
  margin: 25px 0px;
  font-size: 20px;
`;

const Url = styled.a`
  font-size: 20px;
  margin-bottom: 10px;
`;

const Rating = styled.span`
  display: flex;
  align-items: center;
  font-size: 20px;
`;

const Review = (props) => {
  const [review, setReview] = useState([]);
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
          {review.length === 0 ? (
            <NoReview>"There are no reviews at all"</NoReview>
          ) : (
            review.map((movie) => (
              <Contents key={movie.id}>
                <Author>Writer : {movie.author}</Author>
                <Image
                  bgImage={
                    movie.author_details.avatar_path === null
                      ? require("../images/profile.jpeg").default
                      : `https://image.tmdb.org/t/p/original${movie.author_details.avatar_path}`
                  }
                />
                <Content>
                  <IoListCircleSharp />
                  {movie.content}
                </Content>
                <CreatedAt>{movie.created_at.substring(0, 10)}</CreatedAt>
                <Url href={movie.url} target="_blank">
                  {movie.url}
                </Url>
                <Rating>
                  {movie.author_details.rating}
                  <AiFillStar />
                </Rating>
              </Contents>
            ))
          )}
          {error && <Massage color="red" text={error} />}
        </Container>
      )}
    </>
  );
};

export default Review;
