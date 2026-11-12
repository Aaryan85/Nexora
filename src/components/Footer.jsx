import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer({ onOpenDemo }) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollTo = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const topOffset = 76;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - topOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="bg-[#171717] dark:bg-[#1B1B1B] text-[#A3A3A3] border-t border-neutral-800 dark:border-[#333333] pt-14 pb-10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Multi-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800 dark:border-[#333333]">
          
          {/* Brand Info (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#hero" onClick={(e) => scrollTo(e, '#hero')} className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-white text-black flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-black" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M4 18L10 6L14 14L20 6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="20" cy="6" r="1.5" fill="currentColor" />
                </svg>
              </div>
              <span className="font-semibold text-base text-white tracking-tight">Nexora</span>
            </a>

            <p className="text-xs text-[#A3A3A3] leading-relaxed max-w-sm">
              Turn your data into decisions. An intelligent business analytics platform designed to monitor metrics, predict trends, and align modern teams.
            </p>

            <div className="flex items-center gap-2 pt-1 text-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span className="text-neutral-200 font-mono text-[11px]">All systems operational (99.99%)</span>
            </div>

            <div className="text-[11px] text-[#737373] font-mono">
              Built for Sankar Group frontend internship evaluation.
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3 font-mono">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#features" onClick={(e) => scrollTo(e, '#features')} className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-it-works" onClick={(e) => scrollTo(e, '#how-it-works')} className="hover:text-white transition-colors">
                  How It Works
                </a>
              </li>
              <li>
                <a href="#dashboard" onClick={(e) => scrollTo(e, '#dashboard')} className="hover:text-white transition-colors">
                  Showcase
                </a>
              </li>
              <li>
                <a href="#pricing" onClick={(e) => scrollTo(e, '#pricing')} className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#about" onClick={(e) => scrollTo(e, '#about')} className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#faq" onClick={(e) => scrollTo(e, '#faq')} className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Platform Column */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3 font-mono">
              Platform
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="hover:text-white cursor-pointer transition-colors" onClick={onOpenDemo}>
                  Real-time Telemetry
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer transition-colors" onClick={onOpenDemo}>
                  Data Connectors
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer transition-colors" onClick={onOpenDemo}>
                  Cohort Intelligence
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer transition-colors" onClick={onOpenDemo}>
                  Executive Memos
                </span>
              </li>
              <li>
                <span className="hover:text-white cursor-pointer transition-colors" onClick={onOpenDemo}>
                  SOC2 Compliance
                </span>
              </li>
            </ul>
          </div>

          {/* Contact (Fictional Details) */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3 font-mono">
              Contact
            </h4>
            <div className="space-y-2 text-xs">
              <p className="text-[#A3A3A3]">
                100 Montgomery St, Suite 1400<br />
                San Francisco, CA 94104
              </p>
              <p className="text-[#A3A3A3]">
                contact@nexora-fictional.io
              </p>
              <p className="text-[#A3A3A3]">
                +1 (555) 019-2834
              </p>
              <div className="pt-1">
                <button
                  onClick={onOpenDemo}
                  className="px-2.5 py-1 rounded bg-neutral-800 hover:bg-neutral-700 text-xs text-white border border-neutral-700 transition-colors"
                >
                  Request Demo
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2 text-[#737373]">
            <span>© 2026 Nexora Inc. All rights reserved.</span>
            <span>•</span>
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Service</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-[#737373]">
              Monochrome Design System
            </span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white transition-colors"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
