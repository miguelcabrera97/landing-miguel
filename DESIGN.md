---
name: Cybernetic Craft
colors:
  surface: '#041329'
  surface-dim: '#041329'
  surface-bright: '#2c3951'
  surface-container-lowest: '#010e24'
  surface-container-low: '#0d1c32'
  surface-container: '#112036'
  surface-container-high: '#1c2a41'
  surface-container-highest: '#27354c'
  on-surface: '#d6e3ff'
  on-surface-variant: '#bdc8d1'
  inverse-surface: '#d6e3ff'
  inverse-on-surface: '#233148'
  outline: '#87929a'
  outline-variant: '#3e484f'
  surface-tint: '#7bd0ff'
  primary: '#8ed5ff'
  on-primary: '#00354a'
  primary-container: '#38bdf8'
  on-primary-container: '#004965'
  inverse-primary: '#00668a'
  secondary: '#93ccff'
  on-secondary: '#003351'
  secondary-container: '#3198dc'
  on-secondary-container: '#002c47'
  tertiary: '#ffc174'
  on-tertiary: '#472a00'
  tertiary-container: '#f59e0b'
  on-tertiary-container: '#613b00'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#c4e7ff'
  primary-fixed-dim: '#7bd0ff'
  on-primary-fixed: '#001e2c'
  on-primary-fixed-variant: '#004c69'
  secondary-fixed: '#cce5ff'
  secondary-fixed-dim: '#93ccff'
  on-secondary-fixed: '#001d31'
  on-secondary-fixed-variant: '#004b73'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#041329'
  on-background: '#d6e3ff'
  surface-variant: '#27354c'
typography:
  headline-xl:
    fontFamily: Space Grotesk
    fontSize: 3.5rem
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.03em
  headline-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 2.25rem
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 2.25rem
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 1.75rem
    fontWeight: '600'
    lineHeight: '1.25'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 1.5rem
    fontWeight: '600'
    lineHeight: '1.3'
    letterSpacing: -0.01em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 1.25rem
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0em
  body-lg:
    fontFamily: Geist
    fontSize: 1.125rem
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: -0.01em
  body-md:
    fontFamily: Geist
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0em
  body-sm:
    fontFamily: Geist
    fontSize: 0.875rem
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: 0.01em
  label-md:
    fontFamily: Space Grotesk
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: '1.2'
    letterSpacing: 0.04em
  label-sm:
    fontFamily: Space Grotesk
    fontSize: 0.75rem
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.08em
  code-inline:
    fontFamily: Geist
    fontSize: 0.875rem
    fontWeight: '500'
    lineHeight: '1.4'
    letterSpacing: 0em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-mobile: 1rem
  margin: 2rem
  margin-mobile: 1rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system embodies the intersection of full-stack engineering precision and physical electronics craftsmanship. It serves an independent digital studio delivering web architecture, embedded firmware, and interactive hardware solutions. The visual tone balances industrial engineering discipline with modern, polished developer tooling.

The aesthetic fuses experimental electronics schematic cues with razor-sharp developer UX: deep nocturnal canvas backgrounds, hairline PCB-trace borders, monoline technical grids, and ionized cyan luminescent highlights. Every interface element radiates operational reliability, deterministic logic, and high-performance clarity.

## Colors

The palette draws directly from circuit logic and terminal diagnostics:

- **Primary (`#38bdf8`):** Electric Cyan. Used for active traces, primary calls-to-action, active status signals, and critical focus rings.
- **Secondary (`#0284c7`):** Signal Cobalt. Provides depth behind highlights, subtle interactive hover states, and structural gradient anchors.
- **Tertiary (`#f59e0b`):** Resistor Amber. Borrowed from hardware terminal indicators and diode emitters; used for high-urgency badges, warning indicators, and code delimiter accents.
- **Neutral (`#0a192f`):** Logic Board Deep Navy. The foundational substrate. Tonal surface tiers range from pitch navy (`#030712`) through chassis blue (`#0f172a`) to interactive surface navy (`#1e293b`).

Subtle technical grid lines render at 8% opacity of electric cyan (`rgba(56, 189, 248, 0.08)`), replicating schematic drafting boards.

