# College Techfest Website

A modern, fast, and visually rich **college techfest website** built using **Astro**, **Tailwind CSS**, and **GSAP**. The site showcases techfest events with dynamic routing, reusable components, and smooth client-side animations while keeping performance and SEO in check.

This project is **not a starter template anymore**. It is a structured, content-driven site tailored for a real college techfest.

---

## 🚀 Tech Stack

- **Astro** – Static-first framework with island-based hydration
- **Tailwind CSS** – Utility-first styling for rapid UI development
- **GSAP** – High-performance animations and transitions
- **JavaScript (ESM)** – Client-side logic and routing helpers

---

## 📁 Project Structure

```text
/
├── astro.config.mjs        # Astro configuration
├── package.json            # Project scripts & dependencies
├── package-lock.json       # Dependency lockfile
├── tsconfig.json           # TypeScript configuration (Astro defaults)
├── public/                 # Static assets (served as-is)
│   ├── *.jpg / *.png       # Event images & textures
│   └── favicon.svg
├── src/
│   ├── components/         # Reusable Astro components
│   │   └── TechCard.astro  # Event/tech card UI component
│   ├── data/               # Centralized content/data
│   │   └── items.json      # Event metadata (used for dynamic routing)
│   ├── pages/              # Route-based pages
│   │   ├── index.astro     # Homepage
│   │   ├── details.astro   # Shared details layout/page
│   │   └── events/         # Event-specific routes
│   │       ├── [slug].astro# Dynamic event pages (SSG)
│   │       ├── air-show.astro
│   │       ├── auto-show.astro
│   │       ├── food-show.astro
│   │       └── tech-fest.astro
│   ├── scripts/            # Client-side JavaScript
│   │   ├── animations.client.js # GSAP animations (hydrated)
│   │   └── slug.js         # Slug & routing utilities
│   └── styles/
│       └── global.css      # Global styles & Tailwind imports
└── README.md
```

---

## 🧠 Architecture Notes

- **Astro Pages = Routes**  
  Every file in `src/pages` automatically becomes a route.

- **Dynamic Routing**  
  Event pages are generated using `[slug].astro`, powered by data from `items.json`.

- **Component-Driven UI**  
  Reusable UI blocks (like event cards) live in `src/components` to avoid duplication.

- **Client-side Animations**  
  GSAP animations are isolated inside `*.client.js` files to avoid unnecessary hydration.

- **Static Assets**  
  All images are served from `/public` for maximum performance and zero processing overhead.

---

## 🧞 Commands

All commands are run from the project root:

| Command | Description |
|-------|------------|
| `npm install` | Install dependencies |
| `npm run dev` | Start development server (`localhost:4321`) |
| `npm run build` | Build production-ready static site |
| `npm run preview` | Preview the production build locally |
| `npm run astro` | Run Astro CLI commands |

---

## 📌 Purpose of This Project

- Official website for a **college techfest**
- Showcase events, tech expos, competitions, and shows
- Clean UI, fast load times, and smooth animations
- Easy to extend with new events by updating a single JSON file

---

## ⚠️ Notes for Contributors

- Keep event data inside `src/data/items.json`
- Do **not** hardcode event content across multiple pages
- All animations should stay client-side (`.client.js`)
- Avoid adding heavy JS — Astro’s advantage is minimal JS

---

## 📚 Learn More

- Astro Docs: https://docs.astro.build
- Tailwind CSS: https://tailwindcss.com
- GSAP: https://gsap.com

---

Built for performance, clarity, and real-world use — not as a demo template.

