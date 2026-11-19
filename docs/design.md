---
colors:
  background: "#FFFFFF"
  border: "#DDD9CF"
  inverse: "#FFFFFF"
  primary: "#193E30"
  primary-hover: "#244D3C"
  sage: "#879782"
  sage-light: "#B7C4B3"
  secondary: "#42634A"
  surface: "#FFFFFF"
  text: "#292B27"
  text-muted: "#777970"
description: Proposed AI-ready design tokens and implementation guidance
  for a premium hospitality website demo. Values are provisional until
  verified against official MAYFAIR brand assets.
name: MAYFAIR Hotels & Resorts --- Demo Design System
rounded:
  full: 9999px
  none: 0px
  small: 4px
  subtle: 2px
spacing:
  1: 4px
  10: 40px
  12: 48px
  16: 64px
  2: 8px
  20: 80px
  24: 96px
  3: 12px
  30: 120px
  4: 16px
  5: 20px
  6: 24px
  8: 32px
typography:
  body:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.65
  body-small:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.5
  display:
    fontFamily: Playfair Display
    fontSize: clamp(2.625rem, 5.2vw, 5.5rem)
    fontWeight: 400
    lineHeight: 1.08
  h1:
    fontFamily: Playfair Display
    fontSize: clamp(2.25rem, 4vw, 4rem)
    fontWeight: 400
    lineHeight: 1.12
  h2:
    fontFamily: Playfair Display
    fontSize: clamp(1.875rem, 3vw, 3rem)
    fontWeight: 400
    lineHeight: 1.15
  h3:
    fontFamily: Playfair Display
    fontSize: clamp(1.5rem, 2vw, 2rem)
    fontWeight: 500
    lineHeight: 1.2
  label:
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif"
    fontSize: 0.75rem
    fontWeight: 600
    letterSpacing: 0.1em
    lineHeight: 1.2
version: 1.0
---

# MAYFAIR Hotels & Resorts --- Design System

> **Purpose:** A practical visual and interaction specification for
> AI-assisted development of the MAYFAIR demo website.
>
> **Project scope:** Homepage and selected high-value supporting pages.
> This document defines the proposed demo design system; it is not an
> official MAYFAIR brand-guideline document.
>
> **Brand accuracy note:** The colour values below are a proposed,
> production-ready interpretation of MAYFAIR's heritage-green identity.
> They are not represented as exact values extracted from the live
> site's CSS or an approved corporate brand book. Before launch, replace
> or confirm them against official logo artwork, stylesheet values, and
> supplied brand assets. The font choices are proposed web typography,
> not verified existing MAYFAIR font files.

------------------------------------------------------------------------

## 1. Design intent

Create a refined, contemporary five-star hospitality experience that
feels distinctly MAYFAIR: rooted in Indian hospitality, nature,
architecture, culture, and thoughtful service.

The website should combine:

-   **Understated luxury:** confident typography, generous whitespace,
    precise alignment, and restrained decoration.
-   **Editorial storytelling:** large, carefully art-directed
    photography and concise copy.
-   **Cinematic atmosphere:** immersive property imagery and subtle,
    purposeful motion.
-   **Effortless utility:** clear navigation, discoverable properties,
    and a friction-conscious booking journey.
-   **Brand continuity:** retain heritage green as the principal brand
    cue; do not turn the design into a generic black-and-gold luxury
    template.

### Experience principles

1.  Show the destination before explaining it.
2.  Prioritize real MAYFAIR properties and authentic photography over
    generic stock imagery.
3.  Keep booking actions visible and understandable without making the
    interface feel sales-heavy.
4.  Use fewer, stronger content sections rather than repeating the same
    brand messages.
5.  Every animation must support orientation, hierarchy, or
    storytelling.
6.  Maintain accessibility and performance as design requirements, not
    afterthoughts.

------------------------------------------------------------------------

## 2. Brand and visual direction

### Design keywords

`Understated luxury` · `Indian heritage` · `Nature-led` · `Editorial` ·
`Architectural` · `Warm` · `Cinematic` · `Timeless`

### Avoid

-   Generic black-and-gold luxury styling as the dominant identity.
-   Excessive gradients, glassmorphism, neon colours, and glowing
    effects.
-   Overuse of rounded cards and pill-shaped controls.
-   Dense, catalogue-like grids.
-   Decorative animations that delay content or interfere with
    scrolling.
