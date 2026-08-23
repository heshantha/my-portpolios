# Tech Stack Document

**Project:** Heshantha Portfolio Website + Heshantha BOT

---

## 1. Core Framework

| Technology | Version / Notes |
|---|---|
| Next.js | 14 (App Router) |
| React | 18 |
| TypeScript | 5.x |

## 2. Styling & UI

| Technology | Purpose |
|---|---|
| Tailwind CSS | Layout and design system |
| PostCSS + Autoprefixer | CSS processing |
| Lucide React | Icons |
| Google Fonts | Space Grotesk, Inter |

## 3. Features & Integrations

| Feature | Stack |
|---|---|
| Portfolio chatbot | Custom Q&A engine (`lib/chatEngine.ts`, `lib/profileKnowledge.ts`) |
| Contact email | Nodemailer |
| Images | Next.js Image |
| CV download | PDF in `/public` |

## 4. Tooling

- Node.js
- npm
- ESLint (Next.js)

## 5. Scripts

```bash
npm run dev    # development server
npm run build  # production build
npm run start  # production server
npm run lint   # lint check
```

## Summary

This portfolio is built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**, plus a custom chatbot and Nodemailer for contact.
