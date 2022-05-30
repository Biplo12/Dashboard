import React from "react";
import { CircularProgressBar } from "@tomik23/react-circular-progress-bar";
import { ArrowDropUp, ArrowDropDown } from "@mui/icons-material";
import CountUp from "react-countup";
const props = {
  percent: 60,
  colorSlice: "#2c50ef",
  colorCircle: "#D6D5D6",
  fontColor: "#2c50ef",
  fontSize: "1rem",
  stroke: 5,
  speed: 100,
};

const Revenue = () => {
  return (
    <div className="revenue-container">
      <p className="revenue-title">Total Revenue</p>
      <CircularProgressBar {...props} />
      <h3>Total sales made today</h3>
      <h2>
        <CountUp duration={1.5} end={420} prefix="$" />
      </h2>
      <p className="revenue-description">Last payments may not be included.</p>
      <div className="revenue-bottom">
        <div className="revenue-item">
          <p>Target</p>
          <div className="revenue-item-value negative">
            <ArrowDropDown />
            $12.4k
          </div>
        </div>
        <div className="revenue-item">
          <p>Last week</p>
          <div className="revenue-item-value positive">
            <ArrowDropUp />
            $12.4k
          </div>
        </div>
        <div className="revenue-item">
          <p>Last month</p>
          <div className="revenue-item-value negative">
            <ArrowDropDown />
            $12.4k
          </div>
        </div>
      </div>
    </div>
  );
};

export default Revenue;
