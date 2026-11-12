import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar({ onOpenDemo, isDark, toggleTheme }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);

      const sections = ['hero', 'features', 'how-it-works', 'dashboard', 'pricing', 'about', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Features', href: '#features', id: 'features' },
    { name: 'How It Works', href: '#how-it-works', id: 'how-it-works' },
    { name: 'Showcase', href: '#dashboard', id: 'dashboard' },
    { name: 'Pricing', href: '#pricing', id: 'pricing' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'FAQ', href: '#faq', id: 'faq' },
  ];

  const scrollTo = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-light-bg/85 dark:bg-dark-bg/85 backdrop-blur-md border-b border-light-border dark:border-dark-border py-3 shadow-subtle dark:shadow-dark-subtle'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Nexora Wordmark */}
          <a
            href="#hero"
            onClick={(e) => scrollTo(e, '#hero')}
            className="flex items-center gap-2.5 focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-500 rounded"
            aria-label="Nexora Home"
          >
            <div className="w-7 h-7 rounded-md bg-light-text dark:bg-dark-text flex items-center justify-center transition-colors">
              <svg className="w-4 h-4 text-light-bg dark:text-dark-bg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M4 18L10 6L14 14L20 6" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="20" cy="6" r="1.5" fill="currentColor" />
              </svg>
            </div>
            <span className="font-semibold text-base tracking-tight text-light-text dark:text-dark-text">
              Nexora
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className={`text-xs font-medium transition-colors ${
                    isActive
                      ? 'text-light-text dark:text-dark-text font-semibold'
                      : 'text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Right Action: Theme Toggle + CTA buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-md text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text hover:bg-light-subtle dark:hover:bg-dark-subtle border border-transparent hover:border-light-border dark:hover:border-dark-border transition-colors"
              aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <a
              href="#pricing"
              onClick={(e) => scrollTo(e, '#pricing')}
              className="text-xs font-medium text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text transition-colors px-2 py-1.5"
            >
              Log in
            </a>

            <button
              onClick={onOpenDemo}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-white dark:text-dark-bg px-3.5 py-1.5 rounded-md bg-light-text dark:bg-dark-text hover:bg-neutral-800 dark:hover:bg-neutral-200 active:bg-neutral-900 transition-colors"
            >
              <span>Get started</span>
              <ArrowRight className="w-3 h-3 text-neutral-400 dark:text-neutral-600" />
            </button>
          </div>

          {/* Mobile Hamburger Toggle & Theme Toggle */}
          <div className="flex md:hidden items-center gap-1.5">
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-md text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>

            <button
              onClick={onOpenDemo}
              className="text-xs font-medium text-white dark:text-dark-bg px-2.5 py-1.5 rounded-md bg-light-text dark:bg-dark-text"
            >
              Get started
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text rounded-md transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="md:hidden bg-light-surface dark:bg-dark-surface border-b border-light-border dark:border-dark-border px-4 pt-3 pb-5 shadow-elevated dark:shadow-dark-elevated"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollTo(e, link.href)}
                  className="px-3 py-2 text-xs font-medium text-light-text dark:text-dark-text hover:bg-light-subtle dark:hover:bg-dark-subtle rounded-md transition-colors flex items-center justify-between"
                >
                  <span>{link.name}</span>
                  <span className="text-[11px] text-light-muted dark:text-dark-muted">→</span>
                </a>
              ))}
              <div className="h-px bg-light-border dark:bg-dark-border my-2" />
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo();
                }}
                className="w-full text-center py-2 px-3 rounded-md bg-light-text dark:bg-dark-text text-white dark:text-dark-bg text-xs font-medium"
              >
                Request Product Demo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
