"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";

interface AutoScrollingCarouselProps {
  images: string[];
  speed?: number; // Pixels per second
}

const AutoScrollingCarousel: React.FC<AutoScrollingCarouselProps> = ({
  images,
  speed = 50,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  
  // Triple the images to ensure we have enough for scrolling
  const allImages = [...images, ...images, ...images];

  useEffect(() => {
    const container = containerRef.current;
    const scroller = scrollerRef.current;
    if (!container || !scroller) return;

    let animationFrame: number;
    let startTime: number | null = null;
    let lastPosition = 0;

    // Get total width of one set of images
    const imageWidth = 300; // Width of image
    const gap = 16; // Gap between images
    const singleSetWidth = images.length * (imageWidth + gap);

    const scroll = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      
      // Calculate position based on time and speed
      const position = (elapsed * speed) / 1000;
      
      // Apply the scroll position
      container.scrollLeft = lastPosition + position;
      
      // If we've scrolled past a complete set, reset
      if (container.scrollLeft >= singleSetWidth) {
        lastPosition = 0;
        startTime = timestamp;
        container.scrollLeft = 0;
      }
      
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);
    
    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [images.length, speed]);

  return (
    <div ref={containerRef} className="w-full overflow-hidden">
      <div 
        ref={scrollerRef}
        className="flex gap-4"
        style={{ 
          whiteSpace: 'nowrap',
          scrollbarWidth: 'none',
          msOverflowStyle: 'none'
        }}
      >
        {allImages.map((image, index) => (
          <div key={index} className="inline-block flex-none">
            <Image
              src={image}
              alt={`Carousel image ${index % images.length + 1}`}
              width={300}
              height={169}
              className="w-[260px] h-[185px] object-cover border border-orange-400 rounded-lg"
              priority={index < images.length}
            />
          </div>
        ))}
      </div>
      <style jsx global>{`
        /* Hide scrollbar for Chrome, Safari and Opera */
        div::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default AutoScrollingCarousel;