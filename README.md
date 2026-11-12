# Nexora — Turn Your Data Into Decisions

> **Front-End Development Internship Assignment Submission for Sankar Group**  
> **Final Design Refinement: Strict Monochrome UI/UX Design System** (Inspired by Linear, Vercel, Stripe, and high-quality editorial web products).  
> Built with **React 18**, **Vite**, **Tailwind CSS**, **Framer Motion**, **Recharts**, and **Lucide React**.

---

## 🖤 Strict Monochrome Design System

Nexora has been completely refined using an **uncompromising monochrome aesthetic** — crafted strictly with **Black, White, and Shades of Grey**. Zero accent colors (no greens, blues, purples, oranges, reds, or yellows) are used anywhere, including chart series, icons, badges, buttons, active states, and hover microinteractions.

### 🌗 Exact Color Tokens

| Token | Light Mode | Dark Mode | Usage |
| :--- | :--- | :--- | :--- |
| **Background** | `#FAFAFA` | `#111111` | Primary page canvas |
| **Primary Surface** | `#FFFFFF` | `#1B1B1B` | Main cards, dashboard frame, interactive containers |
| **Secondary Surface** | `#F3F3F3` | `#242424` | Sidebar, input fields, subtle panels, tab switchers |
| **Primary Typography** | `#171717` | `#F5F5F5` | Headings, high-contrast values, primary labels |
| **Secondary Typography**| `#737373` | `#A3A3A3` | Supporting descriptions, timestamps, subtle captions |
| **Borders** | `#E5E5E5` | `#333333` | Crisp 1px structural dividing lines |
| **Subtle Highlights** | `#EEEEEE` | `#292929` | Active pills, table dividers, hover states |

---

## 📐 CSS-Only Background Textures & Visual Depth

To prevent the monochrome aesthetic from feeling flat or sterile, selective CSS-only procedural patterns provide visual richness while adapting dynamically to both light and dark modes:

1. **Subtle Dot-Grid Pattern (`.dot-pattern`)**: Applied to the Hero section to give an intentional technical canvas backdrop (`radial-gradient` using monochrome opacity dots).
2. **Fine Grid Pattern (`.grid-pattern`)**: Applied to the Features bento-grid section to evoke clean architectural precision.
3. **Contrasting Neutral Surface (`bg-light-subtle / bg-dark-subtle`)**: Applied to the Dashboard Showcase and Process sections to establish natural visual rhythm between alternating bands.
4. **Soft Radial Highlights (`.soft-radial-highlight`)**: Monochrome top-centered vignettes providing depth without colorful gradient blobs.
5. **Grounding Footer (`#171717` / `#1B1B1B`)**: An anchor surface with crisp `#333333` borders and white wordmark typography.

---

## 📊 Monochrome Data Visualization (Recharts)

All telemetry and business metrics are rendered using sophisticated monochrome contrast techniques:
- **Primary Area Series**: High-contrast black line (`#171717` in light / `#F5F5F5` in dark) with a subtle vertical opacity gradient (`16%` down to `0%`).
- **Projected Target Line**: Dashed secondary grey reference line (`#737373` / `#A3A3A3`, strokeDasharray `4 4`).
- **Attribution Donut Chart**: Rendered in distinct shades of black, charcoal, and grey:
  - *Organic Search*: `#171717` (light) / `#F5F5F5` (dark)
  - *Direct Traffic*: `#525252` (light) / `#A3A3A3` (dark)
  - *Referral & Partner*: `#8A8A8A` (light) / `#666666` (dark)
  - *Paid Campaigns*: `#C4C4C4` (light) / `#404040` (dark)
- **Interactive Tooltips**: Pure white/charcoal cards with crisp 1px borders and zero colored text.

---

## 🌓 Dark Mode Implementation

- **Theme Toggle**: Located directly in the top navigation bar with Sun (`Sun`) and Moon (`Moon`) icons.
- **Persistence**: Remembers user choice in `localStorage.getItem('nexora-theme')`.
- **System Preference**: Automatically falls back to system color scheme (`prefers-color-scheme: dark`) on initial load.
- **No Flashing**: Coordinated through Tailwind's class-based dark mode (`class` on `<html>`).

---

## 🚀 Key Functional Sections Preserved

