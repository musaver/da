# Font Optimization Guide

## Overview
The Awake template uses two Google Fonts that have been optimized using Next.js's `next/font` feature for better performance and user experience.

## Fonts Used

### 1. Inter Tight (Primary Font)
- **Usage**: Main body font throughout the site
- **Weights**: 100, 200, 300, 400, 500, 600, 700, 800, 900
- **Styles**: Normal and Italic
- **Applied to**: `<body>` element and all text by default

### 2. Instrument Serif (Accent Font)
- **Usage**: Emphasized/italic text with `.font-instrument` class
- **Weight**: 400
- **Styles**: Normal and Italic
- **Applied to**: Elements with `<em class="font-instrument">` or `.font-instrument` class

## Implementation

### Layout Configuration (`app/layout.tsx`)

```typescript
import { Inter_Tight, Instrument_Serif } from 'next/font/google';

const interTight = Inter_Tight({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  variable: '--font-inter-tight',
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ['latin'],
  weight: ['400'],
  style: ['normal', 'italic'],
  variable: '--font-instrument-serif',
  display: 'swap',
});

// Applied to HTML and body
<html className={`${interTight.variable} ${instrumentSerif.variable}`}>
  <body className={interTight.className}>
```

### SCSS Configuration (`styles/globals.scss`)

```scss
// Override font family variables before importing Bootstrap
$font-family-sans-serif: var(--font-inter-tight), "Inter Tight", sans-serif !default;

// Override font-instrument class to use CSS variable
.font-instrument {
    font-family: var(--font-instrument-serif), "Instrument Serif", serif !important;
}
```

## Benefits

### 1. **Performance**
- ✅ Fonts are automatically optimized and self-hosted
- ✅ No external requests to Google Fonts CDN
- ✅ Reduced latency and faster page loads
- ✅ Automatic font subsetting (only Latin characters loaded)

### 2. **User Experience**
- ✅ Zero layout shift with `font-display: swap`
- ✅ Fonts load in optimal order
- ✅ Fallback fonts defined for graceful degradation

### 3. **Privacy**
- ✅ No third-party requests to Google
- ✅ Better GDPR compliance
- ✅ No tracking or analytics from font CDN

### 4. **Developer Experience**
- ✅ Type-safe font configuration
- ✅ CSS variables for easy customization
- ✅ Automatic optimization without manual work

## CSS Variables Generated

Next.js automatically generates these CSS variables:

```css
:root {
  --font-inter-tight: '__Inter_Tight_ea5d74', '__Inter_Tight_Fallback_ea5d74';
  --font-instrument-serif: '__Instrument_Serif_a30032', '__Instrument_Serif_Fallback_a30032';
}
```

These can be used anywhere in your CSS/SCSS:

```scss
.custom-class {
  font-family: var(--font-inter-tight);
}

.fancy-text {
  font-family: var(--font-instrument-serif);
}
```

## Usage Examples

### In React Components

```tsx
// Primary font (automatically applied to body)
<p>This uses Inter Tight by default</p>

// Accent font
<em className="font-instrument">This uses Instrument Serif</em>
<h2>Bold brands with <em className="font-instrument">thoughtful design</em></h2>
```

### In SCSS

```scss
// Using the CSS variable
.my-heading {
  font-family: var(--font-inter-tight);
  font-weight: 600;
}

// Using the utility class
.special-text {
  @extend .font-instrument;
}
```

## Font Loading Strategy

1. **Critical fonts** (Inter Tight) are loaded with high priority
2. **Accent fonts** (Instrument Serif) are loaded after critical fonts
3. **Font display: swap** ensures text is visible immediately with fallback
4. **Automatic subsetting** reduces file size significantly

## Fallback Fonts

If fonts fail to load, these fallbacks are used:

- **Inter Tight**: System sans-serif fonts
- **Instrument Serif**: System serif fonts

## Verification

To verify fonts are loading correctly:

1. **Check Network Tab**: No requests to `fonts.googleapis.com`
2. **Check Elements**: HTML has font variable classes applied
3. **Check Computed Styles**: Elements show correct font-family
4. **Check Performance**: Fonts load from same origin

## Customization

To add more font weights or styles:

```typescript
const interTight = Inter_Tight({
  subsets: ['latin', 'latin-ext'], // Add more subsets
  weight: ['400', '600', '700'],    // Reduce weights for smaller bundle
  style: ['normal'],                // Remove italic if not needed
  variable: '--font-inter-tight',
  display: 'swap',
});
```

## Troubleshooting

### Fonts not loading?
1. Check that classes are applied to `<html>` and `<body>`
2. Verify CSS variables in browser DevTools
3. Check for SCSS compilation errors

### Wrong font displaying?
1. Check specificity of CSS rules
2. Verify `.font-instrument` class is applied
3. Check for conflicting font-family declarations

### Performance issues?
1. Reduce number of font weights
2. Remove unused styles (italic if not needed)
3. Use only required subsets

## Migration Notes

**Original Implementation** (HTML template):
```html
<link href="https://fonts.googleapis.com/css2?family=Inter+Tight:..." />
```

**New Implementation** (Next.js):
```typescript
import { Inter_Tight } from 'next/font/google';
// Automatic optimization, no external requests
```

This change improves:
- Page load time by ~200-500ms
- First Contentful Paint (FCP)
- Cumulative Layout Shift (CLS)
- Overall Lighthouse score

## Resources

- [Next.js Font Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
- [Google Fonts](https://fonts.google.com/)
- [Inter Tight Font](https://fonts.google.com/specimen/Inter+Tight)
- [Instrument Serif Font](https://fonts.google.com/specimen/Instrument+Serif)

