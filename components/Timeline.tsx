import React, { useState, useEffect } from 'react';

interface TimelinePinProps {
  month: string;
  year: string;
  description: string;
  index: number;
}

const TimelinePin = ({ month, year, description }: TimelinePinProps) => {
  return (
    <div className="relative flex flex-col items-center group">
      {/* Pin/Marker with modern teardrop shape */}
      <div className="relative transform transition-transform duration-300 hover:scale-110">
        {/* Outer circle with gradient and shadow */}
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 shadow-[0_10px_30px_rgba(255,140,0,0.3)] flex items-center justify-center">
          {/* Inner circle with text */}
          <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-white bg-opacity-90 backdrop-blur-sm flex flex-col items-center justify-center text-orange-600 font-bold shadow-inner">
            <div className="text-lg md:text-xl">{month}</div>
            <div className="text-lg md:text-xl">{year}</div>
          </div>
        </div>
        
        {/* Teardrop point with gradient */}
        <div className="absolute -bottom-8 w-0 h-0 
                       border-l-[20px] border-l-transparent 
                       border-t-[32px] border-t-orange-400 
                       border-r-[20px] border-r-transparent 
                       left-1/2 transform -translate-x-1/2 shadow-md"></div>
      </div>
      
      {/* Description text with hover effect */}
      <div className="mt-10 text-center max-w-xs font-medium text-sm md:text-base bg-white bg-opacity-90 backdrop-blur-sm p-4 rounded-lg shadow-lg transform transition-transform duration-300 group-hover:scale-105">
        {description}
      </div>
    </div>
  );
};

interface MobileTimelinePinProps {
  month: string;
  year: string;
  description: string;
  isLeft: boolean;
}

const MobileTimelinePin = ({ month, year, description, isLeft }: MobileTimelinePinProps) => {
  return (
    <div className={`flex items-center mb-8 w-full ${isLeft ? 'justify-start' : 'justify-end'}`}>
      <div className={`flex ${isLeft ? 'flex-row' : 'flex-row-reverse'} items-center max-w-xs`}>
        {/* Pin */}
        <div className="relative flex-shrink-0 transform transition-transform duration-300 hover:scale-110">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 shadow-[0_10px_30px_rgba(255,140,0,0.3)] flex items-center justify-center">
            <div className="w-14 h-14 rounded-full bg-white bg-opacity-90 backdrop-blur-sm flex flex-col items-center justify-center text-orange-600 font-bold text-sm shadow-inner">
              <div>{month}</div>
              <div>{year}</div>
            </div>
          </div>
          
          {/* Teardrop point */}
          <div className={`absolute w-0 h-0 
                         border-t-[15px] border-t-transparent 
                         border-b-[15px] border-b-transparent 
                         ${isLeft ? 
                           'right-0 transform translate-x-6 border-l-[24px] border-l-orange-400' : 
                           'left-0 transform -translate-x-6 border-r-[24px] border-r-orange-400'}`}>
          </div>
        </div>
        
        {/* Description */}
        <div className={`${isLeft ? 'ml-8' : 'mr-8'} font-medium bg-white bg-opacity-90 backdrop-blur-sm p-4 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105`}>
          {description}
        </div>
      </div>
    </div>
  );
};

const BhagoMobilityTimeline = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  // Track window width for responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Set initial state
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const timelineItems = [
    {
      month: "AUG",
      year: "2019",
      description: "Bhago Mobility is founded"
    },
    {
      month: "JUN",
      year: "2020",
      description: "R&D on battery technology"
    },
    {
      month: "APR",
      year: "2020",
      description: "Invested in Saku, Battery tech Partner"
    },
    {
      month: "JUN",
      year: "2021",
      description: "Invested in Jumbotail, Application Partner"
    },
    {
      month: "SEPT",
      year: "2022",
      description: "Tie up with Honda E-swap"
    }
  ];

  return (
    <div className="w-full relative py-8 overflow-hidden">
      {/* Desktop version */}
      {!isMobile && (
        <div className="hidden md:block">
          {/* Background shapes with gradient */}
          <div className="absolute bottom-0 left-0 w-full h-64">
            <div className="absolute bottom-0 left-1/4 w-4/5 h-32 bg-gradient-to-r from-orange-100 to-orange-200 rounded-full opacity-60 transform -translate-x-1/4 shadow-lg"></div>
            <div className="absolute bottom-4 left-1/2 w-full h-24 bg-gradient-to-r from-orange-200 to-orange-300 rounded-full opacity-60 transform -translate-x-1/2 shadow-lg"></div>
            <div className="absolute bottom-0 left-1/3 w-2/3 h-16 bg-gradient-to-r from-orange-300 to-orange-400 rounded-full opacity-40 transform -translate-x-1/3 shadow-lg"></div>
          </div>
          
          {/* Timeline dots and line */}
          <div className="absolute bottom-24 left-0 w-full px-8 mx-auto max-w-6xl">
            <div className="w-full h-1 bg-gradient-to-r from-orange-300 to-orange-400 shadow-md"></div>
            <div className="flex justify-between absolute w-full top-0 left-0 transform -translate-y-1/2">
              {timelineItems.map((_, index) => (
                <div key={index} className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-orange-500 shadow-lg"></div>
              ))}
            </div>
          </div>
          
          {/* Timeline pins */}
          <div className="flex justify-between px-4 relative z-10 max-w-6xl mx-auto mb-24">
            {timelineItems.map((item, index) => (
              <TimelinePin
                key={index}
                month={item.month}
                year={item.year}
                description={item.description}
                index={index}
              />
            ))}
          </div>
        </div>
      )}
      
      {/* Mobile version */}
      {isMobile && (
        <div className="md:hidden px-4 max-w-md mx-auto relative">
          {/* Background shape */}
          <div className="absolute top-0 bottom-0 left-1/2 w-1 bg-gradient-to-b from-orange-300 to-orange-400 transform -translate-x-1/2 z-0 shadow-md"></div>
          
          {/* Timeline items */}
          <div className="relative z-10">
            {timelineItems.map((item, index) => (
              <MobileTimelinePin
                key={index}
                month={item.month}
                year={item.year}
                description={item.description}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default BhagoMobilityTimeline;