# AGENTS.md

Static personal portfolio (GitHub Pages user site). Everything lives in one file: `index.html` (all HTML, CSS, JS inline). No build, tests, lint, or CI.

## Structure

- `index.html` — sole entrypoint (~1105 lines).
- No `assets/` directory; avatar/cover loaded from `https://avatars.githubusercontent.com/u/14346866?v=4`.
- Favicon points to legacy `https://prateekchaplot.github.io/assets/img/favicon.png` (missing; don't chase the 404 unless asked).
- No `package.json`, build config, or tooling.

## Commands

- Preview: open `index.html` in a browser (no dev server).
- Deploy: push to `main`; GitHub Pages serves the repo root.
- Nothing to build/test/lint.
- For commit + push, use the `commit-push` skill.

## Editing guidance

- Preserve line endings: mostly CRLF with ~20 LF-only lines; keep edits targeted to avoid huge diffs.
- Git may warn "LF will be replaced by CRLF" on commit; expected for this repo.
- CSS in `<style>`, JS in the trailing `<script>`.
- Nav anchors `#top`, `#experience`, `#skills`, `#education`, `#contact` must match section ids.
- Theme toggle persists under localStorage key `theme` (`light`/`dark`); `data-theme` on `<html>` drives styling.
- Contact form posts to Formspree via `form[action*="formspree"]`, endpoint `https://formspree.io/f/prateekchaplot96@gmail.com` (looks malformed—confirm before changing). JS sends FormData with `Content-Type: application/x-www-form-urlencoded`.
- Footer year injected by JS into `#year`.

## Constraints

- Do not introduce build tooling, frameworks, or a package manager.
- Do not recreate `assets/` unless adding real files.
- Do not commit generated/dependency directories.