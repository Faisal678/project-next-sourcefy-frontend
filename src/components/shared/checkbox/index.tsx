import React, { Fragment } from "react";
import "./checkbox.scss";

interface Props {
  label?: string;
  value?: string;
}

const CheckBox: React.FC<Props> = ({ label, value }) => {
  const checkboxId: string = `checkbox-${Math.random()
    .toString(36)
    .substr(2, 9)}`;

  return (
    <Fragment>
      <div className="form-check">
        <input
          id={checkboxId}
          className="form-check-input"
          type="checkbox"
          value={value}
        />
        <label htmlFor={checkboxId} className="form-check-label">
          {" "}
          {label}{" "}
        </label>
      </div>
    </Fragment>
  );
};

export default CheckBox;
