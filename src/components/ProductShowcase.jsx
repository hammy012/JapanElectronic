import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Zap, Shield, Sparkles } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export default function ProductShowcase() {
  const features = [
    "Ultra HD & 4K Smart OLED Displays",
    "Active Noise-Canceling Wireless Audio",
    "High-Performance Laptops & Smartwatches",
    "Energy-Efficient Home Electronics"
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[2.5rem] p-8 sm:p-12 lg:p-16 text-white relative overflow-hidden shadow-2xl">
          
          {/* Subtle Background Glow Orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

          <div className="grid lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Column: Image Showcase */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-800 aspect-[4/3] group">
                <img
                  src="https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80"
                  alt="Smart Electronics Living Showcase"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shrink-0">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold">Premium Japanese Engineering</h4>
                      <p className="text-xs text-slate-300">Selected for quality, longevity and everyday ease.</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column: Editorial Text Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-6 flex flex-col justify-center"
            >
              <span className="inline-flex items-center gap-2 self-start px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-400/30 text-xs font-bold uppercase tracking-wider mb-6">
                <Zap className="w-3.5 h-3.5 fill-current" />
                Featured Editorial
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
                Smart Technology.<br />
                <span className="text-blue-400">Better Living.</span>
              </h2>

              <p className="text-slate-300 text-base sm:text-lg font-normal leading-relaxed mb-8">
                From entertainment to everyday essentials, Japan Electronics brings modern technology closer to you with products selected for quality, performance and everyday convenience.
              </p>

              <div className="grid sm:grid-cols-2 gap-3 mb-10">
                {features.map((feat, index) => (
                  <div key={index} className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-200">{feat}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#products"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-2xl shadow-lg shadow-blue-600/40 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <span>Explore Our Collection</span>
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href={`tel:${COMPANY_INFO.rawPhone}`}
                  className="inline-flex items-center gap-2 px-6 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl border border-white/20 transition-colors"
                >
                  <span>Call {COMPANY_INFO.phone}</span>
                </a>
              </div>

            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
