import React from "react";
import {
  HomeOutlined,
  DataSaverOffOutlined,
  PeopleAltOutlined,
  ShoppingCartOutlined,
  MoreOutlined,
  CalendarMonthOutlined,
} from "@mui/icons-material";
const sideBar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-logo">
        <h1>Dashboard</h1>
      </div>
      <div className="sidebar-button clicked">
        <a href="/" className="icon-flex viewed">
          <HomeOutlined className="viewed" />
          <h3 className="viewed">Dashboard</h3>
        </a>
      </div>
      <div className="managment-table">
        <h4>MANAGMENT</h4>
        <div className="sidebar-analytics">
          <a href="/" className=" icon-flex">
            <DataSaverOffOutlined />
            <h3>Analytics</h3>
          </a>
        </div>
        <div className="sidebar-customers">
          <a href="/" className=" icon-flex">
            <PeopleAltOutlined />
            <h3>Customers</h3>
          </a>
        </div>
        <div className="sidebar-orders">
          <a href="/" className=" icon-flex">
            <ShoppingCartOutlined />
            <h3>Orders</h3>
          </a>
        </div>
        <div className="sidebar-products">
          <a href="/" className=" icon-flex">
            <MoreOutlined />
            <h3>Products</h3>
          </a>
        </div>
      </div>
      <div className="pages-table">
        <h4>PAGES</h4>
        <div className="sidebar-calendar">
          <a href="/" className=" icon-flex">
            <CalendarMonthOutlined />
            <h3>Calendar</h3>
          </a>
        </div>
      </div>
    </div>
  );
};

export default sideBar;
