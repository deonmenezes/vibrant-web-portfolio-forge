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
function ServiceCard({ title, description, icon, index, bgImage, link }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-card border border-border rounded-xl p-6 hover:border-vision-gold/30 hover:shadow-lg transition-all duration-300 flex flex-col h-full overflow-hidden group relative"
      style={{ minHeight: "320px" }}
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-background/80 to-background z-10 group-hover:opacity-60 transition-opacity duration-500" />
        <img
          src={bgImage}
          alt={`${title} service background - Professional ${title.toLowerCase()} solutions by Virelity`}
          className="absolute inset-0 w-full h-full object-cover opacity-35 group-hover:opacity-70 group-hover:scale-110 group-hover:brightness-125 transition-all duration-500"
        />
      </div>
      {/* Content */}
      <div className="relative z-20">
        <div className="bg-vision-gold/10 backdrop-blur-sm p-3 rounded-lg w-fit mb-4 group-hover:bg-vision-gold/20 transition-all duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-muted-foreground flex-grow mb-4">{description}</p>
        <Link to={link} className="learn-more-btn" title={`Learn more about ${title} services - Virelity AI solutions`}>
          <span>Learn more</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </Link>
      </div>
    </motion.div>
  );
}

// 3. Testimonials Component (UPDATED WITH HOVER/GLOW EFFECT)
const testimonialsData = [
    {
      img: "/suraj.png",
      name: "Suraj Jamani",
      role: "Producer",
      text: "Partnering with Virelity has been a game-changer! Their strategy and creativity helped me shape my brand in a way that feels authentic and powerful.",
      rating: 5,
    },
    {
      img: "/steve_logo.png",
      name: "Steve Vora",
      role: "Founder",
      text: "I wanted to reimagine how people shop online, and CASA made that vision real. The swipe-to-shop experience feels fresh, fun, and effortless—turning fashion discovery into something truly exciting!",
      rating: 5,
    },
    
];

function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {testimonialsData.map((t) => (
        <motion.div
          key={t.name}
          className="bg-[#18181b] rounded-3xl shadow-lg p-8 flex flex-col items-center text-center border border-white/10 transition-all duration-300"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 25px rgba(251, 191, 36, 0.6)", // Golden glow matching the brand color
          }}
        >
          <img src={t.img} alt={`${t.name} - ${t.role} testimonial photo for Virelity AI services`} className="w-24 h-24 rounded-full mb-4 object-cover border-4 border-vision-gold" />
          <h3 className="text-xl font-bold mb-1 text-white">{t.name}</h3>
          <p className="text-gray-400 mb-4">{t.role}</p>
          <p className="text-gray-200 mb-6">"{t.text}"</p>
          <div className="flex justify-center mb-2">
            {[...Array(5)].map((_, starIdx) => (
              <span key={starIdx}>
                <svg
                  className={`w-7 h-7 ${
                    starIdx < t.rating
                      ? 'text-vision-gold'
                      : 'text-gray-600'
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                </svg>
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}


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
      icon: <Code className="h-8 w-8 text-vision-gold" />,
      link: "/services/web-development",
      bgImage: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications designed for seamless user experiences.",
      icon: <Zap className="h-8 w-8 text-vision-gold" />,
      link: "/services/mobile-apps",
      bgImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "UI/UX Design",
      description: "Human-centered design solutions that create engaging and intuitive digital experiences.",
      icon: <Palette className="h-8 w-8 text-vision-gold" />,
      link: "/services/ui-ux-design",
      bgImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "AI Solutions",
      description: "Implement cutting-edge AI and machine learning solutions to solve complex business problems.",
      icon: <BarChart3 className="h-8 w-8 text-vision-gold" />,
      link: "/services/ai-solutions",
      bgImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000",
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

  const openWhatsAppBooking = () => {
    const message = "Hello! I'd like to book a 15-minute free consultation call. Please let me know your available time slots. Thank you!";
    const phoneNumber = "918104796542";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

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
          <section ref={heroRef} className="pt-32 pb-24 md:pt-40 md:pb-36 relative overflow-hidden bg-background">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-r from-vision-purple/30 to-vision-blue/30 opacity-10" />

              {/* Animated background elements */}
              <motion.div
                className="absolute w-72 h-72 rounded-full bg-primary/10 -top-20 -left-20 blur-xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.7, 0.5],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              <motion.div
                className="absolute w-60 h-60 rounded-full bg-vision-gold/10 bottom-20 right-10 blur-xl"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                  duration: 10,
                  delay: 1,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
            </div>

            <div className="container relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-8">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                  >
                    <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium">
                      Digital Innovation Agency
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                      We build <span className="text-gradient">AI Agents and Digital Marketing</span> that transform businesses
                    </h1>
                    <div className="flex flex-col space-y-2 text-xl text-muted-foreground max-w-lg">
                      <p className="font-medium">
                        Increase productivity by <AnimatedCounter
                          end={100}
                          suffix="%"
                          className="text-vision-gold font-bold"
                        /> through AI integration
                      </p>
                      <p className="font-medium">
                        Boost sales by <AnimatedCounter
                          end={100}
                          suffix="%"
                          className="text-vision-gold font-bold"
                          duration={1.5}
                        /> with our solutions
                      </p>
                      <p>
                        Virelity.com delivers cutting-edge web solutions, mobile apps, and digital
                        strategies that drive growth and innovation.
                      </p>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                    className="flex flex-wrap gap-4"
                  >
                    <Button asChild className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
                      <Link to="/portfolio" title="View Virelity's AI and digital marketing portfolio">View Our Work</Link>
                    </Button>
                    <HoverImageEffect>
                      <Button
                        onClick={openWhatsAppBooking}
                        className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg flex items-center gap-2"
                        title="Book a free 15-minute consultation call with Virelity AI experts"
                      >
                        <Calendar className="h-5 w-5" />
                        Book a Free 15-min Call
                      </Button>
                    </HoverImageEffect>
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="relative"
                >
                  <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 animate-floating">
                    <video
                      src="/videos/homepage.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full min-h-[320px] md:min-h-[420px] lg:min-h-[480px] xl:min-h-[520px] object-cover aspect-video"
                      poster="/virelity_navbar.png"
                      aria-label="Virelity AI agents and digital transformation showcase video"
                      title="Watch how Virelity AI agents transform businesses and increase productivity"
                    >
                      Sorry, your browser does not support embedded videos.
                    </video>
                  </div>
                  <div className="absolute -top-8 -right-8 w-40 h-40 bg-primary/30 rounded-full blur-3xl" />
                  <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-vision-blue/30 rounded-full blur-3xl" />
                </motion.div>
              </div>

              {!isScrolled && (
                <motion.div
                  onClick={() => scrollToSection(servicesRef)}
                  className="absolute bottom-24 left-1/2 transform -translate-x-1/2 cursor-pointer hidden md:flex flex-col items-center bg-background/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-md z-30"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <span className="text-sm font-medium mb-1">Scroll Down</span>
                  <ArrowDown className="h-5 w-5" />
                </motion.div>
              )}
            </div>

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
          
          {/* Testimonials Section - NOW USING THE STATIC COMPONENT */}
          <section className="py-20 bg-vision-dark">
            <div className="container">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Client Success Stories - AI Transformation Results</h2>
              <Testimonials />
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