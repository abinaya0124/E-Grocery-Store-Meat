// import React from "react";
import { Heading } from "./Heading";
import { Tag1 } from "./Tag1";
import VectorUp from "../Images/Vectorup.png";

import { useThemeHook } from "../../GlobalComponents/ThemeProvider";



const PopularTag = () => {
  const [theme] = useThemeHook()

  return (
    <div className="flex-column items-start justify-center pt-0 pb-[29px] px-0  mr-6  ">
      <Heading className="!flex-[0_0_auto] !shadow-[0px_-1px_0px_#e5e5e5] text-black text-2xl font-medium leading-8" text="Popular Tag" vector={VectorUp} />
      <div className="relative w-[294px] h-[197px] ">
        <Tag1 className="!absolute !left-0 !top-0  mr-8" property1="default" />
        <Tag1 className="!left-[94px] !absolute !top-0 gap-3" property1="hover" text="Low fat" />
        <Tag1 className="!left-[184px] !absolute !top-0" property1="default" text="Vegetarian" />
        <Tag1 className="!left-0 !absolute !top-[82px]" property1="default" text="Meat" />
        <Tag1 className="!left-0 !absolute !top-[41px]" property1="default" text="Kid foods" />
        <Tag1 className="!left-[105px] !absolute !top-[41px]" property1="default" text="Vitamins" />
        <Tag1 className="!left-[76px] !absolute !top-[82px]" property1="default" text="Snacks" />
        <Tag1 className="!left-[177px] !absolute !top-[123px]" property1="default" text="Breakfast" />
        <Tag1 className="!left-[166px] !absolute !top-[82px]" property1="default" text="Tiffin" />
        <Tag1 className="!left-0 !absolute !top-[123px]" property1="default" text="Lunch" />
        <Tag1 className="!left-[91px] !absolute !top-[123px]" property1="default" text="Dinner" />
        <Tag1 className="!left-[207px] !absolute !top-[41px]" property1="default" text="Bread" />
        <Tag1 className="!left-0 !absolute !top-[164px]" property1="default" text="Fruit" />
      </div>
    </div>
  );
};

export default PopularTag;
