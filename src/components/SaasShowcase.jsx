import React, { useState, useEffect } from 'react';
import { 
  Sparkles, 
  ExternalLink, 
  ShieldCheck, 
  Database, 
  Code2, 
  Languages, 
  Maximize2,
  ChevronRight,
  ChevronLeft,
  Smartphone,
  Layers,
  LayoutGrid
} from 'lucide-react';
import { operatorInfo } from '../data';

export function SaasShowcase({ lang, t, onSelectImage }) {
  const [screens, setScreens] = useState([]);
  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    fetch('/documents/screens.json')
      .then(res => res.json())
      .then(data => setScreens(data))
      .catch(err => console.error("Error loading screens:", err));
  }, []);

  const getFilteredScreens = () => {
    if (activeTab === 'all') return screens.slice(0, 16);
    if (activeTab === 'dashboard') return screens.filter(s => s.file.startsWith('a01') || s.file.startsWith('a03') || s.file.startsWith('a04') || s.file.startsWith('a05') || s.file.startsWith('a06') || s.file.startsWith('a07'));
    if (activeTab === 'funnel') return screens.filter(s => s.file.includes('purchase') || s.file.includes('funnel') || s.file.includes('funds') || s.file.includes('reports'));
    if (activeTab === 'creative') return screens.filter(s => s.file.includes('creative') || s.file.includes('content') || s.file.includes('reels') || s.file.includes('feed'));
    if (activeTab === 'arabic') return screens.filter(s => s.file.includes('-ar') || s.label.toLowerCase().includes('arabic'));
    if (activeTab === 'mobile') return screens.filter(s => s.file.includes('-mobile') || s.label.toLowerCase().includes('mobile'));
    return screens.slice(0, 16);
  };

  const filteredScreens = getFilteredScreens();

  return (
    <section id="saas" className="py-24 relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.saas.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 text-slate-900 tracking-tight">
            {t.saas.title}
          </h2>

          <p className="mt-4 text-base text-slate-400 leading-relaxed">
            {t.saas.subtitle}
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <a
              href={operatorInfo.saasUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white text-xs font-bold shadow-lg shadow-cyan-500/20 transition-all hover:scale-105"
            >
              <span>{t.saas.liveUrlText}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <span className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800/80 text-emerald-400 border border-emerald-500/30 text-xs font-semibold">
              <ShieldCheck className="w-4 h-4" />
              <span>{t.saas.statusBadge}</span>
            </span>
          </div>
        </div>

        {/* 4 Architectural Core Strengths */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          
          <div className="glass-card p-6 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center mb-4">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-100 dark:text-slate-100 text-slate-900 mb-2">
              {t.saas.metaFeature1}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t.saas.metaFeature1Desc}
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-4">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-100 dark:text-slate-100 text-slate-900 mb-2">
              {t.saas.metaFeature2}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t.saas.metaFeature2Desc}
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center mb-4">
              <Languages className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-100 dark:text-slate-100 text-slate-900 mb-2">
              {t.saas.metaFeature3}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t.saas.metaFeature3Desc}
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-4">
              <Code2 className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-100 dark:text-slate-100 text-slate-900 mb-2">
              {t.saas.metaFeature4}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {t.saas.metaFeature4Desc}
            </p>
          </div>

        </div>

        {/* Hero Interactive App Screen Showcase */}
        <div className="mb-14 rounded-2xl border border-slate-800 bg-slate-900/80 p-2 sm:p-4 shadow-2xl relative group overflow-hidden">
          <div className="relative rounded-xl overflow-hidden aspect-[16/9] max-h-[550px] bg-slate-950 flex items-center justify-center cursor-pointer"
               onClick={() => onSelectImage('/screens/a01-dashboard.jpg', 'Adams Analytics Executive Dashboard')}>
            <img 
              src="/screens/a01-dashboard.jpg" 
              alt="Adams Analytics Executive Dashboard" 
              className="w-full h-full object-cover object-top hover:scale-[1.01] transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-6">
              <div className="flex items-center justify-between w-full">
                <div>
                  <span className="px-2.5 py-1 rounded-md bg-cyan-500/20 text-cyan-300 text-xs font-bold uppercase tracking-wider border border-cyan-500/30">
                    Live Interface
                  </span>
                  <h4 className="text-lg font-bold text-white mt-1.5">
                    {lang === 'en' ? 'Adams Analytics — Executive Multi-Account Analytics Dashboard' : 'منصة Adams Analytics — لوحة القيادة التنفيذية للحسابات المتعددة'}
                  </h4>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/60 text-white text-xs backdrop-blur-md">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>{lang === 'en' ? 'Expand' : 'تكبير'}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 55 Screens Gallery with Tabs */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 text-slate-900">
                {t.saas.galleryTitle}
              </h3>
              <p className="text-xs text-slate-400">
                {t.saas.gallerySubtitle}
              </p>
            </div>

            {/* Gallery Category Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-2 sm:pb-0 text-xs font-semibold">
              <button
                onClick={() => setActiveTab('all')}
                className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'all' ? 'bg-cyan-500 text-white font-bold shadow-md shadow-cyan-500/20' : 'bg-slate-800 text-slate-400 hover:text-white'}`}
              >
                {lang === 'en' ? 'Featured' : 'المميزة'}
              </button>
              <button
                onClick={() => setActiveTab('dashboard')}
                className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'dashboard' ? 'bg-cyan-500 text-white font-bold shadow-md shadow-cyan-500/20' : 'bg-slate-800 text-slate-400 hover:text-white'}`}
              >
                {lang === 'en' ? 'Dashboard & Insights' : 'لوحة القيادة'}
              </button>
              <button
                onClick={() => setActiveTab('funnel')}
                className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'funnel' ? 'bg-cyan-500 text-white font-bold shadow-md shadow-cyan-500/20' : 'bg-slate-800 text-slate-400 hover:text-white'}`}
              >
                {lang === 'en' ? 'Funnels & Purchases' : 'مسارات الشراء'}
              </button>
              <button
                onClick={() => setActiveTab('creative')}
                className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'creative' ? 'bg-cyan-500 text-white font-bold shadow-md shadow-cyan-500/20' : 'bg-slate-800 text-slate-400 hover:text-white'}`}
              >
                {lang === 'en' ? 'Creatives & Reels' : 'الإعلانات وReels'}
              </button>
              <button
                onClick={() => setActiveTab('arabic')}
                className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'arabic' ? 'bg-cyan-500 text-white font-bold shadow-md shadow-cyan-500/20' : 'bg-slate-800 text-slate-400 hover:text-white'}`}
              >
                {lang === 'en' ? 'Arabic UI' : 'الواجهة العربية'}
              </button>
              <button
                onClick={() => setActiveTab('mobile')}
                className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'mobile' ? 'bg-cyan-500 text-white font-bold shadow-md shadow-cyan-500/20' : 'bg-slate-800 text-slate-400 hover:text-white'}`}
              >
                {lang === 'en' ? 'Mobile' : 'تطبيق الهاتف'}
              </button>
            </div>
          </div>

          {/* Grid of Screen Thumbnails */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredScreens.map((screen, index) => (
              <div
                key={screen.file}
                onClick={() => onSelectImage(`/screens/${screen.file}`, screen.label)}
                className="group relative rounded-xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-cyan-500/50 cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1"
              >
                <div className="aspect-[16/10] overflow-hidden bg-slate-950">
                  <img
                    src={`/screens/${screen.file}`}
                    alt={screen.label}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-3 bg-slate-900/90 border-t border-slate-800/80 flex items-center justify-between">
                  <div className="truncate">
                    <span className="text-xs font-semibold text-slate-200 group-hover:text-cyan-400 transition-colors block truncate">
                      {screen.label}
                    </span>
                    <span className="text-[10px] text-slate-500 block truncate">
                      {screen.group}
                    </span>
                  </div>
                  <Maximize2 className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-400 shrink-0" />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center text-xs text-slate-500">
            {t.saas.viewFullscreen}
          </div>
        </div>

      </div>
    </section>
  );
}
