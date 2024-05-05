import React, { Fragment } from "react";
import "./radiobutton.scss";

interface Props {
  label?: string;
  value?: string;
  checked?: boolean;
  onChange?: (value: string) => void;
}

const RadioButton: React.FC<Props> = ({ label, value, checked, onChange }) => {
  const handleChange = () => {
    if (onChange) {
      onChange(value || '');
    }
  };
  return (
    <Fragment>
      <div className="form-check-radio">
        <input className="form-check-input" type="radio" value={value} checked={checked} onChange={handleChange} />
        <label className="form-check-label"> {label} </label>
      </div>
    </Fragment>
  );
};

export default RadioButton;
