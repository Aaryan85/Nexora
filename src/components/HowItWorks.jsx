import React, { useState } from 'react';
import { Database, BarChart3, Sparkles, Check } from 'lucide-react';
import { howItWorksSteps } from '../data/features';

export default function HowItWorks({ isDark }) {
  const [activeStep, setActiveStep] = useState(0);

  const stepPreviews = [
    {
      title: 'Active schema discovery & automated pipeline ingestion',
      content: (
        <div className="space-y-2 font-mono text-xs">
          <div className="flex items-center justify-between p-2.5 rounded border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface">
            <span className="text-light-text dark:text-dark-text font-medium">Stripe Payment Webhook</span>
            <span className="text-light-muted dark:text-dark-muted text-[11px] font-mono">Synced (0.4s)</span>
          </div>
          <div className="flex items-center justify-between p-2.5 rounded border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface">
            <span className="text-light-text dark:text-dark-text font-medium">Production Database (PostgreSQL)</span>
            <span className="text-light-muted dark:text-dark-muted text-[11px] font-mono">Connected</span>
          </div>
        </div>
      )
    },
    {
      title: 'Synthesized cohort retention and conversion matrix',
      content: (
        <div className="p-3.5 rounded border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface text-xs">
          <div className="flex items-center justify-between mb-2.5">
            <span className="font-medium text-light-text dark:text-dark-text text-[11px]">Cohort Retention Benchmark</span>
            <span className="text-light-text dark:text-dark-text text-[11px] font-mono font-semibold">Week 4: 68%</span>
          </div>
          <div className="grid grid-cols-6 gap-1 text-center font-mono text-[10px]">
            <span className="p-1 rounded bg-neutral-900 text-white dark:bg-neutral-100 dark:text-neutral-900 font-semibold">100%</span>
            <span className="p-1 rounded bg-neutral-800 text-white dark:bg-neutral-200 dark:text-neutral-900 font-semibold">88%</span>
            <span className="p-1 rounded bg-neutral-700 text-white dark:bg-neutral-300 dark:text-neutral-900 font-semibold">79%</span>
            <span className="p-1 rounded bg-neutral-600 text-white dark:bg-neutral-400 dark:text-neutral-900">74%</span>
            <span className="p-1 rounded bg-neutral-400 text-neutral-900 dark:bg-neutral-600 dark:text-neutral-100">71%</span>
            <span className="p-1 rounded bg-neutral-300 text-neutral-900 dark:bg-neutral-700 dark:text-neutral-100">68%</span>
          </div>
        </div>
      )
    },
    {
      title: 'Automated executive alerts and webhook dispatch',
      content: (
        <div className="p-3.5 rounded border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface text-xs flex items-center justify-between">
          <div>
            <p className="font-medium text-light-text dark:text-dark-text text-[11px]">Slack Alert #growth-metrics</p>
            <p className="text-[10px] text-light-muted dark:text-dark-muted">ARR target $2M crossed 3 days early</p>
          </div>
          <span className="text-[11px] font-mono text-light-text dark:text-dark-text bg-light-subtle dark:bg-dark-subtle border border-light-border dark:border-dark-border px-2 py-0.5 rounded font-medium">
            Dispatched
          </span>
        </div>
      )
    }
  ];

  return (
    <section id="how-it-works" className="py-20 sm:py-28 border-b border-light-border dark:border-dark-border bg-light-bg dark:bg-dark-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-light-muted dark:text-dark-muted block mb-2 font-mono">
            // Simple Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-light-text dark:text-dark-text leading-tight">
            From raw data to real decisions.
          </h2>
          <p className="mt-3 text-base text-light-muted dark:text-dark-muted leading-relaxed">
            A frictionless three-step workflow designed to deliver actionable business clarity without data engineering overhead.
          </p>
        </div>

        {/* 3 Numbered Steps with Thin Dividers */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {howItWorksSteps.map((step, idx) => {
            const isSelected = activeStep === idx;
            return (
              <div
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`cursor-pointer rounded-lg border p-6 transition-all bg-light-surface dark:bg-dark-surface ${
                  isSelected
                    ? 'border-light-text dark:border-dark-text shadow-elevated dark:shadow-dark-elevated'
                    : 'border-light-border dark:border-dark-border hover:border-neutral-400 dark:hover:border-neutral-600'
                }`}
              >
                <div className="flex items-center justify-between pb-4 border-b border-light-border dark:border-dark-border mb-5">
                  <span className="text-xs font-mono font-semibold text-light-muted dark:text-dark-muted">
                    {step.step}
                  </span>
                  <span className={`text-[11px] font-medium px-2 py-0.5 rounded ${
                    isSelected
                      ? 'bg-light-text dark:bg-dark-text text-white dark:text-dark-bg'
                      : 'bg-light-subtle dark:bg-dark-subtle text-light-muted dark:text-dark-muted border border-light-border dark:border-dark-border'
                  }`}>
                    Step {idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-semibold text-light-text dark:text-dark-text">
                  {step.title}
                </h3>

                <p className="mt-2 text-xs text-light-muted dark:text-dark-muted leading-relaxed">
                  {step.description}
                </p>

                <ul className="mt-5 space-y-2 pt-4 border-t border-light-border dark:border-dark-border">
                  {step.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-center gap-2 text-xs text-light-text dark:text-dark-text">
                      <Check className={`w-3.5 h-3.5 flex-shrink-0 ${isSelected ? 'text-light-text dark:text-dark-text' : 'text-light-muted dark:text-dark-muted'}`} />
                      <span className="text-[11px] text-light-muted dark:text-dark-muted">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Active Step Interactive Simulation Display */}
        <div className="mt-8 rounded-lg border border-light-border dark:border-dark-border bg-light-subtle dark:bg-dark-subtle p-5 max-w-3xl mx-auto shadow-subtle dark:shadow-dark-subtle">
          <div className="flex items-center justify-between pb-3 border-b border-light-border dark:border-dark-border mb-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-light-text dark:bg-dark-text" />
              <span className="text-xs font-medium text-light-text dark:text-dark-text">Simulation preview:</span>
              <span className="text-xs text-light-muted dark:text-dark-muted">{stepPreviews[activeStep].title}</span>
            </div>
            <span className="text-[11px] font-mono text-light-muted dark:text-dark-muted">
              0{activeStep + 1} / 03
            </span>
          </div>

          {stepPreviews[activeStep].content}
        </div>

      </div>
    </section>
  );
}
