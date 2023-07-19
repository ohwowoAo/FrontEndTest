import styled from "styled-components";

const WidgetHeaderControlComponent = (props) => {
  return (
    <WidgetHeaderControl name={props.name}>
      {props?.children}
    </WidgetHeaderControl>
  );
};

export default WidgetHeaderControlComponent;

export const WidgetHeaderControl = styled.div`
  height: 25px;
  border: 1px solid #ccc;
  border-radius: 4px;
  cursor: pointer;
  > button {
    color: #fff;
    cursor: pointer;
  }
  &:hover {
    background: #000;
  }
`;
