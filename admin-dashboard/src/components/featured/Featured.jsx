import React from "react";
import "./featured.scss";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVertOutlined";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";

const Featured = () => {
  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenues</h1>
        <MoreVertOutlinedIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} />
        </div>
        <p className="title">Total sale made today</p>
        <p className="amount">$544</p>
        <p className="desc">
          Previews transactions processing. Last payments may not be included.
        </p>
        <div className="sumary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <KeyboardArrowDownOutlinedIcon fontSize="small" />
              <div className="resultAmount">$23.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last week</div>
            <div className="itemResult negative">
              <KeyboardArrowDownOutlinedIcon fontSize="small" />
              <div className="resultAmount">$23.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last month</div>
            <div className="itemResult positive">
              <KeyboardArrowDownOutlinedIcon fontSize="small" />
              <div className="resultAmount">$23.4k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
