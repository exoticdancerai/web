# Anthem250 Design Guidelines

## Design Approach: Patriotic Ceremonial with Modern Web3 Fusion

**Strategy**: Blend traditional American ceremonial design with contemporary Web3 aesthetics to honor the 250th anniversary while appealing to both crypto natives and patriotic collectors.

**Reference Inspiration**:
- **Ceremonial Authority**: Smithsonian Institution, National Archives (credibility, heritage)
- **Modern Web3**: OpenSea, Magic Eden (clean cards, data visualization)
- **Premium Minimalism**: Apple.com (elegant white space, focused storytelling)

---

## Core Design Elements

### A. Color Palette

**Primary Patriotic Colors** (Dark Mode Ready):
- **Patriot Red**: 0 84% 60% (primary CTAs, accents)
- **Patriot Blue**: 220 90% 56% (links, secondary actions)
- **Patriot Navy**: 220 40% 20% (dark backgrounds, headers)
- **Patriot Gold**: 43 96% 56% (premium highlights, success states)

**Supporting Colors**:
- **Neutral Slate**: 220 13% 91% (light backgrounds)
- **Deep Charcoal**: 220 20% 14% (dark mode base)
- **Cream White**: 40 40% 97% (content backgrounds)

**Usage Rules**:
- Red for primary CTAs only ("Join Waitlist", "Purchase NFT")
- Gold sparingly for milestones, achievements, premium badges
- Navy for navigation, footers, section dividers
- Blue for informational elements, links, secondary actions

### B. Typography

**Font Families**:
- **Headings**: "Inter" 700-900 (bold, authoritative)
- **Body**: "Inter" 400-500 (clean, readable)
- **Accents**: "Playfair Display" 700 (serif for ceremonial moments - "1776", "250 Years")

**Type Scale**:
- Hero: text-6xl to text-8xl (72-96px)
- Section Headers: text-4xl to text-5xl (36-48px)
- Card Titles: text-xl to text-2xl (20-24px)
- Body: text-base to text-lg (16-18px)
- Captions: text-sm (14px)

**Hierarchy**:
- All-caps for ceremonial headings ("THE FIRST NATIONAL ANTHEM NFT")
- Sentence case for body content (accessibility)
- Letter-spacing: tracking-wide for all-caps, normal for body

### C. Layout System

**Spacing Primitives**: Use Tailwind units of **4, 8, 12, 16, 24** (e.g., p-4, gap-8, mb-12)

**Grid System**:
- Hero: Full-width with max-w-7xl container
- Content: 12-column grid (md:grid-cols-2, lg:grid-cols-3)
- Cards: gap-8 for desktop, gap-4 for mobile

**Section Rhythm**:
- Hero: 90vh to 100vh (impactful first impression)
- Content Sections: py-20 desktop, py-12 mobile
- Component Spacing: mb-16 between major sections

### D. Component Library

**Navigation**:
- Fixed header: bg-patriot-navy with backdrop-blur
- Logo left, navigation center, CTA right
- Mobile: Hamburger with slide-in drawer (patriot-navy background)

**Hero Section**:
- Video background (HTML5 with fallback overlay)
- Centered text overlay with semi-transparent dark gradient
- Primary CTA: Red button, large (h-14, text-lg)
- Typography: White text, all-caps main headline

**Cards** (NFT Display, Features, Tokenomics):
- White background with subtle shadow (shadow-lg)
- Border: border-slate-200, hover: border-patriot-blue
- Padding: p-6 to p-8
- Hover: Transform scale-105 with transition-all duration-300

**Buttons**:
- Primary: bg-patriot-red text-white, hover: bg-patriot-red-hover
- Secondary: bg-patriot-blue text-white
- Outline: border-2 border-white bg-white/10 backdrop-blur-sm (on images/video)
- Size: h-12 (default), h-14 (hero CTAs)

**Data Visualization** (Tokenomics):
- Pie charts: Patriotic color segments (red, blue, gold, navy)
- Bar graphs: Gradient fills (red to gold)
- Progress bars: Striped pattern with stars (CSS background)

**Forms** (Waitlist, Payment):
- Input fields: border-slate-300, focus:ring-patriot-blue
- Labels: text-sm font-medium text-slate-700
- Error states: border-red-500, text-red-600
- Success: border-green-500 with checkmark icon

