import React from "react";
import styled from "styled-components";
import { Router, Routes, Route, Link } from "react-router-dom";
import Second from "./Second";

const App = () => {
  return (
    <>
      <Wrapper>
        <Title>코딩 테스트</Title>
        <Name>지원자: 나은정</Name>
        <Routes>
          <Route
            path="/"
            element={
              <Tab>
                <Question className="firstQ">
                  <Link to="/">1. 포트폴리오 화면 구성하기</Link>
                </Question>
                <Question>
                  <Link to="/second">2. 전달된 이미지 만들기</Link>
                </Question>
              </Tab>
            }
          />
        </Routes>
      </Wrapper>
      <Routes>
        <Route path="/second" element={<Second />} />
      </Routes>
    </>
  );
};

export default App;

const Wrapper = styled.div`
  text-align: center;
`;
const Title = styled.h1``;
const Name = styled.h3``;
const Tab = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;
const Question = styled.h3`
  width: 300px;
  height: 100px;
  line-height: 100px;
  border: 1px solid #d3d3d3;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) =>
      props.className === "firstQ" ? "#edf3c3" : "#acd8d9"};
  }
`;
