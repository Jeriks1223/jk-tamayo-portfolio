# Jericho Kyle M. Tamayo — Portfolio

Personal portfolio website built with **Next.js 15**, **TypeScript**, **TailwindCSS**, and **Framer Motion**.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS + CSS custom properties
- **Animations**: Framer Motion
- **Fonts**: Inter + JetBrains Mono
- **Deployment**: Vercel

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your keys.

### 3. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contact Form Setup

The contact form calls `/api/contact`. To activate email sending:

1. Sign up at [resend.com](https://resend.com) (free tier available)
2. Add `RESEND_API_KEY=re_...` to `.env.local`
3. Uncomment the Resend block in `src/app/api/contact/route.ts`
4. Update the `from` and `to` email addresses

## Customization

All content is centralized in **`src/lib/data.ts`** — update your personal info, projects, experience, and skills there. No need to touch the components.

## Deployment to Vercel

```bash
npx vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deployments.

## Adding a Resume

Place your resume PDF at `public/resume.pdf`. The "Download Resume" button links to it.

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout + SEO metadata
│   ├── page.tsx         # Main page (assembles sections)
│   ├── globals.css      # Design tokens + global styles
│   └── api/contact/     # Contact form API route
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── Stats.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Experience.tsx
│       ├── Projects.tsx
│       ├── Education.tsx
│       └── Contact.tsx
└── lib/
    └── data.ts          # All portfolio content lives here
```
