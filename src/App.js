import React from "react";
import styled from "styled-components";

const App = () => {
  return (
    <Wrapper>
      <Contents>
        <Box className="white"></Box>
        <Box className="pink"></Box>
        <Box className="black"></Box>
        <Box className="black"></Box>
        {/* <WhiteBox></WhiteBox>
        <PinkBox></PinkBox>
        <BlackBox></BlackBox>
        <BlackBox></BlackBox> */}
      </Contents>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div``;
const Contents = styled.div`
  width: 600px;
  height: 600px;
  margin: 10px;
  border: 2px solid #000;
`;
const Box = styled.div`
  width: calc(100% / 4);
  height: calc(100% / 4);
  display: inline-block;
  background-color: ${(props) =>
    props.className === "black"
      ? "#000"
      : props.className === "pink"
      ? "#f91aff"
      : "initial"};
`;
// const WhiteBox = styled.div`
//   background-color: #fff;
// `;
// const PinkBox = styled.div`
//   background-color: #f91aff;
// `;
// const BlackBox = styled.div`
//   width: calc(100% / 4);
//   height: calc(100% / 4);
//   background-color: #000;
// `;
