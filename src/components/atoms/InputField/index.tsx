import React from "react";

import { Field } from "./styles";

interface Props {
  name: string;
  type: "text" | "password";
  value: string;
  onBlur: () => void;
  onFocus: () => void;
}

export default (props: Props) => (
  <Field
    name={props.name}
    onBlur={props.onBlur}
    onChange={props.onChange}
    onFocus={props.onFocus}
    type={props.type}
    value={props.value}
  />
);
