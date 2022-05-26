import React from "react";
import { ChatOutlined, NotificationsOutlined } from "@mui/icons-material";
const Topbar = () => {
  return (
    <div className="topbar-container">
      <div className="topbar-left">
        <div className="topbar-title">
          <h2>Dashboard</h2>
        </div>
      </div>
      <div className="topbar-right">
        <div className="topbar-item">
          <ChatOutlined />
        </div>
        <div className="topbar-item">
          <NotificationsOutlined />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
