import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 15 15" {...props}>
      <path
        d="M7.85352 0.578125L7.51953 0.226562C7.43164 0.138672 7.29102 0.138672 7.2207 0.226562L4.03906 3.4082L0.839844 0.226562C0.769531 0.138672 0.628906 0.138672 0.541016 0.226562L0.207031 0.578125C0.119141 0.648438 0.119141 0.789062 0.207031 0.876953L3.88086 4.55078C3.96875 4.63867 4.0918 4.63867 4.17969 4.55078L7.85352 0.876953C7.94141 0.789062 7.94141 0.648438 7.85352 0.578125Z"
        fill="#919AAE"
      />
    </Svg>
  );
};

export default Icon;
