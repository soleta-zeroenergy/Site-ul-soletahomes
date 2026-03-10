"use client";

import { useEffect } from "react";

type ErrorProps = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log to an error reporting service in production
    console.error(error);
  }, [error]);

  return (
    <section className="section container-site flex flex-col items-start">
      <p className="eyebrow mb-6">Something went wrong</p>
      <h1 className="mb-6">Unexpected error.</h1>
      <p className="text-stone-500 mb-10 max-w-md">
        An error occurred while loading this page. Please try again.
      </p>
      <button onClick={reset} className="btn-primary">Try again</button>
    </section>
  );
}
