# Cold Lava Website Redesign: Remaining Tasks

**Created:** 2026-01-05
**Branch:** redesign
**Status:** Post-initial implementation. These are the remaining fixes.

---

## Summary

The main structure is complete. These tasks address the remaining gaps, primarily around social proof.

---

## HIGH PRIORITY

---

### TASK 1: Add Testimonials Section

**File:** `src/app/page.tsx`
**Location:** After "Satisfied customers" section, or integrate into that section

**Add these five testimonial quotes:**

**Testimonial 1:**
```
"Incredibly efficient, knowledgeable, and easy to work with. Delivered everything on time, and often ahead of schedule. The end result far exceeded our expectations."

Jack Castle
```

**Testimonial 2:**
```
"Things have completely changed for the better. They helped us automate our whole sales process and built us a website that represents the business brilliantly."

Jason Wides
```

**Testimonial 3:**
```
"We have an AI assistant who answers the phone, grabs details and books jobs. We capture every client possible. Incredibly affordable compared to a full time member of staff."

Austin Eszcori
Detail Dynamics
```

**Testimonial 4:**
```
"Working with Cold Lava has allowed us to rethink our client delivery systems and reshape the way our industry works with data."

Harry Bennett
LCB
```

**Testimonial 5:**
```
"The team's knowledge of AI and system development coupled with their work ethic made them the perfect partners to tackle our team and data challenges. Very pleased."

Mat Cunningham
Upmarket Hotels & Leisure
```

**Styling notes:**
- Keep minimal, no quotation mark graphics or fancy styling
- Muted text for the quote, slightly stronger for the name
- Company name below person name where provided, smaller/muted
- Can display as a carousel, grid, or stacked
- Match existing design system
- Consider showing 3 at a time with subtle rotation or scroll

---

### TASK 2: Add Client Logos

**File:** `src/app/page.tsx`
**Section:** "Satisfied customers"

**Current state:**
```
Detail Dynamics
Greenstar Solar
[Client 3]
```

**Change to:**
- Display actual logo images instead of text names
- Logos will be provided in `/public/logos/clients/`
- Expected files: `detail-dynamics.png`, `greenstar-solar.png`, plus any additional clients
- Greyscale treatment, consistent sizing
- Remove "[Client 3]" placeholder if no third logo provided

**Implementation:**
```jsx
<div className="flex justify-center items-center gap-8 md:gap-12">
  <img src="/logos/clients/detail-dynamics.png" alt="Detail Dynamics" className="h-8 md:h-10 grayscale opacity-70 hover:opacity-100 transition-opacity" />
  <img src="/logos/clients/greenstar-solar.png" alt="Greenstar Solar" className="h-8 md:h-10 grayscale opacity-70 hover:opacity-100 transition-opacity" />
  {/* Add more as provided */}
</div>
```

---

### TASK 3: Remove Placeholders

**File:** `src/app/page.tsx`

**Remove or replace:**

1. **"[Client 3]"** in Satisfied customers section
   - Either add real client or remove entirely

2. **"[Product visualization]"** in BOS section
   - Either add real BOS screenshots or remove the placeholder text
   - If no visuals ready, just remove the placeholder text and keep the section copy-only

**File:** `src/components/Footer.tsx`

3. **"[XXXXXXXX]"** company number
   - Replace with real company number when provided
   - If not yet available, remove the line entirely rather than showing placeholder

---

## MEDIUM PRIORITY

---

### TASK 4: Consider Section Order

**File:** `src/app/page.tsx`

**Current order:**
1. Hero
2. Tech Stack ticker
3. Services
4. Integrations ticker
5. BOS
6. Satisfied customers
7. Process
8. About
9. Contact

**Suggested reorder:**
1. Hero
2. Tech Stack ticker
3. Services
4. Integrations ticker
5. Satisfied customers (with testimonials) — move up
6. BOS
7. Process
8. About
9. Contact

