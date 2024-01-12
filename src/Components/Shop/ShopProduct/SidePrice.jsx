// import React from "react";
import { Heading } from "./Heading";
import VectorUp from "../Images/Vectorup.png";
// import { useState } from "react";
import { useThemeHook } from "../../GlobalComponents/ThemeProvider";


export const SidePrice = () => {
    const [theme] = useThemeHook()

  return (
    <div className="flex-col gap-[10px] pt-0 pb-[24px] px-0 relative ">
      <Heading className="!flex-[0_0_auto] !shadow-[0px_-1px_0px_#e5e5e5] !pt-[20px] !pb-[4px] !px-0" text="Price" vector={VectorUp} />
      <div className="relative w-[112px] h-[18px]">
        <div className="relative h-[18px] mt-4" >
          <div className="absolute w-[312px] h-[6px] top-[6px] left-0 bg-gray-scalegray-100 rounded-[15px]  " />
          <div className="absolute w-[200px] h-[6px] top-[6px] left-[42px] bg-brandingsuccess rounded-[15px]   " />
          <div className="absolute w-[18px] h-[18px] top-0 left-[33px] bg-gray-scalewhite rounded-[9px] border-2 border-solid border-brandingsuccess  " />
          <div className="absolute w-[18px] h-[18px] top-0 left-[231px] bg-gray-scalewhite rounded-[9px] border-2 border-solid border-brandingsuccess  " />
        </div>
      </div>
      <p style={{ color: theme ? "#fff" : "" }}  className="relative w-fit [font-family:'Poppins-Regular',Helvetica] font-normal text-transparent text-[14px] tracking-[0] leading-[21px] whitespace-nowrap">
        <span style={{ color: theme ? "#fff" : "" }}   className="text-[#4c4c4c] font-body-small-body-small-400 [font-style:var(--body-small-body-small-400-font-style)] font-[number:var(--body-small-body-small-400-font-weight)] tracking-[var(--body-small-body-small-400-letter-spacing)] leading-[var(--body-small-body-small-400-line-height)] text-[length:var(--body-small-body-small-400-font-size)]  ml-5">
          Price:
        </span>
        <span style={{ color: theme ? "#fff" : "" }}  className="font-body-small-body-small-500 font-[number:var(--body-small-body-small-500-font-weight)] text-black [font-style:var(--body-small-body-small-500-font-style)] tracking-[var(--body-small-body-small-500-letter-spacing)] leading-[var(--body-small-body-small-500-line-height)] text-[length:var(--body-small-body-small-500-font-size)]">
          {" "} 50 — 1,500
        </span>
      </p>
    </div>
  );
};
// export const SidePrice = () => {
//   const [minValue, setMinValue] = useState(0);
//   const [maxValue, setMaxValue] = useState(100);

//   const handleMinChange = (e) => {
//     const value = parseInt(e.target.value, 10);
//     setMinValue(value);
//   };

//   const handleMaxChange = (e) => {
//     const value = parseInt(e.target.value, 10);
//     setMaxValue(value);
//   };

//   const minHandleStyle = {
//     left: `${((minValue - 0) / (100 - 0)) * 100}%`,
//   };

//   const maxHandleStyle = {
//     left: `${((maxValue - 0) / (100 - 0)) * 100}%`,
//   };

//   return (
//     <div className="relative h-[18px] mt-4">
//       <div className="absolute w-10 h-[6px] top-[6px] left-0 bg-gray-100 rounded-[15px] ml-8" />
//       <div
//         className="absolute h-[6px] top-[6px] bg-brandingsuccess rounded-[15px] ml-5 w-10"
//         style={{
//           width: `${((maxValue - minValue) / (100 - 0)) * 18}%`,
//           left: `${((minValue - 0) / (100 - 0)) * 18}%`,
//         }}
//       />
//       <div
//         className="absolute w-[18px] h-[18px] top-0 bg-gray-scalewhite rounded-[9px] border-2 border-solid border-brandingsuccess ml-5"
//         style={minHandleStyle}
//       />
//       <div
//         className="absolute w-[18px] h-[18px] top-0 bg-gray-scalewhite rounded-[9px] border-2 border-solid border-brandingsuccess ml-5"
//         style={maxHandleStyle}
//       />
//       <input
//         type="range"
//         min="0"
//         max="100"
//         value={minValue}
//         onChange={handleMinChange}
//         className="absolute invisible"
//       />
//       <input
//         type="range"
//         min="0"
//         max="100"
//         value={maxValue}
//         onChange={handleMaxChange}
//         className="absolute invisible"
//       />
      
//     </div>
//   );
// };

// export default PriceSlider;