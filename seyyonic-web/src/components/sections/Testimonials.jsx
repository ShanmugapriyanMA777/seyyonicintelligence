import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    text: "SEYYONIC transformed our data pipeline completely. Their AI solution increased our processing efficiency by 300%. Absolutely phenomenal work.",
    name: "Sarah Chen",
    role: "CTO, TechFlow",
    image: "https://i.pravatar.cc/150?img=47"
  },
  {
    text: "The predictive analytics dashboard they built for us is a game-changer. We can now anticipate market trends with incredible accuracy.",
    name: "Marcus Rodriguez",
    role: "Operations Director, GlobalLogistics",
    image: "https://i.pravatar.cc/150?img=11"
  },
  {
    text: "Working with SEYYONIC feels like having a glimpse into the future. Their NLP chatbot handles 80% of our customer queries flawlessly.",
    name: "Elena Rostova",
    role: "Head of Customer Success, RetailPro",
    image: "https://i.pravatar.cc/150?img=5"
  }
];

const Testimonials = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 text-white">
            Client <span className="text-brand-orange">Success</span>
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="glass-card p-8 relative group hover:border-brand-orange/50 transition-colors duration-300"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5 group-hover:text-brand-orange/20 transition-colors" />
              
              <p className="text-gray-300 font-poppins mb-8 relative z-10 italic">
                "{testimonial.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-brand-gold/30">
                  <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="text-white font-orbitron font-semibold">{testimonial.name}</h4>
                  <p className="text-brand-gold text-sm font-poppins">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
