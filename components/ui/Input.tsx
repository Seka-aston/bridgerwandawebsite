
import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
}

const Input: React.FC<InputProps> = ({ label, name, ...props }) => {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
        {props.required && <span className="text-red-600 ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        {...props}
        className="w-full px-3 py-2 bg-white text-text-main border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary disabled:bg-gray-100"
      />
    </div>
  );
};

export default Input;
