import React, { useEffect } from 'react';
import { X, ExternalLink } from 'lucide-react';

export function ImageModal({ imageSrc, imageLabel, onClose }) {
  useEffect(() => {
    if (!imageSrc) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [imageSrc, onClose]);

  if (!imageSrc) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/95 backdrop-blur-md animate-fade-in"
      onClick={onClose}
    >
      <div 
        className="relative max-w-6xl max-h-[92vh] flex flex-col bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 py-3 border-b border-slate-800 bg-slate-950">
          <span className="text-sm font-bold text-slate-200 truncate">
            {imageLabel || 'Interface Inspection'}
          </span>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="overflow-auto p-2 bg-slate-950 flex items-center justify-center">
          <img
            src={imageSrc}
            alt={imageLabel || 'Inspect'}
            className="max-h-[82vh] max-w-full object-contain rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
