import React from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Code, 
  Award, 
  Calendar, 
  MapPin, 
  FileDown, 
  CheckCircle2, 
  ExternalLink 
} from 'lucide-react';
import { careerTimeline, skillsList, credentialsData } from '../data';

export function CareerTimeline({ lang, t }) {
  return (
    <section id="career" className="py-24 relative overflow-hidden bg-slate-950/80 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold mb-3">
            <Briefcase className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'EXPERIENCE & STACK' : 'المسيرة والقدرات'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 text-slate-900 tracking-tight">
            {t.career.title}
          </h2>
          <p className="mt-3 text-base text-slate-400">
            {t.career.subtitle}
          </p>

          <div className="mt-6 flex justify-center">
            <a
              href="/downloads/mohamed-adam-cv.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-xs font-bold transition-all shadow-md"
            >
              <FileDown className="w-4 h-4 text-cyan-400" />
              <span>{t.nav.downloadCv}</span>
            </a>
          </div>
        </div>

        {/* 2-Column Layout: Timeline (left 7 cols) & Skills/Certifications (right 5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Career Timeline (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-bold text-slate-100 mb-6 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-cyan-400" />
              <span>{t.career.experienceTitle}</span>
            </h3>

            <div className="relative pl-6 rtl:pl-0 rtl:pr-6 border-l-2 rtl:border-l-0 rtl:border-r-2 border-slate-800 space-y-8">
              {careerTimeline.map((item, idx) => (
                <div key={idx} className="relative group">
                  
                  {/* Timeline bullet dot */}
                  <div className="absolute -left-[31px] rtl:-left-auto rtl:-right-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-cyan-500 ring-4 ring-slate-950 group-hover:scale-125 transition-transform" />

                  <div className="glass-card p-6 rounded-2xl border border-slate-800">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                      <span className="px-2.5 py-0.5 rounded-md bg-cyan-500/10 text-cyan-400 text-xs font-bold font-mono">
                        {lang === 'en' ? item.period : item.periodAr}
                      </span>
                      {item.badge && (
                        <span className="px-2.5 py-0.5 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
                          {item.badge}
                        </span>
                      )}
                    </div>

                    <h4 className="text-lg font-bold text-slate-100">
                      {lang === 'en' ? item.role : item.roleAr}
                    </h4>

                    <div className="text-xs text-slate-400 font-medium mb-4 flex items-center gap-2">
                      <span>{item.company}</span>
                      <span>·</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {item.location}
                      </span>
                    </div>

                    <ul className="space-y-2 text-xs text-slate-300 dark:text-slate-300 text-slate-600">
                      {(lang === 'en' ? item.bullets : item.bulletsAr).map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-start gap-2 leading-relaxed">
                          <span className="text-cyan-400 shrink-0 mt-0.5 font-bold">›</span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Skills & Tooling + Accreditations (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            
            {/* Skills & Competencies */}
            <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800 space-y-6">
              <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                <Code className="w-5 h-5 text-indigo-400" />
                <span>{t.career.skillsTitle}</span>
              </h3>

              <div className="space-y-5">
                {skillsList.map((skillGroup, sIdx) => (
                  <div key={sIdx}>
                    <h5 className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-2">
                      {lang === 'en' ? skillGroup.category : skillGroup.categoryAr}
                    </h5>
                    <div className="flex flex-wrap gap-1.5">
                      {skillGroup.items.map((skill, kIdx) => (
                        <span 
                          key={kIdx} 
                          className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Accreditations */}
            <div className="glass-panel p-6 sm:p-7 rounded-2xl border border-slate-800 space-y-5">
              <h3 className="text-lg font-bold text-slate-100 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-emerald-400" />
                <span>{t.career.certificationsTitle}</span>
              </h3>

              <div className="space-y-3">
                {credentialsData.map((cred, cIdx) => (
                  <div key={cIdx} className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 flex items-start justify-between gap-3">
                    <div>
                      <h4 className="text-xs font-bold text-slate-200">
                        {cred.title}
                      </h4>
                      <p className="text-[11px] text-slate-400 mt-0.5">
                        {cred.issuer}
                      </p>
                    </div>
                    <span className="shrink-0 px-2 py-0.5 rounded text-[10px] bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-bold">
                      {cred.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
