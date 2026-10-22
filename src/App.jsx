import React, { useState, useEffect } from 'react';
import { translations } from './translations';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VerifiedRibbon } from './components/VerifiedRibbon';
import { SaasShowcase } from './components/SaasShowcase';
import { PerformanceDashboard } from './components/PerformanceDashboard';
import { GrowthEstimator } from './components/GrowthEstimator';
import { BrandDirectory } from './components/BrandDirectory';
import { CareerTimeline } from './components/CareerTimeline';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ReportReaderModal } from './components/ReportReaderModal';
import { ImageModal } from './components/ImageModal';

export default function App() {
  const [lang, setLang] = useState('en');
  const [theme, setTheme] = useState('dark');
  const [isPdfReaderOpen, setIsPdfReaderOpen] = useState(false);
  const [activeZoomImage, setActiveZoomImage] = useState(null);

  const t = translations[lang];

  useEffect(() => {
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const handleSelectImage = (src, label) => {
    setActiveZoomImage({ src, label });
  };

  return (
    <div className="min-h-screen bg-slate-950 dark:bg-slate-950 text-slate-100 dark:text-slate-100 transition-colors duration-300">
      
      {/* Top Fixed Navbar */}
      <Navbar
        lang={lang}
        setLang={setLang}
        theme={theme}
        setTheme={setTheme}
        t={t}
        onOpenPdfReader={() => setIsPdfReaderOpen(true)}
      />

      {/* Main Page Flow */}
      <main>
        <Hero
          lang={lang}
          t={t}
          onOpenPdfReader={() => setIsPdfReaderOpen(true)}
        />

        <VerifiedRibbon
          lang={lang}
          t={t}
          onOpenPdfReader={() => setIsPdfReaderOpen(true)}
        />

        <SaasShowcase
          lang={lang}
          t={t}
          onSelectImage={handleSelectImage}
        />

        <PerformanceDashboard
          lang={lang}
          t={t}
          onSelectImage={handleSelectImage}
        />

        <GrowthEstimator
          lang={lang}
          t={t}
        />

        <BrandDirectory
          lang={lang}
          t={t}
        />

        <CareerTimeline
          lang={lang}
          t={t}
        />

        <ContactSection
          lang={lang}
          t={t}
        />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        t={t}
        onOpenPdfReader={() => setIsPdfReaderOpen(true)}
      />

      {/* Modals */}
      <ReportReaderModal
        isOpen={isPdfReaderOpen}
        onClose={() => setIsPdfReaderOpen(false)}
        lang={lang}
        t={t}
      />

      <ImageModal
        imageSrc={activeZoomImage?.src}
        imageLabel={activeZoomImage?.label}
        onClose={() => setActiveZoomImage(null)}
      />

    </div>
  );
}
