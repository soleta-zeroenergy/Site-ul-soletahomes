---
description: Convert a Soleta website change request into a safe implementation task with constraints and acceptance criteria.
argument-hint: [change request]
---

Convert this SoletaHomes.com request into a safe implementation task:

$ARGUMENTS

Return:

## Recommended Agent
Use Claude Sonnet 4.6 unless the task is mostly mechanical code refactoring.
If mostly mechanical code refactoring, mention GPT-5.3 Codex as an alternative.

## PlanMode
ON for ambiguous multi-file changes.
OFF for small controlled edits.

## Where to Run
Specify:
- VSCode Claude planning tab
- second Claude execution tab
- Codex tab
- terminal

## Goal
Define the exact goal.

## Files Likely Involved
List probable files, but mark as probable unless verified.

## Constraints
Include:
- preserve current design direction
- preserve existing routes
- preserve existing content unless explicitly changed
- preserve working layout
- avoid broad refactors
- avoid changing unrelated sections

## Required Changes
Concrete changes.

## Must Not Change
Explicitly protect unrelated pages, navigation, styles, data structures, and components.

## Acceptance Criteria
What must be true after completion.

## Test Commands
Detect package manager before finalizing if possible.

## Build Commands
Detect package manager before finalizing if possible.

## Vercel Deployment Update Commands
Provide:
git status
npm run lint
npm run build
git add .
git commit -m "<clear message>"
git push
vercel --prod

Rules:
- Do not implement yet.
- Do not assume file paths without checking the repo.
- Keep the task narrow.
- Protect production stability.
