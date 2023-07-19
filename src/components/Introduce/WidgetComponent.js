import styled from "styled-components";
import { useEffect, useState } from "react";
import WidgetBodyComponent from "./WidgetBodyComponent";
import WidgetHeaderControlComponent from "./WidgetHeaderControlComponent";
import React from "react";

const WidgetComponent = (props) => {
  const [widgetBody, setWidgetBody] = useState(null);
  const [headerControl, setHeaderControl] = useState(null);

  const setElement = (el) => {
    if (el.type === WidgetBodyComponent) {
      setWidgetBody(el);
    } else if (el.type === WidgetHeaderControlComponent) {
      setHeaderControl(el);
    }
  };

  useEffect(() => {
    if (!props.children) return;
    if (Array.isArray(props.children)) {
      props.children.forEach((child) => {
        setElement(child);
      });
    } else {
      setElement(props.children);
    }
  }, [props]);

  return (
    <WidgetLayout
      height={props.height}
      minHeight={props.minHeight}
      maxHeight={props.maxHeight}
      backGroundColor={props.backGroundColor}
      padding={props.padding}
      border={props.border}
    >
      <WidgetHeader>
        {props.name && <WidgetHeaderTitle>{props.name}</WidgetHeaderTitle>}
        {headerControl}
      </WidgetHeader>
      {widgetBody}
    </WidgetLayout>
  );
};
export default WidgetComponent;

export const WidgetBody = styled.div``;
export const WidgetHeader = styled.div``;
export const WidgetHeaderTitle = styled.div``;

export const WidgetHeaderControl = styled.div``;

export const WidgetLayout = styled.div`
  width: 100%;
  height: ${(props) => props.height || "auto"};
  margin: 20px 0 0;
  display: flex;
  flex-direction: column;
  overflow: auto;

  > ${WidgetHeader} {
    display: flex;

    > ${WidgetHeaderTitle} {
      color: #fff;
      margin-bottom: 15px;
    }
    > ${WidgetHeaderControl} {
      cursor: pointer;
    }
  }
  > ${WidgetBody} {
    background: ${(props) => props.backGroundColor || "#2f2f37"};
    color: #fff;
    border-radius: 8px;
    overflow-y: auto;
    border: ${(props) => props.border || "1px solid #555961"};
  }
`;
