"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-24">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-100/40 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex flex-col gap-6"
        >
          <div className="inline-block px-4 py-1.5 rounded-full glass w-max border border-primary-500/20 text-primary-500 text-sm font-medium tracking-wide">
            Premium Cosmetic Dentistry
          </div>
          
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-navy-900 leading-[1.1] tracking-tight">
            Luxury Dentistry. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-navy-900 to-primary-500">
              Designed Around Your Smile.
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-navy-800/70 font-sans max-w-lg mt-4">
            Precision. Comfort. Confidence. Experience the future of dental aesthetics in a calm, modern environment.
          </p>

          <div className="mt-8 flex items-center gap-4">
            <Link 
              href="#booking"
              className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-white bg-navy-900 rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]"
            >
              <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-white"></span>
              <span className="relative">Reserve Your Smile Consultation</span>
            </Link>
          </div>
        </motion.div>

        {/* Cinematic Image Sequence / Showcase */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.4 }}
          className="relative h-[600px] w-full rounded-[2rem] overflow-hidden glass shadow-2xl"
        >
          {/* We will use the dramatic hero-end image as the primary visual */}
          <Image 
            src="/hero-end.png"
            alt="Futuristic Digital Dental Scanner"
            fill
            className="object-cover object-center"
            priority
          />
          
          {/* Glass Overlay Effects */}
          <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/20 to-transparent mix-blend-overlay"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-background to-transparent"></div>
          
          {/* Floating UI Element */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="absolute bottom-8 left-8 glass px-6 py-4 rounded-2xl border border-white/40 shadow-xl"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary-500/20 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-primary-500 animate-pulse"></div>
              </div>
              <div>
                <p className="text-xs text-navy-900/60 font-semibold uppercase tracking-wider">AI Analysis</p>
                <p className="text-sm text-navy-900 font-medium">3D Smile Simulation Active</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
