import React from "react";
import styled from "styled-components";

const Skills = () => {
  return (
    <Wrapper>
      <Tab>Javascript</Tab>
      <Tab>React</Tab>
      <Tab>HTML</Tab>
      <Tab>CSS</Tab>
      <Tab>Emotion Components</Tab>
      <Tab>Styled Components</Tab>
      <Tab>JQuery</Tab>
    </Wrapper>
  );
};

export default Skills;
const Wrapper = styled.div`
  padding: 20px;
`;
const Tab = styled.div`
  margin: 0 0 10px;
  padding: 10px 20px;
  border-radius: 3px;
  background-color: #393a44;
`;
