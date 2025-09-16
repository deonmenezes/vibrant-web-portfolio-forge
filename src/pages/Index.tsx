import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Calendar, Code, Palette, Zap, BarChart3, ArrowDown } from "lucide-react";
import { HoverImageEffect } from "@/components/custom/HoverImageEffect";
import { ProjectCard } from "@/components/ProjectCard";
import { SEOBreadcrumbs } from "@/components/SEOBreadcrumbs";
import { useAnalyticsEvents } from "@/hooks/use-analytics";
import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { HeroSlider } from "@/components/HeroSlider";
import React, { useRef, useEffect, useState } from "react";

// --- HELPER COMPONENTS (Defined ONCE, outside Index) ---

// 1. Animated Counter Component
const AnimatedCounter = ({ end, duration = 2, suffix = "", className = "" }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTime;
          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
            setCount(Math.floor(progress * end));
            if (progress < 1) {
              requestAnimationFrame(step);
            }
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(counterRef.current);
      }
    };
  }, [end, duration]);

  return (
    <span ref={counterRef} className={className}>
      {count}
      {suffix}
    </span>
  );
};

// 2. Service Card Component
function ServiceCard({ title, description, icon, index, bgImage, bgVideo, link }) {
  return (
    <Link
      to={link}
      className="block h-full"
      tabIndex={0}
      style={{ textDecoration: 'none' }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        className="bg-card border border-border rounded-lg p-6 border-vision-gold/30 shadow-lg transition-all duration-300 flex flex-col h-full overflow-hidden group relative cursor-pointer focus:ring-2 focus:ring-vision-gold"
        style={{ minHeight: "320px" }}
      >
        {/* Background image/video with overlay */}
        <div className="absolute inset-0 w-full h-full">
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-background/80 to-background z-10 opacity-60 transition-opacity duration-500" />
          {bgVideo ? (
            bgVideo.endsWith('.gif') ? (
              <img
                src={bgVideo}
                alt={title}
                className="absolute inset-0 w-full h-full object-cover opacity-60 z-0 group-hover:opacity-80 group-hover:scale-110 group-hover:brightness-125 transition-all duration-500"
              />
            ) : (
              <video
                className="absolute inset-0 w-full h-full object-cover opacity-60 z-0 group-hover:opacity-80 group-hover:scale-110 group-hover:brightness-125 transition-all duration-500"
                src={bgVideo}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
              />
            )
          ) : (
            <img
              src={bgImage}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:opacity-70 group-hover:scale-110 group-hover:brightness-125 transition-all duration-500"
            />
          )}
        </div>

        {/* Content */}
        <div className="relative z-20 h-full flex flex-col justify-between">
          {/* Icon at top-left */}
          <div className="flex justify-start p-6">
            <div className="bg-gradient-to-br from-amber-600 to-amber-800 p-4 rounded-xl w-fit shadow-lg transition-all duration-300 group-hover:shadow-xl group-hover:scale-105">
              {React.cloneElement(icon, { 
                className: "h-6 w-6 text-white" 
              })}
            </div>
          </div>
          
          {/* Title at bottom center */}
          <div className="p-6 pt-0 flex justify-center">
            <h3 className="text-xl font-semibold text-white text-center">{title}</h3>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}

// 3. Testimonials Component (UPDATED WITH ANIMATED TESTIMONIALS)
const testimonialsData = [
    {
      quote: "Partnering with Virelity has been a game-changer! Their strategy and creativity helped me shape my brand in a way that feels authentic and powerful.",
      name: "Suraj Jamani",
      designation: "Producer",
      src: "/suraj.png",
    },
    {
      quote: "I wanted to reimagine how people shop online, and CASA made that vision real. The swipe-to-shop experience feels fresh, fun, and effortless—turning fashion discovery into something truly exciting!",
      name: "Steve Vora",
      designation: "Founder",
      src: "/steve_logo.png",
    },
];

// --- MAIN PAGE COMPONENT ---

const Index = () => {
  const { trackButtonClick } = useAnalyticsEvents();
  // Section refs for scroll animations
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const ctaRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.2]);

  // Monitor scroll to hide/show scroll indicator
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animated shared elements
  const sharedAnimationProps = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.8 }
  };

  // Section transition variants
  const sectionVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" }
    }
  };

  // Scroll to next section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: 'smooth' });
  };

  // Data for sections
  const services = [
    {
      title: "Web Development",
      description: "We build responsive, high-performance AI Agents and web applications tailored to your business needs.",
      icon: <Code className="h-6 w-6" />,
      link: "/services/web-development",
      bgImage: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=1000",
      bgVideo: "/videos/homepage.mp4",
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications designed for seamless user experiences.",
      icon: <Zap className="h-6 w-6" />,
      link: "/services/mobile-apps",
      bgImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1000",
      bgVideo: "/videos/mobile.gif",
    },
    {
      title: "UI/UX Design",
      description: "Human-centered design solutions that create engaging and intuitive digital experiences.",
      icon: <Palette className="h-6 w-6" />,
      link: "/services/ui-ux-design",
      bgImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1000",
      bgVideo: "/videos/UI.gif",
    },
    {
      title: "AI Solutions",
      description: "Implement cutting-edge AI and machine learning solutions to solve complex business problems.",
      icon: <BarChart3 className="h-6 w-6" />,
      link: "/services/ai-solutions",
      bgImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000",
      bgVideo: "/videos/Robot.gif",
    },
  ];

  const featuredProjects = [
    {
      title: "Quizitt",
      description: "AI-powered quiz platform generating personalized quizzes on any topic. Helps users learn efficiently with adaptive question paths.",
      image: "/quizitt.png",
      tags: ["AI", "EdTech", "React"],
      url: "https://quizitt.com",
    },
    {
      title: "CatchPhish",
      description: "Cybersecurity tool that helps users identify phishing websites through AI analysis. Provides educational resources on spotting online scams.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1000",
      tags: ["Security", "React", "ML"],
      url: "https://catchphish.vercel.app/HomePage",
    },
    {
      title: "Clerk Authentication",
      description: "Implementation of Clerk's modern authentication system with seamless social logins, secure user management, and customizable UI components.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
      tags: ["Auth", "React", "NextJS"],
      url: "https://clerk-antim.vercel.app/",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.8,
        ease: [0.17, 0.67, 0.83, 0.67]
      }}
    >
      <SEOBreadcrumbs title="Home" />
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -100, opacity: 0 }}
        transition={{
          duration: 1,
          ease: [0.17, 0.67, 0.83, 0.67],
        }}
      >
        <div className="min-h-screen flex flex-col overflow-hidden">
          <Navbar />

          {/* Hero Section */}
          <section ref={heroRef} className="relative overflow-hidden bg-background">
            <HeroSlider />
            
            {!isScrolled && (
              <motion.div
                onClick={() => scrollToSection(servicesRef)}
                className="absolute bottom-24 left-1/2 transform -translate-x-1/2 cursor-pointer hidden md:flex flex-col items-center bg-background/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-md z-30"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span className="text-sm font-medium mb-1">Scroll Down.</span>
                <ArrowDown className="h-5 w-5" />
              </motion.div>
            )}

            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-muted/30 to-transparent pointer-events-none" />

            <motion.div
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0.5 h-24 bg-gradient-to-b from-transparent via-vision-gold/30 to-vision-gold/50"
              initial={{ height: 0 }}
              animate={{ height: 70 }}
              transition={{ duration: 1, delay: 1 }}
            />
          </section>

          {/* Services Section */}
          <motion.section
            ref={servicesRef}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="py-24 bg-muted/30 relative overflow-hidden"
          >
            <div className="container">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <motion.h2
                  {...sharedAnimationProps}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-3xl md:text-4xl font-bold mb-4"
                >
                  AI-Powered Solutions We Provide
                </motion.h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {services.map((service, index) => (
                  <ServiceCard
                    key={service.title}
                    {...service}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </motion.section>
          
          {/* Testimonials Section - NOW USING ANIMATED TESTIMONIALS */}
          <section className="py-20 bg-vision-dark">
            <div className="container">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Client Success Stories</h2>
              <AnimatedTestimonials testimonials={testimonialsData} autoplay={true} />
            </div>
          </section>

          {/* Featured Projects Section */}
          <motion.section
            ref={projectsRef}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="py-24 relative overflow-hidden bg-muted/30"
          >
             <div className="container relative z-10">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
                    {/* ... section title ... */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {featuredProjects.map((project, index) => (
                        <ProjectCard
                            key={project.title}
                            {...project}
                            index={index}
                        />
                    ))}
                </div>
            </div>
          </motion.section>

          {/* Call to Action Section */}
          <motion.section
            ref={ctaRef}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="py-20 bg-gradient-bg text-white relative overflow-hidden"
          >
            <div className="container py-10 relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                    {/* ... section content ... */}
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.9 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Button asChild className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg">
                            <Link 
                              to="/contact" 
                              onClick={() => trackButtonClick('Get Started CTA', 'Homepage Footer')}
                            >
                              Get Started
                            </Link>
                        </Button>
                    </motion.div>
                </div>
            </div>
          </motion.section>

          <Footer />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Index;