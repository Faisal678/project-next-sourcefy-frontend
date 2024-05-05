import React from "react";
import "./sourcefy-header.scss";
import Link from "next/link";

interface ISourcefyHeader {
  sourcefyLogo?: boolean;
  sourcefyGreenLogo?: boolean;
}

const SourcefyHeader: React.FC<ISourcefyHeader> = ({
  sourcefyLogo = true,
  sourcefyGreenLogo = false,
}) => {
  return (
    <div className="sourcefy-header">
      <div className="container">
        <strong className="sourcefy-logo">
          <Link href="#">
            {sourcefyLogo && (
              <img src="images/sourcefy-logo.svg" alt="sourcefy-logo" />
            )}
            {sourcefyGreenLogo && (
              <img
                src="images/sourcefy-logo-light-green.svg"
                alt="sourcefy-logo-light-green"
              />
            )}
          </Link>
        </strong>
      </div>
    </div>
  );
};

export default SourcefyHeader;
