
import React from 'react';
import { GOOGLE_FORM_URL } from '../src/config/links';

interface ApplyLinkProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary' | 'link';
}

const ApplyLink: React.FC<ApplyLinkProps> = ({ 
  children, 
  className = '', 
  variant = 'primary' 
}) => {
  const baseClasses = 'inline-block font-bold py-3 px-8 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 text-center';

  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-dark focus:ring-primary shadow-md hover:shadow-lg',
    secondary: 'bg-surface text-primary-dark font-semibold hover:bg-primary/20 focus:ring-primary',
    link: 'text-primary hover:text-primary-dark underline p-0',
  };

  const combinedClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;

  return (
    <a 
      href={GOOGLE_FORM_URL} 
      target="_blank" 
      rel="noopener noreferrer" 
      className={combinedClasses}
    >
      {children}
    </a>
  );
};

export default ApplyLink;
