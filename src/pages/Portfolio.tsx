import { useEffect, useRef, useState } from "react";
import { ArrowRight, ArrowUpRight, FileText } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SEOBreadcrumbs } from "@/components/SEOBreadcrumbs";
import { useAnalyticsEvents } from "@/hooks/use-analytics";
import { BOOK_CALL_URL } from "@/lib/contact";
import { cn } from "@/lib/utils";

type Category = "ai" | "web" | "mobile" | "immersive" | "brand";

interface Project {
  title: string;
  kind: string;
  description: string;
  categories: Category[];
  tags: string[];
  url?: string;
  image?: string;
  video?: string;
}

const featured: Project[] = [
  {
    title: "Quizitt",
    kind: "AI product · Web + mobile",
    description:
      "An AI quiz platform that writes personalised quizzes on any topic and adapts the learning path to each student. Shipped on the web and as a React Native app.",
    categories: ["ai", "web", "mobile"],
    tags: ["AI", "EdTech", "React Native"],
    url: "https://quizitt.com",
    image: "/quizitt.jpg",
  },
  {
    title: "CatchPhish",
    kind: "AI security tool",
    description:
      "Uses AI to check whether a website is a phishing page before you hand it your login.",
    categories: ["ai", "web"],
    tags: ["ML", "Security", "React"],
    url: "https://catchphish.vercel.app/HomePage",
  },
];

const projects: Project[] = [
  {
    title: "PetroGo",
    kind: "Operations platform · Web + mobile",
    description: "Runs a petrol pump with no paperwork and no Excel, with real-time tracking and analytics.",
    categories: ["web", "mobile"],
    tags: ["Automation", "React Native"],
    image: "/petrol_logo.png",
  },
  {
    title: "Casa",
    kind: "E-commerce",
    description: "A fashion store with a Tinder-style swipe for discovering clothes you love.",
    categories: ["web"],
    tags: ["E-commerce", "Fashion"],
    url: "https://casashop.in/",
    image: "/casa_logo.png",
  },
  {
    title: "Zecurity",
    kind: "On-demand app",
    description: "Uber for bodyguards: on-demand personal security from your phone.",
    categories: ["mobile"],
    tags: ["Marketplace", "Mobile"],
    image: "/zec.png",
  },
  {
    title: "6am Mart",
    kind: "Delivery marketplace",
    description: "One multi-vendor platform for food, groceries, pharmacy and parcel delivery.",
    categories: ["web"],
    tags: ["Marketplace", "Delivery"],
    image: "/6am.png",
  },
  {
    title: "InnerMech",
    kind: "Client portal",
    description: "Project tracking and document handover for a mechanical engineering firm.",
    categories: ["web"],
    tags: ["B2B", "TypeScript"],
    url: "https://clientinermech.vercel.app/",
    image: "/inermech.png",
  },
  {
    title: "GlobeOx",
    kind: "Analytics dashboard",
    description: "Custom dashboards and real-time charts over a client's operational data.",
    categories: ["web"],
    tags: ["Data viz", "React"],
    url: "https://globeox-navinsir.vercel.app/",
  },
  {
    title: "Smooth Tradings",
    kind: "Trading platform",
    description: "Account system with social sign-in and secure user management.",
    categories: ["web"],
    tags: ["Auth", "Next.js"],
    url: "https://www.smoothtradings.com/",
  },
  {
    title: "SharePoint Migration",
    kind: "Enterprise IT",
    description: "Moved a company's on-premises file server to SharePoint Online.",
    categories: ["web"],
    tags: ["Cloud", "Migration"],
  },
  {
    title: "Shopify builds",
    kind: "E-commerce",
    description: "Custom Shopify stores with SEO, marketing tools and third-party integrations.",
    categories: ["web"],
    tags: ["Shopify", "SEO"],
  },
  {
    title: "Walk The Plank",
    kind: "VR experience",
    description: "Walk a plank on the 200th floor of a skyscraper.",
    categories: ["immersive"],
    tags: ["VR"],
    video: "/videos/walkThePlank.mp4",
  },
  {
    title: "Tower Crane Sim",
    kind: "VR training",
    description: "Industrial crane-operator training in a safe virtual site.",
    categories: ["immersive"],
    tags: ["VR", "Training"],
    video: "/videos/craneSimulator.mp4",
  },
  {
    title: "Roller Coaster",
    kind: "VR experience",
    description: "A full coaster ride from your living room.",
    categories: ["immersive"],
    tags: ["VR"],
    video: "/videos/roller.mp4",
  },
  {
    title: "Suraj Jamani",
    kind: "Personal brand",
    description: "Positioning, content plan and storytelling for a founder's LinkedIn and Instagram.",
    categories: ["brand"],
    tags: ["Branding", "Strategy"],
    url: "/suraj-branding.pdf",
    image: "/suraj.png",
  },
];

