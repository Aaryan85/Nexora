import React from 'react';
import { 
  Activity, 
  FileText, 
  TrendingUp, 
  LayoutDashboard, 
  ArrowUpRight,
  Download, 
  Share2
} from 'lucide-react';

export default function Features({ onOpenDemo }) {
  return (
    <section id="features" className="py-20 sm:py-28 border-b border-light-border dark:border-dark-border grid-pattern relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-light-muted dark:text-dark-muted block mb-2 font-mono">
            // Core Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-light-text dark:text-dark-text leading-tight">
            Everything you need to see the bigger picture.
          </h2>
          <p className="mt-3 text-base text-light-muted dark:text-dark-muted leading-relaxed">
            Eliminate silos, unblock decision paralysis, and turn fragmented operational spreadsheets into clear, actionable intelligence.
          </p>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="mt-14 space-y-6">

          {/* Row 1: Real-Time Analytics (7 cols) + Smart Reporting (5 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Feature 1: Real-Time Analytics */}
            <div className="lg:col-span-7 rounded-lg border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface p-6 sm:p-8 flex flex-col justify-between shadow-subtle dark:shadow-dark-subtle">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded border border-light-border dark:border-dark-border bg-light-subtle dark:bg-dark-subtle flex items-center justify-center text-light-text dark:text-dark-text">
                    <Activity className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-mono text-light-text dark:text-dark-text bg-light-subtle dark:bg-dark-subtle border border-light-border dark:border-dark-border px-2 py-0.5 rounded">
                    Sub-50ms latency
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-light-text dark:text-dark-text">
                  Real-Time Analytics
                </h3>
                <p className="mt-1.5 text-xs text-light-muted dark:text-dark-muted leading-relaxed max-w-xl">
                  Monitor your business metrics with continuously updated insights streaming across every customer touchpoint and transaction.
                </p>
              </div>

              {/* Product illustration: Clean monochrome telemetry stream */}
              <div className="mt-6 rounded border border-light-border dark:border-dark-border bg-light-subtle dark:bg-dark-subtle p-3.5 text-[11px] font-mono">
                <div className="flex items-center justify-between pb-2 border-b border-light-border dark:border-dark-border text-light-muted dark:text-dark-muted">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-light-text dark:bg-dark-text" />
                    <span>stream://pipeline.live</span>
                  </div>
                  <span>4.2M events/sec</span>
                </div>
                <div className="mt-2.5 space-y-1.5 text-[11px]">
                  <div className="flex items-center justify-between py-1 border-b border-light-border/60 dark:border-dark-border/60">
                    <span className="text-light-muted dark:text-dark-muted">[14:02:11] stripe.charge.succeeded</span>
                    <span className="text-light-text dark:text-dark-text font-semibold">+$1,490.00</span>
                  </div>
                  <div className="flex items-center justify-between py-1 border-b border-light-border/60 dark:border-dark-border/60">
                    <span className="text-light-muted dark:text-dark-muted">[14:02:10] segment.identify(user_912)</span>
                    <span className="text-light-text dark:text-dark-text">Cohort: Enterprise</span>
                  </div>
                  <div className="flex items-center justify-between py-1">
                    <span className="text-light-muted dark:text-dark-muted">[14:02:08] snowflake.query.completed</span>
                    <span className="text-light-text dark:text-dark-text">Duration: 24ms</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature 2: Smart Reporting */}
            <div className="lg:col-span-5 rounded-lg border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface p-6 sm:p-8 flex flex-col justify-between shadow-subtle dark:shadow-dark-subtle">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded border border-light-border dark:border-dark-border bg-light-subtle dark:bg-dark-subtle flex items-center justify-center text-light-text dark:text-dark-text">
                    <FileText className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-mono text-light-muted dark:text-dark-muted bg-light-subtle dark:bg-dark-subtle border border-light-border dark:border-dark-border px-2 py-0.5 rounded">
                    Executive summary
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-light-text dark:text-dark-text">
                  Smart Reporting
                </h3>
                <p className="mt-1.5 text-xs text-light-muted dark:text-dark-muted leading-relaxed">
                  Generate meaningful reports and understand your performance with automated memos ready for leadership and board reviews.
                </p>
              </div>

              {/* Product illustration: Clean Executive Document Snippet */}
              <div className="mt-6 rounded border border-light-border dark:border-dark-border bg-light-subtle dark:bg-dark-subtle p-3.5 text-xs">
                <div className="flex items-center justify-between pb-2 border-b border-light-border dark:border-dark-border">
                  <span className="font-medium text-light-text dark:text-dark-text text-xs">Q4 Performance Brief</span>
                  <div className="flex items-center gap-2 text-light-muted dark:text-dark-muted">
                    <Download className="w-3.5 h-3.5 cursor-pointer hover:text-light-text dark:hover:text-dark-text" />
                    <Share2 className="w-3.5 h-3.5 cursor-pointer hover:text-light-text dark:hover:text-dark-text" />
                  </div>
                </div>
                <p className="mt-2.5 text-[11px] text-light-muted dark:text-dark-muted leading-relaxed">
                  "MRR expanded by <strong className="text-light-text dark:text-dark-text font-semibold">23.8%</strong> this quarter driven by self-serve seat expansions. Net customer churn decreased to <strong className="text-light-text dark:text-dark-text font-semibold">0.78%</strong>."
                </p>
                <div className="mt-2.5 pt-2 border-t border-light-border dark:border-dark-border flex items-center justify-between text-[10px] text-light-muted dark:text-dark-muted">
                  <span>Cadence: Weekly</span>
                  <span className="text-light-text dark:text-dark-text font-medium">Auto-distributed</span>
                </div>
              </div>
            </div>

          </div>

          {/* Row 2: Growth Insights (5 cols) + Unified Dashboard (7 cols) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            
            {/* Feature 3: Growth Insights */}
            <div className="lg:col-span-5 rounded-lg border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface p-6 sm:p-8 flex flex-col justify-between shadow-subtle dark:shadow-dark-subtle">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded border border-light-border dark:border-dark-border bg-light-subtle dark:bg-dark-subtle flex items-center justify-center text-light-text dark:text-dark-text">
                    <TrendingUp className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-mono text-light-muted dark:text-dark-muted bg-light-subtle dark:bg-dark-subtle border border-light-border dark:border-dark-border px-2 py-0.5 rounded">
                    Signals
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-light-text dark:text-dark-text">
                  Growth Insights
                </h3>
                <p className="mt-1.5 text-xs text-light-muted dark:text-dark-muted leading-relaxed">
                  Identify trends, opportunities, and areas that need attention before revenue dips.
                </p>
              </div>

              {/* Product illustration: Clean Monochrome Opportunity Cards */}
              <div className="mt-6 space-y-2 text-xs">
                <div className="p-2.5 rounded border border-light-border dark:border-dark-border bg-light-subtle dark:bg-dark-subtle flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <ArrowUpRight className="w-3.5 h-3.5 text-light-text dark:text-dark-text" />
                    <div>
                      <p className="text-[11px] font-medium text-light-text dark:text-dark-text">Expansion Opportunity</p>
                      <p className="text-[10px] text-light-muted dark:text-dark-muted">14 accounts exceeded seat limit</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono font-medium text-light-text dark:text-dark-text">+$12.8k ARR</span>
                </div>

                <div className="p-2.5 rounded border border-light-border dark:border-dark-border bg-light-subtle dark:bg-dark-subtle flex items-center justify-between">
                  <div>
                    <p className="text-[11px] font-medium text-light-text dark:text-dark-text">Checkout Step 2 Fixed</p>
                    <p className="text-[10px] text-light-muted dark:text-dark-muted">Bounce rate reduced by 32%</p>
                  </div>
                  <span className="text-xs font-mono font-medium text-light-text dark:text-dark-text">+4.6% CVR</span>
                </div>
              </div>
            </div>

            {/* Feature 4: Unified Dashboard */}
            <div className="lg:col-span-7 rounded-lg border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface p-6 sm:p-8 flex flex-col justify-between shadow-subtle dark:shadow-dark-subtle">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-8 h-8 rounded border border-light-border dark:border-dark-border bg-light-subtle dark:bg-dark-subtle flex items-center justify-center text-light-text dark:text-dark-text">
                    <LayoutDashboard className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-mono text-light-muted dark:text-dark-muted bg-light-subtle dark:bg-dark-subtle border border-light-border dark:border-dark-border px-2 py-0.5 rounded">
                    50+ connectors
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-light-text dark:text-dark-text">
                  Unified Dashboard
                </h3>
                <p className="mt-1.5 text-xs text-light-muted dark:text-dark-muted leading-relaxed max-w-xl">
                  Bring your most important business metrics into one workspace. Eliminate data engineering bottlenecks and keep everyone aligned on the same source of truth.
                </p>
              </div>

              {/* Product illustration: Clean Connector Cards Grid */}
              <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs">
                {[
                  { name: 'Stripe Billing', rows: '142k events', status: 'Live' },
                  { name: 'PostgreSQL', rows: '2.1M rows', status: 'Live' },
                  { name: 'Snowflake', rows: 'Warehouse', status: 'Live' },
                  { name: 'Segment CDP', rows: 'Telemetry', status: 'Live' },
                ].map((conn) => (
                  <div key={conn.name} className="p-2.5 rounded border border-light-border dark:border-dark-border bg-light-subtle dark:bg-dark-subtle">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-light-text dark:bg-dark-text" />
                      <span className="font-medium text-light-text dark:text-dark-text text-[11px] truncate">{conn.name}</span>
                    </div>
                    <p className="text-[10px] text-light-muted dark:text-dark-muted mt-1">{conn.rows}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
