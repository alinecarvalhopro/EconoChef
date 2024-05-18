import * as React from "react";
import Svg, { Rect, Defs, Pattern, Use, Image } from "react-native-svg";

const SVGCutleryIcon = (props) => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Rect width={30} height={30} fill="url(#pattern0_38_153)" />
    <Defs>
      <Pattern
        id="pattern0_38_153"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_38_153" transform="scale(0.0104167)" />
      </Pattern>
      <Image
        id="image0_38_153"
        width={96}
        height={96}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAACvklEQVR4nO2bz2oUQRCH66QXj+IfPHn1PVTwrk8gKoGIblcgVUHm4EXcqkWJaHwFr8Y3UMQXEG/mqodIEg9hI6z0hohoyO6yuzO9U78PGnKYkN7+0lW/7kyIAAAAAAAAAGBK2HVw0qj7+X/573tM+8n0ezL5lEw3Uk9uLb2oztCisnAC/Jhhsscm66lbnaNFoxUC/HAk1102fVRV1SlaFNokgP8M+XD/mZynRaCdAnSQTL+mrlyh0mmrAD7cCVvF94V2C9C8E94vP18+TaXSdgGch+ljKpUgAvZTd+0ylUgIAT48K7yiEgkjwPVnkSfmQAIGK752k0ojkoBkukGlEUkAm3yk0gglwOUblUYoAab7VBqhBPjon1c7ENAwENAwENAwI+vmU75w9OyDnl6c9fNTz6/tPSC5vMmLmhcz5a9n/Py082u9gHkPqnl+VBoQ0DDDNwma2gEmOxR9BySTL00JSCafR80vgAB915gA17ej5td+Aa5LTQlgl7sUXcBD10vJ5aD2xTft56hK0QVkkuvL+gXI+jhzCyEgv8bHJj/qWvzkuj3uC1MhBGQ6JldrKUWmv1Z89ca48wojIJNM7+QFmt9vvhx0TG9PMqdQAjId0+vzKEfJdZt7q9cmnU84AZmOVWfZ5En+E94MSk6fXV7/fUs6CSEFHDG80ezpPXbZzKdWzv+JMnLBZW/4rMtmzvnjRM2TCC3gOLjmDwgBEFAWjB0AAYweoOgBKEGKFMRIQWjCjHOA4hyAGKo4CTNOwjiIMe6CFHdBuIpQ3IbOEtyGTrggNGMgoHABFA2GAAhg7ABFCUIJUvQARhNGE6ZoMFIQBDBSkCIFoQQpUhAjBaEJUzQYKQgCGClIkYJQghQpiJGC0IQpGowUBAGMFKRIQShBihTESEFowhQNRgqCAEYKUqQgAAAAAAAAAEXhN86AL7OdGnqxAAAAAElFTkSuQmCC"
      />
    </Defs>
  </Svg>
);

export default SVGCutleryIcon;
