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
        opacity="0.66"
      />
      
      {/* Dashed Peach Line (Lower Opacity) */}
      <path
        d="M0 250H800C840 250 870 280 870 320V750"
        stroke="#FFCBA3"
        strokeWidth="10"
        strokeLinecap="round"
        strokeDasharray="30 20"
        opacity="0.66"
      />
    </svg>
    
</div>
                       <svg 
          className="absolute bottom-0 left-0 w-full h-auto z-0" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          style={{ minHeight: "320px" }}
        >
          <path 
            fill="#feb478" 
            fillOpacity="0.15"
            d="M0,192L60,186.7C120,181,240,171,360,181.3C480,192,600,224,720,224C840,224,960,192,1080,197.3C1200,203,1320,245,1380,266.7L1440,288L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
          <path 
            fill="#feb478" 
            fillOpacity="0.25"
            d="M0,224L60,208C120,192,240,160,360,170.7C480,181,600,235,720,250.7C840,267,960,245,1080,218.7C1200,192,1320,160,1380,144L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg> 
        
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
              <h3 className="text-xl font-bold text-[#390303]">
                Apply now & start driving
              </h3>
            </div>
            <ContactUs />
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
