import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Check, ArrowRight, Loader2 } from 'lucide-react';

export default function DemoModal({ isOpen, onClose, isDark }) {
  const [email, setEmail] = useState('');
  const [step, setStep] = useState('input'); // 'input' | 'creating' | 'ready'
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please provide a valid work email.');
      return;
    }
    setError('');
    setStep('creating');

    setTimeout(() => {
      setStep('ready');
    }, 1200);
  };

  const handleReset = () => {
    setStep('input');
    setEmail('');
    setError('');
    onClose();
  };

  const scrollTo = (href) => {
    onClose();
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
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleReset}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.98, y: 8 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-md rounded-lg bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border p-6 shadow-modal z-10"
        >
          {/* Close button */}
          <button
            onClick={handleReset}
            className="absolute top-4 right-4 p-1.5 rounded text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text hover:bg-light-subtle dark:hover:bg-dark-subtle transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-1.5 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-light-text dark:bg-dark-text" />
            <span className="text-[11px] font-medium font-mono uppercase tracking-wider text-light-muted dark:text-dark-muted">
              // Instant Sandbox
            </span>
          </div>

          {step === 'input' && (
            <div>
              <h3 className="text-xl font-semibold text-light-text dark:text-dark-text">
                Launch instant sandbox
              </h3>
              <p className="mt-1 text-xs text-light-muted dark:text-dark-muted leading-relaxed">
                Explore a pre-populated workspace with live telemetry, event logs, and SQL analytics.
              </p>

              <form onSubmit={handleSubmit} className="mt-5 space-y-3.5">
                <div>
                  <label htmlFor="modalEmail" className="block text-xs font-medium text-light-text dark:text-dark-text mb-1">
                    Work Email
                  </label>
                  <input
                    type="email"
                    id="modalEmail"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError('');
                    }}
                    placeholder="founder@company.com"
                    autoFocus
                    className="w-full px-3 py-2 rounded-md bg-light-subtle dark:bg-dark-subtle border border-light-border dark:border-dark-border text-xs text-light-text dark:text-dark-text placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:bg-light-surface dark:focus:bg-dark-surface focus:border-light-text dark:focus:border-dark-text transition-colors"
                  />
                  {error && <p className="text-light-text dark:text-dark-text font-mono text-xs mt-1">{error}</p>}
                </div>

                <div className="space-y-1.5 text-xs text-light-muted dark:text-dark-muted">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-light-text dark:text-dark-text" />
                    <span>Pre-loaded with 100,000 realistic event logs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-light-text dark:text-dark-text" />
                    <span>No credit card required</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-md bg-light-text text-white hover:bg-neutral-800 dark:bg-dark-text dark:text-dark-bg dark:hover:bg-neutral-200 text-xs font-medium transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Launch Workspace</span>
                  <ArrowRight className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-600" />
                </button>
              </form>

              <div className="mt-4 pt-3 border-t border-light-border dark:border-dark-border flex items-center justify-between text-[11px] text-light-muted dark:text-dark-muted">
                <span>Want to talk with an engineer?</span>
                <button
                  onClick={() => scrollTo('#contact')}
                  className="text-light-text dark:text-dark-text hover:underline font-medium"
                >
                  Book 15-min call →
                </button>
              </div>
            </div>
          )}

          {step === 'creating' && (
            <div className="py-8 text-center space-y-3">
              <Loader2 className="w-6 h-6 text-light-text dark:text-dark-text animate-spin mx-auto" />
              <h4 className="text-sm font-semibold text-light-text dark:text-dark-text">Provisioning sandbox container...</h4>
              <p className="text-xs text-light-muted dark:text-dark-muted max-w-xs mx-auto">
                Setting up virtual tenant, generating demo cohort records, and validating schemas.
              </p>
            </div>
          )}

          {step === 'ready' && (
            <div className="py-4 text-center space-y-3">
              <div className="w-9 h-9 rounded-full bg-light-subtle dark:bg-dark-subtle border border-light-border dark:border-dark-border text-light-text dark:text-dark-text flex items-center justify-center mx-auto">
                <Check className="w-5 h-5" />
              </div>
              <h4 className="text-base font-semibold text-light-text dark:text-dark-text">Workspace Ready</h4>
              <p className="text-xs text-light-muted dark:text-dark-muted max-w-sm mx-auto">
                Provisioned tenant <strong className="text-light-text dark:text-dark-text">nexora-sandbox</strong> for <span className="font-mono text-light-text dark:text-dark-text">{email}</span>.
              </p>

              <div className="p-3 rounded bg-light-subtle dark:bg-dark-subtle border border-light-border dark:border-dark-border text-left text-xs font-mono text-light-muted dark:text-dark-muted space-y-1">
                <div>Status: <span className="text-light-text dark:text-dark-text font-medium">active</span></div>
                <div>Plan: <span className="text-light-text dark:text-dark-text">Pro 14-Day Evaluation</span></div>
                <div>URL: <span className="text-light-text dark:text-dark-text">https://sandbox.nexora.io</span></div>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => scrollTo('#dashboard')}
                  className="w-full py-2 rounded-md bg-light-text text-white hover:bg-neutral-800 dark:bg-dark-text dark:text-dark-bg dark:hover:bg-neutral-200 text-xs font-medium transition-colors"
                >
                  View Showcase Dashboard Below
                </button>
                <button
                  onClick={handleReset}
                  className="w-full py-1.5 text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text text-xs transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
