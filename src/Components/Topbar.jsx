import React from "react";
import {
  ChatOutlined,
  NotificationsOutlined,
  Search,
} from "@mui/icons-material";
const Topbar = () => {
  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <div className="topbar-search">
          <input type="text" placeholder="Search" />
          <button type="submit">
            <Search style={{ fill: "white" }} />
          </button>
        </div>
      </div>
      <div className="topbar-right">
        <div className="topbar-item">
          <ChatOutlined />
        </div>
        <div className="topbar-item">
          <NotificationsOutlined />
        </div>
        <div className="topbar-profile-image">
          <img src="./Images/Topbar/profile-photo.jpg" alt="user profile" />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
