/* ─── Shared types ───────────────────────────────────────────────────────── */
export type NavLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type NavGroup = {
  label: string;
  href?: string;
  items: NavLink[];
};

export type TopNavItem =
  | { label: string; href: string; type: "link"; external?: boolean }
  | { label: string; href?: string; type: "dropdown"; items: NavLink[] }
  | { label: string; href?: string; type: "mega"; groups: NavGroup[] };

/* ─── Header navigation ──────────────────────────────────────────────────── */
export const topNav: TopNavItem[] = [
  {
    label: "The Collection",
    href: "/collection",
    type: "mega",
    groups: [
      {
        label: "The Collection",
        href: "/collection",
        items: [
          { label: "Signature Homes",       href: "/collection/signature" },
          { label: "Classic Soleta Homes",  href: "/collection/classic" },
          { label: "Large Family Homes",    href: "/collection/large-family" },
          { label: "Holiday & Retreat Homes", href: "/collection/holiday-retreat" },
          { label: "Custom Architecture",   href: "/collection/custom-architecture" },
        ],
      },
    ],
  },
  {
    label: "Built Projects",
    href: "/built-projects",
    type: "mega",
    groups: [
      {
        label: "All Projects",
        href: "/built-projects",
        items: [
          { label: "Private Residences",    href: "/built-projects/private-residences" },
          { label: "Holiday Homes",         href: "/built-projects/holiday-homes" },
          { label: "Hospitality & Resorts", href: "/built-projects/hospitality-resorts" },
          { label: "Educational & Public",  href: "/built-projects/educational-public" },
          { label: "Case Studies",          href: "/built-projects/case-studies" },
        ],
      },
    ],
  },
  {
    label: "Architecture & Design",
    href: "/architecture",
    type: "mega",
    groups: [
      {
        label: "Architecture & Design",
        href: "/architecture",
        items: [
          { label: "Soleta Design Language",            href: "/architecture/design-language" },
          { label: "Post & Beam Construction System",   href: "/architecture/post-beam" },
          { label: "Healthy Materials",                 href: "/architecture/healthy-materials" },
          { label: "Energy Efficiency & ZeroEnergy",    href: "/architecture/energy-zeroenergy" },
          { label: "Certifications & Standards",        href: "/architecture/certifications" },
        ],
      },
    ],
  },
  {
    label: "Process & Services",
    href: "/process",
    type: "mega",
    groups: [
      {
        label: "Our Process",
        href: "/process",
        items: [
          { label: "Dream",             href: "/process/dream" },
          { label: "Design & Planning", href: "/process/design-planning" },
          { label: "Engineering",       href: "/process/engineering" },
          { label: "Build",             href: "/process/build" },
          { label: "Turnkey Delivery",  href: "/process/turnkey" },
        ],
      },
      {
        label: "Services",
        items: [
          { label: "Private Consulting", href: "/services/private-consulting" },
          { label: "Custom Design",      href: "/services/custom-design" },
          { label: "Permits & Legal",    href: "/services/permits-legal" },
          { label: "Interior Design",    href: "/services/interior-design" },
          { label: "Aftercare",          href: "/services/aftercare" },
        ],
      },
    ],
  },
  {
    label: "For Developers",
    type: "dropdown",
    items: [
      { label: "Hospitality Projects",         href: "/developers/hospitality" },
      { label: "Residential Developments",     href: "/developers/residential" },
      { label: "Modular Investment Solutions", href: "/developers/modular" },
    ],
  },
  {
    label: "Explore House Plans",
    href: "https://soletahouseplans.com",
    type: "link",
    external: true,
  },
];

/* ─── Footer navigation ──────────────────────────────────────────────────── */
export type FooterLink = {
  label: string;
  href: string;
  external?: boolean;
};

export type FooterColumn = {
  heading?: string;
  links: FooterLink[];
};

export const footerNav: FooterColumn[] = [
  {
    links: [
      { label: "About Soleta",       href: "/about" },
      { label: "Sustainability",     href: "/sustainability" },
      { label: "Press & Media",      href: "/press" },
      { label: "Awards & Recognition", href: "/awards" },
      { label: "Investors",          href: "/investors" },
    ],
  },
  {
    heading: "Timber Houses by Country",
    links: [
      { label: "Germany",     href: "/country/germany" },
      { label: "France",      href: "/country/france" },
      { label: "Austria",     href: "/country/austria" },
      { label: "Switzerland", href: "/country/switzerland" },
      { label: "Italy",       href: "/country/italy" },
    ],
  },
  {
    heading: "Part of Soleta Group",
    links: [
      { label: "Soleta House Plans",    href: "https://soletahouseplans.com", external: true },
      { label: "Solenhus (Nordic Homes)", href: "#", external: true },
      { label: "Soleta Structures",     href: "#", external: true },
      { label: "Soleta Renovations",    href: "#", external: true },
    ],
  },
  {
    links: [
      { label: "Catalog Download", href: "/catalog" },
      { label: "Careers",          href: "/careers" },
      { label: "Help Center",      href: "/help-center" },
    ],
  },
];
