import styled, { keyframes } from "styled-components";

interface ContainerProps {
  inProgress: boolean;
}

export const Container = styled.div<ContainerProps>`
  align-items: center;
  background-color: #3B434D;
  display: flex;
  height: ${(props) => props.inProgress ? "26px" : "0"};
  overflow: hidden;
  padding: 0 36px;
  transition: height 0.4s;
  justify-content: center;
`;
export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  max-width: 600px;
  width: 100%;
`;

export const Component = styled.div`
  background-color: #7F8FA4;
  border-radius: 20px;
  height: 6px;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

const progress = keyframes`
  to {
    background-position: 15px 0;
  }
`;

export const InProgress = styled.div<ContainerProps>`
  animation: ${progress} 1s linear infinite;
  background-color: ${(props) => props.inProgress ? "#71C872" : "#FFBB19"};
  background-image:
    linear-gradient(
      -45deg,
      rgba(255, 255, 255, 0.35) 25%,
      rgba(255, 255, 255, 0)    25%,
      rgba(255, 255, 255, 0)    50%,
      rgba(255, 255, 255, 0.35) 50%,
      rgba(255, 255, 255, 0.35) 75%,
      rgba(255, 255, 255, 0)    75%,
      rgba(255, 255, 255, 0)
    );
  background-repeat: repeat-x;
  background-size: 15px 15px;
  height: 100%;
  transition: background-color 0.4s;
  width: 100%;
`;