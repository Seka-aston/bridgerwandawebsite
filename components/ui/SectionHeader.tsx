
import React from 'react';

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  description?: string;
  className?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ subtitle, title, description, className = '' }) => {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-sm font-bold text-primary uppercase tracking-wider mb-2">{subtitle}</h2>
      <h3 className="text-3xl md:text-4xl font-extrabold text-text-headings mb-4">{title}</h3>
      {description && <p className="max-w-3xl mx-auto text-lg text-text-main">{description}</p>}
    </div>
  );
};

export default SectionHeader;
