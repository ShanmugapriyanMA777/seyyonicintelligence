import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Database, Smartphone, Eye, MessageSquare, Settings } from 'lucide-react';

const services = [
  {
    title: 'AI Development',
    description: 'Custom artificial intelligence models tailored to solve your specific business challenges and optimize workflows.',
    icon: Brain,
  },
  {
    title: 'Data Science',
    description: 'Advanced analytics and machine learning to extract actionable insights from your complex datasets.',
    icon: Database,
  },
  {
    title: 'App Development',
    description: 'Intelligent, scalable mobile and web applications with seamless AI integration and modern architecture.',
    icon: Smartphone,
  },
  {
    title: 'Computer Vision',
    description: 'State-of-the-art visual recognition systems for automated quality control, security, and analysis.',
    icon: Eye,
  },
  {
    title: 'NLP Solutions',
    description: 'Sophisticated natural language processing for chatbots, sentiment analysis, and automated text generation.',
    icon: MessageSquare,
  },
  {
    title: 'Automation Tools',
    description: 'Smart RPA and workflow automation systems to eliminate repetitive tasks and increase efficiency.',
    icon: Settings,
  },
];

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="services" className="py-24 bg-black relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-6 text-white">
            Our <span className="text-brand-orange">Services</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-brand-orange to-brand-gold mx-auto rounded-full"></div>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-8 group hover:bg-white/[0.02] transition-colors duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-brand-orange/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <service.icon className="w-12 h-12 text-brand-gold mb-6 group-hover:text-brand-orange transition-colors duration-300 relative z-10" />
              
              <h3 className="text-2xl font-orbitron font-bold text-white mb-4 relative z-10 group-hover:glow-text transition-all duration-300">
                {service.title}
              </h3>
              
              <p className="text-gray-400 font-poppins text-sm leading-relaxed relative z-10">
                {service.description}
              </p>

              <div className="mt-8 flex items-center gap-2 text-brand-gold text-sm font-orbitron font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300 relative z-10 cursor-pointer hover:text-brand-orange">
                LEARN MORE <span className="text-lg">→</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
