import React, { useState } from 'react';
import { 
  Calculator, 
  Sparkles, 
  TrendingUp, 
  MessageSquare, 
  Target, 
  DollarSign, 
  Layers, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import confetti from 'canvas-confetti';

const benchmarkModels = {
  ecommerce: {
    name: "E-Commerce & Retail",
    nameAr: "التجارة الإلكترونية والتجزئة",
    cpmBase: 1.15,
    ctrBase: 3.5,
    msgRate: 0.05,
    convRate: 0.022,
    mix: "60% Sales / Purchases · 25% Messaging / WhatsApp · 15% Retargeting"
  },
  fashion: {
    name: "Fashion & Luxury Apparel",
    nameAr: "الأزياء والملابس الفاخرة",
    cpmBase: 1.05,
    ctrBase: 4.8,
    msgRate: 0.065,
    convRate: 0.028,
    mix: "50% Catalog Sales · 35% Social DMs & WhatsApp · 15% Reels Awareness"
  },
  realestate: {
    name: "Real Estate & Property",
    nameAr: "العقارات والاستثمار العقاري",
    cpmBase: 3.65,
    ctrBase: 1.35,
    msgRate: 0.025,
    convRate: 0.015,
    mix: "55% Qualified Instant Forms · 30% Messaging Lead Flow · 15% Video Proof"
  },
  fnb: {
    name: "Food & Beverage / Restaurants",
    nameAr: "المطاعم والأغذية والحلويات",
    cpmBase: 0.95,
    ctrBase: 3.8,
    msgRate: 0.075,
    convRate: 0.035,
    mix: "65% WhatsApp Direct Orders · 20% Local Reach & Footfall · 15% TikTok UGC"
  },
  healthcare: {
    name: "Healthcare & Specialist Clinics",
    nameAr: "العيادات والمراكز الطبية",
    cpmBase: 1.45,
    ctrBase: 2.8,
    msgRate: 0.055,
    convRate: 0.024,
    mix: "50% Appointment Messaging · 35% Doctor Authority Video · 15% Clinic Leads"
  },
  b2b: {
    name: "Industrial & B2B Manufacturing",
    nameAr: "الصناعة وحلول B2B والشركات",
    cpmBase: 1.85,
    ctrBase: 2.2,
    msgRate: 0.035,
    convRate: 0.018,
    mix: "50% WhatsApp RFQ Inquiries · 35% Instant Lead Forms · 15% LinkedIn Retargeting"
  }
};

const marketMultipliers = {
  egypt: { name: "Egypt", nameAr: "مصر", cpmFactor: 0.75, curRate: 50.5 },
  saudi: { name: "Saudi Arabia (KSA)", nameAr: "المملكة العربية السعودية", cpmFactor: 2.2, curRate: 3.75 },
  qatar: { name: "Qatar", nameAr: "قطر", cpmFactor: 2.1, curRate: 3.64 },
  uae: { name: "United Arab Emirates", nameAr: "الإمارات", cpmFactor: 2.4, curRate: 3.67 },
  us: { name: "United States / Global", nameAr: "الولايات المتحدة / عالمي", cpmFactor: 4.5, curRate: 1.0 }
};

export function GrowthEstimator({ lang, t }) {
  const [selectedVertical, setSelectedVertical] = useState('ecommerce');
  const [selectedMarket, setSelectedMarket] = useState('egypt');
  const [budget, setBudget] = useState(2500);

  const model = benchmarkModels[selectedVertical];
  const market = marketMultipliers[selectedMarket];

  const effectiveCpm = model.cpmBase * market.cpmFactor;
  const projectedImpressions = Math.round((budget / effectiveCpm) * 1000);
  const projectedClicks = Math.round(projectedImpressions * (model.ctrBase / 100));
  const effectiveCpc = budget / (projectedClicks || 1);
  const projectedMessages = Math.round(projectedClicks * model.msgRate);
  const projectedConversions = Math.round(projectedClicks * model.convRate);

  const handleCelebrate = () => {
    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.7 }
    });
  };

  return (
    <section id="estimator" className="py-24 relative overflow-hidden bg-slate-950/90 border-t border-slate-900">
      
      {/* Background radial glow */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>{t.estimator.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 text-slate-900 tracking-tight">
            {t.estimator.title}
          </h2>
          <p className="mt-3 text-base text-slate-400">
            {t.estimator.subtitle}
          </p>
        </div>

        {/* Interactive Estimator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column (5 cols) */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
            
            {/* Step 1: Industry Vertical */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                {t.estimator.selectIndustry}
              </label>
              <select
                value={selectedVertical}
                onChange={(e) => setSelectedVertical(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-cyan-500 font-semibold"
              >
                {Object.entries(benchmarkModels).map(([key, val]) => (
                  <option key={key} value={key}>
                    {lang === 'en' ? val.name : val.nameAr}
                  </option>
                ))}
              </select>
            </div>

            {/* Step 2: Target Market */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-2">
                {t.estimator.selectMarket}
              </label>
              <select
                value={selectedMarket}
                onChange={(e) => setSelectedMarket(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-sm text-slate-100 focus:outline-none focus:border-cyan-500 font-semibold"
              >
                {Object.entries(marketMultipliers).map(([key, val]) => (
                  <option key={key} value={key}>
                    {lang === 'en' ? val.name : val.nameAr}
                  </option>
                ))}
              </select>
            </div>

            {/* Step 3: Planned Monthly Budget Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  {t.estimator.monthlyBudget}
                </label>
                <div className="text-right">
                  <span className="text-xl font-black text-cyan-400 font-mono">
                    ${budget.toLocaleString()} USD
                  </span>
                  {selectedMarket === 'egypt' && (
                    <span className="block text-[11px] text-slate-400 font-mono">
                      ≈ {(budget * 50.5).toLocaleString()} EGP
                    </span>
                  )}
                  {selectedMarket === 'saudi' && (
                    <span className="block text-[11px] text-slate-400 font-mono">
                      ≈ {(budget * 3.75).toLocaleString()} SAR
                    </span>
                  )}
                </div>
              </div>

              <input
                type="range"
                min="500"
                max="25000"
                step="500"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono mt-1">
                <span>$500</span>
                <span>$10,000</span>
                <span>$25,000+</span>
              </div>
            </div>

            {/* Recommended Campaign Structure */}
            <div className="pt-4 border-t border-slate-800">
              <span className="text-xs font-bold text-slate-300 block mb-1">
                {t.estimator.recommendedMix}
              </span>
              <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-cyan-300 font-medium">
                {model.mix}
              </div>
            </div>

            <p className="text-[11px] text-slate-500 leading-normal">
              {t.estimator.disclaimer}
            </p>
          </div>

          {/* Outputs Column (7 cols) */}
          <div className="lg:col-span-7 space-y-5">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Projected Impressions */}
              <div className="glass-card p-6 rounded-2xl relative overflow-hidden">
                <div className="flex items-center justify-between text-slate-400 text-xs font-semibold mb-2">
                  <span>{t.estimator.estimatedImpressions}</span>
                  <Target className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="text-3xl font-black text-slate-100 font-mono">
                  {projectedImpressions.toLocaleString()}
                </div>
                <div className="mt-1 text-[11px] text-slate-400">
                  {t.estimator.estimatedCpm}: <span className="font-mono text-cyan-300 font-semibold">${effectiveCpm.toFixed(2)}</span>
                </div>
              </div>

              {/* Projected Clicks */}
              <div className="glass-card p-6 rounded-2xl relative overflow-hidden">
                <div className="flex items-center justify-between text-slate-400 text-xs font-semibold mb-2">
                  <span>{t.estimator.estimatedClicks}</span>
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-3xl font-black text-emerald-400 font-mono">
                  {projectedClicks.toLocaleString()}
                </div>
                <div className="mt-1 text-[11px] text-slate-400">
                  {t.estimator.estimatedCpc}: <span className="font-mono text-emerald-300 font-semibold">${effectiveCpc.toFixed(3)}</span> (CTR ~{model.ctrBase}%)
                </div>
              </div>

              {/* Estimated Messaging Convos */}
              <div className="glass-card p-6 rounded-2xl relative overflow-hidden">
                <div className="flex items-center justify-between text-slate-400 text-xs font-semibold mb-2">
                  <span>{t.estimator.estimatedMessages}</span>
                  <MessageSquare className="w-4 h-4 text-teal-400" />
                </div>
                <div className="text-3xl font-black text-teal-400 font-mono">
                  {projectedMessages.toLocaleString()}
                </div>
                <div className="mt-1 text-[11px] text-slate-400">
                  {lang === 'en' ? 'Direct WhatsApp & Messenger inquiries' : 'محادثات طلبات مباشرة عبر واتساب وميسنجر'}
                </div>
              </div>

              {/* Estimated Leads / Orders */}
              <div className="glass-card p-6 rounded-2xl relative overflow-hidden">
                <div className="flex items-center justify-between text-slate-400 text-xs font-semibold mb-2">
                  <span>{t.estimator.estimatedLeads}</span>
                  <ShieldCheck className="w-4 h-4 text-indigo-400" />
                </div>
                <div className="text-3xl font-black text-indigo-400 font-mono">
                  {projectedConversions.toLocaleString()}
                </div>
                <div className="mt-1 text-[11px] text-slate-400">
                  {lang === 'en' ? 'Qualified customer actions & checkouts' : 'عملاء محتملون وطلبات شراء مؤكدة'}
                </div>
              </div>

            </div>

            {/* Call to action panel */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-cyan-900/40 via-blue-900/30 to-slate-900 border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-bold text-white mb-1">
                  {lang === 'en' ? 'Ready to Scale with Verifiable Unit Economics?' : 'هل أنت جاهز لمضاعفة مبيعاتك بأرقام مدروسة؟'}
                </h4>
                <p className="text-xs text-slate-300">
                  {lang === 'en' ? 'Get a full custom media audit and budget allocation for your specific product.' : 'احصل على تدقيق إعلاني مخصص وتوزيع مالي دقيق لحملات علامتك التجارية.'}
                </p>
              </div>

              <a
                href={`https://wa.me/201006299068?text=Hello%20Mohamed,%20I%20used%20your%20Portfolio%20Growth%20Estimator%20for%20my%20brand%20(${model.name})%20with%20a%20budget%20of%20$${budget}%20and%20would%20like%20to%20discuss%20a%20tailored%20campaign.`}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleCelebrate}
                className="shrink-0 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 text-white font-bold text-xs shadow-lg shadow-emerald-500/20 hover:scale-105 transition-all flex items-center gap-2"
              >
                <span>{t.estimator.cta}</span>
                <ArrowRight className="w-4 h-4 rtl:rotate-180" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
