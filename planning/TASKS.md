# Cold Lava Website Redesign: Task List for Claude Code

**Created:** 2026-01-05
**Branch:** redesign
**Goal:** High-ticket, professional, minimal. UK-based consultancy building custom software and AI systems.

---

## Overview

This document contains all tasks to update the Cold Lava website. Each task has:
- Clear description
- File location
- Exact copy (where applicable)
- Priority level

Work through tasks in priority order. Commit after each major section.

---

## Design Principles (Do Not Violate)

- Apple-level minimalism
- Dark background (#000000)
- Single accent: orange (#f97316)
- Outcome-focused copy. No buzzwords, no hype.
- No emojis, no exclamation marks
- Say less, not more
- Every line earns its place

---

## Task List

### HIGH PRIORITY

---

#### TASK 1: Update Hero Subheadline

**File:** `src/app/page.tsx`
**Section:** Hero

**Current:**
```
Custom software, AI agents, and automation for companies done with off-the-shelf compromises.
```

**Change to:**
```
Custom software, AI agents, and automation for UK businesses ready to scale beyond generic tools.
```

**Notes:** Keep H1 as-is. Only change subheadline.

---

#### TASK 2: Replace Stats Section with Client Logos

**File:** `src/app/page.tsx`
**Section:** Proof Band / Stats

**Current:** Three stats (100% 5-star reviews, 40% admin time saved, £100k+ recovered)

**Replace with:**

```
Satisfied customers
[Client Logo 1] [Client Logo 2] [Client Logo 3] [Client Logo 4]
```

**Implementation:**
- Remove the three stat cards
- Add simple heading: "Satisfied customers"
- Display client logos in a row (greyscale, consistent sizing)
- Logos needed: Detail Dynamics, Greenstar Solar, plus any others available

**Styling:**
- Centred layout
- Logos greyscale by default, optional colour on hover
- Subtle, not prominent. This is a trust signal, not a feature.

**If no logos available:** Use placeholder text "Detail Dynamics, Greenstar Solar, [Client 3]" styled subtly until logos are provided.

---

#### TASK 3: Split Tech Ticker into Two Sections

**File:** `src/components/TechTicker.tsx` and `src/app/page.tsx`
**Section:** Tech display

**Current:** Single dual-row ticker with 35+ logos near hero

**Change to two separate tickers:**

**Ticker 1: Tech Stack (near hero, where current ticker is)**
- Tagline: "Modern stack. Serious security. UK-based."
- Logos (12-14 max): Next.js, TypeScript, React, Node.js, Python, Supabase, PostgreSQL, AWS, Vercel, Docker, GitHub
- These signal: "We build properly with serious tools"

**Ticker 2: Integrations (new section, place near Services or before Case Studies)**
- Tagline: "We integrate with the tools you already use"
- Logos: HubSpot, Xero, Stripe, Twilio, WhatsApp, Shopify, Cal.com, Slack, Google, Zapier, Make, n8n, Airtable, OpenAI, Claude/Anthropic, ElevenLabs, Retell, VAPI
- These signal: "We work with your existing systems"

**Styling:**
- Both tickers: single row, slower animation, greyscale with colour on hover
- Keep minimal aesthetic
- Integrations ticker can be slightly smaller/more subtle than tech stack ticker

---

#### TASK 4: Rewrite About Section

**File:** `src/app/page.tsx`
**Section:** About

**Current:**
```
Who we are

Cold Lava is a consultancy and software development company based in Liverpool. We exist because off-the-shelf software fails most businesses and AI has finally made custom solutions accessible.

Oliver
Systems & Operations
Builds the systems. Obsessed with workflows that work.

Jacob
Sales & Strategy
Leads the conversations. Turns cold leads into closed deals.

We're operators first. We've run businesses, felt the pain of bad software, and built Cold Lava to fix it.
```

**Change to:**
```
Who we are

Cold Lava is a software consultancy based in the United Kingdom. We exist because off-the-shelf tools fail most businesses. AI has finally made custom solutions accessible.

We're a small team by design. Every project gets direct attention from senior people. No account managers, no handoffs, no juniors learning on your dime.

Founded by operators who've run businesses, felt the pain of bad software, and built Cold Lava to fix it.
```

**Implementation:**
- Remove individual bio cards (Oliver/Jacob sections)
- Remove photos/placeholders
- Keep as three paragraphs, centred
- No names, no roles. Abstract "founded by operators" framing.

---

#### TASK 5: Replace Case Studies with Client Logos

**File:** `src/app/page.tsx`
**Section:** Work / Case Studies

**Current:** Three case study cards with "View case study" links

**Change to:**

```
Results, not promises

[Client logos displayed here]

Detail Dynamics, Greenstar Solar, [Other clients]
```

**Implementation:**
- Remove the three detailed case study cards
- Keep section heading "Results, not promises"
- Display client logos (same as Task 2, or can be same component)
- Optionally add subtle text below logos listing client names
- Remove all "View case study" links

**Alternative if you want to keep some context:**
```
Results, not promises

We've built systems for vehicle detailing, renewable energy, landscaping, and more.

[Client logos]
```

**Note:** This is a temporary solution. Full case studies can be added later.

---

#### TASK 6: Update Footer

**File:** `src/components/Footer.tsx`
**Section:** Footer

**Current:**
```
© 2026 Cold Lava Ltd. Liverpool, UK.
```

**Change to:**
```
© 2026 Cold Lava Ltd. United Kingdom.
Company No. [XXXXXXXX]
```

**Implementation:**
- Change "Liverpool, UK" to "United Kingdom"
- Add company registration number (placeholder until provided: `[Company No. TBC]`)
- Keep all other footer elements as-is

---

#### TASK 7: Add Filter Line to Contact Section

**File:** `src/app/page.tsx`
**Section:** Contact / Let's Talk

**Current:**
```
Let's talk

Ready to build something? Book a discovery call or send us a message. No pitch decks, no pressure.

[Book a discovery call] [hello@coldlava.ai]
```

**Change to:**
```
Let's talk

Ready to build something? Book a discovery call or send us a message. No pitch decks, no pressure.

We work best with UK businesses ready to invest in systems that last. Not quick fixes.

[Book a discovery call] [hello@coldlava.ai]
```

**Implementation:**
- Add one new line after the existing subhead
- Keep same styling (muted text, same size as subhead)
- This acts as a subtle filter without being gatekeep-y

---

#### TASK 8: Add Quality Framing to Process Section

**File:** `src/app/page.tsx`
**Section:** Process / How We Work

**Current subhead:**
```
Every project follows a clear structure, whether it's a two-week automation or a six-month platform build.
```

**Add after the 4 process steps, as a closing line:**
```
Good, fast, cheap. Pick two. We optimise for good.
```

**Alternative options (pick one):**
- "We don't rush. The best systems take time to get right."
- "We'd rather say no than deliver something half-baked."

**Implementation:**
- Add as a subtle closing line below the 4-step process grid
- Styled as muted text, centred
- This signals quality without saying "we're selective"

---

### MEDIUM PRIORITY

---

#### TASK 9: BOS Section, Placeholder for Visuals

**File:** `src/app/page.tsx`
**Section:** BOS

**Current:** Has `[Product visualisation]` placeholder

**Action:** 
- Keep section as-is for now
- Add code comment noting visuals will be added
- Owner will provide screenshots/UI visuals later

**No copy changes needed.** BOS is a real product and section should remain prominent.

```jsx
{/* TODO: Replace placeholder with actual BOS product screenshots */}
```

---

#### TASK 10: Clean Up Integrations Ticker Logos

**File:** `src/components/TechTicker.tsx` or new `IntegrationsTicker.tsx`

When creating the new Integrations ticker (Task 3), ensure:
- Remove any logos that don't make sense for "integrations" (e.g., Tailwind, Docker shouldn't be in integrations)
- Keep logos that represent tools clients already use that you can connect with
- Ensure consistent sizing and greyscale treatment

---

### LOW PRIORITY / POLISH

---

#### TASK 11: Review All Copy for "Liverpool" References

**Files:** All
**Action:** Search entire codebase for "Liverpool" and replace with "United Kingdom" or remove location specificity where appropriate.

---

#### TASK 12: Mobile Responsiveness Check

**Files:** All components
**Action:** After all changes, test on mobile:
- Hero text sizing
- Ticker scrolling
- Client logos layout
- About section spacing
- Process section grid

---

#### TASK 13: Update Meta/SEO

**File:** `src/app/layout.tsx`
**Action:** Ensure meta description reflects new positioning:

```
Cold Lava: Custom software, AI agents, and automation for UK businesses ready to scale beyond generic tools.
```

---

## Copy Reference

### All Updated Copy in One Place

**Hero Subhead:**
> Custom software, AI agents, and automation for UK businesses ready to scale beyond generic tools.

**Client Logos Section:**
> Satisfied customers

**Tech Stack Tagline:**
> Modern stack. Serious security. UK-based.

**Integrations Tagline:**
> We integrate with the tools you already use

**About Section (full):**
> Who we are
>
> Cold Lava is a software consultancy based in the United Kingdom. We exist because off-the-shelf tools fail most businesses. AI has finally made custom solutions accessible.
>
> We're a small team by design. Every project gets direct attention from senior people. No account managers, no handoffs, no juniors learning on your dime.
>
> Founded by operators who've run businesses, felt the pain of bad software, and built Cold Lava to fix it.

**Contact Filter Line:**
> We work best with UK businesses ready to invest in systems that last. Not quick fixes.

**Process Closing Line:**
> Good, fast, cheap. Pick two. We optimise for good.

**Footer:**
> © 2026 Cold Lava Ltd. United Kingdom.
> Company No. [XXXXXXXX]

---

## Files to Modify

| File | Tasks |
|------|-------|
| `src/app/page.tsx` | 1, 2, 4, 5, 7, 8, 9 |
| `src/components/TechTicker.tsx` | 3, 10 |
| `src/components/Footer.tsx` | 6 |
| `src/app/layout.tsx` | 13 |

---

## Checklist

- [ ] Task 1: Hero subheadline
- [ ] Task 2: Stats to Client logos
- [ ] Task 3: Split tech ticker
- [ ] Task 4: About section rewrite
- [ ] Task 5: Case studies to Client logos
- [ ] Task 6: Footer update
- [ ] Task 7: Contact filter line
- [ ] Task 8: Process quality framing
- [ ] Task 9: BOS visual placeholder note
- [ ] Task 10: Clean integrations logos
- [ ] Task 11: Remove Liverpool references
- [ ] Task 12: Mobile check
- [ ] Task 13: Meta/SEO update

---

## Notes for Claude Code

- Maintain the existing design system (colours, spacing, typography)
- Don't add new dependencies unless necessary
- Commit after each major task or logical grouping
- Test locally before pushing
- When in doubt, err on the side of minimal. Remove rather than add.
