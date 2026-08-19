# Goal Description

Build a premium, "slop-free", highly performant website for a wedding photography and filmmaking production house. The visual aesthetic will strictly adhere to the provided Mercury dark-theme design system (Onyx Canvas, Graphite Cards, strict monochrome with Cobalt accents, pill-shaped buttons, and cinematic full-bleed imagery without drop-shadows).

## User Review Required
- **Tech Stack**: I am proposing **Next.js (React) + Vanilla CSS (CSS Modules)**. Next.js is ideal here because a photography/filmmaking site needs heavy image and video optimization for fast load times and SEO, which Next.js provides out-of-the-box (`next/image`). Vanilla CSS allows us to implement the strict Mercury design tokens pixel-perfectly without utility-class clutter. Does this sound good to you?

## Open Questions
- **Site Structure**: What exact pages do you need? (e.g., Home, Portfolio/Films, Portfolio/Photos, Services/Pricing, About, Contact). 
- **Typography**: The Mercury design uses custom fonts (`arcadia` and `arcadiaDisplay`). I recommend substituting **Inter** (for body text) and an architectural, wide-set font like **Outfit** or **Syne** (for display headings). Are you comfortable with these Google Fonts alternatives?
- **Content**: Do you have placeholder or real images/videos we can use for the hero section and portfolio? If not, I can generate some high-quality cinematic placeholder images.

## Proposed Changes

### 1. Foundation & Design System
- Initialize a new Next.js 14 project.
- Create a global `theme.css` file mapping out all Mercury design tokens:
  - **Colors**: `--color-onyx-canvas` (#171721), `--color-graphite-card` (#1e1e2a), `--color-cobalt` (#5266eb), etc.
  - **Spacing**: 72px section gaps, 32px card padding.
  - **Shapes**: 32px pills for buttons, 12px radius for cards.

### 2. Core Reusable Components
- `Button`: Primary (Cobalt fill, pill shape) and Secondary (Ghost outline).
- `Card`: Graphite surface, flat (no shadows), 12px radius.
- `Navigation`: Transparent top bar that transitions to frosted glass (backdrop-blur) on scroll.
- `HeroSection`: 100vh full-bleed cinematic image container with dark overlay and centered typography.

### 3. Pages
- **Home (`/`)**: 
  - Full-bleed cinematic hero section.
  - 2-column or 3-column Graphite Card grids showcasing featured films and photography.
  - Email capture/inquiry form (pill-shaped).

## Verification Plan

### Manual Verification
- **Aesthetic check**: Ensure zero drop shadows are used, Cobalt is only used for primary actions, and spacing feels spacious and deliberate (72px vertical rhythm).
- **Responsive check**: Verify the layout behaves fluidly on mobile screens.
- **Performance**: Run a Lighthouse audit to ensure the heavy media assets do not compromise the "slop-free" performant feel of the site.
