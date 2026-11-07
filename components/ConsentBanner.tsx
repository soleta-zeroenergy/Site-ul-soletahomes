"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CONSENT_OPEN_EVENT, readConsent, writeConsent } from "@/lib/consent";

type View = "summary" | "preferences";

const linkClass =
  "text-soleta-gold underline underline-offset-4 transition-opacity duration-200 motion-reduce:transition-none hover:text-soleta-cream hover:opacity-90 focus-visible:text-soleta-cream active:opacity-70";

const buttonBase =
  "inline-flex min-h-[44px] flex-1 items-center justify-center rounded-none border px-5 py-2 font-ui text-xs font-medium uppercase tracking-[0.08em] transition-[opacity,transform] duration-150 motion-reduce:transition-none active:scale-[0.98]";

const actionButton = `${buttonBase} border-soleta-gold/60 bg-transparent text-soleta-cream hover:border-soleta-gold hover:bg-soleta-cream/10 focus-visible:border-soleta-gold focus-visible:bg-soleta-cream/10 active:border-soleta-gold active:bg-soleta-cream/20`;

const primaryButton = `${buttonBase} border-soleta-gold bg-soleta-gold text-soleta-ink hover:opacity-90 focus-visible:opacity-90 active:opacity-80`;

const ghostButton =
  "inline-flex min-h-[44px] items-center justify-center rounded-none font-ui text-xs font-medium uppercase tracking-[0.08em] text-soleta-cream/70 underline underline-offset-4 transition-opacity duration-150 motion-reduce:transition-none hover:text-soleta-cream hover:opacity-90 focus-visible:text-soleta-cream active:opacity-70";

const switchButton =
  "group inline-flex min-h-[44px] min-w-[44px] shrink-0 items-center justify-center rounded-none p-2 transition-transform duration-150 motion-reduce:transition-none hover:opacity-90 focus-visible:opacity-90 active:scale-95";

const toggleTrack =
  "relative inline-flex h-7 w-12 items-center rounded-none border-2";

const toggleKnob =
  "absolute left-0.5 top-0.5 h-5 w-5 bg-soleta-cream transition-transform duration-200 motion-reduce:transition-none";