const filters: { id: "all" | Category; label: string }[] = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI" },
  { id: "web", label: "Web" },
  { id: "mobile", label: "Mobile" },
  { id: "immersive", label: "VR" },
  { id: "brand", label: "Brand" },
];

const allProjects = [...featured, ...projects];

const isPdf = (url?: string) => url?.endsWith(".pdf");

// Plays only while on screen, so a page of VR clips doesn't decode all at once.
const InViewVideo = ({ src, title }: { src: string; title: string }) => {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) video.play().catch(() => {});
        else video.pause();
      },
      { threshold: 0.4 },
    );
    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <video
      ref={ref}
      src={src}
      muted
      loop
      playsInline
      preload="metadata"
      aria-label={`${title} preview`}
      className="h-full w-full object-cover"
    />
  );
};

const initials = (title: string) =>
  title
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

const gridPanel =
  "flex h-full w-full items-center justify-center bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]";

// Logos sit on a white tile inside a dark panel; projects without one get outlined initials, never a stock photo.
const Media = ({ project, large = false }: { project: Project; large?: boolean }) => {
  if (project.video) return <InViewVideo src={project.video} title={project.title} />;

  if (project.image) {
    return (
      <div className={cn(gridPanel, "p-8")}>
        <div className="flex h-full max-h-40 w-full max-w-72 items-center justify-center border-2 border-black bg-white p-4 shadow-[6px_6px_0_0_#F59E0B] transition-transform duration-300 group-hover:-translate-y-1 md:max-h-56 md:max-w-md">
          <img
            src={project.image}
            alt={`${project.title} logo`}
            loading="lazy"
            className="max-h-full max-w-full object-contain"
          />
        </div>
      </div>
    );
  }

  return (
    <div className={gridPanel} aria-hidden="true">
      <span
        className={cn(
          "font-black uppercase leading-none tracking-tight text-transparent transition-colors [-webkit-text-stroke:2px_rgba(255,255,255,0.35)] group-hover:[-webkit-text-stroke:2px_#F59E0B]",
          large ? "text-[9rem] md:text-[12rem]" : "text-8xl",
        )}
      >
        {initials(project.title)}
      </span>
    </div>
  );
};

const ProjectLink = ({ project }: { project: Project }) => {
  if (!project.url) return null;
  const Icon = isPdf(project.url) ? FileText : ArrowUpRight;
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1.5 text-sm font-bold uppercase tracking-wider text-vision-gold after:absolute after:inset-0 hover:underline"
    >
      {isPdf(project.url) ? "Read case study" : "Visit live"} <Icon className="h-4 w-4" aria-hidden="true" />
    </a>
  );
};

const Tags = ({ tags }: { tags: string[] }) => (
  <ul className="flex flex-wrap gap-2">
    {tags.map((tag) => (
      <li key={tag} className="border border-white/15 px-2 py-0.5 text-xs font-semibold text-white/55">
        {tag}
      </li>
    ))}
  </ul>
);

const FeaturedCard = ({ project, index }: { project: Project; index: number }) => (
  <article className="group relative grid border-2 border-white/15 transition-all hover:-translate-x-1 hover:-translate-y-1 hover:border-white hover:shadow-[8px_8px_0_0_#F59E0B] md:grid-cols-2">
    <div className={cn("aspect-[16/10] overflow-hidden border-b-2 border-white/15 md:aspect-auto md:min-h-[360px] md:border-b-0", index % 2 ? "md:order-2 md:border-l-2" : "md:border-r-2")}>
      <Media project={project} large />
    </div>
    <div className="flex flex-col justify-center gap-5 p-8 md:p-12">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-vision-gold">{project.kind}</p>
      <h3 className="text-4xl font-black uppercase leading-none md:text-5xl">{project.title}</h3>
      <p className="text-lg leading-relaxed text-white/65">{project.description}</p>
      <Tags tags={project.tags} />
      {project.url && (
        <div className="pt-2">
          <ProjectLink project={project} />
        </div>
      )}
    </div>
  </article>
);

