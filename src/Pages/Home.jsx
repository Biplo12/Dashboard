import React from "react";
import Sidebar from "../Components/Sidebar";
import Topbar from "./../Components/Topbar";
import { cardsData } from "./cardsData";
import {
  Group,
  ShoppingCart,
  MonetizationOn,
  AccountBalanceWallet,
} from "@mui/icons-material";
const Home = () => {
  return (
    <>
      <Sidebar />
      <Topbar />
      <div className="home-container">
        <div className="home-top-cards">
          {cardsData.map(({ id, title }) => {
            return (
              <div className="home-top-card" key={id}>
                <p>{title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Home;
