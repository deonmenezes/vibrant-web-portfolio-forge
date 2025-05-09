import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Code, PenTool, Video, Smartphone, BarChart3, Layers, Boxes, Film, Palette, Brain } from "lucide-react";

// Import PageTransition directly from the filepath instead of using the "@" alias
import { PageTransition } from "../components/PageTransition";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Modern, responsive, and custom-built solutions that engage users and drive conversions.",
      icon: <Code className="h-8 w-8 text-vision-gold" />,
      link: "/contact",
      bgImage: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "VR/AR Development",
      description:
        "Immerse your audience in a whole new reality with cutting-edge virtual and augmented reality experiences.",
      icon: <Boxes className="h-8 w-8 text-vision-gold" />,
      link: "/contact",
      bgImage: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "3D Development",
      description:
        "Captivating models and interactive experiences that bring your vision to life in three dimensions.",
      icon: <Layers className="h-8 w-8 text-vision-gold" />,
      link: "/contact",
      bgImage: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Video Editing",
      description:
        "Professional edits and post-production to tell your story with impact and cinematic quality.",
      icon: <Film className="h-8 w-8 text-vision-gold" />,
      link: "/contact",
      bgImage: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Design Services",
      description:
        "Stunning visuals tailored to your brand that communicate your message effectively and memorably.",
      icon: <Palette className="h-8 w-8 text-vision-gold" />,
      link: "/contact",
      bgImage: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Digital Marketing",
      description:
        "Smart strategies to boost your online presence, reach your target audience, and drive measurable results.",
      icon: <BarChart3 className="h-8 w-8 text-vision-gold" />,
      link: "/contact",
      bgImage: "https://images.unsplash.com/photo-1572025442646-866d16c84a54?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications designed for seamless user experiences.",
      icon: <Smartphone className="h-8 w-8 text-vision-gold" />,
      link: "/contact",
      bgImage: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "UI/UX Design",
      description:
        "Human-centered design solutions that create engaging and intuitive digital experiences.",
      icon: <PenTool className="h-8 w-8 text-vision-gold" />,
      link: "/contact",
      bgImage: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1000",
    },
  ];

  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We start by understanding your business, goals, and target audience to create a tailored strategy."
    },
    {
      number: "02",
      title: "Planning",
      description: "Our team develops a detailed roadmap outlining timelines, deliverables, and key milestones."
    },
    {
      number: "03",
      title: "Design & Development",
      description: "We bring your vision to life with innovative design and cutting-edge development techniques."
    },
    {
      number: "04",
      title: "Testing & Refinement",
      description: "Rigorous quality assurance ensures your product meets the highest standards of performance."
    },
    {
      number: "05",
      title: "Launch & Support",
      description: "We deploy your solution and provide ongoing support to ensure continued success."
    }
  ];

  const featuredWork = [
    {
      title: "Quizitt",
      description: "Interactive quiz platform with personalized learning paths",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000",
      url: "https://quizitt.com"
    },
    {
      title: "Tech Finance Dashboard",
      description: "Real-time financial analytics platform for tech companies",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1000",
      url: "#"
    },
    {
      title: "Virtual Reality Gallery",
      description: "Immersive art exhibition experience with interactive 3D elements",
      image: "https://images.unsplash.com/photo-1626379953822-baec19c3accd?auto=format&fit=crop&q=80&w=1000",
      url: "#"
    },
    {
      title: "EcoTrack Mobile App",
      description: "Sustainable living app with carbon footprint tracking and eco-friendly recommendations",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=1000",
      url: "#"
    }
  ];

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
            to="/contact"
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
      <div className="min-h-screen flex flex-col">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-10">
            <div className="absolute inset-0 bg-gradient-to-r from-vision-purple/20 to-vision-gold/20" />
            <div className="absolute top-0 right-0 w-1/2 h-full">
              <img 
                src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1000" 
                alt="Services Background"
                className="w-full h-full object-cover opacity-20"
              />
            </div>
          </div>
          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 rounded-full bg-vision-gold/10 text-vision-gold font-medium mb-4">
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Transforming Ideas Into Digital Reality</h1>
              <p className="text-xl text-muted-foreground">
                We offer comprehensive digital solutions to help businesses thrive in today's competitive landscape.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold mb-4">Services We Offer</h2>
              <p className="text-muted-foreground">
                Looking to grow your business or bring your creative ideas to life? We're here to help you stand out in the digital world with our wide range of professional services.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
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
          </div>
        </section>

        {/* Process Section with background */}
        <section className="py-20 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 z-0 opacity-5">
            <img 
              src="https://images.unsplash.com/photo-1595844730298-b960ff98fee0?auto=format&fit=crop&q=80&w=1000" 
              alt="Process Background"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="container relative z-10">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-vision-gold/10 text-vision-gold font-medium mb-4">
                Our Process
              </span>
              <h2 className="text-3xl font-bold mb-4">How We Work</h2>
              <p className="text-muted-foreground">
                Our proven process ensures efficient delivery of high-quality solutions tailored to your specific needs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              {processSteps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-6 hover:border-vision-gold/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-3xl font-bold text-vision-gold mb-3">{step.number}</div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Work Section */}
        <section className="py-20">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-vision-gold/10 text-vision-gold font-medium mb-4">
                Featured Projects
              </span>
              <h2 className="text-3xl font-bold mb-4">Our Work Speaks For Itself</h2>
              <p className="text-muted-foreground">
                Explore some of our award-winning projects that showcase our expertise and creativity.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {featuredWork.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative overflow-hidden rounded-xl"
                >
                  <div className="relative overflow-hidden rounded-xl aspect-video">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{project.title}</h3>
                      <p className="text-white/80 mb-4">{project.description}</p>
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-block bg-white text-black font-medium px-4 py-2 rounded-full hover:bg-vision-gold hover:text-white transition-colors duration-300"
                      >
                        View Site
                      </a>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/70 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
                    <img src="/virelity_logo_transparent.png" alt="Virelity.com" className="h-5 w-auto" />
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button asChild className="bg-vision-gold hover:bg-vision-gold/90 text-vision-black">
                <Link to="/portfolio">View All Projects</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-bg text-white clip-path-slant">
          <div className="container py-10">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to start your next project?
              </h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Whether you're a startup, entrepreneur, or an established brand, our team ensures results that exceed expectations.
              </p>
              <Button asChild className="bg-white text-vision-gold hover:bg-white/90 px-8 py-6 text-lg">
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Services;