import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Users, Cpu, Lightbulb } from 'lucide-react';

const stats = [
  { id: 1, name: 'AI Projects', value: '50+', icon: Brain },
  { id: 2, name: 'Clients', value: '100+', icon: Users },
  { id: 3, name: 'Technologies', value: '25+', icon: Cpu },
  { id: 4, name: 'Innovations', value: '10+', icon: Lightbulb },
];

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-6 text-white">
            Pioneering the <span className="text-brand-gold">Future</span>
          </h2>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg font-poppins leading-relaxed">
            SEYYONIC INTELLIGENCE is an innovative AI and technology startup dedicated to transforming complex challenges into elegant, intelligent solutions. Our vision is to bridge the gap between human potential and artificial intelligence, driving progress through endurance and cutting-edge innovation.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-8 text-center group hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="mx-auto w-16 h-16 bg-brand-orange/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-orange/20 transition-colors">
                <stat.icon className="w-8 h-8 text-brand-gold group-hover:text-brand-orange transition-colors" />
              </div>
              <div className="text-4xl font-bold font-orbitron text-white mb-2 glow-text">
                {stat.value}
              </div>
              <div className="text-sm font-poppins text-gray-400 uppercase tracking-widest">
                {stat.name}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
