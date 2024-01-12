import React from "react";
import Bannar from "./banner";
import Contact from "./contactInfo";
import JustSayHello from "./sayHello";
import { ThemeProvider } from "../GlobalComponents/ThemeProvider";
const main = () => {
  return (
    <ThemeProvider>
      <Bannar />
      <Contact />
      <JustSayHello />
    </ThemeProvider>
  );
};

export default main;
