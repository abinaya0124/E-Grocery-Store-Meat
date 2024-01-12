import { useState } from "react";
import Vegetables from "./Vegetables.png";
import { useThemeHook } from "../GlobalComponents/ThemeProvider";
import Banner1 from './Banner1.png'

const Faq1 = () => {
  const featuresData = [
    {
      id: 1,
      title: "Etiam lobortis massa eu nibh tempor elementum.",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/39e85927f3169f3699d377ede3aae6cc3a0e3feca2c26f931a101c5bcb76525f?apiKey=c795402f61f84f4faf36834d5e8f01a8&",
    },
    {
      id: 2,
      title: "In elementum est a ante sodales iaculis.",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/39e85927f3169f3699d377ede3aae6cc3a0e3feca2c26f931a101c5bcb76525f?apiKey=c795402f61f84f4faf36834d5e8f01a8&",
    },
    {
      id: 3,
      title: "Aenean quis quam nec lacus semper dignissim.",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/39e85927f3169f3699d377ede3aae6cc3a0e3feca2c26f931a101c5bcb76525f?apiKey=c795402f61f84f4faf36834d5e8f01a8&",
    },
    {
      id: 4,
      title: "Nulla tincidunt eros id tempus accumsan.",
      ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      imageUrl:
        "https://cdn.builder.io/api/v1/image/assets/TEMP/39e85927f3169f3699d377ede3aae6cc3a0e3feca2c26f931a101c5bcb76525f?apiKey=c795402f61f84f4faf36834d5e8f01a8&",
    },
  ];
  const [acc, setAcc] = useState(false);
  const [active, setActive] = useState(null);
  const handleAcc = (id) => {
    setAcc(id === acc ? null : id);
    setActive(active === id ? null : id);
  };
  const [theme] = useThemeHook();
  return (
   <div>
    <img src={Banner1}/>
     <div className="m-2 md:m-[5rem]">
      <div className="md:flex align-middle justify-evenly ">
        <div className="md:w-[42%]">
          <h3 className=" font-semibold text-[48px]"  style={{ color: theme ? "white" : "" }}>
            Welcome, Let's Talk <br />
            About Our Ecobazar
          </h3>
          <div>
            <div className="mt-5">
              {featuresData?.map((item, id) => (
                <div
                  key={id}
                  className={` ${
                    active === item.id ? "border-2 border-[#FF6316]" : ""
                  } rounded-md`}
                >
                  <div
                    className="flex justify-between p-2 mb-2 rounded-md cursor-pointer"
                    style={{background:theme?"#2A2C38":"#F2F2F2", color:theme?"#fff":"#000000"}}
                    onClick={() => handleAcc(item.id)}
                  >
                    <p
                      className={`${
                        active === item.id ? "text-[#FF6316]" : ""
                      }`}
                    >
                      {item.title}
                    </p>
                    <img src={item.imageUrl} />
                  </div>
                  {acc === item.id && <p className="p-2 -mt-3"  style={{ color: theme ? "white" : "" }}>{item.ans}</p>}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div>
          <img src={Vegetables} className="hidden md:inline-block w-[500px] -mt-5" />
        </div>
      </div>
    </div>
   </div>
  );
};

export default Faq1;
