import * as React from "react";
import Svg, { Rect, Defs, Pattern, Use, Image } from "react-native-svg";

const SVGFryingIcon = (props) => (
  <Svg
    width={30}
    height={30}
    viewBox="0 0 30 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <Rect width={30} height={30} fill="url(#pattern0_38_151)" />
    <Defs>
      <Pattern
        id="pattern0_38_151"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <Use xlinkHref="#image0_38_151" transform="scale(0.0104167)" />
      </Pattern>
      <Image
        id="image0_38_151"
        width={96}
        height={96}
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAACpklEQVR4nO3bv2sUURAH8OcvRBAETaON+A/kH7AUtBDBJoWVjZ4gBLx9E25ntliwMebmLUq0EBTSqtjYayUIWtikFdKKCP4CJWAi8VS4kNxJzHuz2f1+YMpj3873vZ1bjnMOAAAAAAAAAAAAAAAAAAAgEgqyOqrQ+MgIAdgiBIAAWr2DyfjzO551AwkBIABT1juYcAIQgCnrHUw4AQjAlPUOJpwABGDKegcTTgACMGW9gwknoJkB+H5xnJRnvfIbUv4y7jpbKR/4x1bXt20NoJoFUJblblIpSGU5RtMRwCirbhepLMRu/N9SWXH/q0knwAf2yZq/XQE0RablhA/yGQEYIc0pafNxAoZR4GfJA2jDL3b/YurR1B5S/oQAjNAcT455VHyfvj2932p9jedVOqMD4JfWa2w0H/jBmMfPLes1NppXXhwVQKbFhWgXp8BLFsNnJ5XvFyciBiBPrG+Qal38zsWUKYv9TUp9S/lp1ACoyk+b32SocakUUQPI5/Mj5jcZ6luZ8ikXGwaxbPqDSW+2dyhBABjEtFEAyosuBQxi2ez5fz9RAHLG+llLtSy+nCQADGLZOIA5nnSpYBDL+gC+lmW5N2EAGMQ0NIDluUsJg1jWfQWVG4kDwCCm4Rew80kDwCCWoQBmbs4cc6lhEMufr59LyZs/CACDmAYvYA9NAsAglt8BFJlRABjEtBZAxSeNAign7F//xbZUlruhe8BZafsg9sqvzZo/CEAet/sE8LxpAJnKpVafgL6cNQ3g6p3yIAV+387dL2879zr7nDUKfKWFzV/xlZxzdUHKd1sWQOFq5df/pYrMB/5m3pwQr3yQj77KL7q6ulbJUR/4OgV5tbbYZux2/uBVXvggvW4oD1v3GAAAAAAAAAAAAAAAAAAAXCP9BOpE34HL7SJdAAAAAElFTkSuQmCC"
      />
    </Defs>
  </Svg>
);

export default SVGFryingIcon;
