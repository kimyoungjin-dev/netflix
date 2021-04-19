import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import LinkPath from "./LinkPath";

const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  display: flex;
  background-color: black;
  align-items: center;
  font-size: 18px;
  z-index: 1;
`;

const List = styled.ul`
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const Item = styled.li`
  width: 150px;
  height: 50px;
  text-align: center;
  transition: 0.6s ease-in-out;
  border-bottom: 4px solid
    ${(props) => (props.current ? "white" : "transparent")};
  & :hover {
    color: gray;
    transition: 1s;
  }
`;

const ImageContainer = styled.div`
  width: 130px;
  height: 40px;
`;

const Image = styled.div`
  background-image: url(${(props) => props.bgImage});
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 100%;
`;

const SLink = styled(Link)`
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const HeaderC = ({ location: { pathname } }) => (
  <>
    <Header>
      <>
        <List>
          <Item current={pathname === LinkPath.Home}>
            <SLink to="/">
              <ImageContainer>
                <Image bgImage={require("../images/Logo.png").default} />
              </ImageContainer>
            </SLink>
          </Item>

          <Item current={pathname === LinkPath.movie}>
            <SLink to={LinkPath.movie}>Movie</SLink>
          </Item>

          <Item current={pathname === LinkPath.tv}>
            <SLink to={LinkPath.tv}>TV 프로그램</SLink>
          </Item>

          <Item current={pathname === LinkPath.movietrending}>
            <SLink to={LinkPath.movietrending}>이번주 인기영화</SLink>
          </Item>

          <Item current={pathname === LinkPath.tvtrending}>
            <SLink to={LinkPath.tvtrending}>이번주 인기TV</SLink>
          </Item>

          <Item current={pathname === LinkPath.search}>
            <SLink to={LinkPath.search}>Search</SLink>
          </Item>
        </List>
      </>
    </Header>
  </>
);

export default withRouter(HeaderC);
