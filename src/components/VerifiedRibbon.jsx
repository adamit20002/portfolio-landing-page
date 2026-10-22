import React from 'react';
import { 
  ShieldCheck, 
  Binary, 
  DollarSign, 
  FileCheck, 
  ExternalLink,
  Lock,
  FileText
} from 'lucide-react';
import { operatorInfo } from '../data';

export function VerifiedRibbon({ lang, t, onOpenPdfReader }) {
  return (
    <section className="py-16 bg-slate-900/60 dark:bg-slate-900/60 bg-slate-100/80 border-y border-slate-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-10 border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold tracking-wider uppercase mb-2">
              <Lock className="w-3.5 h-3.5" />
              <span>{t.verification.apiBadge}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-100 dark:text-slate-100 text-slate-900">
              {t.verification.title}
            </h2>
            <p className="mt-2 text-sm text-slate-400 max-w-2xl">
              {t.verification.subtitle}
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenPdfReader}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-bold transition-all"
            >
              <FileCheck className="w-4 h-4" />
              <span>{lang === 'en' ? 'Open Audit Reader' : 'فتح عارض التدقيق'}</span>
            </button>
            <a
              href="/downloads/media-buying-portfolio.pdf"
              download="mohamed-adam-meta-performance-audit.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold transition-all"
            >
              <FileText className="w-4 h-4" />
              <span>{lang === 'en' ? 'Download PDF' : 'تحميل PDF'}</span>
            </a>
          </div>
        </div>

        {/* 3 Verification Pillars */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 flex items-center justify-center shrink-0">
              <Binary className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-100 dark:text-slate-100 text-slate-900 mb-1.5">
                {t.verification.point1Title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t.verification.point1Desc}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0">
              <DollarSign className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-100 dark:text-slate-100 text-slate-900 mb-1.5">
                {t.verification.point2Title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t.verification.point2Desc}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-100 dark:text-slate-100 text-slate-900 mb-1.5">
                {t.verification.point3Title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {t.verification.point3Desc}
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
