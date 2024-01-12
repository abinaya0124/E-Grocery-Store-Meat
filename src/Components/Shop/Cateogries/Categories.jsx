// // import PropTypes from "prop-types";
// // import React from "react";
// // // import { Radio } from "./Radio";

// // export const Categories = ({ className, text = "Cooking", text1 = " (54)" }) => {
// //   return (
// //     <div className={`inline-flex items-center justify-center gap-2 px-0 py-10 relative ${className}`}>
// //       {/* <Radio property1="normal" /> */}

// //       <div className="inline-flex items-start relative flex-0_0_auto">
// //         {/* Text */}
// //         <div className="relative w-fit mt-[-1.00px] font-body-small-body-small-400 text-gray-scalegray-900">
// //           {text}
// //         </div>

// //         {/* Additional Text */}
// //         <div className="relative w-fit mt-[-1.00px] font-body-small-body-small-400 text-gray-scalegray-500">
// //           {text1}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // // PropTypes
// // Categories.propTypes = {
// //   text: PropTypes.string,
// //   text1: PropTypes.string,
// //   className: PropTypes.string,
// // };

// import PropTypes from "prop-types";
// import React from "react";
// import { Radio } from "./Radio";
// import "./style.css";

// const Categories = ({ radioProperty1 = "normal", text = "Cooking", text1 = " (54)" }) => {
//   return (
//     <div className="categories">
//       <Radio property1={radioProperty1} />
//       <div className="frame">
//         <div className="cooking">{text}</div>
//         <div className="element">{text1}</div>
//       </div>
//     </div>
//   );
// };

// Categories.propTypes = {
//   radioProperty1: PropTypes.string,
//   text: PropTypes.string,
//   text1: PropTypes.string,
// };

// export default Categories;
import PropTypes from "prop-types";
// import React from "react";
import { Radio } from "./Radio";
import "../MainShop/shop1.css" ;

import { useThemeHook } from "../../GlobalComponents/ThemeProvider";


export const Categories = ({ radioProperty1 = "normal", text = "Cooking", text1 = " (54)" }) => {
  const [theme] = useThemeHook()

  return (
    <div className="categories">
      <Radio property1={radioProperty1} />
        <div style={{ color: theme ? "#fff" : "" }}className="cooking">{text}</div>
        <div style={{ color: theme ? "#fff" : "" }} className="element">{text1}</div>
      </div>
  );
};

Categories.propTypes = {
  radioProperty1: PropTypes.string,
  text: PropTypes.string,
  text1: PropTypes.string,
};

// export default Categories;

