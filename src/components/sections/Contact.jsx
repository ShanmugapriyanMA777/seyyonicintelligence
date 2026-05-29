import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Globe, Briefcase, Send } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black/80">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-orbitron mb-4 text-white">
            Initiate <span className="text-brand-gold">Contact</span>
          </h2> https://formspree.io/f/mykvorgk
          <p className="text-gray-400 font-poppins">Ready to transform your business? Let's build the future together.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="glass-card p-6 flex items-center gap-6 group hover:border-brand-orange/50 transition-colors">
              <div className="w-14 h-14 bg-brand-orange/10 rounded-full flex items-center justify-center group-hover:bg-brand-orange/20 transition-colors">
                <Mail className="text-brand-orange w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-orbitron font-semibold mb-1">Email Us</h4>
                <p className="text-gray-400 font-poppins">contact@seyyonic.ai</p>
              </div>
            </div>

            <div className="glass-card p-6 flex items-center gap-6 group hover:border-brand-gold/50 transition-colors">
              <div className="w-14 h-14 bg-brand-gold/10 rounded-full flex items-center justify-center group-hover:bg-brand-gold/20 transition-colors">
                <MapPin className="text-brand-gold w-6 h-6" />
              </div>
              <div>
                <h4 className="text-white font-orbitron font-semibold mb-1">Visit Us</h4>
                <p className="text-gray-400 font-poppins">Chennai, Sholinganallur</p>
              </div>
            </div>

            <div className="flex gap-4 pt-4">
              <a href="#" className="w-12 h-12 glass-card flex items-center justify-center text-gray-400 hover:text-brand-orange hover:border-brand-orange/50 transition-all">
                <Briefcase className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 glass-card flex items-center justify-center text-gray-400 hover:text-brand-gold hover:border-brand-gold/50 transition-all">
                <Globe className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <form className="glass-card p-8 space-y-6">
              <div>
                <label className="block text-gray-400 font-orbitron text-sm mb-2 uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white font-poppins focus:outline-none focus:border-brand-orange/50 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-gray-400 font-orbitron text-sm mb-2 uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white font-poppins focus:outline-none focus:border-brand-gold/50 transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-400 font-orbitron text-sm mb-2 uppercase tracking-wider">Message</label>
                <textarea
                  rows="4"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white font-poppins focus:outline-none focus:border-brand-orange/50 transition-colors resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button type="button" className="btn-primary w-full flex items-center justify-center gap-2">
                <span>Send Message</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
