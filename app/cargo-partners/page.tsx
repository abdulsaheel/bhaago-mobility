import Image from "next/image";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import '../globals.css';
import ContactUs from "@/components/ContactUsButton";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <main className="flex-grow bg-[#fee1b2] px-4 sm:px-6 md:px-12 py-12 pt-24 md:pt-32 relative overflow-hidden">
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
              <li className="flex items-start justify-center md:justify-start">
                <span className="text-[#ff4102] mr-2">•</span>
                <span>Industry-first <span className="font-semibold">16-hour fleet uptime</span> with fast battery swaps</span>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <span className="text-[#ff4102] mr-2">•</span>
                <span><span className="font-semibold">Lower operational costs</span> & higher efficiency</span>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <span className="text-[#ff4102] mr-2">•</span>
                <span><span className="font-semibold">Eco-friendly logistics</span> aligned with corporate ESG goals</span>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <span className="text-[#ff4102] mr-2">•</span>
                <span><span className="font-semibold">Seamless integration</span> with your supply chain</span>
              </li>
              <li className="flex items-start justify-center md:justify-start">
                <span className="text-[#ff4102] mr-2">•</span>
                <span><span className="font-semibold">Trusted</span> by leading e-commerce platforms</span>
              </li>
            </ul>

            <div className="mt-10">
              <h3 className="text-xl font-bold text-[#390303]">
                Partner with <strong>Bhago</strong> for a <br/>
                <span className="text-2xl"><strong>greener</strong> fleet.</span>
              </h3>
            </div>
            
            <ContactUs className="mt-6" />
          </div>
        </div>

        {/* Image */}
        <div className="w-full flex justify-center md:absolute md:right-0 md:top-1/2 md:transform md:-translate-y-1/2 md:w-[40%] md:h-[80%]">
          <Image
            src="/bhago-van.png"
            alt="Bhago EV with passenger"
            width={400} 
            height={300} 
            className="object-contain sm:scale-100 md:scale-125"
            priority
          />
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
