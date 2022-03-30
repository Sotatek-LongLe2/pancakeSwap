import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle r="17.5" transform="matrix(-1 0 0 1 17.5 17.5)" fill="#272E39" />
      <path d="M14.2656 11.1938C14.6086 10.8508 15.1616 10.8508 15.5046 11.1938L21.3216 17.0108C21.5946 17.2838 21.5946 17.7248 21.3216 17.9978L15.5046 23.8148C15.1616 24.1578 14.6086 24.1578 14.2656 23.8148C13.9226 23.4718 13.9226 22.9188 14.2656 22.5758L19.3336 17.5008L14.2586 12.4258C13.9226 12.0898 13.9226 11.5298 14.2656 11.1938Z" fill="#919AAE" />
    </svg>

  );
};

export default Icon;
