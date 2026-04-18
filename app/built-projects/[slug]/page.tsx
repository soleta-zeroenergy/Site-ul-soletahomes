/**
 * This route existed before the Built Projects routing restructure.
 * Permanent redirects for the three original project slugs are handled
 * in next.config.mjs. Any slug that reaches here (not matched by a redirect)
 * returns a 404 — there is no flat /built-projects/[slug] route anymore.
 */
import { notFound } from "next/navigation";

export default function LegacyProjectPage() {
  notFound();
}
