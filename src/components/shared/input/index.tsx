import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import './input.scss';

interface CustomInputProps {
  id?: string;
  label?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string | null;
  placeholder?: string;
  type?: 'text' | 'password' | 'number' | 'date' | 'email';
  register?: UseFormRegister<any>;
  disabled?: boolean;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  className?: any,
}

// eslint-disable-next-line react/display-name
const CustomInput = React.forwardRef<HTMLInputElement, CustomInputProps>(
  (
    {
      id,
      label,
      name,
      value,
      onChange,
      error,
      placeholder,
      type = 'text',
      register,
      disabled,
      onFocus,
      className = false,
    },
    ref
  ) => {
    return (
      <div className='input-field'>
        <label htmlFor={id}>{label}<span className="star">*</span></label>
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={onFocus}
          {...(register && name && register(name))}
          ref={ref}
          className={`input ${className}`}
        />
        {error && <span>{error}</span>}
      </div>
    );
  }
);

export default CustomInput;
