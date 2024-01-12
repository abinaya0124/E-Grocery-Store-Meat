import { useThemeHook } from "../../../GlobalComponents/ThemeProvider";

const ChangePassword = () => {
  const [theme] = useThemeHook();
  return (
    <div className="font-poppins mt-5 m-2 md:m-0" style={{ backgroundColor: theme ? "#535353" : "" }} >
      <div className="border-2 border-[#E6E6E6] rounded-lg  md:w-[850px]" style={{ color: theme ? "#fff" : "" }}>
        <h3 className="font-medium text-xl border-b-2 pl-6 p-2">
          Change Password
        </h3>
        <div className="md:flex flex-col pl-6 pt-5">
          <label className="text-sm pb-1">Current Password</label>
          <input
            type="password"
            className="border-[#E6E6E6] border-2 rounded outline-orange-600 md:w-[739px] p-2 w-[90%]"
            style={{ backgroundColor: theme ? "#535353" : "" }} 
          />
        </div>
        <div className="md:flex">
          <div className=" md:w-[45%] pl-6 pt-5">
            <label className="text-sm pb-1">New Password</label>
            <input
              type="password"
              className="border-[#E6E6E6] border-2 p-2 rounded mb-5 outline-orange-600 w-[90%] md:w-[100%]"
              style={{ backgroundColor: theme ? "#535353" : "" }} 
            />
          </div>
          <div className="md:w-[45%] pl-6 pt-5">
            <label className="text-sm pb-1">Confirm Password</label>
            <input
              type="password"
              className="border-[#E6E6E6] border-2 p-2 rounded mb-5 outline-orange-600 w-[90%] md:w-[100%]"
              style={{ backgroundColor: theme ? "#535353" : "" }} 
            />
          </div>
        </div>
        <button className="border-2 border-[#FF6316] rounded-full p-2 text-[#FF6316] ml-5 mb-3">
          Change Password
        </button>
      </div>
    </div>
  );
};

export default ChangePassword;
