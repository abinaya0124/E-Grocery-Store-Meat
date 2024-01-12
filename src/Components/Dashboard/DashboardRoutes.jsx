import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import OrderDetails from "./Order/OrderDetails";
import OrderHistory from "./Order/OrderHistory";
import Settings from "./Settings/Settings";
// import OrderDetails from "./Order/OrderPages/OrderDetails";
// import OrderHistory from "./Order/OrderPages/OrderHistory";
// import Settings from "./Settings/Settings";

const DashboardRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/order-details" element={<OrderDetails />} />
        <Route path="/order-history" element={<OrderHistory />} />
        <Route path="/setting" element={<Settings />} />
        {/*  <Route path='/wishlist' element={<Dashboard/>}/>
            <Route path='/cart' element={<Dashboard/>}/>
            
            <Route path='/logout' element={<Dashboard/>}/> */}
      </Routes>
    </div>
  );
};

export default DashboardRoutes;
