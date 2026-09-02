import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import ProductMarquee from './components/ProductMarquee';
import FeaturedProducts from './components/FeaturedProducts';
import Categories from './components/Categories';
import ProductShowcase from './components/ProductShowcase';
import WhyChooseUs from './components/WhyChooseUs';
import About from './components/About';
import CTASection from './components/CTASection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-800 selection:bg-blue-600 selection:text-white font-sans antialiased overflow-x-hidden">
      {/* Sticky Floating Navbar */}
      <Navbar />

      {/* Main Single Page Content */}
      <main id="main-content">
        <Hero />
        <TrustStrip />
        <ProductMarquee />
        <FeaturedProducts />
        <Categories />
        <ProductShowcase />
        <WhyChooseUs />
        <About />
        <CTASection />
        <ContactSection />
      </main>

      {/* Footer & Floating WhatsApp */}
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
