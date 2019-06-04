import React from "react";

import { Circle, Text } from "./styles";


enum Color {
  vivid_tangerine = "#FFA080",
  mauve = "#DF97FB",
  pastel_green = "#6DE373",
  dandelion = "#FFD65B",
  cornflower = "#7EAAE1",
  turquoise_blue = "#55E2D9",
}

interface P {
  label: string,
  color: Color,
  value: number,
}

interface Props {
  data: P[]
}

export default (props: Props) => {
  console.log(props);

  // const size = 140;
  // const strokeWidth = 10;
  // const radius = 16;
  // const diameter = radius * 2;
  // const viewBoxSize = diameter + strokeWidth;
  // const offset = (viewBoxSize - diameter) / 2;
  // const circumference = 2 * Math.PI * radius;
  // const centralCoordinate = radius + offset;
  // const total = props.data.reduce((prev, current) => current.value + prev, 0);
  let percentAcc = 0;
  return (
    <svg
      height={size}
      width={size}
      viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {props.data.map(({ color, label, value }, index) => {
        const percent = value / total * 100;

        const strokeDasharray = `${percent}, ${100 - percent}`;
        const strokeDashoffset = index === 0 ? 0 : 100 - percentAcc;

        const segmentAngle = percent / 100 * circumference;
        const centerAngle = (percentAcc + percent / 2) / 100 * 2 * Math.PI;
        const centerX = centralCoordinate + Math.cos(centerAngle) * radius;
        const centerY = centralCoordinate + Math.sin(centerAngle) * radius;
        percentAcc += percent;
        return [
          <Circle
            key={index}
            cx={centralCoordinate}
            cy={centralCoordinate}
            fill="none"
            index={index}
            isHovered={hoveredSegment}
            mouseEvents={mouseEvents}
            r={radius}
            stroke={color}
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeWidth={strokeWidth}
          />,
          <Text
            key={index + 1}
            mouseEvents={mouseEvents}
            textAnchor="middle"
            x={centerX}
            y={centerY + 1}
          >
            {segmentAngle > 7 && `${Math.round(percent)}%`}
          </Text>
        ];
      })}
    </svg>
  );
};