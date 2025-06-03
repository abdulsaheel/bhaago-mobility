import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className = "" }) => {
  return (
    <footer className={`bg-[#390303] text-white py-12  ${className}`}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <p className="text-[#FF9966] text-sm mb-2">We'd Love To Hear From You</p>
            <h2 className="text-4xl font-bold mb-8">CONNECT WITH US</h2>

            {/* Addresses side by side */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-2">Gurugram Office</h3>
                <p className="text-sm mb-1">BHAGO MOBILITY SOLUTIONS PRIVATE LIMITED</p>
                <p className="text-sm mb-1">1604, Tower B, Emaar Digital Greens, Sector 61</p>
                <p className="text-sm">Gurugram, Haryana</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Bangalore Office</h3>
                <p className="text-sm mb-1">Bhago Mobility Solutions</p>
                <p className="text-sm mb-1">Brigade Summit Office, 12th Floor, Summit-B, B-9, ITPL Main Road</p>
                <p className="text-sm mb-1">Brigade Metropolis, Garudachar Palya</p>
                <p className="text-sm">Mahadevpura, Bangalore- 560048 Karnataka</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Get In Touch</h3>
            <p className="text-sm mb-1">+91-172-2609002, 2699003</p>
            <a 
              href="secretarial.corp@bhagomobility.com" 
              className="inline-block bg-[#FBE4CF] text-[#390303] text-sm px-3 py-1 rounded-md transition-colors"
            >
              secretarial.corp@bhagomobility.com
            </a>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <a href="/passenger-partners" className="block hover:text-[#FF9966] transition-colors">Passenger Partners</a>
                <a href="/cargo-partners" className="block hover:text-[#FF9966] transition-colors">Cargo Partners</a>
                <a href="/driver-partners" className="block hover:text-[#FF9966] transition-colors">Driver Partners</a>
              </div>
              <div className="space-y-4">
                <a href="/about" className="block hover:text-[#FF9966] transition-colors">About</a>
                <a href="/hiring" className="block hover:text-[#FF9966] transition-colors">Hiring Now</a>
              </div>
            </div>
          </div>
        </div>

        <hr className="border-[#6A1A00] mb-6" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <img 
              src="/bhaago-wm-white.png" 
              alt="Bhaago Mobility"
              className="h-7 mr-2"
            />
          </div>

          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#FF9966] transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a
              href="https://in.linkedin.com/company/bhago-mobility-solutions-pvt-ltd"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FF9966] transition-colors"
              aria-label="LinkedIn"
            >
              {/* LinkedIn icon */}
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24">
          <path fill="currentColor" d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.85-1.54 3.05 0 3.61 2.01 3.61 4.62v4.69z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
