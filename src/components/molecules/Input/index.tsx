import React, { useState, FormEvent } from "react";
import { isEmpty } from "lodash";
import { ThemeProvider } from "styled-components";

import InputField from "../../atoms/InputField";
import { Container, Label, Wrapper, Test, Error } from "./styles";

interface Props {
  readonly error: string;
  readonly label: string;
  readonly name: string;
  readonly onChange: (event: FormEvent<HTMLInputElement>) => void
  readonly type: "text" | "password";
  readonly value: string;
  readonly isFocused: boolean;
}

export default (props: Props) => {
  const mode =
    props.isFocused
      ? "active"
      : props.error
        ? "error"
        : props.isValid
          ? "valid"
          : "default";

  return (
    <ThemeProvider theme={{ variant: "default", mode }}>
      <Test>
        <Container>
          {props.label && (
            <Label lifted={props.isFocused || !isEmpty(props.value)}>
              {props.label}
            </Label>
          )}
          <Wrapper>
            <InputField
              name={props.name}
              onBlur={props.onBlur}
              onChange={props.onChange}
              onFocus={props.onFocus}
              type={props.type}
              value={props.value}
            />
          </Wrapper>
        </Container>
        {(props.error && !props.isValid) &&
          <Error>{props.warning}</Error>}
      </Test>
    </ThemeProvider>
  );
};
