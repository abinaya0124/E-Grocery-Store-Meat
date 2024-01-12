import PropTypes from "prop-types";
// import React from "react";
// import { Property1Checked } from "./Property1Checked";
// import { Property1None } from "./Property1None";

export const Checkbox = ({ property1 }) => {
  return (
    <>
      {["hover", "normal"].includes(property1) && (
        <div className={`border border-solid w-[20px] h-[20px] rounded-[3px] bg-gray-scalewhite relative ${property1 === "hover" ? "border-brandingsuccess" : "border-gray-scalegray-200"}`} />
      )}
      {/* {property1 === "checked" && <Property1Checked className="!absolute !w-[20px] !h-[20px] !top-0 !left-0" />}
      {property1 === "none" && <Property1None className="!absolute !w-[20px] !h-[20px] !top-0 !left-0" />} */}
    </>
  );
};

Checkbox.propTypes = {
  property1: PropTypes.oneOf(["none", "checked", "hover", "normal"]),
};
