
import React from 'react';

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  description?: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ subtitle, title, description, className = '' }) => {
  const isLeft = className.includes('text-left');
  
  return (
    <div className={`mb-12 ${!isLeft ? 'text-center' : ''} ${className}`}>
      <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">{subtitle}</h2>
      <h3 className="text-3xl md:text-4xl font-extrabold text-text-headings mb-4">{title}</h3>
      {description && <p className={`${!isLeft ? 'mx-auto' : ''} max-w-3xl text-lg text-text-main`}>{description}</p>}
    </div>
  );
};

export default SectionHeader;
