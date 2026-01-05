# Complete Setup & Deployment Guide

## 📋 Overview

This portfolio website is a complete recreation of the design from khizer-dev-showcase.lovable.app, built with modern web technologies.

**Tech Stack:**
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Lucide React (icons)

---

## 🛠️ Installation & Setup

### Prerequisites
Ensure you have the following installed:
- Node.js 18.0 or higher ([Download](https://nodejs.org/))
- npm (comes with Node.js) or yarn

### Step-by-Step Installation

1. **Extract the Project**
   - Unzip the portfolio-site folder to your desired location

2. **Open Terminal/Command Prompt**
   - Navigate to the project directory:
   ```bash
   cd path/to/portfolio-site
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```
   
   This will install all required packages including:
   - Next.js
   - React
   - TypeScript
   - Tailwind CSS
   - Lucide React

4. **Start Development Server**
   ```bash
   npm run dev
   ```

5. **View in Browser**
   - Open http://localhost:3000
   - The site should now be running!

---

## 🎨 Customization Guide

### 1. Personal Information

**File:** `app/page.tsx`

**Hero Section (Lines 20-50):**
```typescript
// Change your name
<h1>Your Name</h1>

// Update title
MERN Stack Developer & ML Engineer

// Update description
Building Intelligent Solutions...
```

**Social Links (Lines 52-58):**
```typescript
<a href="YOUR_GITHUB_URL">
<a href="YOUR_LINKEDIN_URL">
<a href="mailto:YOUR_EMAIL">
```

### 2. Profile Picture

**Option A: Use a URL**
Replace the placeholder gradient with an actual image:

```typescript
// Replace this (around line 22):
<div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600"></div>

// With this:
<img src="/your-image.jpg" alt="Profile" className="w-full h-full object-cover" />
```

**Option B: Use Next.js Image**
1. Place your image in the `public` folder
2. Update the code:
```typescript
import Image from 'next/image'

<Image 
  src="/your-image.jpg" 
  alt="Profile" 
  width={160} 
  height={160}
  className="rounded-full"
/>
```

### 3. Skills & Expertise

**File:** `app/page.tsx` (Lines 90-200)

Update percentages and technologies:
```typescript
<div className="flex justify-between mb-2">
  <span>Frontend</span>
  <span>90%</span>  // Change percentage
</div>

// Add/remove tech tags
<span className="px-3 py-1...">ReactJS</span>
<span className="px-3 py-1...">Your Tech</span>
```

### 4. Professional Journey

**File:** `app/page.tsx` (Lines 210-280)

Update job experiences:
```typescript
<div className="border-l-2 border-blue-500 pl-4">
  <h4>Job Title</h4>
  <span>Date Range</span>
  <ul>
    <li>• Your achievement</li>
  </ul>
</div>
```

### 5. Projects

**File:** `app/page.tsx` (Lines 320-500)

Each project card follows this structure:
```typescript
<div className="card-glass rounded-xl...">
  {/* Project Header */}
  <div className="relative h-48...">
    <div className="text-6xl">🏠</div>  // Change emoji
  </div>
  
  {/* Project Details */}
  <div className="p-6">
    <h3>Project Name</h3>
    <p>Description</p>
    
    {/* Features */}
    <ul>
      <li>• Feature 1</li>
    </ul>
    
    {/* Tech Stack */}
    <div className="flex flex-wrap gap-2">
      <span>Technology</span>
    </div>
    
    {/* Links */}
    <button>View Code</button>
  </div>
</div>
```

### 6. Contact Information

**File:** `app/page.tsx` (Lines 540-620)

Update contact details:
```typescript
// Email
<a href="mailto:your.email@example.com">

// Phone
<a href="tel:+1234567890">

// Location
<p>Your City, Country</p>
```

---

## 🎨 Styling Customization

### Change Color Scheme

**File:** `tailwind.config.ts`

```typescript
colors: {
  primary: '#3B82F6',  // Main blue color
  dark: {
    900: '#0A0E1A',    // Darkest background
    800: '#0F1420',    // Medium background
    700: '#1A1F35',    // Lighter background
  }
}
```

**Popular Color Alternatives:**
- Purple theme: `primary: '#8B5CF6'`
- Green theme: `primary: '#10B981'`
- Orange theme: `primary: '#F97316'`
- Pink theme: `primary: '#EC4899'`

### Change Fonts

**File:** `app/layout.tsx`

Currently using Space Grotesk and Inter from Google Fonts.

To change fonts:
```typescript
// 1. Update the Google Fonts link
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" />

// 2. Update global CSS
body {
  font-family: 'Your Font', sans-serif;
}
```

### Adjust Animations

**File:** `tailwind.config.ts`

Modify animation speeds:
```typescript
animation: {
  'fade-in': 'fadeIn 0.6s ease-out',  // Change duration
  'slide-up': 'slideUp 0.6s ease-out',
  'float': 'float 3s ease-in-out infinite',
}
```

---

## 📱 Adding Images

### Project Screenshots

1. Create a `public/projects` folder
2. Add your images (e.g., `project1.jpg`)
3. Update project cards:

```typescript
<div className="relative h-48...">
  <img 
    src="/projects/project1.jpg" 
    alt="Project" 
    className="w-full h-full object-cover"
  />
</div>
```

---

## 🔧 Contact Form Integration

The contact form is currently frontend-only. To make it functional:

### Option 1: EmailJS (Free)

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Install EmailJS:
   ```bash
   npm install @emailjs/browser
   ```
3. Add to your form:
   ```typescript
   import emailjs from '@emailjs/browser'
   
   const handleSubmit = (e) => {
     e.preventDefault()
     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY')
   }
   ```

### Option 2: Formspree (Free)

1. Sign up at [formspree.io](https://formspree.io/)
2. Get your form endpoint
3. Update form:
   ```typescript
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

### Option 3: API Route (Advanced)

Create `app/api/contact/route.ts`:
```typescript
export async function POST(request: Request) {
  const data = await request.json()
  // Send email using nodemailer or similar
  return Response.json({ success: true })
}
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended - Free)

1. **Create GitHub Repository**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_URL
   git push -u origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy"
   - Done! Your site is live

### Deploy to Netlify

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy**
   - Go to [netlify.com](https://www.netlify.com/)
   - Drag and drop the `.next` folder
   - Or connect your GitHub repository

### Deploy to Other Platforms

The site works on any platform supporting Next.js:
- Railway
- AWS Amplify
- Digital Ocean
- Render
- Cloudflare Pages

---

## 📊 Performance Optimization

### Image Optimization

Use Next.js Image component for better performance:
```typescript
import Image from 'next/image'

<Image 
  src="/image.jpg" 
  alt="Description"
  width={800}
  height={600}
  priority={true}  // For above-fold images
/>
```

### Font Optimization

Fonts are already optimized using Next.js font optimization, but you can improve further:

```typescript
import { Space_Grotesk, Inter } from 'next/font/google'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'] })
const inter = Inter({ subsets: ['latin'] })
```

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
npm run dev -- -p 3001
```

### Dependencies Installation Failed
```bash
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
npm run build
```
Check the error messages and fix TypeScript errors.

### Styling Not Working
```bash
# Clear cache
rm -rf .next
npm run dev
```

---

## 📝 Project Structure

```
portfolio-site/
├── app/
│   ├── globals.css          # Global styles & Tailwind
│   ├── layout.tsx           # Root layout with fonts
│   └── page.tsx             # Main portfolio page
├── public/                  # Static files (add images here)
├── tailwind.config.ts       # Tailwind configuration
├── tsconfig.json            # TypeScript config
├── postcss.config.js        # PostCSS config
├── next.config.js           # Next.js configuration
├── package.json             # Dependencies
├── README.md                # Documentation
├── QUICKSTART.md            # Quick reference
└── .gitignore               # Git ignore rules
```

---

## 🔍 SEO Optimization

### Update Metadata

**File:** `app/layout.tsx`

```typescript
export const metadata: Metadata = {
  title: 'Your Name - Your Title',
  description: 'Your professional description',
  keywords: 'web developer, software engineer, your skills',
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Your Name',
    description: 'Your description',
    url: 'https://yoursite.com',
    siteName: 'Your Portfolio',
    images: ['/og-image.jpg'],
  }
}
```

### Add Robots.txt

Create `public/robots.txt`:
```
User-agent: *
Allow: /
Sitemap: https://yoursite.com/sitemap.xml
```

---

## 📧 Support

If you need help:
1. Check the troubleshooting section
2. Review Next.js documentation: [nextjs.org/docs](https://nextjs.org/docs)
3. Check Tailwind docs: [tailwindcss.com/docs](https://tailwindcss.com/docs)

---

## ✅ Pre-Launch Checklist

- [ ] Updated all personal information
- [ ] Replaced placeholder content
- [ ] Added actual project data
- [ ] Updated contact information
- [ ] Configured contact form
- [ ] Added profile picture
- [ ] Tested on mobile devices
- [ ] Tested on different browsers
- [ ] Optimized images
- [ ] Updated SEO metadata
- [ ] Tested all links
- [ ] Reviewed for typos
- [ ] Built and tested production version

---

Good luck with your portfolio! 🚀
