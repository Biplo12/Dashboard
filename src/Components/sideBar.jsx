import React from "react";
import { Link } from "react-router-dom";
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
          <Link to="/">
            <WidgetsOutlined />
          </Link>
        </div>
        <div className="sidebar-item">
          <Link to="/analytics">
            <DataSaverOffOutlined />
          </Link>
        </div>
        <div className="sidebar-item">
          <Link to="/users">
            <PeopleAltOutlined />
          </Link>
        </div>
        <div className="sidebar-item">
          <Link to="/orders">
            <ShoppingCartOutlined />
          </Link>
        </div>
        <div className="sidebar-item">
          <Link to="/products">
            <MoreOutlined />
          </Link>
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
