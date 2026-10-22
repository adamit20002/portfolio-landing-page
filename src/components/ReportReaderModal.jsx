import React, { useState, useEffect } from 'react';
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  FileDown, 
  Maximize2, 
  ZoomIn, 
  ZoomOut,
  FileText
} from 'lucide-react';

export function ReportReaderModal({ isOpen, onClose, lang, t }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 24;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') setCurrentPage(p => Math.min(totalPages, p + 1));
      if (e.key === 'ArrowLeft') setCurrentPage(p => Math.max(1, p - 1));
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const pageStr = String(currentPage).padStart(2, '0');
  const imageSrc = `/report-pages/page-${pageStr}.jpg`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/90 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-5xl h-[92vh] flex flex-col bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden">
        
        {/* Modal Topbar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-800 bg-slate-950">
          <div className="flex items-center gap-3">
            <div className="p-1.5 rounded-lg bg-cyan-500/10 text-cyan-400">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-slate-100">
                {t.reader.title}
              </h3>
              <span className="text-xs text-slate-400">
                {t.reader.page} {currentPage} {t.reader.of}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/downloads/media-buying-portfolio.pdf"
              download="mohamed-adam-performance-record.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all"
            >
              <FileDown className="w-4 h-4 text-cyan-400" />
              <span className="hidden sm:inline">{t.reader.downloadPdf}</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Page Image Display Area */}
        <div className="flex-1 overflow-auto bg-slate-950 flex items-center justify-center p-4">
          <img
            src={imageSrc}
            alt={`Audit Report Page ${currentPage}`}
            className="max-h-full max-w-full object-contain rounded-lg shadow-2xl border border-slate-800"
          />
        </div>

        {/* Bottom Pagination Controller */}
        <div className="flex items-center justify-between px-6 py-3.5 border-t border-slate-800 bg-slate-950">
          <button
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
            disabled={currentPage === 1}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-4 h-4 rtl:rotate-180" />
            <span>{t.reader.prev}</span>
          </button>

          {/* Quick Page Jump Select */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">{t.reader.page}</span>
            <select
              value={currentPage}
              onChange={(e) => setCurrentPage(Number(e.target.value))}
              className="bg-slate-900 border border-slate-700 text-slate-200 text-xs font-bold rounded-lg px-2 py-1 focus:outline-none focus:border-cyan-500"
            >
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <option key={page} value={page}>
                  {page}
                </option>
              ))}
            </select>
            <span className="text-xs text-slate-400">{t.reader.of}</span>
          </div>

          <button
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
            disabled={currentPage === totalPages}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold disabled:opacity-40 disabled:cursor-not-allowed transition-all"
          >
            <span>{t.reader.next}</span>
            <ChevronRight className="w-4 h-4 rtl:rotate-180" />
          </button>
        </div>

      </div>
    </div>
  );
}
