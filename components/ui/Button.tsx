
import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  to?: string;
  variant?: 'primary' | 'secondary' | 'link';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  to,
  variant = 'primary',
  className = '',
  type = 'button',
  disabled = false,
}) => {
  const baseClasses = 'inline-block font-bold py-3 px-8 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed text-center';

  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary shadow-md hover:shadow-lg',
    secondary: 'bg-surface text-primary-dark font-semibold hover:bg-primary/20 focus:ring-primary',
    link: 'text-primary hover:text-primary-dark underline p-0',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={combinedClasses}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
