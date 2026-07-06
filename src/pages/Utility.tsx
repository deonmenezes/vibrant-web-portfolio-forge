import { useState, useRef } from "react";
import { m as motion, useScroll, useSpring, useInView } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ExternalLink, Sparkles, Wrench, ArrowUpRight, Zap, MessageSquare } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";

// Neobrutalist colors
const colors = {
  gold: "#D4AF37",
  electric: "#00FF87",
  coral: "#FF6B6B",
  violet: "#A855F7",
  cyan: "#00D4FF",
  lime: "#BFFF00",
};

const utilityProjects = [
  {
    title: "AI Watermark Remover",
    description: "Advanced web application using computer vision and AI to intelligently remove watermarks from images while preserving quality and protecting faces.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    tags: ["AI", "Computer Vision", "Web"],
    category: "utility",
    url: "https://the-auto-watermark.netlify.app/",
    color: colors.electric,
  },
  {
    title: "BackDrop",
    description: "Web-based tool for creating visually appealing text effects by placing text behind images, enhancing website aesthetics with seamless HTML, CSS, and JavaScript integration.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1000",
    tags: ["Web Design", "CSS", "JavaScript"],
    category: "utility",
    url: "http://text-behind-image.ap-south-1.elasticbeanstalk.com/",
    color: colors.violet,
  },
];

// Marquee component
const UtilityMarquee = ({ reverse = false }: { reverse?: boolean }) => (
  <div className="overflow-hidden whitespace-nowrap border-y-4 border-white bg-black py-4">
    <motion.div
      animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="inline-flex"
    >
      {[...Array(4)].map((_, idx) => (
        <span key={idx} className="inline-flex items-center gap-8 px-8 font-black text-2xl md:text-3xl text-white uppercase">
          <span>Free Tools</span>
          <span className="w-4 h-4 bg-vision-gold rotate-45" />
          <span>AI Powered</span>
          <span className="w-4 h-4 rotate-45" style={{ backgroundColor: colors.electric }} />
          <span>Try Now</span>
          <span className="w-4 h-4 rotate-45" style={{ backgroundColor: colors.coral }} />
        </span>
      ))}
    </motion.div>
  </div>
);

// Neobrutalist Tool Card
const NeoToolCard = ({ title, description, image, tags, url, color, index }: {
  title: string;
  description: string;
  image: string;
  tags: string[];
  url: string;
  color: string;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const rotations = [-2, 1.5, -1, 2];
  const rotation = rotations[index % rotations.length];

  return (
    <motion.a
      ref={ref}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 60, rotate: rotation }}
      animate={isInView ? { opacity: 1, y: 0, rotate: rotation } : {}}
      whileHover={{ rotate: 0, scale: 1.02 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group block cursor-pointer"
    >
      <motion.div
        className="absolute inset-0"
        animate={{
          x: isHovered ? 12 : 6,
          y: isHovered ? 12 : 6,
        }}
        style={{ backgroundColor: color }}
      />
      <div className="relative bg-black border-4 border-white overflow-hidden">
        {/* Image */}
        <div className="relative h-56 overflow-hidden border-b-4 border-white">
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.4 }}
          />
          <div className="absolute inset-0 bg-black/40" />

          {/* Scan line effect on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent"
            initial={{ y: "-100%" }}
            animate={{ y: isHovered ? "200%" : "-100%" }}
            transition={{ duration: 0.8 }}
          />

          {/* Tags */}
          <div className="absolute top-4 left-4 flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={tag}
                className="px-3 py-1 bg-black border-2 border-white text-white text-xs font-bold uppercase"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Arrow indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.5 }}
            className="absolute bottom-4 right-4 w-12 h-12 border-4 border-white flex items-center justify-center"
            style={{ backgroundColor: color }}
          >
            <ArrowUpRight className="w-6 h-6 text-black" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl font-black text-white uppercase mb-3">{title}</h3>
          <p className="text-white/70 font-medium leading-relaxed">{description}</p>

          {/* Bottom accent bar */}
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: isHovered ? "100%" : 0 }}
            className="absolute bottom-0 left-0 h-1"
            style={{ backgroundColor: color }}
          />
        </div>
      </div>
    </motion.a>
  );
};

// Neobrutalist Filter Button
const FilterButton = ({ active, onClick, icon: Icon, label, color }: {
  active: boolean;
  onClick: () => void;
  icon: any;
  label: string;
  color: string;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={onClick}
      className="relative"
    >
      <motion.div
        className="absolute inset-0"
        animate={{
          x: isHovered || active ? 4 : 2,
          y: isHovered || active ? 4 : 2,
        }}
        style={{ backgroundColor: active ? color : "#fff" }}
      />
      <div
        className={`relative flex items-center gap-2 px-6 py-3 border-4 font-black uppercase tracking-wider transition-colors ${
          active
            ? "bg-vision-gold text-black border-black"
            : "bg-black text-white border-white hover:bg-white/10"
        }`}
      >
        <Icon className="w-5 h-5" />
        {label}
      </div>
    </motion.button>
  );
};

