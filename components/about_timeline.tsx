"use client";
import React, { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { FaBatteryFull, FaBolt, FaTruck, FaLeaf, FaExchangeAlt, FaArrowLeft } from "react-icons/fa";

const timelineData = [
  { date: "August 2019", event: "Bhago Mobility is founded.", icon: <FaBolt /> },
  { date: "April 2020", event: "Invests in Saku, a battery technology partner.", icon: <FaBatteryFull /> },
  { date: "June 2020", event: "Starts research and development (R&D) in battery technology.", icon: <FaLeaf /> },
  { date: "June 2021", event: "Invests in Jumbotail, an application partner.", icon: <FaTruck /> },
  { date: "September 2022", event: "Partners with Honda E-swap, a battery-swapping initiative.", icon: <FaExchangeAlt /> },
  { date: "August 2023", event: "Builds a system powered by Value.", icon: <FaBolt /> },
  { date: "December 2024", event: "Finalization of fleet solutions is completed.", icon: <FaTruck /> }
];

const Timeline = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <div className="relative w-full overflow-hidden py-10">
      <h2 className="text-3xl font-bold text-center mb-6">Timeline</h2>

      <div 
        className="flex items-center space-x-6 px-10 animate-scroll"
        ref={scrollRef}
        onMouseEnter={() => scrollRef.current?.style.setProperty("animation-play-state", "paused")}
        onMouseLeave={() => scrollRef.current?.style.setProperty("animation-play-state", "running")}
      >
        {/* Duplicate timelineData for seamless scrolling */}
        {[...timelineData, ...timelineData].flatMap((item, index, arr) => {
          const elements = [
            <div key={`card-${index}`} className="flex-shrink-0 w-80 h-64 flex items-center justify-center">
              <Card className="border-2 border-[#FF5C00] bg-white shadow-xl rounded-2xl p-6 w-full h-full flex flex-col justify-center">
                <CardContent className="flex flex-col items-center text-center">
                  <div className="text-[#FF5C00] text-5xl mb-2">{item.icon}</div>
                  <p className="text-lg font-bold text-gray-800 uppercase tracking-wide whitespace-normal break-words px-2">
                    {item.date}
                  </p>
                  <p className="text-gray-600 text-md mt-2 leading-relaxed px-2 whitespace-normal break-words">
                    {item.event}
                  </p>
                </CardContent>
              </Card>
            </div>
          ];

          // Add an arrow after every card except the last one in the sequence
          if (index !== arr.length - 1) {
            elements.push(
              <div key={`arrow-${index}`} className="text-[#FF5C00] text-3xl flex items-center">
                <FaArrowLeft />
              </div>
            );
          }

          return elements;
        })}
      </div>

      <style jsx>{`
        @keyframes scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 35s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default Timeline;
