import React, { useState, useEffect } from 'react';

const images = [
  { key: 'driverpreneurs', text: 'Creating Driverpreneurs', src: '/rickshaw.png' },
  { key: 'green', text: '100% Green', src: '/solar-charger.png' },
  { key: 'uptime', text: 'Industry Leading Uptime', src: '/industry-leading.png' }
];

const FeatureButton = ({ text, isActive, className = "", onClick }: { text: string; isActive: boolean; className?: string; onClick: () => void }) => {
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
      whitespace-nowrap min-w-[120px] text-center flex items-center justify-center
      ${colorClasses}
      ${className}
      `}
    >
      {text}
    </button>
  );
};

const FeatureButtons = ({ className = "", setImageSrc }: { className?: string; setImageSrc: (src: string) => void }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setImageSrc(images[activeIndex].src);
  }, [activeIndex, setImageSrc]);

  const handleButtonClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className={`flex flex-wrap justify-center items-center gap-2 w-full sm:flex-nowrap sm:gap-4 ${className}`}>
      {images.map((item, index) => (
        <FeatureButton
          key={item.key}
          text={item.text}
          isActive={activeIndex === index}
          className="px-6 py-2.5 sm:px-7 sm:py-3 md:px-8 md:py-3.5 rounded-full text-xs sm:text-sm md:text-base font-medium leading-relaxed border-2 transition-colors duration-300 whitespace-nowrap min-w-[140px] sm:min-w-[180px] md:min-w-[200px] text-center flex items-center justify-center"
          onClick={() => handleButtonClick(index)}
        />
      ))}
    </div>
  );
};



export default FeatureButtons;