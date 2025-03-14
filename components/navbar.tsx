"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaPhoneFlip, FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { label: "Passenger Partners", href: "/passenger-partners" },
    { label: "Cargo Partners", href: "/cargo-partners" },
    { label: "Driver Partners", href: "/driver-partners" },
    { label: "About", href: "/about" },
    { label: "Hiring Now", href: "/hiring" },
  ];

  return (
    <div className="fixed w-full top-0 z-50 flex justify-center items-center h-[80px] bg-transparent">
      {/* Logo (Left Side, Outside Navbar) */}
      <Link href="/">
        <div
          className={`absolute left-[5%] flex items-center transition-opacity duration-500 ${
            isScrolled ? "opacity-0" : "opacity-100"
          }`}
          style={{ top: "50%", transform: "translateY(-50%)" }}
        >
          <Image src="/bhago logo.png" alt="Bhaago Logo" width={150} height={150} />
        </div>
      </Link>

      {/* Hamburger Menu Button (Mobile Only) */}
      <div className="md:hidden absolute right-[5%] z-50">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#611313] text-2xl">
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Main Navigation Bar (Centered) */}
      <div
        className={`hidden md:flex items-center justify-center transition-all duration-500 ease-in-out ${
          isScrolled ? "w-[90%] md:w-[750px]" : "w-[90%] md:w-[700px]"
        } h-[55px] bg-[#FDF1E5] shadow-md border border-[#611313] rounded-[10px] px-[12px]`}
        style={{ position: "relative" }}
      >
        {/* Logo Inside Navbar When Scrolled */}
        {isScrolled && (
          <div className="absolute left-5 flex items-center">
            <Link href="/">
              <img src="/logo.png" alt="Bhaago Logo" className="h-8 w-8" />
            </Link>
          </div>
        )}

        {/* Call Icon Inside Navbar When Scrolled */}
        {isScrolled && (
          <div className="absolute right-5 flex items-center">
            <a href="tel:+91-172-2609002" >
            <div className="bg-[#FF4102] w-[40px] h-[40px] rounded-full flex justify-center items-center shadow-md">
              <FaPhoneFlip className="text-white text-xl" />
            </div>
            </a>
          </div>
        )}

        <nav className="flex justify-center items-center w-full space-x-6">
          {navItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-[#611313] font-medium flex justify-center items-center transition-all duration-500 ease-in-out hover:underline underline-offset-4"
              style={{ fontFamily: "Georama, sans-serif", fontSize: "14px", textAlign: "center", lineHeight: "20px" }}
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Contact Us Button (Desktop Only) - Hidden when scrolled */}
      {!isScrolled && (
  <a href="tel:+91-172-2609002" className="text-white font-semibold" style={{ fontFamily: "Georama, sans-serif", fontSize: "14px" }}>

        <div className="hidden md:flex absolute right-[5%] bg-[#FF4102] shadow-md transition-opacity duration-500 ease-in-out justify-center items-center w-[130px] h-[40px] rounded-[8px]" style={{ top: "50%", transform: "translateY(-50%)" }}>
    Contact Us
</div>
</a>

      )}

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setIsMenuOpen(false)}></div>
      )}
      
      <div className={`fixed top-0 right-0 h-full w-[250px] bg-[#FDF1E5] shadow-lg transform ${isMenuOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 ease-in-out md:hidden z-50`}>
        <button className="absolute top-4 right-4 text-[#611313] text-2xl" onClick={() => setIsMenuOpen(false)}>
          <FaTimes />
        </button>
        <nav className="flex flex-col mt-20 space-y-6 px-6">
          {navItems.map(({ label, href }) => (
            <Link key={label} href={href} className="text-[#611313] font-medium text-lg hover:underline" onClick={() => setIsMenuOpen(false)}>
              {label}
            </Link>
          ))}
          {/* Contact Us Button Inside Mobile Menu */}
          <Link href="tel:+91-172-2609002" className="mt-6 bg-[#FF4102] text-white text-center py-2 rounded-md font-semibold">
  Contact Us
</Link>

        </nav>
      </div>
    </div>
  );
}
