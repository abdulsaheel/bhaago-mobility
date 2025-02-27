"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [rotation, setRotation] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const delta = scrollY - lastScrollY;
      setRotation((prev) => prev + delta * 0.1); // **Slower rotation**
      setLastScrollY(scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <section className=" w-screen h-screen relative overflow-hidden bg-[#FDE5BF] pb-20 overflow-x-hidden">
      {/* Decorative Background Gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-#FEE1B2" />
      </div>

      {/* Decorative Image with Slow Rotation */}
      <Image
        src="/decorative.png"
        alt="Decorative"
        width={600}
        height={600}
        className="absolute top-0 left-0 z-0 opacity-30"
        style={{
          transform: `rotate(${rotation}deg)`,
          transition: "transform 0.2s ease-out", // **Slower & smoother**
        }}
      />

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-16 lg:px-24 pb-28 pt-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Section: Text */}
          <div className="space-y-2 relative">
            <h1 className=" text-[120px] font-black leading-[90px] tracking-[-1%] text-[#FF531A] whitespace-nowrap mb-1">
              Smarter Mobility
            </h1>
            <h1 className="text-[75px] font-black leading-[90px] tracking-[-1%] text-[#FF531A] whitespace-nowrap">
              for a Better India
            </h1>
            <div className="h-4"></div>
            <p className="text-3xl text-[#6B0606] max-w-xl relative z-20">
              <strong>Sustainable Last Mile Transport, Sustainable Livelihoods.
              </strong>
            </p>
            <p className="text-lg text-[#6B0606] max-w-xl relative z-20">
            Last-mile transport doesn’t have to be unreliable, expensive, or polluting. Our <strong> electric fleet </strong>keeps people and packages moving - <strong> fast, affordable, and green.</strong> By offering disruptive vehicle uptime and <strong>micro-entrepreneurship</strong> opportunities across <strong>passenger & cargo</strong> mobility.
            </p>
          </div>

          {/* Right Section: Rickshaw + Person */}
            <div className="relative flex justify-center mt-14">
            <Image
              src="/rickshaw.png"
              alt="Electric Auto Rickshaw"
              width={700}
              height={700}
              className="object-contain relative z-20"
            />
            </div>
        </div>
      </div>

      <svg
        className="absolute bottom-0 left-0 w-screen h-screen"
        viewBox="0 0 360 360"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path 
          fill="#FFF8F3" 
          d=" M360,148 C240,360 120,316 0,316 L0,360 L360,360 Z" 
        />
      </svg>
    </section>
  );
}
