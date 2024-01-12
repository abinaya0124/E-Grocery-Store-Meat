// import React from "react";
// import { Checkbox } from "./Checkbox";
// import { ConcreteComponentNode } from "./ConcreteComponentNode";
import { Heading } from "./Heading";
import VectorUp from "../Images/Vectorup.png";
import star from "../Images/Star 1.png";
import { useThemeHook } from "../../GlobalComponents/ThemeProvider";


export const Rating = () => {
  const [theme] = useThemeHook()

  return (
    <div  className="inline-flex flex-col items-start relative ">
      <Heading className="!flex-[0_0_auto] bg-gray-scalewhite" text="Rating" vector={VectorUp} />

      {/* Star Rating Filter */}
      <div  className="inline-flex items-center justify-center gap-[8px] px-0 py-[10px] relative flex-[0_0_auto] form-checkbox">
        {/* <ConcreteComponentNode property1="normal" /> */}
        <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
        <div className="inline-flex items-center relative flex-[0_0_auto] form-checkbox">
          <img className="relative w-[18px] h-[18px]" alt="Star" src={star} />
          <img className="relative w-[18px] h-[18px]" alt="Star" src={star} />
          <img className="relative w-[18px] h-[18px]" alt="Star" src={star} />
          <img className="relative w-[18px] h-[18px]" alt="Star" src={star} />
          <img className="relative w-[18px] h-[18px]" alt="Star" src={star} />

          <div style={{ color: theme ? "#fff" : "" }}  className="relative w-fit mt-[-1.00px] ml-3 font-body-small-body-small-400 font-[number:var(--body-small-body-small-400-font-weight)] text-gray-scalegray-900 text-[length:var(--body-small-body-small-400-font-size)] tracking-[var(--body-small-body-small-400-letter-spacing)] leading-[var(--body-small-body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-body-small-400-font-style)]">
            {" "} 5.0
          </div>
        </div>
      </div>

      {/* Checkbox Filter */}
      <div className="inline-flex items-center justify-center gap-[8px] px-0 py-[10px] relative flex-[0_0_auto]">
      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
        <div className="inline-flex items-center relative flex-[0_0_auto]">
          {/* <img className="relative w-[18px] h-[18px]" alt="Star" src="image.svg" /> */}
          <img className="relative w-[18px] h-[18px]" alt="Star" src={star} />
          <img className="relative w-[18px] h-[18px]" alt="Star" src={star} />
          <img className="relative w-[18px] h-[18px]" alt="Star" src={star} />
          <img className="relative w-[18px] h-[18px]" alt="Star" src={star} />
          <div style={{ color: theme ? "#fff" : "" }}  className="relative w-fit mt-[-1.00px] font-body-small-body-small-400 font-[number:var(--body-small-body-small-400-font-weight)] text-gray-scalegray-900 text-[length:var(--body-small-body-small-400-font-size)] tracking-[var(--body-small-body-small-400-letter-spacing)] leading-[var(--body-small-body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-body-small-400-font-style)]">
            {" "} 4.0 &amp; up
          </div>
        </div>
      </div>

      <div className="inline-flex items-center justify-center gap-[8px] px-0 py-[10px] relative flex-[0_0_auto]">
      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
        <div className="inline-flex items-center relative flex-[0_0_auto]">
          {/* <img className="relative w-[18px] h-[18px]" alt="Star" src="image.svg" /> */}
          <img className="relative w-[18px] h-[18px]" alt="Star" src={star} />
          <img className="relative w-[18px] h-[18px]" alt="Star" src={star} />
          <img className="relative w-[18px] h-[18px]" alt="Star" src={star} />
          {/* Add more stars or icons for this category */}
          <div style={{ color: theme ? "#fff" : "" }}  className="relative w-fit mt-[-1.00px] font-body-small-body-small-400 font-[number:var(--body-small-body-small-400-font-weight)] text-gray-scalegray-900 text-[length:var(--body-small-body-small-400-font-size)] tracking-[var(--body-small-body-small-400-letter-spacing)] leading-[var(--body-small-body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-body-small-400-font-style)]">
            {" "} 3.0 &amp; up
          </div>
        </div>
      </div>

      <div className="inline-flex items-center justify-center gap-[8px] px-0 py-[10px] relative flex-[0_0_auto]">
      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
        <div className="inline-flex items-center relative flex-[0_0_auto]">
        <img className="relative w-[18px] h-[18px]" alt="Star" src={star} />
          <img className="relative w-[18px] h-[18px]" alt="Star" src={star} />
          <div style={{ color: theme ? "#fff" : "" }}  className="relative w-fit mt-[-1.00px] font-body-small-body-small-400 font-[number:var(--body-small-body-small-400-font-weight)] text-gray-scalegray-900 text-[length:var(--body-small-body-small-400-font-size)] tracking-[var(--body-small-body-small-400-letter-spacing)] leading-[var(--body-small-body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-body-small-400-font-style)]">
            {" "} 2.0 &amp; up
          </div>
        </div>
      </div>

      <div className="inline-flex items-center justify-center gap-[8px] px-0 py-[10px] relative flex-[0_0_auto]">
      <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
        <div className="inline-flex items-center relative flex-[0_0_auto]">
        <img className="relative w-[18px] h-[18px]" alt="Star" src={star} />
          {/* Add more stars or icons for this category */}
          <div style={{ color: theme ? "#fff" : "" }}  className="relative w-fit mt-[-1.00px] font-body-small-body-small-400 font-[number:var(--body-small-body-small-400-font-weight)] text-gray-scalegray-900 text-[length:var(--body-small-body-small-400-font-size)] tracking-[var(--body-small-body-small-400-letter-spacing)] leading-[var(--body-small-body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-body-small-400-font-style)]">
            {" "} 1.0 &amp; up
          </div>
        </div>
      </div>
      {/* Repeat the structure for other filter categories */}
    </div>
  );
};
