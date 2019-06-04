import styled, { css } from "styled-components";
import { variants } from "../../../helpers/variants";


// export const ALABASTER = "#FAFAFA";
// export const BRIGHT_GRAY = "#3B434D";
// export const DODGER_BLUE = "#4095FF";
// export const LOBLOLLY = "#BFC4CC";
// export const MISCHKA = "#CED0DA";
// export const OXFORD_BLUE = "#354052";
// export const TIARA = "#C5D3D6";
// export const TRANSPARENT = "transparent";
// export const WHITE = "#FFFFFF";
// export const LIMED_SPRUCE = "#40515B";
// export const ATHENS_GRAY = "#F2F4F7";
// #FFA080", "#DF97FB", "#6DE373", "#FFD65B", "#7EAAE1", "#55E2D9"

const color = variants({
  default: { default: "#CED0DA", active: "#4095FF", disabled: "blue", error: "#d64242", valid: "#42d642" },
});

export const Container = styled.div`
  border-radius: 4px;
  border: 1px solid ${color};
  margin-top: 9px;
  margin-bottom: 18px;
  position: relative;
  transition: all 0.3s;
  width: 100%;
`;

export const Label = styled.div`
  color: ${color};
  font-size: 16px;
  left: 15px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%) scale(1);
  transition-delay: 0.3s;
  transition: all 0.3s;
  ${({ lifted }) => {
    if (lifted) {
      return css`
        background-color: #FFFFFF;
        font-size: 12px;
        left: 10px;
        padding: 0 5px;
        top: calc(-50% + 5px);
        transform: translateY(50%);
      `;
    }
  }}
`;

export const Wrapper = styled.div`
  display: flex;
  position: relative;
`;

export const Test = styled.div`
  width: 100%;
  position: relative;
`;

export const Error = styled.div`
  bottom: -25%;
  font-size: 12px;
  padding: 0 16px;
  position: absolute;
  transform: translateY(25%);
`;
