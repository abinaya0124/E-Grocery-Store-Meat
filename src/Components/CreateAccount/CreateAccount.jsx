import React from "react";
import { Link } from "react-router-dom";
import { useThemeHook } from "../GlobalComponents/ThemeProvider";

const CreateAccount = () => {
  const [theme] = useThemeHook();
  return (
    <div
      className="flex justify-center items-center"
      style={{ backgroundColor: theme ? "#000000" : "" }}
    >
      <div
        style={{
          boxShadow: "0 0 3px 0 rgba(0, 38, 3, 0.5)",
          backgroundColor: theme ? "#2A2C38" : "",
        }}
        className="w-[90%] md:w-fit rounded-lg mt-6 md:mt-16 mb-16"
      >
        <h3
          className="font-semibold text-3xl flex justify-center pt-3"
          style={{ color: theme ? "#fff" : "" }}
        >
          Create Account
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
            className="border-2 placeholder-red-400 outline-none mb-0 p-2 m-5 rounded-lg"
          />
          <input
            type="Password"
            placeholder="Confirm Password"
            className="border-2 placeholder-red-400 outline-none p-2 m-5 rounded-lg"
          />
        </div>
        <div className="flex pl-5 mb-3">
          <input type="checkbox" />
          <p
            className="text-[#666666] text-sm pl-2"
            style={{ color: theme ? "#fff" : "" }}
          >
            Accept all terms & conditions
          </p>
        </div>
        <div className="flex justify-center">
          <button className="bg-[#FF6316] rounded-full text-sm font-semibold w-[90%] p-2 text-white mt-2 mb-1">
            Create Account
          </button>
        </div>
        <p
          className="text-[#666666] text-sm flex justify-center m-3 pb-1 "
          style={{ color: theme ? "#fff" : "" }}
        >
          Already have account?
          <span className="font-semibold text-black pl-1">
            {" "}
            <Link to="/createAccount" style={{ color: theme ? "#fff" : "" }}>
              Login
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default CreateAccount;
