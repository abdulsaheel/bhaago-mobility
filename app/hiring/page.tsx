import  Navbar  from "@/components/navbar"
import AutoScrollingCarousel from "@/components/AutoScrollingCarousel"
import CoreValuesSection from "@/components/CoreValuesSection"
import Image from "next/image"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-[#FEE1B2] flex flex-col">

      <Navbar/>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#FEE1B2]">
  {/* SVG Background - Positioned Higher */}
  <div 
    className="absolute inset-0 z-10 opacity-40 bg-no-repeat bg-center bg-cover"
    style={{ 
      backgroundImage: "url('/hiring-bg.svg')", 
      top: "-100px"  // Moves the SVG up 
    }} 
  />


  <div className="container mx-auto px-4 py-20 md:py-28 relative z-20">
    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 mb-12 md:mb-0">
        <h1 className="text-6xl md:text-7xl font-bold text-[#390303]">
          Drive the <span className="text-[#FF4102]">Change.</span>
        </h1>
        <h1 className="text-6xl md:text-7xl font-bold text-[#390303] mt-4">
          Build the <span className="text-[#FF4102]">Future.</span>
        </h1>

        <div className="mt-10 text-[#390303] max-w-xl">
          <p className="text-xl">
            At <span className="font-bold">Bhago</span>, we move fast, because the future won't wait. We're not
            just building EV fleets; we're creating a <span className="font-bold">movement</span> powered by{" "}
            <span className="font-bold">innovation, efficiency, and people</span> who think on their feet.
          </p>
          <p className="text-xl mt-6">
            Whether you're{" "}
            <span className="font-bold">fine-tuning operations, solving real-world mobility challenges</span>, or
            working on tech that keeps our wheels turning, this is a place where{" "}
            <span className="font-bold">ideas matter, ownership is real</span>, and every role drives{" "}
            <span className="font-bold">impact</span>.
          </p>
        </div>
      </div>
      <div className="md:w-1/2 flex justify-center">
        <Image
          src="/rickshaw.png"
          alt="Drive the Change Build the Future"
          width={800}
          height={800}
        />
      </div>
    </div>
  </div>
</section>


      {/* Create a single continuous flow with negative margins to force components together */}
      <div className="flex flex-col" style={{ marginBottom: "-8px" }}>
        {/* AutoScrollingCarousel with custom styles */}
        <div style={{ marginBottom: "-1px" }}>
          <AutoScrollingCarousel
            images={[
              "/carousel_1.png",
              "/carousel_2.png",
              "/carousel_3.png",
              "/carousel_4.png",
              "/carousel_5.png",
            ]}
          />
        </div>
        
        {/* Core Values Section with negative margin */}
        <div style={{ marginTop: "-1px" }}>
          <CoreValuesSection />
        </div>
      </div>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative" style={{ marginTop: "-8px" }}>
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <h2 className="text-3xl md:text-4xl text-[#390303] mb-8 md:mb-0">
              Ready to <span className="text-[#390303] font-bold">build</span> something that moves
              <br />
              the world? <span className="text-[#390303] font-bold">Join us.</span>
            </h2>

            <a
              href="#"
              className="bg-[#FF4102] hover:bg-[#d04a25] text-white font-bold py-4 px-8 rounded-full text-xl transition-colors duration-300"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>
      <Footer/>
    </main>
  )
}