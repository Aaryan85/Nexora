import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, AlertCircle, Loader2, ArrowRight } from 'lucide-react';

export default function ContactForm({ onOpenDemo, isDark }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    teamSize: '11-50',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) {
      errs.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      errs.fullName = 'Please enter at least 2 characters';
    }

    if (!formData.email.trim()) {
      errs.email = 'Work email is required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email.trim())) {
      errs.email = 'Please provide a valid work email (e.g. name@company.com)';
    }

    if (!formData.company.trim()) {
      errs.company = 'Company name is required';
    }

    if (!formData.message.trim()) {
      errs.message = 'Please provide a brief note on what metrics or tools you need to connect';
    } else if (formData.message.trim().length < 8) {
      errs.message = 'Please provide at least 8 characters';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      fullName: '',
      email: '',
      company: '',
      teamSize: '11-50',
      message: '',
    });
    setErrors({});
    setIsSubmitted(false);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 border-b border-light-border dark:border-dark-border bg-light-subtle/30 dark:bg-dark-subtle/20 dot-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Context */}
          <div className="lg:col-span-5 space-y-5">
            <span className="text-xs font-semibold uppercase tracking-wider text-light-muted dark:text-dark-muted block font-mono">
              // Demo Request
            </span>

            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-light-text dark:text-dark-text leading-tight">
              Ready to make better decisions?
            </h2>

            <p className="text-sm text-light-muted dark:text-dark-muted leading-relaxed">
              Schedule a personalized 15-minute walkthrough. We’ll show you how Nexora models your telemetry, flags churn risks, and provides executive clarity.
            </p>

            <div className="space-y-3.5 pt-4 border-t border-light-border dark:border-dark-border text-xs">
              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-light-text dark:text-dark-text mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-light-text dark:text-dark-text">Customized Sample Dashboard</h4>
                  <p className="text-light-muted dark:text-dark-muted mt-0.5">Explore your specific industry metrics pre-modeled.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-light-text dark:text-dark-text mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-light-text dark:text-dark-text">Direct Engineer Consultation</h4>
                  <p className="text-light-muted dark:text-dark-muted mt-0.5">Speak with a solutions architect about your data infrastructure.</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-light-text dark:text-dark-text mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-medium text-light-text dark:text-dark-text">Zero Commitment Trial</h4>
                  <p className="text-light-muted dark:text-dark-muted mt-0.5">Instant access to 14 days of Pro with full feature unlocking.</p>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-light-muted dark:text-dark-muted pt-2 font-mono">
              *Full client-side validation simulation with zero external trackers.
            </p>
          </div>

          {/* Right Column: Clean White / Dark Surface Form Card */}
          <div className="lg:col-span-7">
            <div className="rounded-lg border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface p-6 sm:p-8 shadow-elevated dark:shadow-dark-elevated">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  /* Success Confirmation Screen */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-10 text-center space-y-4"
                  >
                    <div className="w-10 h-10 rounded-full bg-light-subtle dark:bg-dark-subtle border border-light-border dark:border-dark-border text-light-text dark:text-dark-text flex items-center justify-center mx-auto">
                      <Check className="w-5 h-5" />
                    </div>

                    <h3 className="text-lg font-semibold text-light-text dark:text-dark-text">
                      Demo request received
                    </h3>

                    <p className="text-xs text-light-muted dark:text-dark-muted max-w-sm mx-auto leading-relaxed">
                      Thank you, <strong className="text-light-text dark:text-dark-text">{formData.fullName}</strong>. We've logged your request for <strong className="text-light-text dark:text-dark-text">{formData.company}</strong>. We will reach out to <strong className="text-light-text dark:text-dark-text">{formData.email}</strong> shortly.
                    </p>

                    <div className="p-3 rounded bg-light-subtle dark:bg-dark-subtle border border-light-border dark:border-dark-border text-[11px] text-light-muted dark:text-dark-muted max-w-xs mx-auto font-mono">
                      <span>Tracking reference: </span>
                      <span className="text-light-text dark:text-dark-text font-semibold">NX-849201</span>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={handleReset}
                        className="px-4 py-2 rounded-md bg-light-subtle hover:bg-neutral-200 dark:bg-dark-subtle dark:hover:bg-neutral-800 border border-light-border dark:border-dark-border text-xs font-medium text-light-text dark:text-dark-text transition-colors"
                      >
                        Submit another request
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  /* Clean Form */
                  <form key="form" onSubmit={handleSubmit} noValidate className="space-y-4">
                    <div>
                      <h3 className="text-base font-semibold text-light-text dark:text-dark-text">
                        Request a personalized demo
                      </h3>
                      <p className="text-xs text-light-muted dark:text-dark-muted mt-0.5">
                        Please provide your details below.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {/* Full Name */}
                      <div>
                        <label htmlFor="fullName" className="block text-xs font-medium text-light-text dark:text-dark-text mb-1">
                          Full Name <span className="text-light-muted dark:text-dark-muted">*</span>
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="Alex Morgan"
                          className={`w-full px-3 py-2 rounded-md bg-light-subtle dark:bg-dark-subtle border text-xs text-light-text dark:text-dark-text placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:bg-light-surface dark:focus:bg-dark-surface focus:border-light-text dark:focus:border-dark-text transition-colors ${
                            errors.fullName ? 'border-neutral-900 dark:border-neutral-100' : 'border-light-border dark:border-dark-border'
                          }`}
                        />
                        {errors.fullName && (
                          <p className="mt-1 text-[11px] text-light-text dark:text-dark-text font-mono flex items-center gap-1">
                            <AlertCircle className="w-3 h-3 flex-shrink-0" />
                            <span>{errors.fullName}</span>
                          </p>
                        )}
                      </div>

                      {/* Work Email */}
                      <div>
                        <label htmlFor="email" className="block text-xs font-medium text-light-text dark:text-dark-text mb-1">
                          Work Email <span className="text-light-muted dark:text-dark-muted">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="alex@company.com"
                          className={`w-full px-3 py-2 rounded-md bg-light-subtle dark:bg-dark-subtle border text-xs text-light-text dark:text-dark-text placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:bg-light-surface dark:focus:bg-dark-surface focus:border-light-text dark:focus:border-dark-text transition-colors ${
                            errors.email ? 'border-neutral-900 dark:border-neutral-100' : 'border-light-border dark:border-dark-border'
                          }`}
                        />
                        {errors.email && (
                          <p className="mt-1 text-[11px] text-light-text dark:text-dark-text font-mono flex items-center gap-1">
                            <AlertCircle className="w-3 h-3 flex-shrink-0" />
                            <span>{errors.email}</span>
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                      {/* Company Name */}
                      <div>
                        <label htmlFor="company" className="block text-xs font-medium text-light-text dark:text-dark-text mb-1">
                          Company Name <span className="text-light-muted dark:text-dark-muted">*</span>
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Acme Corp"
                          className={`w-full px-3 py-2 rounded-md bg-light-subtle dark:bg-dark-subtle border text-xs text-light-text dark:text-dark-text placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:bg-light-surface dark:focus:bg-dark-surface focus:border-light-text dark:focus:border-dark-text transition-colors ${
                            errors.company ? 'border-neutral-900 dark:border-neutral-100' : 'border-light-border dark:border-dark-border'
                          }`}
                        />
                        {errors.company && (
                          <p className="mt-1 text-[11px] text-light-text dark:text-dark-text font-mono flex items-center gap-1">
                            <AlertCircle className="w-3 h-3 flex-shrink-0" />
                            <span>{errors.company}</span>
                          </p>
                        )}
                      </div>

                      {/* Team Size */}
                      <div>
                        <label htmlFor="teamSize" className="block text-xs font-medium text-light-text dark:text-dark-text mb-1">
                          Team Size
                        </label>
                        <select
                          id="teamSize"
                          name="teamSize"
                          value={formData.teamSize}
                          onChange={handleChange}
                          className="w-full px-3 py-2 rounded-md bg-light-subtle dark:bg-dark-subtle border border-light-border dark:border-dark-border text-xs text-light-text dark:text-dark-text focus:outline-none focus:bg-light-surface dark:focus:bg-dark-surface focus:border-light-text dark:focus:border-dark-text transition-colors"
                        >
                          <option value="1-10">1 – 10 people</option>
                          <option value="11-50">11 – 50 people</option>
                          <option value="51-200">51 – 200 people</option>
                          <option value="200+">200+ people</option>
                        </select>
                      </div>
                    </div>

                    {/* Message / Primary Use Case */}
                    <div>
                      <label htmlFor="message" className="block text-xs font-medium text-light-text dark:text-dark-text mb-1">
                        What data sources or metrics do you want to monitor? <span className="text-light-muted dark:text-dark-muted">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="e.g. We want to connect Stripe and PostgreSQL to monitor subscription churn and user cohorts."
                        className={`w-full px-3 py-2 rounded-md bg-light-subtle dark:bg-dark-subtle border text-xs text-light-text dark:text-dark-text placeholder-neutral-400 dark:placeholder-neutral-600 focus:outline-none focus:bg-light-surface dark:focus:bg-dark-surface focus:border-light-text dark:focus:border-dark-text transition-colors resize-none ${
                          errors.message ? 'border-neutral-900 dark:border-neutral-100' : 'border-light-border dark:border-dark-border'
                        }`}
                      />
                      {errors.message && (
                        <p className="mt-1 text-[11px] text-light-text dark:text-dark-text font-mono flex items-center gap-1">
                          <AlertCircle className="w-3 h-3 flex-shrink-0" />
                          <span>{errors.message}</span>
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-2.5 px-4 rounded-md bg-light-text text-white hover:bg-neutral-800 dark:bg-dark-text dark:text-dark-bg dark:hover:bg-neutral-200 text-xs font-medium transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-3.5 h-3.5 animate-spin text-white dark:text-dark-bg" />
                          <span>Scheduling session...</span>
                        </>
                      ) : (
                        <>
                          <span>Submit request</span>
                          <ArrowRight className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-600" />
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-between text-[11px] text-light-muted dark:text-dark-muted pt-1">
                      <span>✓ Encrypted transmission</span>
                      <span>✓ No credit card required</span>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
