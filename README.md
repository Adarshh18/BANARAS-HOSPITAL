# Banaras Hospital — React Website
  
A React + Vite + React Router DOM rebuild of the Banaras Hospital marketing website. This is a 1:1 migration from the original static HTML/CSS/JS site — same content, design, layout, images, animations, and functionality, now running as a Vite-powered React SPA.
 
## 📁 Project Structure   
  
``` 
banaras-react/
├── index.html                 # Vite entry HTML (fonts, favicon, meta)
├── public/
│   └── logo.png               # Favicon source
├── src/
│   ├── assets/images/         # branding, services, doctors, gallery images
│   ├── styles/
│   │   ├── style.css          # Original design tokens + shared styles (unchanged)
│   │   └── gallery.css        # Gallery-specific styles (unchanged)
│   ├── components/
│   │   ├── Navbar.jsx         # Header, nav links (React Router NavLink), mobile menu button
│   │   ├── Footer.jsx         # Footer with quick links, services, social
│   │   ├── Layout.jsx         # Wraps every route: sticky header, mobile menu,
│   │   │                       scroll-reveal, stat counters, scroll-to-top on nav
│   │   ├── BackToTop.jsx      # Back-to-top button
│   │   └── PageMeta.jsx       # Sets document title + meta description per page
│   ├── pages/
│   │   ├── Home.jsx           # index.html
│   │   ├── About.jsx          # pages/about.html
│   │   ├── Services.jsx       # pages/services.html
│   │   ├── Doctors.jsx        # pages/doctors.html
│   │   ├── Gallery.jsx        # pages/gallery.html (masonry + lightbox)
│   │   ├── Contact.jsx        # pages/contact.html (appointment form + modal)
│   │   └── Location.jsx       # pages/location.html (map embed)
│   ├── App.jsx                # Route definitions
│   └── main.jsx                # App entry, mounts BrowserRouter
└── vite.config.js
```

## 🧭 Routing

| Navbar item | Route         |
|-------------|---------------|
| Home        | `/`           |
| About Us    | `/about`      |
| Gallery     | `/gallery`    |
| Services    | `/services`   |
| Doctors     | `/doctors`    |
| Location    | `/location`   |
| Contact     | `/contact`    |

Navigation uses React Router's `Link`/`NavLink` — no full page reloads, and the active nav item is highlighted automatically based on the current route.

## ✅ What was preserved

- **All content** — hospital details, phone numbers, address, doctor bios, fees, timings, founder message, and service descriptions, copied verbatim from the original HTML.
- **All images** — logo, hero/about photos, founder photo, service icons, doctor photos, and all 28 gallery images, migrated as ES module imports so Vite fingerprints and bundles them correctly.
- **All styling** — the original `style.css` and `gallery.css` are used unmodified; only class names are reused, no redesign.
- **All functionality**:
  - Sticky header on scroll + mobile hamburger menu
  - Scroll-reveal animations (`data-reveal`) via `IntersectionObserver`, re-armed on every route change
  - Animated stat counters (Years of Experience / Expert Doctors / Happy Patients)
  - Gallery masonry layout (`masonry-layout` + `imagesloaded`, same libraries as the original CDN scripts, now as npm packages) with a custom lightbox (prev/next, keyboard arrows, `Escape` to close)
  - Appointment form posting to the same Formspree endpoint, with the same success modal and inline error handling
  - Google Maps embed on the Location page
  - Back-to-top button

## 🚀 Running locally

```bash
npm install
npm run dev
```

Then open the URL Vite prints (typically `http://localhost:5173`).

## 📦 Building for production

```bash
npm run build
npm run preview
```

The production build outputs to `dist/`.

## 🔧 Notes for editing

- Design tokens (colors, radii, shadows, fonts) still live at the top of `src/styles/style.css` under `:root`.
- The appointment form posts to Formspree (`action="https://formspree.io/f/xyznpkeq"`) in `src/pages/Contact.jsx` — update the endpoint there if you set up your own form.
- Doctor names, fees, and timings are plain JSX text in `src/pages/Doctors.jsx` and the doctor `<select>` in `src/pages/Contact.jsx`.
- Adding a new page: create a component in `src/pages/`, add a `<Route>` in `src/App.jsx`, and a nav link in `src/components/Navbar.jsx` (and `Footer.jsx` if relevant).
