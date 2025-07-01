"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaPhoneFlip, FaBars } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Image from "next/image";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Your message has been sent successfully! We'll get back to you shortly.");
    setStatusOpen(true);
    setIsFormOpen(false);
  };

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
            <button onClick={() => setIsFormOpen(true)} className="bg-transparent border-none cursor-pointer">
              <div className="bg-[#FF4102] w-[40px] h-[40px] rounded-full flex justify-center items-center shadow-md">
                <FaPhoneFlip className="text-white text-xl" />
              </div>
            </button>
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
        <button 
          onClick={() => setIsFormOpen(true)}
          className="hidden md:flex absolute right-[5%] bg-[#FF4102] shadow-md transition-opacity duration-500 ease-in-out justify-center items-center w-[130px] h-[40px] rounded-[8px] text-white font-semibold" 
          style={{ top: "50%", transform: "translateY(-50%)", fontFamily: "Georama, sans-serif", fontSize: "14px" }}
        >
          Contact Us
        </button>
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
          <button 
            onClick={() => {
              setIsFormOpen(true);
              setIsMenuOpen(false);
            }} 
            className="mt-6 bg-[#FF4102] text-white text-center py-2 rounded-md font-semibold"
          >
            Contact Us
          </button>

        </nav>
      </div>

      {/* Contact Form Dialog */}
      <Dialog open={isFormOpen} onOpenChange={setIsFormOpen}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-[#FFF3EF] border-none fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-[9999]">
          <div className="relative px-12 py-16 space-y-6">
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 focus:outline-none z-10 bg-transparent border-none cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
              <span className="sr-only">Close</span>
            </button>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-1">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full px-0 pt-2 pb-1 text-lg bg-transparent border-0 border-b-2 border-[#C4846C] placeholder-[#C4846C] focus:ring-0 focus:border-[#FF5722]"
                  />
                </div>
                <div className="space-y-1">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full px-0 pt-2 pb-1 text-lg bg-transparent border-0 border-b-2 border-[#C4846C] placeholder-[#C4846C] focus:ring-0 focus:border-[#FF5722]"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-6 mt-6">
                <div className="space-y-1">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number"
                    className="w-full px-0 pt-2 pb-1 text-lg bg-transparent border-0 border-b-2 border-[#C4846C] placeholder-[#C4846C] focus:ring-0 focus:border-[#FF5722]"
                  />
                </div>
                <div className="space-y-1">
                  <input
                    type="text"
                    name="location"
                    placeholder="Location"
                    className="w-full px-0 pt-2 pb-1 text-lg bg-transparent border-0 border-b-2 border-[#C4846C] placeholder-[#C4846C] focus:ring-0 focus:border-[#FF5722]"
                  />
                </div>
              </div>
              <div className="space-y-1 mt-6">
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  className="w-full px-0 pt-2 pb-1 text-lg bg-transparent border-0 border-b-2 border-[#C4846C] placeholder-[#C4846C] focus:ring-0 focus:border-[#FF5722]"
                />
              </div>
              <div className="space-y-1 mt-6">
                <textarea
                  name="message"
                  placeholder="Message"
                  rows={4}
                  className="w-full px-0 pt-2 pb-1 text-lg bg-transparent border-0 border-b-2 border-[#C4846C] placeholder-[#C4846C] focus:ring-0 focus:border-[#FF5722] resize-none"
                ></textarea>
              </div>
              <div className="flex justify-center pt-8">
                <button
                  type="submit"
                  className="px-16 py-3 text-xl font-semibold text-white bg-[#FF5722] rounded-full hover:bg-[#FF7043] transition-colors duration-200"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </DialogContent>
      </Dialog>

      {/* Success Dialog */}
      <Dialog open={statusOpen} onOpenChange={setStatusOpen}>
        <DialogContent className="max-w-lg p-8 bg-[#FFF3EF] border-none text-center fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-[9999]">
          <button
            onClick={() => setStatusOpen(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 focus:outline-none z-10 bg-transparent border-none cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
            <span className="sr-only">Close</span>
          </button>
          <h2 className="text-xl font-semibold mb-4">{status?.startsWith("Your message") ? "Success!" : "Error"}</h2>
          <p className="text-lg">{status}</p>
          <div className="mt-6">
            <button
              onClick={() => setStatusOpen(false)}
              className="px-8 py-2 text-xl font-semibold text-white bg-[#FF5722] rounded-full hover:bg-[#FF7043] transition-colors duration-200"
            >
              Close
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
