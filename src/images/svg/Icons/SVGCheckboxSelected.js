import * as React from "react";
import Svg, { Rect, G, Path, Defs, ClipPath } from "react-native-svg";

const SVGCheckboxSelected = (props) => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      x={0.5}
      y={0.5}
      width={29}
      height={29}
      rx={9.5}
      fill="#EFEEEB"
      stroke="#CB753A"
    />
    <G clipPath="url(#clip0_45_46)">
      <Path
        d="M10.5429 20.9196L11.2497 21.6264L11.9568 20.9199L24.4872 8.40137L24.8358 8.74999L11.25 22.3358L5.67923 16.765L6.03502 16.4117L10.5429 20.9196Z"
        fill="#748D7A"
      />
      <Path
        d="M10.5429 20.9196L11.2497 21.6264L11.9568 20.9199L24.4872 8.40137L24.8358 8.74999L11.25 22.3358L5.67923 16.765L6.03502 16.4117L10.5429 20.9196Z"
        fill="black"
        fillOpacity={0.2}
      />
      <Path
        d="M10.5429 20.9196L11.2497 21.6264L11.9568 20.9199L24.4872 8.40137L24.8358 8.74999L11.25 22.3358L5.67923 16.765L6.03502 16.4117L10.5429 20.9196Z"
        stroke="#748D7A"
        strokeWidth={2}
      />
    </G>
    <Defs>
      <ClipPath id="clip0_45_46">
        <Rect width={30} height={30} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SVGCheckboxSelected;
