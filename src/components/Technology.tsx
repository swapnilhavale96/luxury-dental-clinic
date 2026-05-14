"use client";

import { motion } from "framer-motion";
import { Cpu, Microscope, Video, Zap } from "lucide-react";

const tech = [
  { icon: Video, title: "3D Digital Scanning", desc: "Eliminates messy impressions with highly accurate digital models." },
  { icon: Cpu, title: "AI Smile Simulation", desc: "Preview your exact results before treatment begins." },
  { icon: Zap, title: "Laser Dentistry", desc: "Minimally invasive, fast-healing procedures." },
  { icon: Microscope, title: "Microscopic Precision", desc: "Enhanced magnification for flawless detail." }
];

export default function Technology() {
  return (
    <section id="technology" className="py-24 bg-surface relative overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-500/5 rounded-full blur-[100px] pointer-events-none translate-y-1/3 -translate-x-1/3" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-navy-900 mb-6 tracking-tight">
              Driven by <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-900 to-primary-500">Innovation</span>
            </h2>
            <p className="text-lg text-navy-800/70 font-sans mb-10">
              We invest in world-class dental technology to ensure your treatments are faster, safer, and remarkably precise.
            </p>
            
            <div className="space-y-6">
              {tech.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start group">
                  <div className="w-12 h-12 shrink-0 rounded-2xl glass bg-surface-alt border border-silver-300/30 flex items-center justify-center group-hover:bg-primary-500/10 group-hover:border-primary-500/30 transition-all">
                    <item.icon className="w-5 h-5 text-navy-900 group-hover:text-primary-500 transition-colors" />
                  </div>
                  <div>
                    <h4 className="font-heading font-semibold text-navy-900 mb-1">{item.title}</h4>
                    <p className="text-sm text-navy-800/70 font-sans">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Minimalist Tech Visual Mockup */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] w-full rounded-3xl glass bg-gradient-to-br from-surface-alt to-white border border-silver-300/30 shadow-2xl overflow-hidden flex items-center justify-center"
          >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#CBD5E1_1px,transparent_1px),linear-gradient(to_bottom,#CBD5E1_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />
            
            <div className="relative z-10 w-64 h-64 border-[0.5px] border-primary-500/30 rounded-full flex items-center justify-center before:absolute before:inset-0 before:rounded-full before:border-[0.5px] before:border-primary-500/30 before:scale-[1.5] after:absolute after:inset-0 after:rounded-full after:border-[0.5px] after:border-primary-500/30 after:scale-[2]">
              <div className="w-32 h-32 rounded-full bg-primary-500/10 backdrop-blur-md border border-primary-500/20 flex items-center justify-center animate-[pulse_4s_ease-in-out_infinite]">
                 <span className="text-primary-500 font-heading text-sm font-medium tracking-widest uppercase">Scanner Active</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
