import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="17.5" cy="17.5" r="17.5" fill="#272E39" />
      <path d="M20.7344 11.1938C20.3914 10.8508 19.8384 10.8508 19.4954 11.1938L13.6784 17.0108C13.4054 17.2838 13.4054 17.7248 13.6784 17.9978L19.4954 23.8148C19.8384 24.1578 20.3914 24.1578 20.7344 23.8148C21.0774 23.4718 21.0774 22.9188 20.7344 22.5758L15.6664 17.5008L20.7414 12.4258C21.0774 12.0898 21.0774 11.5298 20.7344 11.1938Z" fill="#919AAE" />
    </svg>

  );
};

export default Icon;
