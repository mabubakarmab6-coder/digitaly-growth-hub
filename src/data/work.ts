export interface WorkProject {
  id: string;
  slug: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string[];
  client: string;
  year: string;
  services: string[];
  technologies: string[];
  imageUrl: string;
  liveUrl?: string;
  results: {
    metric: string;
    label: string;
  }[];
}

export const workProjects: WorkProject[] = [
  {
    id: "gemstone-gallery",
    slug: "gemstone-gallery",
    title: "Gemstone Gallery",
    category: "Website Development",
    shortDescription: "A modern, high-performance portfolio website engineered to showcase creative design, in-depth case studies, and digital marketing expertise.",
    fullDescription: [
      "Gemstone Gallery (formerly Sparkle) is a generational gemstone manufacturing unit based in Jaipur. They needed a digital presence that reflected their commitment to quality, consistency, and reliability.",
      "We built a modern, responsive website that serves as a digital portfolio for their manufacturing capabilities. The site highlights their specialized Barni polishing, cabochons, and faceted stone manufacturing processes.",
      "The final product provides a seamless user experience, allowing potential B2B clients to explore their work, understand their process, and easily request quotes for custom manufacturing requirements."
    ],
    client: "Gemstone Gallery",
    year: "2026",
    services: ["Web Design", "Web Development", "UI/UX", "Copywriting"],
    technologies: ["React", "TypeScript", "Vite", "Lucide Icons"],
    imageUrl: "/placeholder.svg",
    results: [
      {
        metric: "100%",
        label: "Mobile Responsive"
      },
      {
        metric: "Sub-second",
        label: "Load Time"
      },
      {
        metric: "B2B",
        label: "Focus"
      }
    ]
  }
];
