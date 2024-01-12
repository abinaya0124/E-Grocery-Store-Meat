import PropTypes from "prop-types";
import React from "react";
import { useThemeHook } from "../../GlobalComponents/ThemeProvider";

export const Tag = ({ property1 }) => {
  const [theme] = useThemeHook()

  return (
    <div className={`inline-flex items-center gap-[4px] px-[8px] py-[3px] rounded-[4px] justify-center relative ${property1 === "new" ? "bg-brandingwarning" : property1 === "best-sale" ? "bg-[#2388ff]" : property1 === "out-of-stock" ? "bg-gray-scalegray-900" : "bg-brandingerror"}`}>
      <div className="font-body-small-body-small-400 w-fit mt-[-1.00px] tracking-[var(--body-small-body-small-400-letter-spacing)] text-[length:var(--body-small-body-small-400-font-size)] [font-style:var(--body-small-body-small-400-font-style)] text-gray-scalewhite font-[number:var(--body-small-body-small-400-font-weight)] leading-[var(--body-small-body-small-400-line-height)] whitespace-nowrap relative">
        {property1 === "new" && <>New</>}
        {property1 === "best-sale" && <>Best Sale</>}
        {property1 === "out-of-stock" && <>Out of Stock</>}
        {property1 === "default" && <>Sale</>}
      </div>
      {property1 === "default" && (
        <div className="relative w-fit mt-[-1.00px] font-body-small-body-small-500 font-[number:var(--body-small-body-small-500-font-weight)] text-gray-scalewhite text-[length:var(--body-small-body-small-500-font-size)] tracking-[var(--body-small-body-small-500-letter-spacing)] leading-[var(--body-small-body-small-500-line-height)] whitespace-nowrap [font-style:var(--body-small-body-small-500-font-style)]">
          50%
        </div>
      )}
    </div>
  );
};

Tag.propTypes = {
  property1: PropTypes.oneOf(["best-sale", "new", "out-of-stock", "default"]),
};