## Typography

The typographic hierarchy utilizes **Space Grotesk** for headlines, numerical figures, and metadata indicators, providing an engineered, retro-futuristic cadence. Body copy and tabular data utilize **Geist**, ensuring razor-sharp legibility at dense layout configurations.

Display titles should maintain tight letter tracking. Pricing values and technical spec callouts should leverage bold Space Grotesk numerals paired with scaled uppercase currency identifiers. Code samples and schematic pinouts adhere to tabular figures (`font-variant-numeric: tabular-nums`).

## Layout & Spacing

A 12-column rigid grid forms the foundational canvas, adapting to 4 columns on mobile and 8 columns on tablet. Margins and gutters expand proportionally across breakpoints to sustain breathing room around densely packed technical modules.

Rhythm follows a disciplined 8px base grid. Architectural separation lines (PCB traces) span full grid gutters, accentuating vertical columns and modular containment boxes without adding decorative bloat.

## Elevation & Depth

Visual hierarchy abandons diffuse organic drop shadows in favor of monoline luminosity and disciplined surface stacking:

1. **Base Ground (`#030712` to `#0a192f`):** The non-conductive PCB substrate. Features monoline blueprint grids via fine background-gradients.
2. **Container Tier (`#0f172a`):** Raised module surfaces bordered with 1px hairline strokes (`rgba(56, 189, 248, 0.2)`).
3. **Active/Elevated Layer (`#1e293b`):** Interactive cards, modal drawers, and highlighted pricing tiers. Outlines intensify to `rgba(56, 189, 248, 0.6)`.
4. **Photonic Glow:** Interactive elements emit a concentrated 0px blur 1px spread outer line combined with a secondary soft blue halo (`0 0 20px rgba(56, 189, 248, 0.25)`), creating an illuminated hardware console sensation.

## Shapes

With `roundedness: 1`, shapes maintain clean, soft-engineered corners:
- Standard elements (buttons, text inputs, chips) carry a crisp `0.25rem` (4px) corner radius.
- Cards, modules, and diagnostic panels scale up to `0.5rem` (8px).
- Modals, prominent containers, and feature showcases use `0.75rem` (12px).

Rounded geometry remains disciplined and utilitarian—never fluid or pill-shaped—echoing precision milled aluminum enclosures and surface-mount integrated circuits.

## Components

### Buttons
- **Primary:** Background `#38bdf8`, text `#030712`, font weight 600. Emits an electric cyan halo on hover (`box-shadow: 0 0 16px rgba(56, 189, 248, 0.4)`).
- **Secondary (Outline):** 1px border `rgba(56, 189, 248, 0.4)`, background `rgba(15, 23, 42, 0.6)`, text `#38bdf8`. Hover triggers border transition to full `#38bdf8` with glowing text.
- **Ghost:** Transparent background with monoline hover cues.

### Cards & Service Tiers
- Built on `#0f172a` with a 1px border of `rgba(56, 189, 248, 0.15)`.
- Featured/Recommended cards incorporate a prominent top border highlight (`2px solid #38bdf8`) with an inner gradient wash descending into dark navy.
- Checklist rows inside cards feature glowing cyan terminal checkmarks or circuit trace bullets.

### Badges & Status Chips
- Pill-free, softly squared (`4px` radius).
- High-contrast background (`rgba(56, 189, 248, 0.12)`) paired with uppercase `label-sm` Space Grotesk text in `#38bdf8`.
- Live or active status chips integrate an illuminated pulsating terminal dot (`#f59e0b` or `#38bdf8`).

### Input Fields & Controls
- **Inputs:** Dark field `#030712` inset within `#0f172a`. Hairline border of `rgba(255, 255, 255, 0.15)`. Focus state snaps border to `#38bdf8` with a subtle focus glow.
- **Checkboxes & Radios:** Custom micro-switches framed with 1px cyan boundaries, checking with an instant geometric dot fill.

### Terminal & Code Callouts
- Dark inset containers displaying monospaced pathing, API hooks, and hardware pinouts with subtle left-aligned accent guides.