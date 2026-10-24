# AGENTS.md

## Project

Static personal portfolio site (GitHub Pages user site: `prateekchaplot.github.io`).
Everything lives in a single file: `index.html` contains all HTML, CSS, and JS inline.
There are no tracked assets; the avatar/cover comes from GitHub (`https://avatars.githubusercontent.com/u/14346866?v=4`).

## Structure / entrypoints

- `index.html` — sole entrypoint and the entire site.
- No `assets/` directory exists now; do not recreate one unless adding real files.
- Referenced but missing: `assets/img/favicon.png` (legacy path from an older template; do not chase the 404 unless asked).
- No `package.json`, build config, tests, lint, or CI in this repo.

## Commands

- There is nothing to build, test, or lint. Preview by opening `index.html` in a browser (no dev server needed).
- Deploy = push to `main`; GitHub Pages serves the repo root.
- Shell commands run in PowerShell: `&&` is not a valid statement separator. Use `;` or run commands separately. Quote paths with spaces.

## Editing guidance

- Keep changes as small, targeted edits. `index.html` is ~1100 lines and uses mostly CRLF line endings with a few LF-only lines; preserve existing line endings to avoid huge diffs.
- All content is inline; CSS lives in the `<style>` block, JS in the trailing `<script>`. Navigation anchors (`#experience`, `#skills`, `#education`, `#contact`) must stay consistent with section ids.
- Theme toggle persists under localStorage key `theme` (`light`/`dark`); `data-theme` on `<html>` drives styling.
- Contact form posts to Formspree via `form[action*="formspree"]` and is handled in JS with `application/x-www-form-urlencoded`. The endpoint is `https://formspree.io/f/prateekchaplot96@gmail.com` (looks malformed—confirm before changing).
- Footer year is injected by JS into `#year`.
- Avatar image is loaded from `https://avatars.githubusercontent.com/u/14346866?v=4`, not from `assets/`.

## Constraints

- Do not introduce build tooling, frameworks, or a package manager; this is intentionally a single-file static site.
- Do not commit generated/dependency directories.
