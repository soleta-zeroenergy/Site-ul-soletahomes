---
description: Evaluate whether images are suitable for Soleta pages, especially crop, focal point, mobile behavior, and architectural visibility.
argument-hint: [image path, page path, section, screenshot, or image usage description]
---

Evaluate image suitability for SoletaHomes.com.

Input:

$ARGUMENTS

Soleta image rules:
- The house architecture must remain clearly readable.
- Facades should not be accidentally cropped out on mobile.
- Images should feel editorial and real, not CGI, not generic stock.
- Crops must preserve the strongest architectural subject.
- Mobile crops may need object-position control.
- Hero images must not feel too zoomed-in on mobile.
- Collection and model pages must help users choose quickly.
- Images should support calm luxury, not clutter.

Check:
1. Is the image strong enough for a premium architecture brand?
2. Does the crop preserve the architectural subject?
3. Is the focal point correct on desktop?
4. Is the focal point correct on mobile?
5. Does the image need object-position adjustment?
6. Does it need replacement instead of adjustment?
7. Does it damage trust because it looks too rendered or artificial?
8. Does it fit the page intent?
9. Does it improve conversion or only decorate?
10. Is the same visual logic consistent across pages?

Return:

## Image Verdict
Use / Use with crop changes / Replace / Reject.

## Best Use
Hero / card / gallery / detail / background / not suitable.

## Desktop Crop Recommendation
Include likely object-position if relevant.

## Mobile Crop Recommendation
Include likely object-position if relevant.

## Risks
List what can go wrong visually.

## Required Edit
Give concrete implementation guidance.

## Acceptance Criteria
What must be true after adjustment.

Rules:
- Do not accept weak images just because they are available.
- Do not recommend overdecorated crops.
- Keep architecture readable.
- Prefer calm, precise image behavior.