-   Stock photography that misrepresents a MAYFAIR property.
-   All-caps body copy, tiny low-contrast text, and long unbroken
    paragraphs.

------------------------------------------------------------------------

## 3. Colour system

### 3.1 Core palette

The following HEX values are the **proposed demo tokens**. Keep them
centralized in CSS variables or the project's existing token system. Do
not scatter raw colour values through components.

  ------------------------------------------------------------------------
  Token                    HEX                     Intended use
  ------------------------ ----------------------- -----------------------
  `--color-forest`         `#193E30`               Primary brand surface,
                                                   footer, selected
                                                   navigation, primary
                                                   buttons

  `--color-botanical`      `#42634A`               Secondary green, hover
                                                   states, supporting
                                                   brand accents

  `--color-sage`           `#879782`               Muted decorative
                                                   accents, subtle borders
                                                   or supporting graphics

  `--color-sage-light`     `#B7C4B3`               Small text, fine rules
                                                   and highlights on
                                                   forest green (about
                                                   6.5:1 on forest)

  `--color-ivory`          `#F5F1E8`               Main warm page
                                                   background

  `--color-paper`          `#FBFAF6`               Cards, forms, light
                                                   content surfaces

  `--color-charcoal`       `#292B27`               Main text and dark
                                                   neutral surfaces

  `--color-muted`          `#777970`               Secondary text; verify
                                                   contrast for each use

  `--color-border`         `#DDD9CF`               Subtle dividers and
                                                   input borders

  `--color-white`          `#FFFFFF`               Text on dark surfaces
                                                   and selected clean
                                                   surfaces
  ------------------------------------------------------------------------

### 3.2 Semantic tokens

  Token                     Value       Usage
  ------------------------- ----------- ------------------------------------
  `--color-background`      `#F5F1E8`   Default page background
  `--color-surface`         `#FBFAF6`   Cards, panels, forms
  `--color-text`            `#292B27`   Primary text
  `--color-text-muted`      `#777970`   Supporting text
  `--color-primary`         `#193E30`   Primary actions and brand elements
  `--color-primary-hover`   `#244D3C`   Primary hover state
  `--color-sage-light`      `#B7C4B3`   Small text and rules on forest green
  `--color-divider`         `#DDD9CF`   Borders and separators
  `--color-inverse`         `#FFFFFF`   Text on dark backgrounds

### 3.3 Colour usage rules

-   Use ivory and paper for most content backgrounds; use forest green
    as a deliberate anchor.
-   Primary CTAs should use forest green with white text.
-   The palette is greens only: forest (dark), botanical, sage and
    sage-light (light), on ivory and paper. There is no gold or other
    warm accent colour.
