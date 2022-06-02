import React from "react";
import { NavLink } from "react-router-dom";
import {
  WidgetsOutlined,
  DataSaverOffOutlined,
  PeopleAltOutlined,
  ShoppingCartOutlined,
  MoreOutlined,
  LogoutOutlined,
} from "@mui/icons-material";
const sideBar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      backgroundColor: isActive ? "#2544d7" : "#2c50ef",
      borderRadius: isActive ? "10px" : "0",
      boxShadow: isActive
        ? "2px 2px 10px 1px rgba(201, 201, 201, 0.25)"
        : "none",
    };
  };
  return (
    <div className="sidebar-container">
      <NavLink to="/">
        <div className="sidebar-logo">
          <h1>DS</h1>
        </div>
      </NavLink>
      <div className="sidebar-items-wrapper">
        <NavLink to="/" style={navLinkStyles} className="sidebar-item">
          <WidgetsOutlined />
        </NavLink>
        <NavLink to="/users" style={navLinkStyles} className="sidebar-item">
          <PeopleAltOutlined />
        </NavLink>
        <NavLink to="/products" style={navLinkStyles} className="sidebar-item">
          <MoreOutlined />
        </NavLink>
        <NavLink to="/analytics" style={navLinkStyles} className="sidebar-item">
          <DataSaverOffOutlined />
        </NavLink>
        <NavLink to="/orders" style={navLinkStyles} className="sidebar-item">
          <ShoppingCartOutlined />
        </NavLink>
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
