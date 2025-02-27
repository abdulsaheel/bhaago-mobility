import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import WinWin from "@/components/win-section";
import Features from "@/components/features";
import Gamechangers from "@/components/gamechangers";
import DriverTestimonials from "@/components/testimonials";
import Footer from "@/components/footer";
import './globals.css';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <WinWin />
      <Features />
      <Gamechangers />
      <DriverTestimonials />
      <Footer />
    </main>
  );
}