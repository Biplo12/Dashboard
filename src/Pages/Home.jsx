import React from "react";
import Sidebar from "../Components/Sidebar/Sidebar";
import Topbar from "../Components/Topbar/Topbar";
import Widgets from "../Components/Widgets/Widgets";
import Revenue from "../Components/Revenue/Revenue";
import Charts from "../Components/Charts/Charts";
import LastestOrders from "../Components/LatestOrders/LatestOrders";

const Home = () => {
  return (
    <>
      <Sidebar />
      <Topbar />
      <div className="home-container">
        <Widgets />
        <div className="home-charts">
          <Revenue />
          <Charts />
        </div>
        <div className="home-table">
          <LastestOrders />
        </div>
      </div>
    </>
  );
};

export default Home;
