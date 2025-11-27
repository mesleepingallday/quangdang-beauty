# Typography Redesign Plan - Momo Trust Fonts

## Overview
Redesign the Beauty Med Spa website typography using **Momo Trust Sans** and **Momo Trust Display** from Type Associates (Google Fonts).

## Goals
- Create a modern, elegant, and professional look
- Improve readability and visual hierarchy
- Maintain consistency across all components
- Optimize font loading performance
- Support Vietnamese language characters

## Font Selection

### Momo Trust Display
**Purpose:** Large headings, hero sections, brand identity  
**Characteristics:** High-impact, elegant, display-optimized  
**Weights to load:** 400, 600, 700  
**Usage:**
- H1 headings (Hero titles)
- H2 headings (Section headers)
- Logo/Brand name
- Large decorative text

### Momo Trust Sans
**Purpose:** Body text, navigation, smaller headings, UI elements  
**Characteristics:** Clean, readable, versatile sans-serif  
**Weights to load:** 300, 400, 500, 600, 700  
**Usage:**
- H3-H6 headings
- Body copy (paragraphs)
- Navigation menu
- Buttons and CTAs
- Form labels and inputs
- Captions and metadata

## Typography Scale

| Element | Font | Weight | Desktop Size | Mobile Size | Line Height | Letter Spacing |
|---------|------|--------|--------------|-------------|-------------|----------------|
| **H1 Hero** | Display | 700 | 3.75rem (60px) | 2.5rem (40px) | 1.1 | -0.02em |
| **H2** | Display | 600 | 3rem (48px) | 2rem (32px) | 1.2 | -0.01em |
| **H3** | Sans | 600 | 1.875rem (30px) | 1.5rem (24px) | 1.3 | normal |
| **H4** | Sans | 600 | 1.5rem (24px) | 1.25rem (20px) | 1.4 | normal |
| **H5** | Sans | 500 | 1.25rem (20px) | 1.125rem (18px) | 1.4 | normal |
| **H6** | Sans | 500 | 1.125rem (18px) | 1rem (16px) | 1.4 | normal |
| **Body XL** | Sans | 400 | 1.25rem (20px) | 1.125rem (18px) | 1.6 | normal |
| **Body L** | Sans | 400 | 1.125rem (18px) | 1rem (16px) | 1.6 | normal |
| **Body** | Sans | 400 | 1rem (16px) | 1rem (16px) | 1.6 | normal |
| **Body S** | Sans | 400 | 0.875rem (14px) | 0.875rem (14px) | 1.5 | normal |
| **Caption** | Sans | 400 | 0.75rem (12px) | 0.75rem (12px) | 1.4 | 0.01em |
| **Nav Links** | Sans | 500 | 1rem (16px) | 0.875rem (14px) | 1.4 | normal |
| **Buttons** | Sans | 600 | 1rem (16px) | 0.875rem (14px) | 1 | 0.01em |
| **Logo** | Display | 700 | 1.5rem (24px) | 1.25rem (20px) | 1 | -0.01em |

## Implementation Steps

### 1. Google Fonts Integration (nuxt.config.ts)
```typescript
app: {
  head: {
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { 
        rel: 'preconnect', 
        href: 'https://fonts.googleapis.com' 
      },
      { 
        rel: 'preconnect', 
        href: 'https://fonts.gstatic.com', 
        crossorigin: '' 
      },
      { 
        rel: 'stylesheet', 
        href: 'https://fonts.googleapis.com/css2?family=Momo+Trust+Display:wght@400;600;700&family=Momo+Trust+Sans:wght@300;400;500;600;700&display=swap' 
      }
    ]
  }
}
```

### 2. SCSS Variables Update (_variables.scss)
```scss
// Typography
$font-family-base: 'Momo Trust Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
$font-family-heading: 'Momo Trust Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
$font-family-display: 'Momo Trust Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

// Font Weights
$font-weight-light: 300;
$font-weight-normal: 400;
$font-weight-medium: 500;
$font-weight-semibold: 600;
$font-weight-bold: 700;
```

### 3. Tailwind Config Update (tailwind.config.js)
```javascript
fontFamily: {
  sans: ['Momo Trust Sans', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
  heading: ['Momo Trust Display', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
  display: ['Momo Trust Display', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
}
```

