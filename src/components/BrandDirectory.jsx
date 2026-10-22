import React, { useState, useEffect } from 'react';
import { Search, Filter, Layers, Users, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';

export function BrandDirectory({ lang, t }) {
  const [brands, setBrands] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('ALL');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  useEffect(() => {
    fetch('/documents/brands.json')
      .then(res => res.json())
      .then(data => setBrands(data))
      .catch(err => console.error("Error loading brands:", err));
  }, []);

  const industries = ['ALL', ...Array.from(new Set(brands.map(b => b.industry).filter(Boolean)))];

  const filteredBrands = brands.filter(brand => {
    const matchesSearch = 
      brand.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      brand.industry.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesIndustry = selectedIndustry === 'ALL' || brand.industry === selectedIndustry;
    return matchesSearch && matchesIndustry;
  });

  const totalPages = Math.ceil(filteredBrands.length / itemsPerPage) || 1;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedBrands = filteredBrands.slice(startIndex, startIndex + itemsPerPage);

  const handleIndustryChange = (ind) => {
    setSelectedIndustry(ind);
    setCurrentPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  return (
    <section id="brands" className="py-24 bg-slate-950/60 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold mb-3">
            <Users className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'PORTFOLIO DIRECTORY' : 'دليل عملاء الحسابات'}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 dark:text-slate-100 text-slate-900 tracking-tight">
            {t.brands.title}
          </h2>
          <p className="mt-3 text-base text-slate-400">
            {t.brands.subtitle}
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
          
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 rtl:left-auto rtl:right-3.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder={t.brands.searchPlaceholder}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-10 pr-4 py-2.5 rtl:pl-4 rtl:pr-10 text-xs sm:text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
          </div>

          {/* Industry Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 text-xs">
            {industries.slice(0, 7).map(ind => (
              <button
                key={ind}
                onClick={() => handleIndustryChange(ind)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-all ${
                  selectedIndustry === ind
                    ? 'bg-cyan-500 text-white font-bold'
                    : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {ind === 'ALL' ? t.brands.filterAll : ind}
              </button>
            ))}
          </div>

        </div>

        {/* Results Counter */}
        <div className="text-xs text-slate-500 mb-6 flex justify-between items-center">
          <span>
            {t.brands.showing} <span className="text-slate-300 font-bold">{filteredBrands.length}</span> {t.brands.of} {brands.length} {t.brands.brandsText}
          </span>
          <span>
            {lang === 'en' ? `Page ${currentPage} of ${totalPages}` : `صفحة ${currentPage} من ${totalPages}`}
          </span>
        </div>

        {/* Brand Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {paginatedBrands.map((brand, idx) => (
            <div 
              key={`${brand.name}-${idx}`}
              className="glass-card p-5 rounded-xl border border-slate-800/80 hover:border-cyan-500/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-2 py-0.5 rounded text-[10px] bg-slate-800 text-slate-300 border border-slate-700/60 truncate max-w-[170px]">
                    {brand.industry}
                  </span>
                  <span className="text-base font-extrabold text-cyan-400 font-mono">
                    {brand.spend}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-100 dark:text-slate-100 text-slate-900 line-clamp-1 mb-3">
                  {brand.name}
                </h3>
              </div>

              <div className="grid grid-cols-3 gap-2 pt-3 border-t border-slate-800/70 text-[11px]">
                <div>
                  <span className="text-slate-500 block">{lang === 'en' ? 'Campaigns' : 'الحملات'}</span>
                  <span className="font-semibold text-slate-300">{brand.campaigns}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">{lang === 'en' ? 'Impressions' : 'الظهور'}</span>
                  <span className="font-semibold text-slate-300 truncate font-mono">{brand.impressions}</span>
                </div>
                <div>
                  <span className="text-slate-500 block">{lang === 'en' ? 'Clicks' : 'النقرات'}</span>
                  <span className="font-semibold text-slate-300 truncate font-mono">{brand.clicks}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Navigation */}
        {totalPages > 1 && (
          <div className="mt-10 flex items-center justify-center gap-3">
            <button
              onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="p-2 rounded-lg border border-slate-800 bg-slate-900 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800"
            >
              <ChevronLeft className="w-5 h-5 rtl:rotate-180" />
            </button>

            <span className="text-xs font-semibold text-slate-400">
              {currentPage} / {totalPages}
            </span>

            <button
              onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="p-2 rounded-lg border border-slate-800 bg-slate-900 text-slate-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-800"
            >
              <ChevronRight className="w-5 h-5 rtl:rotate-180" />
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
