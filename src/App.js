import React from "react";
import styled from "styled-components";

const App = () => {
  return (
    <Wrapper>
      <Contents>
        <Box className="white"></Box>
        <Box className="pink"></Box>
        <Box className="black"></Box>
        <Box className="black noBorR"></Box>
        {/* <WhiteBox></WhiteBox>
        <PinkBox></PinkBox>
        <BlackBox></BlackBox>
        <BlackBox></BlackBox> */}
        <Box className="pink"></Box>
        <Box className="green noBorB noBorR"></Box>
        <Box className="green noBorB"></Box>
        <Box className="skyblue noBorR"></Box>
        <Box className="black"></Box>
        <Box className="green noBorR"></Box>
        <Box className="green"></Box>
        <Box className="yellow noBorR noBorB"></Box>
        <Box className="black noBorB"></Box>
        <Box className="black noBorB"></Box>
        <Box className="yellow noBorR noBorB"></Box>
        <Box className="yellow noBorR noBorB"></Box>
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
  border: 3px solid #000;
  font-size: 0;
`;
const Box = styled.div`
  width: calc(100% / 4);
  height: calc(100% / 4);
  display: inline-block;
  box-sizing: border-box;
  background-color: ${(props) =>
    props.className.includes("white")
      ? "#fff"
      : props.className.includes("black")
      ? "#000"
      : props.className.includes("pink")
      ? "#f91aff"
      : props.className.includes("green")
      ? "#40fe00"
      : props.className.includes("skyblue")
      ? "#3fffff"
      : props.className.includes("yellow")
      ? "#fffe00"
      : "initial"};
  /* border-right: ${(props) =>
    props.className.includes("borR") ? "2px solid #000" : "initial"}; */
  border-right: ${(props) =>
    props.className.includes("noBorR") ? "initial" : "3px solid #000"};
  border-bottom: ${(props) =>
    props.className.includes("noBorB") ? "initial" : "3px solid #000"};
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
