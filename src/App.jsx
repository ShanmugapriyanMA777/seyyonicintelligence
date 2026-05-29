import React from 'react';
import Navbar from './components/layout/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import TechStack from './components/sections/TechStack';
import Portfolio from './components/sections/Portfolio';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';
import CustomCursor from './components/layout/CustomCursor';
import Chatbot from './components/layout/Chatbot';
import ScrollProgress from './components/layout/ScrollProgress';

function App() {
  return (
    <div className="bg-black min-h-screen text-white relative">
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Services />
        <TechStack />
        <Portfolio />
        <WhyChooseUs />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <Chatbot />
    </div>
  );
}

export default App;
