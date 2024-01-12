import user from "../../Images/user.png";
import { IoIosStar } from "react-icons/io";
import { useThemeHook } from "../../../GlobalComponents/ThemeProvider";

const Feedback = () => {
  const [theme] = useThemeHook();
  return (
    <div className="flex ">
      <div className="flex flex-col mt-12 ml-3 mr-[3%] md:mr-[0%] md:ml-[17%] ">
        <div className="flex border-b-2 pb-5 mb-5 md:w-[75%] ">
          <div className="flex items-center gap-6 ">
            <img src={user} />
            <div>
              <p
                className="font-medium text-sm"
                style={{ color: theme ? "#fff" : "#000000" }}
              >
                Kristin Watson
              </p>
              <div className="flex">
                <IoIosStar className="text-[#FF6316] text-lg" />
                <IoIosStar className="text-[#FF6316] text-lg" />
                <IoIosStar className="text-[#FF6316] text-lg" />
                <IoIosStar className="text-[#FF6316] text-lg" />
                <IoIosStar className="text-[#FF6316] text-lg" />
              </div>
              <p
                className="text-sm  mt-3 md:mt-0"
                style={{ color: theme ? "#fff" : "#808080" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                voluptas a incidunt molestiae dignissimos, obcaecati veritatis
                doloribus debitis!
              </p>
            </div>
          </div>
          <p className="text-[#FF0000] text-sm whitespace-nowrap">2 min ago</p>
        </div>

        <div className="flex border-b-2 pb-5 mb-5 md:w-[75%] ">
          <div className="flex items-center gap-6 ">
            <img src={user} />
            <div>
              <p
                className="font-medium text-sm"
                style={{ color: theme ? "#fff" : "#000000" }}
              >
                Kristin Watson
              </p>
              <div className="flex">
                <IoIosStar className="text-[#FF6316] text-lg" />
                <IoIosStar className="text-[#FF6316] text-lg" />
                <IoIosStar className="text-[#FF6316] text-lg" />
                <IoIosStar className="text-[#FF6316] text-lg" />
                <IoIosStar className="text-[#FF6316] text-lg" />
              </div>
              <p
                className="text-sm mt-3 md:mt-0"
                style={{ color: theme ? "#fff" : "#808080" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                voluptas a incidunt molestiae dignissimos, obcaecati veritatis
                doloribus debitis!
              </p>
            </div>
          </div>
          <p className="text-[#FF0000] text-sm whitespace-nowrap">2 min ago</p>
        </div>

        <div className="flex border-b-2 pb-5 mb-5 md:w-[75%] ">
          <div className="flex items-center gap-6 ">
            <img src={user} />
            <div>
              <p
                className="font-medium text-sm"
                style={{ color: theme ? "#fff" : "#000000" }}
              >
                Kristin Watson
              </p>
              <div className="flex">
                <IoIosStar className="text-[#FF6316] text-lg" />
                <IoIosStar className="text-[#FF6316] text-lg" />
                <IoIosStar className="text-[#FF6316] text-lg" />
                <IoIosStar className="text-[#FF6316] text-lg" />
                <IoIosStar className="text-[#FF6316] text-lg" />
              </div>
              <p
                className="text-sm mt-3 md:mt-0"
                style={{ color: theme ? "#fff" : "#808080" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                voluptas a incidunt molestiae dignissimos, obcaecati veritatis
                doloribus debitis!
              </p>
            </div>
          </div>
          <p className="text-[#FF0000] text-sm whitespace-nowrap">2 min ago</p>
        </div>

        <div className="flex border-b-2 pb-5 mb-5 md:w-[75%] ">
          <div className="flex items-center gap-6 ">
            <img src={user} />
            <div>
              <p
                className="font-medium text-sm"
                style={{ color: theme ? "#fff" : "#000000" }}
              >
                Kristin Watson
              </p>
              <div className="flex">
                <IoIosStar className="text-[#FF6316] text-lg" />
                <IoIosStar className="text-[#FF6316] text-lg" />
                <IoIosStar className="text-[#FF6316] text-lg" />
                <IoIosStar className="text-[#FF6316] text-lg" />
                <IoIosStar className="text-[#FF6316] text-lg" />
              </div>
              <p
                className=" text-sm mt-3 md:mt-0"
                style={{ color: theme ? "#fff" : "#808080" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                voluptas a incidunt molestiae dignissimos, obcaecati veritatis
                doloribus debitis!
              </p>
            </div>
          </div>
          <p className="text-[#FF0000] text-sm whitespace-nowrap">2 min ago</p>
        </div>

        <div className="flex border-b-2 pb-5 mb-5 md:w-[75%] ">
          <div className="flex items-center gap-6 ">
            <img src={user} />
            <div>
              <p
                className="font-medium text-sm"
                style={{ color: theme ? "#fff" : "#000000" }}
              >
                Kristin Watson
              </p>
              <div className="flex">
                <IoIosStar className="text-[#FF6316] text-lg" />
                <IoIosStar className="text-[#FF6316] text-lg" />
                <IoIosStar className="text-[#FF6316] text-lg" />
                <IoIosStar className="text-[#FF6316] text-lg" />
                <IoIosStar className="text-[#FF6316] text-lg" />
              </div>
              <p
                className=" text-sm mt-3 md:mt-0"
                style={{ color: theme ? "#fff" : "#808080" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Et
                voluptas a incidunt molestiae dignissimos, obcaecati veritatis
                doloribus debitis!
              </p>
            </div>
          </div>
          <p className="text-[#FF0000] text-sm whitespace-nowrap">2 min ago</p>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Feedback;
