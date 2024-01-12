import { useThemeHook } from "../GlobalComponents/ThemeProvider";
import BillingBox from "./DashboardBoxes/BillingBox";
import NavigationBox from "./DashboardBoxes/NavigationBox";
import OrderBox from "./DashboardBoxes/OrderBox";
import ProfileBox from "./DashboardBoxes/ProfileBox";

const Dashboard = () => {
  const [theme] = useThemeHook();
  return (
    <div className="md:flex justify-center"  style={{ backgroundColor: theme ? "#000000" : "" }}>
      <div>
        <NavigationBox />
      </div>
      <div className="md:flex">
        <div className="md:flex flex-col">
          <div className="md:flex gap-3">
            <ProfileBox />
            <BillingBox />
          </div>
          <OrderBox />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
