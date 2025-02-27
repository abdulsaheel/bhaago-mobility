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
  const colorClasses = isActive
    ? "text-[#500000] border-[#500000] hover:bg-[#500000] hover:text-white"
    : "text-[#FF5722] border-[#FF5722] hover:bg-[#FF5722] hover:text-white";

  return (
    <button
      onClick={onClick}
      className={`
      px-3 py-2 sm:px-4 sm:py-3 rounded-full
      text-xs sm:text-sm md:text-base font-medium
      border-2 transition-colors duration-300
      whitespace-nowrap min-w-[150px] text-center flex items-center justify-center
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
  setImageSrc: (src: string) => void;
}

const FeatureButtons: React.FC<FeatureButtonsProps> = ({ className = "", setImageSrc }) => {
  const [activeButton, setActiveButton] = useState<string>('driverpreneurs');

  const handleButtonClick = (buttonKey: string, imageSrc: string) => {
    setActiveButton(buttonKey);
    setImageSrc(imageSrc);
  };

  return (
    <div className={`flex gap-2 sm:gap-4 justify-center flex-nowrap overflow-hidden ${className}`}>
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