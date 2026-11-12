import React from 'react';
import { Eye, Zap, ShieldCheck, Compass } from 'lucide-react';

const pillars = [
  {
    icon: Eye,
    title: 'Radical Clarity',
    desc: 'Business telemetry shouldn’t require SQL expertise. We transform complex schemas into clear, self-explanatory interfaces.',
  },
  {
    icon: Zap,
    title: 'Lightning Velocity',
    desc: 'From event trigger to dashboard rendering in under 50ms. High speed enables agile decisions before market windows close.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Security',
    desc: 'SOC 2 Type II compliant with end-to-end encryption. Your numbers remain strictly confidential and never leave your control.',
  },
  {
    icon: Compass,
    title: 'Actionable Precision',
    desc: 'Data without context causes paralysis. Nexora pairs every metric with actionable opportunities and automated workflows.',
  },
];

const impactStats = [
  { value: '99.99%', label: 'Infrastructure Uptime SLA' },
  { value: '<50ms', label: 'Query Latency' },
  { value: '4.2M+', label: 'Events Per Second' },
  { value: '50+', label: 'Pre-Built Connectors' },
];

export default function About({ isDark }) {
  return (
    <section id="about" className="py-20 sm:py-28 border-b border-light-border dark:border-dark-border bg-light-subtle/30 dark:bg-dark-subtle/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mission Statement */}
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-light-muted dark:text-dark-muted block mb-2 font-mono">
            // Mission & Principles
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-light-text dark:text-dark-text leading-tight">
            Democratizing intelligence for modern decision makers.
          </h2>

          <p className="mt-4 text-base text-light-muted dark:text-dark-muted leading-relaxed">
            Nexora was created with a clear conviction: business intelligence should be 
            <strong className="text-light-text dark:text-dark-text font-medium"> accessible</strong>, 
            <strong className="text-light-text dark:text-dark-text font-medium"> understandable</strong>, and 
            <strong className="text-light-text dark:text-dark-text font-medium"> actionable</strong>. Teams shouldn’t waste weeks stitching disjointed analytics tools or waiting for manual spreadsheet reports.
          </p>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-6 rounded-lg border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface flex flex-col justify-between shadow-subtle dark:shadow-dark-subtle"
              >
                <div>
                  <div className="w-8 h-8 rounded border border-light-border dark:border-dark-border bg-light-subtle dark:bg-dark-subtle flex items-center justify-center text-light-text dark:text-dark-text mb-4">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-semibold text-light-text dark:text-dark-text">
                    {pillar.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-light-muted dark:text-dark-muted leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Metrics Milestone Strip */}
        <div className="mt-10 rounded-lg border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface p-6 sm:p-8 shadow-subtle dark:shadow-dark-subtle">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center divide-y lg:divide-y-0 lg:divide-x divide-light-border dark:divide-dark-border">
            {impactStats.map((stat, i) => (
              <div key={stat.label} className={i > 0 ? 'pt-4 lg:pt-0' : ''}>
                <div className="text-2xl sm:text-3xl font-semibold text-light-text dark:text-dark-text tracking-tight font-mono">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-light-muted dark:text-dark-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