const ProjectCard = ({ project }: { project: Project }) => (
  <article className="group relative flex flex-col border-2 border-white/15 bg-white/[0.02] transition-all hover:-translate-x-1 hover:-translate-y-1 hover:border-white hover:shadow-[6px_6px_0_0_#F59E0B]">
    <div className="aspect-[16/10] overflow-hidden border-b-2 border-white/15">
      <Media project={project} />
    </div>
    <div className="flex flex-1 flex-col gap-4 p-6">
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/40">{project.kind}</p>
      <h3 className="text-2xl font-black uppercase leading-none">{project.title}</h3>
      <p className="flex-1 leading-relaxed text-white/65">{project.description}</p>
      <Tags tags={project.tags} />
      {project.url && (
        <div className="pt-1">
          <ProjectLink project={project} />
        </div>
      )}
    </div>
  </article>
);

const Portfolio = () => {
  const { trackButtonClick } = useAnalyticsEvents();
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all");

  const visible = filter === "all" ? projects : allProjects.filter((p) => p.categories.includes(filter));

  return (
    <>
      <SEOBreadcrumbs title="Work" />
      <div className="flex min-h-screen flex-col bg-black text-white">
        <Navbar />

        <main className="flex-1">
          {/* Hero */}
          <section className="border-b border-white/10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px]">
            <div className="container pb-20 pt-32 md:pb-24 md:pt-40">
              <p className="mb-6 inline-flex w-fit items-center gap-2 border-2 border-white/20 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                <span className="h-2 w-2 bg-vision-gold" aria-hidden="true" />
                Our work
              </p>
              <h1 className="max-w-5xl text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                Built. Shipped. <span className="text-vision-gold">Live.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                AI products, platforms and apps we've taken from idea to launch for startups and growing businesses.
              </p>
            </div>
          </section>

          {/* Featured */}
          <section className="py-24 md:py-32">
            <div className="container">
              <div className="mb-14 max-w-2xl">
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-vision-gold">Featured</p>
                <h2 className="text-4xl font-black uppercase leading-none md:text-6xl">AI in production</h2>
              </div>
              <div className="flex flex-col gap-8">
                {featured.map((project, i) => (
                  <FeaturedCard key={project.title} project={project} index={i} />
                ))}
              </div>
            </div>
          </section>

          {/* All work */}
          <section id="all-work" className="scroll-mt-20 border-t border-white/10 bg-white/[0.02] py-24 md:py-32">
            <div className="container">
              <div className="mb-10 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
                <div className="max-w-2xl">
                  <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-vision-gold">All work</p>
                  <h2 className="text-4xl font-black uppercase leading-none md:text-6xl">More projects</h2>
                </div>
                <div role="tablist" aria-label="Filter projects" className="flex flex-wrap gap-2">
                  {filters.map((f) => (
                    <button
                      key={f.id}
                      type="button"
                      role="tab"
                      aria-selected={filter === f.id}
                      onClick={() => setFilter(f.id)}
                      className={cn(
                        "border-2 px-4 py-2 text-sm font-bold uppercase tracking-wider transition-colors",
                        filter === f.id
                          ? "border-vision-gold bg-vision-gold text-black"
                          : "border-white/20 text-white/70 hover:border-white hover:text-white",
                      )}
                    >
                      {f.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {visible.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="container py-24 md:py-32">
            <div className="border-2 border-black bg-vision-gold px-6 py-16 text-center text-black shadow-[10px_10px_0_0_#fff] md:py-20">
              <h2 className="mx-auto max-w-3xl text-4xl font-black uppercase leading-none md:text-6xl">
                Your project next?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg font-medium text-black/75">
                Tell us what's slowing your team down. We'll show you what AI can take off their plate.
              </p>
              <a
                href={BOOK_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackButtonClick("Book a call", "Portfolio CTA")}
                className="mt-10 inline-flex items-center gap-2 border-2 border-black bg-black px-8 py-4 font-black uppercase tracking-wider text-white transition-transform hover:-translate-y-0.5"
              >
                Book a free call <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Portfolio;
