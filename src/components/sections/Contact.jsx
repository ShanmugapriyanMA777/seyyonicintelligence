import React from "react";
import {
  Send,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-black py-24 px-6"
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-start">

        {/* LEFT SIDE */}
        <div className="space-y-10">

          <div>
            <p className="text-orange-500 uppercase tracking-[4px] mb-4">
              Contact
            </p>

            <h2 className="text-5xl font-bold text-white leading-tight mb-6">
              Let’s Build The Future Together
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              Seyyonic Intelligence creates AI-powered solutions,
              automation systems, and next-generation digital products
              for businesses worldwide.
            </p>
          </div>

          {/* Contact Details */}
          <div className="space-y-6">

            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                <Phone className="text-orange-500" />
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Contact us
                </p>

                <h4 className="text-white text-lg font-semibold">
                  8973451246
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                <Mail className="text-orange-500" />
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Email
                </p>

                <h4 className="text-white text-lg font-semibold">
                  contact@seyyonic.com
                </h4>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div className="w-14 h-14 rounded-full bg-orange-500/10 flex items-center justify-center border border-orange-500/20">
                <MapPin className="text-orange-500" />
              </div>

              <div>
                <p className="text-gray-500 text-sm">
                  Visit Us
                </p>

                <h4 className="text-white text-lg font-semibold">
                  Chennai, Tamil Nadu, India
                </h4>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div className="relative">

          {/* Glow Circle */}
          <div className="absolute -left-6 top-10 w-20 h-20 border border-orange-500/30 rounded-full"></div>

          <div className="absolute left-2 top-[58px] w-5 h-5 bg-orange-500 rounded-full shadow-[0_0_25px_#ff7b00]"></div>

          <div className="border border-white/10 rounded-[32px] bg-[#050505] p-8 md:p-10">

            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-6"
            >

              {/* Web3Forms Access Key */}
              <input
                type="hidden"
                name="access_key"
                value="5a9bb4b2-6a7f-4fe8-be1b-2956f8b511c4"
              />

              {/* Subject */}
              <input
                type="hidden"
                name="subject"
                value="New Client Inquiry - Seyyonic Intelligence"
              />

              {/* Name */}
              <div>
                <label className="block text-gray-400 tracking-[3px] text-sm mb-3">
                  NAME
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="w-full bg-[#080808] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-orange-500 transition-all"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-gray-400 tracking-[3px] text-sm mb-3">
                  EMAIL
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="john@example.com"
                  required
                  className="w-full bg-[#080808] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none focus:border-orange-500 transition-all"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-gray-400 tracking-[3px] text-sm mb-3">
                  MESSAGE
                </label>

                <textarea
                  name="message"
                  rows="5"
                  placeholder="How can we help you?"
                  required
                  className="w-full bg-[#080808] border border-white/10 rounded-2xl px-5 py-4 text-white outline-none resize-none focus:border-orange-500 transition-all"
                ></textarea>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="w-full py-4 rounded-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white text-lg font-bold flex items-center justify-center gap-3 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_30px_rgba(255,123,0,0.3)]"
              >
                SEND MESSAGE
                <Send size={20} />
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;