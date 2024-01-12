import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../GlobalComponents/ThemeProvider";

import Logo2 from "../images/Traceworks.png";
import { BiSearch } from "react-icons/bi";
import { GoHeart } from "react-icons/go";
import { SlHandbag } from "react-icons/sl";
import { TbSunMoon } from "react-icons/tb";

const Header = () => {
  const { theme, setThemeMode } = useContext(ThemeContext);
  const [darkMode, setDarkMode] = useState(theme);
  const [count, setCount] = useState(0);

  const [signinUp, setSigninUp] = useState(false);

  useEffect(() => {
    setThemeMode(darkMode);
    console.log(darkMode);
  }, [darkMode]);

  useEffect(() => {
    const path = window.location.pathname;
    setSigninUp(path==='/signIn'|| path==='/createAccount')
  }, [window.location.pathname]);

  return (
    <>
      <div className="flex sticky justify-around items-center m-6 w-[95%]">
        <img src={Logo2} className="w-[300px]" />
        <div className="flex border-2 items-center rounded-lg">
          <BiSearch className="text-2xl ml-2 mt-0.5" />
          <input type="text" className="px-2 w-64" placeholder="Search..." />
          <button className="bg-[#FF6316] text-white px-6 py-2 rounded-r-lg text-sm font-bold">
            Search
          </button>
        </div>
        <div className="flex gap-4">
          <TbSunMoon className="text-2xl" />
          <span className="border-r-2"></span>
          <GoHeart className="text-2xl" />
          <span className="border-r-2"></span>
          <span className="relative">
            <SlHandbag className="text-2xl absolute" />
            <span className=" bg-[#FF6316] px-2 py-0.5 text-white rounded-full absolute -mt-5 ml-3 text-sm">
              {count}
            </span>
          </span>
          <div className="ml-6 -mt-3">
            <p className="text-[#4D5D4D] text-base">Shopping cart</p>
            <p className="text-sm font-medium">$100.00</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
