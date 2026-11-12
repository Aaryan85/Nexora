import React, { useState } from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';
import { 
  LayoutDashboard, 
  BarChart2, 
  Users, 
  FileSpreadsheet, 
  Settings, 
  Download, 
  TrendingUp, 
  Layers
} from 'lucide-react';
import { 
  dashboardMetricsByRange, 
  trafficSources, 
  recentActivities, 
  performanceMetrics 
} from '../data/dashboardData';

export default function DashboardPreview({ onOpenDemo, isDark }) {
  const [selectedRange, setSelectedRange] = useState('30d');
  const [activeSidebarItem, setActiveSidebarItem] = useState('Overview');

  const currentMetrics = dashboardMetricsByRange[selectedRange];

  const sidebarLinks = [
    { name: 'Overview', icon: LayoutDashboard },
    { name: 'Analytics', icon: BarChart2 },
    { name: 'Customers', icon: Users },
    { name: 'Reports', icon: FileSpreadsheet },
    { name: 'Integrations', icon: Layers },
    { name: 'Settings', icon: Settings },
  ];

  const primaryStroke = isDark ? '#F5F5F5' : '#171717';
  const targetStroke = isDark ? '#737373' : '#A3A3A3';
  const axisColor = isDark ? '#737373' : '#A3A3A3';
  const gridStroke = isDark ? '#333333' : '#E5E5E5';

  return (
    <section id="dashboard" className="py-20 sm:py-28 border-b border-light-border dark:border-dark-border bg-light-subtle/50 dark:bg-dark-subtle/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-light-muted dark:text-dark-muted block mb-2 font-mono">
            // Product Showcase
          </span>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-light-text dark:text-dark-text leading-tight">
            Designed for clarity. Engineered for velocity.
          </h2>
          <p className="mt-3 text-base text-light-muted dark:text-dark-muted leading-relaxed">
            A genuine production-grade workspace. Filter through historical time horizons, inspect telemetry graphs, and review customer transaction activity.
          </p>
        </div>

        {/* The Professional SaaS Dashboard Frame */}
        <div className="rounded-lg border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface shadow-elevated dark:shadow-dark-elevated overflow-hidden">
          
          {/* Top Window Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-4 sm:px-6 py-3 bg-light-subtle dark:bg-dark-subtle border-b border-light-border dark:border-dark-border">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-300 dark:bg-neutral-700" />
              </div>
              <div className="h-3.5 w-px bg-light-border dark:border-dark-border mx-1 hidden sm:block" />
              <div className="flex items-center gap-2 text-xs">
                <span className="font-semibold text-light-text dark:text-dark-text">Acme Global</span>
                <span className="text-light-muted dark:text-dark-muted">/</span>
                <span className="text-light-muted dark:text-dark-muted">Production Analytics</span>
                <span className="text-[10px] px-1.5 py-0.5 rounded bg-light-surface dark:bg-dark-surface text-light-text dark:text-dark-text font-medium border border-light-border dark:border-dark-border">
                  Live
                </span>
              </div>
            </div>

            {/* Date Range Selector & Export */}
            <div className="flex items-center gap-2 flex-wrap">
              <div className="flex items-center bg-light-surface dark:bg-dark-surface p-0.5 rounded border border-light-border dark:border-dark-border">
                {[
                  { id: '7d', label: '7d' },
                  { id: '30d', label: '30d' },
                  { id: '90d', label: '90d' },
                  { id: '12m', label: '12m' },
                ].map((range) => (
                  <button
                    key={range.id}
                    onClick={() => setSelectedRange(range.id)}
                    className={`px-2.5 py-1 text-xs rounded transition-all ${
                      selectedRange === range.id
                        ? 'bg-light-text text-white dark:bg-dark-text dark:text-dark-bg font-semibold shadow-subtle'
                        : 'text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text'
                    }`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>

              <button
                onClick={onOpenDemo}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded bg-light-surface dark:bg-dark-surface hover:bg-light-subtle dark:hover:bg-dark-subtle border border-light-border dark:border-dark-border text-xs font-medium text-light-text dark:text-dark-text transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-light-muted dark:text-dark-muted" />
                <span>Export CSV</span>
              </button>
            </div>
          </div>

          {/* Dashboard Inner: Light Grey Sidebar + White Content Area */}
          <div className="flex flex-col lg:flex-row min-h-[620px]">
            
            {/* Sidebar Navigation */}
            <div className="w-full lg:w-52 bg-light-subtle dark:bg-dark-subtle border-b lg:border-b-0 lg:border-r border-light-border dark:border-dark-border p-3 flex flex-row lg:flex-col justify-between overflow-x-auto lg:overflow-x-visible">
              <div className="flex lg:flex-col gap-0.5 w-full">
                <span className="text-[10px] font-semibold text-light-muted dark:text-dark-muted uppercase tracking-wider px-2.5 py-1.5 hidden lg:block">
                  Workspace
                </span>
                {sidebarLinks.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSidebarItem === item.name;
                  return (
                    <button
                      key={item.name}
                      onClick={() => setActiveSidebarItem(item.name)}
                      className={`flex items-center gap-2.5 px-2.5 py-1.5 rounded text-xs transition-colors whitespace-nowrap text-left ${
                        isActive
                          ? 'bg-light-surface dark:bg-dark-surface text-light-text dark:text-dark-text font-semibold border border-light-border dark:border-dark-border shadow-subtle'
                          : 'text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text hover:bg-light-surface/60 dark:hover:bg-dark-surface/60'
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 flex-shrink-0 ${isActive ? 'text-light-text dark:text-dark-text' : 'text-light-muted dark:text-dark-muted'}`} />
                      <span>{item.name}</span>
                    </button>
                  );
                })}
              </div>

              <div className="hidden lg:block pt-3 border-t border-light-border dark:border-dark-border">
                <div className="flex items-center gap-2 px-2 py-1 rounded hover:bg-light-surface dark:hover:bg-dark-surface transition-colors cursor-default">
                  <div className="w-6 h-6 rounded bg-light-text dark:bg-dark-text text-white dark:text-dark-bg text-[10px] font-semibold flex items-center justify-center">
                    AY
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs font-medium text-light-text dark:text-dark-text truncate leading-tight">Aaryan Yadav</p>
                    <p className="text-[10px] text-light-muted dark:text-dark-muted truncate">Workspace Admin</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content Pane */}
            <div className="flex-1 p-5 sm:p-6 lg:p-7 space-y-6 bg-light-surface dark:bg-dark-surface">
              
              {/* Title inside app */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-light-border dark:border-dark-border">
                <div>
                  <h3 className="text-base font-semibold text-light-text dark:text-dark-text flex items-center gap-2">
                    <span>Performance Overview</span>
                    <span className="text-xs font-normal text-light-muted dark:text-dark-muted">({selectedRange.toUpperCase()})</span>
                  </h3>
                  <p className="text-xs text-light-muted dark:text-dark-muted mt-0.5">
                    Aggregated across 4 active ingestion streams
                  </p>
                </div>
                
                <div className="text-xs text-light-muted dark:text-dark-muted">
                  <span>Target benchmark: </span>
                  <span className="font-semibold text-light-text dark:text-dark-text">114% achieved</span>
                </div>
              </div>

              {/* KPI Cards Grid */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                
                <div className="p-3.5 rounded border border-light-border dark:border-dark-border bg-light-subtle dark:bg-dark-subtle">
                  <span className="text-[11px] text-light-muted dark:text-dark-muted block">Gross Revenue</span>
                  <div className="mt-1 text-xl font-semibold text-light-text dark:text-dark-text tracking-tight">
                    {currentMetrics.revenue}
                  </div>
                  <div className="mt-1 flex items-center gap-1 text-[11px] text-light-text dark:text-dark-text font-medium">
                    <TrendingUp className="w-3 h-3" />
                    <span>{currentMetrics.revenueGrowth}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded border border-light-border dark:border-dark-border bg-light-subtle dark:bg-dark-subtle">
                  <span className="text-[11px] text-light-muted dark:text-dark-muted block">Run-rate MRR</span>
                  <div className="mt-1 text-xl font-semibold text-light-text dark:text-dark-text tracking-tight">
                    {currentMetrics.mrr}
                  </div>
                  <div className="mt-1 flex items-center gap-1 text-[11px] text-light-text dark:text-dark-text font-medium">
                    <TrendingUp className="w-3 h-3" />
                    <span>{currentMetrics.mrrGrowth}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded border border-light-border dark:border-dark-border bg-light-subtle dark:bg-dark-subtle">
                  <span className="text-[11px] text-light-muted dark:text-dark-muted block">Active Seats</span>
                  <div className="mt-1 text-xl font-semibold text-light-text dark:text-dark-text tracking-tight">
                    {currentMetrics.activeUsers}
                  </div>
                  <div className="mt-1 flex items-center gap-1 text-[11px] text-light-text dark:text-dark-text font-medium">
                    <TrendingUp className="w-3 h-3" />
                    <span>{currentMetrics.userGrowth}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded border border-light-border dark:border-dark-border bg-light-subtle dark:bg-dark-subtle">
                  <span className="text-[11px] text-light-muted dark:text-dark-muted block">Net Churn Rate</span>
                  <div className="mt-1 text-xl font-semibold text-light-text dark:text-dark-text tracking-tight">
                    {currentMetrics.churnRate}
                  </div>
                  <div className="mt-1 flex items-center gap-1 text-[11px] text-light-text dark:text-dark-text font-medium">
                    <span>{currentMetrics.churnGrowth}</span>
                    <span className="text-light-muted dark:text-dark-muted font-normal text-[10px]">retention</span>
                  </div>
                </div>

              </div>

              {/* Charts Row */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Revenue vs Target Projection Chart (2 cols) */}
                <div className="lg:col-span-2 p-4 rounded border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h4 className="text-xs font-semibold text-light-text dark:text-dark-text">Revenue vs. Target Projection</h4>
                      <p className="text-[11px] text-light-muted dark:text-dark-muted">Historical performance for {selectedRange.toUpperCase()}</p>
                    </div>

                    <div className="flex items-center gap-3 text-[11px] text-light-muted dark:text-dark-muted">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-1 bg-light-text dark:bg-dark-text inline-block" />
                        <span className="text-light-text dark:text-dark-text font-medium">Actual</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-0.5 border-b border-dashed border-neutral-400 dark:border-neutral-500 inline-block" />
                        <span>Target</span>
                      </div>
                    </div>
                  </div>

                  <div className="h-60 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart
                        data={currentMetrics.chartData}
                        margin={{ top: 8, right: 8, left: -18, bottom: 0 }}
                      >
                        <defs>
                          <linearGradient id="mainMonoGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor={primaryStroke} stopOpacity={0.16} />
                            <stop offset="95%" stopColor={primaryStroke} stopOpacity={0.0} />
                          </linearGradient>
                        </defs>
                        <XAxis
                          dataKey="name"
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
                          tickFormatter={(v) => `$${v >= 1000 ? (v / 1000).toFixed(0) + 'k' : v}`}
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
                          formatter={(value, name) => [
                            `$${Number(value).toLocaleString()}`,
                            name === 'revenue' ? 'Actual Revenue' : 'Projected Target'
                          ]}
                        />
                        <Area
                          type="monotone"
                          dataKey="target"
                          stroke={targetStroke}
                          strokeWidth={1.5}
                          strokeDasharray="4 4"
                          fill="transparent"
                        />
                        <Area
                          type="monotone"
                          dataKey="revenue"
                          stroke={primaryStroke}
                          strokeWidth={2}
                          fillOpacity={1}
                          fill="url(#mainMonoGrad)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                {/* Traffic Attribution Sources (1 col) */}
                <div className="p-4 rounded border border-light-border dark:border-dark-border bg-light-subtle dark:bg-dark-subtle flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3 pb-2 border-b border-light-border dark:border-dark-border">
                      <h4 className="text-xs font-semibold text-light-text dark:text-dark-text">Traffic Sources</h4>
                      <span className="text-[11px] text-light-muted dark:text-dark-muted font-medium font-mono">Attribution</span>
                    </div>

                    <div className="h-40 w-full flex items-center justify-center">
                      <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                          <Pie
                            data={trafficSources}
                            cx="50%"
                            cy="50%"
                            innerRadius={44}
                            outerRadius={64}
                            paddingAngle={3}
                            dataKey="value"
                          >
                            {trafficSources.map((entry, index) => (
                              <Cell 
                                key={`cell-${index}`} 
                                fill={isDark ? entry.colorDark : entry.colorLight} 
                                stroke={isDark ? '#1B1B1B' : '#FFFFFF'} 
                                strokeWidth={1.5} 
                              />
                            ))}
                          </Pie>
                          <Tooltip
                            contentStyle={{
                              backgroundColor: isDark ? '#1B1B1B' : '#FFFFFF',
                              borderColor: isDark ? '#333333' : '#E5E5E5',
                              borderRadius: '6px',
                              fontSize: '11px',
                              color: isDark ? '#F5F5F5' : '#171717',
                            }}
                            formatter={(value) => [`${value}%`, 'Share']}
                          />
                        </PieChart>
                      </ResponsiveContainer>
                    </div>
                  </div>

                  <div className="space-y-1.5 pt-3 border-t border-light-border dark:border-dark-border">
                    {trafficSources.map((source) => (
                      <div key={source.name} className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span 
                            className="w-2 h-2 rounded-full" 
                            style={{ backgroundColor: isDark ? source.colorDark : source.colorLight }} 
                          />
                          <span className="text-light-muted dark:text-dark-muted text-[11px]">{source.name}</span>
                        </div>
                        <span className="font-mono text-light-text dark:text-dark-text font-medium text-[11px]">{source.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom Row: Customer Activity Table & Telemetry */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                
                {/* Recent Customer Activity Table (2 cols) */}
                <div className="lg:col-span-2 p-4 rounded border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-light-border dark:border-dark-border">
                    <h4 className="text-xs font-semibold text-light-text dark:text-dark-text">Recent customer events</h4>
                    <span className="text-[11px] text-light-muted dark:text-dark-muted font-mono">5 newest</span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead>
                        <tr className="border-b border-light-border dark:border-dark-border text-light-muted dark:text-dark-muted text-[11px]">
                          <th className="pb-2 font-medium">Customer</th>
                          <th className="pb-2 font-medium">Action Event</th>
                          <th className="pb-2 font-medium">Impact</th>
                          <th className="pb-2 font-medium">Status</th>
                          <th className="pb-2 font-medium text-right">Time</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-light-border/60 dark:divide-dark-border/60">
                        {recentActivities.map((act) => (
                          <tr key={act.id} className="hover:bg-light-subtle/50 dark:hover:bg-dark-subtle/50 transition-colors">
                            <td className="py-2 text-light-text dark:text-dark-text font-medium flex items-center gap-2">
                              <span className="w-5 h-5 rounded bg-light-subtle dark:bg-dark-subtle text-light-text dark:text-dark-text text-[10px] font-semibold flex items-center justify-center border border-light-border dark:border-dark-border">
                                {act.avatar}
                              </span>
                              <span>{act.user}</span>
                            </td>
                            <td className="py-2 text-light-muted dark:text-dark-muted">{act.action}</td>
                            <td className="py-2 font-mono text-light-text dark:text-dark-text font-medium">{act.amount}</td>
                            <td className="py-2">
                              <span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-light-subtle dark:bg-dark-subtle text-light-text dark:text-dark-text border border-light-border dark:border-dark-border">
                                {act.status}
                              </span>
                            </td>
                            <td className="py-2 text-light-muted dark:text-dark-muted text-right font-mono text-[11px]">{act.time}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* System Telemetry & Latency (1 col) */}
                <div className="p-4 rounded border border-light-border dark:border-dark-border bg-light-subtle dark:bg-dark-subtle flex flex-col justify-between">
                  <div>
                    <h4 className="text-xs font-semibold text-light-text dark:text-dark-text mb-1">System Health</h4>
                    <p className="text-[11px] text-light-muted dark:text-dark-muted mb-3">Underlying cluster telemetry</p>

                    <div className="space-y-2">
                      {performanceMetrics.map((perf) => (
                        <div key={perf.label} className="p-2 rounded border border-light-border dark:border-dark-border bg-light-surface dark:bg-dark-surface flex items-center justify-between">
                          <div>
                            <p className="text-[10px] text-light-muted dark:text-dark-muted">{perf.label}</p>
                            <p className="text-sm font-semibold text-light-text dark:text-dark-text font-mono mt-0.5">{perf.value}</p>
                          </div>
                          <span className="text-[10px] px-1.5 py-0.5 rounded bg-light-subtle dark:bg-dark-subtle text-light-text dark:text-dark-text font-medium border border-light-border dark:border-dark-border">
                            {perf.change}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-3 border-t border-light-border dark:border-dark-border flex items-center gap-1.5 text-[11px] text-light-muted dark:text-dark-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-light-text dark:bg-dark-text" />
                    <span>All cluster regions operational</span>
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
