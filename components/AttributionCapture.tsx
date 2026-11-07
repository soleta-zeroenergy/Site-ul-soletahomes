"use client";

import { useEffect } from "react";
import { captureAttribution, syncAttributionWithConsent } from "@/lib/attribution";
import { subscribeConsent } from "@/lib/consent";

export function AttributionCapture() {
  useEffect(() => {
    captureAttribution();
    const unsubscribe = subscribeConsent(() => syncAttributionWithConsent());
    return unsubscribe;
  }, []);

  return null;
}
