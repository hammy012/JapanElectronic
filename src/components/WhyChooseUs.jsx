import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Sparkles, PhoneCall, UserCheck } from 'lucide-react';
import { WHY_CHOOSE_US } from '../data/products';

export default function WhyChooseUs() {
  const iconMap = {
    CheckCircle2: CheckCircle2,
    Sparkles: Sparkles,
    PhoneCall: PhoneCall,
    UserCheck: UserCheck
  };

  return (
    <section id="why-us" className="py-24 bg-slate-50/70 relative border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            Our Advantage
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Why Choose Japan Electronics?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            We bridge the gap between premium technology and local convenience with uncompromised commitment to quality.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {WHY_CHOOSE_US.map((card, index) => {
            const IconComponent = iconMap[card.icon] || CheckCircle2;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-8 rounded-3xl bg-white border border-slate-200/70 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-blue-50 group-hover:bg-blue-600 text-blue-600 group-hover:text-white flex items-center justify-center mb-6 transition-all duration-300 shadow-sm">
                    <IconComponent className="w-7 h-7 stroke-[2]" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {card.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center text-xs font-bold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn More</span>
                  <span className="ml-1">→</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