### 4. Base Styles Update (main.css)
```css
@layer base {
  body {
    @apply font-sans text-base text-gray-800 bg-white;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  h1, h2 {
    @apply font-display font-bold text-gray-900;
  }
  
  h3, h4, h5, h6 {
    @apply font-sans font-semibold text-gray-900;
  }
  
  h1 {
    @apply text-5xl md:text-6xl leading-tight tracking-tight;
  }
  
  h2 {
    @apply text-4xl md:text-5xl leading-tight tracking-tight;
  }
  
  h3 {
    @apply text-3xl leading-snug;
  }
  
  h4 {
    @apply text-2xl leading-snug;
  }
  
  h5 {
    @apply text-xl leading-normal;
  }
  
  h6 {
    @apply text-lg leading-normal;
  }
}
```

## Component-Specific Updates

### Hero Section
- Title: Momo Trust Display, 700 weight, 3.75rem desktop / 2.5rem mobile
- Subtitle: Momo Trust Sans, 400 weight, 1.125rem
- CTAs: Momo Trust Sans, 600 weight

### Navigation
- Logo: Momo Trust Display, 700 weight
- Menu items: Momo Trust Sans, 500 weight
- CTA button: Momo Trust Sans, 600 weight

### Cards & Sections
- Section titles: Momo Trust Display, 600 weight
- Card titles: Momo Trust Sans, 600 weight
- Body text: Momo Trust Sans, 400 weight

### Forms & Inputs
- Labels: Momo Trust Sans, 500 weight
- Input text: Momo Trust Sans, 400 weight
- Helper text: Momo Trust Sans, 400 weight, 0.875rem

### Buttons
- All buttons: Momo Trust Sans, 600 weight
- Letter spacing: 0.01em for better readability

## Performance Optimization

### Font Loading Strategy
1. **Preconnect** to Google Fonts domains
2. **Display swap** to show fallback fonts immediately
3. Load only **essential weights** (7 total weights across 2 families)
4. Use **font-display: swap** in CSS

### Fallback Stack
```css
font-family: 'Momo Trust Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
font-family: 'Momo Trust Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
```

## Accessibility Considerations

1. **Minimum font size:** 14px (0.875rem) for body text
2. **Line height:** 1.5-1.6 for body text (WCAG AAA)
3. **Letter spacing:** Adjust for Vietnamese diacritics
4. **Contrast ratios:** Ensure WCAG AA compliance
5. **Responsive scaling:** Comfortable reading on all devices

## Testing Checklist

- [ ] Fonts load correctly on all pages
- [ ] Vietnamese characters render properly
- [ ] Responsive typography scales appropriately
- [ ] All headings maintain proper hierarchy
- [ ] Navigation is readable and clickable
- [ ] Buttons have proper font weight and size
- [ ] Forms are accessible and readable
- [ ] Page load performance is acceptable (<2s)
- [ ] Fallback fonts work if Google Fonts fail
- [ ] Cross-browser compatibility (Chrome, Firefox, Safari, Edge)

## Visual Examples

### Before
- Headings: Montserrat (geometric, slightly rigid)
- Body: Inter (neutral, standard)

### After
- Headings: Momo Trust Display (elegant, impactful, modern)
- Body: Momo Trust Sans (clean, readable, sophisticated)

### Brand Personality
The Momo Trust fonts convey:
- **Elegance** - Display font for luxury feel
- **Trust** - Clean sans-serif for medical credibility
- **Modernity** - Contemporary design language
- **Professionalism** - Balanced and refined

## Files to Update

1. [`nuxt.config.ts`](nuxt.config.ts:1) - Google Fonts integration
2. [`assets/scss/_variables.scss`](assets/scss/_variables.scss:1) - SCSS variables
3. [`tailwind.config.js`](tailwind.config.js:1) - Tailwind font families
4. [`assets/css/main.css`](assets/css/main.css:1) - Base typography styles

## Timeline
- Setup & Configuration: 15 minutes
- Testing & Verification: 15 minutes
- Documentation: 10 minutes
- **Total:** ~40 minutes

## Next Steps
1. Review and approve this plan
2. Switch to Code mode for implementation
3. Test across all components
4. Verify Vietnamese language support
5. Performance testing
6. Final review and sign-off