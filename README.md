# Daisy Lopez Adhiambo — Personal Portfolio

A stunning personal portfolio website built with Next.js 15, featuring a feminine glassmorphism aesthetic with frosted glass cards, floating animated orbs, and elegant Framer Motion animations.

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **UI Components:** shadcn/ui
- **Typography:** Cormorant Garamond, DM Sans, Space Mono (Google Fonts)
- **Language:** TypeScript

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm (recommended) or pnpm/yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/
│   ├── globals.css       # Global styles, theme tokens, animations
│   ├── layout.tsx        # Root layout with fonts and metadata
│   └── page.tsx          # Main portfolio page
├── components/
│   ├── about-section.tsx
│   ├── back-to-top.tsx
│   ├── contact-section.tsx
│   ├── education-section.tsx
│   ├── experience-section.tsx
│   ├── floating-orbs.tsx
│   ├── footer.tsx
│   ├── hero-section.tsx
│   ├── navbar.tsx
│   ├── projects-section.tsx
│   └── skills-section.tsx
└── public/
    └── images/           # Add your images here
```

## Customization

### Colors

Edit the CSS variables in `app/globals.css`:

```css
:root {
  --primary: #C084FC;      /* Soft violet */
  --secondary: #F472B6;    /* Rose pink */
  --accent: #818CF8;       /* Periwinkle blue */
  --background: #0D0D1A;   /* Deep navy-purple */
}
```

### Content

Update the content in each component file:
- **Hero:** Edit `components/hero-section.tsx` for name and tagline
- **About:** Edit `components/about-section.tsx` for bio and stats
- **Experience:** Edit `components/experience-section.tsx` for work history
- **Projects:** Edit `components/projects-section.tsx` for portfolio items
- **Skills:** Edit `components/skills-section.tsx` for technical skills
- **Education:** Edit `components/education-section.tsx` for academic background
- **Contact:** Edit `components/contact-section.tsx` for contact details

### Images

Add your images to the `public/images/` directory and update the image paths in the components.

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Other Platforms

Build the production bundle and deploy the `.next` folder:

```bash
npm run build
```

## License

MIT License - Feel free to use this template for your own portfolio.

---

Designed and developed with care for Daisy Lopez Adhiambo.
