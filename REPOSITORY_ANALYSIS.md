# Repository Analysis & Preparation Report

## 1. Existing Architecture

The repository is a single-page application (SPA) built with **React 18**, **TypeScript 5.7**, **Vite 6**, and **Tailwind CSS 3.4**. It uses a retro-terminal / technical blueprint grid aesthetic ("Onyx Theme") with custom typography, dark/light mode support via the View Transitions API, smooth scrolling via Lenis, and interactive physics/canvas experiences.

### Entry Points & Core Structure
- **HTML Entry Point:** [`index.html`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/index.html) loads Google Fonts (`Instrument Serif`, `Inter`, `JetBrains Mono`), sets initial `class="dark"` on `<html>`, and mounts `#root` via `/src/main.tsx`.
- **Application Bootstrap:** [`src/main.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/main.tsx) mounts `<App />` inside `React.StrictMode` and imports [`src/index.css`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/index.css).
- **Root Component & Providers:** [`src/App.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/App.tsx) wraps the application in:
  1. [`ThemeProvider`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/components/theme-provider.tsx) (dark/light theme state + View Transition circular reveal)
  2. [`LenisProvider`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/components/LenisProvider.tsx) (smooth wheel scrolling)
  3. [`VisitorProvider`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/context/VisitorContext.tsx) (session-based visitor count via CountAPI)
  4. `BrowserRouter` (`react-router-dom` v6)
- **Central Configuration:** [`src/config/site.ts`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/config/site.ts) acts as the single source of truth for personal metadata, bio, status, social links, experience, freelance projects, portfolio projects, skills, writing posts, open-source contributions, and GitHub username.
- **Theme Implementation:** CSS custom properties (`--bg`, `--fg`, `--muted`, `--soft`, `--line`, `--stripe`, `--hover`, `--card`, `--chip`, `--neon-color`, `--neon-glow`) defined in [`src/index.css`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/index.css) under `:root` (dark default) and `.light`. Theme switching uses `document.startViewTransition` with a circular `clip-path` animation expanding from the click coordinates (`--theme-x`, `--theme-y`).
- **Animation Implementation:**
  - **Framer Motion (`framer-motion` & `motion`):** Section reveals, tab pills, command palette, project detail modal, cursor guide follower, floating messages, folder polaroid cards, and quote transitions.
  - **Lenis (`lenis`):** Smooth page scrolling configured in [`LenisProvider.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/components/LenisProvider.tsx).
  - **Matter.js (`matter-js`):** 2D rigid-body physics for the interactive 404 neon sign in [`NotFoundSign.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/components/NotFoundSign.tsx).
  - **Custom Canvas / SVG Physics:** Verlet rope integration in [`HireMeWeb.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/components/HireMeWeb.tsx), [`NotFoundSign.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/components/NotFoundSign.tsx), and [`MemoryBoard.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/components/MemoryBoard.tsx); custom SVG state machine and Web Audio synthesizer in [`VendingMachine.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/pages/experiments/VendingMachine.tsx); live DOM-measuring wireframe preloader in [`Preloader.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/components/Preloader.tsx).

---

## 2. Route Inventory

Defined in [`src/App.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/App.tsx):

| Route Path | Component / Layout | Layout Mode | Description |
| :--- | :--- | :--- | :--- |
| `/` | `MainLayout` (`Hero`, `About`, `Contact`, `Projects`, `Experience`, `OpenSource`, `TechStack`, `Writing`, `GithubActivity`) | Standard (`Nav`, `SideIndex`, `Footer`, `CommandPalette`, `BottomBlur`) | Main portfolio landing page |
| `/projects` | `Projects` (`isSearchable={true}`) | Standard | Full searchable & filterable project catalog |
| `/experience` | `Experience` (`isDetailed={true}`) + `OpenSource` | Standard | Detailed professional experience, freelance work, and open-source PRs |
| `/contact` | `ContactPage` | Standard | Direct inbox, copyable email, social hover cards, live clock, and contact form |
| `/writing` | `WritingPage` | Standard | Articles list (or "Coming Soon" state) and Medium publication card |
| `/experiments` | `ExperimentsPage` | Standard | Playground directory linking to interactive experiments |
| `/experiments/memory-box` | `MemoryBoxPage` (`MemoryBoard`) | Standalone (full-screen fixed, no `Nav`/`Footer`/`BottomBlur`) | Interactive polaroid photo & audio string board |
| `/experiments/vending-machine` | `VendingMachine` | Standalone (no `Nav`/`Footer`/`BottomBlur`) | Interactive isometric SVG vending machine with Web Audio SFX |
| `/experiments/404` | `NotFoundPage` (`NotFoundSign`) | Standalone / 404 (`is404` hides `Nav`, `SideIndex`, `Footer`, `CommandPalette`) | Direct experiment link to the interactive Matter.js 404 sign |
| `*` | `NotFoundPage` (`NotFoundSign`) | 404 Mode | Fallback catch-all 404 route |

