import * as React from "react";
import Svg, { Rect } from "react-native-svg";

const SVGCheckboxUnselected = (props) => (
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
  </Svg>
);

export default SVGCheckboxUnselected;