**Rationale:** Social proof before product ask. Show that you've delivered before pitching BOS.

**This is optional.** Current order works, but proof-before-pitch is generally stronger.

---

### TASK 5: Add Specific Outcomes to Client Section (Optional)

**File:** `src/app/page.tsx`
**Section:** Satisfied customers

If you want to add brief outcome statements:

```
Detail Dynamics — Every enquiry captured
Greenstar Solar — 3x faster, higher quality leads
```

**Implementation:** Small text below each logo, muted colour.

**This is optional.** Logos alone work fine.

---

## LOW PRIORITY

---

### TASK 6: BOS Visuals

**File:** `src/app/page.tsx`
**Section:** BOS

When BOS screenshots are ready:
- Add to `/public/images/bos/`
- Replace placeholder area with actual product image
- Consider a single hero screenshot rather than multiple

For now, removing "[Product visualization]" text is sufficient.

---

### TASK 7: Final Copy Polish

**File:** `src/app/page.tsx`

Minor refinements if time permits:

1. **BOS bullets** still have em-dashes at start:
   ```
   * —Not another CRM...
   ```
   Consider removing the em-dashes for cleaner look.

2. **Services section** still has em-dashes in copy:
   ```
   "tailored to how you actually operate — not how a product manager..."
   ```
   Could change to period or comma for less AI-feeling punctuation.

These are minor and optional.

---

## Assets Required from Owner

| Asset | Status | Location |
|-------|--------|----------|
| Detail Dynamics logo | Needed | `/public/logos/clients/detail-dynamics.png` |
| Greenstar Solar logo | Needed | `/public/logos/clients/greenstar-solar.png` |
| Additional client logos | Optional | `/public/logos/clients/` |
| BOS screenshots | Optional | `/public/images/bos/` |
| Company registration number | Needed | For footer |

---

## Checklist

- [ ] Task 1: Add testimonials
- [ ] Task 2: Add client logos (when provided)
- [ ] Task 3: Remove all placeholders
- [ ] Task 4: Consider reordering sections (optional)
- [ ] Task 5: Add outcomes to client section (optional)
- [ ] Task 6: Add BOS visuals (when provided)
- [ ] Task 7: Final copy polish (optional)

---

## Testimonial Copy (Ready to Use)

**Quote 1:**
> Incredibly efficient, knowledgeable, and easy to work with. Delivered everything on time, and often ahead of schedule. The end result far exceeded our expectations.
>
> **Jack Castle**

**Quote 2:**
> Things have completely changed for the better. They helped us automate our whole sales process and built us a website that represents the business brilliantly.
>
> **Jason Wides**

**Quote 3:**
> We have an AI assistant who answers the phone, grabs details and books jobs. We capture every client possible. Incredibly affordable compared to a full time member of staff.
>
> **Austin Eszcori** · Detail Dynamics

**Quote 4:**
> Working with Cold Lava has allowed us to rethink our client delivery systems and reshape the way our industry works with data.
>
> **Harry Bennett** · LCB

**Quote 5:**
> The team's knowledge of AI and system development coupled with their work ethic made them the perfect partners to tackle our team and data challenges. Very pleased.
>
> **Mat Cunningham** · Upmarket Hotels & Leisure

---

## Expected Score After Completion

| State | Score |
|-------|-------|
| Current redesign | 38/50 |
| After these tasks | 42-44/50 |
| High-ticket target | 45+/50 |

The gap to 45+ would require:
- More client logos (recognisable names)
- Video testimonials
- Detailed case studies with measurable outcomes
- FAQ section

These can come later as the business grows.

---

## Notes for Claude Code

- Client logos folder may not exist yet. Create `/public/logos/clients/` if needed.
- Owner will provide logo files. Wait for them before implementing Task 2.
- Remove placeholders even if replacement assets aren't ready. Empty is better than "[placeholder]".
- Keep design minimal. Testimonials should be subtle, not a massive section.