### E. Visual Effects

**Animations** (Minimal):
- Scroll-triggered fade-in for sections (opacity + translateY)
- Countdown timer: Flip animation for numbers
- Button hover: Subtle scale(1.02) + shadow enhancement
- NO complex parallax or distracting motions

**Shadows & Depth**:
- Cards: shadow-lg (0 10px 30px rgba(0,0,0,0.1))
- Elevated elements: shadow-2xl
- Inset for inputs: shadow-inner

**Borders & Dividers**:
- Section dividers: 1px solid with patriotic gradient
- Card borders: Subtle gray, bright on hover
- Timeline: Vertical line with stars as milestones

---

## Page-Specific Guidelines

### Landing Page Structure

1. **Hero (100vh)**:
   - Video background (Hannah performing, American flag, or historical montage)
   - Centered overlay text: "THE FIRST NATIONAL ANTHEM NFT"
   - Subheading: "Own a Piece of America's 250th Anniversary"
   - Dual CTAs: "Join Waitlist" (red), "Learn More" (outline white with blur)

2. **Mission Section (80vh)**:
   - 2-column layout: Text left, image/illustration right
   - Headline: "What Is Anthem250?"
   - Body: Plain-language explanation with patriotic iconography

3. **Dual Path Selector (60vh)**:
   - Side-by-side cards: "New to NFTs" vs "Crypto Experienced"
   - Icon-driven design (graduation cap vs blockchain nodes)
   - Click triggers smooth scroll to respective content

4. **NFT Showcase Grid (Auto height)**:
   - 3-column grid: Featured NFT cards
   - Each card: Image, title, edition number, price
   - Hover: Lift effect + border glow (patriot-gold)

5. **Timeline (100vh)**:
   - Horizontal scroll or vertical with milestones
   - Years: 1776, 1814 (anthem written), 2024 (NFT), 2026 (250th)
   - Visual: Illustrated timeline with stars and stripes motif

6. **Tokenomics (Auto height)**:
   - Pie chart: Token allocation
   - Bar graph: Price projections ($1.77 to $100+)
   - Stats cards: Total supply, holders, market cap

7. **How to Participate (60vh)**:
   - 3-step process with numbered circles
   - Icons: Email → Wallet → NFT
   - Clear CTAs at each step

8. **Footer (Auto height)**:
   - 4-column layout: About, Links, Contact, Social
   - Newsletter signup form (inline)
   - Patriotic footer graphic (faded flag or eagle)

### Responsive Breakpoints

- **Mobile (base)**: Single column, stacked sections
- **Tablet (md: 768px)**: 2-column grids, larger typography
- **Desktop (lg: 1024px)**: 3-column grids, full layout
- **Wide (xl: 1280px)**: Max-width containers, enhanced spacing

---

## Images & Visual Assets

**Hero Image/Video**:
- Primary: Video of Hannah Magnelli performing the anthem
- Fallback: High-resolution image of American flag waving
- Treatment: Slight blur + dark overlay (30% opacity) for text readability

**Section Images**:
- NFT Cards: Mock-ups of digital certificates with anthem audio waveform
- Timeline: Historical illustrations (1776 signing, anthem performance)
- About Hannah: Professional headshot with subtle patriotic background
- Partnership: America250 official logo with commemorative seal

**Iconography**:
- Use: Lucide React icons for UI elements
- Custom: SVG illustrations for patriotic symbols (eagle, stars, liberty bell)
- Style: Line art with 2px stroke, patriotic color fills

---

## Accessibility & Dark Mode

**Contrast Requirements**:
- Text on backgrounds: Minimum 4.5:1 ratio
- Red CTAs: Ensure sufficient contrast on all backgrounds
- Form inputs: Clear focus states with 2px blue ring

**Dark Mode Palette**:
- Background: Deep charcoal (220 20% 14%)
- Text: Warm white (40 40% 97%)
- Cards: Elevated navy (220 25% 18%)
- Borders: Muted slate (220 15% 30%)

**Consistent Dark Implementation**:
- All form inputs use dark backgrounds
- Maintain patriotic color intensity in dark mode
- Use backdrop-blur on overlays for depth

---

This design creates a premium, patriotic experience that honors American heritage while embracing modern Web3 innovation—perfect for bridging traditional collectors and crypto enthusiasts for the 250STAR launch.