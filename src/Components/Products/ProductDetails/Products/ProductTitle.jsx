import React, { useState } from "react";
import { IoIosStar } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { useThemeHook } from "../../../GlobalComponents/ThemeProvider";

const ProductTitle = () => {
  const [theme] = useThemeHook();

  return (
    <div className="ml-2 md:ml-0">
      <div className="font-semibold text-4xl border-b-2 pb-6">
        <div className="flex gap-2 self-start">
          <h2
            className="flex md:block items-center mt-5 whitespace-wrap tex-4xl"
            style={{ color: theme ? "#fff" : "#000000" }}
          >
            Chicken
            <span className="justify-center whitespace-nowrap items-stretch bg-green-600 bg-opacity-20 px-2 py-1 text-sm text-[#FF6316] rounded-sm ml-5 ">
              In Stock
            </span>
          </h2>
        </div>
        <div
          className="mt-5
        flex items-center 
        gap-3 pr-20 self-start max-md:pr-5"
        >
          <div className="flex items-start gap-0 max-md:justify-center">
            <IoIosStar className="text-[#FF6316] text-lg" />
            <IoIosStar className="text-[#FF6316] text-lg" />
            <IoIosStar className="text-[#FF6316] text-lg" />
            <IoIosStar className="text-[#FF6316] text-lg" />
            <IoIosStar className="text-[#FF6316] text-lg" />
          </div>
          <div className="flex gap-5 items-center">
            <span
              className=" text-sm  whitespace-nowrap"
              style={{ color: theme ? "#fff" : "#666666" }}
            >
              5 Review
            </span>
            {/* <span className="text-zinc-400 text-sm font-medium">•</span> */}
            {/* <p className="text-[#333333] text-sm  whitespace-nowrap">
              SKU:<span className="text-[#666666] whitespace-nowrap">2,51,594</span>
            </p> */}
          </div>
        </div>

        <div className="flex items-center mt-5">
          <p className="text-lineThrough text-[#B3B3B3] text-xl line-through whitespace-nowrap ">
            $48.00
          </p>
          <p className="text-[#FF6316] text-2xl pl-2">$ 17.28</p>
          <p className="bg-[rgba(255,99,22,0.2)] rounded-3xl text-sm p-2 ml-6 text-orange-500 font-medium leading-5 whitespace-nowrap items-stretch bg-red-500 bg-opacity-10 self-center aspect-[2.740740740740741] justify-center my-auto px-2.5 py-1 ">
            64 % Off
          </p>
        </div>
      </div>
      <div className="border-b-2 pb-6 mt-8">
        <div className="md:flex justify-between  ">
          {/* <div className="flex items-center gap-5 ">
            <p>Brand:</p>
            <img src={farmery} />
          </div> */}
          <div className="flex items-center gap-5 ">
            <p style={{ color: theme ? "#fff" : "#000000" }}>Share item:</p>
            <div
              className="hover:bg-[#FF6316] hover:p-2 p-2 hover:text-[#fff] hover:rounded-full"
              style={{ color: theme ? "#fff" : "#000000" }}
            >
              <FaFacebookF />
            </div>
            {/* <div className="hover:bg-[#FF6316] hover:p-2 p-2 hover:text-[#fff] hover:rounded-full "><FaTwitter /></div> */}
            {/* <div className="hover:bg-[#FF6316] hover:p-2 p-2 hover:text-[#fff] hover:rounded-full "><FaPinterestP /></div> */}
            <div
              className="hover:bg-[#FF6316] hover:p-2 p-2 hover:text-[#fff] hover:rounded-full "
              style={{ color: theme ? "#fff" : "#000000" }}
            >
              <FaInstagram />
            </div>
          </div>
        </div>
        <p
          className="mt-5 text-sm"
          style={{ color: theme ? "#fff" : "#808080" }}
        >
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos
          <br /> himenaeos. Nulla nibh diam, blandit vel consequat nec, ultrices
          et ipsum. Nulla
          <br /> varius magna a consequat pulvinar.
        </p>
      </div>
    </div>
  );
};

export default ProductTitle;
