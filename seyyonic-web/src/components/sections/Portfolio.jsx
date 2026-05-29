import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: 'AI Visual Assistant',
    category: 'Computer Vision',
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Smart Automation System',
    category: 'RPA',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'AI Chatbot',
    category: 'NLP',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Predictive Analytics Dashboard',
    category: 'Data Science',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Intelligent Mobile App',
    category: 'App Development',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  },
];

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="portfolio" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 text-white">
              Featured <span className="text-brand-orange">Projects</span>
            </h2>
            <p className="text-gray-400 font-poppins max-w-xl">
              Discover how we've helped businesses transform their operations with our cutting-edge AI solutions.
            </p>
          </div>
          <button className="btn-secondary whitespace-nowrap">View All Works</button>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer ${
                index === 3 ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div className="absolute inset-0 bg-brand-orange/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
              
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-700 ease-out filter brightness-50 group-hover:brightness-100"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-20"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 z-30 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-brand-gold font-orbitron text-sm mb-2 font-semibold tracking-wider">
                  {project.category}
                </p>
                <h3 className="text-2xl font-bold font-orbitron text-white group-hover:text-brand-orange transition-colors duration-300">
                  {project.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
