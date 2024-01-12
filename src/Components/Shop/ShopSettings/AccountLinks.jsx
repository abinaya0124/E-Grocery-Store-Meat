import PropTypes from "prop-types";
// import React from "react";
import { Dashboard2 } from "./Dashboard2";

export const AccountLinks = ({ property1 }) => {
  const isActive = property1 === "active";
  const isHover = property1 === "hover";
  const activeStyle = isActive ? "shadow-[inset_3px_0px_0px_#20b426] bg-gren-gray-scale50" : "";
  const hoverStyle = isHover ? "bg-gray-scalegray-50" : "";

  return (
    <div className={`inline-flex items-center gap-[10px] px-[20px] py-[16px] justify-center relative ${activeStyle} ${hoverStyle}`}>
      <Dashboard2 className="!relative !w-[24px] !h-[24px]" color={isHover ? "#666666" : isActive ? "black" : "#CCCCCC"} />
      <div className={`font-body-medium-body-medium-400 w-[238px] mt-[-1.00px] tracking-[var(--body-medium-body-medium-400-letter-spacing)] text-[length:var(--body-medium-body-medium-400-font-size)] [font-style:var(--body-medium-body-medium-400-font-style)] relative font-[number:var(--body-medium-body-medium-400-font-weight)] leading-[var(--body-medium-body-medium-400-line-height)] ${isActive ? "text-gray-scalegray-900" : "text-gray-scalegray-600"}`}>
        Dashboard
      </div>
    </div>
  );
};

AccountLinks.propTypes = {
  property1: PropTypes.oneOf(["hover", "active", "normal"]),
};
