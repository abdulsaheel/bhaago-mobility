"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaPhoneFlip } from "react-icons/fa6";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed w-full top-0 z-50 flex justify-center">
      {/* Logo and Wordmark (Outside Navbar, Perfectly Centered) */}
      <div
        className={`absolute left-[5%] md:left-[5%] flex items-center gap-4 transition-opacity duration-500 ${
          isScrolled ? "opacity-0" : "opacity-100"
        }`}
        style={{ top: "50%", transform: "translateY(-50%)" }}
      >
        <img src="/logo.png" alt="Bhaago Logo" className="h-12 w-12" />
        <img src="/wordmark.png" alt="Bhaago Wordmark" className="h-12" />
      </div>

      {/* Main Navigation Bar (Dynamically Expanding) */}
      <div
        className={`transition-all duration-500 ease-in-out ${
          isScrolled ? "w-[90%] md:w-[750px]" : "w-[90%] md:w-[700px]"
        } max-w-full h-[55px] flex justify-center items-center bg-[#FDF1E5] shadow-md border border-[#611313] rounded-[10px] px-[12px] py-[8px]
          ${isScrolled ? "mt-[10px]" : "mt-[20px]"}`}
      >
        {/* Logo Inside Navbar When Scrolled */}
        {isScrolled && (
          <div className="absolute left-5 opacity-100 transition-opacity duration-500">
            <img src="/logo.png" alt="Bhaago Logo" className="h-8 w-8" />
          </div>
        )}

        <nav className="flex justify-center items-center w-full space-x-[30px]">
          {["Passenger Partners", "Cargo Partners", "Driver Partners", "About", "Hiring Now"].map(
            (item) => (
              <Link
                key={item}
                href="#"
                className="text-[#611313] font-medium flex justify-center items-center transition-all duration-500 ease-in-out"
                style={{
                  fontFamily: "Georama, sans-serif",
                  fontSize: "12px",
                  lineHeight: "16px",
                  width: "110px",
                  textAlign: "center",
                }}
              >
                {item}
              </Link>
            )
          )}
        </nav>
      </div>

      {/* Contact Us Button (Fixed at Top Right, Smoothest Transition) */}
      <div
        className={`fixed right-[5%] md:right-[5%] top-5 bg-[#FF4102] shadow-md transition-all duration-500 ease-in-out flex justify-center items-center ${
          isScrolled ? "w-[50px] h-[50px] rounded-full" : "w-[130px] h-[40px] rounded-[8px]"
        }`}
      >
        <div className="relative w-full h-full flex justify-center items-center">
          {/* Text (Fade Out) */}
          <span
            className={`absolute transition-opacity duration-500 ${
              isScrolled ? "opacity-0" : "opacity-100"
            } text-white font-semibold`}
            style={{ fontFamily: "Georama, sans-serif", fontSize: "14px" }}
          >
            Contact Us
          </span>

          {/* Icon (Fade In) */}
          <FaPhoneFlip
            className={`absolute transition-opacity duration-500 ${
              isScrolled ? "opacity-100" : "opacity-0"
            } text-white text-xl`}
          />
        </div>
      </div>
    </div>
  );
}