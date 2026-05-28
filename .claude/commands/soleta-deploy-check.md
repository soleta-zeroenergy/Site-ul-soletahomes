---
description: Final pre-deployment check for SoletaHomes.com, focused on Vercel safety, build, mobile, images, and production risk.
argument-hint: [change summary or empty to inspect current repo]
---

Perform a final pre-deployment check for SoletaHomes.com.

Input:

$ARGUMENTS

Check:
1. Git status
2. Modified files
3. TypeScript/build risks
4. Broken imports
5. Missing assets
6. Image path risks
7. Mobile layout risks
8. Navigation risks
9. Metadata/SEO risks
10. Vercel deployment risks
11. Environment variable risks
12. Any unrelated changes that should not be deployed

Return:

## Deploy Verdict
Deploy / Do not deploy / Deploy after manual checks.

## Blockers
Issues that must be fixed.

## Warnings
Non-blocking but relevant.

## Required Commands
Use the detected package manager. If unknown, ask to inspect package files.

## Manual Checks Before Deploy
List pages and viewport sizes.

## Safe Deployment Sequence
Give exact commands.

## Rollback Command
Give safe rollback logic.

Rules:
- Do not deploy automatically.
- Do not modify files.
- If this is only .claude command file work, say Vercel deploy is not required.
- Prefer caution over speed.
