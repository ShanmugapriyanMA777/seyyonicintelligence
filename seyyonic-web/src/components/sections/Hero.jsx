import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated Particles/Neural Network Background Placeholder */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-orange rounded-full mix-blend-screen filter blur-[128px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-gold rounded-full mix-blend-screen filter blur-[128px] animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          {/* Logo Placeholder */}
          <div className="mx-auto w-24 h-24 bg-gradient-to-br from-brand-orange to-brand-gold rounded-2xl flex items-center justify-center mb-8 shadow-[0_0_50px_rgba(255,107,0,0.3)] animate-float">
            <span className="text-4xl font-orbitron font-bold text-black">SI</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold font-orbitron mb-4 tracking-tight glow-text text-white">
            SEYYONIC INTELLIGENCE
          </h1>
          <p className="text-xl md:text-2xl font-poppins font-light text-gray-300 mb-2">
            Progress Through Endurance
          </p>
          <p className="text-lg md:text-xl font-poppins text-gray-400 max-w-2xl mx-auto">
            Transforming Ideas into Intelligent Solutions
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12"
        >
          <a href="#services" className="btn-primary w-full sm:w-auto">
            Explore Services
          </a>
          <a href="#contact" className="btn-secondary w-full sm:w-auto">
            Contact Us
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-xs text-gray-400 font-orbitron uppercase tracking-widest mb-2">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-brand-gold to-transparent"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