1. **Sticky Navigation (`Navbar.jsx`)**: Minimalist wordmark, smooth section scrolling, functional Theme Toggle, responsive drawer menu for mobile, and CTA button.
2. **Hero Section (`Hero.jsx`)**: Headline (*"Your business data. Finally, in focus."*), dot-grid backdrop, dual CTAs, and interactive mini-dashboard preview with live streaming Recharts Area Chart.
3. **Social Proof (`SocialProof.jsx`)**: 6 monochrome fictional technology wordmarks with clean dividers.
4. **Editorial Features (`Features.jsx`)**: 4 asymmetric bento-grid blocks featuring real-time stream logs, executive report memo preview, growth opportunity triggers, and universal data connectors.
5. **How It Works (`HowItWorks.jsx`)**: Numbered 3-step workflow (`01`, `02`, `03`) with interactive simulation console.
6. **Flagship Dashboard Showcase (`DashboardPreview.jsx`)**: Interactive enterprise workspace with sidebar navigation, dynamic date range selector (`7d`, `30d`, `90d`, `12m`), Recharts revenue area chart, traffic donut chart, customer activity table, and cluster health metrics.
7. **Transparent Pricing (`Pricing.jsx`)**: Functional Monthly/Yearly toggle (with -20% tag), Starter ($0) and Pro ($19) plans, and collapsible capability comparison matrix.
8. **Mission & About (`About.jsx`)**: Core architectural pillars and milestone metrics strip.
9. **Accessible FAQ Accordion (`FAQ.jsx`)**: Expandable accordion rows with smooth Framer Motion height transitions.
10. **Demo Request Form (`ContactForm.jsx`)**: Form with required-field validation, work email format regex, loading spinner, and success state with simulated tracking ID (`NX-849201`).
11. **Structured Footer (`Footer.jsx`)**: Multi-column links, operational status badge, and back-to-top button.
12. **Sandbox Modal (`DemoModal.jsx`) & Toast (`Toast.jsx`)**: Instant sandbox tenant provisioning simulation and feedback notification toast.

---

## 🛠️ Technology Stack

| Technology | Purpose |
| :--- | :--- |
| **React 18** | Modular component-based architecture |
| **Vite 6** | Fast build tooling and optimized chunking |
| **Tailwind CSS 3** | Class-based dark mode & strict monochrome design tokens |
| **Framer Motion 11** | Smooth accordions, drawers, and modal transitions |
| **Recharts 2** | Monochrome responsive SVG data visualization |
| **Lucide React** | Minimal vector icons |

---

## 📁 Project Architecture

```
shankar-grp/
├── index.html                   # HTML entry point with fonts & metadata
├── vite.config.js               # Vite config with optimized Rollup chunking
├── tailwind.config.js           # Strict monochrome design tokens & dark mode
├── postcss.config.js            # PostCSS configuration
├── package.json                 # Dependencies and npm scripts
├── src/
│   ├── main.jsx                 # React root mount
│   ├── App.jsx                  # Master app with theme toggle state
│   ├── index.css                # Monochrome variables, dot-grid & scrollbar
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky nav with Theme Toggle & drawer
│   │   ├── Hero.jsx             # Hero with dot-pattern & monochrome chart
│   │   ├── SocialProof.jsx      # Fictional client wordmarks
│   │   ├── Features.jsx         # Editorial asymmetric grid with fine pattern
│   │   ├── HowItWorks.jsx       # 3-step numbered progression workflow
│   │   ├── DashboardPreview.jsx # SaaS dashboard with date filter & charts
│   │   ├── Pricing.jsx          # Plans with monthly/yearly toggle & comparison
│   │   ├── About.jsx            # Vision, core pillars & milestone metrics
│   │   ├── FAQ.jsx              # Accessible animated accordion
│   │   ├── ContactForm.jsx      # Form with client validation & success state
│   │   ├── Footer.jsx           # Clean contrasting footer surface
│   │   ├── DemoModal.jsx        # Sandbox provisioning modal
│   │   └── Toast.jsx            # Floating monochrome notification toast
│   └── data/
│       ├── dashboardData.js     # Datasets for 7d, 30d, 90d, 12m (monochrome)
│       ├── features.js          # Features specifications & workflow steps
│       ├── pricing.js           # Pricing plans and comparison matrix
│       └── faq.js               # Questions and answers
```

---

## 💻 Local Development & Build

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build locally
npm run preview
```

---

*Submitted by Aaryan Yadav for the Sankar Group Front-End Development Internship Evaluation.*
