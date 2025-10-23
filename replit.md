# Anthem250 - National Anthem NFT Project

## Overview

Anthem250 is a full-stack web application for launching the NAT250 token - the first-ever NFT of the US National Anthem, performed by professional mezzo soprano Hannah Magnelli. The project commemorates America's 250th anniversary in 2026 by combining patriotic heritage with blockchain technology. The platform features a comprehensive marketing website with educational content for both crypto-native users and NFT beginners, countdown timer to Independence Day 2026, tokenomics visualization, waitlist functionality, and comprehensive legal disclaimers.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
**Framework & Build System:**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool for fast HMR and optimized production builds
- Wouter for lightweight client-side routing (single-page application)

**State Management:**
- TanStack Query (React Query) for server state management and API caching
- Local component state using React hooks for UI interactions
- React Context API for global language/translation state management

**Styling Approach:**
- Tailwind CSS with custom CSS variables for theming
- Patriotic color scheme (red, blue, navy, gold) defined in design guidelines
- shadcn/ui component library built on Radix UI primitives for accessible UI components
- Custom design system following ceremonial/Web3 fusion aesthetic

**Form Handling:**
- React Hook Form for performant form management
- Zod schema validation via @hookform/resolvers
- Waitlist email capture with client-side validation

### Backend Architecture
**Server Framework:**
- Express.js HTTP server with TypeScript
- ES modules architecture throughout the stack
- Development runtime using tsx for TypeScript execution
- Production builds using esbuild for fast bundling

**API Strategy:**
- RESTful API endpoints prefixed with `/api`
- Session-based or stateless API (structure in place, specific auth not implemented)
- Vite middleware integration in development mode
- Static file serving for production builds

### Database & Data Layer
**ORM & Database:**
- Drizzle ORM for type-safe database operations
- PostgreSQL configured with Neon serverless (@neondatabase/serverless)
- Schema-first approach with shared TypeScript definitions
- Zod validation integrated with Drizzle schemas

**Data Models:**
- Users table with username/password fields
- Waitlist table structure implied for email signups
- Schema migrations managed via Drizzle Kit (`npm run db:push`)

**Design Decision:**
The application uses Drizzle ORM which provides flexibility for different database backends. While PostgreSQL/Neon is configured, the schema layer is database-agnostic, allowing for easy migration to other SQL databases if needed.

### Design System Architecture
**Visual Language:**
- Patriotic ceremonial design blending traditional American aesthetics with modern Web3 UI
- Typography: Inter font family (400-900 weights) for body and headings, Playfair Display for ceremonial accents
- Color palette: Patriot Red (0 84% 60%), Patriot Blue (220 90% 56%), Patriot Navy (220 40% 20%), Patriot Gold (43 96% 56%)
- Dark mode support with CSS custom properties for theming

**Component Architecture:**
- Modular section-based components (Hero, Mission, NFT Showcase, Timeline, Tokenomics, Disclaimer, etc.)
- Reusable UI primitives from shadcn/ui (buttons, cards, dialogs, forms)
- Responsive design with mobile-first approach
- Accessibility built-in via Radix UI primitives
- Comprehensive legal disclaimer section with financial warnings and risk notices
- Dedicated Terms & Conditions page with full legal documentation

### Internationalization (i18n)
**Multi-Language Support:**
- Language selector dropdown in header (globe icon) for easy language switching
- Support for 10 languages: English, Spanish, Chinese, French, German, Japanese, Korean, Portuguese, Arabic, Russian
- Translation context using React Context API (`LanguageProvider`)
- Translation files stored in `client/src/lib/translations.ts` with type-safe structure
- Language preference persisted to localStorage (key: 'preferred-language')
- SSR-safe implementation with window guards for browser-only APIs

**Translation Coverage:**
Fully translated sections with complete content:
- Header navigation (Home, About, Tokenomics, Roadmap, Blog, Terms)
- HeroSection (title, subtitle, CTA button)
- CountdownTimer (title, subtitle, time units)
- VideoSection (title, description, caption)
- MissionSection (vision/mission titles, main text, AND all bullet point titles/descriptions)
- ChoosePath (section titles, descriptions, CTA buttons, AND all 8 bullet points for both paths)
- AboutSection (artist title, subtitle, featured label, bio)
- Tokenomics (section title and subtitle)
- RoadmapSection (section title and subtitle)
- TransparencySection (section title and subtitle)
- DisclaimerSection (section title and subtitle)
- HowToParticipate (title, subtitle, step titles/descriptions)
- Waitlist form (title, placeholders, button, messages)
- Footer (copyright text, "Follow Us")

