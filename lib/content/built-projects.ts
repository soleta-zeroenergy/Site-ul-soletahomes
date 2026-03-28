export type Project = {
  slug: string;
  category: "private" | "holiday" | "hospitality" | "educational";
  categoryLabel: string;
  title: string;
  location: string;
  country: string;
  year: string;
  area: string;
  model: string;
  imageSrc: string;
  imageAlt: string;
  summary: string;
  description: string[];
  specs: { label: string; value: string }[];
  testimonial?: { quote: string; author: string };
  relatedSlugs: string[];
};

export const projects: Project[] = [
  {
    slug: "villa-falaise",
    category: "private",
    categoryLabel: "Private Residence",
    title: "Villa Falaise",
    location: "Chamonix",
    country: "France",
    year: "2023",
    area: "142 m²",
    model: "Signature",
    imageSrc: "/images/projects/villa-falaise.jpg",
    imageAlt: "Villa Falaise exterior, Chamonix, France",
    summary:
      "A Signature home set against the Mont Blanc massif — designed to disappear into the alpine landscape while offering full-height glazing onto the glacier.",
    description: [
      "Villa Falaise presented a rare challenge: a landmark alpine site with strict planning requirements and extreme weather conditions. The brief was to create a home that felt rooted in the landscape — not imposed upon it.",
      "The structural solution uses an extended post and beam glulam frame with cantilevered sections that minimise ground contact and reduce visual mass. Charred larch cladding was chosen to weather into the surrounding pine forest.",
      "Full-height glazing on the south facade frames the Mont Blanc massif as a living artwork. Triple-glazed, thermally broken frames ensure the envelope performs at -25°C without relying on mechanical heating.",
    ],
    specs: [
      { label: "Location", value: "Chamonix, Haute-Savoie, France" },
      { label: "Year", value: "2023" },
      { label: "Area", value: "142 m²" },
      { label: "Collection", value: "Signature" },
      { label: "Energy", value: "A+ · Near-ZeroEnergy" },
      { label: "Foundation", value: "Concrete strip — alpine load spec" },
      { label: "Cladding", value: "Thermally modified larch" },
    ],
    testimonial: {
      quote:
        "We wanted a home that earned its place on this mountain. Soleta understood that from the first conversation.",
      author: "Owner, Villa Falaise",
    },
    relatedSlugs: ["haus-tegernsee", "worthersee-lodge"],
  },
  {
    slug: "haus-tegernsee",
    category: "private",
    categoryLabel: "Private Residence",
    title: "Haus Tegernsee",
    location: "Bavaria",
    country: "Germany",
    year: "2022",
    area: "120 m²",
    model: "Classic",
    imageSrc: "/images/projects/haus-tegernsee.jpg",
    imageAlt: "Haus Tegernsee exterior, Bavaria, Germany",
    summary:
      "A Classic Soleta home on the shores of Lake Tegernsee — designed for year-round family living with a direct connection to the water.",
    description: [
      "The clients had owned the lakeside plot for years but struggled to find a design that matched the quality of the setting. The brief was simple: a home that respects the lake, the trees and the Bavarian light.",
      "The Classic 120 was configured with a single open-plan ground floor opening directly onto a cantilevered terrace over the water. The upper level contains three bedrooms, each with its own view corridor through the forest.",
      "The ZeroEnergy package — geothermal heating combined with a 12kW solar array — means the family's energy bills are negligible, even through Bavarian winters.",
    ],
    specs: [
      { label: "Location", value: "Tegernsee, Bavaria, Germany" },
      { label: "Year", value: "2022" },
      { label: "Area", value: "120 m²" },
      { label: "Collection", value: "Classic" },
      { label: "Energy", value: "ZeroEnergy — geothermal + solar" },
      { label: "Foundation", value: "Ground screws (KSF)" },
      { label: "Cladding", value: "Douglas fir — natural silver weathering" },
    ],
    testimonial: {
      quote:
        "The build was fast, the quality was exactly what was promised. We were in by October, in time for the first winter.",
      author: "Owner, Haus Tegernsee",
    },
    relatedSlugs: ["villa-falaise", "worthersee-lodge"],
  },
  {
    slug: "worthersee-lodge",
    category: "holiday",
    categoryLabel: "Holiday Home",
    title: "Wörthersee Lodge",
    location: "Carinthia",
    country: "Austria",
    year: "2024",
    area: "72 m²",
    model: "Holiday & Retreat",
    imageSrc: "/images/projects/worthersee-lodge.jpg",
    imageAlt: "Wörthersee Lodge exterior, Carinthia, Austria",
    summary:
      "A compact retreat home on the northern shore of Lake Wörthersee — minimal footprint, maximum connection to water and forest.",
    description: [
      "The Wörthersee site presented a challenge: a narrow waterfront plot with strict set-back requirements and a protected tree line. The solution was a long, low form that threads between the existing trees without removing a single one.",
      "The Lodge 72 is configured as a single open living space with a sleeping mezzanine and a full-width south terrace that steps directly to the private dock. Ground screw foundations were essential — the site required zero excavation.",
      "The clients use the Lodge as a personal escape during summer and rent it through a boutique agency during the shoulder season. The ZeroEnergy systems make off-season operation cost-free.",
    ],
    specs: [
      { label: "Location", value: "Wörthersee, Carinthia, Austria" },
      { label: "Year", value: "2024" },
      { label: "Area", value: "72 m²" },
      { label: "Collection", value: "Holiday & Retreat" },
      { label: "Energy", value: "ZeroEnergy — solar + battery" },
      { label: "Foundation", value: "Ground screws — zero excavation" },
      { label: "Cladding", value: "Siberian larch" },
    ],
    testimonial: {
      quote:
        "It arrived as a complete home and was assembled in four days. I still find that remarkable.",
      author: "Owner, Wörthersee Lodge",
    },
    relatedSlugs: ["haus-tegernsee", "villa-falaise"],
  },
];

export const projectCategories = [
  { value: "all", label: "All Projects" },
  { value: "private", label: "Private Residences" },
  { value: "holiday", label: "Holiday Homes" },
  { value: "hospitality", label: "Hospitality & Resorts" },
  { value: "educational", label: "Educational & Public" },
];
