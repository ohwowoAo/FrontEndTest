import React from "react";
import styled from "styled-components";

const borderStyle = "2px solid #000";

const Second = () => {
  return (
    <Wrapper>
      <h3>2. 전달된 이미지 만들기 </h3>
      <Contents>
        <BoxWrap className="noBorR noBorB">
          <Box className="white"></Box>
          <Box className="pink noBorR"></Box>
          <Box className="pink noBorB"></Box>
        </BoxWrap>
        <BoxWrap className="noBorB">
          <Box className="black"></Box>
          <Box className="black noBorR"></Box>
          <Box className="black"></Box>
          <Box className="skyblue noBorB noBorR"></Box>
          <ChildBox className="blue"></ChildBox>
        </BoxWrap>
        <BoxWrap className="black noBorR">
          <ChildBox className="white"></ChildBox>
        </BoxWrap>
        <BoxWrap className="yellow"></BoxWrap>
        <CenterBox>
          <CenterRedBox></CenterRedBox>
          <CenterWhiteBox></CenterWhiteBox>
        </CenterBox>
      </Contents>
    </Wrapper>
  );
};

export default Second;

const Wrapper = styled.div``;
const Contents = styled.div`
  position: relative;
  width: 600px;
  height: 600px;
  margin: 10px;
  font-size: 0;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
`;
const CenterBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: calc(100% / 2 - 3px);
  height: calc(100% / 2 - 3px);
  border: ${borderStyle};
  background-color: #40fe00;
`;
const CenterRedBox = styled.div`
  position: absolute;
  bottom: 70px;
  left: 0;
  z-index: 1;
  width: 150px;
  height: 150px;
  box-sizing: border-box;
  border-top: ${borderStyle};
  border-right: ${borderStyle};
  background-color: #f90000;
`;
const CenterWhiteBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 73px;
  z-index: 1;
  width: 150px;
  height: 150px;
  box-sizing: border-box;
  border: ${borderStyle};
  border-bottom: none;
  background-color: #fff;
`;
const BoxWrap = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  box-sizing: border-box;
  border: ${borderStyle};
  border-right: ${(props) =>
    props.className && props.className.includes("noBorR")
      ? "initial"
      : borderStyle};
  border-bottom: ${(props) =>
    props.className && props.className.includes("noBorB")
      ? "initial"
      : borderStyle};
  background-color: ${(props) => getBackgroundColor(props.className)};
`;

const Box = styled.div`
  box-sizing: border-box;
  border-right: ${(props) =>
    props.className.includes("noBorR") ? "initial" : borderStyle};
  border-bottom: ${(props) =>
    props.className.includes("noBorB") ? "initial" : borderStyle};
  background-color: ${(props) => getBackgroundColor(props.className)};
`;

const ChildBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;
  width: 150px;
  height: 150px;
  box-sizing: border-box;
  border: ${borderStyle};
  background-color: ${(props) => getBackgroundColor(props.className)};
`;
const getBackgroundColor = (className) => {
  if (className.includes("white")) return "#fff";
  if (className.includes("black")) return "#000";
  if (className.includes("pink")) return "#f91aff";
  if (className.includes("green")) return "#40fe00";
  if (className.includes("skyblue")) return "#3fffff";
  if (className.includes("yellow")) return "#fffe00";
  if (className.includes("blue")) return "#001fff";
  return "initial";
};
