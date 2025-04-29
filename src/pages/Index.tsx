import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Calendar, Code, Palette, Zap, BarChart3, Users, ChevronDown } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { HoverImageEffect } from "@/components/custom/HoverImageEffect";
import { ProjectCard } from "@/components/ProjectCard";
import { useRef, useEffect } from "react";

const Index = () => {
  // Section refs for scroll animations
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const ctaRef = useRef(null);
  
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.2]);

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

  const services = [
    {
      title: "Web Development",
      description:
        "We build responsive, high-performance websites and web applications tailored to your business needs.",
      icon: <Code className="h-8 w-8 text-vision-gold" />,
      link: "/services",
      bgImage: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications designed for seamless user experiences.",
      icon: <Zap className="h-8 w-8 text-vision-gold" />,
      link: "/services",
      bgImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "UI/UX Design",
      description:
        "Human-centered design solutions that create engaging and intuitive digital experiences.",
      icon: <Palette className="h-8 w-8 text-vision-gold" />,
      link: "/services",
      bgImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "AI Solutions",
      description:
        "Implement cutting-edge AI and machine learning solutions to solve complex business problems.",
      icon: <BarChart3 className="h-8 w-8 text-vision-gold" />,
      link: "/services",
      bgImage: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80&w=1000",
    },
  ];

  const featuredProjects = [
    {
      title: "Quizitt",
      description: "An interactive quiz platform with personalized learning paths.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000",
      tags: ["React", "Node.js", "MongoDB"],
      url: "/portfolio",
    },
    {
      title: "Tech Finance Dashboard",
      description: "Real-time financial analytics platform for tech companies.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1000",
      tags: ["React", "TypeScript", "Firebase"],
      url: "/portfolio",
    },
    {
      title: "EcoTrack",
      description: "Mobile app for tracking environmental impact of daily activities.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=1000",
      tags: ["React Native", "Redux", "AWS"],
      url: "/portfolio",
    },
  ];

  const openWhatsAppBooking = () => {
    const message = "Hello! I'd like to book a 15-minute free consultation call. Please let me know your available time slots. Thank you!";
    const phoneNumber = "918104796542";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  // Enhanced service card component with background image
  const ServiceCard = ({ title, description, icon, index, bgImage }) => {
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
            alt={title}
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
          <Link
            to="/services"
            className="text-vision-gold font-medium hover:text-vision-gold-light transition-colors inline-flex items-center"
          >
            Learn more
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
  };

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col overflow-hidden">
        <Navbar />
        
        {/* Hero Section */}
        <section ref={heroRef} className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
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
                    We build <span className="text-gradient">digital experiences</span> that transform businesses
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-lg">
                    Team Vision delivers cutting-edge web solutions, mobile apps, and digital
                    strategies that drive growth and innovation.
                  </p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="flex flex-wrap gap-4"
                >
                  <Button asChild className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
                    <Link to="/portfolio">View Our Work</Link>
                  </Button>
                  <HoverImageEffect>
                    <Button 
                      onClick={openWhatsAppBooking} 
                      className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg flex items-center gap-2"
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
                  <img
                    src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?auto=format&fit=crop&q=80&w=1000"
                    alt="Team Vision Workspace"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -top-8 -right-8 w-40 h-40 bg-primary/30 rounded-full blur-3xl" />
                <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-vision-blue/30 rounded-full blur-3xl" />
              </motion.div>
            </div>
            
            {/* Scroll down indicator */}
            <motion.div 
              onClick={() => scrollToSection(servicesRef)}
              className="absolute bottom-5 left-1/2 transform -translate-x-1/2 cursor-pointer hidden md:flex flex-col items-center"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ opacity }}
            >
              <span className="text-sm font-medium mb-2">Scroll Down</span>
              <ChevronDown className="h-6 w-6" />
            </motion.div>
          </div>
          
          {/* Section connector */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-muted/30 to-transparent" />
        </section>

        {/* Services Section */}
        <motion.section 
          ref={servicesRef}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="py-20 bg-muted/30 relative overflow-hidden"
        >
          {/* Decorative elements */}
          <motion.div 
            className="absolute top-0 right-0 w-full h-32 opacity-20 pointer-events-none"
            style={{
              background: "radial-gradient(circle at top right, rgba(var(--vision-gold-rgb)/0.3), transparent 70%)"
            }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-full h-32 opacity-20 pointer-events-none"
            style={{
              background: "radial-gradient(circle at bottom left, rgba(var(--vision-purple-rgb)/0.3), transparent 70%)"
            }}
          />
          
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <motion.span 
                {...sharedAnimationProps}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-2 rounded-full bg-vision-gold/10 text-vision-gold font-medium mb-4"
              >
                Our Services
              </motion.span>
              <motion.h2 
                {...sharedAnimationProps}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                Solutions We Provide
              </motion.h2>
              <motion.p 
                {...sharedAnimationProps}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-muted-foreground"
              >
                We offer a wide range of digital services to help businesses thrive in the digital age.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  index={index}
                  bgImage={service.bgImage}
                />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
              >
                <Button asChild className="bg-vision-gold hover:bg-vision-gold/90 text-vision-black">
                  <Link to="/services">Explore All Services</Link>
                </Button>
              </motion.div>
            </div>
          </div>
          
          {/* Section connector - curved shape */}
          <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
            <svg 
              className="absolute bottom-0 w-full h-20" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 1440 120"
              preserveAspectRatio="none"
            >
              <path 
                fill="var(--background)" 
                d="M0,64L60,58.7C120,53,240,43,360,42.7C480,43,600,53,720,74.7C840,96,960,128,1080,128C1200,128,1320,96,1380,80L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
              ></path>
            </svg>
          </div>
        </motion.section>

        {/* Featured Projects */}
        <motion.section 
          ref={projectsRef}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="py-20 relative overflow-hidden"
        >
          {/* Background decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <motion.div 
              className="absolute w-96 h-96 rounded-full bg-primary/5 -right-48 top-1/4 blur-xl"
              animate={{ 
                scale: [1, 1.1, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.div 
              className="absolute w-80 h-80 rounded-full bg-vision-gold/5 left-10 bottom-20 blur-xl"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.2, 0.4, 0.2],
              }}
              transition={{ duration: 10, delay: 1, repeat: Infinity, repeatType: "reverse" }}
            />
          </div>
          
          <div className="container relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
              <div className="max-w-xl mb-6 md:mb-0">
                <motion.span 
                  {...sharedAnimationProps}
                  transition={{ duration: 0.5 }}
                  className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4"
                >
                  Our Portfolio
                </motion.span>
                <motion.h2 
                  {...sharedAnimationProps}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-3xl md:text-4xl font-bold mb-4"
                >
                  Featured Projects
                </motion.h2>
                <motion.p 
                  {...sharedAnimationProps}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-muted-foreground"
                >
                  Take a look at some of our most successful projects that showcase our expertise and creativity.
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                  <Link to="/portfolio">View All Projects</Link>
                </Button>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags}
                  url={project.url}
                  index={index}
                />
              ))}
            </div>
          </div>
          
          {/* Section connector */}
          <div className="absolute bottom-0 left-0 right-0 overflow-hidden h-40 pointer-events-none">
            <svg 
              className="absolute bottom-0 w-full h-40" 
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
            >
              <path 
                fill="url(#gradient-fill)" 
                fillOpacity="1" 
                d="M0,128L48,138.7C96,149,192,171,288,160C384,149,480,107,576,101.3C672,96,768,128,864,149.3C960,171,1056,181,1152,181.3C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C960,320,864,320,768,320C672,320,576,320,480,320C384,320,288,320,192,320C96,320,48,320,0,320Z"
              ></path>
              <defs>
                <linearGradient id="gradient-fill" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: "var(--vision-purple)" }} stopOpacity="0.2" />
                  <stop offset="100%" style={{ stopColor: "var(--vision-blue)" }} stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section 
          ref={ctaRef}
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="py-20 bg-gradient-bg text-white clip-path-slant relative overflow-hidden"
        >
          {/* Animated particle effects */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-white/10 w-24 h-24"
                style={{ 
                  left: `${10 + i * 15}%`, 
                  top: `${Math.random() * 70}%`,
                  scale: 0.5 + Math.random() * 1
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: i * 0.3
                }}
              />
            ))}
          </div>
          
          <div className="container py-10 relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="text-3xl md:text-4xl font-bold mb-6"
              >
                Ready to transform your digital presence?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-xl mb-8 text-white/90 max-w-2xl mx-auto"
              >
                Let's collaborate to create innovative digital solutions that elevate your brand and drive results.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Button asChild className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg">
                  <Link to="/contact">Get Started</Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Index;
