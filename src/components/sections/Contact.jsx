import React from "react";
import { Send } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black flex items-center justify-center px-6 py-20"
    >
      <div className="w-full max-w-5xl relative">

        {/* Main Card */}
        <div className="relative border border-white/10 rounded-[35px] bg-[#050505] p-10 md:p-14 overflow-hidden">

          {/* Orange Glow Circle */}
          <div className="absolute left-[-18px] top-[60px] w-[70px] h-[70px] border border-orange-500/40 rounded-full"></div>

          <div className="absolute left-[22px] top-[82px] w-5 h-5 bg-orange-500 rounded-full shadow-[0_0_30px_#ff7b00]"></div>

          {/* Heading */}
          <div className="mb-10">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
              Contact Us
            </h2>

            <p className="text-gray-400 text-lg">
              Let’s build something powerful together.
            </p>
          </div>

          {/* Form */}
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="space-y-8"
          >

            {/* Web3Forms Access Key */}
            <input
              type="hidden"
              name="access_key"
              value="5a9bb4b2-6a7f-4fe8-be1b-2956f8b511c4"
            />

            {/* Name */}
            <div>
              <label className="block text-gray-400 tracking-[3px] text-sm font-semibold mb-3">
                NAME
              </label>

              <input
                type="text"
                name="name"
                placeholder="John Doe"
                required
                className="w-full bg-[#080808] border border-white/10 rounded-2xl px-6 py-5 text-white text-lg outline-none focus:border-orange-500 focus:shadow-[0_0_20px_rgba(255,123,0,0.25)] transition-all duration-300"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-400 tracking-[3px] text-sm font-semibold mb-3">
                EMAIL
              </label>

              <input
                type="email"
                name="email"
                placeholder="john@example.com"
                required
                className="w-full bg-[#080808] border border-white/10 rounded-2xl px-6 py-5 text-white text-lg outline-none focus:border-orange-500 focus:shadow-[0_0_20px_rgba(255,123,0,0.25)] transition-all duration-300"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-gray-400 tracking-[3px] text-sm font-semibold mb-3">
                MESSAGE
              </label>

              <textarea
                name="message"
                placeholder="How can we help you?"
                rows="6"
                required
                className="w-full bg-[#080808] border border-white/10 rounded-2xl px-6 py-5 text-white text-lg outline-none resize-none focus:border-orange-500 focus:shadow-[0_0_20px_rgba(255,123,0,0.25)] transition-all duration-300"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-5 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-xl font-bold tracking-wide flex items-center justify-center gap-3 shadow-[0_0_35px_rgba(255,123,0,0.35)] hover:scale-[1.02] transition-all duration-300"
            >
              SEND MESSAGE
              <Send size={22} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;