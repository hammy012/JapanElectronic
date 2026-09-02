import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { CATEGORIES } from '../data/products';

export default function Categories() {
  return (
    <section className="py-24 bg-slate-50/60 relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
          <div>
            <span className="inline-block px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
              Product Categories
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Explore Our Range
            </h2>
          </div>
          <p className="text-sm sm:text-base text-slate-600 max-w-md font-normal">
            Discover premier Japanese & international consumer electronics categorized for effortless browsing.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CATEGORIES.map((cat, index) => (
            <motion.a
              key={cat.id}
              href="#products"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative h-80 rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-200/80 flex flex-col justify-end p-6 sm:p-8"
            >
              {/* Background Image with Zoom */}
              <div className="absolute inset-0 z-0 overflow-hidden bg-slate-900">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover opacity-85 group-hover:opacity-75 transition-all duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />
              </div>

              {/* Top Badge */}
              <div className="relative z-10 mb-auto flex justify-between items-center">
                <span className="px-3 py-1 bg-white/20 backdrop-blur-md border border-white/30 text-white rounded-full text-xs font-extrabold uppercase tracking-wider">
                  {cat.badge}
                </span>
                <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white flex items-center justify-center group-hover:bg-blue-600 group-hover:border-blue-600 transition-all duration-300 group-hover:scale-110">
                  <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Category Info */}
              <div className="relative z-10 transition-transform duration-300 group-hover:-translate-y-1">
                <span className="text-xs font-bold text-blue-400 tracking-wider uppercase mb-1 block">
                  {cat.count}
                </span>
                <h3 className="text-2xl font-extrabold text-white mb-2 group-hover:text-blue-200 transition-colors">
                  {cat.name}
                </h3>
                <p className="text-xs text-slate-300 font-normal leading-relaxed line-clamp-2">
                  {cat.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
