"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed w-full z-50 top-0 transition-all duration-300 glass bg-white/70 border-b border-white/20"
    >
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 z-50">
          <span className="font-heading font-semibold text-2xl tracking-tight text-navy-900">
            Luxury Smile Studio
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 font-medium text-sm text-navy-800">
          <Link href="#services" className="hover:text-primary-500 transition-colors">Services</Link>
          <Link href="#experience" className="hover:text-primary-500 transition-colors">Experience</Link>
          <Link href="#technology" className="hover:text-primary-500 transition-colors">Technology</Link>
          <Link href="#testimonials" className="hover:text-primary-500 transition-colors">Patient Stories</Link>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link 
            href="#booking"
            className="bg-navy-900 hover:bg-primary-500 text-white px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 shadow-lg hover:shadow-primary-500/25"
          >
            Consultation
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden z-50 text-navy-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-0 left-0 w-full h-screen bg-surface glass flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <Link href="#services" onClick={() => setIsOpen(false)} className="text-2xl font-heading text-navy-900">Services</Link>
            <Link href="#experience" onClick={() => setIsOpen(false)} className="text-2xl font-heading text-navy-900">Experience</Link>
            <Link href="#technology" onClick={() => setIsOpen(false)} className="text-2xl font-heading text-navy-900">Technology</Link>
            <Link href="#testimonials" onClick={() => setIsOpen(false)} className="text-2xl font-heading text-navy-900">Patient Stories</Link>
            <Link 
              href="#booking" 
              onClick={() => setIsOpen(false)}
              className="mt-4 bg-navy-900 text-white px-8 py-4 rounded-full font-medium"
            >
              Book Consultation
            </Link>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