---

## 3. Component Inventory

### Layout & Shell (`src/components/`)
- [`Layout.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/components/Layout.tsx): Exports `Shell` (760px centered column with dashed `border-x`), `SectionHeader` (striped band with corner crosshair dots), and `GapBand`.
- [`nav.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/components/nav.tsx): Fixed top navigation bar with scroll-shrinking width, desktop links, mobile drawer, command palette trigger, and theme toggle button.
- [`footer.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/components/footer.tsx): "Scrolled Too Far" CTA, interactive pointer thumbprint canvas (`https://leave-your-thumbprint.vercel.app/`), rotating quote band, and live IST clock.
- [`SideIndex.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/components/SideIndex.tsx): Fixed right-hand section spy navigation visible on `xl` viewports on `/`.
- [`command-palette.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/components/command-palette.tsx): `Ctrl+K` / `⌘K` modal for jumping to routes, searching projects, toggling theme, or copying email.
- [`theme-provider.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/components/theme-provider.tsx): Theme context & View Transition trigger.
- [`LenisProvider.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/components/LenisProvider.tsx): Smooth scroll wrapper.
- [`BottomBlur.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/components/BottomBlur.tsx) & [`BottomBlur.css`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/components/BottomBlur.css): Fixed bottom backdrop-blur gradient mask.

### Interactive & Visual Effects (`src/components/`)
- [`Preloader.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/components/Preloader.tsx) & [`Preloader.css`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/components/Preloader.css): Measures live DOM elements on mount and draws animated blueprint wireframes that dissolve into the real page.
- [`CursorGuide.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/components/CursorGuide.tsx): Spring-animated cursor label follower reading `[data-cursor-label]` attributes on desktop pointers.
- [`HireMeWeb.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/components/HireMeWeb.tsx): Hanging flickering neon "HIRE ME" sign suspended by a Verlet physics rope on the left margin of the Hero section (desktop only).
- [`FolderComponent.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/components/FolderComponent.tsx): 3D interactive folder with polaroid cards in the Hero margin; clicking opens [`MemoryBoard.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/components/MemoryBoard.tsx) in a full-screen portal modal.
- [`MemoryBoard.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/components/MemoryBoard.tsx): Interactive draggable photo nodes connected by physics strings to a central audio/photo frame player. Used by both `FolderComponent` and `MemoryBoxPage`.
- [`FloatingMessage.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/components/FloatingMessage.tsx): Floating avatar bubbles in the desktop margins of `Hero.tsx` that set `data-cursor-label` on hover.
- [`NotFoundSign.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/components/NotFoundSign.tsx): Hanging 404 neon sign with Matter.js draggable number bodies and interactive physics wires.
- [`socials.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/components/socials.tsx): Social pill links with animated profile preview cards on hover.
- [`live-clock.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/components/live-clock.tsx): Live timezone-formatted clock used on `ContactPage`.
- [`icons.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/components/icons.tsx): Custom SVG icons (`GitHubIcon`, `TwitterIcon`, `LinkedInIcon`, `DiscordIcon`, `MediumIcon`, `MailIcon`, `FileIcon`, `ArrowUpRight`).
- [`reveal.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/components/reveal.tsx): Scroll-triggered fade-up wrapper used in `WritingPage` (also exports an unused `SectionHeader` variant).
- [`PixelCursor.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/components/PixelCursor.tsx): Canvas pixel cursor trail component (currently unmounted in `App.tsx`, preserved as a reusable component).
- [`scroll-progress.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/components/scroll-progress.tsx): Top scroll progress bar (currently unmounted in `App.tsx`, preserved as a reusable component).

### Sections (`src/sections/`)
- [`Hero.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/sections/Hero.tsx): Cover banner, avatar switcher with CRT scanline overlay, glitch name heading, rotating role titles, location & visitor counter, command palette badge, plus margin decorations (`FolderComponent`, `HireMeWeb`, `FloatingMessage`).
- [`About.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/sections/About.tsx): Bio paragraphs and "Developer Snapshot" (`site.tldr`) card.
- [`Contact.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/sections/Contact.tsx): 4-column quick contact bar (`GitHub`, `LinkedIn`, `Mail`, `Resume`).
- [`Projects.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/sections/Projects.tsx) & [`ProjectCard.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/sections/ProjectCard.tsx): Category-filterable and searchable project grid with portal-based project detail modal.
- [`Experience.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/sections/Experience.tsx): Work history list and conditional `freelanceProjects` showcase.
- [`OpenSource.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/sections/OpenSource.tsx): Merged PRs list (renders `null` when `site.openSourceContributions` is empty).
- [`TechStack.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/sections/TechStack.tsx): Category-filtered skill badges using `@iconify/react`.
- [`Writing.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/sections/Writing.tsx): Blog post list (renders `null` on home page when `site.writing` is empty).
- [`GithubActivity.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/sections/GithubActivity.tsx): 53-week GitHub contribution heatmap powered by [`useGithubHeatmap.ts`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/hooks/useGithubHeatmap.ts).

---

## 4. Dependency Inventory

### Production Dependencies (`dependencies`)
| Package | Version | Usage in Repository |
| :--- | :--- | :--- |
| `react` | `^18.3.1` | Core UI library |
| `react-dom` | `^18.3.1` | DOM rendering, `createPortal`, `flushSync` |
| `react-router-dom` | `^6.29.0` | Client-side routing (`BrowserRouter`, `Routes`, `Route`, `Link`, `useNavigate`, `useLocation`) |
| `framer-motion` | `^11.18.0` | Primary animation library across sections, modals, nav, and cursor guide |
| `motion` | `^14.0.0` | Used in `src/components/FolderComponent.tsx` (`motion/react`) |
| `lenis` | `^1.3.26` | Smooth scrolling in `LenisProvider.tsx` and CSS import in `src/index.css` |
| `lucide-react` | `^0.475.0` | UI icons across sections, navigation, and modals |
| `@iconify/react` | `^6.0.2` | Tech stack brand logos and category icons in `TechStack.tsx` |
| `matter-js` | `^0.20.0` | 2D physics engine for `NotFoundSign.tsx` |
| `@vercel/analytics` | `^2.0.1` | `<Analytics />` component in `App.tsx` |
| `gsap` | `^3.13.0` | Installed in `package.json` (not currently imported in `src/`, preserved per constraints) |
| `@gsap/react` | `^2.1.2` | Installed in `package.json` (not currently imported in `src/`, preserved per constraints) |

### Development Dependencies (`devDependencies`)
- **Build & Bundler:** `vite` (`^6.1.0`), `@vitejs/plugin-react` (`^4.3.4`), `typescript` (`^5.7.3`)
- **Styling:** `tailwindcss` (`^3.4.17`), `postcss` (`^8.5.1`), `autoprefixer` (`^10.4.20`)
- **Type Definitions:** `@types/react`, `@types/react-dom`, `@types/node`, `@types/matter-js`

---

## 5. Asset Inventory

All static assets reside in `public/` and are referenced via root-relative URLs:

- **Profile & Banner Assets:**
  - `/profile.webp` — Primary avatar, favicon (`index.html`), and `FloatingMessage` avatar
  - `/profile2.webp` — Secondary switchable avatar in `Hero.tsx`
  - `/social-banner.gif` — Hero cover banner (`site.bannerImage`) and social hover card banner (`site.socialBannerImage`)
- **Project Previews (`public/project-images/`):**
  - `bidding-wars.webp`, `deployit.webp`, `devhub.webp`, `linkshub.webp`, `rip-vscode.webp`, `slush.webp`, `voice-rag.webp`
- **Experiment Thumbnails (`public/assets/experiments/`):**
  - `memory-box.webp`, `vending-machine.webp`, `404.webp`
- **Memory Box Photos (`public/assets/photos/`):**
  - `photo2.webp`, `photo3.webp`, `photo4.webp`, `photo5.webp`, `photo6.webp`, `photo8.webp`, `photo10.webp`, `photo12.webp`, `photo13.webp`, `photo14.webp`, `photo15.webp` (used in `MemoryBoard.tsx` and `FolderComponent.tsx`)
- **Memory Box Audio (`public/assets/music/`):**
  - `billieJean.mp3`, `blindingLights.mp3`, `dtmf.mp3`, `football.mp3` (used by `MemoryBoard.tsx` for `photo13.webp`), `getLucky.mp3`, `loveme.mp3`, `masakali.mp3`, `mcsher.mp3`, `mountains.mp3`, `nightchanges.mp3`, `raftaar.mp3`, `raghunath.mp3`, `spiderMan.mp3`, `sunflower.mp3`, `TLITB.mp3`
- **Custom Fonts (`public/fonts/amiamie/`):**
  - `otf/` and `ttf/` variants of `Amiamie` and `Amiamie-Round` (`Regular`, `Italic`, `Light`, `LightItalic`, `Black`, `BlackItalic`, `RegularRound`, `BlackRound`, `BlackItalicRound`, `ItalicRound`)
- **SEO & Metadata:**
  - `public/robots.txt` and `public/sitemap.xml`

---

## 6. Environment Variable Requirements

- **Current Requirement:** **None.**
- A search across the codebase for `import.meta.env` and `process.env` confirmed zero environment variables are required to run, build, or deploy the project. All external endpoints use public URLs configured directly in code.

---

## 7. External Integration Inventory

1. **CountAPI Visitor Counter ([`src/context/VisitorContext.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/context/VisitorContext.tsx)):**
   - **Endpoint:** `https://countapi.mileshilliard.com/api/v1/{get|hit}/harshit_portfolio_views`
   - **Behavior:** Increments once per browser session (`sessionStorage` key `harshit_portfolio_visited`) and falls back gracefully to `0` on network failure.
