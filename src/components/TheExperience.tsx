"use client";

import { motion } from "framer-motion";

const steps = [
  { num: "01", title: "Consultation", desc: "A private session to understand your aesthetic goals." },
  { num: "02", title: "Digital Scan", desc: "High-precision 3D mapping of your dental architecture." },
  { num: "03", title: "Treatment Plan", desc: "AI-assisted design customized for your facial symmetry." },
  { num: "04", title: "Transformation", desc: "Pain-free execution in a relaxing, spa-like environment." }
];

export default function TheExperience() {
  return (
    <section id="experience" className="py-24 bg-surface-alt border-y border-silver-300/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 mb-6 tracking-tight">
            The Patient Experience
          </h2>
          <p className="text-lg text-navy-800/70 font-sans">
            A seamless journey from your first consultation to your final, confident smile. Designed for maximum comfort and clinical precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[1px] bg-silver-300/50 z-0" />

          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full glass bg-white flex items-center justify-center mb-6 shadow-sm border border-silver-300/30 group-hover:border-primary-500/50 group-hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-500">
                <span className="font-heading text-2xl text-navy-900 group-hover:text-primary-500 transition-colors font-light">
                  {step.num}
                </span>
              </div>
              <h3 className="text-xl font-heading font-semibold text-navy-900 mb-2">{step.title}</h3>
              <p className="text-navy-800/70 font-sans text-sm px-4">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
