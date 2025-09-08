# Deployment Guide

## 🚀 Deploy to Vercel (Recommended)

1. **Push to GitHub**:

   ```bash
   git add .
   git commit -m "Initial terminal portfolio setup"
   git push origin main
   ```

2. **Deploy to Vercel**:

   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "New Project"
   - Import your repository
   - Vercel will automatically detect Next.js and deploy

3. **Custom Domain** (Optional):
   - In Vercel dashboard, go to your project settings
   - Add your custom domain
   - Update DNS records as instructed

## 🌐 Deploy to Netlify

1. **Build the project**:

   ```bash
   npm run build
   npm run export  # If using static export
   ```

2. **Deploy**:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `out` folder
   - Or connect your GitHub repository

## 🐳 Deploy with Docker

1. **Create Dockerfile**:

   ```dockerfile
   FROM node:18-alpine
   WORKDIR /app
   COPY package*.json ./
   RUN npm ci --only=production
   COPY . .
   RUN npm run build
   EXPOSE 3000
   CMD ["npm", "start"]
   ```

2. **Build and run**:
   ```bash
   docker build -t terminal-portfolio .
   docker run -p 3000:3000 terminal-portfolio
   ```

## 📱 Environment Variables

Create a `.env.local` file for any environment-specific variables:

```env
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_GA_ID=your-google-analytics-id
```

## 🔧 Build Optimization

The project is already optimized for production:

- ✅ Static generation where possible
- ✅ Image optimization
- ✅ Code splitting
- ✅ Tree shaking
- ✅ Minification

## 📊 Performance

Expected Lighthouse scores:

- Performance: 95+
- Accessibility: 100
- Best Practices: 100
- SEO: 100

## 🚨 Troubleshooting

### Build Errors

- Ensure all dependencies are installed: `npm install`
- Check for TypeScript errors: `npm run build`
- Verify all imports are correct

### Runtime Errors

- Check browser console for errors
- Verify all environment variables are set
- Ensure all external links are valid

## 🔄 Updates

To update your portfolio:

1. Edit `src/data/portfolio.ts`
2. Commit and push changes
3. Vercel will automatically redeploy

## 📈 Analytics

Add Google Analytics:

1. Get your GA tracking ID
2. Add to environment variables
3. Update `src/app/layout.tsx` with GA script

## 🔒 Security

- All external links open in new tabs
- No sensitive data in client-side code
- HTTPS enforced on production
- CSP headers configured

---

**Your terminal portfolio is ready to impress! 🎉**
