import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, ShieldCheck, Star, Award, Zap, Snowflake } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-50/80 via-white to-white">
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs */}
          <div className="lg:col-span-6 flex flex-col text-center lg:text-left">
            
            {/* Top Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 self-center lg:self-start px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm"
            >
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-ping" />
              <span>Japan Electronics • Official Store</span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] mb-6"
            >
              Upgrade Your Home With <span className="text-gradient-blue">Premium Electronics</span>.
            </motion.h1>

            {/* Supporting Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Discover high-performance Inverter ACs, Refrigerators, Smart LED TVs, Washing Machines, Air Coolers & Home Appliances — all backed by official warranty.
            </motion.p>

            {/* CTA Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
            >
              <a
                href="#products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-2xl shadow-lg shadow-blue-600/30 transition-all duration-200 hover:shadow-xl hover:shadow-blue-600/40 hover:-translate-y-0.5"
              >
                <span>Explore Appliances</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href={`tel:${COMPANY_INFO.rawPhone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 text-base font-bold text-slate-800 bg-slate-100 hover:bg-slate-200/80 border border-slate-200/80 rounded-2xl transition-all duration-200 hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5 text-blue-600" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </motion.div>

            {/* Mini Trust Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="pt-6 border-t border-slate-100 flex items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 font-semibold"
            >
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>100% Official Warranty</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-blue-600" />
                <span>Low Electricity Consumption</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Premium Multi-Layered Visual Composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-6 relative flex justify-center items-center"
          >
            {/* Main Center Image Showcase (Inverter AC / Smart LED TV Setup) */}
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-slate-200/80 bg-white group">
              <img
                src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80"
                alt="Japan Electronics Inverter AC & Appliances"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
              
              <div className="absolute bottom-5 left-5 right-5 text-white">
                <span className="inline-block px-3 py-1 bg-blue-600/90 backdrop-blur-md text-[11px] font-bold tracking-wider uppercase rounded-lg mb-2">
                  Featured Season Unit
                </span>
                <h3 className="text-xl font-bold">1.5 Ton T3 DC Inverter AC</h3>
                <p className="text-xs text-slate-200 line-clamp-1">75% energy saving DC inverter tech with instant 60-second turbo cooling.</p>
              </div>
            </div>

            {/* Floating Product Card 1: Refrigerator (Top Left) */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-4 sm:left-0 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 max-w-[220px] z-20"
            >
              <img
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=200&q=80"
                alt="Refrigerator"
                className="w-12 h-12 rounded-xl object-cover"
              />
              <div className="overflow-hidden">
                <h4 className="text-xs font-bold text-slate-900 truncate">Glass Door Fridge</h4>
                <p className="text-[10px] text-blue-600 font-semibold">Low Voltage Start (135V)</p>
                <div className="flex items-center gap-0.5 text-amber-400 mt-0.5">
                  <Star className="w-3 h-3 fill-current" />
                  <span className="text-[10px] font-bold text-slate-600">4.9/5 Rating</span>
                </div>
              </div>
            </motion.div>

            {/* Floating Product Card 2: Automatic Washing Machine (Bottom Right) */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -right-4 sm:right-0 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 max-w-[220px] z-20"
            >
              <img
                src="https://images.unsplash.com/photo-1610557892470-55d9e80c0bce?auto=format&fit=crop&w=200&q=80"
                alt="Washing Machine"
                className="w-12 h-12 rounded-xl object-cover"
              />
              <div className="overflow-hidden">
                <h4 className="text-xs font-bold text-slate-900 truncate">Automatic Washer</h4>
                <p className="text-[10px] text-emerald-600 font-semibold">In Stock • Official Warranty</p>
              </div>
            </motion.div>

            {/* Floating Accent Badge: Energy Saver */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 right-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-3 rounded-2xl shadow-lg flex items-center gap-2 z-30"
            >
              <Snowflake className="w-5 h-5 text-cyan-200" />
              <div className="text-[11px] font-extrabold leading-tight">
                <span>INVERTER</span><br/>
                <span className="text-blue-100 font-medium">TECH 75% SAVING</span>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
