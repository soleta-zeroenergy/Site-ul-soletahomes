"use client";

import { openConsentPreferences } from "@/lib/consent";

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() => openConsentPreferences()}
      className="font-ui text-xs font-medium tracking-wide text-soleta-cream/50 transition-colors duration-200 hover:text-soleta-cream focus-visible:text-soleta-cream active:text-soleta-cream"
    >
      Cookie settings
    </button>
  );
}
