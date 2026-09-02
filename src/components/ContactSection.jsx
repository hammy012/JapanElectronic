import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/products';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    category: 'General Inquiry',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.phone.trim()) {
      errs.phone = 'Phone number is required';
    } else if (!/^[0-9+\s-]{8,15}$/.test(formData.phone)) {
      errs.phone = 'Please enter a valid phone number';
    }
    if (!formData.message.trim()) errs.message = 'Message cannot be empty';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});
    setSubmitted(true);
    // Auto reset after submission feedback
    setTimeout(() => {
      setFormData({ name: '', phone: '', category: 'General Inquiry', message: '' });
      setSubmitted(false);
    }, 6000);
  };

  return (
    <section id="contact" className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-3.5 py-1.5 rounded-full bg-blue-50 text-blue-700 text-xs font-bold uppercase tracking-wider mb-3">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Let's Talk Technology.
          </h2>
          <p className="text-base sm:text-lg text-slate-600 font-normal">
            Have questions about a product or need a price quote? Reach out to Japan Electronics directly.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Business Details Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-extrabold text-slate-900 mb-6">
                Direct Business Contact
              </h3>

              <div className="flex flex-col gap-6">
                <a
                  href={`tel:${COMPANY_INFO.rawPhone}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/60 shadow-sm hover:border-blue-300 hover:shadow-md transition-all group"
                >
                  <div className="p-3 rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Phone Number</span>
                    <span className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {COMPANY_INFO.phone}
                    </span>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/60 shadow-sm">
                  <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Location</span>
                    <span className="text-sm font-semibold text-slate-800">
                      {COMPANY_INFO.address}
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200/60 shadow-sm">
                  <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">Working Hours</span>
                    <span className="text-sm font-semibold text-slate-800">
                      {COMPANY_INFO.workingHours}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-200/60 text-center">
                <a
                  href={`tel:${COMPANY_INFO.rawPhone}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg shadow-blue-600/25 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Japan Electronics</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200/80 rounded-3xl p-8 sm:p-10 shadow-lg relative">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 text-center flex flex-col items-center justify-center"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Inquiry Received!</h3>
                <p className="text-sm text-slate-600 max-w-md">
                  Thank you for reaching out to Japan Electronics. Our team will get back to you shortly on <strong>{formData.phone}</strong>.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Send an Inquiry</h3>

                <div className="grid sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ali Ahmed"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-3.5 rounded-2xl bg-slate-50 border ${
                        errors.name ? 'border-red-500 bg-red-50/20' : 'border-slate-200'
                      } text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all`}
                    />
                    {errors.name && (
                      <p className="text-xs text-red-500 font-semibold mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Phone Input */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 0333 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-4 py-3.5 rounded-2xl bg-slate-50 border ${
                        errors.phone ? 'border-red-500 bg-red-50/20' : 'border-slate-200'
                      } text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all`}
                    />
                    {errors.phone && (
                      <p className="text-xs text-red-500 font-semibold mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                {/* Category Selection */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Product Interest
                  </label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all"
                  >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Smart TVs & Displays">Smart TVs & Displays</option>
                    <option value="Audio & Noise-Canceling Speakers">Audio & Speakers</option>
                    <option value="Laptops & Computers">Laptops & Computers</option>
                    <option value="Smartphones & Gadgets">Smartphones & Accessories</option>
                    <option value="Home Appliances">Home Appliances</option>
                  </select>
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Message *
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Tell us what product you are looking for..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-3.5 rounded-2xl bg-slate-50 border ${
                      errors.message ? 'border-red-500 bg-red-50/20' : 'border-slate-200'
                    } text-slate-900 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-600/30 focus:border-blue-600 transition-all`}
                  />
                  {errors.message && (
                    <p className="text-xs text-red-500 font-semibold mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 py-4 px-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-lg shadow-blue-600/30 transition-all duration-200 hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
