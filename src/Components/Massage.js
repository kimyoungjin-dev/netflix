import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const Text = styled.span`
  font-size: 24px;
  margin: 20px 0px;
  color: ${(props) => props.color};
`;

const HomeButton = styled.button`
  all: unset;
  color: white;
  background-color: gray;
  border-radius: 4px;
  border: 1px solid white;
  opacity: 0.8;
  width: 120px;
  height: 40px;
  display: flex;
  text-align: center;
  justify-content: center;
  font-size: 17px;
  align-items: center;
  margin-top: 30px;
`;

const Massage = ({ color, text }) => {
  const history = useHistory();
  const homeButton = () => {
    history.push("/");
  };
  return (
    <Container>
      <Text color={color}>{text}</Text>
      <Text>we were unable to porcess your request</Text>
      <Text>
        Please go to the Netflix home page by clicking the button below.
      </Text>
      <HomeButton onClick={homeButton}>NetFlix</HomeButton>
    </Container>
  );
};

Massage.propTypes = {
  color: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default Massage;
