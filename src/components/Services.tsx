"use client";

import { motion } from "framer-motion";
import { Sparkles, ScanFace, Layers, RefreshCcw, SmilePlus, Drill, HeartPulse } from "lucide-react";

const services = [
  {
    icon: ScanFace,
    title: "Smile Design",
    desc: "Digital 3D simulation for your perfect smile architecture."
  },
  {
    icon: Layers,
    title: "Veneers",
    desc: "Ultra-thin porcelain layers for flawless aesthetics."
  },
  {
    icon: RefreshCcw,
    title: "Invisalign",
    desc: "Crystal-clear aligners for discreet orthodontics."
  },
  {
    icon: Sparkles,
    title: "Teeth Whitening",
    desc: "Advanced laser whitening for a radiant glow."
  },
  {
    icon: Drill,
    title: "Dental Implants",
    desc: "Permanent, natural-looking tooth replacements."
  },
  {
    icon: HeartPulse,
    title: "Full Mouth Rehab",
    desc: "Comprehensive restoration of function and beauty."
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-surface relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-100/50 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 mb-6 tracking-tight">
            Signature Services
          </h2>
          <p className="text-lg text-navy-800/70 font-sans">
            Tailored cosmetic treatments designed to elevate your smile using the most advanced techniques in modern dentistry.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group relative p-8 rounded-3xl glass border border-silver-300/30 hover:border-primary-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)] bg-white/50 overflow-hidden"
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-surface-alt flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary-500/10 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-navy-900 group-hover:text-primary-500 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-navy-900 mb-3 group-hover:text-primary-500 transition-colors">
                  {service.title}
                </h3>
                <p className="text-navy-800/70 font-sans text-sm leading-relaxed">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
