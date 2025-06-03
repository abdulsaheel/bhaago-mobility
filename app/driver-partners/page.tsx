import Image from "next/image";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import '../globals.css'


export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <main className="flex-grow bg-[#fee1b2] px-4 sm:px-6 md:px-12 py-12 pt-24 md:pt-32 relative overflow-hidden">
                       {/* Curved Path Background */}
                       <div className="absolute inset-0 w-full h-full">       <svg
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
      viewBox="0 0 1440 800"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Thick White Path (Lower Opacity) */}
      <path
        d="M0 250H800C840 250 870 280 870 320V750"
        stroke="white"
        strokeWidth="80"
        strokeLinecap="round"
        opacity="0.4"
      />
      
      {/* Dashed Peach Line (Lower Opacity) */}
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
          {/* Text Content */}
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
            </ul>

            <div className="mt-10">
              <a
              href="mailto:Join_bhago@bhagomobility.com"
              className="inline-block"
              >
              <h3 className="text-xl font-bold text-[#390303] hover:underline">
              Apply now & start driving
              </h3>
              </a>
            </div>
            <a
              href="mailto:Join_bhago@bhagomobility.com"
              className="relative inline-flex items-center justify-center px-8 py-3 m-2 text-xl font-bold text-white bg-[#FF5722] rounded-full transition-all duration-200 hover:bg-[#FF7043]"
            >
              Contact Us
            </a>
            </div>
          
          {/* Image */}
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
    </div>
  );
}
