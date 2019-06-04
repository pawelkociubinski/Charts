import React from "react";
import ICONS from "../../constants/icons";

interface {
  className: string;
  size: number;
  icon: string;
}

export default (props: Props) => (
  <svg
    className={props.className}
    height={props.size}
    onClick={props.onClick}
    viewBox="0 0 32 32"
    width={size}
  >
    {ICONS[icon].map((d) =>
      <path key={d} d={d} />}
  </svg>
);

