import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MessageSquare } from 'lucide-react';
import { faqData } from '../data/faq';

export default function FAQ({ onOpenDemo, isDark }) {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 border-b border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-light-muted dark:text-dark-muted block mb-2 font-mono">
            // FAQ
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-light-text dark:text-dark-text leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-base text-light-muted dark:text-dark-muted leading-relaxed">
            Everything you need to know about Nexora, data connections, security compliance, and subscriptions.
          </p>
        </div>

        {/* Accordion Rows with Subtle Dividers */}
        <div className="divide-y divide-light-border dark:divide-dark-border border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface rounded-lg px-6 shadow-subtle dark:shadow-dark-subtle">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.id} className="py-4">
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between text-left focus:outline-none focus-visible:ring-1 focus-visible:ring-neutral-500 rounded py-1"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-medium text-light-text dark:text-dark-text">
                    {faq.question}
                  </span>
                  <div className={`p-1 rounded text-light-muted dark:text-dark-muted transition-transform duration-200 ${isOpen ? 'rotate-180 text-light-text dark:text-dark-text' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="pt-2 pb-2 text-xs text-light-muted dark:text-dark-muted leading-relaxed pr-6">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <div className="mt-8 rounded-lg border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface p-5 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-subtle dark:shadow-dark-subtle">
          <div>
            <h4 className="text-xs font-semibold text-light-text dark:text-dark-text">Have a question not listed here?</h4>
            <p className="text-[11px] text-light-muted dark:text-dark-muted mt-0.5">Our technical team is available for architectural consultations.</p>
          </div>
          <button
            onClick={onOpenDemo}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-light-subtle dark:bg-dark-subtle hover:bg-neutral-200 dark:hover:bg-neutral-800 border border-light-border dark:border-dark-border text-xs font-medium text-light-text dark:text-dark-text transition-colors whitespace-nowrap"
          >
            <MessageSquare className="w-3.5 h-3.5 text-light-muted dark:text-dark-muted" />
            <span>Contact solutions engineer</span>
          </button>
        </div>

      </div>
    </section>
  );
}