2. **GitHub Contributions API ([`src/hooks/useGithubHeatmap.ts`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/hooks/useGithubHeatmap.ts)):**
   - **Endpoint:** `https://github-contributions-api.jogruber.de/v4/${user}?y=last`
   - **Behavior:** Fetches live contribution counts for `site.github.username` and falls back to a deterministic pseudo-random generator (`buildFallbackHeatmap`) if offline or rate-limited.
3. **Vercel Analytics ([`src/App.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/App.tsx)):**
   - **Component:** `<Analytics />` from `@vercel/analytics/react`.
4. **Iconify CDN ([`src/sections/TechStack.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/sections/TechStack.tsx)):**
   - **Library:** `@iconify/react` fetches SVG icon definitions on demand from the Iconify API.
5. **Google Fonts (`index.html` & `MemoryBoard.tsx`):**
   - Loads `Instrument Serif`, `Inter`, `JetBrains Mono` in `index.html`, and `Space Grotesk` in `MemoryBoard.tsx`.

---

## 8. Football Game Removal Summary

### Checked References & Usages
- `src/components/football/FootballBanner.tsx` — Imported only in `src/sections/Hero.tsx`.
- `src/components/football/engine.ts` — Imported only in `FootballBanner.tsx` and `ResultScreen.tsx`.
- `src/components/football/ResultScreen.tsx` — Imported only in `FootballBanner.tsx`.
- `src/components/football/Sound.ts` — Imported only in `FootballBanner.tsx` (synthesized Web Audio API sound effects; no external audio files).
- `public/assets/music/football.mp3` — Checked usage: referenced in `src/components/MemoryBoard.tsx` (`{ caption: "Yes sir", img: "/assets/photos/photo13.webp", audio: "/assets/music/football.mp3" }`). **Preserved** so the Memory Box experience remains 100% intact.

