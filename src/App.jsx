import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SocialProof from './components/SocialProof';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import DashboardPreview from './components/DashboardPreview';
import Pricing from './components/Pricing';
import About from './components/About';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import DemoModal from './components/DemoModal';
import Toast from './components/Toast';

export default function App() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('nexora-theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [toast, setToast] = useState({
    visible: false,
    message: '',
    type: 'info'
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('nexora-theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('nexora-theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const showToast = (message, type = 'info') => {
    setToast({ visible: true, message, type });
    setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 4000);
  };

  const handleOpenDemo = () => {
    setDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setDemoModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text relative selection:bg-neutral-800 selection:text-white dark:selection:bg-neutral-200 dark:selection:text-neutral-900 transition-colors duration-200">
      
      {/* Top Fixed Navigation Bar with Theme Toggle */}
      <Navbar 
        onOpenDemo={handleOpenDemo} 
        isDark={isDark} 
        toggleTheme={toggleTheme} 
      />

      {/* Main Content Sections with Selective Background Patterns */}
      <main>
        {/* Section A & B: Hero with Dot-Grid Background */}
        <Hero onOpenDemo={handleOpenDemo} isDark={isDark} />

        {/* Section C: Social Proof */}
        <SocialProof />

        {/* Section D: Features with Fine Grid Background */}
        <Features onOpenDemo={handleOpenDemo} isDark={isDark} />

        {/* Section E: How It Works Process */}
        <HowItWorks isDark={isDark} />

        {/* Section F: Live Interactive Dashboard Showcase on Contrasting Neutral Surface */}
        <DashboardPreview onOpenDemo={handleOpenDemo} isDark={isDark} />

        {/* Section G: Pricing with Toggle */}
        <Pricing onOpenDemo={handleOpenDemo} isDark={isDark} />

        {/* Section H: About & Mission */}
        <About isDark={isDark} />

        {/* Section I: FAQ Accordion */}
        <FAQ onOpenDemo={handleOpenDemo} isDark={isDark} />

        {/* Section J: Demo Request / Contact Form */}
        <ContactForm onOpenDemo={handleOpenDemo} isDark={isDark} />
      </main>

      {/* Section K: Footer */}
      <Footer onOpenDemo={handleOpenDemo} />

      {/* Interactive Global Demo Modal */}
      <DemoModal isOpen={demoModalOpen} onClose={handleCloseDemo} isDark={isDark} />

      {/* Notification Toast */}
      <Toast
        isVisible={toast.visible}
        message={toast.message}
        type={toast.type}
        onClose={() => setToast((prev) => ({ ...prev, visible: false }))}
      />
    </div>
  );
}
