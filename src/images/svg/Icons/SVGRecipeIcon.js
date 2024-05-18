import * as React from "react";
import Svg, { Rect, Defs, Pattern, Use, Image } from "react-native-svg";

const SVGRecipeIcon = (props) => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Rect width={30} height={30} fill="url(#pattern0_38_128)" />
    <Defs>
      <Pattern
        id="pattern0_38_128"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_38_128" transform="scale(0.0104167)" />
      </Pattern>
      <Image
        id="image0_38_128"
        width={96}
        height={96}
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
);
export default SVGRecipeIcon;
