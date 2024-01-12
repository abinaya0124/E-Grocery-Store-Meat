import React from "react";
import product from "../Images/product.png";
import product1 from "../Images/product1.png";
import product2 from "../Images/product2.png";
import product3 from "../Images/product3.png";
import product4 from "../Images/product4.png";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import ProductCart from "./Products/ProductCart";
import ProductTitle from "./Products/ProductTitle";

const ProductImage = () => {
  return (
    <div className="md:flex md:gap-20 md:items-center">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
          <div className="overflow-hidden flex md:align-center md:justify-center object-contain object-center max-md:max-w-full">
            {/* <div className="md:mt-3 flex flex-col md:gap-3 align-middle justify-center items-center pr-8">
              <IoIosArrowUp className="text-[#FF6316] text-2xl mb-6" />
              <img src={product1} className="h-14 md:h-20" />
              <img src={product2} className="h-14 md:h-20"/>
              <img src={product3} className="h-14 md:h-20"/>
              <img src={product4} className="h-14 md:h-20"/>
              <IoIosArrowDown className="text-[#FF6316] text-2xl mt-6" />
            </div> */}
            <img
              src="https://media.self.com/photos/62cd9c3069671d734f919d0f/16:9/w_4010,h_2256,c_limit/should-you-wash-chicken.jpg"
              className="md:mt-16 md:h-96 w-[100%] md:w-[100%]"
            />
          </div>
        </div>
        <div className="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
          <div className="items-stretch flex flex-col max-md:max-w-full max-md:mt-6">
            <ProductTitle />
            <ProductCart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImage;
