import "./OrderDetails.css";
import NavigationBox from "../DashboardBoxes/NavigationBox";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import ProductsOrdered from "./ProductsOrdered";
import { useThemeHook } from "../../GlobalComponents/ThemeProvider";

const OrderDetails = () => {
  const steps = ["Order received", "Processing", "On the way", "Delivered"];
  const [currentStep, setCurrentStep] = useState(2);
  const [complete, setComplete] = useState();
  const [theme] = useThemeHook();

  return (
    <div
      className="md:flex font-poppins justify-center"
      style={{ backgroundColor: theme ? "black" : "" }}
    >
      <div>
        <NavigationBox />
      </div>
      <div
        className="border-2 rounded-lg m-2 md:m-0"
        style={{
          color: theme ? "#fff" : "#000",
          backgroundColor: theme ? "#535353" : "",
        }}
      >
        <div>
          <div className="flex justify-between border-b-2">
            <div className="flex items-center m-3">
              <h3 className="font-medium text-xl">Order Details</h3>
              <span className="text-[#4D4D4D] text-sm"></span>
              <p className="text-[#4D4D4D] text-sm pl-3">April 24, 2021</p>
              <span className="text-[#4D4D4D] text-sm pl-3"></span>
              <p className="text-[#4D4D4D] text-sm">3 Products</p>
            </div>
            <NavLink className="text-[#FF6316] font-medium text-base m-3">
              Back to List
            </NavLink>
          </div>

          <div className="md:flex">
            <div className="md:flex border-2 m-2  md:m-6 rounded-lg">
              <div className="md:border-r-2">
                <p className="text-[#FF0000] font-medium text-sm border-b-2 p-3">
                  BILLING ADDRESS
                </p>
                <div className="p-3">
                  <p className="text-base">Dainne Russell</p>
                  <p
                    className="text-[#666666] text-sm"
                    style={{
                      color: theme ? "#999999" : "",
                    }}
                  >
                    4140 Parker Rd. Allentown, New Mexico <br />
                    31134
                  </p>
                  <p className="text-[#FF0000] pt-5 font-medium text-xs">
                    Email
                  </p>
                  <p className="text-sm">dainne.ressell@gmail.com</p>
                  <p className="text-[#FF0000] pt-5 font-medium text-xs">
                    Phone
                  </p>
                  <p className="text-sm">(671) 555-0110</p>
                </div>
              </div>
              <div>
                <p className="text-[#FF0000] font-medium text-sm border-b-2 p-3">
                  SHIPPING ADDRESS
                </p>
                <div className="p-3">
                  <p className="text-base">Dainne Russell</p>
                  <p
                    className="text-[#666666] text-sm"
                    style={{
                      color: theme ? "#999999" : "",
                    }}
                  >
                    4140 Parker Rd. Allentown, New Mexico <br />
                    31134
                  </p>
                  <p className="text-[#FF0000] pt-5 font-medium text-xs">
                    Email
                  </p>
                  <p className="text-sm">dainne.ressell@gmail.com</p>
                  <p className="text-[#FF0000] pt-5 font-medium text-xs">
                    Phone
                  </p>
                  <p className="text-sm">(671) 555-0110</p>
                </div>
              </div>
            </div>
            <div className=" border-2 rounded-lg md:mt-6 md:mr-6 h-[250px] m-2 md:m-0">
              <div className="flex border-b-2">
                <div className="border-r-2 p-3">
                  <p className="text-[#FF0000] font-medium text-xs">
                    ORDER ID:
                  </p>
                  <p className="text-sm">#4152</p>
                </div>
                <div className="p-3">
                  <p className="text-[#FF0000] font-medium text-xs">
                    PAYMENT METHOD:
                  </p>
                  <p className="text-sm">Paypal</p>
                </div>
              </div>
              <div>
                <div className="flex justify-between border-b-2 m-2 p-2">
                  <p
                    className="text-[#666666] text-sm"
                    style={{
                      color: theme ? "#999999" : "",
                    }}
                  >
                    Subtotal:
                  </p>
                  <p className="font-medium text-sm">$361.50</p>
                </div>
                <div className="flex justify-between border-b-2 m-2 p-2">
                  <p
                    className="text-[#666666] text-sm"
                    style={{
                      color: theme ? "#999999" : "",
                    }}
                  >
                    Discount:
                  </p>
                  <p className="font-medium text-sm">20%</p>
                </div>
                <div className="flex justify-between border-b-2 m-2 p-2">
                  <p
                    className="text-[#666666] text-sm"
                    style={{
                      color: theme ? "#999999" : "",
                    }}
                  >
                    Shipping:
                  </p>
                  <p className="font-medium text-sm">Free</p>
                </div>
                <div className="flex justify-between mx-2 px-2 ">
                  <p className="text-lg">Total:</p>
                  <p className="text-lg text-[#FF6316] font-semibold">$84.00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-evenly ml-2 md:ml-8 mt-6 md:w-[800px]">
            {steps?.map((step, id) => (
              <div
                key={id}
                style={{ color: theme ? "#CCCCCC" : "" }}
                className={`step-item ${currentStep === id + 1 && "active"} ${
                  (id + 1 < currentStep || complete) && "complete"
                }
                  `}
              >
                <div className="step">{id + 1}</div>
                <p
                  className="text-[#333333] text-sm "
                  style={{
                    color: theme ? "#fff" : "#000",
                  }}
                >
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>
        <ProductsOrdered />
      </div>
    </div>
  );
};

export default OrderDetails;
