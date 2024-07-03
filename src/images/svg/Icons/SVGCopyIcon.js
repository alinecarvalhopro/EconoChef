import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SVGCopyIcon = (props) => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M22.1053 0H3.15789C1.42105 0 0 1.22727 0 2.72727V21.8182H3.15789V2.72727H22.1053V0ZM26.8421 5.45455H9.47368C7.73684 5.45455 6.31579 6.68182 6.31579 8.18182V27.2727C6.31579 28.7727 7.73684 30 9.47368 30H26.8421C28.5789 30 30 28.7727 30 27.2727V8.18182C30 6.68182 28.5789 5.45455 26.8421 5.45455ZM26.8421 27.2727H9.47368V8.18182H26.8421V27.2727Z"
      fill="white"
    />
  </Svg>
);
export default SVGCopyIcon;
