import React from "react";
import { widgetData } from "./widgetData";
import { ArrowDropUp, arrowDropDown } from "@mui/icons-material";

const Widget = () => {
  return (
    <div className="widget-container">
      {widgetData.map(
        ({
          id,
          title,
          value,
          buttonContent,
          href,
          procentage,
          icon,
          iconBoxColor,
        }) => {
          return (
            <div className="widget-card" key={id}>
              <div className="card-left">
                <h2>{title}</h2>
                <h3>{value}</h3>
                <span className="un">
                  <a href={href}>{buttonContent}</a>
                </span>
              </div>
              <div className="card-right">
                <div className="card-right-top">
                  <p className="procentage">{`+ ${procentage}%`}</p>
                </div>
                <div className="card-right-bottom">
                  <div
                    className="icon-box"
                    style={{ background: iconBoxColor }}
                  >
                    <a href={href}>{icon}</a>
                  </div>
                </div>
              </div>
            </div>
          );
        }
      )}
    </div>
  );
};

export default Widget;
