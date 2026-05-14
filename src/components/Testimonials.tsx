"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Smile Design Patient",
    text: "The level of care and precision here is unmatched. It truly felt like a luxury spa rather than a dental clinic. My new smile is flawless."
  },
  {
    name: "Michael Chen",
    role: "Invisalign Patient",
    text: "From the 3D scanning to the final result, the technology they use is incredible. The team made the entire process seamless and comfortable."
  },
  {
    name: "Emma Thompson",
    role: "Veneers Patient",
    text: "I was always self-conscious about my smile. The team at Luxury Smile Studio gave me the confidence I've always wanted with absolute perfection."
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-surface-alt border-t border-silver-300/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 mb-6 tracking-tight">
            Patient Stories
          </h2>
          <p className="text-lg text-navy-800/70 font-sans">
            Don't just take our word for it. Hear from those who have experienced the future of cosmetic dentistry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-8 rounded-3xl glass bg-white/60 border border-white hover:border-primary-500/30 transition-all duration-300 hover:shadow-xl"
            >
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-primary-500 text-primary-500" />
                ))}
              </div>
              <p className="text-navy-800/80 font-sans text-base leading-relaxed mb-8">
                "{item.text}"
              </p>
              <div>
                <h4 className="font-heading font-semibold text-navy-900">{item.name}</h4>
                <p className="text-xs text-navy-800/60 font-sans uppercase tracking-wider mt-1">{item.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
