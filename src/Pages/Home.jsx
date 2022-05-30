import React from "react";
import Sidebar from "../Components/Sidebar";
import Topbar from "./../Components/Topbar";
import Widget from "../Components/Widget";
import Revenue from "../Components/Revenue";
const Home = () => {
  return (
    <>
      <Sidebar />
      <Topbar />
      <div className="home-container">
        <Widget />
        <Revenue />
      </div>
    </>
  );
};

export default Home;
