export const pricingPlans = [
  {
    id: 'starter',
    name: 'STARTER',
    tagline: 'Ideal for early-stage founders and small teams getting started.',
    monthlyPrice: 0,
    yearlyPrice: 0,
    period: 'forever',
    featured: false,
    ctaText: 'Start for Free',
    badge: 'Free Tier',
    features: [
      { text: 'Basic analytics and event tracking', included: true },
      { text: 'Essential revenue and user metrics', included: true },
      { text: '1 unified workspace', included: true },
      { text: 'Basic scheduled reporting (monthly)', included: true },
      { text: '7-day data retention history', included: true },
      { text: 'Standard community support', included: true },
      { text: 'Custom SQL query editor', included: false },
      { text: 'Predictive churn & growth modeling', included: false },
      { text: 'Automated executive Slack alerts', included: false },
      { text: 'Priority 24/7 dedicated support', included: false },
    ],
  },
  {
    id: 'pro',
    name: 'PRO',
    tagline: 'For fast-growing companies requiring deep analytics and automated intelligence.',
    monthlyPrice: 19,
    yearlyPrice: 15, // $180 billed annually (save ~20%)
    period: 'per month',
    featured: true,
    ctaText: 'Unlock Pro Trial',
    badge: 'Most Popular',
    popularNote: 'Includes 14-day full access trial',
    features: [
      { text: 'Advanced real-time analytics & telemetry', included: true },
      { text: 'Comprehensive revenue & cohort reports', included: true },
      { text: 'Multiple workspaces (up to 10 teams)', included: true },
      { text: 'Growth insights & predictive anomaly alerts', included: true },
      { text: 'Unlimited data retention history', included: true },
      { text: 'Custom SQL query editor & CSV export', included: true },
      { text: 'Stripe, Postgres, Snowflake integrations', included: true },
      { text: 'Automated Slack & webhook dispatch', included: true },
      { text: 'Role-based access control (RBAC)', included: true },
      { text: 'Priority 24/7 SLA & email support', included: true },
    ],
  },
];

export const featureComparison = [
  { feature: 'Data Connectors', starter: '3 connectors', pro: '50+ connectors' },
  { feature: 'Event Volume', starter: '100k events/mo', pro: '10M events/mo' },
  { feature: 'Data Retention', starter: '7 days', pro: 'Unlimited' },
  { feature: 'Workspaces', starter: '1 workspace', pro: '10 workspaces' },
  { feature: 'Export Formats', starter: 'CSV only', pro: 'CSV, PDF, JSON, API' },
  { feature: 'Support SLA', starter: 'Community forum', pro: '1-hour response SLA' },
];

