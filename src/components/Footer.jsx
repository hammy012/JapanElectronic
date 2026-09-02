import React from 'react';
import { Phone, Zap, Heart } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Col */}
          <div className="md:col-span-5 flex flex-col gap-4">
            <a href="#home" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md">
                <Zap className="w-5 h-5 fill-current" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-extrabold tracking-tight text-white leading-tight">
                  JAPAN<span className="text-blue-500">.</span>
                </span>
                <span className="text-[10px] font-bold tracking-widest text-slate-400 uppercase -mt-0.5">
                  Electronics
                </span>
              </div>
            </a>
            <p className="text-xs text-slate-400 max-w-sm font-normal leading-relaxed">
              Your trusted partner for high quality electronics, smart devices, and home entertainment solutions in Pakistan. Built for reliability and performance.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400 font-medium">
              <li>
                <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#products" className="hover:text-blue-400 transition-colors">Featured Products</a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-blue-400 transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400 transition-colors">About Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-blue-400 transition-colors">Contact Support</a>
              </li>
            </ul>
          </div>

          {/* Direct Phone & Hours */}
          <div className="md:col-span-4 flex flex-col gap-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2">
              Direct Contact
            </h4>
            <a
              href={`tel:${COMPANY_INFO.rawPhone}`}
              className="inline-flex items-center gap-3 p-4 rounded-2xl bg-slate-800/80 border border-slate-700 hover:border-blue-500 transition-colors group"
            >
              <div className="p-2.5 rounded-xl bg-blue-600 text-white">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] text-slate-400 font-semibold block">Customer Support Line</span>
                <span className="text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                  {COMPANY_INFO.phone}
                </span>
              </div>
            </a>
            <p className="text-[11px] text-slate-400">
              Operating Hours: {COMPANY_INFO.workingHours}
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© 2026 Japan Electronics. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Designed for Premium Performance & Trust</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
