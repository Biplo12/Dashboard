import React from "react";
import { ChatOutlined, NotificationsOutlined } from "@mui/icons-material";
const Topbar = () => {
  return (
    <div className="topbar-container">
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
