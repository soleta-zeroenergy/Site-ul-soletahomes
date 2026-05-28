---
description: Provide the exact command sequence to commit and deploy SoletaHomes.com changes to Vercel safely.
argument-hint: [commit message or change summary]
---

Prepare a safe Git and Vercel update sequence for SoletaHomes.com.

Input:

$ARGUMENTS

Return:

## Pre-Deploy Checks
Commands to inspect status and run validation.

## Commit Commands
Use a clear commit message based on the input.

## Push Command
Provide git push.

## Vercel Deploy Command
Provide production deploy command.

## Full Command Sequence
Return a single bash block.

## Notes
Mention whether deployment is actually necessary.

Default command sequence:
git status
npm run lint
npm run build
git add .
git commit -m "<clear message>"
git push
vercel --prod

Rules:
- If only .claude files changed, say Vercel deploy is not required.
- Do not use git add . if there may be unrelated files; recommend git add with specific paths when safer.
- Do not assume tests passed.
- Do not hide risk.
