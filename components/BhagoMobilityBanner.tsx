import React from 'react';

const BhagoMobilityBanner = () => {
  return (
    <div className="bg-[#FEE1B2] flex flex-col w-full mx-auto">
      {/* Top text section with gray background */}
    <div className="bg-[#FEE1B2] p-6 text-sm max-w-4xl text-gray-800 text-center mx-auto">
    <p className="mb-6 text-#390303 text-sm text-left">
    Bhago Mobility wasn't dreamed up in a boardroom. It comes from decades of grease, gears, and real engineering, born from the legacy of Modern Automotives, a leader in precision automotive manufacturing. We know what makes a vehicle reliable, what keeps fleets running, and the urgent economic need to support sustainable micro-entrepreneurship. So, we built EVs that don't just run on smart batteries, but on better thinking. Low on maintenance, high on uptime, and powered by partnerships that make sense - for businesses, for driverpreneurs, and for Indian cities that need cleaner, smarter ways to move
    </p>
    </div>
      
      {/* Orange sections */}
    <div className="flex flex-col">
      {/* First orange section */}
      <div className="bg-[#FF5C00] py-4 px-6 text-white font-medium text-center rounded-t-xl">
      <p>Mission-driven, impact-focused EV mobility provider</p>
      </div>
      
      {/* Second orange section with slightly lighter color */}
      <div className="bg-[#FF8332] py-4 px-6 text-white font-medium text-center border-t border-orange-300">
      <p>Strategic partnerships with Honda & Valeo</p>
      </div>
      
      {/* Third orange section with even lighter color */}
      <div className="bg-[#EE9459] py-4 px-6 text-white font-medium text-center border-t border-orange-200">
      <p>Expanding across major Indian cities</p>
      </div>

      {/* Fourth orange section with even lighter color */}
      <div className="bg-[#F4A072] py-4 px-6 text-white font-medium text-center border-t border-orange-100">
      <p>Backed by an enterprise with a 100 year legacy</p>
      </div>

      {/* Fifth orange section with even lighter color */}
      <div className="bg-[#F7B08C] py-4 px-6 text-white font-medium text-center border-t border-orange-100">
      <p>Technologically focused</p>
      </div>

      {/* Sixth orange section with even lighter color */}
      <div className="bg-[#F9C4B0] py-4 px-6 text-white font-medium text-center border-t border-orange-100 rounded-b-xl">
      <p>Enduring relationships with companies like Honda, Nestle, Mother Dairy, GSK, Yamaha, BMW</p>
      </div>
    </div>
    </div>
  );
};

export default BhagoMobilityBanner;