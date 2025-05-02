import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  highlight?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = true,
  highlight,
}) => {
  // Replace the highlighted word with a styled version
  const renderTitle = () => {
    if (!highlight) return title;
    
    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="text-orange-400">{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        {renderTitle()}
      </h2>
      {subtitle && (
        <p className="text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;