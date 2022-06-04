import { NavLink } from "react-router-dom";
import {
  WidgetsOutlined,
  DataSaverOffOutlined,
  PeopleAltOutlined,
  ShoppingCartOutlined,
  MoreOutlined,
} from "@mui/icons-material";

export const NavLinks = ({ navLinkStyles }) => {
  return (
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
      <NavLink to="/orders" style={navLinkStyles} className="sidebar-item">
        <ShoppingCartOutlined />
      </NavLink>
      <div className="sidebar-item">
        <DataSaverOffOutlined />
      </div>
    </div>
  );
};
