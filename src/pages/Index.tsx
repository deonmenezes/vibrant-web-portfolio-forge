
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Button } from "@/components/ui/button";
import { ServiceCard } from "@/components/ServiceCard";
import { ProjectCard } from "@/components/ProjectCard";
import { Link } from "react-router-dom";
import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";

const Index = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "We build responsive, high-performance websites and web applications tailored to your business needs.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
          <line x1="8" y1="21" x2="16" y2="21"></line>
          <line x1="12" y1="17" x2="12" y2="21"></line>
        </svg>
      ),
    },
    {
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications designed for seamless user experiences.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="6" y="2" width="12" height="20" rx="2" ry="2"></rect>
          <line x1="12" y1="18" x2="12.01" y2="18"></line>
        </svg>
      ),
    },
    {
      title: "UI/UX Design",
      description:
        "Human-centered design solutions that create engaging and intuitive digital experiences.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M2 9a7 7 0 0 1 12-5"></path>
          <path d="M14 10h7a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-7a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2z"></path>
        </svg>
      ),
    },
    {
      title: "AI Solutions",
      description:
        "Implement cutting-edge AI and machine learning solutions to solve complex business problems.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path>
          <path d="M9 18h6"></path>
          <path d="M10 22h4"></path>
        </svg>
      ),
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

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-20 md:pt-40 md:pb-32 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-vision-purple/30 to-vision-blue/30 opacity-10" />
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
                  <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
                    View Our Work
                  </Button>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary/5 px-8 py-6 text-lg">
                    Contact Us
                  </Button>
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
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4">
                Our Services
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Solutions We Provide
              </h2>
              <p className="text-muted-foreground">
                We offer a wide range of digital services to help businesses thrive in the digital age.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  delay={index * 150}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20">
          <div className="container">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
              <div className="max-w-xl mb-6 md:mb-0">
                <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4">
                  Our Portfolio
                </span>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Featured Projects
                </h2>
                <p className="text-muted-foreground">
                  Take a look at some of our most successful projects that showcase our expertise and creativity.
                </p>
              </div>
              <Button asChild className="bg-primary hover:bg-primary/90 text-white">
                <Link to="/portfolio">View All Projects</Link>
              </Button>
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
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-bg text-white clip-path-slant">
          <div className="container py-10">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to transform your digital presence?
              </h2>
              <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
                Let's collaborate to create innovative digital solutions that elevate your brand and drive results.
              </p>
              <Button asChild className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg">
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

export default Index;
