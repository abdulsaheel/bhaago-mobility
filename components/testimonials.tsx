"use client"; 
import React, { useState, useEffect } from 'react';
import {ChevronLeft, ChevronRight } from 'lucide-react';

// Testimonial data type
export interface Testimonial {
  id: number;
  quote: string;
  rating: number;
  name: string;
  title: string;
  avatar: string;
}

// Default testimonial data
const defaultTestimonials: Testimonial[] = [
  {
    id: 1,
    quote: "The thought of owning my own Electric Auto and make it my business is now possible",
    rating: 4.9,
    name: "Ramesh Gowda, Bengaluru",
    title: "Driver",
    avatar: "/testimonials/ramesh.png"
  },
  {
    id: 2,
    quote: "Owning an EV Delivery vehicle was a dream and Bhago is making it a reality. I have a lot of hope for the future",
    rating: 4.9,
    name: "Lakshmi Patil, Bengaluru",
    title: "Driver",
    avatar: "/testimonials/lakshmi.png"
  },
  {
    id: 3,
    quote: "No more paying rentals thanks to Bhago's new easy ownership scheme. I can finally make a livelihood and that is freedom!",
    rating: 4.9,
    name: "Ahmed Hussain, Bengaluru",
    title: "Driver",
    avatar: "/testimonials/ahmed.png"
  }
];

interface DriverTestimonialsProps {
  testimonials?: Testimonial[];
  title?: string;
  className?: string;
}

const DriverTestimonials: React.FC<DriverTestimonialsProps> = ({
  testimonials = defaultTestimonials,
  title = "Our Drivers say",
  className = ""
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'left' | 'right' | null>(null);
  const maxIndex = Math.max(0, testimonials.length - 3);

  // Function to handle animation completion
  useEffect(() => {
    if (isAnimating) {
      const timer = setTimeout(() => {
        setIsAnimating(false);
      }, 500); // Match this with the CSS transition duration
      return () => clearTimeout(timer);
    }
  }, [isAnimating]);

  // Function to render stars based on rating

  // Function to handle dot navigation
  const handleDotClick = (index: number) => {
    if (index === activeIndex || isAnimating) return;
    
    setDirection(index > activeIndex ? 'right' : 'left');
    setIsAnimating(true);
    setActiveIndex(index);
  };

  // Function to handle next/prev navigation
  const handleNavigation = (direction: 'left' | 'right') => {
    if (isAnimating) return;
    
    let newIndex;
    if (direction === 'left') {
      newIndex = activeIndex > 0 ? activeIndex - 1 : activeIndex;
    } else {
      newIndex = activeIndex < maxIndex ? activeIndex + 1 : activeIndex;
    }
    
    if (newIndex !== activeIndex) {
      setDirection(direction);
      setIsAnimating(true);
      setActiveIndex(newIndex);
    }
  };

  // Get animation classes based on state
  const getAnimationClasses = () => {
    if (!isAnimating) return 'transition-opacity duration-300';
    
    if (direction === 'right') {
      return 'animate-slide-left transition-all duration-500';
    } else {
      return 'animate-slide-right transition-all duration-500';
    }
  };

  return (
    <div className={`bg-[#FFF8F2] p-12 md:p-8  overflow-x-hidden ${className}`}>
      <div className="max-w-6xl w-full mx-auto">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3A0F00]">{title}</h2>
          
          <div className="flex items-center">
            <div className="flex -space-x-2">
              {testimonials.slice(0, 3).map((testimonial) => (
                <img 
                  key={testimonial.id}
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-8 h-8 rounded-full border-2 border-white object-cover"
                />
              ))}
              <div className="w-8 h-8 rounded-full bg-[#FF5722] flex items-center justify-center text-white text-xs font-medium border-2 border-white">
                +99
              </div>
            </div>
            <span className="ml-3 font-medium text-[#3A0F00]">Happy Drivers</span>
          </div>
        </div>

        <div className="relative">
          {/* Navigation arrows */}
          {testimonials.length > 3 && (
            <>
              <button 
          onClick={() => handleNavigation('left')}
          disabled={activeIndex === 0 || isAnimating}
          className={`absolute left-0 top-1/2 -translate-y-1/2 -ml-12 md:-ml-16 bg-white rounded-full p-2 shadow-md z-10 transition-opacity duration-300 ${
            activeIndex === 0 ? 'opacity-50 cursor-not-allowed' : 'opacity-100 hover:bg-gray-50'
          }`}
          aria-label="Previous testimonials"
              >
          <ChevronLeft size={24} className="text-[#3A0F00]" />
              </button>
              <button 
          onClick={() => handleNavigation('right')}
          disabled={activeIndex === maxIndex || isAnimating}
          className={`absolute right-0 top-1/2 -translate-y-1/2 -mr-12 md:-mr-16 bg-white rounded-full p-2 shadow-md z-10 transition-opacity duration-300 ${
            activeIndex === maxIndex ? 'opacity-50 cursor-not-allowed' : 'opacity-100 hover:bg-gray-50'
          }`}
          aria-label="Next testimonials"
              >
          <ChevronRight size={24} className="text-[#3A0F00]" />
              </button>
            </>
          )}

            {/* Testimonials container */}
            <div className="overflow-hidden">
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 ${getAnimationClasses()}`}>
              {testimonials.slice(activeIndex, activeIndex + 3).map((testimonial) => (
              <div 
          key={testimonial.id}
          className="bg-[#FFCFB5] rounded-2xl p-6 flex flex-col h-[350px] transition-all duration-500" // Reduced height
              >
            <div className="text-8xl font-georgia text-[#3A0F00] mb-1">"</div>
          <p className="text-[#3A0F00] mb-4">"{testimonial.quote}"</p>
          
          <div className="mt-4"> {/* Reduced margin top */}

          
          <div className="flex items-center mt-2">
            <img 
            src={testimonial.avatar} 
            alt={testimonial.name}
            className="w-10 h-10 rounded-full mr-3 object-cover"
            />
            <div>
            <p className="font-bold text-[#3A0F00]">{testimonial.name}</p>
            <p className="text-sm text-[#3A0F00]">{testimonial.title}</p>
            </div>
          </div>
          </div>
              </div>
              ))}
            </div>
            </div>
        </div>

        {testimonials.length > 3 && (
          <div className="flex justify-center mt-8 space-x-3">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  activeIndex === index 
                    ? 'bg-[#FF5722] scale-125' 
                    : 'bg-[#FFCFB5] hover:bg-[#FFB599]'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DriverTestimonials;