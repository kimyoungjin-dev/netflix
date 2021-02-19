import Loader from "Components/Loader";
import React from "react";
import styled from "styled-components";
import { RiMovieLine } from "react-icons/ri";

const Container = styled.div`
  height: 100vh;
  font-size: 17px;
`;

const Contents = styled.div``;

const Description = styled.h2`
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 40px;
  line-height: 1.4;
`;

const TitleAContent = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Title = styled.span`
  font-size: 24px;
`;

const Content = styled.span`
  margin-bottom: 10px;
  margin-left: 15px;
  margin-top: 5px;
  font-size: 20px;
  opacity: 0.7;
  display: flex;
`;

const Genre = styled.span`
  font-size: 24px;
  color: white;
  opacity: 0.7;
`;
const YoutubeContainer = styled.div`
  width: 100%;
  height: 300px;
  margin-top: 80px;
  display: flex;
`;

const YoutubeContents = styled.div`
  width: auto;
  margin-right: 30px;
`;

const Site = styled.div`
  color: beige;
  opacity: 0.7;
  display: flex;
  & svg {
    margin-right: 10px;
  }
`;

const Name = styled.div`
  margin: 10px 0px;
`;

const Type = styled.div`
  margin-bottom: 5px;
`;

const OverviewPresenter = ({ result, loading, error }) => {
  console.log(result);
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
        </Container>
      )}
    </>
  );
};

export default OverviewPresenter;
