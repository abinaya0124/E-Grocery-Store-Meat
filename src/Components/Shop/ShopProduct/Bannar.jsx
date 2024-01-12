// import React from "react";
import Banners from "../Images/Bannar.png";

const Bannar = () => {
  return (
    <div >
      <a href="#" alt="shop"> 
      <img src={Banners} className="inline-flex flex-col items-center gap-12 pt-0 pb-180 px-0 relative rounded-10  bg-cover bg-[50%_50%] ml-5"/>
      <div className="inline-flex flex-col items-center justify-center gap-2 pt-20 pb-0 px-0 relative flex-0_0_auto">
        {/* Discount percentage */}
        <p className="relative w-312 mt-[-1.00px] font-Poppins-SemiBold font-normal text-transparent text-32 text-center tracking-0 leading-32">
          <span className="font-heading-05-heading-05-600 text-#ff6316 leading-heading-05-heading-05-600 font-heading-05-heading-05-600 tracking-heading-05-heading-05-600-letter-spacing text-length-heading-05-heading-05-600-font-size">
            {/* 79% */}
          </span>
          <span className="font-body-XXL-body-XXL-400 text-#ff6316 text-length-body-XXL-body-XXL-400-font-size leading-body-XXL-body-XXL-400-line-height font-body-XXL-body-XXL-400 tracking-body-XXL-body-XXL-400-letter-spacing">{/*&nbsp;*/}</span>
          <span className="font-body-XXL-body-XXL-400 text-black text-length-body-XXL-body-XXL-400-font-size leading-body-XXL-body-XXL-400-line-height font-body-XXL-body-XXL-400 tracking-body-XXL-body-XXL-400-letter-spacing">{/*Discount*/}</span>
        </p>

        {/* Discount details */}
        <div className="w-312 font-body-medium-body-medium-400 text-gray-scalegray-700 text-length-body-medium-body-medium-400-font-size text-center tracking-body-medium-body-medium-400-letter-spacing leading-body-medium-body-medium-400-line-height font-body-medium-body-medium-400-font-style">
          {/* on your first order */}
        </div>
      </div>
      </a>

      {/* Shop Now button */}
      {/* <button className="inline-flex items-center gap-12 relative flex-0_0_auto rounded-43px all-unset box-border">
        <div className="w-fit mt-[-0.50px] font-body-medium-body-medium-600 text-brandingsuccess text-length-body-medium-body-medium-600-font-size tracking-body-medium-body-medium-600-letter-spacing leading-body-medium-body-medium-600-line-height whitespace-nowrap font-body-medium-body-medium-600-font-style">
          {/* Shop Now */}
        {/* </div>  */}
        {/* <img className="w-16.5 h-13.55 mr-[-0.75px]" alt="Arrow" src="arrow.png" /> */}
      {/* </button> */}
    </div>
  );
};

export default Bannar;
