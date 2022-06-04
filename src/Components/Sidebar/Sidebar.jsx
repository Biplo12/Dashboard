import React from "react";
import { NavLink } from "react-router-dom";
import { NavLinks } from "./NavLinks";
import { LogoutOutlined } from "@mui/icons-material";
const Sidebar = () => {
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
      <NavLinks navLinkStyles={navLinkStyles} />
      <div className="sidebar-bottom">
        <div className="sidebar-item">
          <LogoutOutlined />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
