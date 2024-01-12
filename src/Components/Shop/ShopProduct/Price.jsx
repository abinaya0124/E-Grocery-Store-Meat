import PropTypes from "prop-types";
// import React from "react";
import { useThemeHook } from "../../GlobalComponents/ThemeProvider";


export const Price = ({ property1, hasDiv = true }) => {
  const [theme] = useThemeHook()

  return (
    <div className={`inline-flex items-start relative ${property1 === "sale" ? "gap-[2px]" : "gap-[4px]"}`}>
      <div style={{ color: theme ? "#fff" : "" }} 
        className={`
          w-fit mt-[-1.00px] text-gray-scalegray-900 whitespace-nowrap relative
          ${["BIG-sale", "BIG"].includes(property1) ? "font-body-XXL-body-XXL-500" : ["small-sale", "small"].includes(property1) ? "font-body-small-body-small-500" : "font-body-medium-body-medium-500"}
          ${["BIG-sale", "BIG"].includes(property1) ? "tracking-[var(--body-XXL-body-XXL-500-letter-spacing)]" : ["small-sale", "small"].includes(property1) ? "tracking-[var(--body-small-body-small-500-letter-spacing)]" : "tracking-[var(--body-medium-body-medium-500-letter-spacing)]"}
          ${["BIG-sale", "BIG"].includes(property1) ? "text-[length:var(--body-XXL-body-XXL-500-font-size)]" : ["small-sale", "small"].includes(property1) ? "text-[length:var(--body-small-body-small-500-font-size)]" : "text-[length:var(--body-medium-body-medium-500-font-size)]"}
          ${["BIG-sale", "BIG"].includes(property1) ? "[font-style:var(--body-XXL-body-XXL-500-font-style)]" : ["small-sale", "small"].includes(property1) ? "[font-style:var(--body-small-body-small-500-font-style)]" : "[font-style:var(--body-medium-body-medium-500-font-style)]"}
          ${["BIG-sale", "BIG"].includes(property1) ? "font-[number:var(--body-XXL-body-XXL-500-font-weight)]" : ["small-sale", "small"].includes(property1) ? "font-[number:var(--body-small-body-small-500-font-weight)]" : "font-[number:var(--body-medium-body-medium-500-font-weight)]"}
          ${["BIG-sale", "BIG"].includes(property1) ? "leading-[var(--body-XXL-body-XXL-500-line-height)]" : ["small-sale", "small"].includes(property1) ? "leading-[var(--body-small-body-small-500-line-height)]" : "leading-[var(--body-medium-body-medium-500-line-height)]"}
        `}
      >
        $14.99
      </div>

      {["BIG-sale", "sale", "small-sale"].includes(property1) && (
        <>
          <>
            {hasDiv && (
              <div
                className={`
                  [font-family:'Poppins-Regular',Helvetica] w-fit mt-[-1.00px] tracking-[0] text-gray-scalegray-400 relative line-through font-normal whitespace-nowrap
                  ${property1 === "BIG-sale" ? "text-[24px]" : property1 === "small-sale" ? "text-[14px]" : "text-[16px]"}
                  ${property1 === "BIG-sale" ? "leading-[36px]" : property1 === "small-sale" ? "leading-[21px]" : "leading-[24px]"}
                `}
              >
                {["BIG-sale", "sale"].includes(property1) && <>$20.99</>}
                {property1 === "small-sale" && <>$14.99</>}
              </div>
            )}
          </>
        </>
      )}
    </div>
  );
};

Price.propTypes = {
  property1: PropTypes.oneOf(["price", "BIG", "BIG-sale", "small", "sale", "small-sale"]),
  hasDiv: PropTypes.bool,
};
