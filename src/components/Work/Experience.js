import React, { useState } from "react";
import styled from "styled-components";
import WidgetHeaderControlComponent from "../Introduce/WidgetHeaderControlComponent";
import Popup from "../Popup";

const Experience = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);

  const handlePopupToggle = () => {
    setPopupOpen(!isPopupOpen);
  };

  return (
    <Wrapper>
      <Tab>
        <Name>
          캐셔레스트(뉴링크)
          {/* TODO: 팝업제작중 */}
          {/* <WidgetHeaderControlComponent onClick={handlePopupToggle}>
            <button>자세히보기</button>
          </WidgetHeaderControlComponent> */}
        </Name>
        <Explain>
          국내 24개 가상자산 거래소 가운데 6번째 규모, 원화 마켓을 제외한 20개
          코인마켓 거래소 가운데에서는 2번째 규모의 가상자산 거래소입니다.
        </Explain>
        <Date>2023.01~2023.06</Date>
        {isPopupOpen && <Popup />}
      </Tab>
      <Tab>
        <Name>코리아센터(메이크샵)</Name>
        <Explain>
          메이크샵, 몰테일, 에누리(+다나와), 풀필먼트 사업을 운영중인 이커머스
          코스닥상장 기업
        </Explain>
        <Date>2020.03~2021.07</Date>
      </Tab>
      <Tab>
        <Name>나크21</Name>
        <Explain>
          개그우먼 홍윤화가 피팅하는 월매출 평균 1억 4천 이상의 온라인 여성
          쇼핑몰
        </Explain>
        <Date>2021.08~2021.09 </Date>
      </Tab>
    </Wrapper>
  );
};

export default Experience;
const Wrapper = styled.div`
  padding: 20px;
`;
const Tab = styled.div`
  margin: 0 0 10px;
  padding: 10px 20px;
  border-radius: 3px;
  background-color: #393a44;
  line-height: 22px;
`;
const Name = styled.h3`
  display: flex;
  gap: 10px;
  align-items: center;
  margin: 0 0 10px;
  font-weight: bold;
`;
const Explain = styled.p`
  margin: 0 0 10px;
`;
const Date = styled.p``;
