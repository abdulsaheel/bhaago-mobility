"use client";

import Image from "next/image";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import '../globals.css';
import { useState } from "react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";

export default function DriverPartners() {
  const [isOpen, setIsOpen] = useState(false);
  const [statusOpen, setStatusOpen] = useState(false);
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("Your message has been sent successfully! We'll get back to you shortly.");
    setStatusOpen(true);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-[#fee1b2] px-4 sm:px-6 md:px-12 py-12 pt-24 md:pt-32 relative overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <svg
            className="absolute inset-0 w-full h-full z-0 pointer-events-none"
            viewBox="0 0 1440 800"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            <path
              d="M0 250H800C840 250 870 280 870 320V750"
              stroke="white"
              strokeWidth="80"
              strokeLinecap="round"
              opacity="0.4"
            />
            <path
              d="M0 250H800C840 250 870 280 870 320V750"
              stroke="#FFCBA3"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray="30 20"
              opacity="0.4"
            />
          </svg>
        </div>

        <div className="max-w-full sm:max-w-2xl md:max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="z-10 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-[#6b0606] leading-tight">
              <div className="sm:block md:flex items-center md:whitespace-nowrap">
                <span>Your <strong>EV.</strong> </span>
                <span className="md:ml-4">Your Earnings.</span>
              </div>
              <span>Your Future.</span>
            </h1>
            
            <p className="mt-6 text-[#390303] text-lg">
              <span className="font-semibold">Bhago</span> makes urban last mile mobility <span className="font-semibold">effortless - scalable, electric</span>, and <span className="font-semibold">always available</span>. More 
              uptime means more rides, better margins, and a smoother experience for both drivers and passengers. 
              The city moves better with <span className="font-semibold">Bhago</span>.
            </p>
            
            <ul className="mt-8 space-y-2 text-[#390303] text-left md:text-left">
              <li className="flex items-start justify-center md:justify-start">
                <span className="text-[#ff4102] mr-2">•</span>
                <span>Get started with a <span className="font-semibold">minimal upfront fee</span></span>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <span className="text-[#ff4102] mr-2">•</span>
                <span><span className="font-semibold">Own your EV</span> within 3 years</span>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <span className="text-[#ff4102] mr-2">•</span>
                <span>Earn <span className="font-semibold">₹30,000 per month</span> or more</span>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <span className="text-[#ff4102] mr-2">•</span>
                <span>Drive full-time or <span className="font-semibold">sub-lease</span> for passive income</span>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <span className="text-[#ff4102] mr-2">•</span>
                <span><span className="font-semibold">Battery swapping</span> = No downtime = More rides = Higher earnings</span>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <span className="text-[#ff4102] mr-2">•</span>
                <span>
                  Have questions? Call us at{" "}
                  <a href="tel:8699948432" className="font-semibold underline hover:text-[#ff4102]">
                    86999&nbsp;48432
                  </a>
                </span>
              </li>
            </ul>

            <div className="mt-10">
              <h3 className="text-xl font-bold text-[#390303]">
                Apply now & start driving
              </h3>
            </div>
            
            <button
              className="relative inline-flex items-center justify-center px-8 py-3 m-2 text-xl font-bold text-white bg-[#FF5722] rounded-full transition-all duration-200 hover:bg-[#FF7043]"
              onClick={() => setIsOpen(true)}
            >
              Contact Us
            </button>
          </div>
          
          <div className="relative w-full h-[400px] md:h-[500px] flex justify-center">
            <Image
              src="/rickshaw.png"
              alt="Bhago EV with passenger"
              fill
              className="object-contain sm:scale-100 md:scale-125"
              priority
            />
          </div>
        </div>
      </main>
      
      <Footer />

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-[#FFF3EF] border-none">
          <div className="relative z-10 px-12 py-16 space-y-6">
            <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 focus:outline-none">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
              <span className="sr-only">Close</span>
            </DialogClose>
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

      <Dialog open={statusOpen} onOpenChange={setStatusOpen}>
        <DialogContent className="max-w-lg p-8 bg-[#FFF3EF] border-none text-center">
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
            <span className="sr-only">Close</span>
          </DialogClose>
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
