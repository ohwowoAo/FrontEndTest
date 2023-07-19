import React from "react";
import styled from "styled-components";
const Project = () => {
  return (
    <Wrapper>
      <ImgTag src={process.env.PUBLIC_URL + "/img/project1.png"} alt="" />
      <ImgTag src={process.env.PUBLIC_URL + "/img/project3.png"} alt="" />
      <ImgTag src={process.env.PUBLIC_URL + "/img/project2.png"} alt="" />
    </Wrapper>
  );
};

export default Project;
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 15px;
  padding: 20px;
`;
const ImgTag = styled.img`
  width: 100%;
  border-radius: 8px;
`;
