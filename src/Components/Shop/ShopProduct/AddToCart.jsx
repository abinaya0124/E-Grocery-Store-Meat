// import React from "react";
import Bag from "../Images/Bag.png";
export const AddToCart = () => {
  return (
    <div className="relative w-[40px] h-[40px] bg-gray-scalegray-50 rounded-[80px] left-60">
      <img className="absolute w-[20px] h-[20px] top-[10px] left-[10px]" alt="Bag" src={Bag} />
    </div>
  );
};
