import React, { useState } from "react";
import Descriptions from "./Description1/Descriptions";
import Information from "./Information/Information";
import Feedback from "./Feedback/Feedback";
import { useThemeHook } from "../../GlobalComponents/ThemeProvider";

const Description = () => {
  const [selectedPage, setSelectedPage] = useState("Description");
  const [theme] = useThemeHook();

  return (
    <div className="items-center shadow-sm flex flex-col justify-center " >
      <div className="border-b-2 flex justify-center gap-3 md:gap-28 mt-8 md:mt-16 md:w-[68%]" >
        {["Description", "Information", "Feedback"].map((page) => (
          <div
            key={page}
            onClick={() => setSelectedPage(page)}
            style={{ color: theme ? "#fff" : "#000000" }}
            className={`page ${selectedPage === page ? "selected" : ""} 
              ${selectedPage === page ? "border-b-2 border-green-500" : ""} 
              ${selectedPage === page ? "pb-3 ld:pr-20 ld:pl-20 ld:pb-5" : ""} 
              ${selectedPage === page ? "text-black" : "text-gray-800"} 
              ${selectedPage === page ? "font-semibold" : "font-semibold"}
              `}
          >
            {page}
          </div>
        ))}
      </div>
      <div>
        {selectedPage === "Description" && <Descriptions />}
        {selectedPage === "Information" && <Information />}
        {selectedPage === "Feedback" && <Feedback />}
      </div>
    </div>
  );
};

export default Description;
