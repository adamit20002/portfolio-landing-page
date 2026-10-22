import React, { useState } from 'react';
import { 
  BarChart3, 
  Layers, 
  Award, 
  Calendar, 
  CheckCircle2, 
  Globe2, 
  HelpCircle,
  TrendingUp,
  MessageSquare,
  Users,
  Eye,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Percent,
  Search
} from 'lucide-react';
import { 
  industriesData, 
  topEngagements, 
  resultsMatrix, 
  annualSpend, 
  marketsDistribution, 
  placementSplit, 
  campaignObjectives,
  provenanceNotes
} from '../data';

export function PerformanceDashboard({ lang, t, onSelectImage }) {
  const [activeTab, setActiveTab] = useState('industries');
  const [selectedIndustry, setSelectedIndustry] = useState(industriesData[0].id);

  const currentIndustry = industriesData.find(i => i.id === selectedIndustry) || industriesData[0];

  return (
    <section id="performance" className="py-24 bg-slate-950/70 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold mb-3">
            <BarChart3 className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'VERIFIED MEDIA METRICS' : 'مؤشرات الأداء الموثقة'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 text-slate-900 tracking-tight">
            {t.performance.sectionTitle}
          </h2>
          <p className="mt-3 text-base text-slate-400">
            {t.performance.sectionSubtitle}
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-4 mb-10 border-b border-slate-800">
          <button
            onClick={() => setActiveTab('industries')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
              activeTab === 'industries'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>{t.performance.tabIndustries}</span>
          </button>

          <button
            onClick={() => setActiveTab('engagements')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
              activeTab === 'engagements'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            <Award className="w-4 h-4" />
            <span>{t.performance.tabEngagements}</span>
          </button>

          <button
            onClick={() => setActiveTab('results')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
              activeTab === 'results'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            <CheckCircle2 className="w-4 h-4" />
            <span>{t.performance.tabResults}</span>
          </button>

          <button
            onClick={() => setActiveTab('timeline')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
              activeTab === 'timeline'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>{t.performance.tabTimeline}</span>
          </button>

          <button
            onClick={() => setActiveTab('geography')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
              activeTab === 'geography'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            <Globe2 className="w-4 h-4" />
            <span>{t.performance.tabGeography}</span>
          </button>

          <button
            onClick={() => setActiveTab('methodology')}
            className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 whitespace-nowrap transition-all ${
              activeTab === 'methodology'
                ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
            }`}
          >
            <HelpCircle className="w-4 h-4" />
            <span>{t.performance.tabMethodology}</span>
          </button>
        </div>

        {/* TAB 1: 16 INDUSTRIES */}
        {activeTab === 'industries' && (
          <div className="space-y-8">
            
            {/* Top Interactive Industry Spotlight */}
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800">
              <div className="flex flex-col lg:flex-row gap-8 items-start">
                
                {/* Left details */}
                <div className="lg:w-1/2 space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-xs font-bold">
                      {lang === 'en' ? 'Industry Detail' : 'تفاصيل القطاع'}
                    </span>
                    <span className="text-xl font-black text-cyan-400">
                      ${currentIndustry.spend.toLocaleString()} USD ({currentIndustry.share})
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-100 dark:text-slate-100 text-slate-900">
                    {lang === 'en' ? currentIndustry.name : currentIndustry.nameAr}
                  </h3>

                  <p className="text-sm text-slate-300 dark:text-slate-300 text-slate-600 leading-relaxed">
                    {lang === 'en' ? currentIndustry.description : currentIndustry.descriptionAr}
                  </p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                    <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                      <span className="text-[11px] text-slate-400 block">{t.performance.brandsHeader}</span>
                      <span className="text-base font-bold text-slate-100">{currentIndustry.brands}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                      <span className="text-[11px] text-slate-400 block">{t.performance.accountsHeader}</span>
                      <span className="text-base font-bold text-slate-100">{currentIndustry.accounts}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                      <span className="text-[11px] text-slate-400 block">{t.performance.campaignsHeader}</span>
                      <span className="text-base font-bold text-slate-100">{currentIndustry.campaigns}</span>
                    </div>
                    <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800">
                      <span className="text-[11px] text-slate-400 block">{t.performance.impressionsHeader}</span>
                      <span className="text-base font-bold text-cyan-400">{currentIndustry.impressions}</span>
                    </div>
                  </div>

                  {/* Top Brands in Industry */}
                  <div className="pt-2">
                    <span className="text-xs font-semibold text-slate-400 block mb-2">
                      {lang === 'en' ? 'Key Identified Brands:' : 'أبرز العلامات الموثقة:'}
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {currentIndustry.topBrands.map(brand => (
                        <span key={brand} className="px-2.5 py-1 rounded-lg bg-slate-800 text-slate-200 text-xs font-medium border border-slate-700">
                          {brand}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Visuals */}
                <div className="lg:w-1/2 w-full grid grid-cols-2 gap-3">
                  {currentIndustry.photos.map((photo, idx) => (
                    <div 
                      key={idx}
                      onClick={() => onSelectImage(photo, `${currentIndustry.name} - Context Visual ${idx + 1}`)}
                      className="group relative rounded-xl overflow-hidden aspect-[4/3] bg-slate-900 border border-slate-800 cursor-pointer shadow-md hover:border-cyan-500/40 transition-all"
                    >
                      <img 
                        src={photo} 
                        alt={`${currentIndustry.name} visual ${idx + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-slate-950/20 group-hover:bg-transparent transition-colors" />
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* All 16 Industries Interactive Selector Table */}
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 overflow-hidden shadow-xl">
              <div className="p-4 sm:p-5 border-b border-slate-800 flex items-center justify-between">
                <span className="text-sm font-bold text-slate-200">
                  {lang === 'en' ? 'Select an Industry to View Evidence:' : 'اختر القطاع لعرض التفاصيل والأدلة:'}
                </span>
                <span className="text-xs text-slate-400">
                  {lang === 'en' ? 'Ranked by verified media spend' : 'مرتبة حسب حجم الإنفاق الإعلاني الموثق'}
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left rtl:text-right text-xs sm:text-sm">
                  <thead className="bg-slate-900 text-slate-400 text-xs uppercase font-semibold border-b border-slate-800">
                    <tr>
                      <th className="py-3.5 px-4">{t.performance.industrySpendHeader}</th>
                      <th className="py-3.5 px-4">{t.performance.spendHeader}</th>
                      <th className="py-3.5 px-4">{t.performance.shareHeader}</th>
                      <th className="py-3.5 px-4">{t.performance.brandsHeader}</th>
                      <th className="py-3.5 px-4">{t.performance.accountsHeader}</th>
                      <th className="py-3.5 px-4">{t.performance.campaignsHeader}</th>
                      <th className="py-3.5 px-4">{t.performance.impressionsHeader}</th>
                      <th className="py-3.5 px-4">{t.performance.clicksHeader}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-medium">
                    {industriesData.map((ind) => {
                      const isSelected = selectedIndustry === ind.id;
                      return (
                        <tr 
                          key={ind.id}
                          onClick={() => setSelectedIndustry(ind.id)}
                          className={`cursor-pointer transition-colors ${
                            isSelected 
                              ? 'bg-cyan-500/15 text-cyan-300 font-bold border-l-4 rtl:border-l-0 rtl:border-r-4 border-cyan-400' 
                              : 'hover:bg-slate-800/40 text-slate-300'
                          }`}
                        >
                          <td className="py-3.5 px-4 font-semibold text-slate-100 flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-cyan-400' : 'bg-slate-600'}`} />
                            <span>{lang === 'en' ? ind.name : ind.nameAr}</span>
                          </td>
                          <td className="py-3.5 px-4 font-mono font-bold text-cyan-400">
                            ${ind.spend.toLocaleString()}
                          </td>
                          <td className="py-3.5 px-4 text-slate-400 font-mono">
                            {ind.share}
                          </td>
                          <td className="py-3.5 px-4 text-slate-300">
                            {ind.brands}
                          </td>
                          <td className="py-3.5 px-4 text-slate-400">
                            {ind.accounts}
                          </td>
                          <td className="py-3.5 px-4 text-slate-400">
                            {ind.campaigns}
                          </td>
                          <td className="py-3.5 px-4 text-slate-400 font-mono">
                            {ind.impressions}
                          </td>
                          <td className="py-3.5 px-4 text-slate-400 font-mono">
                            {ind.clicks}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        )}

        {/* TAB 2: SELECTED ENGAGEMENTS & CASE STUDIES */}
        {activeTab === 'engagements' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {topEngagements.map(eng => (
              <div key={eng.id} className="glass-card p-6 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2.5 py-1 rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 text-[11px] font-bold">
                      {eng.badge}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">{eng.industry}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-100 dark:text-slate-100 text-slate-900 mb-1">
                    {eng.name}
                  </h3>

                  <div className="text-2xl font-black text-cyan-400 tracking-tight font-mono mb-4">
                    {eng.spend} <span className="text-xs font-normal text-slate-400">USD</span>
                  </div>

                  <p className="text-xs text-slate-300 dark:text-slate-300 text-slate-600 leading-relaxed mb-6">
                    {lang === 'en' ? eng.summary : eng.summaryAr}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-slate-800 text-xs">
                  <div className="flex justify-between text-slate-400">
                    <span>{lang === 'en' ? 'Impressions' : 'الظهور'}:</span>
                    <span className="font-mono text-slate-200">{eng.impressions}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>{lang === 'en' ? 'Clicks Driven' : 'النقرات'}:</span>
                    <span className="font-mono text-slate-200">{eng.clicks}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>{lang === 'en' ? 'Blended CTR' : 'معدل النقر'}:</span>
                    <span className="font-mono text-emerald-400 font-bold">{eng.ctr}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>{lang === 'en' ? 'Average CPC' : 'تكلفة النقرة'}:</span>
                    <span className="font-mono text-cyan-400 font-bold">{eng.cpc}</span>
                  </div>
                  <div className="flex justify-between text-slate-400">
                    <span>{lang === 'en' ? 'Conversations' : 'المحادثات'}:</span>
                    <span className="font-mono text-amber-400 font-bold">{eng.messages}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TAB 3: SPEND OVER TIME */}
        {activeTab === 'timeline' && (
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {annualSpend.map(item => (
                <div key={item.year} className="glass-card p-6 rounded-2xl relative overflow-hidden">
                  <div className="text-xs font-bold text-cyan-400 uppercase tracking-wider mb-1">
                    {item.year}
                  </div>
                  <div className="text-3xl font-black text-slate-100 font-mono mb-2">
                    {item.spendUsd}
                  </div>
                  <div className="text-xs text-slate-400 font-mono mb-4">
                    {item.spendEgp} EGP · {item.accounts} {lang === 'en' ? 'Active Accounts' : 'حسابات نشطة'}
                  </div>

                  <div className="space-y-1.5 pt-3 border-t border-slate-800 text-xs">
                    <div className="flex justify-between text-slate-400">
                      <span>{lang === 'en' ? 'Impressions' : 'الظهور'}:</span>
                      <span className="font-mono text-slate-200">{item.impressions}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>{lang === 'en' ? 'Clicks' : 'النقرات'}:</span>
                      <span className="font-mono text-slate-200">{item.clicks}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>{lang === 'en' ? 'Average CPM' : 'متوسط CPM'}:</span>
                      <span className="font-mono text-emerald-400">{item.cpm}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>{lang === 'en' ? 'Average CPC' : 'متوسط CPC'}:</span>
                      <span className="font-mono text-cyan-400">{item.cpc}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Visual Progress Bar Distribution */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800">
              <h4 className="text-base font-bold text-slate-100 mb-3">
                {lang === 'en' ? 'Yearly Media Spend Trajectory' : 'منحنى نمو وتوزيع الإنفاق الإعلاني السنوي'}
              </h4>
              <div className="h-5 rounded-full overflow-hidden bg-slate-900 flex">
                <div style={{ width: '16%' }} className="bg-cyan-500 h-full" title="2023: $40,264 (16%)" />
                <div style={{ width: '28%' }} className="bg-blue-600 h-full" title="2024: $70,613 (28%)" />
                <div style={{ width: '28%' }} className="bg-indigo-600 h-full" title="2025: $70,567 (28%)" />
                <div style={{ width: '28%' }} className="bg-emerald-500 h-full" title="2026: $67,798 (28%)" />
              </div>
              <div className="mt-3 flex flex-wrap items-center justify-between text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-sm bg-cyan-500 inline-block" />
                  <span>2023 ($40,264)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-sm bg-blue-600 inline-block" />
                  <span>2024 ($70,613)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-sm bg-indigo-600 inline-block" />
                  <span>2025 ($70,567)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-sm bg-emerald-500 inline-block" />
                  <span>2026 ($67,798)</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 4: RESULTS DELIVERED */}
        {activeTab === 'results' && (
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 overflow-hidden shadow-xl">
              <div className="p-4 sm:p-5 border-b border-slate-800">
                <h3 className="text-base font-bold text-slate-100">
                  {lang === 'en' ? 'All 17 Attributed Conversion & Delivery Actions (Meta Marketing API)' : 'كافة إجراءات التحويل والتسليم الـ 17 الموثقة عبر API'}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {lang === 'en' 
                    ? 'Platform-attributed counts across all managed accounts in the reportable window. Blended cost per result reflects total spend divided by action count.' 
                    : 'البيانات الرسمية المنسوبة من منصة ميتا عبر كافة الحسابات. تكلفة الوحدة تمثل إجمالي الإنفاق مقسوماً على عدد الإجراءات.'}
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left rtl:text-right text-xs sm:text-sm">
                  <thead className="bg-slate-900 text-slate-400 text-xs uppercase font-semibold border-b border-slate-800">
                    <tr>
                      <th className="py-3.5 px-4">{lang === 'en' ? 'Result Action' : 'نوع الإجراء'}</th>
                      <th className="py-3.5 px-4">{lang === 'en' ? 'Objective Category' : 'التصنيف'}</th>
                      <th className="py-3.5 px-4">{lang === 'en' ? 'Total Volume' : 'العدد الكلي'}</th>
                      <th className="py-3.5 px-4">{lang === 'en' ? 'Blended Cost / Result' : 'تكلفة الإجراء (USD)'}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/60 font-medium">
                    {resultsMatrix.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-800/40 text-slate-300">
                        <td className="py-3 px-4 font-semibold text-slate-100">
                          {lang === 'en' ? item.action : item.actionAr}
                        </td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-0.5 rounded text-[11px] bg-slate-800 text-slate-300 border border-slate-700">
                            {item.category}
                          </span>
                        </td>
                        <td className="py-3 px-4 font-mono font-bold text-cyan-400">
                          {item.volume}
                        </td>
                        <td className="py-3 px-4 font-mono font-bold text-slate-200">
                          {item.cpr}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* TAB 5: MARKETS & CHANNELS */}
        {activeTab === 'geography' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Top Geographic Markets */}
            <div className="glass-panel p-6 rounded-2xl border border-slate-800">
              <h3 className="text-lg font-bold text-slate-100 mb-2">
                {lang === 'en' ? 'Top Markets by Verified Spend' : 'أكبر الأسواق الجغرافية بحجم الإنفاق'}
              </h3>
              <p className="text-xs text-slate-400 mb-6">
                {lang === 'en' ? '114 countries reached across global campaigns, concentrated heavily in Egypt and GCC.' : 'تم الوصول إلى 114 دولة حول العالم مع تركز رئيسي في مصر ودول مجلس التعاون الخليجي.'}
              </p>

              <div className="space-y-4">
                {marketsDistribution.map((m, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-slate-200">{lang === 'en' ? m.country : m.countryAr}</span>
                      <span className="font-mono text-cyan-400">${m.spend.toLocaleString()} USD ({m.share})</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
                        style={{ width: `${Math.min(100, (m.spend / 161649) * 100)}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Placements & Objectives */}
            <div className="space-y-6">
              
              {/* Placements Card */}
              <div className="glass-panel p-6 rounded-2xl border border-slate-800">
                <h3 className="text-lg font-bold text-slate-100 mb-2">
                  {lang === 'en' ? 'Platform Placement Split' : 'توزيع منصات العرض الإعلاني'}
                </h3>
                <div className="mt-4 space-y-3">
                  {placementSplit.map(p => (
                    <div key={p.channel} className="space-y-1">
                      <div className="flex justify-between text-xs">
                        <span className="font-medium text-slate-300">{p.channel}</span>
                        <span className="font-mono font-bold text-slate-100">{p.share}%</span>
                      </div>
                      <div className="h-2 rounded-full bg-slate-800 overflow-hidden">
                        <div 
                          className="h-full rounded-full" 
                          style={{ width: `${p.share}%`, backgroundColor: p.color }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Objectives */}
              <div className="glass-panel p-6 rounded-2xl border border-slate-800">
                <h3 className="text-lg font-bold text-slate-100 mb-2">
                  {lang === 'en' ? 'Top Campaign Objectives Built' : 'أبرز الأهداف الإعلانية المنفذة'}
                </h3>
                <p className="text-xs text-slate-400 mb-4">
                  {lang === 'en' ? '3,514 total campaigns built and optimized.' : '3,514 حملة إعلانية تم بناؤها وتحسينها.'}
                </p>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {campaignObjectives.slice(0, 6).map(obj => (
                    <div key={obj.name} className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 flex justify-between items-center">
                      <span className="text-slate-300 truncate">{obj.name}</span>
                      <span className="font-mono font-bold text-cyan-400 ml-2">{obj.count}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>
        )}

        {/* TAB 6: METHODOLOGY */}
        {activeTab === 'methodology' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {provenanceNotes.map((note, idx) => (
              <div key={idx} className="glass-card p-6 rounded-2xl border border-slate-800">
                <h3 className="text-base font-bold text-cyan-400 mb-2">
                  {lang === 'en' ? note.title : note.titleAr}
                </h3>
                <p className="text-xs text-slate-300 dark:text-slate-300 text-slate-600 leading-relaxed">
                  {lang === 'en' ? note.text : note.textAr}
                </p>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
