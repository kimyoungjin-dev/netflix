import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import logo from "images/logo.webp";

const Header = styled.header`
  position: fixed;
  top: 0;
  margin-left: 20px;
  width: 100%;
  height: 50px;
  display: flex;
  background-color: black;
  align-items: center;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  z-index: 10;
  font-size: 20px;
`;

const Logo = styled.div`
  & img {
    width: 120px;
    height: 50px;
    cursor: pointer;
  }
`;

const List = styled.ul`
  display: flex;
  width: 33%;
  justify-content: space-around;
`;

const Item = styled.li`
  width: 102px;
  height: 50px;

  text-align: center;
  transition: border-bottom 0.5s ease-in-out;
  border-bottom: 4px solid
    ${(props) => (props.current ? "white" : "transparent")};
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
        <Link to="/">
          <Logo>
            <img src={logo} />
          </Logo>
        </Link>
        <List>
          <Item current={pathname === "/"}>
            <SLink to="/">홈</SLink>
          </Item>
          <Item current={pathname === "/tv"}>
            <SLink to="/tv">TV 프로그램</SLink>
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
