import React from "react";
import WidgetComponent from "./Introduce/WidgetComponent";
import WidgetBodyComponent from "./Introduce/WidgetBodyComponent";
import Introduce from "./Introduce/Introduce";
import styled from "styled-components";
import Skills from "./Introduce/Skills";
import Experience from "./Work/Experience";
import License from "./License/License";
import Project from "./Work/Project";
const Main = () => {
  return (
    <Wrapper>
      <LeftSection>
        <WidgetComponent name="Introduce" height="800px">
          <WidgetBodyComponent>
            <Introduce />
          </WidgetBodyComponent>
        </WidgetComponent>
      </LeftSection>
      <CenterSection>
        <WidgetComponent name="Work">
          <WidgetBodyComponent>
            <Experience />
          </WidgetBodyComponent>
        </WidgetComponent>
        <CenterBottom>
          <WidgetComponent name="Project">
            <WidgetBodyComponent>
              <Project />
            </WidgetBodyComponent>
          </WidgetComponent>
        </CenterBottom>
      </CenterSection>
      <RightSection>
        <WidgetComponent name="Certificate & Academic">
          <WidgetBodyComponent>
            <License />
          </WidgetBodyComponent>
        </WidgetComponent>
        <WidgetComponent name="Skills">
          <WidgetBodyComponent>
            <Skills />
          </WidgetBodyComponent>
        </WidgetComponent>
      </RightSection>
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.div`
  display: flex;
  gap: 20px;
  height: 100vh;
  padding: 0 20px;
  background-color: #1d1e24;
`;

const LeftSection = styled.div`
  width: 20%;
`;
const CenterSection = styled.div`
  width: 55%;
`;
const CenterBottom = styled.div``;
const RightSection = styled.div`
  width: 25%;
`;