const Utility = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const categories = [
    { id: "all", label: "All Tools", icon: Wrench, color: colors.gold },
    { id: "utility", label: "Utility Tools", icon: Sparkles, color: colors.electric },
  ];

  const filteredProjects = selectedCategory === "all"
    ? utilityProjects
    : utilityProjects.filter(project => project.category === selectedCategory);

  return (
    <PageTransition>
      <div ref={containerRef} className="min-h-screen flex flex-col bg-black">
        {/* Progress Bar */}
        <motion.div
          style={{ scaleX }}
          className="fixed top-0 left-0 right-0 h-2 bg-vision-gold origin-left z-[60]"
        />

        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-20 relative bg-black">
          {/* Animated grid background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(${colors.gold}40 1px, transparent 1px), linear-gradient(90deg, ${colors.gold}40 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }} />
          </div>

          {/* Floating shapes */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-40 right-20 w-32 h-32 border-4 border-vision-gold hidden md:block"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 left-20 w-24 h-24 hidden md:block"
            style={{ backgroundColor: colors.electric }}
          />

          <div className="container relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: -2 }}
                transition={{ duration: 0.6 }}
                className="inline-block relative mb-8"
              >
                <div className="absolute inset-0 translate-x-2 translate-y-2" style={{ backgroundColor: colors.electric }} />
                <div className="relative bg-black border-4 border-white px-6 py-3 flex items-center gap-3">
                  <Wrench className="w-6 h-6 text-vision-gold" />
                  <span className="text-white font-black uppercase tracking-wider">Utility Tools</span>
                </div>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 uppercase"
              >
                <span className="text-white">Powerful</span>
                <br />
                <span className="text-vision-gold relative inline-block">
                  Utility Tools
                  <motion.div
                    className="absolute -bottom-2 left-0 h-4 bg-vision-gold/30 w-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  />
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-medium"
              >
                Discover our collection of free utility tools designed to solve common problems and enhance your workflow.
                <br />
                <span className="text-vision-gold font-bold">From AI-powered image processing to creative text effects.</span>
              </motion.p>
            </div>
          </div>
        </section>

        {/* Marquee */}
        <UtilityMarquee />

        {/* Filter Section */}
        <section className="py-12 bg-black">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              {categories.map((category) => (
                <FilterButton
                  key={category.id}
                  active={selectedCategory === category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  icon={category.icon}
                  label={category.label}
                  color={category.color}
                />
              ))}
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 md:py-32 bg-black">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
              {filteredProjects.map((project, index) => (
                <NeoToolCard key={project.title} {...project} index={index} />
              ))}
            </div>

            {filteredProjects.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <div className="relative inline-block">
                  <div className="absolute inset-0 translate-x-2 translate-y-2" style={{ backgroundColor: colors.coral }} />
                  <div className="relative bg-black border-4 border-white px-8 py-6">
                    <p className="text-white font-bold text-xl uppercase">No projects found in this category.</p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-vision-gold border-y-4 border-black relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(black 2px, transparent 2px), linear-gradient(90deg, black 2px, transparent 2px)`,
              backgroundSize: '40px 40px'
            }} />
          </div>

          {/* Floating shapes */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 right-10 w-40 h-40 border-4 border-black opacity-20"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-10 left-10 w-32 h-32 bg-black opacity-10"
          />

          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 3 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
                viewport={{ once: true }}
                className="inline-block relative mb-8"
              >
                <div className="absolute inset-0 translate-x-2 translate-y-2 bg-black" />
                <div className="relative bg-white border-4 border-black px-6 py-3 flex items-center gap-3">
                  {/* <Zap className="w-6 h-6 text-black" /> */}
                  <span className="text-black font-black uppercase tracking-wider">Need a Custom Tool?</span>
                </div>
              </motion.div>

              <h2 className="text-5xl md:text-7xl font-black text-black uppercase mb-6">
                Custom Utility<br />Tools
              </h2>
              <p className="text-xl md:text-2xl text-black/70 mb-12 max-w-2xl mx-auto font-medium">
                We can build custom utility tools tailored to your specific needs. Let's discuss your requirements and create something amazing together.
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-block group"
              >
                <div className="absolute inset-0 translate-x-3 translate-y-3 bg-black transition-all duration-200 group-hover:translate-x-4 group-hover:translate-y-4" />
                <Button
                  className="relative bg-white hover:bg-white text-black font-black uppercase tracking-wider px-10 py-7 text-lg border-4 border-black rounded-none"
                  onClick={() => window.open("https://wa.me/918104796542?text=Hello! I'd like to discuss creating a custom utility tool.", '_blank')}
                >
                  <MessageSquare className="w-6 h-6 mr-3" />
                  Get Custom Tool
                  <ArrowUpRight className="w-5 h-5 ml-2" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Utility;
