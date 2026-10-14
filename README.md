# rverma510.github.io

My personal website — a single-page, story-led introduction built as a plain static site.

**Live:** https://rverma510.github.io

## Stack

Plain HTML, CSS, and a little vanilla JavaScript. No framework, no build step, no
dependencies — GitHub Pages serves the files exactly as they are.

## Project structure

```
.
├── index.html      # all page content and structure
├── styles.css      # all styling (light + dark, responsive)
├── script.js       # footer year + fade-in-on-scroll
├── favicon.svg     # "RV" tab icon
├── .nojekyll       # tells GitHub Pages to serve files as-is (skip Jekyll)
└── images/
    └── raghav.jpg  # hero portrait
```

## Run locally

No tooling needed — just serve the folder:

```bash
python3 -m http.server 8000
```

Then open http://localhost:8000. (Opening `index.html` directly works too, but a
local server matches how GitHub Pages serves it.)

## Editing content

Almost everything lives in `index.html`, organised into sections: hero, impact
stats, journey, strengths, running, and contact.

### Updating the running stats

The numbers come from [Strava](https://www.strava.com/athletes/129945498) and are
entered by hand. To refresh them, edit the `#running` section in `index.html`:

1. Update the four values in the `run-stats` list.
2. Update the date in `<time datetime="2026-10">October 2026</time>` just below it.

## Deploying

The site auto-deploys from the `main` branch. Any push goes live in about a minute:

```bash
git add .
git commit -m "Describe your change"
git push
```

GitHub Pages is configured under **Settings → Pages**: deploy from branch `main`,
folder `/ (root)`.

---

Designed by Raghav, coded with Claude.
