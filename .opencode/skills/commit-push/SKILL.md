---
name: commit-push
description: Commit and push changes for this single-file GitHub Pages portfolio site, respecting PowerShell constraints and repo conventions.
---

# Commit and Push (prateekchaplot.github.io)

Use this skill when the user asks to commit and push changes in this repository.

## Repo context

- Single entrypoint: `index.html` (all HTML/CSS/JS inline). No build, tests, or lint.
- Deploy = push to `main`; GitHub Pages serves the repo root.
- Branch: `main`, remote `origin` (https://github.com/prateekchaplot/prateekchaplot.github.io.git).
- No `assets/` directory should exist; legacy `assets/profile.jpg` was removed. Do not recreate assets unless adding real files.
- `AGENTS.md` is harness/project context; it may be tracked. Preserve existing line endings (mostly CRLF; a few LF-only lines).

## Workflow

1. Inspect state first:
   ```powershell
   git status
   git log --oneline -5
   ```
2. Show the planned commands to the user and confirm before running.
3. Stage changes:
   - Prefer `git add -A` when committing everything, or stage specific paths.
4. Commit with a concise message describing the change.
5. Push to origin main:
   ```powershell
   git push
   ```
6. Report the commit hash and push result.

## Shell constraints (Windows / PowerShell)

- PowerShell does NOT support `&&` as a statement separator. Use `;` or run commands separately.
- Quote paths with spaces.
- Line endings: git may warn "LF will be replaced by CRLF". This is expected for this repo; do not fight it unless asked.

## Conventions

- Keep commits small and targeted.
- Do not introduce build tooling, frameworks, or package managers.
- Do not commit generated/dependency directories.
- Confirm before destructive actions (force push, reset, etc.).

## Example command sequence

```powershell
git status
git add -A
git commit -m "Describe change"
git push
```

