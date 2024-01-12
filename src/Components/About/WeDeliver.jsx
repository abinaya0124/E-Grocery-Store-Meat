// import React from "react";
import check1 from "./Images/check 1.png";
import group1 from "./Images/group1.png";
import delivery from "./Images/delivery.png";
import { useThemeHook } from "../GlobalComponents/ThemeProvider";

export const WeDelvieredYou = () => {
  const [theme] = useThemeHook();

  return (
    <div className="mt-[2rem] md:m-[5rem]">
      <div className="md:flex justify-evenly gap-28">
        <div className="md:w-[60%]">
          <h2
            className="text-6xl font-semibold max-md:text-4xl"
            style={{ color: theme ? "#fff" : "" }}
          >
            We Delivered, You Enjoy Your Order.
          </h2>
          <p className="text-stone-500 text-base mt-7">
            Ut suscipit egestas suscipit. Sed posuere pellentesque nunc,
            ultrices consectetur velit dapibus eu. Mauris sollicitudin dignissim
            diam, ac mattis eros accumsan rhoncus. Curabitur auctor bibendum
            nunc eget elementum.
          </p>
          <div className="flex flex-col mt-2">
            <div className="flex items-center mb-2">
              <img loading="lazy" src={check1} className="" />
              <p
                className="text-stone-500 text-sm pl-2"
                style={{ color: theme ? "#fff" : "" }}
              >
                Sed in metus pellentesque.
              </p>
            </div>
            <div className="flex items-center mb-2">
              <img loading="lazy" src={check1} />
              <p
                className="text-stone-500 text-sm pl-2"
                style={{ color: theme ? "#fff" : "" }}
              >
                Fusce et ex commodo, aliquam nulla efficitur, tempus lorem.
              </p>
            </div>
            <div className="flex items-center">
              <img loading="lazy" src={check1} className="" />
              <p
                className="text-stone-500 text-sm pl-2"
                style={{ color: theme ? "#fff" : "" }}
              >
                Maecenas ut nunc fringilla erat varius.
              </p>
            </div>
          </div>
          <button className="text-white text-base font-semibold leading-5 bg-[#FF6316] p-3 mt-5 rounded-full">
            Shop Now
          </button>
        </div>
        <div>
          <img loading="lazy" src={delivery} className="w-[600px]" />
        </div>
      </div>
    </div>
  );
};
