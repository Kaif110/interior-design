# OURA & CO. — GitHub-ready React website

## Run locally
1. Open this folder in VS Code (the folder containing `package.json`).
2. Open Terminal → New Terminal.
3. Run `npm install`.
4. Run `npm run dev`.
5. Open the local URL shown by Vite (usually http://localhost:5173).

## Build
Run `npm run build`. Vite creates the production build in `dist/`.

## GitHub + Netlify
Push the contents of this folder to a GitHub repository. In Netlify choose **Add new project → Import an existing project → GitHub**, select the repo and use:
- Build command: `npm run build`
- Publish directory: `dist`

A `public/_redirects` file is included for Netlify fallback routing.

## Before going live
Update the placeholder email, phone number and studio location in `src/main.jsx` (search for `yourstudio.com`, `XXXXX`, and `New Delhi`). Social links are generic placeholders. Project photos are remote Unsplash images; replace them with the studio's own licensed photography for a real client site.

The enquiry form validates the required fields and opens a pre-filled email draft via `mailto:`. It does not save submissions to a database or send them automatically. For automatic enquiry delivery, connect Netlify Forms, Formspree or a backend endpoint before launch.

## Included interactions
- Responsive mobile navigation
- Smooth anchor navigation
- Expandable service selector with changing image
- Portfolio category filters and project detail modal
- Previous/next testimonial controls
- Consultation enquiry form
- Scroll reveal and restrained image hover transitions
- Reduced-motion accessibility support
