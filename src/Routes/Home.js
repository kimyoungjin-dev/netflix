import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { trending } from "api";
import Loader from "Components/Loader";
import Massage from "Components/Massage";

const Container = styled.div``;

const LoginBtn = styled.button`
  all: unset;
  color: white;
  padding: 4px;
  position: fixed;
  background-color: red;
  right: 50px;
  top: 100px;
  width: 80px;
  height: 30px;
  text-align: center;
  border-radius: 10px;
  font-size: 20px;
`;
const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`;

const Title = styled.h1`
  font-size: 80px;
  font-weight: 600;
`;

const SubTitle = styled.h2`
  font-size: 30px;
  margin: 20px 0px;
`;

const FormMessage = styled.span`
  font-size: 20px;
  opacity: 0.9;
  margin-bottom: 20px;
`;

const Form = styled.form`
  width: 600px;
  height: 70px;
  display: flex;
`;

const Input = styled.input`
  width: 75%;
`;

const SubmitInput = styled.input`
  all: unset;
  padding: 3px;
  color: white;
  background-color: red;
  width: 25%;
  font-size: 30px;
  text-align: center;
  cursor: pointer;
`;

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [movies, setMovies] = useState([]);
  const [value, setValue] = useState("");

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setValue(value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    setValue("");
  };

  const getMovies = async () => {
    try {
      const {
        data: { results: movies },
      } = await trending.movieTrending();
      setMovies(movies);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <LoginBtn>로그인</LoginBtn>

          <Contents>
            <Title>영화, TV 프로그램을 무제한으로.</Title>
            <SubTitle>
              다양한 디바이스에서 시청하세요. 언제든 해지하실 수 있습니다.
            </SubTitle>
            <FormMessage>
              시청할 준비가 되셨나요? 맴버십을 등록하거나 재시작하려면 이메일
              주소를 입력하세요
            </FormMessage>
            <Form onSubmit={onSubmit}>
              <Input
                placeholder="이메일 주소"
                type="text"
                maxLength="40"
                onChange={onChange}
                value={value}
              />
              <SubmitInput type="submit" value="시작하기" />
            </Form>
          </Contents>
          {error && <Massage color="red" text={error} />}
        </Container>
      )}
    </>
  );
};

export default Home;
