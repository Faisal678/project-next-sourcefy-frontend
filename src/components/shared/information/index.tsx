import React from "react";
import "./information.scss";

const Information = () => {
  return (
    <div className="information">
      <div className="info-area">
        <div className="info-number info-number-active">
          <span className="info-number-area">1</span>
          <span className="info-text">Information</span>
        </div>
        <div className="info-border"></div>
        <div className="info-number">
          <span className="info-number-area">2</span>
          <span className="info-text">Role</span>
        </div>
        <div className="info-border"></div>
        <div className="info-number">
          <span className="info-number-area">3</span>
          <span className="info-text">Verification</span>
        </div>
      </div>
    </div>
  );
};

export default Information;
