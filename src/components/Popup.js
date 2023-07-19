import React from "react";
import styled from "styled-components";
const Popup = () => {
  return <Wrapper>팝업제작중</Wrapper>;
};

export default Popup;
const Wrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 200px;
  height: 200px;
  background-color: white;
  border: 1px solid #ccc;
`;
