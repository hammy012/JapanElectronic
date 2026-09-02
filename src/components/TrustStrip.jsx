import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Headphones, Cpu, Zap } from 'lucide-react';
import { TRUST_STATS } from '../data/products';

export default function TrustStrip() {
  const iconMap = {
    ShieldCheck: ShieldCheck,
    Headphones: Headphones,
    Cpu: Cpu,
    Zap: Zap
  };

  return (
    <section className="bg-slate-50/70 border-y border-slate-200/60 py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {TRUST_STATS.map((item, index) => {
            const IconComponent = iconMap[item.icon] || ShieldCheck;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="p-3 rounded-xl bg-blue-50 text-blue-600 shrink-0">
                  <IconComponent className="w-6 h-6 stroke-[2]" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-0.5">{item.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-medium">{item.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
