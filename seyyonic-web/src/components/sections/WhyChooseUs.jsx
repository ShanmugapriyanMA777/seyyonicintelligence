import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2 } from 'lucide-react';

const features = [
  'Innovative AI Solutions',
  'Scalable Architecture',
  'High Performance',
  'Secure Systems',
  'Fast Development',
  'Future-Ready Technology'
];

const WhyChooseUs = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 relative overflow-hidden bg-black/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-6 text-white">
              Why Choose <span className="text-brand-gold">SEYYONIC</span>
            </h2>
            <p className="text-gray-400 font-poppins text-lg mb-8 leading-relaxed">
              We don't just build software; we engineer intelligence. Our approach combines deep technical expertise with visionary design to deliver solutions that put you years ahead of the competition.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="text-brand-orange w-6 h-6 flex-shrink-0" />
                  <span className="text-gray-200 font-orbitron font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-orange/20 to-brand-gold/20 rounded-full blur-3xl filter animate-pulse"></div>
            <div className="relative glass-card p-2 rounded-2xl">
              <img
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="Technology"
                className="rounded-xl w-full h-auto object-cover opacity-80"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
