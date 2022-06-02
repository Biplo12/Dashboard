import React from "react";
import { widgetData } from "./../DummyData/widgetData";

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
            <div className="widget" key={id}>
              <div className="card-left">
                <h2>{title}</h2>
                <h3>{value}</h3>
                <span className="un">
                  <a href={href}>{buttonContent}</a>
                </span>
              </div>
              <div className="card-right">
                <p className="procentage">{`+ ${procentage}%`}</p>
                <div className="icon-box" style={{ background: iconBoxColor }}>
                  <a href={href}>{icon}</a>
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
