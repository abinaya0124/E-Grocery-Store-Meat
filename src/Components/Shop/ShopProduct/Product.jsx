// Product.js
import PropTypes from "prop-types";
// import React from "react";
import { AddToCart } from "./AddToCart";
import { Tag } from "./Tag";
// import { AddToWishlist } from "./AddToWishlist";
import { Price } from "./Price";
import star from "../Images/Star 1.png";
import { useThemeHook } from "../../GlobalComponents/ThemeProvider";


// import { QuickView } from "./QuickView";

export const Product = ({ property1, image = "image.png", text = "Green Apple", rating = "rating.svg" }) => {
  const [theme] = useThemeHook()
  return (
    <div  style={{ background: theme ? "black" : "" }}  className={`border border-solid w-[312px] h-[407px]  rounded-[8px] top-0 left-80 bg-gray-scalewhite relative mt-[-64]  ${property1 === "hover" ? "border-brandingsuccess-dark" : "border-gray-scalegray-100"} ${property1 === "hover" ? "shadow-hover-shadow" : ""}`}>
  <div className={`left-0 top absolute  ${["hover", "sales"].includes(property1) ? "w-[312px]" : ""} ${property1 === "default" ? "flex" : ""} ${property1 === "default" ? "flex-col" : ""} ${property1 === "default" ? "items-start" : ""} ${property1 === "default" ? "gap-[10px]" : ""} ${property1 === "default" ? "p-[5px]" : ""} ${["hover", "sales"].includes(property1) ? "h-[312px]" : ""}`}>
    {property1 === "default" && <img className="relative w-[302px] h-[302px]" alt="Image" src={image} />}
    {["hover", "sales"].includes(property1) && (
      <>
        <div className=" gap-[10px] p-[5px] mt-[-48]">
          <img className="w-[302px] h-[302px] relative" alt="Image" src={property1 === "hover" ? "./images/shop1/Image2.png" : "image-3.png"} />
        </div>
            <div
              className={`absolute ${property1 === "hover" ? "w-[40px]" : ""} ${property1 === "sales" ? "inline-flex" : ""} ${
                property1 === "hover" ? "left-[252px]" : "left-[16px]"
              } ${property1 === "sales" ? "items-center" : ""} ${property1 === "hover" ? "top-[20px]" : "top-[16px]"} ${
                property1 === "sales" ? "gap-[4px]" : ""
              } ${property1 === "sales" ? "px-[8px] py-[3px]" : ""} ${property1 === "hover" ? "h-[86px]" : ""} ${
                property1 === "sales" ? "rounded-[4px]" : ""
              } ${property1 === "sales" ? "justify-center" : ""} ${property1 === "sales" ? "bg-brandingerror" : ""}`}
            >
              {property1 === "sales" && (
                <>
                  <div className="relative w-fit mt-[-1.00px] font-body-small-body-small-400 font-[number:var(--body-small-body-small-400-font-weight)] text-gray-scalewhite text-[length:var(--body-small-body-small-400-font-size)] tracking-[var(--body-small-body-small-400-letter-spacing)] leading-[var(--body-small-body-small-400-line-height)] whitespace-nowrap [font-style:var(--body-small-body-small-400-font-style)]">
                    Sale
                  </div>
                  <div className="relative w-fit mt-[-1.00px] font-body-small-body-small-500 font-[number:var(--body-small-body-small-500-font-weight)] text-gray-scalewhite text-[length:var(--body-small-body-small-500-font-size)] tracking-[var(--body-small-body-small-500-letter-spacing)] leading-[var(--body-small-body-small-500-line-height)] whitespace-nowrap [font-style:var(--body-small-body-small-500-font-style)]">
                    50%
                  </div>
                </>
              )}
                        <Tag property1="out of stock"/>

              {property1 === "hover" && (
                <>
                  {/* <AddToWishlist className="!absolute !w-[40px] !h-[40px] !top-0 !left-0" /> */}
                  {/* <QuickView className="!absolute !w-[40px] !h-[40px] !top-[46px] !left-0" /> */}
                </>
              )}
            </div>
          </>
        )}
      </div>
      <div className="w-[312px] left-0 top-[312px] h-[95px] absolute">
        <div className="left-0 inline-flex flex-col items-start top-0 gap-[6px] p-[16px] justify-center absolute">
          <div className="inline-flex flex-col items-start flex-[0_0_auto] relative">
            <div
              style={{ color: theme ? "#fff" : "" }}
              className={`font-body-small-body-small-400 w-[280px] mt-[-1.00px] tracking-[var(--body-small-body-small-400-letter-spacing)] text-[length:var(--body-small-body-small-400-font-size)] [font-style:var(--body-small-body-small-400-font-style)] relative font-[number:var(--body-small-body-small-400-font-weight)] leading-[var(--body-small-body-small-400-line-height)] ${
                property1 === "hover" ? "text-brandingsuccess-dark" : "text-gray-scalegray-700"
              }`}
            >
              {text}
            </div>
            <Price className="!flex-[0_0_auto]" hasDiv={["default", "hover"].includes(property1) ? false : undefined} property1="sale" />
          </div>
          <div className=" inline-flex">
          <img className="flex-[0_0_auto] relative" alt="Rating" src={property1 === "sales" ? {star}: property1 === "hover" ? {star}: rating} />
          <img className="flex-[0_0_auto] relative" alt="Rating" src={property1 === "sales" ? {star}: property1 === "hover" ? {star} : rating} />
          <img className="flex-[0_0_auto] relative" alt="Rating" src={property1 === "sales" ? {star} : property1 === "hover" ? {star} : rating} />
          <img className="flex-[0_0_auto] relative" alt="Rating" src={property1 === "sales" ? {star}: property1 === "hover" ? {star} : rating} />

          </div>
 
        </div>
        <AddToCart className="!absolute !w-[40px] !h-[40px] !top-[27px] !left-[252px]" color={property1 === "hover" ? "#FF6316" : "#FF6316"} stroke={property1 === "hover" ? "white" : "black"} />
      </div>
    </div>
  );
};

Product.propTypes = {
  property1: PropTypes.oneOf(["hover", "sales", "default"]),
  image: PropTypes.string,
  text: PropTypes.string,
  rating: PropTypes.string,
};

export default Product;
