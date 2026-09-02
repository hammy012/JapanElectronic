import React from 'react';
import { MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${COMPANY_INFO.whatsappNumber}?text=Hi%20Japan%20Electronics,%20I%20would%20like%20to%20inquire%20about%20your%20products.`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-2 p-3.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 animate-pulse-glow"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-7 h-7 fill-current stroke-[1.5]" />
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 text-xs font-bold tracking-wide pr-1">
        Chat with Us
      </span>
    </a>
  );
}
