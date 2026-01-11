import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/PageTransition";
import { useState, useRef } from "react";
import { cn } from "@/lib/utils";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import { ArrowRight, ArrowUpRight, Sparkles, Zap, Globe, Smartphone, Palette, Box } from "lucide-react";
import { Link } from "react-router-dom";

// Neobrutalist color palette extending gold/black
const colors = {
  gold: "#D4AF37",
  electric: "#00FF87",
  coral: "#FF6B6B",
  violet: "#A855F7",
  cyan: "#00D4FF",
  lime: "#BFFF00",
};

// Marquee component for infinite scrolling text
const Marquee = ({ children, reverse = false, speed = 30 }: { children: React.ReactNode; reverse?: boolean; speed?: number }) => (
  <div className="overflow-hidden whitespace-nowrap">
    <motion.div
      animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
      transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      className="inline-flex"
    >
      {children}
      {children}
    </motion.div>
  </div>
);

// Neobrutalist Project Card with heavy animations
const NeoBrutalCard = ({ project, index }: { project: any; index: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  // Rotation based on index for visual variety
  const rotations = [-2, 1, -1, 2, -1.5, 1.5, -0.5, 0.5];
  const rotation = rotations[index % rotations.length];

  // Color accents based on category
  const categoryColors: Record<string, string> = {
    web: colors.electric,
    mobile: colors.coral,
    branding: colors.violet,
    "ar-vr": colors.cyan,
  };
  const accentColor = categoryColors[project.category] || colors.gold;

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 100, rotate: rotation * 2 }}
      animate={isInView ? { opacity: 1, y: 0, rotate: rotation } : {}}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{
        rotate: 0,
        scale: 1.02,
        y: -10,
        transition: { duration: 0.3 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer"
    >
      {/* Shadow layer - neobrutalist offset shadow */}
      <div
        className="absolute inset-0 rounded-none translate-x-3 translate-y-3 transition-all duration-300 group-hover:translate-x-4 group-hover:translate-y-4"
        style={{ backgroundColor: accentColor }}
      />

      {/* Main card */}
      <div className="relative bg-black border-4 border-white overflow-hidden">
        {/* Image container */}
        <div className="relative h-64 overflow-hidden">
          {project.video ? (
            <video
              src={project.video}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              autoPlay
              loop
              muted
              playsInline
            />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          )}

          {/* Overlay on hover */}
          <motion.div
            className="absolute inset-0 bg-black/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />

          {/* Category badge - neobrutalist style */}
          <div
            className="absolute top-4 left-4 px-4 py-2 font-black text-sm uppercase tracking-wider border-2 border-black"
            style={{ backgroundColor: accentColor, color: "black" }}
          >
            {project.category === "ar-vr" ? "AR/VR" : project.category}
          </div>

          {/* Hover arrow */}
          <motion.div
            className="absolute bottom-4 right-4 w-14 h-14 bg-vision-gold flex items-center justify-center border-2 border-black"
            initial={{ scale: 0, rotate: -180 }}
            animate={{
              scale: isHovered ? 1 : 0,
              rotate: isHovered ? 0 : -180
            }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <ArrowUpRight className="w-7 h-7 text-black" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 bg-white text-black">
          <h3 className="text-2xl font-black uppercase tracking-tight mb-2 leading-tight">
            {project.title}
          </h3>
          <p className="text-gray-700 font-medium leading-relaxed line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {project.tags?.slice(0, 3).map((tag: string, i: number) => (
              <span
                key={i}
                className="px-3 py-1 text-xs font-bold uppercase bg-black text-white"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Video Project Card for AR/VR with neobrutalist style
const NeoVideoCard = ({ project, index }: { project: any; index: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, rotate: index % 2 === 0 ? -5 : 5 }}
      animate={isInView ? { opacity: 1, x: 0, rotate: 0 } : {}}
      transition={{ duration: 0.8, type: "spring", stiffness: 80 }}
      whileHover={{ scale: 1.02 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer"
    >
      {/* Offset shadow */}
      <div className="absolute inset-0 translate-x-4 translate-y-4 bg-cyan-400 transition-all duration-300 group-hover:translate-x-5 group-hover:translate-y-5" />

      {/* Main card */}
      <div className="relative border-4 border-white overflow-hidden aspect-video">
        <video
          src={project.video}
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        {/* Icon badge */}
        <div className={`absolute top-4 left-4 w-12 h-12 flex items-center justify-center border-2 border-black ${project.iconBg}`}>
          {project.icon}
        </div>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="text-3xl font-black text-white uppercase tracking-tight">
            {project.title}
          </h3>
          <p className="text-white/80 font-medium mt-2">
            {project.description}
          </p>

          {/* CTA */}
          <motion.div
            className="flex items-center gap-2 mt-4 text-vision-gold font-bold"
            animate={{ x: isHovered ? 10 : 0 }}
          >
            <span>EXPERIENCE NOW</span>
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

// Filter button with neobrutalist style
const FilterButton = ({ active, onClick, children, color }: any) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.05, rotate: active ? 0 : [-1, 1, 0] }}
    whileTap={{ scale: 0.95 }}
    className={cn(
      "relative px-6 py-3 font-black uppercase tracking-wider text-sm transition-all duration-300 border-4",
      active
        ? "bg-vision-gold text-black border-black translate-x-1 translate-y-1"
        : "bg-white text-black border-black hover:bg-gray-100"
    )}
    style={{
      boxShadow: active ? "none" : `4px 4px 0 ${color || colors.gold}`
    }}
  >
    {children}
  </motion.button>
);

// Animated stats counter
const StatBlock = ({ value, label, color }: { value: string; label: string; color: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotate: -5 }}
      animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
      whileHover={{ rotate: 3, scale: 1.05 }}
      className="relative group"
    >
      <div
        className="absolute inset-0 translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"
        style={{ backgroundColor: color }}
      />
      <div className="relative bg-black border-4 border-white p-8 text-center">
        <div className="text-5xl md:text-6xl font-black text-vision-gold">{value}</div>
        <div className="text-white font-bold uppercase tracking-wider mt-2">{label}</div>
      </div>
    </motion.div>
  );
};

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const projects = [
    // --- Web Projects ---
    {
      title: "Quizitt",
      description: "AI-powered quiz platform generating personalized quizzes on any topic with adaptive learning paths.",
      image: "/quizitt.png",
      tags: ["AI", "EdTech", "React"],
      category: "web",
      url: "https://quizitt.com",
    },
    {
      title: "Casa",
      description: "E-commerce fashion platform with Tinder-like swipe experience for discovering clothes you love.",
      image: "/casa_logo.png",
      tags: ["E-commerce", "Web", "Fashion"],
      category: "web",
      url: "https://casashop.in/",
    },
    {
      title: "PetroGo",
      description: "The smarter way to manage petrol pumps—no paperwork, no Excel. Complete automation.",
      image: "/petrol_logo.png",
      tags: ["Web", "React", "Automation"],
      category: "web",
      url: "#",
    },
    {
      title: "CatchPhish",
      description: "Cybersecurity tool helping users identify phishing websites through AI analysis.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1000",
      tags: ["Security", "React", "ML"],
      category: "web",
      url: "https://catchphish.vercel.app/HomePage",
    },
    {
      title: "Smooth Tradings",
      description: "Modern authentication system with seamless social logins and secure user management.",
      image: "https://www.smoothtradings.com/_next/image?url=%2FclientAntim_logo.png&w=1920&q=75",
      tags: ["Auth", "React", "NextJS"],
      category: "web",
      url: "https://www.smoothtradings.com/",
    },
    {
      title: "InnerMech",
      description: "Client portal for mechanical engineering firm with project tracking and document management.",
      image: "/inermech.png",
      tags: ["B2B", "React", "TypeScript"],
      category: "web",
      url: "https://clientinermech.vercel.app/",
    },
    {
      title: "Instagram Clone",
      description: "Full-featured social media platform replicating Instagram's core functionalities.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1000",
      tags: ["Social Media", "NextJS", "Tailwind"],
      category: "web",
      url: "https://instagram-internship.vercel.app/Login",
    },
    {
      title: "GlobeOx",
      description: "Interactive data visualization platform with customizable dashboards and real-time analytics.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000",
      tags: ["Data Viz", "Analytics", "React"],
      category: "web",
      url: "https://globeox-navinsir.vercel.app/",
    },
    {
      title: "Sharepoint Migration",
      description: "Enterprise data migration from on-premises to modern SharePoint Online environment.",
      image: "https://binhminhitc.com/images/File-Server-to-SharePoint-Migration-Using-Kernel-Migrator-for-SharePoint.png",
      tags: ["Enterprise", "Migration", "Cloud"],
      category: "web",
      url: "#",
    },
    {
      title: "Zecurity",
      description: "The 'Uber for Bodyguards' - on-demand personal security at your fingertips.",
      image: "/zec.png",
      tags: ["Security", "On-Demand", "Mobile"],
      category: "web",
      url: "#",
    },
    {
      title: "Shopify Projects",
      description: "Custom Shopify solutions with advanced SEO, marketing tools, and integrations.",
      image: "https://www.trooinbound.com/wp-content/uploads/2023/02/shopify_hero_img-1.png",
      tags: ["E-commerce", "Shopify", "Custom"],
      category: "web",
      url: "#",
    },
    {
      title: "6am Mart",
      description: "Multi-vendor delivery platform for food, grocery, pharmacy, and parcels.",
      image: "/6am.png",
      tags: ["Marketplace", "Delivery", "Multi-vendor"],
      category: "web",
      url: "#",
    },
    // --- Mobile Projects ---
    {
      title: "Quizitt Mobile",
      description: "Mobile version of Quizitt built with React Native for seamless quiz experience.",
      image: "/quizit.png",
      tags: ["Mobile", "React Native", "AI"],
      category: "mobile",
      url: "https://quizitt.com",
    },
    {
      title: "PetroGo Mobile",
      description: "Mobile app for petrol pump management with real-time tracking and analytics.",
      image: "/petrol_logo.png",
      tags: ["Mobile", "React Native"],
      category: "mobile",
      url: "#",
    },
    // --- Branding Project ---
    {
      title: "Suraj Jamani",
      description: "Personal brand development through creative strategy and impactful storytelling.",
      image: "/suraj.png",
      tags: ["Branding", "Personal Brand", "Strategy"],
      category: "branding",
      url: "/suraj-branding.pdf",
    },
    // --- AR/VR PROJECTS ---
    {
      title: "Walk The Plank",
      description: "Experience the thrill of walking the plank on a 200th Storey Building in VR!",
      video: "/videos/walkThePlank.mp4",
      iconBg: "bg-blue-500",
      icon: <Zap className="w-6 h-6 text-white" />,
      category: "ar-vr",
      tags: ["VR", "Experience", "Thrill"],
      url: "#",
    },
    {
      title: "Roller Coaster",
      description: "Ride a roller coaster in the comfort of your home with our VR simulation.",
      video: "/videos/roller.mp4",
      iconBg: "bg-yellow-400",
      icon: <Sparkles className="w-6 h-6 text-black" />,
      category: "ar-vr",
      tags: ["VR", "Simulation", "Entertainment"],
      url: "#",
    },
    {
      title: "Tower Crane Sim",
      description: "Industrial-level virtual simulation for crane piloting and training.",
      video: "/videos/craneSimulator.mp4",
      iconBg: "bg-red-500",
      icon: <Box className="w-6 h-6 text-white" />,
      category: "ar-vr",
      tags: ["VR", "Industrial", "Training"],
      url: "#",
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((project) => project.category === filter);

  const categories = [
    { id: "all", label: "All Work", icon: <Sparkles className="w-4 h-4" />, color: colors.gold },
    { id: "web", label: "Web", icon: <Globe className="w-4 h-4" />, color: colors.electric },
    { id: "mobile", label: "Mobile", icon: <Smartphone className="w-4 h-4" />, color: colors.coral },
    { id: "branding", label: "Branding", icon: <Palette className="w-4 h-4" />, color: colors.violet },
    { id: "ar-vr", label: "AR/VR", icon: <Box className="w-4 h-4" />, color: colors.cyan },
  ];

  return (
    <PageTransition>
      <div ref={containerRef} className="min-h-screen flex flex-col bg-black overflow-hidden">
        {/* Progress bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-2 bg-vision-gold z-50 origin-left"
          style={{ scaleX }}
        />

        <Navbar />

        {/* HERO SECTION - Neobrutalist */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 20px,
                white 20px,
                white 22px
              )`
            }} />
          </div>

          {/* Floating shapes */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-20 right-10 w-32 h-32 border-4 border-vision-gold"
          />
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 7, repeat: Infinity }}
            className="absolute bottom-20 left-10 w-24 h-24 bg-cyan-400"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute top-40 left-1/4 w-16 h-16 bg-coral-500 rounded-full"
            style={{ backgroundColor: colors.coral }}
          />

          <div className="container relative z-10">
            <div className="max-w-5xl mx-auto text-center">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block mb-8"
              >
                <div className="relative">
                  <div className="absolute inset-0 translate-x-2 translate-y-2 bg-vision-gold" />
                  <div className="relative bg-black border-4 border-white px-6 py-3">
                    <span className="font-black uppercase tracking-widest text-white">Our Work</span>
                  </div>
                </div>
              </motion.div>

              {/* Main title with staggered animation */}
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="text-6xl md:text-8xl lg:text-9xl font-black uppercase leading-none mb-6"
              >
                <span className="text-white block">PORT</span>
                <span className="text-vision-gold block">FOLIO</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xl md:text-2xl text-white/70 font-medium max-w-2xl mx-auto"
              >
                Digital experiences that push boundaries and break conventions.
              </motion.p>
            </div>
          </div>
        </section>

        {/* MARQUEE SECTION */}
        <section className="py-4 bg-vision-gold border-y-4 border-black overflow-hidden">
          <Marquee speed={25}>
            <span className="inline-flex items-center gap-8 px-8 font-black text-2xl text-black uppercase">
              <span>Web Development</span>
              <span className="w-3 h-3 bg-black rounded-full" />
              <span>Mobile Apps</span>
              <span className="w-3 h-3 bg-black rounded-full" />
              <span>AR/VR Experiences</span>
              <span className="w-3 h-3 bg-black rounded-full" />
              <span>Brand Identity</span>
              <span className="w-3 h-3 bg-black rounded-full" />
              <span>UI/UX Design</span>
              <span className="w-3 h-3 bg-black rounded-full" />
            </span>
          </Marquee>
        </section>

        {/* STATS SECTION */}
        <section className="py-20 bg-black">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <StatBlock value="50+" label="Projects" color={colors.electric} />
              <StatBlock value="98%" label="Satisfaction" color={colors.coral} />
              <StatBlock value="5+" label="Years" color={colors.violet} />
              <StatBlock value="24/7" label="Support" color={colors.cyan} />
            </div>
          </div>
        </section>

        {/* FILTER SECTION */}
        <section className="py-12 bg-white border-y-4 border-black">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap justify-center gap-4"
            >
              {categories.map((cat, index) => (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <FilterButton
                    active={filter === cat.id}
                    onClick={() => setFilter(cat.id)}
                    color={cat.color}
                  >
                    <span className="flex items-center gap-2">
                      {cat.icon}
                      {cat.label}
                    </span>
                  </FilterButton>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* PROJECTS GRID */}
        <section className="py-20 bg-black">
          <div className="container">
            {filter === "ar-vr" ? (
              // Special layout for AR/VR projects
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="space-y-8"
              >
                <div className="text-center mb-12">
                  <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-black text-white uppercase"
                  >
                    Immersive <span className="text-cyan-400">Experiences</span>
                  </motion.h2>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {filteredProjects.map((project, index) => (
                    project.video && (
                      <NeoVideoCard key={project.title} project={project} index={index} />
                    )
                  ))}
                </div>
              </motion.div>
            ) : filter === "branding" ? (
              // Special layout for branding
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="max-w-4xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 50, rotate: -2 }}
                    whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                    whileHover={{ rotate: 1 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 translate-x-4 translate-y-4 bg-violet-500 transition-transform group-hover:translate-x-6 group-hover:translate-y-6" />
                    <div className="relative bg-white border-4 border-black overflow-hidden">
                      <div className="grid md:grid-cols-2 gap-0">
                        <div className="h-64 md:h-auto">
                          <img
                            src="/suraj.png"
                            alt="Suraj Jamani"
                            className="w-full h-full object-contain bg-gray-100 p-8"
                          />
                        </div>
                        <div className="p-8 flex flex-col justify-center">
                          <span
                            className="inline-block px-4 py-2 text-xs font-black uppercase tracking-wider mb-4 w-fit"
                            style={{ backgroundColor: colors.violet, color: "white" }}
                          >
                            Case Study
                          </span>
                          <h3 className="text-3xl md:text-4xl font-black uppercase mb-4">
                            Suraj Jamani
                          </h3>
                          <p className="text-gray-700 font-medium mb-6">
                            Personal brand development through creative strategy, content planning, and impactful storytelling across LinkedIn and Instagram.
                          </p>
                          <a
                            href="/suraj-branding.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 font-black uppercase text-vision-gold hover:text-black transition-colors"
                          >
                            View Case Study
                            <ArrowRight className="w-5 h-5" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ) : (
              // Default grid layout
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {filteredProjects.map((project, index) => {
                  if (project.category === "ar-vr" && project.video) {
                    return <NeoVideoCard key={`${project.title}-${index}`} project={project} index={index} />;
                  }
                  if (project.category === "branding") {
                    return null;
                  }
                  return <NeoBrutalCard key={`${project.title}-${index}`} project={project} index={index} />;
                })}
              </motion.div>
            )}
          </div>
        </section>

        {/* SECOND MARQUEE - Reverse */}
        <section className="py-4 bg-white border-y-4 border-black overflow-hidden">
          <Marquee reverse speed={20}>
            <span className="inline-flex items-center gap-8 px-8 font-black text-2xl text-black uppercase">
              <span>Let's Build</span>
              <span className="w-3 h-3 bg-vision-gold rounded-full" />
              <span>Something</span>
              <span className="w-3 h-3 bg-vision-gold rounded-full" />
              <span>Amazing</span>
              <span className="w-3 h-3 bg-vision-gold rounded-full" />
              <span>Together</span>
              <span className="w-3 h-3 bg-vision-gold rounded-full" />
            </span>
          </Marquee>
        </section>

        {/* CTA SECTION - Neobrutalist */}
        <section className="py-24 bg-vision-gold relative overflow-hidden">
          {/* Background elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 w-64 h-64 border-8 border-black opacity-20"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-20 -left-20 w-48 h-48 bg-black opacity-10"
          />

          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-5xl md:text-7xl font-black text-black uppercase mb-6 leading-none">
                Got a Project?
                <br />
                <span className="text-white">Let's Talk.</span>
              </h2>
              <p className="text-xl text-black/70 font-medium mb-10 max-w-2xl mx-auto">
                Ready to create something extraordinary? We're here to turn your vision into reality.
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <div className="relative group">
                  <div className="absolute inset-0 translate-x-2 translate-y-2 bg-black transition-transform group-hover:translate-x-3 group-hover:translate-y-3" />
                  <Button
                    asChild
                    className="relative bg-white hover:bg-white text-black font-black uppercase tracking-wider px-12 py-8 text-xl border-4 border-black rounded-none"
                  >
                    <Link to="/contact">
                      Start a Project
                      <ArrowRight className="w-6 h-6 ml-3" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Portfolio;
