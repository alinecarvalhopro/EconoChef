import * as React from "react";
import Svg, { Rect, Defs, Pattern, Use, Image } from "react-native-svg";

const SVGIngredientIcon = (props) => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Rect width={30} height={30} fill="url(#pattern0_45_101)" />
    <Defs>
      <Pattern
        id="pattern0_45_101"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_45_101" transform="scale(0.0104167)" />
      </Pattern>
      <Image
        id="image0_45_101"
        width={96}
        height={96}
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
);

export default SVGIngredientIcon;
