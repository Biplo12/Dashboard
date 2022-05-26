import React from "react";
import {
  HomeOutlined,
  DataSaverOffOutlined,
  PeopleAltOutlined,
  ShoppingCartOutlined,
  MoreOutlined,
} from "@mui/icons-material";
const sideBar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-title">
        <h1>Dashboard</h1>
      </div>
      <div className="sidebar-wrapper">
        <div className="sidebar-item active">
          <HomeOutlined />
          <a href="/">Dashboard</a>
        </div>
        <h4>MANAGMENT</h4>
        <div className="sidebar-item">
          <DataSaverOffOutlined />
          <a href="/analytics">Analytics</a>
        </div>
        <div className="sidebar-item">
          <PeopleAltOutlined />
          <a href="/customers">Customers</a>
        </div>
        <div className="sidebar-item">
          <ShoppingCartOutlined />
          <a href="/orders">Orders</a>
        </div>
        <div className="sidebar-item">
          <MoreOutlined />
          <a href="/products">Products</a>
        </div>
      </div>
    </div>
  );
};

export default sideBar;
