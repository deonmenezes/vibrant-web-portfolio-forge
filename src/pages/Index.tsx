import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { Calendar, Code, Palette, Zap, BarChart3, MousePointerClick, ChevronDown, ArrowDown } from "lucide-react";
import { HoverImageEffect } from "@/components/custom/HoverImageEffect";
import { ProjectCard } from "@/components/ProjectCard";
import { useRef, useEffect, useState } from "react";

const Index = () => {
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
      description: "AI-powered quiz platform generating personalized quizzes on any topic. Helps users learn efficiently with adaptive question paths.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000",
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
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ 
        duration: 0.8,
        ease: [0.17, 0.67, 0.83, 0.67] 
      }}
    >
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
              
              {/* Improved scroll down indicator - positioned better and styled with proper layering */}
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
            
            {/* Enhanced section connector */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-muted/30 to-transparent pointer-events-none" />
            
            {/* Decorative line connector */}
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
            
            {/* Improved section connector with visual linking element */}
            <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
              {/* Decorative connecting lines */}
              <motion.div 
                className="absolute left-1/4 bottom-0 w-0.5 h-20 bg-gradient-to-b from-vision-purple/20 to-transparent"
                initial={{ height: 0 }}
                whileInView={{ height: 80 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
              />
              <motion.div 
                className="absolute left-2/4 bottom-0 w-0.5 h-32 bg-gradient-to-b from-vision-gold/20 to-transparent"
                initial={{ height: 0 }}
                whileInView={{ height: 120 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.4 }}
              />
              <motion.div 
                className="absolute left-3/4 bottom-0 w-0.5 h-24 bg-gradient-to-b from-primary/20 to-transparent"
                initial={{ height: 0 }}
                whileInView={{ height: 100 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
              />
              
              {/* Customized wavy transition with distinct design */}
              <svg 
                className="absolute bottom-0 w-full h-24" 
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

          {/* Featured Projects Section - Updated to match the background color of Services section */}
          <motion.section 
            ref={projectsRef}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="py-24 relative overflow-hidden bg-muted/30"
          >
            {/* Background decorative elements - matched with Services section */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
              <motion.div 
                className="absolute top-0 right-0 w-full h-32 opacity-20"
                style={{
                  background: "radial-gradient(circle at top right, rgba(var(--vision-gold-rgb)/0.3), transparent 70%)"
                }}
              />
              <motion.div 
                className="absolute bottom-0 left-0 w-full h-32 opacity-20"
                style={{
                  background: "radial-gradient(circle at bottom left, rgba(var(--vision-purple-rgb)/0.3), transparent 70%)"
                }}
              />
              
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
                  <Button asChild className="bg-vision-gold hover:bg-vision-gold/90 text-vision-black">
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
          </motion.section>

          {/* Call to Action - Enhanced gradient */}
          <motion.section 
            ref={ctaRef}
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="py-20 bg-gradient-bg text-white relative overflow-hidden"
          >
            {/* Modified clip path for smoother transition */}
            <div className="absolute inset-0 bg-gradient-to-b from-vision-purple/50 to-vision-blue/50 opacity-60 z-0"></div>
            
            {/* Animated particle effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
      </motion.div>
    </motion.div>
  );
};

export default Index;
