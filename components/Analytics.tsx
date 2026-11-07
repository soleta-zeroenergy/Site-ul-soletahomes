"use client";

import { useEffect } from "react";
import { readConsent, subscribeConsent, type ConsentState } from "@/lib/consent";

const GA_ID = "G-Y5YM5YL7VC";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

let gaInitialized = false;

function ensureGtag(): (...args: unknown[]) => void {
  window.dataLayer = window.dataLayer ?? [];
  if (!window.gtag) {
    window.gtag = function gtag() {
      // gtag.js reads the Arguments object, exactly as the official snippet pushes it.
      window.dataLayer!.push(arguments);
    };
  }
  return window.gtag;
}

function sendConsentUpdate(gtag: (...args: unknown[]) => void, analytics: boolean, marketing: boolean) {
  gtag("consent", "update", {
    analytics_storage: analytics ? "granted" : "denied",
    ad_storage: marketing ? "granted" : "denied",
    ad_user_data: marketing ? "granted" : "denied",
    ad_personalization: marketing ? "granted" : "denied",
  });
}

function setGaDisabled(disabled: boolean) {
  (window as unknown as Record<string, boolean>)[`ga-disable-${GA_ID}`] = disabled;
}

function deleteGaCookies() {
  const hostname = window.location.hostname;

  const cookieNames = document.cookie
    .split(";")
    .map((part) => part.trim().split("=")[0])
    .filter((name) => name === "_ga" || name.startsWith("_ga_"));

  const domainSuffixes: string[] = [];
  const parts = hostname.split(".");
  for (let i = 0; i < parts.length; i++) {
    const suffix = parts.slice(i).join(".");
    if (suffix.includes(".")) domainSuffixes.push(suffix);
  }

  for (const name of cookieNames) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;
    for (const suffix of domainSuffixes) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=${suffix}`;
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/; domain=.${suffix}`;
    }
  }
}

function initializeGa(marketing: boolean) {
  const gtag = ensureGtag();

  gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });
  gtag("set", "ads_data_redaction", true);
  sendConsentUpdate(gtag, true, marketing);
  gtag("js", new Date());
  gtag("config", GA_ID);

  if (!document.getElementById("ga4-src")) {
    const script = document.createElement("script");
    script.async = true;
    script.id = "ga4-src";
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
    document.head.appendChild(script);
  }

  gaInitialized = true;
}

function applyConsent(state: ConsentState | null) {
  const analytics = state?.analytics === true;
  const marketing = state?.marketing === true;

  if (!gaInitialized) {
    if (analytics) initializeGa(marketing);
    return;
  }

  const gtag = window.gtag;
  if (!gtag) return;

  if (analytics) {
    setGaDisabled(false);
    sendConsentUpdate(gtag, true, marketing);
  } else {
    sendConsentUpdate(gtag, false, false);
    setGaDisabled(true);
    deleteGaCookies();
  }
}

export function Analytics() {
  useEffect(() => {
    applyConsent(readConsent());
    return subscribeConsent(applyConsent);
  }, []);

  return null;
}
