import Group from "../images/banner/Groupwhite.svg";
import Image from "../images/banner/Discount Bannar1.png";
import { useState } from "react";

const DiscountBannar = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex-col justify-center overflow-hidden relative flex min-h-[358px] pl-20 pr-12 py-12 mr-9 ml-9 items-end max-md:px-5"
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        loading="lazy"
        src={Image}
        className="absolute h-full w-full object-cover object-center inset-0"
      />
      <div className="relative text-white text-base font-medium leading-4 tracking-wide uppercase mr-56 mt-2.5 max-md:mr-2.5">
        Summer Sale
      </div>
      <div className="relative text-white text-6xl font-semibold leading-[67.2px] whitespace-nowrap mr-56 mt-3 max-md:text-4xl max-md:mr-2.5">
        <span style={{ color: '#FF6316' }}>37%</span> <span className="">OFF</span>
      </div>
      <div className="relative text-white text-base leading-6 w-[441px] max-w-full mt-4">
        Free on all your order, Free Shipping and 30 days money-back guarantee
      </div>
      <div
        style={{ backgroundColor: isHovered ? '#FF4500' : '#FF6316' }}
        className="relative justify-center items-stretch flex gap-4 mr-64 mt-7 mb-2.5 px-10 py-4 rounded-[43px] max-md:mr-2.5 max-md:px-5 cursor-pointer transition-background"
        onClick={() => console.log("Shop Now Clicked!")} 
      >
        <div className={`text-white text-base font-semibold leading-5 ${isHovered ? 'focus:outline-none' : ''}`}>
          Shop Now
        </div>
        <img
          loading="lazy"
          src={Group}
          className="aspect-[1.15] object-contain object-center w-[15px] overflow-hidden self-center shrink-0 max-w-full my-auto"
        />
      </div>
    </div>
  );
};

export default DiscountBannar;
