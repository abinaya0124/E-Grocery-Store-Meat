import NavigationBox from "../DashboardBoxes/NavigationBox";
import { NavLink } from "react-router-dom";
import data from "./OrderData.json";
import { useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useThemeHook } from "../../GlobalComponents/ThemeProvider";

const OrderHistory = () => {
  const [record, setRecord] = useState(data);
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(8);
  const [theme] = useThemeHook();

  const totalPages = Math.ceil(record.length / rowsPerPage);
  const indecOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstROw = indecOfLastRow - rowsPerPage;
  const currentData = record.slice(indexOfFirstROw, indecOfLastRow);

  const handlePageChange = (pno) => {
    setCurrentPage(pno);
  };

  const generatePageNumbers = () => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
      pageNumbers.push(i);
    }
    return pageNumbers;
  };

  return (
    <div
      className="md:flex justify-center"
      style={{ backgroundColor: theme ? "black" : "" }}
    >
      <div>
        <NavigationBox />
      </div>
      <div>
        <div className="border-2 mt-2 mb-2 rounded-lg overflow-x-scroll md:overflow-hidden">
          <div style={{ color: theme ? "#fff" : "",  backgroundColor: theme ? "#535353" : "" }}>
            <div className="flex justify-between items-center">
              <h2 className="font-medium text-xl p-3 ml-3 whitespace-nowrap">
                Order History
              </h2>
            </div>
            <table>
              <thead
                style={{
                  color: theme ? "#fff" : "#000", 
                  backgroundColor: theme ? "#292929" : "#F2F2F2"
                  
                }}
              >
                <tr className="text-[#4D4D4D] font-medium text-sm text-left">
                  <th className="py-2 px-6">ORDER ID</th>
                  <th className="py-2 px-6">DATE</th>
                  <th className="py-2 px-6">TOTAL</th>
                  <th className="py-2 px-6">STATUS</th>
                  <th className="py-2 px-9"></th>
                </tr>
              </thead>
              <tbody>
                {currentData?.map((item, id) => (
                  <tr
                    key={id}
                    className="text-[#333333]"
                    style={{ color: theme ? "#CCCCCC" : "" }}
                  >
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
                    <td className="pt-5 pr-8 pb-5 whitespace-nowrap text-[#FF6316] font-medium text-sm ">
                      <NavLink to="/order-details">View Details</NavLink>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-center">
              <div className="rows__counting">
                <div className="flex py-5 items-center">
                  <button
                    disabled={currentPage === 1}
                    onClick={() => handlePageChange(currentPage - 1)}
                    className=" text-[#B3B3B3] rounded-full flex items-center p-1 mr-5 hover:bg-white hover:text-black"
                    style={{ backgroundColor: theme ? "#292929" : "#F2F2F2" }}
                  >
                    <MdKeyboardArrowLeft className="text-2xl" />
                  </button>
                  <div className="count__pages">
                    {generatePageNumbers().map((pageNumber) => (
                      <button
                        key={pageNumber}
                        onClick={() => handlePageChange(pageNumber)}
                        className={`page-number
                        ${
                          currentPage === pageNumber
                            ? "px-3 py-1 text-white bg-[#FF6316] rounded-full"
                            : "p-3"
                        }`}
                      >
                        {pageNumber}
                      </button>
                    ))}
                  </div>
                  <button
                    disabled={currentPage === totalPages}
                    onClick={() => handlePageChange(currentPage + 1)}
                    className=" text-[#B3B3B3] rounded-full flex items-center p-1 mr-5 hover:bg-white hover:text-black"
                    style={{ backgroundColor: theme ? "#292929" : "#F2F2F2" }}
                  >
                    <MdKeyboardArrowRight className="text-2xl" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
