import { movieApi, tvApi } from "api";
import React, { useEffect, useState } from "react";
import Loader from "Components/Loader";
import styled from "styled-components";
import { RiMovieLine } from "react-icons/ri";
import Massage from "./Massage";

const Container = styled.div``;

const Contents = styled.div``;

const Description = styled.h2`
  font-size: 20px;
  margin-top: 5px;
  line-height: 1.2;
  margin-bottom: 5px;
`;

const TitleAContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 14px;
`;

const Title = styled.span`
  font-size: 20px;
  color: gold;
  opacity: 0.7;
`;

const Content = styled.span`
  font-size: 14px;
  opacity: 0.7;
  margin-left: 20px;
`;

const Genre = styled.span`
  font-size: 20px;
  opacity: 0.7;
  margin-right: 10px;
`;

const YoutubeContainer = styled.div`
  display: flex;
`;

const YoutubeContents = styled.div`
  margin-right: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Site = styled.div`
  font-size: 20px;
  opacity: 0.7;
  color: black;
  font-weight: bold;
  display: flex;
  & svg {
    margin-right: 10px;
  }
`;

const Name = styled.div`
  margin-top: 10px;
`;

const Type = styled.div`
  opacity: 0.7;
  margin-top: 5px;
  text-align: center;
`;

const OverviewContainer = (props) => {
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
          <Contents>
            <Description>
              {`${
                result && result.overview && result.overview.substring(0, 500)
              }..`}
            </Description>

            <TitleAContent>
              <Title>Created</Title>
              <Content>
                {result && result.production_companies.map((i) => i.name)}
              </Content>
            </TitleAContent>

            <TitleAContent>
              <Title>Producer</Title>
              <Content>
                {result &&
                  result.production_companies.map((e) => e.origin_country)}
              </Content>
            </TitleAContent>

            <TitleAContent>
              <Title>Genres</Title>
              <Content>
                {result &&
                  result.genres.map((genre, index) => (
                    <Genre key={index}>{genre.name}</Genre>
                  ))}
              </Content>
            </TitleAContent>
          </Contents>
          <YoutubeContainer>
            {result.videos.results.map((i) => (
              <a
                key={i.id}
                target="_blank"
                href={`https://youtube.com/watch?v=${i.key}`}
              >
                <YoutubeContents>
                  <Site>
                    <RiMovieLine />
                    {i.site}
                  </Site>
                  <Name>{i.name}</Name>
                  <Type>{i.type}</Type>
                </YoutubeContents>
              </a>
            ))}
          </YoutubeContainer>
          {error && <Massage color="red" text={error} />}
        </Container>
      )}
    </>
  );
};

export default OverviewContainer;