**Recent Enhancement (October 23, 2025):**
Extended translations to include all bullet point content for ChoosePath and MissionSection:
- ChoosePath: 8 new keys (newBullet1-4, expBullet1-4) for beginner and experienced paths
- MissionSection: 14 new keys (visionBullet1-3Title/Text, missionBullet1-4Title/Text) for vision/mission details
- Full translations: English, Spanish, Chinese, French
- Fallback to English: German, Japanese, Korean, Portuguese, Arabic, Russian (via spread operator)

**Note:** Remaining detailed content in AboutSection, RoadmapSection, TransparencySection, and DisclaimerSection (longer paragraphs, technical specifications, legal text) remain in English. Future enhancement could extend translations to these sections.

### Key Architectural Decisions

**Monorepo Structure:**
- `/client` - Frontend React application
- `/server` - Express backend
- `/shared` - Shared TypeScript types and schemas
- Path aliases configured (`@/`, `@shared/`, `@assets/`) for clean imports

**SEO Strategy:**
- Server-side HTML with meta tags for social sharing
- Keyword optimization for "National Anthem NFT", "America 250th anniversary", "NAT250 token"
- Semantic HTML structure for search engine crawling

**Video Background Implementation:**
- Vimeo iframe embed with background playback mode
- Browser autoplay policy handling with fallback to click-to-play overlay
- Cross-browser compatibility (Chrome, Safari, Firefox, Edge)

**Dual User Journey:**
- "New to NFTs" path with educational content and simple onboarding
- "Experienced with Crypto" path with technical tokenomics and roadmap details
- Smart path selection component to guide appropriate user experience

**Legal Documentation:**
- Comprehensive disclaimer section on homepage (financial warnings, political independence, risk notices)
- Dedicated Terms & Conditions page (/terms) with 11 legal sections
- Content sourced from anthem250.com official legal documentation
- Footer links to legal pages for easy access

**Blog System:**
- Blog listing page (/blog) featuring 4 articles from anthem250.com
- Individual article detail pages (/blog/1-4) with full content and featured images
- Cross-page navigation with header routing to homepage sections
- Content: NFT heritage, Solana blockchain advantages, community governance, patriotic NFTs
- External links to anthem250.com for additional resources

## External Dependencies

### Third-Party UI & Styling
- **Radix UI** - Headless UI component primitives (accordion, dialog, dropdown, popover, etc.)
- **Tailwind CSS** - Utility-first CSS framework
- **class-variance-authority** - Type-safe variant management for components
- **Lucide React** - Icon library for UI elements
- **React Icons** - Additional icon sets (FontAwesome brands for social media)

### Data Visualization
- **Recharts** - Chart library for tokenomics visualization (pie charts, bar charts)

### Forms & Validation
- **React Hook Form** - Form state management
- **Zod** - Schema validation library
- **@hookform/resolvers** - Bridge between React Hook Form and Zod

### Database & Backend
- **Drizzle ORM** - TypeScript ORM with type-safe query builder
- **Drizzle Kit** - Schema migrations and database management
- **@neondatabase/serverless** - Serverless PostgreSQL driver for Neon
- **drizzle-zod** - Zod schema generation from Drizzle tables

### Email & File Storage (Configured but not actively used)
- **@sendgrid/mail** - Email service (likely for waitlist confirmations)
- **@google-cloud/storage** - Google Cloud Storage integration
- **Multer** - File upload middleware
- **Nodemailer** - Alternative email service

### Development Tools
- **Vite** - Build tool and dev server
- **tsx** - TypeScript execution for Node.js
- **esbuild** - Fast JavaScript/TypeScript bundler
- **@replit/vite-plugin-runtime-error-modal** - Development error overlay
- **@replit/vite-plugin-cartographer** - Replit-specific development tooling

### Video Integration
- **Vimeo Player API** - Video embedding for Hannah Magnelli's performance
- Custom video background implementation with autoplay handling

### Social Media Integration
- **Sticky Social Media Bar** at top of all pages (position: sticky, z-index 60)
- Links to all 13 platforms: Twitter, Facebook, Instagram, YouTube, Telegram, Discord, WhatsApp, TikTok, LinkedIn, Reddit, Pinterest, Truth Social, Gettr
- Remains visible when scrolling for easy access across all pages
- Social media bar component with branded icons using react-icons (no emojis)

### Email Service
- **Resend API** integration for waitlist email notifications
- Sends formatted emails to anthem250th@gmail.com when users join waitlist
- API key stored in Replit Secrets (RESEND_API_KEY)
- Free plan supports 100 emails/day
- Email sender: onboarding@resend.dev (Resend's default for free accounts)