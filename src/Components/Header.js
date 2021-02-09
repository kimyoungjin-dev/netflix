import React from "react";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import logo from "images/logo.webp";

const Header = styled.header`
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  background-color: black;
  z-index: 10;
  font-size: 13px;
  box-shadow: 0px 1px 5px 2px rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
`;

const Logo = styled.div`
  & img {
    width: 80px;
    height: 50px;
    cursor: pointer;
  }
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width: 80px;
  height: 50px;
  text-align: center;
  transition: border-bottom 0.5s ease-in-out;
  border-bottom: 5px solid
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
            <SLink to="/">Movies</SLink>
          </Item>
          <Item current={pathname === "/tv"}>
            <SLink to="/tv">tv</SLink>
          </Item>
          <Item current={pathname === "/search"}>
            <SLink to="/search">search</SLink>
          </Item>
        </List>
      </>
    </Header>
  </>
);

export default withRouter(HeaderC);
