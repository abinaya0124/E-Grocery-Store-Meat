// import PropTypes from "prop-types";
// import React from "react";
// import { Price } from "./Price";
// // import "./style.css";

// export const Product1 = ({ image = "image.svg", rating = "rating.svg" }) => {
//   return (
//     <div className="product">
//       <img className="img" alt="Product Image" src={image} />

//       <div className="product-info">
//         <div className="info">
//           <div className="div">Red Capsicum</div>
//           <Price className="price-instance" property1="sale" text="$32.00" />
//         </div>

//         <img className="img" alt="Product Rating" src={rating} />
//       </div>
//     </div>
//   );
// };

// Product1.propTypes = {
//   image: PropTypes.string,
//   rating: PropTypes.string,
// };

// // export default Product;

import PropTypes from "prop-types";
// import React from "react";
import { Price } from "./Price";
// import { text } from "@fortawesome/fontawesome-svg-core";

export const Product1 = ({ image = "image.svg", rating = "rating.svg",text="healthy" }) => {
  return (
    <div className="inline-flex items-start relative bg-gray-scalewhite rounded-6 border border-solid border-gray-scalegray-100">
      <img className="relative flex-0_0_auto w-100" alt="Product Image" src={image} />

      <div className=" flex-col items-start justify-center gap-4 pt-24 pb-22 px-2 relative flex-0_0_auto">
        <div className="relative w-176 text-1xl mt-[-1.00px] font-body-small-body-small-600 text-gray-scalegray-700 text-length-body-small-body-small-400-font-size tracking-body-small-body-small-400-letter-spacing leading-body-small-body-small-400-line-height font-body-small-body-small-400-font-style">
          {text}
        </div>

        <Price className="flex-0_0_auto" property1="sale" text="$32.00" />
      </div>

      <img className="relative flex-0_0_auto" alt="Product Rating" src={rating} />
    </div>
  );
};

Product1.propTypes = {
  image: PropTypes.string,
  rating: PropTypes.string,
};

// export default Product1;
