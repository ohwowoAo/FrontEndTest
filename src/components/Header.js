import React, { useState } from "react";
import styled from "styled-components";
import MenuTab from "./MenuTab";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <Wrapper>
      <ImgTag
        src={process.env.PUBLIC_URL + "/img/menu.png"}
        alt=""
        onClick={toggleMenu}
      />
      안녕하세요! 나은정입니다 :D
      <MenuTab isOpen={isMenuOpen} />
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled.div`
  position: relative;
  padding: 20px 15px;
  background-color: #2f2f37;
  color: #fff;
`;
const ImgTag = styled.img`
  display: inline-block;
  width: 16px;
  margin: 0 15px 0 0;
  cursor: pointer;
`;
