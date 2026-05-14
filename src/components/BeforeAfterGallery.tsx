"use client";

import { motion } from "framer-motion";

export default function BeforeAfterGallery() {
  return (
    <section className="py-24 bg-navy-900 relative overflow-hidden text-white">
      {/* Subtle Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-500/10 via-navy-900 to-navy-900" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 tracking-tight text-white">
              The Art of Transformation
            </h2>
            <p className="text-lg text-white/70 font-sans">
              Witness the power of precision. Our gallery showcases real patient journeys to cinematic, flawless smiles.
            </p>
          </div>
          <button className="px-6 py-3 rounded-full border border-white/20 hover:bg-white hover:text-navy-900 transition-all text-sm font-medium">
            View Full Gallery
          </button>
        </div>

        {/* Minimalist Gallery Grid (Mockup for Slider/Gallery) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((item) => (
            <motion.div 
              key={item}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] rounded-3xl overflow-hidden group bg-white/5"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white/20 font-heading text-xl tracking-widest uppercase">Transformation {item}</span>
              </div>
              
              {/* Slider UI Mock */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                <div className="w-1 bg-white h-full relative cursor-ew-resize flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.5)]">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <div className="w-1 h-4 border-l border-r border-navy-900 mx-1"></div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-6 left-6 right-6 flex justify-between z-20">
                <span className="bg-navy-900/50 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-medium border border-white/10">Before</span>
                <span className="bg-navy-900/50 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-medium border border-white/10">After</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
