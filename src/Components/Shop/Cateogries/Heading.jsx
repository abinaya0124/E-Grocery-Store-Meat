// import PropTypes from "prop-types";
// import React from "react";

// export const Heading = ({ className, vector = "vector.svg" }) => {
//   return (
//     <div className={`flex w-312 items-center justify-between px-0 py-20 relative ${className}`}>
//       {/* Heading Text */}
//       <div className="relative w-fit mt-[-1.00px] font-body-XL-body-XL-500 text-gray-scalegray-900">
//         All Categories
//       </div>

//       {/* Vector Image */}
//       <img
//         className="relative w-14 h-8 mr-[-1.00px]"
//         alt="Vector"
//         src={vector}
//       />
//     </div>
//   );
// };

// // PropTypes
// Heading.propTypes = {
//   vector: PropTypes.string,
//   className: PropTypes.string,
// };

import PropTypes from "prop-types";
// import React from "react";
import "../MainShop/shop1.css" ;
import { useThemeHook } from "../../GlobalComponents/ThemeProvider";


export const Heading = ({ className, vector = "Vector.svg" }) => {
  const [theme] = useThemeHook()

  return (
    <div className={`heading ${className}`}>
      <div style={{ color: theme ? "#fff" : "" }} className="text-wrapper">All Categories</div>
      <img className="vector" alt="Vector" src={vector} />
    </div>
  );
};

Heading.propTypes = {
  vector: PropTypes.string,
  className:PropTypes.string,
};

// export default Heading;