### Changes Made
1. **Updated [`src/sections/Hero.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/sections/Hero.tsx):**
   - Removed `import { FootballBanner } from "@/components/football/FootballBanner";`.
   - Restored the original static/GIF cover banner inside `<Shell className="">` using `site.bannerImage` (`/social-banner.gif`) and the exact original CRT scanline/gradient overlays (`h-36 sm:h-44 border border-[var(--line)] bg-neutral-950`), preserving all surrounding layout, spacing, borders, and profile positioning.
2. **Removed `src/components/football/`:**
   - Deleted `FootballBanner.tsx`, `engine.ts`, `ResultScreen.tsx`, and `Sound.ts`.

---

## 9. Remaining Technical Issues & Observations

1. **Hardcoded Author References Outside `site.ts`:**
   - While `src/config/site.ts` centralizes most content, several files contain hardcoded strings or handles that will need updating during the content personalization phase:
     - [`index.html`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/index.html): `<title>` and `<meta name="description">`.
     - [`public/robots.txt`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/public/robots.txt) & [`public/sitemap.xml`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/public/sitemap.xml): Hardcoded `https://harshitr.me` URLs.
     - [`src/context/VisitorContext.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/context/VisitorContext.tsx): `KEY = "harshit_portfolio_views"` and `sessionStorage` key `"harshit_portfolio_visited"`.
     - [`src/components/Preloader.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/components/Preloader.tsx): Corner blueprint note `sheet 01 · harshit · setting out` (line 321).
     - [`src/components/socials.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/components/socials.tsx): `hoverCardsData` contains hardcoded handles (`@harshit403-pixel`, `in/harshit-raghuwanshi-278243281`, `YOUR_EMAIL@gmail.com`) and bios.
     - [`src/components/command-palette.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/components/command-palette.tsx) & [`src/sections/Writing.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/sections/Writing.tsx): Hardcoded `https://medium.com/@harshuraghu7999` subtitle/label.
     - [`src/sections/Hero.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/sections/Hero.tsx): `HEADLINE_TITLES` array and `/profile.webp` image paths on `FloatingMessage` instances.
2. **Contact Form Submission (`ContactPage.tsx`):**
   - The form in [`ContactPage.tsx`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/pages/ContactPage.tsx) currently simulates submission locally with a `setTimeout` and does not send data to a backend or email service (e.g., Formspree/Resend/EmailJS).
3. **Projects Search Query Parameter:**
   - `CommandPalette.tsx` navigates to `/projects?search=<title>`, whereas `Projects.tsx` uses local `searchQuery` state without initializing from `useSearchParams()`.

---

## 10. Recommended Next Implementation Phase

1. **Phase 2 — Identity & Content Configuration:**
   - Update [`src/config/site.ts`](file:///c:/Users/saikr/OneDrive/Desktop/personal-portfolio/src/config/site.ts) with the new owner's name, role, location, email, bio, `tldr`, social URLs, experience, projects, skills, writing, open-source contributions, and GitHub username.
   - Replace hardcoded strings in `index.html`, `VisitorContext.tsx`, `Preloader.tsx`, `socials.tsx`, `command-palette.tsx`, `Writing.tsx`, `Hero.tsx`, `robots.txt`, and `sitemap.xml` (or bind them dynamically to `site.ts`).
2. **Phase 3 — Asset Replacement:**
   - Replace `/profile.webp`, `/profile2.webp`, `/social-banner.gif`, project screenshots in `public/project-images/`, and optionally customize the photos/audio in `public/assets/photos/` and `public/assets/music/` for the Memory Box.
3. **Phase 4 — Optional Enhancements & Polish:**
   - Connect `ContactPage.tsx` form to an email/form backend if live form submissions are desired.
   - Sync `Projects.tsx` search input with URL query parameters (`?search=`) so Command Palette project deep-links filter automatically.

