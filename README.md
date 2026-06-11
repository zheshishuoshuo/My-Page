# Shuo Zhang Personal Homepage

This is Shuo Zhang's static academic homepage. It can be deployed directly to GitHub Pages, Cloudflare Pages, Netlify, or any static file host.

## Preview

Open `index.html` directly in a browser.

To preview with a local server:

```bash
python3 -m http.server 8080
```

Then visit `http://localhost:8080`.

## Common Edit Points

- `index.html`: homepage overview, biography, featured projects, experience, email, and social links.
- `research.html`: dedicated research page with projects, methods, and publication placeholders.
- `diary.html`: diary and notes page for research logs, reading notes, and short reflections.
- `contact.html`: dedicated contact page with email, GitHub, ORCID, CV, and affiliation details.
- `styles.css`: colors, typography, and responsive layout.
- `script.js`: copy-email behavior and navigation highlighting.
- `assets/abell-370-hubble.jpg`: hero image of Abell 370 strong gravitational lensing.
- `assets/personal.jpg`: personal photo in the About section.
- `files/Shuo_Zhang_CV.pdf`: downloadable CV.

Hero image source: NASA/ESA Hubble's Abell 370 gravitational lensing page.

## Future Upgrades

The current version does not use a framework, which keeps the homepage lightweight. If Markdown posts, archives, multilingual content, or RSS are needed later, Astro would be a good next step.
