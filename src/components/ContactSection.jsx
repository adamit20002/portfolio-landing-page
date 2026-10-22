import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Globe, 
  MessageSquare, 
  Copy, 
  Check, 
  Send, 
  ArrowRight,
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { operatorInfo } from '../data';

export function ContactSection({ lang, t }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form State
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formBrand, setFormBrand] = useState('');
  const [formBudget, setFormBudget] = useState('$2,500 - $5,000 / mo');
  const [formMessage, setFormMessage] = useState('');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(operatorInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(operatorInfo.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    confetti({
      particleCount: 70,
      spread: 80,
      origin: { y: 0.6 }
    });

    const text = encodeURIComponent(
      `Hello Mohamed,\n\nMy name is ${formName} from ${formBrand}.\nEmail: ${formEmail}\nPlanned Monthly Media Spend: ${formBudget}\n\nProject Scope: ${formMessage}\n\nLooking forward to speaking with you!`
    );

    window.open(`https://wa.me/201006299068?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950 border-t border-slate-900">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{t.contact.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 text-slate-900 tracking-tight">
            {t.contact.title}
          </h2>
          <p className="mt-3 text-base text-slate-400">
            {t.contact.subtitle}
          </p>
        </div>

        {/* 2-Column Contact Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Details & Direct Quick Connect (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Phone & WhatsApp Card */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {t.contact.directPhone}
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              </div>
              <div className="text-xl font-bold text-slate-100 font-mono mb-4">
                {operatorInfo.phone}
              </div>
              <div className="flex items-center gap-2.5">
                <a
                  href="https://wa.me/201006299068"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold text-center transition-all shadow-md shadow-emerald-600/20"
                >
                  {lang === 'en' ? 'Open WhatsApp' : 'محادثة عبر واتساب'}
                </a>
                <button
                  onClick={handleCopyPhone}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs font-semibold transition-all"
                  title="Copy Phone Number"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Email Card */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  {t.contact.email}
                </span>
                <Mail className="w-4 h-4 text-cyan-400" />
              </div>
              <div className="text-lg font-bold text-slate-100 font-mono mb-4 truncate">
                {operatorInfo.email}
              </div>
              <div className="flex items-center gap-2.5">
                <a
                  href={`mailto:${operatorInfo.email}`}
                  className="flex-1 py-2.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold text-center transition-all shadow-md shadow-cyan-600/20"
                >
                  {lang === 'en' ? 'Send Email' : 'إرسال بريد إلكتروني'}
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 text-xs font-semibold transition-all"
                  title="Copy Email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
            </div>

            {/* Location & SaaS link card */}
            <div className="glass-card p-6 rounded-2xl border border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300">
                  <MapPin className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">{t.contact.location}</span>
                  <span className="text-sm font-bold text-slate-100">
                    {lang === 'en' ? operatorInfo.location : operatorInfo.locationAr}
                  </span>
                </div>
              </div>
              <span className="px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 text-xs font-semibold">
                Remote & GCC
              </span>
            </div>

          </div>

          {/* Right Direct WhatsApp Inquiry Generator (7 cols) */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800">
            <h3 className="text-xl font-bold text-slate-100 mb-2">
              {t.contact.sendMessageTitle}
            </h3>
            <p className="text-xs text-slate-400 mb-6">
              {t.contact.orBook}
            </p>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {t.contact.nameLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formName}
                    onChange={(e) => setFormName(e.target.value)}
                    placeholder="e.g. Tarek Mansour"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {t.contact.emailLabel} *
                  </label>
                  <input
                    type="email"
                    required
                    value={formEmail}
                    onChange={(e) => setFormEmail(e.target.value)}
                    placeholder="name@company.com"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {t.contact.brandLabel} *
                  </label>
                  <input
                    type="text"
                    required
                    value={formBrand}
                    onChange={(e) => setFormBrand(e.target.value)}
                    placeholder="Brand or Agency Name"
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 font-medium"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {t.contact.budgetLabel}
                  </label>
                  <select
                    value={formBudget}
                    onChange={(e) => setFormBudget(e.target.value)}
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-100 focus:outline-none focus:border-cyan-500 font-medium"
                  >
                    <option>$1,000 - $3,000 / mo</option>
                    <option>$3,000 - $7,000 / mo</option>
                    <option>$7,000 - $15,000 / mo</option>
                    <option>$15,000+ / mo (Enterprise Scale)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  {t.contact.messageLabel}
                </label>
                <textarea
                  rows={3}
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  placeholder="Tell me about your product, target CAC, current bottlenecks, or media goals..."
                  className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-100 placeholder-slate-600 focus:outline-none focus:border-cyan-500 font-medium"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-sm shadow-xl shadow-emerald-500/25 hover:scale-[1.01] transition-all flex items-center justify-center gap-2"
              >
                <span>{t.contact.submitButton}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </button>
            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