export function ConsentBanner() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [view, setView] = useState<View>("summary");
  const [analyticsChecked, setAnalyticsChecked] = useState(false);
  const [marketingChecked, setMarketingChecked] = useState(false);
  const openerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    setMounted(true);

    if (readConsent() === null) {
      setView("summary");
      setVisible(true);
    }

    const handleOpen = () => {
      const current = readConsent();
      setAnalyticsChecked(current?.analytics === true);
      setMarketingChecked(current?.marketing === true);
      openerRef.current = document.activeElement as HTMLElement | null;
      setView("preferences");
      setVisible(true);
    };

    window.addEventListener(CONSENT_OPEN_EVENT, handleOpen);
    return () => window.removeEventListener(CONSENT_OPEN_EVENT, handleOpen);
  }, []);

  useEffect(() => {
    if (!visible || view !== "preferences") return;

    function handleEscape(event: KeyboardEvent) {
      if (event.key !== "Escape") return;
      // Escape dismisses the preferences without saving, but only once a valid
      // choice exists: a first-time visitor has to decide explicitly.
      if (readConsent() === null) return;

      setVisible(false);
      const opener = openerRef.current;
      openerRef.current = null;
      opener?.focus();
    }

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [visible, view]);

  function close() {
    setVisible(false);
    const opener = openerRef.current;
    openerRef.current = null;
    opener?.focus();
  }

  function handleAcceptAll() {
    writeConsent({ analytics: true, marketing: true });
    close();
  }

  function handleRejectAll() {
    writeConsent({ analytics: false, marketing: false });
    close();
  }

  function handleSave() {
    writeConsent({ analytics: analyticsChecked, marketing: marketingChecked });
    close();
  }

  if (!mounted || !visible) return null;

  return (
    <section
      role="region"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-[60] flex max-h-[50vh] flex-col overflow-hidden border-t border-soleta-gold/30 bg-soleta-forest px-4 py-5 text-soleta-cream sm:px-6"
    >
      <div className="mx-auto flex min-h-0 w-full max-w-3xl flex-1 flex-col gap-4 overflow-y-auto">
        {view === "summary" ? (
          <>
            <div className="flex flex-col gap-2">
              <h2 className="font-ui text-sm font-medium tracking-wide text-soleta-cream">
                Cookies on this site
              </h2>
              <p className="font-ui text-xs leading-relaxed text-soleta-cream/70">
                We use strictly necessary storage to run this site. Only with your
                consent do we load analytics to understand how the site is used, or
                keep marketing signals tied to a form you submit. See the{" "}
                <Link href="/privacy#cookies" className={linkClass}>
                  Privacy Policy
                </Link>
                .
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex gap-3">
                <button type="button" onClick={handleRejectAll} className={actionButton}>
                  Reject all
                </button>
                <button type="button" onClick={handleAcceptAll} className={actionButton}>
                  Accept all
                </button>
              </div>
              <button
                type="button"
                onClick={() => setView("preferences")}
                className={`${ghostButton} self-start`}
              >
                Preferences
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-col gap-2">
              <h2 className="font-ui text-sm font-medium tracking-wide text-soleta-cream">
                Cookie preferences
              </h2>
              <p className="font-ui text-xs leading-relaxed text-soleta-cream/70">
                Choose what you allow. See the{" "}
                <Link href="/privacy#cookies" className={linkClass}>
                  Privacy Policy
                </Link>{" "}
                for details.
              </p>
            </div>

            <div className="flex min-h-0 flex-1 flex-col gap-4 overflow-y-auto border-y border-soleta-cream/15 py-4">
              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <span className="font-ui text-xs font-medium text-soleta-cream">
                    Strictly necessary
                  </span>
                  <span className="font-ui text-xs text-soleta-cream/60">
                    Required for the site to function. Cannot be switched off.
                  </span>
                </div>
                <span className="font-ui text-[0.6875rem] font-medium uppercase tracking-wide text-soleta-cream/50">
                  Always active
                </span>
              </div>

              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="consent-analytics" className="font-ui text-xs font-medium text-soleta-cream">
                    Analytics
                  </label>
                  <span className="font-ui text-xs text-soleta-cream/60">
                    Lets us see how visitors use the site, using Google Analytics 4.
                  </span>
                </div>
                <button
                  id="consent-analytics"
                  type="button"
                  role="switch"
                  aria-checked={analyticsChecked}
                  onClick={() => setAnalyticsChecked((prev) => !prev)}
                  className={switchButton}
                >
                  <span
                    className={`${toggleTrack} ${
                      analyticsChecked
                        ? "border-soleta-gold bg-soleta-gold/20"
                        : "border-soleta-cream/40 bg-transparent"
                    } group-hover:border-soleta-gold group-focus-visible:border-soleta-gold`}
                  >
                    <span
                      className={`${toggleKnob} ${analyticsChecked ? "translate-x-[20px]" : "translate-x-0"}`}
                    />
                  </span>
                </button>
              </div>

              <div className="flex items-start justify-between gap-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="consent-marketing" className="font-ui text-xs font-medium text-soleta-cream">
                    Marketing
                  </label>
                  <span className="font-ui text-xs text-soleta-cream/60">
                    Today this only covers advertising consent signals and keeping
                    click identifiers (gclid, fbclid) to send with a form you submit.
                  </span>
                </div>
                <button
                  id="consent-marketing"
                  type="button"
                  role="switch"
                  aria-checked={marketingChecked}
                  onClick={() => setMarketingChecked((prev) => !prev)}
                  className={switchButton}
                >
                  <span
                    className={`${toggleTrack} ${
                      marketingChecked
                        ? "border-soleta-gold bg-soleta-gold/20"
                        : "border-soleta-cream/40 bg-transparent"
                    } group-hover:border-soleta-gold group-focus-visible:border-soleta-gold`}
                  >
                    <span
                      className={`${toggleKnob} ${marketingChecked ? "translate-x-[20px]" : "translate-x-0"}`}
                    />
                  </span>
                </button>
              </div>
            </div>

            <div className="flex gap-3">
              <button type="button" onClick={handleRejectAll} className={actionButton}>
                Reject all
              </button>
              <button type="button" onClick={handleAcceptAll} className={actionButton}>
                Accept all
              </button>
              <button type="button" onClick={handleSave} className={primaryButton}>
                Save choices
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
