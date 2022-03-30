import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle r="17.5" transform="matrix(-1 0 0 1 17.499 17.5)" fill="#272E39" />
      <path d="M21.5965 18L17.7065 21.89C17.3165 22.28 17.3165 22.91 17.7065 23.3C18.0965 23.69 18.7265 23.69 19.1165 23.3L23.7065 18.71C24.0965 18.32 24.0965 17.69 23.7065 17.3L19.1165 12.7C18.7265 12.31 18.0965 12.31 17.7065 12.7C17.3165 13.09 17.3165 13.72 17.7065 14.11L21.5965 18ZM12.0065 13L12.0065 23C12.0065 23.55 12.4565 24 13.0065 24C13.5565 24 14.0065 23.55 14.0065 23L14.0065 13C14.0065 12.45 13.5565 12 13.0065 12C12.4565 12 12.0065 12.45 12.0065 13Z" fill="#919AAE" />
    </svg>

  );
};

export default Icon;
