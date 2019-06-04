import React from "react";
import { Container, Wrapper, Component, InProgress } from "./styles";

export default () => {
  return (
    <Container inProgress={true}>
      {true && (
        <Wrapper>
          <Component>
            <InProgress inProgress={true} />
          </Component>
        </Wrapper>)}
    </Container>
  );
};
