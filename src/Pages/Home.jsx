import React from "react";
import Sidebar from "../Components/Sidebar";
import Topbar from "./../Components/Topbar";
import Widgets from "../Components/Widgets";
import Revenue from "../Components/Revenue";
import Charts from "../Components/Charts";
import LastestProducts from "./../Components/LatestProducts";

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
          <LastestProducts />
        </div>
      </div>
    </>
  );
};

export default Home;
