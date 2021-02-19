import Loader from "Components/Loader";
import React from "react";
import { Link, Route, withRouter } from "react-router-dom";
import styled from "styled-components";
import { VscTriangleDown } from "react-icons/vsc";
import Season from "./Season";

const Container = styled.div`
  height: 36vh;
  font-size: 17px;
  color: white;
`;

const Contents = styled.div``;

const Description = styled.h2`
  font-size: 24px;
  margin: 20px 0px;
  line-height: 1.5;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
`;

const EpisodeAnecdotes = styled.div`
  width: 95%;
  height: 20vh;
  display: flex;
`;

const Left = styled.div`
  width: 40%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const List = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

const Title = styled.div`
  color: red;
  opacity: 0.7;
  font-size: 20px;
`;

const TitleColor = styled.span`
  margin-left: 9px;
  opacity: 0.7;
  margin-top: 3px;
`;

const LastOverview = styled.div`
  display: flex;
  flex-direction: column;
  height: 20vh;
`;

const LastOverviewTitle = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;

const LastPostContainer = styled.div`
  width: 20%;
`;

const ImageContainer = styled.div`
  height: 100%;
  width: 100%;
`;

const Image = styled.div`
  border-radius: 10px;
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  height: 100%;
  width: 100%;
`;

const SeasonContainer = styled.div``;

const SeansonTitleIcon = styled.div`
  display: flex;
`;

const SeasonTitle = styled.h2`
  font-size: 20px;
  font-family: "Roboto", sans-serif;
`;

const SeasonIcon = styled.span`
  margin-left: 5px;
`;

const EpisodePresenter = withRouter(
  ({ result, history: { push }, location: { pathname }, loading }) => {
    const isShow = pathname.includes("show");

    return (
      <>
        {loading ? (
          <Loader />
        ) : (
          <Container>
            <Contents>
              <Description>
                {result && result.overview && result.overview.substring(0, 300)}
              </Description>
              <EpisodeAnecdotes>
                <Left>
                  <List>
                    <Title>Next Episode Air date</Title>
                    <TitleColor>
                      {result && result.next_episode_to_air
                        ? result.next_episode_to_air.air_date
                        : "Not View"}
                    </TitleColor>
                  </List>

                  <List>
                    <Title>Season Number</Title>
                    <TitleColor>
                      Next Season
                      {result.next_episode_to_air
                        ? result.next_episode_to_air.season_number
                        : result.number_of_seasons}
                    </TitleColor>
                  </List>

                  <List>
                    <Title>Last Episode to air date</Title>
                    <TitleColor>
                      {result &&
                        result.last_episode_to_air &&
                        result.last_episode_to_air.air_date}
                    </TitleColor>
                  </List>

                  {console.log.result}
                </Left>
                <Left>
                  <LastOverview>
                    <LastOverviewTitle>마지막회 줄거리</LastOverviewTitle>
                    <TitleColor>
                      {`${
                        result &&
                        result.last_episode_to_air.overview.substring(0, 300)
                      }...`}
                    </TitleColor>
                  </LastOverview>
                </Left>

                <LastPostContainer>
                  <ImageContainer>
                    <Image
                      bgImage={`https://image.tmdb.org/t/p/original${
                        result && result.backdrop_path && result.backdrop_path
                      }`}
                    />
                  </ImageContainer>
                </LastPostContainer>
              </EpisodeAnecdotes>
              {console.log(result)}
              <Link
                to={
                  isShow
                    ? `/show/${result.id}/episode/season`
                    : alert("제공된 Episode가 없습니다")
                }
              >
                <SeasonContainer>
                  <SeansonTitleIcon>
                    <SeasonTitle>All seasons View</SeasonTitle>
                    <SeasonIcon>
                      <VscTriangleDown />
                    </SeasonIcon>
                  </SeansonTitleIcon>
                </SeasonContainer>
              </Link>
              <Route component={Season} path="/show/:id/episode/season" />
            </Contents>
          </Container>
        )}
      </>
    );
  }
);

export default EpisodePresenter;
