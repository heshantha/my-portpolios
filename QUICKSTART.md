# Quick Start Guide

## 🚀 Get Running in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Run Development Server
```bash
npm run dev
```

### Step 3: Open Browser
Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📝 Customization Checklist

### Personal Information
- [ ] Update name in Hero section (`app/page.tsx` line 21)
- [ ] Update job title and description
- [ ] Replace profile image placeholder
- [ ] Update social media links (GitHub, LinkedIn, Email)

### Contact Information
- [ ] Update email address
- [ ] Update phone number
- [ ] Update location
- [ ] Configure contact form backend

### Skills & Experience
- [ ] Update skill percentages
- [ ] Add/remove technologies
- [ ] Update professional journey timeline
- [ ] Modify mission statement

### Projects
- [ ] Replace project data with your actual projects
- [ ] Add project images/screenshots
- [ ] Update GitHub/demo links
- [ ] Modify tech stack badges

### Styling
- [ ] Choose your color scheme in `tailwind.config.ts`
- [ ] Update fonts in `app/layout.tsx`
- [ ] Adjust animations in `tailwind.config.ts`

---

## 🎨 Color Customization

### Changing the Primary Color

Edit `tailwind.config.ts`:
```typescript
colors: {
  primary: '#YOUR_COLOR',  // Change this hex code
}
```

Popular alternatives:
- Purple: `#8B5CF6`
- Green: `#10B981`
- Orange: `#F97316`
- Pink: `#EC4899`

---

## 📦 Build for Production

```bash
npm run build
npm start
```

---

## 🚢 Deploy to Vercel

1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import your repository
4. Click "Deploy"

Done! Your site is live.

---

## 💡 Tips

- Use high-quality images for projects
- Keep descriptions concise and impactful
- Test on mobile devices
- Add your actual CV/resume download link
- Connect contact form to a backend service (EmailJS, Formspree, etc.)

---

## 🆘 Need Help?

Common issues:
- **Port 3000 in use?** Use `npm run dev -- -p 3001`
- **Dependencies not installing?** Delete `node_modules` and run `npm install` again
- **Build errors?** Check TypeScript errors with `npm run build`

---

Happy coding! 🎉
