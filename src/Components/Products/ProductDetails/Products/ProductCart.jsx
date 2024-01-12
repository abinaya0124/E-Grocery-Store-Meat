import React, { useState } from "react";
import { GoHeart } from "react-icons/go";
import { SlHandbag } from "react-icons/sl";
import { CgMathMinus } from "react-icons/cg";
import { HiMiniPlus } from "react-icons/hi2";
import { useThemeHook } from "../../../GlobalComponents/ThemeProvider";

const ProductCart = () => {
  const [theme] = useThemeHook();
  const [count, setCount] = useState(0);
  const handleAdd = () => {
    setCount(count + 1);
  };
  const handleSub = () => {
    count ? setCount(count - 1) : "";
  };

  return (
    <div className="ml-2 md:ml-0">
      <div className="flex mt-5 pb-6 border-b-2 mb-6 items-center justify-between max-md:max-w-full">
        <div>
          <div className="shadow-sm flex md:gap-3 border-2 rounded-full p-1 md:p-2 items-center">
            <p
              onClick={handleSub}
              className="bg-[#F2F2F2] rounded-3xl px-2 py-2 text-sm md:text-lg cursor-pointer"
            >
              <CgMathMinus />
            </p>
            <p
              className="text-sm md:text-lg "
              style={{ color: theme ? "#fff" : "#000000" }}
            >
              {count}
            </p>
            <p
              onClick={handleAdd}
              className="bg-[#F2F2F2] rounded-3xl px-2 py-2 text-sm md:text-lg cursor-pointer"
            >
              <HiMiniPlus />
            </p>
          </div>
        </div>
        <div className="flex items-center justify-center grow basis-[0%] flex-col">
          <h3 className="flex items-center bg-[#FF6316] rounded-full text-base md:text-lg text-[#fff] gap-2 dark:text-black px-3 py-2 md:py-2.5 md:px-16">
            Add to Cart<span>|</span>
            <SlHandbag />
          </h3>
        </div>
        <p className="bg-green-600 bg-opacity-10 rounded-3xl px-3 py-3 text-xl text-[#FF6316]">
          <GoHeart className="aspect-square object-contain object-center w-full overflow-hidden" />
        </p>
      </div>
      <div>
        <p
          className="text-black-600 mb-2 leading-5 grow whitespace-nowrap"
          style={{ color: theme ? "#fff" : "#000000" }}
        >
          Categories:
          <span style={{ color: theme ? "#fff" : "#808080" }}>
            Chicken, Fish, Meat
          </span>
        </p>

        <p
          className=" flex gap-1.5 mt-3"
          style={{ color: theme ? "#fff" : "#000000" }}
        >
          Tag:
          <span style={{ color: theme ? "#fff" : "#808080" }}>
            Chicken <span> </span>
            <span
              className="underline decoration-solid"
              style={{ color: theme ? "#fff" : "#000000" }}
            >
              Prawn<span> </span>
            </span>
            Fish, Lobster
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProductCart;
