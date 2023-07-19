import React, { useState } from "react";
import styled from "styled-components";

const License = () => {
  const [expandedTabs, setExpandedTabs] = useState([]);

  const toggleExpand = (tabName) => {
    if (expandedTabs.includes(tabName)) {
      setExpandedTabs(expandedTabs.filter((name) => name !== tabName));
    } else {
      setExpandedTabs([...expandedTabs, tabName]);
    }
  };

  return (
    <Wrapper>
      <Tab>
        <TabTitle onClick={() => toggleExpand("certification")}>
          자격증
          <ImgTag
            src={process.env.PUBLIC_URL + "/img/select.png"}
            alt=""
            expanded={expandedTabs.includes("certification")}
          />
        </TabTitle>
        {expandedTabs.includes("certification") && (
          <ListWrap>
            <List>
              <Date>- 2019.12</Date>
              <Name>웹디자인기능사</Name>
              <Issuance>한국산업인력공단</Issuance>
            </List>
            <List>
              <Date>- 2019.12</Date>
              <Name>컴퓨터그래픽스 운용기능사</Name>
              <Issuance>한국산업인력공단</Issuance>
            </List>
            <List>
              <Date>- 2019.11</Date>
              <Name>GTQ일러스트1급</Name>
              <Issuance>한국생산성본부(KPC)</Issuance>
            </List>
          </ListWrap>
        )}
      </Tab>
      <Tab>
        <TabTitle
          className={expandedTabs.includes("education") ? "" : "noBorBottom"}
          onClick={() => toggleExpand("education")}
        >
          학력
          <ImgTag
            src={process.env.PUBLIC_URL + "/img/select.png"}
            alt=""
            expanded={expandedTabs.includes("education")}
          />
        </TabTitle>
        {expandedTabs.includes("education") && (
          <ListWrap className="noBorBottom">
            <List>
              <Date>- 2022.03~</Date>
              <State> 재학(편입)</State>
              <Name>한국방송통신대학교 </Name>
              <Issuance>컴퓨터과학과</Issuance>
            </List>
            <List>
              <Date>- 2016.03~2022.02</Date>
              <State> 졸업 </State>
              <Name>한국방송통신대학교 </Name>
              <Issuance>유아교육과</Issuance>
            </List>
            <List>
              <Date>- 2012.03~2014.02 </Date>
              <State> 졸업 </State>
              <Name>경복대학교(남양주) </Name>
              <Issuance>사회복지/유아보육</Issuance>
            </List>
          </ListWrap>
        )}
      </Tab>
    </Wrapper>
  );
};

export default License;
const Wrapper = styled.div`
  background-color: #27272d;
`;
const Tab = styled.div``;
const TabTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 10px;
  background-color: #2f2f37;
  border-bottom: ${(props) =>
    props.className === "noBorBottom" ? "none" : "1px solid #555961"};
  cursor: pointer;
`;
const ImgTag = styled.img`
  width: 10px;
  margin: 0 15px 0 0;
  transform: ${({ expanded }) => (expanded ? "rotate(180deg)" : "")};
`;
const ListWrap = styled.ul`
  margin: 0;
  padding: 0;
  border-bottom: ${(props) =>
    props.className === "noBorBottom" ? "none" : "1px solid #555961"};
`;
const List = styled.li`
  padding: 12px;
  line-height: 22px;
`;
const Date = styled.p`
  margin: 0;
`;
const State = styled.p`
  margin: 0;
`;
const Name = styled.p`
  margin: 0;
`;
const Issuance = styled.p`
  margin: 0;
`;
