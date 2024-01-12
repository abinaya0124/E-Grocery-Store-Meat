import React from "react";
import NavigationBox from "../DashboardBoxes/NavigationBox";
import AccountSetting from "./SettingsDetails.jsx/AccountSetting";
import BillingAddress from "./SettingsDetails.jsx/BillingAddress";
import ChangePassword from "./SettingsDetails.jsx/ChangePassword";
import { useThemeHook } from "../../GlobalComponents/ThemeProvider";

const Settings = () => {
  const [theme] = useThemeHook();
  return (
    <div style={{ backgroundColor: theme ? "black" : "" }}>
      <div className="md:flex justify-center">
        <div>
          <NavigationBox />
        </div>
        <div className="flex flex-col gap-3 mt-2" >
          <AccountSetting />
          <BillingAddress />
          <ChangePassword />
        </div>
      </div>
    </div>
  );
};

export default Settings;
