"use client";

import Image from "next/image";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import '../globals.css';
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function Home() {
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
    <div className="relative flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <main className="flex-grow bg-[#fee1b2] px-4 sm:px-6 md:px-12 py-12 pt-24 md:pt-32 relative overflow-hidden">
        {/* Curved Path Background */}
        <div className="absolute inset-0 w-full h-full">
          <svg
            className="absolute inset-0 w-full h-full z-0 pointer-events-none"
            viewBox="0 0 1004 1545"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="xMidYMid slice"
          >
            {/* Thick White Path (Lower Opacity) */}
            <path
              d="M50 0V300C50 320 80 350 120 350H750C790 350 820 380 820 420V900C820 940 790 970 750 970H200C160 970 130 1000 130 1040V1545"
              stroke="white"
              strokeWidth="80"
              strokeLinecap="round"
              opacity="0.4"
            />
            {/* Dashed Peach Line (Lower Opacity) */}
            <path
              d="M50 0V300C50 320 80 350 120 350H750C790 350 820 380 820 420V900C820 940 790 970 750 970H200C160 970 130 1000 130 1040V1545"
              stroke="#FFCBA3"
              strokeWidth="10"
              strokeLinecap="round"
              strokeDasharray="30 20"
              opacity="0.4"
            />
          </svg>
        </div>


        {/* Content Container */}
        <div className="max-w-full sm:max-w-2xl md:max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="z-10 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-[#6b0606] leading-tight">
              <div className="sm:block md:flex items-center md:whitespace-nowrap">
                <span><strong>More</strong> Uptime.</span>
                <span className="md:ml-4">Less Downtime.</span>
              </div>
              <span>Bigger Impact.</span>
            </h1>
            
            <p className="mt-6 text-[#390303] text-lg">
              Your fleet should move like clockwork, efficient, cost-effective, and built for the future. Bhago’s electric fleet is green, smart, seamless, and always on the road. Because in last-mile logistics, every second counts.
            </p>
            
            <ul className="mt-8 space-y-2 text-[#390303] text-left md:text-left">
              <li className="flex items-start md:justify-start">
                <span className="text-[#ff4102] mr-2">•</span>
                <span>Industry-first <span className="font-semibold">16-hour fleet uptime</span> with fast battery swaps</span>
              </li>
              <li className="flex items-start md:justify-start">
                <span className="text-[#ff4102] mr-2">•</span>
                <span><span className="font-semibold">Lower operational costs</span> & higher efficiency</span>
              </li>
              <li className="flex items-start md:justify-start">
                <span className="text-[#ff4102] mr-2">•</span>
                <span><span className="font-semibold">Eco-friendly logistics</span> aligned with corporate ESG goals</span>
              </li>
              <li className="flex items-start md:justify-start">
                <span className="text-[#ff4102] mr-2">•</span>
                <span><span className="font-semibold">Seamless integration</span> with your supply chain</span>
              </li>
              <li className="flex items-start md:justify-start">
                <span className="text-[#ff4102] mr-2">•</span>
                <span><span className="font-semibold">Trusted</span> by leading e-commerce platforms</span>
              </li>
              <li className="flex items-start md:justify-start">
                <span className="text-[#ff4102] mr-2">•</span>
                <span><span className="font-semibold">Reliable & Safe</span> transportation with a trusted fleet</span>
              </li>
            </ul>
            
            <div className="mt-10">
              <h3 className="text-xl font-bold text-[#390303]">
                Partner with <strong>Bhago</strong> for a <br/>
                <span className="text-2xl"><strong>greener</strong> fleet.</span>
              </h3>
              
              <button
                onClick={() => setIsOpen(true)}
                className="mt-6 inline-block bg-[#ff4102] text-white px-8 py-3 rounded-full font-medium hover:bg-[#ff8332] transition-colors"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Image (Visible on md screens and above) */}
        <div className="absolute right-0 top-[65%] transform -translate-y-1/2 w-[50%] max-w-[1000px] h-auto z-10 hidden md:block">
          <Image
            src="/bhago-van.png"
            alt="Bhago EV with passenger"
            width={800} 
            height={450} 
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* Mobile Image (Visible on screens smaller than md) */}
        <div className="relative w-full mt-8 md:hidden">
          <Image
            src="/bhago-van.png"
            alt="Bhago EV with passenger"
            width={800} 
            height={450} 
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </main>
      
      <Footer />

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="max-w-3xl p-0 overflow-hidden bg-[#FFF3EF] border-none fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-[9999]">
          <div className="relative px-12 py-16 space-y-6">
            <button
              onClick={() => setIsOpen(false)}
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