# LCB Ltd - Dashboard Integration Plan

**Date:** 2026-01-07
**Purpose:** Integrate existing BOS Cotton Dashboard with new marketing website behind subscription wall

---

## Table of Contents

1. [Executive Summary](#executive-summary)
2. [Current Dashboard Analysis](#current-dashboard-analysis)
3. [Integration Architecture](#integration-architecture)
4. [Subscription & Authentication System](#subscription--authentication-system)
5. [Website Structure with Dashboard](#website-structure-with-dashboard)
6. [Implementation Plan](#implementation-plan)
7. [Technical Specification](#technical-specification)
8. [Pricing & Revenue Model](#pricing--revenue-model)
9. [User Journey](#user-journey)
10. [Updated Questionnaire](#updated-questionnaire)

---

## 1. Executive Summary

### What We're Building

**Two-Part System:**

**Part A: Public Marketing Website** (https://lcb-ltd.com/)
- Professional corporate site
- Company information
- Services (Brokerage, Consultancy, Sustainability, Innovation)
- Team profiles
- Lead capture
- Free content (blog, resources)
- **CTA: Subscribe to Premium Dashboard**

**Part B: Premium Dashboard** (https://dashboard.lcb-ltd.com/)
- **Existing product** (already built and deployed)
- Professional cotton trading intelligence
- 20 years of historical data (5000+ rows)
- Real-time market data
- Technical analysis tools
- **Behind subscription paywall**
- Monthly/annual recurring revenue

### Key Integration Points

1. **Authentication:** Supabase Auth (shared between site + dashboard)
2. **Payments:** Stripe subscription management
3. **User Accounts:** Supabase database
4. **Seamless Login:** Single sign-on between marketing site and dashboard
5. **Consistent Branding:** Same colors, fonts, logo across both

---

## 2. Current Dashboard Analysis

### 2.1 Dashboard Overview

**Name:** LCB Cotton Dashboard
**Tagline:** "Professional Market Intelligence"
**Live URL:** https://dashboard2026.vercel.app/
**GitHub:** https://github.com/LCB-26/LCB-DASHBOARD-NOV25
**Status:** ✅ Live and fully functional
**Grade:** A+ (Enterprise-grade product)

### 2.2 Technical Stack

```javascript
{
  "framework": "Next.js 16",
  "react": "19.2.3",
  "typescript": "5.x",
  "database": "Supabase (PostgreSQL)",
  "charts": "Recharts 2.15.4",
  "maps": "Leaflet + React-Leaflet",
  "ui": "Radix UI + Tailwind CSS 4",
  "stateManagement": "Zustand 5.0.9",
  "hosting": "Vercel"
}
```

**Same stack as Cold Lava template!** ✅

### 2.3 Features

**Data & Markets:**
- 5000+ rows of historical cotton price data (20 years)
- 9 global markets:
  - ICE (New York - US cotton futures)
  - CZCE (China - Cotton, Yarn, PSF, PTA)
  - MCX (India - Cotton)
  - CC Index (China Cotton Index)
  - A-Index (Cotlook A-Index - global benchmark)
  - AWP (Adjusted World Price)
- 27 data columns per row
- Real-time updates (assumed)

**Analysis Tools:**
- Technical indicators: SMA(20/50/100/200), EMA(20)
- Spread analysis (6 market pairs)
- Volatility tracking
- Market bias indicators
- Trading signals (bullish/bearish/extreme)

**Visualizations:**
- Interactive charts (Recharts)
- Spread heat maps
- Market volatility displays
- Comprehensive data tables (sortable, paginated)
- Statistical overlays

**User Experience:**
- Bloomberg-quality tooltips (100+ explanations)
- Responsive header with time range selectors
- Tab navigation (Overview, Spreads, Markets, Data)
- Export functionality (planned)
- Alert system (planned)
- Mobile-optimized (in progress)

### 2.4 Current Access

**Status:** ⚠️ **COMPLETELY OPEN - NO AUTH**
- Anyone with URL can access
- No login required
- No payment required
- No user tracking

**This is the problem we're solving** → Add subscription wall

---

## 3. Integration Architecture

### 3.1 High-Level Architecture

```
┌─────────────────────────────────────────────────────────┐
│                   LCB Ltd Ecosystem                      │
└─────────────────────────────────────────────────────────┘

┌──────────────────────┐         ┌─────────────────────────┐
│  Marketing Website   │         │   Premium Dashboard     │
│   lcb-ltd.com        │         │ dashboard.lcb-ltd.com   │
│  (PUBLIC)            │◄────────┤  (SUBSCRIBER-ONLY)      │
│                      │  Login  │                         │
│  • Homepage          │  Flow   │  • Market Data          │
│  • Services          │─────────┤  • Charts & Analysis    │
│  • Team              │  Same   │  • Exports & Alerts     │
│  • Blog              │  Auth   │  • User Settings        │
│  • Contact           │         │                         │
│  • Pricing/Subscribe │         │                         │
└──────────────────────┘         └─────────────────────────┘
         │                                   │
         └────────┬──────────────────────────┘
                  │
                  ▼
         ┌──────────────────┐
         │  Supabase Auth   │
         │  + Database      │
         ├──────────────────┤
         │  • Users         │
         │  • Subscriptions │
         │  • Cotton Data   │
         │  • Audit Logs    │
         └──────────────────┘
                  │
                  ▼
         ┌──────────────────┐
         │  Stripe Billing  │
         ├──────────────────┤
         │  • Monthly Plan  │
         │  • Annual Plan   │
         │  • Trial Period  │
         │  • Webhooks      │
         └──────────────────┘
```

### 3.2 Domain Strategy

**Option A: Subdomain (Recommended)**
```
https://lcb-ltd.com/              → Marketing site
https://dashboard.lcb-ltd.com/     → Dashboard (subscribers only)
```

**Pros:**
- ✅ Clear separation of public/private content
- ✅ Independent deployments
- ✅ Easier to scale
- ✅ Dashboard can have own Vercel project

**Cons:**
- ⚠️ Requires DNS configuration (CNAME)
- ⚠️ Cookie sharing needs special setup

---

**Option B: Path-based**
```
https://lcb-ltd.com/              → Marketing site
https://lcb-ltd.com/dashboard     → Dashboard (subscribers only)
```

**Pros:**
- ✅ Easier authentication (same domain)
- ✅ Simpler cookie management
- ✅ Less DNS configuration

**Cons:**
- ⚠️ Dashboard = separate Next.js app = harder to deploy
- ⚠️ Or combined app = huge codebase

---

**Recommendation:** **Option A (Subdomain)**
- Use Vercel's multi-project setup
- Share authentication via Supabase
- Independent scaling and deployment

---

### 3.3 Authentication Flow

**Supabase Auth Features:**
- Email/password signup
- Email verification
- Password reset
- Session management
- JWT tokens
- Row-level security (RLS)
- Social auth (optional: Google, LinkedIn)

**User Flow:**

1. **New User (Free Visitor)**
   ```
   lcb-ltd.com → Browse → Click "Subscribe" → Pricing Page
   → Click "Start Trial" → Sign Up Form → Email Verification
   → Stripe Checkout → Success → Redirect to dashboard.lcb-ltd.com
   → Auto-login (JWT) → Dashboard Homepage
   ```

2. **Returning Subscriber**
   ```
   lcb-ltd.com → Click "Login" → Login Modal
   → Enter credentials → Verify → Redirect to dashboard.lcb-ltd.com
   → Dashboard Homepage
   ```

3. **Direct Dashboard Access (no login)**
   ```
   dashboard.lcb-ltd.com → Check JWT → Not found
   → Redirect to lcb-ltd.com/login?redirect=dashboard
   → Login → Return to dashboard.lcb-ltd.com
   ```

4. **Expired Subscription**
   ```
   dashboard.lcb-ltd.com → Check JWT → Valid user but subscription expired
   → Show "Subscription Expired" banner → Redirect to Pricing → Renew
   ```

---

## 4. Subscription & Authentication System

### 4.1 User Database Schema

**Supabase Table: `users`** (using Supabase Auth built-in)
```sql
-- Built-in Supabase Auth table (auth.users)
id              UUID PRIMARY KEY
email           TEXT UNIQUE NOT NULL
encrypted_password TEXT
email_confirmed_at TIMESTAMPTZ
created_at      TIMESTAMPTZ DEFAULT NOW()
updated_at      TIMESTAMPTZ DEFAULT NOW()
last_sign_in_at TIMESTAMPTZ
```

**Custom Table: `user_profiles`**
```sql
CREATE TABLE user_profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  full_name TEXT,
  company TEXT,
  phone TEXT,
  country TEXT,
  role TEXT DEFAULT 'subscriber',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);
```

**Custom Table: `subscriptions`**
```sql
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
  stripe_customer_id TEXT UNIQUE,
  stripe_subscription_id TEXT UNIQUE,
  plan_id TEXT NOT NULL, -- 'monthly' | 'annual'
  status TEXT NOT NULL, -- 'active' | 'canceled' | 'past_due' | 'trialing'
  current_period_start TIMESTAMPTZ,
  current_period_end TIMESTAMPTZ,
  trial_end TIMESTAMPTZ,
  cancel_at_period_end BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Index for fast lookups
CREATE INDEX subscriptions_user_id_idx ON subscriptions(user_id);
CREATE INDEX subscriptions_stripe_customer_id_idx ON subscriptions(stripe_customer_id);
CREATE INDEX subscriptions_status_idx ON subscriptions(status);
```

**Row-Level Security (RLS):**
```sql
-- Users can only read their own profile
ALTER TABLE user_profiles ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own profile"
  ON user_profiles FOR SELECT
  USING (auth.uid() = id);

-- Users can only update their own profile
CREATE POLICY "Users can update own profile"
  ON user_profiles FOR UPDATE
  USING (auth.uid() = id);

-- Users can only see their own subscriptions
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Users can view own subscription"
  ON subscriptions FOR SELECT
  USING (user_id = auth.uid());
```

### 4.2 Stripe Integration

**Stripe Products & Prices:**

```javascript
// Stripe Product
{
  name: "LCB Cotton Dashboard - Pro",
  description: "Professional cotton market intelligence with 20 years of data",
  images: ["https://lcb-ltd.com/og-image.jpg"]
}

// Pricing Options
{
  monthly: {
    amount: 9900, // £99/month
    currency: "gbp",
    interval: "month",
    trial_period_days: 14
  },
  annual: {
    amount: 99900, // £999/year (save £189 = 2 months free)
    currency: "gbp",
    interval: "year",
    trial_period_days: 14
  }
}
```

**Stripe Webhooks:**
```
POST /api/webhooks/stripe
```

**Events to Handle:**
- `customer.subscription.created` → Create subscription record
- `customer.subscription.updated` → Update subscription status
- `customer.subscription.deleted` → Mark as canceled
- `invoice.payment_succeeded` → Grant/extend access
- `invoice.payment_failed` → Send payment failed email
- `customer.subscription.trial_will_end` → Send trial ending email (3 days before)

**Implementation Files:**
```
/api/webhooks/stripe/route.ts     // Webhook handler
/lib/stripe.ts                     // Stripe client
/lib/subscription.ts               // Subscription helpers
/app/pricing/page.tsx              // Pricing page with Stripe Checkout
/app/account/subscription/page.tsx // Manage subscription
```

### 4.3 Middleware Protection

**Marketing Site (`lcb-ltd.com`):**
```typescript
// middleware.ts
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

export async function middleware(req) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  // Refresh session if exists
  await supabase.auth.getSession()

  return res
}

// No routes protected on marketing site (all public)
```

**Dashboard Site (`dashboard.lcb-ltd.com`):**
```typescript
// middleware.ts
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

export async function middleware(req) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const { data: { session } } = await supabase.auth.getSession()

  // Not logged in? Redirect to marketing site login
  if (!session) {
    return NextResponse.redirect(new URL('/login?redirect=dashboard', 'https://lcb-ltd.com'))
  }

  // Logged in but no active subscription? Redirect to pricing
  const { data: subscription } = await supabase
    .from('subscriptions')
    .select('status')
    .eq('user_id', session.user.id)
    .eq('status', 'active')
    .single()

  if (!subscription) {
    return NextResponse.redirect(new URL('/pricing?reason=expired', 'https://lcb-ltd.com'))
  }

  return res
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
```

---

## 5. Website Structure with Dashboard

### 5.1 Complete Sitemap

```
┌─────────────────────────────────────────────────┐
│         https://lcb-ltd.com/                     │
│         (Marketing Site - PUBLIC)                │
└─────────────────────────────────────────────────┘

├── /                           # Homepage
│   ├── Hero (tagline + CTA)
│   ├── Services Overview
│   ├── Dashboard Teaser (preview screenshots)
│   ├── Testimonials
│   └── CTA: "Start Free Trial"
│
├── /services                   # Services Overview
│   ├── /services/brokerage
│   ├── /services/consultancy
│   ├── /services/sustainability
│   └── /services/innovation
│
├── /team                       # Team Page
│   └── 5 consultants with bios
│
├── /pricing                    # Pricing & Plans ⭐
│   ├── Plan comparison (Free Trial, Monthly, Annual)
│   ├── Stripe Checkout integration
│   └── FAQ about subscription
│
├── /dashboard-preview          # Dashboard Tour (Public) ⭐
│   ├── Screenshots + descriptions
│   ├── Feature list
│   ├── Video walkthrough (optional)
│   └── CTA: "Start Free Trial"
│
├── /login                      # Login Modal/Page ⭐
│   └── Supabase Auth form
│
├── /signup                     # Signup Page ⭐
│   └── Create account → Stripe → Dashboard
│
├── /account                    # User Account (Protected) ⭐
│   ├── /account/profile        # Edit profile
│   ├── /account/subscription   # Manage subscription (cancel, upgrade)
│   ├── /account/billing        # Billing history (Stripe portal)
│   └── /account/settings       # Preferences
│
├── /blog                       # Free Content (SEO)
│   └── /blog/[slug]
│
├── /resources                  # Free Downloads (Lead Magnets)
│   └── Market reports, guides
│
├── /contact                    # Contact Form
│
├── /privacy                    # Privacy Policy
├── /terms                      # Terms & Conditions
├── /cookies                    # Cookie Policy
│
└── /api
    ├── /api/auth               # Supabase auth endpoints
    ├── /api/checkout           # Stripe Checkout session
    ├── /api/portal             # Stripe Customer Portal
    └── /api/webhooks/stripe    # Stripe webhooks

┌─────────────────────────────────────────────────┐
│      https://dashboard.lcb-ltd.com/             │
│      (Dashboard - SUBSCRIBERS ONLY)              │
└─────────────────────────────────────────────────┘

├── /                           # Dashboard Homepage
│   ├── Overview Tab
│   ├── Spreads Tab
│   ├── Markets Tab
│   └── Data Tab
│
├── /settings                   # Dashboard Settings
│   └── Chart preferences, alerts
│
└── [All existing dashboard routes]
```

### 5.2 New Pages to Build

**For Marketing Site (`lcb-ltd.com`):**

1. **`/pricing` - Pricing Page** ⭐ **CRITICAL**
2. **`/dashboard-preview` - Dashboard Tour**
3. **`/login` - Login Page**
4. **`/signup` - Signup Page**
5. **`/account/*` - Account Management** (4 subpages)

**For Dashboard (`dashboard.lcb-ltd.com`):**

1. **Middleware** - Authentication check
2. **`/welcome` - Onboarding for new users** (optional)
3. **Settings integration** - Logout, profile link

---

## 6. Implementation Plan

### Phase 1: Foundation (Week 1)

**Day 1-2: Marketing Site Base**
- [ ] Build new Next.js site using Cold Lava template
- [ ] Implement branding (colors, logo from existing site)
- [ ] Set up Supabase project + environment variables
- [ ] Create homepage structure

**Day 3-4: Authentication System**
- [ ] Set up Supabase Auth
- [ ] Create `user_profiles` and `subscriptions` tables
- [ ] Build `/login` page
- [ ] Build `/signup` page
- [ ] Implement middleware (marketing site)

**Day 5-7: Content Pages**
- [ ] Build service pages (Brokerage, Consultancy, etc.)
- [ ] Build team page (reuse existing content)
- [ ] Build contact page
- [ ] Add legal pages (Privacy, Terms, Cookies)

---

### Phase 2: Dashboard Integration (Week 2)

**Day 8-9: Stripe Setup**
- [ ] Create Stripe account (or connect existing)
- [ ] Create products + pricing
- [ ] Build `/pricing` page
- [ ] Implement Stripe Checkout
- [ ] Set up webhook endpoint
- [ ] Test subscription flow (test mode)

**Day 10-11: Dashboard Protection**
- [ ] Set up `dashboard.lcb-ltd.com` subdomain (DNS)
- [ ] Deploy existing dashboard to subdomain
- [ ] Implement middleware (dashboard site)
- [ ] Add subscription checks
- [ ] Test authentication flow

**Day 12-13: Account Management**
- [ ] Build `/account/profile` page
- [ ] Build `/account/subscription` page (Stripe portal)
- [ ] Build `/account/billing` page
- [ ] Add logout functionality
- [ ] Test full user journey

**Day 14: Polish & Testing**
- [ ] Add dashboard preview/tour page
- [ ] Add testimonials (if available)
- [ ] Cross-browser testing
- [ ] Mobile testing
- [ ] Security audit

---

### Phase 3: Launch (Week 3)

**Day 15-16: Content & SEO**
- [ ] Write/import all copy
- [ ] Add images (professional photos recommended)
- [ ] Set up blog (if included)
- [ ] Optimize meta tags
- [ ] Set up Google Analytics + tracking

**Day 17-18: Pre-Launch**
- [ ] User acceptance testing
- [ ] Payment testing (real transactions)
- [ ] Email templates (welcome, trial ending, payment failed)
- [ ] Documentation for LCB team

**Day 19: Launch Day**
- [ ] Deploy marketing site to production
- [ ] Deploy dashboard to production subdomain
- [ ] Switch DNS to new site
- [ ] Monitor for errors
- [ ] Stripe live mode enabled

**Day 20-21: Post-Launch**
- [ ] Monitor analytics
- [ ] Fix any bugs
- [ ] Client training session
- [ ] Handoff documentation

---

## 7. Technical Specification

### 7.1 Tech Stack Comparison

| Component | Marketing Site | Dashboard | Shared |
|-----------|---------------|-----------|--------|
| **Framework** | Next.js 14 | Next.js 16 | ✅ Same family |
| **React** | 18 | 19 | ⚠️ Different versions |
| **TypeScript** | 5.9 | 5.x | ✅ Compatible |
| **Styling** | Tailwind 3.4 | Tailwind 4 | ⚠️ Upgrade marketing site |
| **Database** | Supabase | Supabase | ✅ Same |
| **Auth** | Supabase Auth | Supabase Auth | ✅ Same |
| **Hosting** | Vercel | Vercel | ✅ Same |
| **UI Components** | shadcn/ui | Radix UI | ✅ Same (shadcn uses Radix) |

**Recommendation:**
- Upgrade marketing site to Next.js 15+ for consistency
- Use Tailwind 4 on both (or keep 3.4 if simpler)
- Share TypeScript types via npm package or repo monorepo

### 7.2 Shared Code

**Option A: Separate Repos (Current)**
```
/lcb-marketing-site/          → Marketing site
/LCB-DASHBOARD-NOV25/         → Dashboard (existing)
```

**Pros:**
- Independent deployments
- Clearer separation
- Simpler CI/CD

**Cons:**
- Duplicate code (types, utils, components)
- Auth code duplicated

---

**Option B: Monorepo (Recommended for Scale)**
```
/lcb-platform/
├── apps/
│   ├── marketing/            → Marketing site
│   └── dashboard/            → Dashboard
├── packages/
│   ├── ui/                   → Shared components
│   ├── types/                → TypeScript types
│   ├── auth/                 → Auth helpers
│   └── utils/                → Utilities
└── turbo.json               → Turborepo config
```

**Pros:**
- Share code between apps
- Single source of truth
- Easier refactoring

**Cons:**
- More complex setup
- Steeper learning curve
- Vercel monorepo support needed

---

**Recommendation for LCB:**
- **Start with Option A** (separate repos)
- **Keep auth logic in Supabase** (reduces duplication)
- **Share types via copy-paste** (simple for now)
- **Migrate to monorepo later** if needed

---

## 8. Pricing & Revenue Model

### 8.1 Suggested Pricing

**Based on value analysis:**
- 20 years of proprietary data
- Real-time market intelligence
- Professional-grade tools
- Comparable to Bloomberg Terminal (£1,800+/month) but specialized

**Pricing Tiers:**

**Tier 1: Free Trial**
- Duration: 14 days
- Full access to dashboard
- No credit card required (or required, your choice)
- Auto-converts to paid plan

**Tier 2: Monthly Plan** (Starter)
- Price: **£99/month** (or $120/month USD)
- Full dashboard access
- All features included
- Cancel anytime

**Tier 3: Annual Plan** (Professional) ⭐ **Best Value**
- Price: **£999/year** (saves £189 = 2 months free)
- Everything in Monthly
- Priority support
- API access (future)
- Custom reports (future)

**Optional: Enterprise Tier** (future)
- Price: **Custom (£2,500+/year)**
- Multi-user access (5-10 seats)
- Dedicated account manager
- Custom data feeds
- White-label options

### 8.2 Revenue Projections

**Conservative Estimate:**
```
Month 1:  5 paying users  × £99  = £495/month   (£5,940/year)
Month 3:  15 paying users × £99  = £1,485/month (£17,820/year)
Month 6:  30 paying users × £99  = £2,970/month (£35,640/year)
Month 12: 50 paying users × £99  = £4,950/month (£59,400/year)
```

**With Annual Plans (assume 40% choose annual):**
```
Month 12: 30 monthly (£2,970) + 20 annual (£16,650/12 = £1,388) = £4,358/month (£52,296/year)
```

**Lifetime Value (LTV):**
- Average subscription length: 18 months (estimate)
- Monthly plan LTV: £99 × 18 = £1,782
- Annual plan LTV: £999 × 1.5 = £1,499
- Blended LTV: ~£1,640 per customer

**Customer Acquisition Cost (CAC) Target:**
- Target: £500 or less per customer
- Payback period: 5-6 months
- LTV:CAC ratio: 3.3:1 (healthy)

### 8.3 Churn Mitigation

**Strategies:**
- 14-day trial (let them see value first)
- Onboarding email sequence
- Usage alerts ("You haven't logged in for 7 days")
- "Upgrade to annual" incentive (send before renewal)
- Exit surveys (why are you leaving?)
- Win-back campaigns (offer 30% off to come back)

---

## 9. User Journey

### 9.1 New Visitor → Subscriber

**Step 1: Discovery**
```
Google Search: "cotton price data" → https://lcb-ltd.com/
OR
LinkedIn/Twitter → Click link → Homepage
```

**Step 2: Homepage Exploration**
```
Homepage → See dashboard screenshot/preview
→ Read "Professional Market Intelligence"
→ Scroll to "20 years of data" section
→ Click "See Dashboard Preview" OR "Start Free Trial"
```

**Step 3: Dashboard Preview (Optional)**
```
/dashboard-preview page
→ Screenshots + feature list
→ "This dashboard includes:"
  • Real-time cotton prices from 9 global markets
  • Technical analysis tools (SMA, EMA, spreads)
  • 20 years of historical data (5000+ rows)
  • Export to CSV/Excel
  • Price alerts
→ CTA: "Start Your 14-Day Free Trial"
```

**Step 4: Pricing Page**
```
/pricing page
→ Compare plans (Monthly £99 vs Annual £999)
→ See "14-day free trial" badge
→ Read FAQ ("What happens after trial?")
→ Click "Start Free Trial" (Monthly or Annual)
```

**Step 5: Signup**
```
/signup page
→ Enter email, password, name, company
→ Click "Create Account"
→ Email verification sent
→ Click verification link in email
→ Auto-login
```

**Step 6: Stripe Checkout**
```
Stripe Checkout page
→ Enter payment details (credit card)
→ Review: £99/month (or £999/year)
→ See "Trial ends [date] - You won't be charged until then"
→ Click "Subscribe"
→ Payment method saved (not charged yet)
→ Redirect to dashboard.lcb-ltd.com/welcome
```

**Step 7: Welcome / Onboarding**
```
/welcome page (dashboard)
→ "Welcome to LCB Cotton Dashboard!"
→ Quick tour (optional):
  • Click here to see Overview
  • Click here for Spreads
  • Click here for Data export
→ CTA: "Start Exploring" → Dashboard homepage
```

**Step 8: Trial Period**
```
Days 1-14: Full access to dashboard
Day 11: Email: "Your trial ends in 3 days"
Day 14: Email: "Your trial ends today - we'll charge £99 tomorrow"
Day 15: Charged £99 (or £999 if annual)
→ Email: "Payment successful - thanks for subscribing!"
```

### 9.2 Returning Subscriber

**Flow:**
```
https://lcb-ltd.com/ → Click "Login" (top right)
→ Login modal appears
→ Enter email + password
→ Click "Log In"
→ Redirect to dashboard.lcb-ltd.com/
→ Auto-login (JWT from lcb-ltd.com shared)
→ Dashboard homepage
```

**Or Direct:**
```
https://dashboard.lcb-ltd.com/
→ Check if logged in (JWT)
→ If yes: Show dashboard
→ If no: Redirect to lcb-ltd.com/login?redirect=dashboard
→ Login → Return to dashboard
```

### 9.3 Subscription Management

**Cancel Subscription:**
```
dashboard.lcb-ltd.com → Account icon (top right)
→ Click "Account Settings"
→ /account/subscription page
→ Click "Manage Subscription"
→ Redirect to Stripe Customer Portal
→ Click "Cancel Subscription"
→ Confirm: "Cancel at end of billing period"
→ Return to /account/subscription
→ Banner: "Your subscription ends on [date]"
```

**Reactivate:**
```
After cancellation, still have access until period ends
→ Login before period ends
→ Banner: "Your subscription is set to cancel on [date]"
→ Click "Reactivate" button
→ Subscription reactivated
→ Banner disappears
```

**Upgrade to Annual:**
```
/account/subscription page
→ Current: "Monthly - £99/month"
→ Button: "Upgrade to Annual (Save £189/year)"
→ Click → Stripe Checkout
→ Pay prorated amount
→ Subscription updated to Annual
```

---

## 10. Updated Questionnaire

### Additional Questions for LCB Ltd

**Section 11: Dashboard & Subscription (NEW)**

**Q11.1:** Dashboard branding:
- [ ] Keep "LCB Cotton Dashboard" name
- [ ] Rebrand to: __________________
- [ ] Match marketing site branding exactly

**Q11.2:** Pricing strategy:
- [ ] **£99/month + £999/year** (recommended based on value)
- [ ] Lower: £49/month + £499/year (capture more customers)
- [ ] Higher: £149/month + £1,499/year (premium positioning)
- [ ] Custom: £_____/month + £_____/year

**Q11.3:** Free trial:
- [ ] Yes - 14 days (recommended)
- [ ] Yes - 7 days
- [ ] Yes - 30 days
- [ ] No trial - paid from day 1
- [ ] Freemium model (limited features free)

**Q11.4:** Trial requires credit card?
- [ ] Yes - card required, no charge until trial ends (recommended)
- [ ] No - card optional, prompt at end of trial
- [ ] No card - email only (higher churn risk)

**Q11.5:** Dashboard access levels:
- [ ] One plan - everyone gets full access (recommended for launch)
- [ ] Multiple tiers (Basic, Pro, Enterprise)
- [ ] Feature gating (export requires Pro plan, etc.)

**Q11.6:** User limits:
- [ ] Individual accounts only (1 user = 1 subscription)
- [ ] Allow team accounts (1 subscription = 5 users)
- [ ] Enterprise plans with custom user limits

**Q11.7:** Payment methods:
- [ ] Credit/Debit card only (Stripe)
- [ ] Also accept PayPal
- [ ] Also accept bank transfer (manual invoicing for annual)
- [ ] Also accept purchase orders (B2B)

**Q11.8:** Billing region:
- [ ] UK only (GBP £)
- [ ] US + UK (USD $ + GBP £)
- [ ] Global (multi-currency)

**Q11.9:** Invoicing:
- [ ] Automatic (Stripe emails)
- [ ] Custom invoices with company letterhead
- [ ] VAT registration (UK VAT number?)

**Q11.10:** Support included:
- [ ] Email support only
- [ ] Email + live chat
- [ ] Phone support for annual plans
- [ ] Dedicated account manager for enterprise

**Q11.11:** Data updates:
- [ ] Real-time (how often do you update cotton prices?)
- [ ] Daily (end of day)
- [ ] Weekly

**Q11.12:** User onboarding:
- [ ] Automated welcome email sequence
- [ ] Personal onboarding call (high-touch)
- [ ] Video tutorials library
- [ ] Interactive product tour in dashboard

---

## 11. Budget & Timeline

### 11.1 Revised Budget

**Original Estimate (Website Only):** £1,500-2,500

**New Estimate (Website + Dashboard Integration):** £2,500-4,000

**Breakdown:**

**Phase 1: Marketing Site** (£1,500)
- Homepage, services, team, contact (£800)
- Legal pages (£100)
- Blog setup (£200)
- Content writing (if needed) (£400)

**Phase 2: Authentication + Subscription** (£1,000-1,500)
- Supabase Auth setup (£200)
- Login/signup pages (£300)
- Stripe integration (£400)
- Account management pages (£300-600)
- Webhook handling (£200-400)

**Phase 3: Dashboard Protection** (£500-1,000)
- Middleware implementation (£200)
- Subdomain setup (£100)
- Dashboard branding consistency (£200)
- Testing subscription flow (£200-500)

**Testing & Launch** (£500)
- User testing (£200)
- Bug fixes (£200)
- Documentation (£100)

**Total:** £3,500-4,000

### 11.2 Timeline

**Total Duration:** 3-4 weeks

**Week 1:** Marketing site foundation
**Week 2:** Authentication + Stripe
**Week 3:** Dashboard integration + testing
**Week 4:** Polish, launch, post-launch support

**Launch Date:** [To be determined based on start date]

---

## 12. Post-Launch Maintenance

### Monthly Support Options

**Tier 1: Basic Maintenance** (£100/month)
- Security updates
- Bug fixes
- Uptime monitoring
- Email support (48-hour response)

**Tier 2: Growth Plan** (£200/month)
- Everything in Basic
- Content updates (blog posts, pages)
- Analytics reporting (monthly)
- A/B testing for conversion
- Priority support (24-hour response)

**Tier 3: Premium Management** (£400/month)
- Everything in Growth
- Feature development (4 hours/month)
- Marketing support (SEO, ads)
- User feedback implementation
- Weekly check-ins
- Same-day support

---

## Next Steps

1. **Review this plan** with LCB team
2. **Clarify pricing strategy** (what will you charge?)
3. **Approve budget & timeline**
4. **Sign off on architecture** (subdomain vs path-based?)
5. **Kick off Phase 1** (marketing site)

---

**Questions?**
- Email: oliver@otdm.net
- Phone: +44 151 541 6933
- Book a call: https://cal.com/coldlava/

---

*Integration plan prepared for Liverpool Cotton Brokers Ltd*
*Version 1.0 - 2026-01-07*
*Cold Lava AI Ltd*
