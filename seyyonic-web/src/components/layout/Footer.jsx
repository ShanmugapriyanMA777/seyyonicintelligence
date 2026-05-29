import React from 'react';
import { BrainCircuit } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-black pt-16 pb-8 overflow-hidden">
      {/* Animated glow line at top */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-orange to-transparent opacity-50 animate-glow-pulse"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="flex items-center gap-2 group">
            <BrainCircuit className="w-8 h-8 text-brand-orange" />
            <span className="font-orbitron font-bold text-xl tracking-wider text-white">
              SEYYONIC
            </span>
          </div>
          
          <div className="flex gap-8">
            <a href="#about" className="text-gray-400 font-poppins text-sm hover:text-brand-gold transition-colors">About</a>
            <a href="#services" className="text-gray-400 font-poppins text-sm hover:text-brand-orange transition-colors">Services</a>
            <a href="#portfolio" className="text-gray-400 font-poppins text-sm hover:text-brand-gold transition-colors">Portfolio</a>
            <a href="#contact" className="text-gray-400 font-poppins text-sm hover:text-brand-orange transition-colors">Contact</a>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 font-poppins text-sm">
            &copy; {new Date().getFullYear()} SEYYONIC INTELLIGENCE. All rights reserved.
          </p>
          <p className="text-gray-500 font-poppins text-sm italic">
            "Progress Through Endurance"
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
