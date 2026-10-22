import React from 'react';
import { ShieldCheck, Heart, FileDown, ExternalLink, ArrowUp } from 'lucide-react';
import { operatorInfo } from '../data';

export function Footer({ lang, t, onOpenPdfReader }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-16 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-12 border-b border-slate-800/80">
          
          <div className="space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-white font-extrabold text-sm">
                MA
              </div>
              <span className="text-base font-bold text-slate-100">
                {lang === 'en' ? operatorInfo.name : operatorInfo.nameAr}
              </span>
            </div>
            <p className="text-slate-400 max-w-md text-xs leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-slate-300 font-medium">
            <a href="#overview" className="hover:text-cyan-400 transition-colors">{t.nav.overview}</a>
            <a href="#saas" className="hover:text-cyan-400 transition-colors">{t.nav.saas}</a>
            <a href="#performance" className="hover:text-cyan-400 transition-colors">{t.nav.performance}</a>
            <a href="#estimator" className="hover:text-cyan-400 transition-colors">{t.nav.estimator}</a>
            <a href="#brands" className="hover:text-cyan-400 transition-colors">{t.nav.brands}</a>
            <a href="#career" className="hover:text-cyan-400 transition-colors">{t.nav.career}</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">{t.nav.contact}</a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 text-slate-300 hover:text-white transition-all"
            title="Back to Top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} {t.footer.copyright}
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenPdfReader}
              className="hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>{lang === 'en' ? 'Meta API v21.0 Verified Audit' : 'سجل تدقيق ميتا الرسمي'}</span>
            </button>
            <span>·</span>
            <a
              href={operatorInfo.saasUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors flex items-center gap-1"
            >
              <span>Adams Analytics</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span>·</span>
            <a
              href="https://github.com/adamit20002"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-4 text-[10px] text-slate-600 text-center leading-normal">
          {t.footer.dataNotice}
        </div>

      </div>
    </footer>
  );
}
