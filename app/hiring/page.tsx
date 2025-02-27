import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const Home: React.FC = () => {
  return (
    <div className="bg-white">
<Navbar />

      {/* HERO SECTION */}
      <section className="bg-[#FBE4CF] py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-col-reverse md:flex-row items-center">
          {/* Left Text */}
          <div className="md:w-1/2 mt-8 md:mt-0">
            <h1 className="text-4xl md:text-5xl font-bold text-[#390303] mb-4 leading-tight">
              Drive the <span className="text-[#FF9966]">Change.</span> <br />
              Build the <span className="text-[#FF9966]">Future.</span>
            </h1>
            <p className="text-[#6A1A00] mb-6 text-sm md:text-base leading-relaxed">
              At Bhago, we move fast, because the future doesn’t wait. We’re building 
              robust solutions that will move 50 million people daily, cargo across 
              the nation, and every day, bring a solution that’s a little greener, 
              a little better.
            </p>
            <a
              href="#apply"
              className="inline-block bg-[#FF9966] text-[#390303] font-semibold px-6 py-3 rounded-md transition-colors hover:bg-[#f47b3e]"
            >
              Apply Now
            </a>
          </div>

          {/* Right Image */}
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src="/rickshaw.png"
              alt="Bhago Rickshaw"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* CORE VALUES SECTION */}
      <section className="relative py-12 md:py-16 bg-white">
      <div 
            className="absolute inset-0 bg-[url('/landing top spin flower.svg')] 
                       bg-no-repeat bg-center opacity-10 pointer-events-none" 
          />
        <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#390303] text-center mb-12">
            Core Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Value 1 */}
            <div className="bg-[#FBE4CF] rounded-md p-6">
              <h3 className="text-xl font-semibold text-[#390303] mb-2">
                Move with Purpose
              </h3>
              <p className="text-[#6A1A00] text-sm md:text-base">
                We’re building robust solutions that will move 50 million people 
                daily, connecting them to work, opportunities, and each other.
              </p>
            </div>

            {/* Value 2 */}
            <div className="bg-[#FBE4CF] rounded-md p-6">
              <h3 className="text-xl font-semibold text-[#390303] mb-2">
                Built to Last
              </h3>
              <p className="text-[#6A1A00] text-sm md:text-base">
                One platform for cargo, vehicles, and supply chain solutions — 
                reliable, scalable, and here to stay.
              </p>
            </div>

            {/* Value 3 */}
            <div className="bg-[#FBE4CF] rounded-md p-6">
              <h3 className="text-xl font-semibold text-[#390303] mb-2">
                Greener is the Goal
              </h3>
              <p className="text-[#6A1A00] text-sm md:text-base">
                Cleaner energy, zero emissions, and a positive impact on our planet. 
                It’s only possible together.
              </p>
            </div>

            {/* Value 4 */}
            <div className="bg-[#FBE4CF] rounded-md p-6">
              <h3 className="text-xl font-semibold text-[#390303] mb-2">
                Win Together
              </h3>
              <p className="text-[#6A1A00] text-sm md:text-base">
                We grow with our riders, partners, and people. We share success and 
                lift each other up.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / JOIN US SECTION */}
      <section className="bg-[#FBE4CF] py-12 md:py-16 text-center">
        <div className="max-w-6xl mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#390303] mb-6">
            Ready to build something that moves the world? Join us.
          </h2>
          <a
            id="apply"
            href="#"
            className="inline-block bg-[#FF9966] text-[#390303] font-semibold px-6 py-3 rounded-md transition-colors hover:bg-[#f47b3e]"
          >
            Apply Now
          </a>
        </div>
      </section>

<Footer />
    </div>
  );
};

export default Home;
