import PropTypes from "prop-types";
// import React from "react";
import { useThemeHook } from "../../GlobalComponents/ThemeProvider";


export const Heading = ({ className, text = "All Categories", vector = "vector.svg" }) => {
  const [theme] = useThemeHook()

  return (
    <div  style={{ background: theme ? "black" : "" }} className={`flex w-[312px] items-center justify-between px-0 py-[20px] relative ${className}`}>
      <div style={{ color : theme ? "#fff" : "" }} className="relative w-fit mt-[-1.00px] font-body-XL-body-XL-500 font-[number:var(--body-XL-body-XL-500-font-weight)] text-gray-scalegray-900 text-[length:var(--body-XL-body-XL-500-font-size)] tracking-[var(--body-XL-body-XL-500-letter-spacing)] leading-[var(--body-XL-body-XL-500-line-height)] whitespace-nowrap [font-style:var(--body-XL-body-XL-500-font-style)]">
        {text}
      </div>
      <img className="relative w-[14px] h-[8px] mr-[-1.00px]" alt="Vector" src={vector} />
    </div>
  );
};

Heading.propTypes = {
  text: PropTypes.string,
  vector: PropTypes.string,
};
