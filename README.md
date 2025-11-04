# Awake Agency - Next.js Template

A modern, responsive agency website built with Next.js, TypeScript, Bootstrap, and SCSS. This is a conversion of the original HTML template to Next.js while maintaining all original designs and animations.

## Features

- ⚡ Built with Next.js 16 and React 19
- 🎨 Bootstrap 5.3 for responsive design
- 💅 SCSS for styling with original design system
- 🎭 AOS (Animate On Scroll) for smooth animations
- 📱 Fully responsive and mobile-friendly
- 🔍 SEO optimized with Next.js metadata
- 🎯 TypeScript for type safety
- 🚀 Optimized images with Next.js Image component
- 🔤 Optimized Google Fonts (Inter Tight & Instrument Serif) with next/font

## Pages

- **Home** - Landing page with all sections (About, Services, Work, Team, Pricing, Awards)
- **Contact** - Contact form with FAQ section
- **Privacy Policy** - Privacy policy page
- **Terms & Conditions** - Terms and conditions page
- **404** - Custom 404 error page

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Navigate to the project directory:
```bash
cd awake-nextjs
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
awake-nextjs/
├── app/                          # Next.js app directory
│   ├── layout.tsx               # Root layout with scripts
│   ├── page.tsx                 # Home page
│   ├── contact/                 # Contact page
│   ├── privacy-policy/          # Privacy policy page
│   ├── terms-and-conditions/    # Terms page
│   └── not-found.tsx           # 404 page
├── components/                  # Reusable components
│   ├── Header.tsx              # Navigation header
│   ├── Footer.tsx              # Footer component
│   ├── ScrollToTop.tsx         # Scroll to top button
│   └── ClientScripts.tsx       # Client-side script initializer
├── public/                     # Static assets
│   └── assets/                 # Images, fonts, libraries
│       ├── images/            # All image assets
│       ├── scss/              # SCSS source files
│       ├── libs/              # Third-party libraries
│       └── js/                # Custom JavaScript
├── styles/                     # Global styles
│   └── globals.scss           # Main SCSS entry point
└── next.config.ts             # Next.js configuration

```

## Technologies Used

- **Next.js** - React framework for production
- **TypeScript** - Type-safe JavaScript
- **Bootstrap** - CSS framework for responsive design
- **SCSS** - CSS preprocessor
- **AOS** - Animate On Scroll library
- **jQuery** - For legacy animations and interactions
- **Iconify** - Icon library
- **next/font** - Automatic font optimization for Google Fonts

## Design & Animations

All original designs and animations have been preserved:
- AOS scroll animations
- Bootstrap components (accordion, offcanvas, tooltips)
- Custom marquee animations
- Smooth scroll navigation
- Counter animations
- Hover effects and transitions
- **Fonts**: Inter Tight (main) and Instrument Serif (italic/em) - optimized with Next.js font loading

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is based on the Awake Bootstrap Template.

## Credits

Original template by WrapPixel
Converted to Next.js with TypeScript
# da
