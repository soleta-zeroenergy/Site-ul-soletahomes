---
description: Check whether recent changes broke existing Soleta site behavior, layout, images, navigation, or build safety.
argument-hint: [change summary, commit diff, page path, or empty to inspect current repo]
---

Check for regressions in SoletaHomes.com.

Input:

$ARGUMENTS

Inspect for:
1. Broken routes
2. Broken navigation links
3. Missing images
4. Wrong image paths
5. Bad mobile crops
6. Layout overflow
7. TypeScript errors
8. Component API mismatches
9. Content structure mismatches
10. Gallery/lightbox problems
11. Metadata problems
12. Vercel build risks

Return:

## Regression Verdict
Clean / Warnings / Blocked.

## Blockers
Must fix before commit/deploy.

## Warnings
Should verify manually.

## Files to Inspect
List likely affected files.

## Commands to Run
Use detected package manager.

## Manual QA Checklist
Include key pages and mobile widths.

## Rollback Guidance
Give safe git rollback logic.

Rules:
- Do not modify files unless explicitly asked.
- Do not assume success without tests.
- Prioritize production stability.
