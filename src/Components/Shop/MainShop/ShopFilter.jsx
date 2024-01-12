// import React from "react";
// import ".../shop1.css";
import { useThemeHook } from "../../GlobalComponents/ThemeProvider";

import "../MainShop/shop1.css" ;

 const ShopFilter = () => {
  const [theme] = useThemeHook()

  return (
    <button className="button" >
      <div className="text-wrapper"> <p style={{ color: theme ? "#fff" : "black" }}>Filter </p></div>
      <div  className="filter">
        <div className="overlap">
          <div className="overlap-group">
            <img className="vector" alt="Vector" src="vector.svg" />
            <div className="ellipse" />
          </div>
          <div className="div">
            <img className="img" alt="Vector" src="image.svg" />
            <div className="ellipse-2" />
          </div>
        </div>
      </div>
    </button>
  );
};

export default ShopFilter;

