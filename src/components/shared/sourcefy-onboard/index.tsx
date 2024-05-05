import React from "react";
import './sourcefy-onboard.scss'

interface ISourcefyOnboard {
  sourcefyLogoGreen: string;
  sourcefyHeading: string;
  sourcefyText: string;
}

const SourcefyOnboard: React.FC<ISourcefyOnboard> = ({
  sourcefyLogoGreen,
  sourcefyHeading,
  sourcefyText,
}) => {
  return (
    <div className="sourcefy-onboard">
      <div className="sourcefy-logo-green">
        <img src={sourcefyLogoGreen} alt="sourcefy-logo-green" />
      </div>
      <strong className="sourcy-heading">{sourcefyHeading}</strong>
      <span className="sourcy-text">{sourcefyText}</span>
    </div>
  );
};

export default SourcefyOnboard;
