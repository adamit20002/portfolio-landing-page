import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Globe, 
  Moon, 
  Sun, 
  Menu, 
  X, 
  FileDown, 
  MessageSquare,
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { operatorInfo } from '../data';

export function Navbar({ lang, setLang, theme, setTheme, t, onOpenPdfReader }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(lang === 'en' ? 'ar' : 'en');
  };

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-slate-950/85 dark:bg-slate-950/85 bg-white/90 backdrop-blur-md border-b border-slate-800/80 dark:border-slate-800/80 border-slate-200/80 shadow-lg shadow-black/5 py-3' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform duration-300">
              MA
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base tracking-tight text-slate-100 dark:text-slate-100 text-slate-900 group-hover:text-cyan-400 transition-colors">
                {lang === 'en' ? operatorInfo.name : operatorInfo.nameAr}
              </span>
              <div className="flex items-center gap-1.5 text-xs text-slate-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[11px] font-semibold text-emerald-400">Meta Tech Provider</span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300 dark:text-slate-300 text-slate-600">
            <a href="#overview" className="hover:text-cyan-400 transition-colors">{t.nav.overview}</a>
            <a href="#saas" className="hover:text-cyan-400 transition-colors flex items-center gap-1">
              <span>{t.nav.saas}</span>
              <span className="px-1.5 py-0.5 rounded text-[10px] bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-bold">LIVE</span>
            </a>
            <a href="#performance" className="hover:text-cyan-400 transition-colors">{t.nav.performance}</a>
            <a href="#estimator" className="hover:text-cyan-400 transition-colors">{t.nav.estimator}</a>
            <a href="#brands" className="hover:text-cyan-400 transition-colors">{t.nav.brands}</a>
            <a href="#career" className="hover:text-cyan-400 transition-colors">{t.nav.career}</a>
          </div>

          {/* Controls & Quick CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            
            {/* Language Switcher */}
            <button
              onClick={toggleLang}
              aria-label="Switch Language"
              className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-700/60 dark:border-slate-700/60 border-slate-300 text-slate-300 dark:text-slate-300 text-slate-700 hover:border-cyan-500/50 hover:text-cyan-400 text-xs font-semibold transition-all"
            >
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>{lang === 'en' ? 'عربي' : 'English'}</span>
            </button>

            {/* Dark / Light Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="p-2 rounded-lg border border-slate-700/60 dark:border-slate-700/60 border-slate-300 text-slate-300 dark:text-slate-300 text-slate-700 hover:border-cyan-500/50 hover:text-cyan-400 transition-all"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-slate-700" />}
            </button>

            {/* Official Audit PDF Reader */}
            <button
              onClick={onOpenPdfReader}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all"
            >
              <FileDown className="w-3.5 h-3.5 text-cyan-400" />
              <span>{lang === 'en' ? 'Audit PDF' : 'ملف التدقيق'}</span>
            </button>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/201006299068?text=Hello%20Mohamed,%20I%20viewed%20your%20verified%20performance%20portfolio%20and%20would%20like%20to%20discuss%20an%20opportunity."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold shadow-md shadow-emerald-500/20 hover:scale-105 transition-all"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'WhatsApp' : 'واتساب'}</span>
            </a>
          </div>

          {/* Mobile menu hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={toggleLang}
              className="px-2 py-1 rounded border border-slate-700 text-xs text-slate-300"
            >
              {lang === 'en' ? 'عربي' : 'EN'}
            </button>
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded border border-slate-700 text-slate-300"
            >
              {theme === 'dark' ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-slate-950/98 border-b border-slate-800 px-6 py-6 space-y-4">
          <div className="flex flex-col space-y-3 text-base font-semibold text-slate-200">
            <a href="#overview" onClick={() => setMobileMenuOpen(false)}>{t.nav.overview}</a>
            <a href="#saas" onClick={() => setMobileMenuOpen(false)}>{t.nav.saas}</a>
            <a href="#performance" onClick={() => setMobileMenuOpen(false)}>{t.nav.performance}</a>
            <a href="#estimator" onClick={() => setMobileMenuOpen(false)}>{t.nav.estimator}</a>
            <a href="#brands" onClick={() => setMobileMenuOpen(false)}>{t.nav.brands}</a>
            <a href="#career" onClick={() => setMobileMenuOpen(false)}>{t.nav.career}</a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)}>{t.nav.contact}</a>
          </div>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenPdfReader();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-slate-800 text-slate-200 text-sm font-semibold"
            >
              <FileDown className="w-4 h-4 text-cyan-400" />
              <span>{lang === 'en' ? 'Inspect 24-Page Audit PDF' : 'تصفح ملف التدقيق 24 صفحة'}</span>
            </button>
            <a
              href="/downloads/mohamed-adam-cv.pdf"
              download
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border border-slate-700 text-slate-200 text-sm font-semibold"
            >
              <FileDown className="w-4 h-4" />
              <span>{t.nav.downloadCv}</span>
            </a>
            <a
              href="https://wa.me/201006299068"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-emerald-600 text-white text-sm font-bold"
            >
              <MessageSquare className="w-4 h-4" />
              <span>{lang === 'en' ? 'Chat on WhatsApp' : 'محادثة واتساب'}</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
