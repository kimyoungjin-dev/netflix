import React from "react";
import styled from "styled-components";
import { BiRocket } from "react-icons/bi";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const ICon = styled.span`
  font-size: 50px;
`;

const Loader = () => {
  return (
    <Container>
      <ICon role="text" aria-label="loading">
        <BiRocket />
      </ICon>
    </Container>
  );
};

export default Loader;
