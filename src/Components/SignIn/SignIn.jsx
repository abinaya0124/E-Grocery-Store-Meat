import React from "react";
import { Link } from "react-router-dom";
import { useThemeHook } from "../GlobalComponents/ThemeProvider";
const SignIn = () => {
  const [theme] = useThemeHook();
  return (
    <div
      className="md:flex justify-center items-center "
      style={{ backgroundColor: theme ? "#000000" : "" }}
    >
      <div
        style={{ boxShadow: "0 0 3px 0 rgba(0, 38, 3, 0.5)" ,backgroundColor: theme ? "#2A2C38" : "" }}
        className="rounded-lg md:mt-16 md:mb-16 m-1 md:m-0 ml-1 md:ml-0"
      >
        <h3 className="font-semibold text-3xl flex justify-center pt-3"
        style={{ color: theme ? "#fff" : "" }}
        >
          Sign In
        </h3>
        <div className="flex flex-col md:w-96">
          <input
            type="email"
            placeholder="Email"
            className="border-2 placeholder-red-400 outline-none p-2 m-5 mb-0 rounded-lg"
          />
          <input
            type="Password"
            placeholder="Password"
            className="border-2 placeholder-red-400 outline-none p-2 m-5 rounded-lg"
          />
        </div>
        <div className="flex pl-5 justify-between pr-5 mb-3">
          <div className="flex">
            <input type="checkbox" className="" />
            <p className="text-[#666666] text-sm pl-1"  style={{ color: theme ? "#fff" : "" }}>Remember me</p>
          </div>
          <p className="text-[#666666] text-sm"  style={{ color: theme ? "#fff" : "" }}>Forget Password</p>
        </div>
        <div className="flex justify-center">
          <button className="bg-[#FF6316] rounded-full text-sm font-semibold w-[90%] p-2 text-white">
            Login
          </button>
        </div>
        <p className="text-[#666666] text-sm flex justify-center m-3 pb-2 md:pl-0"  style={{ color: theme ? "#fff" : "" }}>
          Don't have account?
          <span className="font-semibold text-black pl-1">
            <Link to="/signin"  style={{ color: theme ? "#fff" : "" }}>Register</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
