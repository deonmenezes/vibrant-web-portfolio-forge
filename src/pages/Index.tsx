import { Link } from "react-router-dom";
import { m as motion, useScroll, AnimatePresence, useInView, useTransform, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Calendar, Code, Palette, BarChart3, Play, ChevronRight, MousePointer2, Cpu, Smartphone, Video, Globe, Boxes, ArrowRight, ArrowUpRight, Zap, Star } from "lucide-react";
import { SEOBreadcrumbs } from "@/components/SEOBreadcrumbs";
import { useAnalyticsEvents } from "@/hooks/use-analytics";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import React, { useRef, useEffect, useState, Suspense } from "react";
import { useBooking } from "@/contexts/BookingContext";

// Lazy load heavy components
const SplineScene = React.lazy(() => import("@/components/ui/splite").then(m => ({ default: m.SplineScene })));

// renders children (and loads their code) only once scrolled near the viewport
function NearView({ children, placeholder, className }: { children: React.ReactNode; placeholder?: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) { setShow(true); return; }
    const io = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) { setShow(true); io.disconnect(); }
    }, { rootMargin: "600px" });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return <div ref={ref} className={className}>{show ? children : placeholder}</div>;
}

// Infinite scrolling row for services
const InfiniteScrollRow = ({ services, direction }: { services: any[]; direction: "left" | "right" }) => {
  return (
    <div className="overflow-visible">
      <motion.div
        animate={{
          x: direction === "right" ? ["0%", "-50%"] : ["-50%", "0%"]
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear"
        }}
        className="flex gap-6 py-4"
      >
        {/* Duplicate services array for seamless loop */}
        {[...services, ...services, ...services].map((service, index) => (
          <div key={`${service.title}-${index}`} className="min-w-[320px] flex-shrink-0">
            <NeoServiceCard service={service} index={index} />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// Neobrutalist color palette
const colors = {
  gold: "#D4AF37",
  electric: "#00FF87",
  coral: "#FF6B6B",
  violet: "#A855F7",
  cyan: "#00D4FF",
  lime: "#BFFF00",
};

// --- NEOBRUTALIST COMPONENTS ---

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

// Neobrutalist scroll progress bar
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-2 bg-vision-gold z-50 origin-left"
      style={{ scaleX }}
    />
  );
};

// Floating scroll indicator - neobrutalist style
const ScrollIndicator = ({ show }: { show: boolean }) => (
  <AnimatePresence>
    {show && (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative group"
        >
          <div className="absolute inset-0 translate-x-1 translate-y-1 bg-vision-gold" />
          <div className="relative bg-black border-2 border-white px-6 py-3 flex items-center gap-3">
            <MousePointer2 className="w-5 h-5 text-vision-gold" />
            <span className="text-white font-bold uppercase tracking-wider text-sm">Scroll Down</span>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
);

// Neobrutalist animated counter
const AnimatedCounter = ({ end, duration = 2, suffix = "", prefix = "" }: any) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);
  const isInView = useInView(counterRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!isInView) return;

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [end, duration, isInView]);

  return (
    <span ref={counterRef}>
      {prefix}{count}{suffix}
    </span>
  );
};

// Neobrutalist Stat Block
const StatBlock = ({ value, label, color, index }: { value: string; label: string; color: string; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 80, rotate: -8 }}
      animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6, type: "spring" }}
      whileHover={{ 
        rotate: isHovered ? [0, -2, 2, -2, 0] : 3, 
        scale: 1.08, 
        y: -8,
        transition: { duration: 0.5 }
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer"
    >
      <motion.div
        className="absolute inset-0 transition-all duration-300"
        animate={{
          x: isHovered ? 5 : 3,
          y: isHovered ? 5 : 3,
        }}
        style={{ backgroundColor: color }}
      />
      <div className="relative bg-black border-4 border-white p-6 md:p-8 text-center overflow-hidden">
        {/* Animated background sparkle */}
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-vision-gold/20 to-transparent"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
          />
        )}
        
        <motion.div 
          className="text-4xl md:text-6xl font-black text-vision-gold relative z-10"
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {value}
        </motion.div>
        <div className="text-white font-bold uppercase tracking-wider text-sm mt-2 relative z-10">{label}</div>
        
        {/* Animated corner accent */}
        <motion.div
          className="absolute top-2 right-2 w-3 h-3 bg-vision-gold"
          animate={{
            scale: isHovered ? [1, 1.5, 1] : 1,
            rotate: isHovered ? 45 : 0,
          }}
          transition={{ duration: 0.4 }}
        />
      </div>
    </motion.div>
  );
};

