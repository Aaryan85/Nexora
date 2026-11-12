import React, { useState } from 'react';
import { 
  ArrowRight, 
  TrendingUp, 
  Check, 
  Users, 
  DollarSign, 
  Percent, 
  Activity,
  Layers
} from 'lucide-react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const heroChartData = [
  { time: '09:00', revenue: 4200, users: 1800 },
  { time: '11:00', revenue: 5800, users: 2200 },
  { time: '13:00', revenue: 8400, users: 3400 },
  { time: '15:00', revenue: 7600, users: 3100 },
  { time: '17:00', revenue: 9900, users: 4200 },
  { time: '19:00', revenue: 11400, users: 4800 },
  { time: '21:00', revenue: 13200, users: 5400 },
];

export default function Hero({ onOpenDemo, isDark }) {
  const [activeMetricTab, setActiveMetricTab] = useState('revenue');

  const scrollTo = (href) => {
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

  const chartColor = isDark ? '#F5F5F5' : '#171717';
  const gridStroke = isDark ? '#333333' : '#E5E5E5';
  const axisColor = isDark ? '#737373' : '#A3A3A3';

  return (
    <section id="hero" className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 border-b border-light-border dark:border-dark-border dot-pattern overflow-hidden">
      {/* Soft monochrome radial highlight overlay */}
      <div className="absolute inset-0 soft-radial-highlight pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Editorial Top Headline Layout */}
        <div className="max-w-3xl">
          {/* Subtle Tag */}
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface text-[11px] font-medium text-light-muted dark:text-dark-muted mb-6 shadow-subtle dark:shadow-dark-subtle">
            <span className="w-1.5 h-1.5 rounded-full bg-light-text dark:bg-dark-text" />
            <span>Nexora 2.4 — Business Telemetry</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-light-text dark:text-dark-text leading-[1.12]">
            Your business data. <br className="hidden sm:inline" />
            <span className="text-light-muted dark:text-dark-muted">Finally, in focus.</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-light-muted dark:text-dark-muted max-w-2xl leading-relaxed">
            Make smarter decisions with real-time insights, clear analytics, and everything your business needs to grow.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button
              onClick={onOpenDemo}
              className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-light-text dark:bg-dark-text hover:bg-neutral-800 dark:hover:bg-neutral-200 active:bg-neutral-900 text-white dark:text-dark-bg text-xs font-medium transition-colors"
            >
              <span>Get started free</span>
              <ArrowRight className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-600" />
            </button>

            <button
              onClick={() => scrollTo('#features')}
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-md bg-light-surface dark:bg-dark-surface border border-light-border dark:border-dark-border hover:bg-light-subtle dark:hover:bg-dark-subtle text-light-text dark:text-dark-text text-xs font-medium transition-colors"
            >
              <span>Explore features</span>
            </button>
          </div>

          {/* Trust Indicator */}
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-light-muted dark:text-dark-muted">
            <span className="font-medium text-light-text dark:text-dark-text">Built for teams that think ahead.</span>
            <span>•</span>
            <span>No credit card required</span>
            <span>•</span>
            <span>3-minute setup</span>
          </div>
        </div>

        {/* Dashboard Preview as Primary Visual Attraction */}
        <div className="mt-12 sm:mt-16">
          <div className="rounded-lg border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface shadow-elevated dark:shadow-dark-elevated overflow-hidden">
            
            {/* Clean Browser Chrome Header */}
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-light-border dark:border-dark-border bg-light-subtle dark:bg-dark-subtle">
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                </div>
                <div className="h-3.5 w-px bg-light-border dark:border-dark-border mx-1" />
                <span className="text-[11px] font-mono text-light-muted dark:text-dark-muted">
                  app.nexora.io/analytics/live
                </span>
              </div>
              <div className="flex items-center gap-2 text-[11px] text-light-muted dark:text-dark-muted">
                <span className="w-1.5 h-1.5 rounded-full bg-light-text dark:bg-dark-text" />
                <span>Live sync</span>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-4 sm:p-6 lg:p-7 space-y-6">
              
              {/* Metric Overview Row */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                
                <div className="p-4 rounded-md border border-light-border dark:border-dark-border bg-light-subtle dark:bg-dark-subtle">
                  <span className="text-xs text-light-muted dark:text-dark-muted block">Total Revenue</span>
                  <div className="mt-1.5 text-2xl font-semibold text-light-text dark:text-dark-text tracking-tight">
                    $128,490
                  </div>
                  <div className="mt-1 flex items-center gap-1 text-[11px] text-light-text dark:text-dark-text font-medium">
                    <TrendingUp className="w-3 h-3" />
                    <span>+18.4%</span>
                    <span className="text-light-muted dark:text-dark-muted font-normal">vs last month</span>
                  </div>
                </div>

                <div className="p-4 rounded-md border border-light-border dark:border-dark-border bg-light-subtle dark:bg-dark-subtle">
                  <span className="text-xs text-light-muted dark:text-dark-muted block">Active Users</span>
                  <div className="mt-1.5 text-2xl font-semibold text-light-text dark:text-dark-text tracking-tight">
                    42,850
                  </div>
                  <div className="mt-1 flex items-center gap-1 text-[11px] text-light-text dark:text-dark-text font-medium">
                    <TrendingUp className="w-3 h-3" />
                    <span>+12.6%</span>
                    <span className="text-light-muted dark:text-dark-muted font-normal">daily active</span>
                  </div>
                </div>

                <div className="p-4 rounded-md border border-light-border dark:border-dark-border bg-light-subtle dark:bg-dark-subtle">
                  <span className="text-xs text-light-muted dark:text-dark-muted block">Conversion Rate</span>
                  <div className="mt-1.5 text-2xl font-semibold text-light-text dark:text-dark-text tracking-tight">
                    5.24%
                  </div>
                  <div className="mt-1 flex items-center gap-1 text-[11px] text-light-text dark:text-dark-text font-medium">
                    <TrendingUp className="w-3 h-3" />
                    <span>+0.8%</span>
                    <span className="text-light-muted dark:text-dark-muted font-normal">funnel</span>
                  </div>
                </div>

                <div className="p-4 rounded-md border border-light-border dark:border-dark-border bg-light-subtle dark:bg-dark-subtle">
                  <span className="text-xs text-light-muted dark:text-dark-muted block">Growth Percentage</span>
                  <div className="mt-1.5 text-2xl font-semibold text-light-text dark:text-dark-text tracking-tight">
                    +34.2%
                  </div>
                  <div className="mt-1 flex items-center gap-1 text-[11px] text-light-text dark:text-dark-text font-medium">
                    <span>Target: 25%</span>
                    <span className="text-light-muted dark:text-dark-muted font-normal">exceeded</span>
                  </div>
                </div>

              </div>

              {/* Chart & Activity Split */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Revenue Analytics Area Chart (2 cols) */}
                <div className="lg:col-span-2 p-4 sm:p-5 rounded-md border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xs font-semibold text-light-text dark:text-dark-text">Revenue velocity</h3>
                      <p className="text-[11px] text-light-muted dark:text-dark-muted">Real-time hourly ingestion rate</p>
                    </div>

                    <div className="flex items-center bg-light-subtle dark:bg-dark-subtle p-0.5 rounded border border-light-border dark:border-dark-border">
                      <button
                        onClick={() => setActiveMetricTab('revenue')}
                        className={`px-2 py-1 text-[11px] rounded transition-colors ${
                          activeMetricTab === 'revenue'
                            ? 'bg-light-surface dark:bg-dark-surface text-light-text dark:text-dark-text font-medium shadow-subtle'
                            : 'text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text'
                        }`}
                      >
                        Revenue ($)
                      </button>
                      <button
                        onClick={() => setActiveMetricTab('users')}
                        className={`px-2 py-1 text-[11px] rounded transition-colors ${
                          activeMetricTab === 'users'
                            ? 'bg-light-surface dark:bg-dark-surface text-light-text dark:text-dark-text font-medium shadow-subtle'
                            : 'text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text'
                        }`}
                      >
                        Users
                      </button>
                    </div>
                  </div>

                  <div className="h-52 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={heroChartData}
                        margin={{ top: 8, right: 8, left: -20, bottom: 0 }}
                      >
                        <defs>
                          <linearGradient id="heroMonoGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={chartColor} stopOpacity={0.16} />
                            <stop offset="95%" stopColor={chartColor} stopOpacity={0.0} />
                          </linearGradient>
                        </defs>
                        <XAxis
                          dataKey="time"
                          stroke={axisColor}
                          fontSize={11}
                          tickLine={false}
                          axisLine={{ stroke: gridStroke }}
                        />
                        <YAxis
                          stroke={axisColor}
                          fontSize={11}
                          tickLine={false}
                          axisLine={false}
                          tickFormatter={(v) => (activeMetricTab === 'revenue' ? `$${v / 1000}k` : `${v}`)}
                        />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: isDark ? '#1B1B1B' : '#FFFFFF',
                            borderColor: isDark ? '#333333' : '#E5E5E5',
                            borderRadius: '6px',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                            fontSize: '11px',
                            color: isDark ? '#F5F5F5' : '#171717',
                          }}
                          formatter={(value) => [
                            activeMetricTab === 'revenue' ? `$${value.toLocaleString()}` : `${value.toLocaleString()} users`,
                            activeMetricTab === 'revenue' ? 'Revenue' : 'Users'
                          ]}
                        />
                        <Area
                          type="monotone"
                          dataKey={activeMetricTab}
                          stroke={chartColor}
                          strokeWidth={1.8}
                          fillOpacity={1}
                          fill="url(#heroMonoGrad)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Recent Activity Feed (1 col) */}
                <div className="p-4 sm:p-5 rounded-md border border-light-border dark:border-dark-border bg-light-subtle dark:bg-dark-subtle flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3 pb-2 border-b border-light-border dark:border-dark-border">
                      <h3 className="text-xs font-semibold text-light-text dark:text-dark-text">Recent activity</h3>
                      <span className="text-[11px] text-light-text dark:text-dark-text font-medium">Real-time</span>
                    </div>

                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between text-xs py-1.5 border-b border-light-border/60 dark:border-dark-border/60">
                        <div>
                          <p className="font-medium text-light-text dark:text-dark-text text-[11px]">Sarah Chen</p>
                          <p className="text-[10px] text-light-muted dark:text-dark-muted">Enterprise upgrade</p>
                        </div>
                        <span className="font-mono text-light-text dark:text-dark-text text-xs font-semibold">+$2,400</span>
                      </div>

                      <div className="flex items-center justify-between text-xs py-1.5 border-b border-light-border/60 dark:border-dark-border/60">
                        <div>
                          <p className="font-medium text-light-text dark:text-dark-text text-[11px]">Marcus Vance</p>
                          <p className="text-[10px] text-light-muted dark:text-dark-muted">BigQuery synced</p>
                        </div>
                        <span className="font-mono text-light-text dark:text-dark-text text-xs">5.4M rows</span>
                      </div>

                      <div className="flex items-center justify-between text-xs py-1.5">
                        <div>
                          <p className="font-medium text-light-text dark:text-dark-text text-[11px]">Elena Rostova</p>
                          <p className="text-[10px] text-light-muted dark:text-dark-muted">Churn alert check</p>
                        </div>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-light-surface dark:bg-dark-surface text-light-text dark:text-dark-text font-medium border border-light-border dark:border-dark-border">
                          Resolved
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-light-border dark:border-dark-border flex items-center justify-between text-[11px] text-light-muted dark:text-dark-muted">
                    <span>Latency: <strong className="text-light-text dark:text-dark-text font-medium">38ms</strong></span>
                    <span>Uptime: <strong className="text-light-text dark:text-dark-text font-medium">99.99%</strong></span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
