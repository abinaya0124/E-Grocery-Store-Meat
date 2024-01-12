// Import necessary dependencies
// import { text } from "@fortawesome/fontawesome-svg-core";
import PropTypes from "prop-types";
// import React from "react";

// Define the Tag component
export const Tag1 = ({ property1 ,text="healthy"}) => {
  // Determine the background color and text color based on the value of property1
  const backgroundColor = property1 === "hover" ? "bg-brandingsuccess" : "bg-gray-scalegray-50";
  const textColor = property1 === "hover" ? "text-gray-scalewhite" : "text-gray-scalegray-900";

  // Render the Tag component
  return (
    <div className={`inline-flex items-start gap-[10px] px-[16px] py-[6px] rounded-[30px] relative ${backgroundColor} mr-2 mt-2`}>
      <div className={`font-body-small-body-small-400 w-fit mt-[-1.00px] tracking-[var(--body-small-body-small-400-letter-spacing)] text-[length:var(--body-small-body-small-400-font-size)] [font-style:var(--body-small-body-small-400-font-style)] font-[number:var(--body-small-body-small-400-font-weight)] leading-[var(--body-small-body-small-400-line-height)] whitespace-nowrap relative ${textColor}`}>
       {text}
      </div>
    </div>
  );
};

// Define PropTypes to enforce the type of property1
Tag1.propTypes = {
  property1: PropTypes.oneOf(["hover", "default"]),
};

// Export the Tag component
