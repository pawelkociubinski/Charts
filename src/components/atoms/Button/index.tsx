import React from "react";

import { Button } from "./styles";
import console = require("console");

interface Props {
  readonly disabled?: boolean;
  readonly onClick: (event) => void;
};

export default (props: Props) => (
  <Button
    className={props.className}
    disabled={props.disabled}
    onClick={props.onClick}
  >
    {props.children}
  </Button>
);
