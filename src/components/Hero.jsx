import React from 'react';
import { 
  ShieldCheck, 
  ArrowRight, 
  TrendingUp, 
  Layers, 
  Users, 
  MousePointerClick, 
  MessageCircle, 
  Target, 
  FileText, 
  Sparkles,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { careerGlance, operatorInfo } from '../data';

export function Hero({ lang, t, onOpenPdfReader }) {
  return (
    <section id="overview" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      
      {/* Background ambient radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-cyan-500/10 via-blue-500/15 to-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Verification Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900/80 dark:bg-slate-900/80 bg-slate-100 border border-cyan-500/30 text-cyan-400 text-xs font-bold tracking-wide shadow-inner">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>{t.hero.badge}</span>
          </div>
        </div>

        {/* Main Headline */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-slate-100 dark:text-slate-100 text-slate-900 leading-[1.15]">
            <span>{t.hero.titleStart} </span>
            <span className="text-gradient block sm:inline">{t.hero.titleMid}</span>{' '}
            <span className="text-cyan-400">{t.hero.titleEnd}</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-300 dark:text-slate-300 text-slate-600 leading-relaxed max-w-3xl mx-auto font-normal">
            {t.hero.subtitle}
          </p>

          {/* Key Accreditation Tags */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 text-xs text-slate-300 dark:text-slate-300 text-slate-700">
            <span className="px-3 py-1 rounded-full bg-slate-800/60 dark:bg-slate-800/60 bg-slate-200/80 border border-slate-700/60 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              <span>Official Meta Tech Provider</span>
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-800/60 dark:bg-slate-800/60 bg-slate-200/80 border border-slate-700/60 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              <span>EGP 500K+/Mo Active Spend</span>
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-800/60 dark:bg-slate-800/60 bg-slate-200/80 border border-slate-700/60 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              <span>Meta · Google · TikTok · Snapchat</span>
            </span>
            <span className="px-3 py-1 rounded-full bg-slate-800/60 dark:bg-slate-800/60 bg-slate-200/80 border border-slate-700/60 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>Bilingual EN / AR (Native RTL)</span>
            </span>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#performance"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] transition-all"
            >
              <span>{t.hero.primaryCta}</span>
              <ArrowRight className="w-4 h-4 rtl:rotate-180" />
            </a>

            <a
              href="#saas"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800/80 dark:bg-slate-800/80 bg-slate-100 hover:bg-slate-700 text-slate-100 dark:text-slate-100 text-slate-800 font-semibold text-sm border border-slate-700 hover:border-cyan-500/40 transition-all"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>{t.hero.secondaryCta}</span>
            </a>

            <button
              onClick={onOpenPdfReader}
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl border border-slate-700/70 hover:border-slate-500 text-slate-300 dark:text-slate-300 text-slate-700 font-medium text-sm transition-all"
            >
              <FileText className="w-4 h-4 text-slate-400" />
              <span>{t.hero.downloadDossier}</span>
            </button>
          </div>
        </div>

        {/* 8-Metric Bento Statistics Ribbon */}
        <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4">
          
          {/* Card 1: Total Spend */}
          <div className="glass-card p-5 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl group-hover:bg-cyan-500/20 transition-all" />
            <div className="flex items-center justify-between text-slate-400 text-xs font-semibold mb-2">
              <span>{t.hero.statSpend}</span>
              <TrendingUp className="w-4 h-4 text-cyan-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 tracking-tight">
              ${careerGlance.totalSpendUsd.toLocaleString()}
            </div>
            <div className="mt-1 text-[11px] text-slate-400 font-mono">
              {t.hero.statSpendSub}
            </div>
          </div>

          {/* Card 2: Ad Accounts */}
          <div className="glass-card p-5 rounded-2xl relative overflow-hidden group">
            <div className="flex items-center justify-between text-slate-400 text-xs font-semibold mb-2">
              <span>{t.hero.statAccounts}</span>
              <Layers className="w-4 h-4 text-blue-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-100 dark:text-slate-100 text-slate-900 tracking-tight">
              {careerGlance.adAccounts}
            </div>
            <div className="mt-1 text-[11px] text-slate-400">
              {t.hero.statAccountsSub}
            </div>
          </div>

          {/* Card 3: Brands & Industries */}
          <div className="glass-card p-5 rounded-2xl relative overflow-hidden group">
            <div className="flex items-center justify-between text-slate-400 text-xs font-semibold mb-2">
              <span>{t.hero.statBrands}</span>
              <Users className="w-4 h-4 text-indigo-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-100 dark:text-slate-100 text-slate-900 tracking-tight">
              {careerGlance.brands} Brands
            </div>
            <div className="mt-1 text-[11px] text-slate-400">
              {t.hero.statBrandsSub}
            </div>
          </div>

          {/* Card 4: Impressions */}
          <div className="glass-card p-5 rounded-2xl relative overflow-hidden group">
            <div className="flex items-center justify-between text-slate-400 text-xs font-semibold mb-2">
              <span>{t.hero.statImpressions}</span>
              <Target className="w-4 h-4 text-emerald-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 tracking-tight">
              {careerGlance.impressions}
            </div>
            <div className="mt-1 text-[11px] text-slate-400">
              {t.hero.statImpressionsSub}
            </div>
          </div>

          {/* Card 5: Reach */}
          <div className="glass-card p-5 rounded-2xl relative overflow-hidden group">
            <div className="flex items-center justify-between text-slate-400 text-xs font-semibold mb-2">
              <span>{t.hero.statReach}</span>
              <Users className="w-4 h-4 text-amber-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-100 dark:text-slate-100 text-slate-900 tracking-tight">
              {careerGlance.peopleReached}
            </div>
            <div className="mt-1 text-[11px] text-slate-400">
              {t.hero.statReachSub}
            </div>
          </div>

          {/* Card 6: Clicks Driven */}
          <div className="glass-card p-5 rounded-2xl relative overflow-hidden group">
            <div className="flex items-center justify-between text-slate-400 text-xs font-semibold mb-2">
              <span>{t.hero.statClicks}</span>
              <MousePointerClick className="w-4 h-4 text-sky-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-100 dark:text-slate-100 text-slate-900 tracking-tight">
              {careerGlance.clicksDriven}
            </div>
            <div className="mt-1 text-[11px] text-slate-400 font-mono">
              {t.hero.statClicksSub}
            </div>
          </div>

          {/* Card 7: Messaging Inquiries */}
          <div className="glass-card p-5 rounded-2xl relative overflow-hidden group">
            <div className="flex items-center justify-between text-slate-400 text-xs font-semibold mb-2">
              <span>{t.hero.statMessages}</span>
              <MessageCircle className="w-4 h-4 text-teal-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-teal-400 tracking-tight">
              {careerGlance.messagingConversations}
            </div>
            <div className="mt-1 text-[11px] text-slate-400 font-mono">
              {t.hero.statMessagesSub}
            </div>
          </div>

          {/* Card 8: Campaigns Built */}
          <div className="glass-card p-5 rounded-2xl relative overflow-hidden group">
            <div className="flex items-center justify-between text-slate-400 text-xs font-semibold mb-2">
              <span>{t.hero.statCampaigns}</span>
              <Layers className="w-4 h-4 text-purple-400" />
            </div>
            <div className="text-2xl sm:text-3xl font-extrabold text-slate-100 dark:text-slate-100 text-slate-900 tracking-tight">
              {careerGlance.campaignsBuilt.toLocaleString()}
            </div>
            <div className="mt-1 text-[11px] text-slate-400">
              {t.hero.statCampaignsSub}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
