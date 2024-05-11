import * as React from "react";
import Svg, { Rect, Defs, Pattern, Use, Image } from "react-native-svg";

const SVGListIcon = (props) => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Rect width={30} height={30} fill="url(#pattern0_45_64)" />
    <Defs>
      <Pattern
        id="pattern0_45_64"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_45_64" transform="scale(0.0104167)" />
      </Pattern>
      <Image
        id="image0_45_64"
        width={96}
        height={96}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFcklEQVR4nO2da4gcRRDH+xR8gSiCQYxG8IGo+NEHIoISP0bUeBjxAeILA9Hsdu3dVs3pCCLeZavuLuaT4gPE+IhvxWiMgo8PfvERBD+dIApGUaMm0YiX5E5690QxZnp2d3Z65qZ+8If7sNfdVdVd3TPb3WuMoiiKoiiKoiiKoiiKohSYkcmxc4DxNWDcCULzuapT56u2hWebKlKTsXOBcXfujj8wELtdW0zVAKG3gzt/QZZpi6kSw5uGDwWm2dCO/2cU0Kxrk6kKwxqA8ECBUhAIvmWqRq0gk7AV2lXJSdjhloCW8RVg/CX/vN+u8+WRqbGz2o2pOpZxyttbJ2mFr5w6N69IEYDpfKwqCXEcH2aZfkh0PuNnZt4MeQubN0OW8RNf748fjo/KxbgyAEIrU/TalWnLa0g0nGLivWGwVpUIy/SGx1nfdLNOd5+1TF8njyh6b7BWlYSa0FJg2pe8UsF7uy3XCt6XnIZozraiU0zVAW6Cx1H7RsZHTuq23NHp0WX+wNJdpupYpg88Tnp9gKntXVNlahIfZwX3Jjmpznhlr+WD0FWe1LbXtcGUEZc/rdBqy7QRhD61TD+5l1qW8XfL9BUwfgRMj1rBVbYVL/m/MhocXetZrfwWx/ERvbaxJrUjXRmJQWg1bzRlob26aOE17bTBNJdi6Ti/0NP2d778iC75d3nAuMHzvy/222bL+JKnbU+YMlDn6GJg2pbW6XDwvPvh34//buQkO6d5c7/ttoK3eCb5GVNo5s1QnZF8KwroQlbwD2CKffkf1kWn9dv8xsTYGd72HCRFBqcx0TgaBDdn5XjoKkj0bVZ2WKHvkuqqM15uisaa9WsOd8u0EM6HzrufF7KyxTcPAEd1UyQ6j/KeRg9aTPdnZY8VeiA52PSIKRJWCIM6X1xaiK7Pyh4Quim5PtxsikJ70mLakypNCP4JQk+69fzayeap7hWvk/vbrf9B8KmFz3QdgBGh87OyqSZ0YfJow89NUQChd1I6/9nGROPElC/bnus2AC6IWdlUk+bpngBsN0XAtprnpXD8fhC8o9uygfHOhQeyVAHA9Xh8dnbFS5Jtol9NEbCCj3kDwHR77+XT6rQBcKuwbFd0SSOAZk1oRsdHj3HvcTwNfabfeqzgpjQBMBmTd31dY1t4ta+XZPEFxuj06LI0E7OpXAAExZN6NmZVFwg+rQH4bwCY3vRMvquyCkCdo+sqGYA6Rye7R3y3GyztZFhVWaFd7m1AY2rszMycD4w7QhsGZRPjjl6+kz4A1/ODGyPllFu59R8ATTvzfYyCnX0HIHQvgpJLAyAagOC9EHQEhHcEaAoK7wwIIJ0DRAMQvBeCjoDwjoDSpiDG7aGNgLIqi68sg28zkfLKneTsPwCTtCK0IVBSuZOXfQcgjuND2tvGC2AQlErdnU9LHgWCY+ENonKJ6R6TFbAOTijULSVSbHVO0NBSkyVpdyWoyPngeZM1DcFL1bmUbgS0osvMIAChLzQI5Mv9M6muRugxAGs1AOTp/Vgzg+LuqfhY7y64Kotpz8CPrwLT48ENlWIql5OTbv99aEOhoLKt5gUmD0Do49DGQtHEtM3kRZ3p1uAGS9GEt+UWAHecyAr9HN5oKoTc3il3NNfkiRV6KLThUBQxbjB5464N6Obeh8WsWqjrK0Hw/dDGQ2C5C0hMKDpHSsM7AQLKnVkIem0kMH0f2gkQTPhjlocCe8IKPRjeERRGjOMmNGkuuVuUYppzB7lNEfBfcrcYhcW5J6KKOyfqWex4yPiHFWZCOwVykhX8snC/nAGT0fJebziBEqlt42S03BSROkcXWcati/Fcme0cP93qbAztZ0VRFEVRFEVRFEVRFMWUkr8A5oqhOeKb4voAAAAASUVORK5CYII="
      />
    </Defs>
  </Svg>
);

export default SVGListIcon;
