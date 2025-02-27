import Image from "next/image";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import ContactUs from "@/components/ContactUsButton";
import '../globals.css'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <main className="flex-grow bg-[#fee1b2] px-6 md:px-12 py-12 pt-24 md:pt-32 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="z-10">
            <h1 className="text-4xl md:text-6xl font-bold text-[#6b0606] leading-tight">
              <div className="flex items-center whitespace-nowrap">
                <span>Your <strong>EV</strong> </span>

                <span className="ml-4">Your Earnings.</span>
              </div>
              <span>Your Future.</span>
            </h1>
            
            <p className="mt-6 text-[#390303] text-lg">
              <span className="font-semibold">Bhago</span> makes urban last mile mobility <span className="font-semibold">effortless - scalable, electric</span>, and <span className="font-semibold">always available</span>. More 
              uptime means more rides, better margins, and a smoother experience for both drivers and passengers. 
              The city moves better with <span className="font-semibold">Bhago</span>.
            </p>
            
            <ul className="mt-8 space-y-2 text-[#390303]">
  <li className="flex items-start">
    <span className="text-[#ff4102] mr-2">•</span>
    <span>Get started with a <span className="font-semibold">minimal upfront fee</span></span>
  </li>
  <li className="flex items-start">
    <span className="text-[#ff4102] mr-2">•</span>
    <span><span className="font-semibold">Own your EV</span> within 3 years</span>
  </li>
  <li className="flex items-start">
    <span className="text-[#ff4102] mr-2">•</span>
    <span>Earn <span className="font-semibold">₹30,000 per month</span> or more</span>
  </li>
  <li className="flex items-start">
    <span className="text-[#ff4102] mr-2">•</span>
    <span>Drive full-time or <span className="font-semibold">sub-lease</span> for passive income</span>
  </li>
  <li className="flex items-start">
    <span className="text-[#ff4102] mr-2">•</span>
    <span><span className="font-semibold">Battery swapping</span> = No downtime = More rides = Higher earnings</span>
  </li>
</ul>

            
            <div className="mt-10">
              <h3 className="text-xl font-bold text-[#390303]">
              Apply now & start driving
              </h3>
            </div>
          <ContactUs />

          </div>
          
          {/* Image */}
            <div className="relative w-full h-[400px] md:h-[500px]">
              <Image
                src="/passenger-partner.png"
                alt="Bhago EV with passenger"
                fill
                className="object-contain scale-125"
                priority
              />
            </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}