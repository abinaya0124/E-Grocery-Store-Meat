// import React from "react";
import Featured from "../Homepage/Feature";
import ListofItems from "../Homepage/Listofitems";
import HotDeals from "../Homepage/Hotdeals";
import Bannar from "../Homepage/Banner";
import PopularProducts from "../Homepage/PopularProducts";
import DiscountBannar from "../Homepage/DiscountBanner";
import Popular from "../Homepage/Popular";
import Testimonials from "../Homepage/Testimonials";
import { ThemeProvider } from "../GlobalComponents/ThemeProvider";
import Slide from "../Homepage/slide"
const home = () => {

  return (
    
    <ThemeProvider>
      <Slide/>
      <Featured /> 
      <ListofItems />
      <HotDeals />
      <Bannar />
      <PopularProducts />
      <DiscountBannar />
      <Popular />
      <Testimonials />
      

      </ThemeProvider>
   
  );
};

export default home;
