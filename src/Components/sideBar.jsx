import React from "react";
import {
  WidgetsOutlined,
  DataSaverOffOutlined,
  PeopleAltOutlined,
  ShoppingCartOutlined,
  MoreOutlined,
  LogoutOutlined,
} from "@mui/icons-material";
const sideBar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-logo">
        <h1>DS</h1>
      </div>
      <div className="sidebar-items-wrapper">
        <div className="sidebar-item active">
          <WidgetsOutlined />
        </div>
        <div className="sidebar-item">
          <DataSaverOffOutlined />
        </div>
        <div className="sidebar-item">
          <PeopleAltOutlined />
        </div>
        <div className="sidebar-item">
          <ShoppingCartOutlined />
        </div>
        <div className="sidebar-item">
          <MoreOutlined />
        </div>
      </div>
      <div className="sidebar-bottom">
        <div className="sidebar-item">
          <LogoutOutlined />
        </div>
      </div>
    </div>
  );
};

export default sideBar;
