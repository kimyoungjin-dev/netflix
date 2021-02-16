import React from "react";
import styled from "styled-components";
import { FaSpinner } from "react-icons/fa";
import LoadingImage from "images/netflixLoadingBg.jpeg";

const Container = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: black;
  color: red;
`;

const Loading = styled.img``;

const SpinContainer = styled.div`
  width: 50%;
  height: 30vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Spin = styled.span`
  font-size: 60px;
  animation: spin 4s linear infinite;
  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Loader = () => {
  return (
    <Container>
      <Loading src={LoadingImage}></Loading>
      <SpinContainer>
        <Spin>
          <FaSpinner />
        </Spin>
      </SpinContainer>
    </Container>
  );
};

export default Loader;
