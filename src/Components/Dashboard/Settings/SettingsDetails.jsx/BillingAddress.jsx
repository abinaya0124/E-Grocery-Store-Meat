import { useThemeHook } from "../../../GlobalComponents/ThemeProvider";

const Setting = () => {
  const [theme] = useThemeHook();
  return (
    <div className="font-poppins mt-5 m-2 md:m-0" style={{ backgroundColor: theme ? "#535353" : "" }} >
      <div className="border-2 border-[#E6E6E6] rounded-lg md:w-[850px]" style={{ color: theme ? "#fff" : "" }}>
        <h3 className="font-medium text-xl border-b-2 pl-6 p-2">
          Billing Address
        </h3>
        <div className="flex flex-col pl-6 pt-5">
          <div className="md:flex gap-3 ">
            <div>
              <label className="text-sm pb-1">First Name</label>
              <input
                type="text"
                className="border-[#E6E6E6] border-2 p-2 rounded mb-5 outline-orange-600 w-[90%] md:w-[100%]"
                placeholder="Dianne"
                style={{ backgroundColor: theme ? "#535353" : "" }} 
              />
            </div>
            <div>
              <label className="text-sm pb-1">Last Name</label>
              <input
                type="text"
                className="border-[#E6E6E6] border-2 p-2 rounded mb-5 outline-orange-600 w-[90%] md:w-[100%]"
                placeholder="Russell"
                style={{ backgroundColor: theme ? "#535353" : "" }} 
              />
            </div>
            <div>
              <label className="text-sm pb-1">
                Company Name<span>(optional)</span>
              </label>
              <input
                type="text"
                className="border-[#E6E6E6] border-2 p-2 rounded mb-5 outline-orange-600 w-[90%] md:w-[75%]"
                placeholder="Zakirsoft"
                style={{ backgroundColor: theme ? "#535353" : "" }} 
              />
            </div>
          </div>
          <label className="text-sm pb-1">Street Address</label>
          <input
            type="text"
            className="border-[#E6E6E6] border-2 rounded mb-5 outline-orange-600 w-[90%] md:w-[739px] p-2"
            style={{ backgroundColor: theme ? "#535353" : "" }} 
          />
          <div className="md:flex gap-3">
            <div className="flex flex-col">
              <label>Country/Region</label>
              <select className="border-[#E6E6E6] border-2 p-2 rounded mb-5 outline-orange-600 w-[90%] md:w-[235px]"
               style={{ backgroundColor: theme ? "#535353" : "" }} >
                <option value="United States">United States</option>
                <option value="India">India</option>
                <option value="Germany">Germany</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label>States</label>
              <select className="border-[#E6E6E6] border-2 p-2 rounded mb-5 outline-orange-600 w-[90%] md:w-[235px]" style={{ backgroundColor: theme ? "#535353" : "" }} >
                <option value="Washington DC">Washington DC</option>
                <option value="Chennai">Chennai</option>
                <option value="Berlin">Berlin</option>
              </select>
            </div>
            <div className="flex flex-col">
              <label className="text-sm pb-1">Zip Code</label>
              <input
                type="text"
                className="border-[#E6E6E6] border-2 p-2 rounded mb-5 outline-orange-600 w-[90%] md:w-[245px]"
                placeholder="20033"
                style={{ backgroundColor: theme ? "#535353" : "" }} 
              />
            </div>
          </div>
          <div className="md:flex gap-5">
            <div className="md:w-[44%]">
              <label className="text-sm pb-1">Email</label>
              <input
                type="text"
                className="border-[#E6E6E6] border-2 p-2 rounded mb-5 outline-orange-600 w-[90%] md:w-[100%]"
                placeholder="dianne@gmail.com"
                style={{ backgroundColor: theme ? "#535353" : "" }} 
              />
            </div>
            <div className="md:w-[43%]">
              <label className="text-sm pb-1">Phone Number</label>
              <input
                type="text"
                className="border-[#E6E6E6] border-2 p-2 rounded mb-5 outline-orange-600 w-[90%] md:w-[100%]"
                placeholder="9384920483"
                style={{ backgroundColor: theme ? "#535353" : "" }} 
              />
            </div>
          </div>
          <button className="text-xl font-semibold p-2 rounded-full text-white bg-[#FF6316] mb-5 w-52">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Setting;
