import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const technologies = [
  { name: 'Python', color: 'from-blue-500 to-yellow-500' },
  { name: 'TensorFlow', color: 'from-orange-500 to-red-500' },
  { name: 'React', color: 'from-cyan-400 to-blue-500' },
  { name: 'Node.js', color: 'from-green-500 to-emerald-600' },
  { name: 'OpenAI APIs', color: 'from-teal-400 to-green-500' },
  { name: 'MongoDB', color: 'from-green-600 to-green-800' },
  { name: 'Firebase', color: 'from-yellow-400 to-orange-500' },
  { name: 'Docker', color: 'from-blue-400 to-blue-600' },
];

const TechStack = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 relative overflow-hidden border-y border-white/5">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-brand-orange/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-orbitron mb-4 text-white">
            Powered By Modern <span className="text-brand-gold">Tech</span>
          </h2>
        </div>

        <motion.div
          ref={ref}
          className="flex flex-wrap justify-center gap-4 md:gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card px-6 py-4 flex items-center justify-center group hover:border-brand-gold/50 cursor-default"
            >
              <div className={`w-3 h-3 rounded-full mr-3 bg-gradient-to-r ${tech.color} shadow-[0_0_10px_currentColor] group-hover:animate-pulse`}></div>
              <span className="font-orbitron font-medium text-gray-300 group-hover:text-white transition-colors">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
