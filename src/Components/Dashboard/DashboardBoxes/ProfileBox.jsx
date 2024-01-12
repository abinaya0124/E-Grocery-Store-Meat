import { NavLink } from "react-router-dom";
import person from "../Images/person.png";
import { useThemeHook } from "../../GlobalComponents/ThemeProvider";

const ProfileBox = () => {
  const [theme] = useThemeHook();
  return (
    <div className="border-2 h-72 m-2 md:m-0 rounded-lg md:px-32" style={{ backgroundColor: theme ? "#535353" : "" }}>
      <div className="flex flex-col items-center justify-center pt-10">
        <img src={person} />
        <h3 className="text-xl font-medium" style={{ color: theme ? "#fff" : "black" }}>Dianne Russell</h3>
        <p className="text-[#808080] text-sm">Customer</p>
        <NavLink to="/setting" className="text-[#FF6316] text-base font-medium">
          Edit Profile
        </NavLink>
      </div>
    </div>
  );
};

export default ProfileBox;
