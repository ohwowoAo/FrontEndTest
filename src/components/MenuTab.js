import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuTab = ({ isOpen }) => {
  return (
    <Wrapper isOpen={isOpen}>
      <ListWrap>
        <List>
          <Link to="/">포트폴리오</Link>
        </List>
        <List>
          <Link to="/second">이미지</Link>
        </List>
      </ListWrap>
    </Wrapper>
  );
};

export default MenuTab;

const Wrapper = styled.div`
  position: absolute;
  top: 56px;
  z-index: 10;
  left: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
  transition: left 0.3s ease-in-out;
  background-color: #2f2f37;
  width: 15%;
  height: 100vh;
`;
const ListWrap = styled.ul`
  padding: 10px 0 0;
  margin: 0;
`;
const List = styled.li`
  border-bottom: 1px solid #555961;
  &:hover {
    background-color: #393a44;
  }
  > a {
    display: block;
    width: 100%;
    height: 100%;
    padding: 20px 20px;
  }
`;
