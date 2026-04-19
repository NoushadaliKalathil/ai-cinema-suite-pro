# Design Brief: AI Cinema Suite Pro

**Purpose**: 4K ultra-wide cinematic landing page for professional BYOK software. Emotional state: creative sovereignty, premium tech, high-impact conversion.

**Tone**: Dark maximalist, cinematic trailer aesthetic, electric accents cutting through void.

**Differentiation**: Pulsing CTAs, glowing violet data flows, horizontal lens flare hero, ultra-sharp edges (radius: 0), high-contrast dark palette.

## Color Palette

| Token | OKLCH | Hex | Usage |
|-------|-------|-----|-------|
| Background | 0.06 0 0 | #0a0a0a | Deep matte black, dominant surface |
| Foreground | 0.95 0 0 | #f3f3f3 | Primary text on dark backgrounds |
| Primary (Azumni Blue) | 0.55 0.25 271 | #00A3FF | CTA buttons, highlights, primary borders |
| Secondary (Violet) | 0.45 0.28 310 | #8B00FF | Magical features, data flows, storytelling |
| Accent (Cyan) | 0.75 0.18 250 | #00E5FF | Sub-headlines, secondary accents |
| Gold | 0.78 0.2 70 | #FFD700 | Footer center, premium highlights |
| Muted | 0.15 0 0 | #262626 | Secondary surfaces, reduced emphasis |
| Border | 0.2 0 0 | #333333 | Structural dividers, subtle borders |
| Card | 0.1 0 0 | #1a1a1a | Module containers, charcoal slate base |

## Typography

| Layer | Font | Size | Weight | Usage |
|-------|------|------|--------|-------|
| Display | Bricolage Grotesque | 3.5–4.5rem | 700–900 | Headlines, hero, "OWN THE FUTURE" |
| Body | General Sans | 1–1.25rem | 400–600 | Body copy, descriptions, sub-text |
| Mono | Geist Mono | 0.875–1rem | 400–700 | Code, technical labels, data |

**Line height**: 1.3 for headlines, 1.6 for body (tight cinematic feel).

## Structural Zones

| Zone | Background | Border | Treatment |
|------|------------|--------|-----------|
| Hero | `bg-background` | None | Lens flare effect, centered void, minimal borders |
| Header/Nav | `bg-card` with `border-b` | `border-blue-glow` | Sharp edges, high contrast |
| Content Sections | Alternate `bg-background` / `bg-card` | `border-border` | Grid layouts with glow borders |
| Module Cards | `bg-card` | `border-blue` or `border-violet` glow | Ultra-sharp, glowing perimeter |
| CTA Buttons | `bg-primary` (blue) | None, glow shadow | Pulsing animation, high saturation |
| Footer | Split left/right with center gold | `border-t` blue/violet | Premium final anchor |

## Component Patterns

- **Buttons**: Pulsing blue glow (`pulse-glow` animation), sharp edges, 2px inset glow, high contrast
- **Cards**: Glowing borders (blue or violet), dark background, minimal padding, ultra-sharp radius (0)
- **Text**: Ultra-bold display fonts, tight tracking, all-caps for headlines
- **Borders**: 1–2px solid, high saturation (blue/violet), subtle glow on hover

## Motion & Animation

| Animation | Duration | Easing | Usage |
|-----------|----------|--------|-------|
| `pulse-glow` | 2s | cubic-bezier(0.4, 0, 0.6, 1) | CTA buttons breathing, pulsing shadow |
| `lens-flare-fade` | 3s | ease-out | Hero lens flare horizontal bar fade |
| Hover glow | 0.3s | ease-in-out | Border and text glow on interaction |

## Responsive Breakpoints

Primary: 3840×1645 (4K ultra-wide). Secondary: 2560×1440, 1920×1080. Mobile: 375×667 (stacked layout, single-column).

## Constraints

- **Dark mode only** (no light variant)
- **No rounded corners** except where semantically intentional (radius: 0 default)
- **Color function mixing banned**: OKLCH values in OKLCH functions only
- **No arbitrary color classes**: semantic tokens only (`bg-primary`, `border-blue-glow`)
- **High saturation colors**: blue/violet at full chroma for maximum impact
- **Glowing effects**: box-shadow based, no blur filters

## Signature Detail

Horizontal lens flare cutting through the center of the hero in Azumni Blue, fading left-to-right. Pulsing CTA buttons with breathing glow shadow that expands/contracts every 2 seconds, creating urgency and cinematic energy.
