# Portfolio Website - Khizer Hayat

A modern, responsive portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern dark theme with blue gradient accents
- ⚡ Built with Next.js 14 App Router
- 💎 Fully responsive design
- 🎭 Smooth animations and transitions
- 📱 Mobile-first approach
- 🔧 TypeScript for type safety
- 🎨 Tailwind CSS for styling

## Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Fonts:** Space Grotesk & Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone or download this repository

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
portfolio-site/
├── app/
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout
│   └── page.tsx          # Main homepage
├── public/               # Static assets
├── tailwind.config.ts    # Tailwind configuration
├── tsconfig.json         # TypeScript configuration
└── package.json          # Dependencies
```

## Customization

### Colors
Edit `tailwind.config.ts` to change the color scheme:
```typescript
colors: {
  primary: '#3B82F6',
  dark: {
    900: '#0A0E1A',
    800: '#0F1420',
    700: '#1A1F35',
  }
}
```

### Content
Update `app/page.tsx` to modify:
- Personal information
- Skills and expertise
- Professional journey
- Projects
- Contact information

### Fonts
Change fonts in `app/layout.tsx` by updating the Google Fonts link.

## Sections

1. **Hero Section** - Introduction with call-to-action buttons
2. **About Me** - Technical expertise and professional journey
3. **Featured Projects** - Showcase of key projects
4. **Contact** - Contact form and availability status
5. **Footer** - Quick links and additional information

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository in Vercel
3. Deploy with one click

### Other Platforms

The site can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- AWS Amplify
- Digital Ocean

## License

This project is open source and available under the MIT License.

## Contact

For questions or collaboration:
- Email: khizerhayat345@gmail.com
- Phone: +92 345 762 3090

---

Built with ❤️ using Next.js and TypeScript
