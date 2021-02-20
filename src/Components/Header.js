import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";

const Header = styled.header`
  position: fixed;
  top: 0;
  margin-left: 25px;
  width: 100%;
  height: 70px;
  display: flex;
  background-color: black;
  align-items: center;
  backdrop-filter: blur(8px);
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
  transition: border-bottom 0.5s ease-in-out;
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
          <Item current={pathname === "/"}>
            <SLink to="/">
              <ImageContainer>
                <Image bgImage={require("../images/Logo.png").default} />
              </ImageContainer>
            </SLink>
          </Item>

          <Item current={pathname === "/movie"}>
            <SLink to="/movie">Movie</SLink>
          </Item>

          <Item current={pathname === "/tv"}>
            <SLink to="/tv">TV 프로그램</SLink>
          </Item>

          <Item current={pathname === "/movietrending"}>
            <SLink to="/movietrending">이번주 인기영화</SLink>
          </Item>

          <Item current={pathname === "/tvtrending"}>
            <SLink to="/tvtrending">이번주 인기TV</SLink>
          </Item>

          <Item current={pathname === "/search"}>
            <SLink to="/search">Search</SLink>
          </Item>
        </List>
      </>
    </Header>
  </>
);

export default withRouter(HeaderC);