// Neobrutalist Service Card
const NeoServiceCard = ({ service, index }: { service: any; index: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-100px" });
  const [isHovered, setIsHovered] = useState(false);

  const rotations = [-2, 1.5, -1, 2, -1.5, 1, -0.5, 2.5, -2, 1];
  const rotation = rotations[index % rotations.length];

  return (
    <Link to={service.link}>
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 100, rotate: rotation * 2 }}
        animate={isInView ? { opacity: 1, y: 0, rotate: rotation } : {}}
        transition={{
          duration: 0.7,
          delay: index * 0.08,
          type: "spring",
          stiffness: 100,
          damping: 15
        }}
        whileHover={{
          rotate: 0,
          scale: 1.05,
          y: -12,
          transition: { duration: 0.3, type: "spring", stiffness: 300 }
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative group cursor-pointer"
      >
        {/* Shadow layer - animated on hover */}
        <motion.div
          className="absolute inset-0 transition-all duration-300"
          animate={{
            x: isHovered ? 6 : 3,
            y: isHovered ? 6 : 3,
          }}
          style={{ backgroundColor: service.accentColor }}
        />

        {/* Main card */}
        <div className="relative bg-black border-4 border-white overflow-hidden">
          {/* Image */}
          <div className="relative h-48 overflow-hidden">
            <motion.img
              loading="lazy"
              decoding="async"
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
              animate={{
                scale: isHovered ? 1.15 : 1,
              }}
              transition={{ duration: 0.6 }}
            />
            <motion.div 
              className="absolute inset-0 bg-black"
              animate={{
                opacity: isHovered ? 0.3 : 0.5
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Icon badge - bounces on hover */}
            <motion.div
              className="absolute top-4 left-4 w-12 h-12 flex items-center justify-center border-2 border-black"
              style={{ backgroundColor: service.accentColor }}
              animate={{
                rotate: isHovered ? [0, -10, 10, -10, 0] : 0,
                scale: isHovered ? 1.1 : 1,
              }}
              transition={{ duration: 0.5 }}
            >
              {React.cloneElement(service.icon, { className: "w-6 h-6 text-black" })}
            </motion.div>

            {/* Hover arrow with trail effect */}
            <motion.div
              className="absolute bottom-4 right-4 w-12 h-12 bg-vision-gold flex items-center justify-center border-2 border-black"
              initial={{ scale: 0, rotate: -180 }}
              animate={{
                scale: isHovered ? 1 : 0,
                rotate: isHovered ? 0 : -180
              }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <motion.div
                animate={{ x: isHovered ? [0, 3, 0] : 0 }}
                transition={{ duration: 0.6, repeat: isHovered ? Infinity : 0 }}
              >
                <ArrowUpRight className="w-6 h-6 text-black" />
              </motion.div>
            </motion.div>
          </div>

          {/* Content */}
          <motion.div 
            className="p-5 bg-white"
            animate={{
              backgroundColor: isHovered ? "#FFFBF0" : "#FFFFFF"
            }}
          >
            <motion.h3 
              className="text-xl font-black uppercase tracking-tight text-black mb-1"
              animate={{
                x: isHovered ? 4 : 0,
              }}
              transition={{ duration: 0.3 }}
            >
              {service.title}
            </motion.h3>
            <p className="text-gray-700 font-medium text-sm line-clamp-2">
              {service.description}
            </p>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  );
};

// Neobrutalist Project Card with CRAZY animations
const NeoProjectCard = ({ project, index }: { project: any; index: number }) => {
  const cardRef = useRef(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  const projectColors = [colors.electric, colors.coral, colors.violet, colors.cyan];

  return (
    <a href={project.url} target="_blank" rel="noopener noreferrer">
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 150, rotateX: 45, scale: 0.5 }}
        animate={isInView ? { 
          opacity: 1, 
          y: 0, 
          rotateX: 0,
          scale: 1,
        } : {}}
        transition={{ 
          duration: 0.9, 
          type: "spring", 
          stiffness: 70,
          delay: index * 0.2 
        }}
        whileHover={{ 
          scale: 1.08, 
          y: -20,
          rotateY: isHovered ? [0, 5, -5, 0] : 0,
          rotateZ: isHovered ? [0, -2, 2, 0] : 0,
          transition: { duration: 0.7, type: "spring", stiffness: 200 }
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="relative group cursor-pointer perspective-1000"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Glowing shadow - animated */}
        <motion.div
          className="absolute inset-0 blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"
          animate={{
            x: isHovered ? 8 : 4,
            y: isHovered ? 8 : 4,
          }}
          style={{ backgroundColor: projectColors[index % projectColors.length] }}
        />

        {/* Shadow layer - animated */}
        <motion.div
          className="absolute inset-0 transition-all duration-300"
          animate={{
            x: isHovered ? 8 : 4,
            y: isHovered ? 8 : 4,
            scale: isHovered ? 1.02 : 1,
          }}
          style={{ backgroundColor: projectColors[index % projectColors.length] }}
        />

        {/* Main card */}
        <div className="relative bg-black border-4 border-white overflow-hidden">
          <div className="relative h-56 overflow-hidden">
            <motion.img
              loading="lazy"
              decoding="async"
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              animate={{
                scale: isHovered ? 1.25 : 1,
                rotate: isHovered ? 3 : 0,
              }}
              transition={{ duration: 0.8 }}
            />
            
            {/* Animated overlay with gradient */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"
              animate={{
                opacity: isHovered ? 0.6 : 1,
              }}
            />

            {/* Animated scan line effect */}
            {isHovered && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-b from-transparent via-vision-gold/30 to-transparent"
                initial={{ y: "-100%" }}
                animate={{ y: "200%" }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              />
            )}

            {/* Tags - crazy entrance animation */}
            <div className="absolute top-4 left-4 flex flex-wrap gap-2">
              {project.tags.slice(0, 2).map((tag: string, i: number) => (
                <motion.span
                  key={i}
                  className="px-3 py-1 text-xs font-black uppercase bg-vision-gold text-black border-2 border-black"
                  initial={{ x: -100, opacity: 0, rotate: -180 }}
                  animate={{
                    x: isInView ? 0 : -100,
                    opacity: isInView ? 1 : 0,
                    rotate: isInView ? 0 : -180,
                    scale: isHovered ? [1, 1.15, 1] : 1,
                  }}
                  transition={{ 
                    delay: 0.3 + i * 0.15, 
                    duration: 0.6,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>

            {/* Crazy hover arrow with particles */}
            <motion.div
              className="absolute bottom-4 right-4 w-16 h-16 bg-white flex items-center justify-center border-3 border-black relative overflow-hidden"
              initial={{ scale: 0, rotate: -360 }}
              animate={{
                scale: isHovered ? 1 : 0,
                rotate: isHovered ? 0 : -360,
              }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 15
              }}
            >
              {/* Spinning background */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-vision-gold to-transparent"
                animate={{ rotate: isHovered ? 360 : 0 }}
                transition={{ duration: 2, repeat: isHovered ? Infinity : 0, ease: "linear" }}
              />
              
              {/* Pulsing effect */}
              {isHovered && (
                <motion.div
                  className="absolute inset-0 bg-vision-gold"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}

              <motion.div
                animate={{ 
                  x: isHovered ? [0, 3, 0] : 0,
                  y: isHovered ? [0, -3, 0] : 0,
                }}
                transition={{ duration: 0.5, repeat: isHovered ? Infinity : 0 }}
                className="relative z-10"
              >
                <ArrowUpRight className="w-8 h-8 text-black" />
              </motion.div>
            </motion.div>

            {/* Corner accents that animate */}
            <motion.div
              className="absolute top-0 left-0 w-0 h-0 border-l-[20px] border-t-[20px] border-l-transparent border-t-vision-gold"
              animate={{
                borderTopWidth: isHovered ? "30px" : "20px",
                borderLeftWidth: isHovered ? "30px" : "20px",
              }}
              transition={{ duration: 0.3 }}
            />
            <motion.div
              className="absolute bottom-0 right-0 w-0 h-0 border-r-[20px] border-b-[20px] border-r-transparent border-b-vision-gold"
              animate={{
                borderBottomWidth: isHovered ? "30px" : "20px",
                borderRightWidth: isHovered ? "30px" : "20px",
              }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Content with morphing background */}
          <motion.div 
            className="p-6 bg-white relative overflow-hidden"
            animate={{
              backgroundColor: isHovered ? "#FFFBF0" : "#FFFFFF"
            }}
          >
            {/* Animated background pattern */}
            {isHovered && (
              <>
                <motion.div
                  className="absolute top-0 left-0 w-full h-1 bg-vision-gold"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-vision-gold/5 to-transparent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </>
            )}

            <motion.h3 
              className="text-2xl font-black uppercase tracking-tight text-black mb-2 relative z-10"
              animate={{ 
                x: isHovered ? 8 : 0,
                textShadow: isHovered ? "3px 3px 0px rgba(212, 175, 55, 0.3)" : "0px 0px 0px rgba(0,0,0,0)"
              }}
              transition={{ duration: 0.3 }}
            >
              {project.title}
            </motion.h3>
            <p className="text-gray-700 font-medium line-clamp-2 relative z-10">
              {project.description}
            </p>
            
            {/* Animated CTA */}
            <motion.div
              className="flex items-center gap-2 mt-4 text-vision-gold font-bold uppercase relative z-10"
              animate={{ x: isHovered ? 15 : 0 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
            >
              <span>View Project</span>
              <motion.div
                animate={{ 
                  x: isHovered ? [0, 8, 0] : 0,
                  rotate: isHovered ? [0, 15, 0] : 0,
                }}
                transition={{ 
                  duration: 0.7, 
                  repeat: isHovered ? Infinity : 0,
                  repeatType: "reverse"
                }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
              
              {/* Trail effect */}
              {isHovered && (
                <>
                  <motion.div
                    className="absolute right-0 w-2 h-2 bg-vision-gold rounded-full"
                    animate={{ 
                      x: [-20, 20],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0]
                    }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute right-0 w-2 h-2 bg-vision-gold rounded-full"
                    animate={{ 
                      x: [-20, 20],
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0]
                    }}
                    transition={{ duration: 1, repeat: Infinity, delay: 0.3 }}
                  />
                </>
              )}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </a>
  );
};

// Client Companies
const clientCompanies = [
  { name: "Callbook.ai", url: "https://www.callbook.ai/", domain: "callbook.ai" },
  { name: "RentAHuman", url: "https://rentahuman.ai/", domain: "rentahuman.ai" },
  { name: "Tenkara", url: "https://app.tenkara.ai/", domain: "tenkara.ai" },
  { name: "SecureNetMe", url: "https://securenetme.com/", domain: "securenetme.com" },
  { name: "Naytive", url: "https://naytive.com/", domain: "naytive.com" },
  { name: "Arqio", url: "https://www.arqio.ai/", domain: "arqio.ai" },
];

// Testimonials Data
const testimonialsData = [
  {
    quote: "Partnering with Virelity has been a game-changer! Their strategy and creativity helped me shape my brand in a way that feels authentic and powerful.",
    name: "Suraj Jamani",
    designation: "Producer",
    src: "/suraj.jpg",
  },
  {
    quote: "Their team delivered beyond expectations. From concept to launch, the communication and execution were flawless—our KPIs lifted within weeks.",
    name: "Viren Ahuja",
    designation: "Founder",
    src: "/placeholder.svg",
  },
  {
    quote: "We needed a reliable partner to scale quickly. The solution shipped on time, looked amazing, and performed even better—highly recommended.",
    name: "Francis",
    designation: "Operations Lead",
    src: "/francis.jpg",
  },
  {
    quote: "The attention to detail and user experience thinking really stood out. Our customers love the new interface and conversion is up.",
    name: "Amar Patni",
    designation: "Entrepreneur",
    src: "/placeholder.svg",
  },
  {
    quote: "From day one the process was smooth and collaborative. The final delivery exceeded expectations and helped us move faster.",
    name: "Divya",
    designation: "Marketing Head",
    src: "/placeholder.svg",
  },
];

// --- MAIN PAGE COMPONENT ---

const Index = () => {
  const { trackButtonClick } = useAnalyticsEvents();
  const { openBookingDialog } = useBooking();
  const [showScrollIndicator, setShowScrollIndicator] = useState(true);
  const [heroVideoOn, setHeroVideoOn] = useState(false);
  const containerRef = useRef(null);

  // fetch the hero video only after the page has finished loading
  useEffect(() => {
    let t: ReturnType<typeof setTimeout>;
    const start = () => { t = setTimeout(() => setHeroVideoOn(true), 2500); };
    if (document.readyState === "complete") start();
    else window.addEventListener("load", start, { once: true });
    return () => { clearTimeout(t); window.removeEventListener("load", start); };
  }, []);

  // Refs for sections
  const heroRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  const heroInView = useInView(heroRef, { amount: 0.5 });

  // Parallax transforms
  const { scrollYProgress } = useScroll();
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -100]);
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.95]);

  // Hide scroll indicator after scrolling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollIndicator(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track engagement time
  useEffect(() => {
    const startTime = Date.now();
    return () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000);
      if (window.gtag) {
        window.gtag('event', 'engagement_time', {
          event_category: 'engagement',
          event_label: 'homepage',
          value: timeSpent
        });
      }
    };
  }, []);

  // Services data
  const services = [
    {
      title: "AI Solutions",
      description: "Intelligent automation & AI agents that transform your business",
      icon: <Cpu className="w-6 h-6" />,
      link: "/services/ai-solutions",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      accentColor: colors.violet,
    },
    {
      title: "Web Development",
      description: "High-performance websites & web applications",
      icon: <Code className="w-6 h-6" />,
      link: "/services/web-development",
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80&w=800",
      accentColor: colors.electric,
    },
    {
      title: "Mobile Apps",
      description: "Native & cross-platform mobile applications",
      icon: <Smartphone className="w-6 h-6" />,
      link: "/services/mobile-apps",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800",
      accentColor: colors.coral,
    },
    {
      title: "UI/UX Design",
      description: "Human-centered design that converts",
      icon: <Palette className="w-6 h-6" />,
      link: "/services/ui-ux-design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800",
      accentColor: colors.cyan,
    },
    {
      title: "VR/AR Development",
      description: "Immersive virtual & augmented reality",
      icon: <Boxes className="w-6 h-6" />,
      link: "/services/vr-ar-development",
      image: "https://images.unsplash.com/photo-1617802690992-15d93263d3a9?auto=format&fit=crop&q=80&w=800",
      accentColor: colors.violet,
    },
    {
      title: "Video Production",
      description: "Professional video editing & production",
      icon: <Video className="w-6 h-6" />,
      link: "/services/video-editing",
      image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800",
      accentColor: colors.coral,
    },
    {
      title: "Digital Marketing",
      description: "Growth strategies that deliver ROI",
      icon: <BarChart3 className="w-6 h-6" />,
      link: "/services/digital-marketing",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
      accentColor: colors.electric,
    },
    {
      title: "3D Development",
      description: "Stunning 3D experiences & modeling",
      icon: <Globe className="w-6 h-6" />,
      link: "/services/3d-development",
      image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?auto=format&fit=crop&q=80&w=800",
      accentColor: colors.cyan,
    },
  ];

  const featuredProjects = [
    {
      title: "Quizitt",
      description: "AI-powered quiz platform generating personalized quizzes with adaptive learning paths.",
      image: "/quizitt.jpg",
      tags: ["AI", "EdTech", "React"],
      url: "https://quizitt.com/",
    },
    {
      title: "CatchPhish",
      description: "Cybersecurity tool helping users identify phishing websites through AI analysis.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1000",
      tags: ["Security", "ML"],
      url: "https://catchphish.vercel.app/HomePage",
    },
    {
      title: "Casa Shop",
      description: "E-commerce fashion platform with Tinder-like swipe experience for discovering clothes.",
      image: "/casa_logo.png",
      tags: ["E-commerce", "Fashion"],
      url: "https://casashop.in/",
    },
  ];

  const stats = [
    { value: "50+", label: "Projects", color: colors.electric },
    { value: "98%", label: "Satisfaction", color: colors.coral },
    { value: "200%", label: "Avg. ROI", color: colors.violet },
    { value: "24/7", label: "Support", color: colors.cyan },
  ];

  const scrollToServices = () => {
    servicesRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <ScrollProgress />
      <SEOBreadcrumbs title="Home" />

      <div ref={containerRef} className="min-h-screen flex flex-col bg-black overflow-hidden">
        <Navbar />

        {/* HERO SECTION - NEOBRUTALIST */}
        <motion.section
          ref={heroRef}
          style={{ y: heroY, scale: heroScale }}
          className="relative min-h-screen flex items-center overflow-hidden"
        >
          {/* Video Background */}
          <div className="absolute inset-0 z-0">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="none"
              className="absolute inset-0 w-full h-full object-cover opacity-60"
              poster="/homepage-poster.jpg"
              src={heroVideoOn ? "/videos/homepage.mp4" : undefined}
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>

          {/* Floating geometric shapes - neobrutalist */}
          <motion.div
            animate={{ y: [0, -30, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-32 right-20 w-32 h-32 border-4 border-vision-gold hidden lg:block"
          />
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -15, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute bottom-40 left-16 w-24 h-24 bg-cyan-400 hidden lg:block"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-1/2 right-1/4 w-16 h-16 bg-coral-500 hidden lg:block"
            style={{ backgroundColor: colors.coral }}
          />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 right-32 w-20 h-20 border-4 border-electric hidden lg:block"
            style={{ borderColor: colors.electric }}
          />

          {/* Hero Content */}
          <div className="container relative z-10 pt-24 pb-32">
            <div className="max-w-5xl">
              {/* Badge - Neobrutalist */}
              <motion.div
                initial={{ opacity: 0, y: 30, rotate: -3 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="inline-block mb-8"
              >
                <div className="relative group">
                  <div className="absolute inset-0 translate-x-2 translate-y-2 bg-vision-gold transition-transform group-hover:translate-x-3 group-hover:translate-y-3" />
                  <div className="relative bg-black border-4 border-white px-6 py-3 flex items-center gap-2">
                    {/* <Zap className="w-5 h-5 text-vision-gold" /> */}
                    <span className="font-black uppercase tracking-widest text-white text-sm">AI-Powered Agency</span>
                  </div>
                </div>
              </motion.div>

              {/* Main Headline - Neobrutalist */}
              <motion.div
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-none mb-6">
                  <span className="text-white block">We Build</span>
                  <span className="text-vision-gold block">Digital</span>
                  <span className="text-white block">Experiences</span>
                </h1>
              </motion.div>

              {/* Value Props */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-wrap gap-4 mb-8"
              >
                {[
                  { text: "+200% Revenue", color: colors.electric },
                  { text: "80% Automation", color: colors.coral },
                  { text: "AI-Powered", color: colors.violet },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    whileHover={{ scale: 1.05, rotate: [-1, 1, 0] }}
                    className="relative group"
                  >
                    <div
                      className="absolute inset-0 translate-x-1 translate-y-1"
                      style={{ backgroundColor: item.color }}
                    />
                    <div className="relative bg-black border-2 border-white px-4 py-2">
                      <span className="font-bold text-white text-sm uppercase">{item.text}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Description */}
              <p
                className="text-xl md:text-2xl text-white/80 font-medium max-w-2xl mb-10"
              >
                We build intelligent AI agents, stunning websites, and mobile apps that transform businesses.
              </p>

              {/* CTA Buttons - Neobrutalist */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 translate-x-2 translate-y-2 bg-white transition-transform group-hover:translate-x-3 group-hover:translate-y-3" />
                  <Button
                    onClick={() => {
                      openBookingDialog();
                      trackButtonClick('Book Free Call', 'Hero');
                    }}
                    className="relative bg-vision-gold hover:bg-vision-gold text-black font-black uppercase tracking-wider px-8 py-7 text-lg border-4 border-black rounded-none"
                  >
                    <Calendar className="w-6 h-6 mr-3" />
                    Book Free Call
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 translate-x-2 translate-y-2 bg-vision-gold transition-transform group-hover:translate-x-3 group-hover:translate-y-3" />
                  <Button
                    onClick={scrollToServices}
                    className="relative bg-black hover:bg-black text-white font-black uppercase tracking-wider px-8 py-7 text-lg border-4 border-white rounded-none"
                  >
                    <Play className="w-6 h-6 mr-3" />
                    See Our Work
                  </Button>
                </motion.div>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex flex-wrap items-center gap-8 mt-12"
              >
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {["/suraj.jpg", "/francis.jpg"].map((src, i) => (
                      <div key={i} className="relative">
                        <div className="absolute inset-0 translate-x-0.5 translate-y-0.5 bg-vision-gold" />
                        <img
                          src={src}
                          alt="Client"
                          className="relative w-12 h-12 border-2 border-black object-cover bg-white"
                        />
                      </div>
                    ))}
                  </div>
                  <span className="text-white font-bold">50+ Clients</span>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-vision-gold text-vision-gold" />
                    ))}
                  </div>
                  <span className="text-white font-bold">5.0 Rating</span>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <ScrollIndicator show={showScrollIndicator && heroInView} />
        </motion.section>

        {/* MARQUEE SECTION */}
        <section className="py-4 bg-vision-gold border-y-4 border-black">
          <Marquee speed={20}>
            <span className="inline-flex items-center gap-8 px-8 font-black text-2xl md:text-3xl text-black uppercase">
              <span>AI Solutions</span>
              <span className="w-4 h-4 bg-black rounded-full" />
              <span>Web Development</span>
              <span className="w-4 h-4 bg-black rounded-full" />
              <span>Mobile Apps</span>
              <span className="w-4 h-4 bg-black rounded-full" />
              <span>VR/AR</span>
              <span className="w-4 h-4 bg-black rounded-full" />
              <span>Digital Marketing</span>
              <span className="w-4 h-4 bg-black rounded-full" />
            </span>
          </Marquee>
        </section>

        {/* TRUSTED BY SECTION */}
        <section className="py-16 bg-black overflow-hidden">
          <div className="container">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center font-black uppercase tracking-widest text-white/50 text-xs sm:text-sm mb-10"
            >
              Trusted by teams at
            </motion.p>
            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
              {clientCompanies.map((company, i) => (
                <motion.a
                  key={company.name}
                  href={company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 translate-x-1 translate-y-1 bg-vision-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="relative flex items-center gap-3 bg-black border-2 border-white/20 group-hover:border-white px-4 py-3 transition-colors">
                    <img
                      src={`https://www.google.com/s2/favicons?domain=${company.domain}&sz=128`}
                      alt={company.name}
                      loading="lazy"
                      className="w-7 h-7 bg-white/10 p-0.5"
                    />
                    <span className="text-white font-black text-base md:text-lg whitespace-nowrap">
                      {company.name}
                    </span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
        </section>

        {/* service section */}
        <section ref={servicesRef} className="py-32 bg-black border-y-4 border-white overflow-hidden">
          <div className="container mb-16 pt-8">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-block mb-6">
                <div className="relative">
                  <div className="absolute inset-0 translate-x-2 translate-y-2 bg-vision-gold" />
                  <div className="relative bg-black border-4 border-white px-6 py-3">
                    <span className="font-black uppercase tracking-widest text-white text-xs sm:text-sm">Our Services</span>
                  </div>
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase mb-4">
                What We <span className="text-vision-gold">Build</span>
              </h2>
              <p className="text-base sm:text-xl text-white/70 font-medium max-w-2xl mx-auto px-4">
                End-to-end digital solutions that drive real business results
              </p>
            </motion.div>
          </div>

          {/* Desktop: Infinite Scroll | Mobile: Grid */}
          <div className="hidden lg:block space-y-8 py-8 mb-12">
            {/* First Row - Scroll Right */}
            <div className="py-4">
              <InfiniteScrollRow services={services.slice(0, 4)} direction="right" />
            </div>

            {/* Second Row - Scroll Left */}
            <div className="py-4">
              <InfiniteScrollRow services={services.slice(4, 8)} direction="left" />
            </div>
          </div>

          {/* Mobile & Tablet: Responsive Grid */}
          <div className="lg:hidden container mb-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 px-4">
              {services.map((service, index) => (
                <NeoServiceCard key={service.title} service={service} index={index} />
              ))}
            </div>
          </div>

          {/* View All Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12 px-4"
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="inline-block relative group"
            >
              <div className="absolute inset-0 translate-x-2 translate-y-2 bg-white transition-transform group-hover:translate-x-3 group-hover:translate-y-3" />
              <Button
                asChild
                className="relative bg-vision-gold hover:bg-vision-gold text-black font-black uppercase tracking-wider px-6 sm:px-10 py-5 sm:py-7 text-base sm:text-lg border-4 border-white rounded-none"
              >
                <Link to="/services">
                  View All Services
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </section>
        {/* STATS SECTION */}
        <section className="py-20 bg-black">
          <div className="container">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <StatBlock key={stat.label} {...stat} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES SECTION - INFINITE LOOP */}
       

        {/* SECOND MARQUEE - Reverse */}
        <section className="py-4 bg-black border-y-4 border-white">
          <Marquee reverse speed={25}>
            <span className="inline-flex items-center gap-8 px-8 font-black text-2xl md:text-3xl text-white uppercase">
              <span>Innovation</span>
              <span className="w-4 h-4 bg-vision-gold rounded-full" />
              <span>Creativity</span>
              <span className="w-4 h-4 bg-vision-gold rounded-full" />
              <span>Results</span>
              <span className="w-4 h-4 bg-vision-gold rounded-full" />
              <span>Excellence</span>
              <span className="w-4 h-4 bg-vision-gold rounded-full" />
            </span>
          </Marquee>
        </section>

        {/* AI SHOWCASE SECTION */}
        <section className="py-24 bg-black relative overflow-hidden">
          {/* Background shapes */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 right-20 w-40 h-40 border-4 border-vision-gold/30"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 left-20 w-32 h-32 bg-cyan-400/20"
          />

          <div className="container relative z-10">
            <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 80 }}
                className="text-center lg:text-left max-w-xl"
              >
                <div className="inline-block mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 translate-x-2 translate-y-2 bg-violet-500" />
                    <div className="relative bg-black border-4 border-white px-5 py-2">
                      <span className="font-black uppercase tracking-widest text-white text-sm">Powered by AI</span>
                    </div>
                  </div>
                </div>

                <h2 className="text-4xl lg:text-6xl font-black text-white uppercase mb-6 leading-none">
                  AI That Works
                  <span className="text-vision-gold block">For You</span>
                </h2>

                <p className="text-xl text-white/70 font-medium mb-8">
                  Our AI solutions understand your business, adapt in real-time, and deliver meaningful results. From chatbots to full automation workflows.
                </p>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-block relative group"
                >
                  <div className="absolute inset-0 translate-x-2 translate-y-2 bg-white transition-transform group-hover:translate-x-3 group-hover:translate-y-3" />
                  <Button
                    asChild
                    className="relative bg-vision-gold hover:bg-vision-gold text-black font-black uppercase tracking-wider px-8 py-6 text-lg border-4 border-black rounded-none"
                  >
                    <Link to="/services/ai-solutions">
                      Explore AI Solutions
                      <ChevronRight className="w-6 h-6 ml-2" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>

              {/* 3D Robot */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-full max-w-md lg:max-w-lg"
              >
                <div className="relative">
                  <div className="absolute inset-0 translate-x-4 translate-y-4 bg-vision-gold" />
                  <div className="relative border-4 border-white bg-black">
                    <NearView className="w-80 h-80 lg:w-[400px] lg:h-[400px]" placeholder={
                      <div className="w-80 h-80 lg:w-[400px] lg:h-[400px] bg-black flex items-center justify-center">
                        <div className="text-center">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-16 h-16 border-4 border-vision-gold border-t-transparent mx-auto mb-4"
                          />
                          <span className="text-white/50 font-bold uppercase">Loading 3D...</span>
                        </div>
                      </div>
                    }>
                      <Suspense fallback={<div className="w-80 h-80 lg:w-[400px] lg:h-[400px] bg-black" />}>
                        <SplineScene
                          className="w-80 h-80 lg:w-[400px] lg:h-[400px]"
                          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                        />
                      </Suspense>
                    </NearView>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* TESTIMONIALS SECTION */}
        <section className="py-24 bg-black border-y-4 border-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-block mb-6">
                <div className="relative">
                  <div className="absolute inset-0 translate-x-2 translate-y-2 bg-coral-500" style={{ backgroundColor: colors.coral }} />
                  <div className="relative bg-black border-4 border-white px-6 py-3">
                    <span className="font-black uppercase tracking-widest text-white">Testimonials</span>
                  </div>
                </div>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase">
                Client <span className="text-vision-gold">Love</span>
              </h2>
            </motion.div>

            <AnimatedTestimonials testimonials={testimonialsData} autoplay={true} />
          </div>
        </section>

        {/* FEATURED PROJECTS SECTION */}
        <section className="py-24 bg-black">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row md:items-end justify-between mb-16"
            >
              <div>
                <div className="inline-block mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 translate-x-2 translate-y-2 bg-electric" style={{ backgroundColor: colors.electric }} />
                    <div className="relative bg-black border-4 border-white px-6 py-3">
                      <span className="font-black uppercase tracking-widest text-white">Portfolio</span>
                    </div>
                  </div>
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white uppercase">
                  Featured <span className="text-vision-gold">Work</span>
                </h2>
              </div>

              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="relative group mt-6 md:mt-0"
              >
                <div className="absolute inset-0 translate-x-1 translate-y-1 bg-vision-gold transition-transform group-hover:translate-x-2 group-hover:translate-y-2" />
                <Button
                  asChild
                  className="relative bg-black hover:bg-black text-white font-black uppercase tracking-wider px-6 py-4 border-2 border-white rounded-none"
                >
                  <Link to="/projects">
                    View All
                    <ChevronRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project, index) => (
                <NeoProjectCard key={project.title} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* FINAL MARQUEE */}
        <section className="py-4 bg-vision-gold border-y-4 border-black">
          <Marquee speed={15}>
            <span className="inline-flex items-center gap-8 px-8 font-black text-3xl md:text-4xl text-black uppercase">
              <span>Let's Build</span>
              <span className="w-4 h-4 bg-black rounded-full" />
              <span>Something</span>
              <span className="w-4 h-4 bg-black rounded-full" />
              <span>Amazing</span>
              <span className="w-4 h-4 bg-black rounded-full" />
              <span>Together</span>
              <span className="w-4 h-4 bg-black rounded-full" />
            </span>
          </Marquee>
        </section>

        {/* FINAL CTA SECTION */}
        <section className="py-24 bg-black relative overflow-hidden">
          {/* Rotating shapes */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 w-64 h-64 border-8 border-vision-gold/20"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-20 -left-20 w-48 h-48 bg-vision-gold/10"
          />

          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase mb-6 leading-none">
                Ready To
                <span className="text-vision-gold block">Start?</span>
              </h2>

              <p className="text-xl md:text-2xl text-white/70 font-medium mb-10 max-w-2xl mx-auto">
                Book a free 15-minute strategy call and discover how we can transform your business.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 translate-x-3 translate-y-3 bg-white transition-transform group-hover:translate-x-4 group-hover:translate-y-4" />
                  <Button
                    onClick={() => {
                      openBookingDialog();
                      trackButtonClick('Book Call CTA', 'Homepage Footer');
                    }}
                    className="relative bg-vision-gold hover:bg-vision-gold text-black font-black uppercase tracking-wider px-12 py-8 text-xl border-4 border-black rounded-none"
                  >
                    <Calendar className="w-6 h-6 mr-3" />
                    Book Free Call
                  </Button>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative group"
                >
                  <div className="absolute inset-0 translate-x-3 translate-y-3 bg-vision-gold transition-transform group-hover:translate-x-4 group-hover:translate-y-4" />
                  <Button
                    asChild
                    className="relative bg-black hover:bg-black text-white font-black uppercase tracking-wider px-12 py-8 text-xl border-4 border-white rounded-none"
                  >
                    <Link to="/contact">
                      Contact Us
                      <ArrowRight className="w-6 h-6 ml-3" />
                    </Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Index;