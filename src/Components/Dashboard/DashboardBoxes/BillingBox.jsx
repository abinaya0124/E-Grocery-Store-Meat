// import React from "react";
import { NavLink } from "react-router-dom";
import { useThemeHook } from "../../GlobalComponents/ThemeProvider";

const BillingBox = () => {
  const [theme] = useThemeHook();
  return (
    <div className="border-2 h-72 rounded-lg m-2 md:m-0 md:pr-28 md:pl-10" style={{ backgroundColor: theme ? "#535353" : "" }}>
      <div className="flex flex-col items-right pl-3 md:pl-0 pt-10">
        <p className="text-[#FF0000] font-medium text-sm pb-2">
          BILLING ADDRESS
        </p>
        <p className="font-medium text-lg pb-2" style={{ color: theme ? "#fff" : "" }}>Dainne Russell</p>
        <p className="text-[#666666] text-sm pb-2" style={{ color: theme ? "#999999" : "" }}>
          4140 Parker Rd. Allentown, New Mexico
          <br /> 31134
        </p>
        <p className="text-base pb-2" style={{ color: theme ? "#fff" : "" }}>dainne.ressell@gmail.com</p>
        <p className="text-base pb-2" style={{ color: theme ? "#fff" : "" }}>(671) 555-0110</p>
        <NavLink to="" className="text-base text-[#FF6316] font-medium">
          Edit Address
        </NavLink>
      </div>
    </div>
  );
};

export default BillingBox;
