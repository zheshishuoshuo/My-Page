# Astro Research Notes

This repository is now shaped as an astronomy research site with three core pieces:

- `/`: homepage for your research identity and current work
- `/about`: profile page for background, projects, outputs, and contact
- `/journal`: research journal powered by Markdown posts in `src/data/post/`
- `/tools`: a toolbox page for databases, visualization links, analysis tools, and writing workflow

## The files you will edit most often

### 1. Site identity

File: `src/config.yaml`

Start by replacing:

- `site.name`
- `site.site`
- `metadata.description`

### 2. Homepage and profile

Files:

- `src/pages/index.astro`
- `src/pages/about.astro`

Replace the placeholder content with:

- your name, affiliation, and group
- research keywords
- active projects or observing plans
- links to papers, code, posters, and datasets

### 3. Research journal entries

Directory: `src/data/post/`

Each journal entry is just a Markdown file, for example:

```md
---
publishDate: 2026-04-12T00:00:00Z
title: This week's reduction notes
excerpt: A short summary.
category: Data Reduction
tags:
  - Astropy
  - Light curves
---

Write the body here.
```

Suggested long-term categories:

- `Observing Plans`
- `Data Reduction`
- `Paper Notes`
- `Research Ideas`

### 4. Toolbox maintenance

File: `src/pages/tools.astro`

A practical structure is:

- literature and databases
- target checks and visualization
- analysis tools
- writing and collaboration

Do not only save URLs. Add one short line explaining what each tool is for in your workflow.

## Current environment note

The page structure and content skeleton have already been rewritten, but this environment does not currently have `node` or `npm`, so final Astro build verification could not be run here.

If your local machine has Node.js installed, the next steps are:

```bash
npm install
npm run dev
```

## A practical order for continuing

1. Replace the site name and domain in `src/config.yaml`
2. Turn `src/pages/about.astro` into your real research profile
3. Write 3 to 5 real journal posts
4. Expand `src/pages/tools.astro` into the set of links you actually use every day
5. Tweak styles and colors only after the real content is in place
# My-Page
