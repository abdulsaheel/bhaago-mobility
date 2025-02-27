import React, { useState } from 'react';

interface FeatureButtonProps {
  text: string;
  isActive: boolean;
  className?: string;
  onClick: () => void;
}

const FeatureButton: React.FC<FeatureButtonProps> = ({ 
  text, 
  isActive,
  className = "",
  onClick 
}) => {
  // Use maroon when active, orange when inactive
  const colorClasses = isActive
    ? "text-[#500000] border-[#500000] hover:bg-[#500000] hover:text-white"
    : "text-[#FF5722] border-[#FF5722] hover:bg-[#FF5722] hover:text-white";

  return (
    <button
      onClick={onClick}
      className={`
      px-3 py-2 rounded-full text-sm font-medium
      border-2 transition-colors duration-300
      ${colorClasses}
      ${className}
      `}
    >
      {text}
    </button>
  );
};
interface FeatureButtonsProps {
  className?: string;
  setImageSrc: (src: string) => void; // New prop to update image
}

const FeatureButtons: React.FC<FeatureButtonsProps> = ({ className = "", setImageSrc }) => {
  const [activeButton, setActiveButton] = useState<string>('driverpreneurs');

  const handleButtonClick = (buttonKey: string, imageSrc: string) => {
    setActiveButton(buttonKey);
    setImageSrc(imageSrc);
  };

  return (
    <div className={`flex gap-4 ${className}`}>
      <FeatureButton 
        text="Creating Driverpreneurs" 
        isActive={activeButton === 'driverpreneurs'}
        onClick={() => handleButtonClick('driverpreneurs', '/rickshaw.png')}
      />
      <FeatureButton 
        text="100% Solar Powered" 
        isActive={activeButton === 'solar'}
        onClick={() => handleButtonClick('solar', '/solar-charger.png')}
      />
      <FeatureButton 
        text="Industry Leading Uptime" 
        isActive={activeButton === 'uptime'}
        onClick={() => handleButtonClick('uptime', '/industry-leading.png')}
      />
    </div>
  );
};

export default FeatureButtons;
