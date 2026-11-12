import React, { useState } from 'react';
import { Check, ArrowRight, X } from 'lucide-react';
import { pricingPlans, featureComparison } from '../data/pricing';

export default function Pricing({ onOpenDemo, isDark }) {
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' | 'yearly'
  const [showComparison, setShowComparison] = useState(false);

  return (
    <section id="pricing" className="py-20 sm:py-28 border-b border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-semibold uppercase tracking-wider text-light-muted dark:text-dark-muted block mb-2 font-mono">
            // Transparent Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-light-text dark:text-dark-text leading-tight">
            Simple pricing. Powerful insights.
          </h2>
          <p className="mt-3 text-base text-light-muted dark:text-dark-muted leading-relaxed">
            Start completely free with zero risk, then scale to predictive AI intelligence as your business grows.
          </p>

          {/* Monthly / Yearly Billing Toggle */}
          <div className="mt-8 inline-flex items-center p-1 rounded-md bg-light-subtle dark:bg-dark-subtle border border-light-border dark:border-dark-border">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-3.5 py-1.5 rounded text-xs font-medium transition-all ${
                billingCycle === 'monthly'
                  ? 'bg-light-surface dark:bg-dark-surface text-light-text dark:text-dark-text shadow-subtle dark:shadow-dark-subtle font-semibold'
                  : 'text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('yearly')}
              className={`px-3.5 py-1.5 rounded text-xs font-medium transition-all flex items-center gap-1.5 ${
                billingCycle === 'yearly'
                  ? 'bg-light-surface dark:bg-dark-surface text-light-text dark:text-dark-text shadow-subtle dark:shadow-dark-subtle font-semibold'
                  : 'text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text'
              }`}
            >
              <span>Yearly</span>
              <span className="text-[10px] font-medium font-mono text-light-text dark:text-dark-text bg-light-highlight dark:bg-dark-highlight px-1.5 py-0.2 rounded border border-light-border dark:border-dark-border">
                -20%
              </span>
            </button>
          </div>

          <p className="text-[11px] text-light-muted dark:text-dark-muted mt-2">
            *Pricing figures are illustrative for demonstration purposes. No real payment required.
          </p>
        </div>

        {/* Pricing Cards Grid (2 Plans: Starter and Pro) */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {pricingPlans.map((plan) => {
            const isPro = plan.featured;
            const price = billingCycle === 'yearly' ? plan.yearlyPrice : plan.monthlyPrice;

            return (
              <div
                key={plan.id}
                className={`relative rounded-lg p-6 sm:p-8 bg-light-surface dark:bg-dark-surface border transition-all flex flex-col justify-between ${
                  isPro
                    ? 'border-light-text dark:border-dark-text shadow-elevated dark:shadow-dark-elevated'
                    : 'border-light-border dark:border-dark-border'
                }`}
              >
                {/* Recommended Badge */}
                {isPro && (
                  <div className="absolute top-6 right-6">
                    <span className="text-[10px] font-medium font-mono uppercase tracking-wider text-white dark:text-dark-bg bg-light-text dark:bg-dark-text px-2 py-0.5 rounded">
                      Recommended
                    </span>
                  </div>
                )}

                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-light-text dark:text-dark-text">
                    {plan.name}
                  </div>
                  <p className="text-xs text-light-muted dark:text-dark-muted mt-1 min-h-[32px]">
                    {plan.tagline}
                  </p>

                  {/* Price Tag */}
                  <div className="mt-5 flex items-baseline gap-1.5 pb-5 border-b border-light-border dark:border-dark-border">
                    <span className="text-4xl font-semibold text-light-text dark:text-dark-text tracking-tight">
                      ${price}
                    </span>
                    <span className="text-xs text-light-muted dark:text-dark-muted">
                      / month {billingCycle === 'yearly' && price > 0 && '(billed annually)'}
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="mt-5 space-y-3">
                    <p className="text-[11px] font-semibold text-light-text dark:text-dark-text uppercase tracking-wider">
                      Included with {plan.name}:
                    </p>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs">
                        {feature.included ? (
                          <Check className="w-3.5 h-3.5 text-light-text dark:text-dark-text mt-0.5 flex-shrink-0" />
                        ) : (
                          <X className="w-3.5 h-3.5 text-neutral-300 dark:text-neutral-700 mt-0.5 flex-shrink-0" />
                        )}
                        <span className={feature.included ? 'text-light-text dark:text-dark-text' : 'text-neutral-400 dark:text-neutral-600 line-through'}>
                          {feature.text}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <div className="mt-8 pt-6 border-t border-light-border dark:border-dark-border">
                  <button
                    onClick={onOpenDemo}
                    className={`w-full py-2.5 px-4 rounded-md text-xs font-medium transition-colors flex items-center justify-center gap-1.5 ${
                      isPro
                        ? 'bg-light-text hover:bg-neutral-800 text-white dark:bg-dark-text dark:text-dark-bg dark:hover:bg-neutral-200'
                        : 'bg-light-subtle hover:bg-neutral-200 dark:bg-dark-subtle dark:hover:bg-neutral-800 border border-light-border dark:border-dark-border text-light-text dark:text-dark-text'
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-600" />
                  </button>
                  <p className="text-center text-[10px] text-light-muted dark:text-dark-muted mt-2">
                    {isPro ? 'Includes 14-day full access trial' : 'Free forever. Upgrade anytime.'}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Comparison Table Toggle */}
        <div className="mt-12 max-w-4xl mx-auto text-center">
          <button
            onClick={() => setShowComparison(!showComparison)}
            className="text-xs font-medium text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text transition-colors"
          >
            {showComparison ? 'Hide detailed comparison' : 'Compare plans side-by-side →'}
          </button>

          {showComparison && (
            <div className="mt-6 rounded-lg bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border p-5 text-left shadow-subtle dark:shadow-dark-subtle">
              <div className="overflow-x-auto">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="border-b border-light-border dark:border-dark-border text-light-muted dark:text-dark-muted">
                      <th className="pb-2.5 font-medium text-left">Capability</th>
                      <th className="pb-2.5 font-medium text-center w-1/3">STARTER ($0)</th>
                      <th className="pb-2.5 font-semibold text-center w-1/3 text-light-text dark:text-dark-text">PRO ($19)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-light-border/60 dark:divide-dark-border/60">
                    {featureComparison.map((row) => (
                      <tr key={row.feature} className="hover:bg-light-subtle/50 dark:hover:bg-dark-subtle/50">
                        <td className="py-2.5 font-medium text-light-text dark:text-dark-text">{row.feature}</td>
                        <td className="py-2.5 text-center text-light-muted dark:text-dark-muted">{row.starter}</td>
                        <td className="py-2.5 text-center font-semibold text-light-text dark:text-dark-text">{row.pro}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
