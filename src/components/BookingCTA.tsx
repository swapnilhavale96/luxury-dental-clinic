"use client";

import { motion } from "framer-motion";
import { Calendar, MessageCircle } from "lucide-react";

export default function BookingCTA() {
  return (
    <section id="booking" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-navy-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-500/20 via-navy-900 to-navy-900" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full border border-primary-500/30 text-primary-400 text-sm font-medium tracking-wide mb-6 bg-primary-500/10">
            Begin Your Journey
          </span>
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-white mb-6 tracking-tight leading-tight">
            Ready for Your <br/> Signature Smile?
          </h2>
          <p className="text-lg md:text-xl text-white/70 font-sans mb-12 max-w-2xl mx-auto">
            Schedule a private consultation with our specialists to explore your custom treatment options in a relaxing, luxury environment.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto group relative inline-flex items-center justify-center gap-3 px-8 py-4 font-medium text-navy-900 bg-white rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]">
              <Calendar className="w-5 h-5" />
              <span>Reserve Your Smile Consultation</span>
            </button>
            
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 font-medium text-white bg-white/10 backdrop-blur-md rounded-full border border-white/20 transition-all hover:bg-white/20 hover:border-white/40">
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp Inquiry</span>
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
