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
      px-4 py-2 rounded-full
      text-sm font-medium
      border-2 transition-colors duration-300
      w-[200px] h-[40px] text-center flex items-center justify-center
      whitespace-nowrap overflow-hidden
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
    }, 5000); // Increased interval from 3000ms to 5000ms

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setImageSrc(images[activeIndex].src);
  }, [activeIndex, setImageSrc]);

  const handleButtonClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className={`flex flex-wrap justify-center items-center gap-3 w-full sm:flex-nowrap ${className}`}>
      {images.map((item, index) => (
        <FeatureButton
          key={item.key}
          text={item.text}
          isActive={activeIndex === index}
          onClick={() => handleButtonClick(index)}
        />
      ))}
    </div>
  );
};

export default FeatureButtons;