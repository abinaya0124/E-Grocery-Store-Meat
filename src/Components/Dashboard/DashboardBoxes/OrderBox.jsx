import React from "react";
import { NavLink } from "react-router-dom";
import { useThemeHook } from "../../GlobalComponents/ThemeProvider";

const OrderBox = () => {
  const [theme] = useThemeHook();
  const items = [
    {
      orderId: "#232",
      date: "8 sep, 2020",
      total: "$135.00 (5 Products)",
      status: "Processing",
    },
    {
      orderId: "#232",
      date: "8 sep, 2020",
      total: "$135.00 (10 Products)",
      status: "On the way",
    },
    {
      orderId: "#232",
      date: "5 sep, 2020",
      total: "$135.00 (3 Products)",
      status: "Completed",
    },
    {
      orderId: "#232",
      date: "9 sep, 2020",
      total: "$135.00 (1 Products)",
      status: "Completed",
    },
    {
      orderId: "#232",
      date: "8 sep, 2020",
      total: "$135.00 (2 Products)",
      status: "Completed",
    },
  ];
  return (
    <div className="border-2 mt-7 mb-2 rounded-lg overflow-x-scroll md:overflow-hidden" style={{ backgroundColor: theme ? "#535353" : "" }}>
      <div>
        <div className="flex justify-between items-center">
          <h2
            className="font-medium text-xl p-3 ml-3 whitespace-nowrap"
            style={{ color: theme ? "#fff" : "" }}
          >
            Recent Order History
          </h2>
          <NavLink
            to="/order-history"
            className="text-[#FF6316] font-medium text-xl pr-10 whitespace-nowrap"
          >
            View All
          </NavLink>
        </div>
        <table>
          <thead className="bg-[#F2F2F2]">
            <tr className="text-[#4D4D4D] font-medium text-sm text-left">
              <th className="py-2 px-6">ORDER ID</th>
              <th className="py-2 px-6">DATE</th>
              <th className="py-2 px-6">TOTAL</th>
              <th className="py-2 px-6">STATUS</th>
              <th className="py-2 px-9"></th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, id) => (
              <tr key={id} className="text-[#333333]"  style={{ color: theme ? "#CCCCCC" : "" }}>
                <td className=" pt-5 pl-6 pb-2">{item.orderId}</td>
                <td className=" pt-5 pr-16 pl-5 pb-2 whitespace-nowrap">
                  {item.date}
                </td>
                <td className=" pt-5 pr-16 pl-5 pb-2 whitespace-nowrap">
                  {item.total}
                </td>
                <td className="pt-5 pr-16 pl-5 pb-2 whitespace-nowrap">
                  {item.status}
                </td>
                <td className="pt-5 pr-11 pb-5 whitespace-nowrap text-[#FF6316] font-medium text-sm">
                  View Details
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderBox;
