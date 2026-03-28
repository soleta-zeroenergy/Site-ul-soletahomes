export type NavChild = {
  label: string;
  href: string;
  external?: boolean;
};

export type NavSection = {
  sectionLabel?: string;
  children: NavChild[];
};

export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  sections?: NavSection[];
};

export type FooterColumn = {
  heading?: string;
  links: NavChild[];
};

export const headerNav: NavItem[] = [
  {
    label: "The Collection",
    href: "/collection",
    sections: [
      {
        children: [
          { label: "Signature Homes", href: "/collection/signature" },
          { label: "Classic Soleta Homes", href: "/collection/classic" },
          { label: "Large Family Homes", href: "/collection/large-family" },
          { label: "Holiday & Retreat Homes", href: "/collection/holiday-retreat" },
          { label: "Custom Architecture", href: "/collection/custom-architecture" }
        ]
      }
    ]
  },
  {
    label: "Built Projects",
    href: "/built-projects",
    sections: [
      {
        children: [
          { label: "Private Residences", href: "/built-projects/private-residences" },
          { label: "Holiday Homes", href: "/built-projects/holiday-homes" },
          { label: "Hospitality & Resorts", href: "/built-projects/hospitality-resorts" },
          { label: "Educational & Public", href: "/built-projects/educational-public" },
          { label: "Case Studies", href: "/built-projects/case-studies" }
        ]
      }
    ]
  },
  {
    label: "Architecture & Design",
    href: "/architecture",
    sections: [
      {
        children: [
          { label: "Soleta Design Language", href: "/architecture/design-language" },
          { label: "Post & Beam Construction System", href: "/architecture/post-beam" },
          { label: "Healthy Materials", href: "/architecture/healthy-materials" },
          { label: "Energy Efficiency & ZeroEnergy", href: "/architecture/energy-zeroenergy" }
        ]
      }
    ]
  },
  {
    label: "Process & Services",
    href: "/process",
    sections: [
      {
        sectionLabel: "Process",
        children: [
          { label: "Dream", href: "/process/dream" },
          { label: "Design & Planning", href: "/process/design-planning" },
          { label: "Engineering", href: "/process/engineering" },
          { label: "Build", href: "/process/build" },
          { label: "Turnkey Delivery", href: "/process/turnkey" }
        ]
      },
      {
        sectionLabel: "Services",
        children: [
          { label: "Private Consulting", href: "/services/private-consulting" },
          { label: "Custom Design", href: "/services/custom-design" },
          { label: "Permits & Legal", href: "/services/permits-legal" },
          { label: "Interior Design", href: "/services/interior-design" },
          { label: "Aftercare", href: "/services/aftercare" }
        ]
      }
    ]
  },
  {
    label: "Explore House Plans",
    href: "https://soletahouseplans.com",
    external: true
  }
];

export const footerColumns: FooterColumn[] = [
  {
    links: [
      { label: "About Soleta", href: "/about" },
      { label: "Sustainability", href: "/sustainability" },
      { label: "Press & Media", href: "/press" }
    ]
  },
  {
    heading: "Part of Soleta Group",
    links: [
      { label: "Soleta House Plans", href: "https://soletahouseplans.com", external: true },
      { label: "Solenhus (Nordic Homes)", href: "#", external: true },
      { label: "Soleta Structures", href: "#", external: true },
      { label: "Soleta Renovations", href: "#", external: true }
    ]
  },
  {
    links: [
      { label: "Catalog Download", href: "/catalog" },
      { label: "Careers", href: "/careers" },
      { label: "Help Center", href: "/help-center" }
    ]
  }
];

export const legalNav: NavChild[] = [];
