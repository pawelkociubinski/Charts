import styled from "styled-components";

export const Circle = styled.circle`
  cursor: ${(props) => props.mouseEvents ? "pointer" : "default"};
  stroke-opacity: ${(props) => props.isHovered ? "0.7" : props.isHovered === props.index ? "1" : "0.3"};
  transition: stroke-opacity 0.3s;
  padding: 2em;
`;

export const Text = styled.text`
  color: #FFFFFF;
  cursor: ${(props) => props.mouseEvents ? "pointer" : "default"};
  font-size: 4px;
`;

export const Container = styled.div`
  background-color: #fafbfd;
  border-radius: 2px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
  padding: 5px 9px;
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  white-space: pre;
`;

export const Chip = styled.span`
  background-color: ${(props) => props.color};
  display: block;
  height: 12px;
  margin-right: 7px;
  width: 12px;
`;