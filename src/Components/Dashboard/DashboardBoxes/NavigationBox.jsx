import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdDashboard } from "react-icons/md";
import { BsArrowRepeat } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import { SlHandbag } from "react-icons/sl";
import { LuSettings } from "react-icons/lu";
import { IoLogOutOutline } from "react-icons/io5";
import { useThemeHook } from "../../GlobalComponents/ThemeProvider";

const NavigationBox = () => {
  const [active, setActive] = useState({
    "/dashboard": location.pathname === "/dashboard",
    "/order-history":
      location.pathname === "/order-history" ||
      location.pathname === "/order-details",
    "/wishlist": location.pathname === "/wishlist",
    "/cart": location.pathname === "/cart",
    "/setting": location.pathname === "/setting",
    "/logout": location.pathname === "/logout",
  });

  const [theme] = useThemeHook();

  const handleNavLinkClick = (path) => {
    setActive((prevData) => ({
      ...prevData,
      [path]: true,
    }));
  };

  const activeStyle = (path) => {
    return {
      backgroundColor: active[path] ? "rgba(255,92,22, 0.25)" : "",
      fontWeight: active[path] ? "Bold" : "",
      borderLeft: active[path] ? "2px solid green" : "",
    };
  };

  return (
    <div
      className=" text-black border-2 rounded-lg m-2 md:mr-3"
      style={{ backgroundColor: theme ? "#535353" : "" }}
    >
      <h3
        className="font-medium text-xl pt-5 pl-6 "
        style={{ color: theme ? "#fff" : "" }}
      >
        Navigation
      </h3>
      <div className="flex flex-col py-5">
        <NavLink
          onClick={() => handleNavLinkClick("/dashboard")}
          style={activeStyle("/dashboard")}
          className="px-10 py-3 mb-2 flex items-center gap-2"
          to="/dashboard"
        >
          <MdDashboard
            className="text-xl"
            style={{ color: theme ? "#fff" : "" }}
          />
          <p style={{ color: theme ? "#fff" : "" }}>Dashboard</p>
        </NavLink>
        <NavLink
          onClick={() =>
            handleNavLinkClick("/order-history" || "/order-details")
          }
          style={activeStyle("/order-history" || "/order-details")}
          className="px-10 py-2 mb-2 flex items-center gap-2"
          to="/order-history"
        >
          <BsArrowRepeat
            className="text-xl"
            style={{ color: theme ? "#fff" : "" }}
          />
          <p style={{ color: theme ? "#fff" : "" }}> Order History</p>
        </NavLink>
        <NavLink
          onClick={() => handleNavLinkClick("/wishlist")}
          style={activeStyle("/wishlist")}
          className="px-10 py-2 mb-2 flex items-center gap-2"
          to="/wishlist"
        >
          <GoHeart className="text-xl" style={{ color: theme ? "#fff" : "" }} />
          <p style={{ color: theme ? "#fff" : "" }}>Wishlist</p>
        </NavLink>
        <NavLink
          onClick={() => handleNavLinkClick("/ShoppingPage")}
          style={activeStyle("/ShoppingPage")}
          to="/ShoppingPage"
          className="px-10 py-2 mb-2 flex items-center gap-2"
        >
          <SlHandbag
            className="text-xl"
            style={{ color: theme ? "#fff" : "" }}
          />
          <p style={{ color: theme ? "#fff" : "" }}>Shopping Cart</p>
        </NavLink>
        <NavLink
          className="px-10 py-2 mb-2 flex items-center gap-2"
          onClick={() => handleNavLinkClick("/setting")}
          style={activeStyle("/setting")}
          to="/setting"
        >
          <LuSettings
            className="text-xl"
            style={{ color: theme ? "#fff" : "" }}
          />
          <p style={{ color: theme ? "#fff" : "" }}>Settings</p>
        </NavLink>
        <NavLink
          className="px-10 py-2 mb-2 flex items-center gap-2"
          onClick={() => setActive("/order")}
          style={active ? activeStyle : ""}
          to="/logout"
        >
          <IoLogOutOutline
            className="text-xl"
            style={{ color: theme ? "#fff" : "" }}
          />
          <p style={{ color: theme ? "#fff" : "" }}> Log-out</p>
        </NavLink>
      </div>
    </div>
  );
};

export default NavigationBox;
