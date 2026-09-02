import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, ThumbsUp, Zap } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Image Composition with Animated Trust Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-50 aspect-[4/3]">
              <img
                src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80"
                alt="Japan Electronics Store Showcase"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </div>

            {/* Rotating / Animated Floating Badge: Quality • Technology • Trust */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-8 -right-4 sm:right-6 w-32 h-32 rounded-full bg-slate-900 text-white p-3 shadow-2xl border-4 border-white flex items-center justify-center z-20"
            >
              <svg viewBox="0 0 100 100" className="w-full h-full text-xs font-extrabold uppercase tracking-widest fill-current">
                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                <text className="text-[10px] fill-slate-200">
                  <textPath href="#circlePath" startOffset="0%">
                    • QUALITY • TECHNOLOGY • TRUST
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <Zap className="w-6 h-6 text-blue-400 fill-current" />
              </div>
            </motion.div>

            {/* Trust Pill Overlay */}
            <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-md px-4 py-2 rounded-2xl shadow-lg border border-slate-100 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-blue-600" />
              <span className="text-xs font-bold text-slate-800">Authentic Guaranteed</span>
            </div>
          </motion.div>

          {/* Right Column: Brand Narrative Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 flex flex-col justify-center"
          >
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-4 self-start">
              About Japan Electronics
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight">
              Technology You Can Trust.
            </h2>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed mb-6">
              Japan Electronics is a modern consumer electronics business dedicated to bringing reliable, cutting-edge technology directly to homes, offices, and tech enthusiasts across Pakistan.
            </p>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-8">
              We curate high-performing Smart TVs, audio systems, laptops, mobile devices, and home appliances. Our philosophy revolves around authentic products, transparent guidance, and customer-first support to ensure you get maximum value from your investment.
            </p>

            {/* Key Metrics / Highlights Grid */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-slate-100">
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-blue-600 block mb-1">100%</span>
                <span className="text-xs font-semibold text-slate-500">Genuine Products</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-blue-600 block mb-1">5000+</span>
                <span className="text-xs font-semibold text-slate-500">Happy Clients</span>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-blue-600 block mb-1">Fast</span>
                <span className="text-xs font-semibold text-slate-500">Direct Support</span>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
