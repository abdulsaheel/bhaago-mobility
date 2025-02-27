import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
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
                <span><strong>More </strong> Rides.</span>
                <span className="ml-4">Lower Costs.</span>
              </div>
              <span>Happier Cities.</span>
            </h1>
            
            <p className="mt-6 text-[#390303] text-lg">
              <span className="font-semibold">Bhago</span> makes urban last mile mobility <span className="font-semibold">effortless - scalable, electric</span>, and <span className="font-semibold">always available</span>. More 
              uptime means more rides, better margins, and a smoother experience for both drivers and passengers. 
              The city moves better with <span className="font-semibold">Bhago</span>.
            </p>
            
            <ul className="mt-8 space-y-2 text-[#390303]">
              <li className="flex items-start">
                <span className="text-[#ff4102] mr-2">•</span>
                <span>Dependable EV fleet with <span className="font-semibold">24/7 availability</span></span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff4102] mr-2">•</span>
                <span><span className="font-semibold">Lower cost-per-km</span> than traditional autos</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff4102] mr-2">•</span>
                <span>Optimized for <span className="font-semibold">ride-sharing</span> & urban commutes</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff4102] mr-2">•</span>
                <span><span className="font-semibold">Higher uptime</span> = More rides, better margins</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#ff4102] mr-2">•</span>
                <span>Supports government <span className="font-semibold">smart city initiatives</span></span>
              </li>
            </ul>
            
            <div className="mt-10">
              <h3 className="text-xl font-bold text-[#390303]">
                Get in touch to deploy<br />
                <span className="text-2xl">Bhago EVs</span> in your network.
              </h3>
              
              <Link href="#contact" className="mt-6 inline-block bg-[#ff4102] text-white px-8 py-3 rounded-full font-medium hover:bg-[#ff8332] transition-colors">
                Contact Us
              </Link>
            </div>
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