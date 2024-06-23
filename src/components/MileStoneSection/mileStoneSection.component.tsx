// imports
import React from "react";

// local imports

// styles
import "./mileStoneSection.styles.css";

const MileStonesSection = () => {
  return (
    <div className="mileStoneSection">
      <div className="mileStoneTextContainer">
        <h3 className="mileStoneTextHeader">35+</h3>
        <p className="mileStoneSubText">Years of experience</p>
      </div>
      <div className="mileStoneTextContainer">
        <h3 className="mileStoneTextHeader">35900+</h3>
        <p className="mileStoneSubText">Cargo Delivered</p>
      </div>
      <div className="mileStoneTextContainer">
        <h3 className="mileStoneTextHeader">2.5K+</h3>
        <p className="mileStoneSubText">Daily Registered users</p>
      </div>
    </div>
  );
};

export default MileStonesSection;
