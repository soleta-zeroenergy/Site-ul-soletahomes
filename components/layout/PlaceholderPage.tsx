import Link from "next/link";

export type Crumb = {
  label: string;
  href?: string;
};

type Props = {
  title: string;
  breadcrumbs: Crumb[];
};

export function PlaceholderPage({ title, breadcrumbs }: Props) {
  return (
    <div className="container-site py-14 md:py-20">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="mb-10">
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-stone-400">
          <li>
            <Link href="/" className="hover:text-stone-600 transition-colors">
              Home
            </Link>
          </li>
          {breadcrumbs.map((crumb, i) => {
            const isLast = i === breadcrumbs.length - 1;
            return (
              <li key={crumb.label} className="flex items-center gap-x-2">
                <span aria-hidden="true">/</span>
                {crumb.href && !isLast ? (
                  <Link href={crumb.href} className="hover:text-stone-600 transition-colors">
                    {crumb.label}
                  </Link>
                ) : (
                  <span aria-current="page" className="text-stone-600">
                    {crumb.label}
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </nav>

      <p className="eyebrow mb-4">Coming Soon</p>
      <h1 className="mb-6">{title}</h1>
      <p className="text-stone-400 max-w-lg text-base">
        This page is part of the Soleta sitemap and will be fully built out shortly.
      </p>
    </div>
  );
}