-   On forest green use sage-light for small text; sage (#879782) is
    for large text and fine rules only.
-   Use charcoal rather than pure black for most text.
-   Do not place muted sage text on ivory at small sizes without
    checking contrast.
-   Avoid using green for every section. Alternate light editorial
    sections with occasional dark, immersive sections.
-   Do not introduce new colours without adding a named token and
    documenting its purpose.
-   Use semantic status colours only when needed for validation or
    booking states; do not repurpose brand green for error
    states.

### 3.4 Contrast and accessibility

Target WCAG 2.2 AA contrast: - Normal text: at least 4.5:1. - Large
text: at least 3:1. - Meaningful UI boundaries and focus indicators: at
least 3:1 against adjacent colours.

Check actual foreground/background combinations with a contrast checker
before release. The palette is a starting point, not proof that every
pairing passes.

------------------------------------------------------------------------

## 4. Typography

### 4.1 Proposed type family

Use a restrained two-family system:

  --------------------------------------------------------------------------
  Role              Font                 Weight            Use
  ----------------- -------------------- ----------------- -----------------
  Display /         `Playfair Display`   400, 500          Hero, section
  editorial                                                headings,
  headings                                                 editorial
                                                           statements

  Body / interface  `Manrope`            400, 500, 600,    Paragraphs,
                                         700               navigation,
                                                           forms, buttons,
                                                           metadata
  --------------------------------------------------------------------------

**Fallback stacks**

``` css
--font-display: "Playfair Display", Georgia, "Times New Roman", serif;
--font-body: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
```

Load font files locally or through an approved font provider. Use only
the weights actually required. Ensure font-display behaviour avoids
invisible text during loading.

If official MAYFAIR brand fonts are supplied, evaluate and substitute
them before final delivery while preserving the type scale and
hierarchy.

### 4.1.1 Existing MAYFAIR CSS observation

The following declaration was supplied from inspection of the current website:

```css
font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
  "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
  "Helvetica Neue", sans-serif;
```

This is a cross-platform system-font stack. It does not identify one custom typeface, and the declaration alone does not prove that every heading or component uses the same stack. Inspect computed styles on the `body`, headings, navigation, and booking controls before claiming a complete inventory of the live site's typography.

For this demo, use that system stack for functional/interface typography. Use `Playfair Display` as the proposed editorial display face to introduce a more distinctive luxury hierarchy. If further inspection finds a separate existing heading font or MAYFAIR supplies official font files, review the pairing before implementation.

### 4.2 Type scale

Use fluid sizing with `clamp()` where appropriate.

  ----------------------------------------------------------------------------
  Token                    Desktop target        Mobile target Typical use
  ------------------ -------------------- -------------------- ---------------
  `--text-display`               64--88px             42--54px Hero headline

  `--text-h1`                    52--64px             36--44px Page title

  `--text-h2`                    40--48px             30--36px Major section
                                                               heading

  `--text-h3`                    28--32px             24--28px Card /
                                                               subsection
                                                               title

  `--text-h4`                    21--24px             19--22px Smaller heading

  `--text-body-lg`               18--20px             17--18px Introductory
                                                               copy

  `--text-body`                      16px                 16px Standard body

  `--text-small`                     14px                 14px Supporting
                                                               content

  `--text-caption`               12--13px             12--13px Metadata; never
                                                               essential
                                                               long-form
                                                               content
  ----------------------------------------------------------------------------

### 4.3 Typography rules

-   Use display serif for meaningful headlines, not every label.
-   Use Manrope for navigation, booking UI, body copy, buttons, and
    forms.
-   Body line-height: `1.55–1.75`.
-   Heading line-height: `1.05–1.2`.
-   Keep paragraph measure around 55--75 characters on desktop.
-   Use sentence case for navigation and buttons; reserve uppercase for
    short eyebrow labels.
-   Eyebrow labels: 11--12px, medium weight, modest letter spacing
    (`0.08em–0.14em`).
-   Avoid long blocks of centered body copy.
-   Do not use ultra-light font weights for functional text.
-   Do not use more than two font families without a documented reason.

------------------------------------------------------------------------

## 5. Layout, grid, and spacing

### 5.1 Container system

Use a consistent responsive container:

``` css
.container {
  width: min(100% - 48px, 1440px);
  margin-inline: auto;
}

@media (max-width: 767px) {
  .container {
    width: min(100% - 40px, 100%);
  }
}
```

Recommended maximum content width: `1440px`. Wide cinematic media may
bleed to the viewport edges, while text and controls remain aligned to
the main container.

### 5.2 Spacing scale

Use a 4px base scale. Prefer these tokens over arbitrary values.

  Token            Value Typical use
  -------------- ------- -------------------------------------
  `--space-1`        4px Tiny icon/text separation
  `--space-2`        8px Tight inline spacing
  `--space-3`       12px Compact control spacing
  `--space-4`       16px Standard component gap
  `--space-5`       20px Form and card spacing
  `--space-6`       24px Standard layout gap
  `--space-8`       32px Group spacing
  `--space-10`      40px Compact section spacing
  `--space-12`      48px Section interior spacing
  `--space-16`      64px Section separation
  `--space-20`      80px Large editorial spacing
  `--space-24`      96px Major desktop section spacing
  `--space-30`     120px Hero / large section breathing room

### 5.3 Section spacing

-   Desktop: generally `88–120px` vertical section padding.
-   Tablet: generally `64–88px`.
-   Mobile: generally `48–64px`.
-   Dense utility sections may use less, but must still maintain clear
    grouping.
-   Do not force identical section heights. Let content and art
    direction determine height.
-   Keep headings, paragraphs, and CTAs aligned to a consistent content
    edge.

### 5.4 Grid

-   Desktop: 12-column grid.
-   Tablet: 8-column grid.
-   Mobile: 4-column grid.
-   Desktop gutter: 24--32px.
-   Tablet gutter: 20--24px.
-   Mobile gutter: 16--20px.
-   Use asymmetrical editorial compositions selectively; keep the
    underlying alignment system consistent.
-   Avoid uneven card heights unless the layout is intentionally
    editorial and still readable.

------------------------------------------------------------------------

## 6. Shape language, borders, and shadows

### 6.1 Corner radius

MAYFAIR's proposed visual language should feel architectural and
tailored. Prefer sharp corners.

  Element                 Radius
  --------------------- --------
  Large image panels      0--2px
  Editorial cards         0--2px
  Buttons                 0--2px
  Inputs                  0--2px
  Small utility chips     2--4px
  Modal / drawer          2--4px

Do not use large pill buttons, fully rounded cards, or excessive rounded
containers. A circular icon button is acceptable when its function
benefits from a circular hit area.

### 6.2 Borders and shadows

-   Use 1px borders in `--color-border` for subtle separation.
-   Prefer whitespace and background shifts over card shadows.
-   Use soft, low-opacity shadows only when elevation is functionally
    needed (menus, drawers, floating booking panel).
-   Avoid thick borders, heavy drop shadows, neumorphism, and
    glassmorphism.
-   Use fine sage rules sparingly as editorial separators.

------------------------------------------------------------------------

## 7. Photography and media direction

Photography is a primary part of the design system.

### 7.1 Image priorities

Use authentic MAYFAIR imagery wherever available: 1. Actual property
exteriors and architecture. 2. Landscapes and destination context. 3.
Rooms, suites, and villas. 4. Dining and signature dishes. 5. Spa and
wellness. 6. Weddings, events, and cultural experiences. 7. Human
moments that communicate genuine hospitality.

### 7.2 Art direction

-   Prefer natural light, warm tonal balance, realistic colours, and
    architectural composition.
-   Show the distinctive character of each property.
-   Use wide landscape images for hero and destination storytelling.
-   Use portrait crops for selected editorial cards.
-   Do not apply a dark overlay to every image. Add only enough overlay
    to support text contrast.
-   Avoid excessive saturation, artificial HDR, generic stock imagery,
    and inconsistent colour grading.
-   Never use AI-generated imagery as if it depicts a real MAYFAIR
    property. AI imagery may be used for abstract moodboards or clearly
    illustrative concepts only.

### 7.3 Image ratios

  Context                      Recommended ratio
  ---------------------------- -----------------------------------
  Hero media                   16:9 or wider; full viewport crop
  Property feature             16:9
  Editorial destination card   4:5 or 3:4
  Experience card              4:5
  Room gallery                 4:3 or 3:2
  Small thumbnails             1:1

Use `object-fit: cover` only when cropping does not remove important
architectural or product details. Define focal points with
`object-position`.

------------------------------------------------------------------------

## 8. Component rules

### 8.1 Header

-   Transparent over the hero when contrast allows; transition to an
    ivory or forest surface after scroll.
-   Keep logo proportions intact; never recreate or distort the logo
    with text.
-   Desktop navigation should be calm, readable, and uncluttered.
-   Use a structured mega-menu for hotel discovery if it improves
    findability.
-   Make the primary booking action visually distinct but not oversized.
-   Mobile navigation must use a clear, accessible menu drawer with a
    visible booking action.
-   Header height should be consistent and should not consume excessive
    mobile viewport space.

### 8.2 Buttons and links

Primary button: - Forest green background. - White text. - 14--16px
Manrope, weight 600. - Minimum height 48px. - 0--2px radius. -
Comfortable horizontal padding. - Clear hover, active, focus, and
disabled states.

Secondary button: - Transparent or paper background. - Forest text and a
1px border. - Same height and typography as primary.

Text links: - Use clear labels and restrained underline or arrow
treatment. - Do not make a decorative arrow the only indicator of a
link. - Provide visible keyboard focus.

### 8.3 Cards

-   Image-led and editorial.
-   Minimal borders and no unnecessary shadows.
-   Keep card titles and supporting text aligned.
-   Avoid placing every card inside a separate rounded box.
-   Make the action clear and keyboard accessible.
-   Use consistent image focal points within a collection.

### 8.4 Booking panel

-   Visually distinct from editorial content, but consistent with the
    brand.
-   Use explicit labels; placeholders must not replace labels.
-   Destination/property, arrival, departure, guests, rooms, and
    availability action should be clear.
-   Show selected values and validation errors accessibly.
-   On mobile, stack fields or open a dedicated booking flow; do not
    compress desktop fields into tiny controls.
-   Preserve selected property and dates when moving to the booking
    engine, if integration supports it.
-   Never imply a reservation is confirmed until the booking system
    confirms it.

### 8.5 Forms

-   Visible labels, helpful descriptions, and clear validation.
-   Minimum 44px touch targets; 48px preferred for primary controls.
-   Explain required fields.
-   Keep error messages next to the relevant field.
-   Preserve entered values after validation errors.
-   Provide clear submission and success states.

### 8.6 Footer

-   Use forest green or charcoal as a strong closing surface.
-   Organize links into clear groups.
-   Keep reservation contact information easy to locate.
-   Include social links, legal links, and newsletter only where
    relevant.
-   Avoid turning the footer into a dense duplicate sitemap.

------------------------------------------------------------------------

## 9. Homepage-specific design guidance

Recommended section sequence for the demo:

1.  **Header and navigation** --- logo, key destinations, experiences,
    story, and booking CTA.
2.  **Cinematic hero** --- authentic property imagery, concise brand
    statement, one clear CTA.
3.  **Reservation panel** --- destination, dates, guests, rooms,
    availability.
4.  **MAYFAIR story** --- heritage, nature, architecture, and
    hospitality philosophy.
5.  **Signature destinations** --- four carefully selected and
    differentiated properties.
6.  **Stays and suites** --- rooms, suites, and villas with authentic
    imagery.
7.  **MAYFAIR experiences** --- dining, wellness, weddings/events, art
    and culture.
8.  **Exclusive offers** --- one featured offer and a small curated
    selection.
9.  **Discover the destination** --- local culture and things to
    experience.
10. **Guest stories and recognition** --- only verified testimonials and
    awards.
11. **Final booking invitation** --- a strong closing image and booking
    action.
12. **Footer** --- concise, structured and useful.

### Homepage content rules

-   Do not repeat the same claims across multiple sections.
-   Every section must have a distinct user purpose.
-   Use concise copy; avoid generic phrases such as "unforgettable
    luxury" unless supported by specific detail.
-   Prioritize real properties and verified facts.
-   Do not invent awards, guest reviews, package inclusions, room
    features, prices, or property facilities.
-   Keep the number of homepage sections controlled; do not recreate the
    entire corporate sitemap on the homepage.

------------------------------------------------------------------------

## 10. Responsive behaviour

Use a mobile-first implementation. Suggested breakpoints:

  -----------------------------------------------------------------------
  Breakpoint              Range                   Layout behaviour
  ----------------------- ----------------------- -----------------------
  Small mobile            `< 480px`               Single-column content,
                                                  compact header, stacked
                                                  booking flow

  Mobile                  `480–767px`             Single-column or
                                                  horizontally scrollable
                                                  editorial collections
                                                  where appropriate

  Tablet                  `768–1023px`            Simplified navigation,
                                                  2-column layouts,
                                                  adjusted section
                                                  spacing

  Desktop                 `1024–1439px`           Full navigation,
                                                  12-column grid,
                                                  multi-column editorial
                                                  layouts

  Large desktop           `1440px+`               Constrained content
                                                  width, larger media, no
                                                  excessively long text
                                                  lines
  -----------------------------------------------------------------------

### Responsive rules

-   Never allow horizontal page overflow.
-   Use fluid typography with `clamp()` where suitable.
-   Reduce display headline size and line length on mobile.
-   Stack two-column sections on mobile; place the most important
    content first.
-   Keep text readable over images; reposition text or add a controlled
    overlay rather than shrinking it excessively.
-   Convert desktop mega-menus into accessible mobile drawers.
-   Make booking controls full-width or use a dedicated booking sheet on
    mobile.
-   Do not rely on hover for essential actions.
-   Maintain at least 44×44px touch targets; 48×48px is preferred.
-   Ensure gallery controls, filters, and carousels are touch-friendly.
-   Respect safe-area insets on modern mobile devices.
-   Test at 320px, 375px, 390px, 430px, 768px, 1024px, 1280px, 1440px,
    and 1920px widths.
-   Test both portrait and landscape mobile layouts.

------------------------------------------------------------------------

## 11. Motion and interaction

Motion should feel calm, intentional, and premium.

### Allowed patterns

-   Short opacity and transform transitions.
-   Gentle image reveal on scroll.
-   Subtle menu and drawer transitions.
-   Slow, restrained hero media transitions.
-   Small image scale changes on hover where appropriate.
-   Smooth anchor scrolling when it does not interfere with navigation.

### Motion rules

-   Typical UI transitions: 160--280ms.
-   Editorial reveals: 400--700ms, used sparingly.
-   Use restrained easing; avoid elastic or bouncy motion.
-   Do not animate every element as it enters the viewport.
-   Avoid scroll hijacking and excessive parallax.
-   Do not delay access to important content behind long animations.
-   Respect `prefers-reduced-motion: reduce`.
-   Provide a static hero fallback when video cannot load or motion is
    reduced.
-   Avoid autoplay audio. Hero video should be muted, optimized, and
    non-essential to understanding the page.

------------------------------------------------------------------------

## 12. Accessibility requirements

Target WCAG 2.2 AA.

-   Semantic HTML landmarks and heading hierarchy.
-   Keyboard-accessible navigation, menus, dialogs, galleries, and
    forms.
-   Visible focus indicators.
-   Correct accessible names for icon-only controls.
-   Alt text for informative images; empty alt text for decorative
    images.
-   Sufficient text and UI contrast.
-   Form labels and associated error messages.
-   No colour-only communication of state.
-   Captions or equivalent information for meaningful video content.
-   Reduced-motion support.
-   Logical focus management in drawers and dialogs.
-   Do not trap keyboard focus outside an open modal or drawer.

------------------------------------------------------------------------

## 13. Performance requirements

Luxury presentation must not come at the cost of speed.

-   Use responsive image sources and modern formats such as AVIF or WebP
    where supported.
-   Define image width and height or aspect ratio to prevent layout
    shift.
-   Lazy-load below-the-fold images.
-   Do not lazy-load the primary hero/LCP image.
-   Preload only critical fonts and hero assets.
-   Subset fonts where possible and avoid unnecessary weights.
-   Use video only when its visual value justifies the payload.
-   Provide poster images and fallbacks for video.
-   Avoid large animation libraries unless needed by the project.
-   Keep third-party scripts to a minimum.
-   Reserve space for embeds and dynamic booking components.
-   Measure Core Web Vitals on real production-like builds.

### Performance targets

Aim for the following field Core Web Vitals at the 75th percentile: -
LCP: `≤ 2.5s` - INP: `≤ 200ms` - CLS: `≤ 0.1`

These are targets to measure, not claims about the current website.

------------------------------------------------------------------------

## 14. Content and brand integrity

-   Use official MAYFAIR logos and property assets supplied or published
    by the brand.
-   Do not redraw, recolour, stretch, crop, or alter the logo.
-   Do not invent brand history, property facts, awards, sustainability
    claims, guest quotes, or room specifications.
-   Preserve official property names and spelling.
-   Do not use unrelated hotel imagery to represent a specific MAYFAIR
    property.
-   If verified content is unavailable, use clearly marked placeholder
    copy in development and replace it before presentation.
-   Keep tone warm, confident, refined, and specific.
-   Avoid exaggerated sales language and generic luxury clichés.

------------------------------------------------------------------------

## 15. Implementation guidance for AI development agents

Before writing code:

1.  Inspect the existing repository, framework, routing, dependencies,
    assets, and conventions.
2.  Identify the current logo, fonts, image assets, and any existing
    brand tokens.
3.  Do not restructure the project or replace its stack without explicit
    approval.
4.  Create or update a centralized token file using the colour,
    typography, spacing, radius, and layout tokens in this document.
5.  Build reusable components for navigation, booking controls,
    editorial sections, property cards, experience cards, and footer.
6.  Use the actual supplied MAYFAIR assets; do not fabricate
    property-specific imagery.
7.  Implement responsive behaviour as part of each component, not as a
    final patch.
8.  Use semantic HTML and accessible interaction patterns.
9.  Keep content data separate from presentation where appropriate.
10. Validate all links, buttons, menus, form states, and responsive
    layouts.
11. Run the project's available lint, type-check, and build commands.
12. Report missing assets, uncertain brand details, non-functional
    integrations, and assumptions honestly.

### Engineering constraints

-   Follow the existing project's framework and package manager.
-   Reuse existing dependencies before adding new ones.
-   Do not introduce Bootstrap, Material UI, jQuery, or unnecessary UI
    frameworks.
-   Avoid arbitrary one-off CSS values where a design token exists.
-   Do not use placeholder links such as `#` for finished interactions.
-   Do not create fake booking success states.
-   Do not commit secrets or expose API credentials.
-   Do not sacrifice accessibility for animation or visual effects.

------------------------------------------------------------------------

## 16. Definition of done

The demo is ready for review when:

-   [ ] The visual language is consistent across all demo pages.
-   [ ] The MAYFAIR logo is used correctly.
-   [ ] Colour and typography tokens are centralized.
-   [ ] Homepage hierarchy and content sequence are implemented.
-   [ ] Property cards use accurate property imagery and names.
-   [ ] Navigation and booking actions work as intended.
-   [ ] Desktop, tablet, and mobile layouts are tested.
-   [ ] No horizontal overflow exists at target widths.
-   [ ] Keyboard navigation and visible focus states work.
-   [ ] Reduced-motion preferences are respected.
-   [ ] Images are optimized and layout shifts are controlled.
-   [ ] No fabricated awards, reviews, prices, or property claims
    remain.
-   [ ] Lint, type-check, and production build pass where available.
-   [ ] Known limitations and incomplete integrations are documented.

------------------------------------------------------------------------

## 17. Reference standards and documentation

Use these resources as implementation references. They inform the
structure and quality expectations of this design system; they do not
imply that MAYFAIR uses these systems.

1.  **Google Labs --- DESIGN.md Format Specification:** Explains the
    YAML front matter plus Markdown guidance structure used by
    AI-readable design-system
    documents.`\n   `{=tex}https://github.com/google-labs-code/design.md/blob/main/docs/spec.md`\n`{=tex}`\n2`{=tex}.
    **W3C Design Tokens Community Group --- Format Module:** A useful
    reference for naming and structuring reusable design tokens.\
    https://www.designtokens.org/

2.  **Material Design 3 --- Design Tokens:** Reference for semantic
    colour roles, typography, shape, and tokenized design decisions.\
    https://m3.material.io/foundations/design-tokens/overview

3.  **Atlassian Design System --- Foundations:** Useful example of
    documenting colour, typography, spacing, elevation, and component
    foundations.\
    https://atlassian.design/foundations/

4.  **Tailwind CSS --- Responsive Design:** Practical reference for
    breakpoint-driven responsive implementation.\
    https://tailwindcss.com/docs/responsive-design

5.  **W3C --- WCAG 2.2:** Accessibility success criteria and conformance
    guidance.\
    https://www.w3.org/TR/WCAG22/

6.  **web.dev --- Web Vitals:** Definitions and recommended performance
    thresholds for LCP, INP, and CLS.\
    https://web.dev/articles/vitals

7.  **Google Fonts:** Official font source for the proposed Playfair
    Display and Manrope typefaces.\
    https://fonts.google.com/

------------------------------------------------------------------------

## 18. Design-system documentation structure

This file intentionally combines two layers:

1.  **Machine-readable YAML front matter:** the normative starting
    values for colours, typography, spacing, and shape. AI coding agents
    should read these tokens first and map them to the project's CSS
    variables, theme configuration, or design-token system.
2.  **Human-readable implementation guidance:** explains intent,
    hierarchy, component behaviour, responsive rules, accessibility,
    performance, and content integrity.

This approach follows the structure described in the public `DESIGN.md`
format specification: tokens are centralized and named by role, while
prose explains how and when to use them. The document is organized from
foundations (brand, colour, type, layout, shape) into components,
responsive behaviour, accessibility, performance, and implementation
rules. It also follows established design-system practice of using
semantic token names rather than selecting colours by appearance alone.

When a token changes, update the YAML and the corresponding guidance
together. Do not create a second conflicting source of truth in CSS,
component files, or AI prompts.

## 19. Final design direction

The MAYFAIR demo should look like a refined evolution of the brand, not
a generic luxury-hotel template.

**Keep the heritage. Elevate the presentation. Simplify the journey.**

The visual signature should be forest green with lighter sage accents,
warm ivory, editorial serif headlines, clean sans-serif interface
typography, sharp architectural edges, generous spacing, authentic
photography, and subtle cinematic motion.

**Status:** Proposed demo design specification. Confirm official brand
colours, typography, logo assets, and property content before production
approval.
