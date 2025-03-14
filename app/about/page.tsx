"use client"
import Navbar from "@/components/navbar";
import AboutHero from "@/components/AboutHero";
import BhagoMobilityBanner from "@/components/BhagoMobilityBanner";
import LeadershipTeam from "@/components/Leadership";
import VisionSection from "@/components/Vision";
import Footer from "@/components/footer";
import '@/app/globals.css'
import Timeline  from "@/components/about_timeline";


export default function About() {
  return (
    
    <section >
      <div className="overflow-x-hidden" >
      {/* Navbar */}
      <Navbar />
        
        {/* Hero Section */}  
        <AboutHero />

        {/* Bhago Mobility Banner */}
        <BhagoMobilityBanner />

        {/* Bhago Mobility Timeline */}
        <Timeline />
        {/* Leadership Team */}
        <LeadershipTeam />

        {/* Vision Section */}
        <VisionSection />

          {/* Footer */}  
          <Footer />
          </div>
    </section>
  );
}