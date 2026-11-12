import React from 'react';

const fictionalLogos = [
  {
    name: 'Synthetix',
    symbol: (
      <svg className="w-4 h-4 text-light-muted dark:text-dark-muted group-hover:text-light-text dark:group-hover:text-dark-text transition-colors" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" />
        <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
  {
    name: 'PulsePoint',
    symbol: (
      <svg className="w-4 h-4 text-light-muted dark:text-dark-muted group-hover:text-light-text dark:group-hover:text-dark-text transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    name: 'CloudFlow',
    symbol: (
      <svg className="w-4 h-4 text-light-muted dark:text-dark-muted group-hover:text-light-text dark:group-hover:text-dark-text transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
  },
  {
    name: 'ApexScale',
    symbol: (
      <svg className="w-4 h-4 text-light-muted dark:text-dark-muted group-hover:text-light-text dark:group-hover:text-dark-text transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 2 22 22 22" />
        <line x1="12" y1="12" x2="12" y2="18" />
      </svg>
    ),
  },
  {
    name: 'Velox Systems',
    symbol: (
      <svg className="w-4 h-4 text-light-muted dark:text-dark-muted group-hover:text-light-text dark:group-hover:text-dark-text transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
  {
    name: 'Novus Data',
    symbol: (
      <svg className="w-4 h-4 text-light-muted dark:text-dark-muted group-hover:text-light-text dark:group-hover:text-dark-text transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
  },
];

export default function SocialProof() {
  return (
    <section className="py-10 border-b border-light-border dark:border-dark-border bg-light-subtle/40 dark:bg-dark-subtle/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[11px] font-medium uppercase tracking-wider text-light-muted dark:text-dark-muted">
          Trusted by ambitious teams
        </p>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center justify-items-center">
          {fictionalLogos.map((brand) => (
            <div
              key={brand.name}
              className="group flex items-center gap-2 transition-colors cursor-default"
            >
              {brand.symbol}
              <span className="text-xs font-medium text-light-muted dark:text-dark-muted group-hover:text-light-text dark:group-hover:text-dark-text transition-colors">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
