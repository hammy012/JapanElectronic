import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, MessageCircle, X, Check, Eye, ChevronRight, Tag } from 'lucide-react';
import { FEATURED_PRODUCTS, COMPANY_INFO } from '../data/products';

export default function FeaturedProducts() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const tabs = [
    { id: 'all', label: 'All Appliances' },
    { id: 'ac', label: 'Inverter ACs' },
    { id: 'refrigerator', label: 'Refrigerators & Freezers' },
    { id: 'led', label: 'LED TVs' },
    { id: 'washing', label: 'Washing Machines' },
    { id: 'cooler', label: 'Air Coolers' },
  ];

  const filteredProducts = activeTab === 'all'
    ? FEATURED_PRODUCTS
    : FEATURED_PRODUCTS.filter((p) => p.category === activeTab);

  return (
    <section id="products" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            Popular Appliances
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Quality Home Electronics
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Explore our bestselling Inverter Air Conditioners, Refrigerators, LED TVs, Washing Machines & Air Coolers.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-12 scrollbar-none gap-2">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/25 scale-[1.02]'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80 hover:text-slate-900'
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Product Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group bg-white rounded-3xl border border-slate-200/70 overflow-hidden shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Product Image Container */}
                  <div className="relative aspect-[4/3] bg-slate-50 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 bg-white/95 backdrop-blur-md rounded-full text-xs font-bold text-slate-800 shadow-sm">
                        {product.categoryLabel}
                      </span>
                    </div>
                    {product.tag && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-extrabold tracking-wide uppercase shadow-sm">
                          {product.tag}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Product Info */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    {/* Specs Pills */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {product.specs.map((spec, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-600 bg-slate-100 px-2.5 py-1 rounded-lg"
                        >
                          <Check className="w-3 h-3 text-blue-600" />
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="px-6 pb-6 pt-0 flex items-center gap-3">
                  <button
                    onClick={() => setSelectedProduct(product)}
                    className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 bg-slate-100 hover:bg-slate-200/80 text-slate-800 font-bold rounded-2xl text-xs transition-colors"
                  >
                    <Eye className="w-4 h-4 text-blue-600" />
                    <span>View Details</span>
                  </button>

                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%20Japan%20Electronics,%20I%20am%20interested%20in%20the%20${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center p-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl text-xs shadow-md shadow-emerald-600/20 transition-all hover:scale-105"
                    title="Inquire via WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4 fill-current" />
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Product Detail Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-100 relative"
            >
              {/* Modal Close Button */}
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/90 backdrop-blur-md text-slate-700 hover:bg-slate-100 transition-colors shadow-sm"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid md:grid-cols-2">
                <div className="aspect-square bg-slate-50 relative overflow-hidden">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs font-bold uppercase tracking-wider">
                      {selectedProduct.categoryLabel}
                    </span>
                  </div>
                </div>

                <div className="p-6 md:p-8 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-extrabold text-slate-900 mb-3">
                      {selectedProduct.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-6">
                      {selectedProduct.description}
                    </p>

                    <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                      Key Appliance Specs
                    </h4>
                    <ul className="space-y-2 mb-8">
                      {selectedProduct.specs.map((spec, i) => (
                        <li key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                          <Check className="w-4 h-4 text-blue-600 shrink-0" />
                          <span>{spec}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col gap-3 pt-4 border-t border-slate-100">
                    <a
                      href={`tel:${COMPANY_INFO.rawPhone}`}
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl text-sm shadow-lg shadow-blue-600/30 transition-all"
                    >
                      <Phone className="w-4 h-4" />
                      <span>Call {COMPANY_INFO.phone}</span>
                    </a>
                    
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%20Japan%20Electronics,%20I%20want%20to%20buy/inquire%20about%20${encodeURIComponent(selectedProduct.name)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-2xl text-sm shadow-md transition-all"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>Inquire on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
