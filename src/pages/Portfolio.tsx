import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/PageTransition";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

// --- REDESIGNED VideoProjectCard to match your image ---
const VideoProjectCard = ({ title, description, video, icon, iconBg, index }) => {
  return (
    <motion.div
      className="group relative rounded-2xl overflow-hidden shadow-lg h-80 transition-all duration-300"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      {/* Video Background */}
      <video
        src={video}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        autoPlay
        loop
        muted
        playsInline
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

      {/* Icon in the corner */}
      <div className={`absolute top-4 left-4 p-2 rounded-md z-10 ${iconBg}`}>
        {icon}
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 p-6 h-full flex flex-col justify-end text-white">
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-gray-300 text-sm mt-2">{description}</p>
        <div className="mt-4 font-semibold flex items-center gap-2 opacity-0 group-hover:opacity-100 transform -translate-x-4 group-hover:translate-x-0 transition-all duration-300">
          <span>Learn more</span>
          <span className="transform transition-transform duration-300 group-hover:translate-x-1">→</span>
        </div>
      </div>
    </motion.div>
  );
};


const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    // --- Web Projects ---
    {
      title: "Quizitt",
      description: "AI-powered quiz platform generating personalized quizzes on any topic. Helps users learn efficiently with adaptive question paths and instant feedback.",
      image: "/quizitt.png",
      tags: ["AI", "EdTech", "React"],
      category: "web",
      url: "https://quizitt.com",
    },
    {
      title: "Casa",
      description: "An e-commerce fashion platform with a Tinder-like swipe experience for discovering clothes you love",
      image: "/casa_logo.png",
      tags: ["E-commerce", "Web", "Fashion"],
      category: "web",
      url: "https://casashop.in/",
    },
    {
      title: "PetroGo",
      description: "PetroGo: The smarter way to manage petrol pumps—no paperwork, no Excel.",
      image: "/petrol_logo.png",
      tags: ["Web","React", "Automation"],
      category: "web", // CORRECTED CATEGORY
      url: "#",
    },
    {
      title: "CatchPhish",
      description: "Cybersecurity tool that helps users identify phishing websites through AI analysis. Provides educational resources on spotting online scams.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&q=80&w=1000",
      tags: ["Security", "React", "ML"],
      category: "web",
      url: "https://catchphish.vercel.app/HomePage",
    },
    {
      title: "Clerk Authentication",
      description: "Implementation of Clerk's modern authentication system with seamless social logins, secure user management, and customizable UI components.",
      image: "https://images.unsplash.com/photo-1555066931-4365d1b4bab8c?auto=format&fit=crop&q=80&w=1000",
      tags: ["Auth", "React", "NextJS"],
      category: "web",
      url: "https://clerk-antim.vercel.app/",
    },
    {
      title: "InnerMech",
      description: "Client portal for a mechanical engineering firm featuring project tracking, document management, and communication tools for better client relationships.",
      image: "/inermech.png",
      tags: ["B2B", "React", "TypeScript"],
      category: "web",
      url: "https://clientinermech.vercel.app/",
    },
    {
      title: "Instagram Clone",
      description: "Full-featured social media platform replicating Instagram's core functionalities including image sharing, user profiles, and interactive engagement features.",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=1000",
      tags: ["Social Media", "NextJS", "Tailwind"],
      category: "web",
      url: "https://instagram-internship.vercel.app/Login",
    },
    {
      title: "GlobeOx",
      description: "Interactive data visualization platform for global metrics with customizable dashboards and real-time analytics for business intelligence.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000",
      tags: ["Data Viz", "Analytics", "React"],
      category: "web",
      url: "https://globeox-navinsir.vercel.app/",
    },
    // --- Mobile Projects ---
    {
      title: "Quizitt Mobile",
      description: "Mobile version of Quizitt app built with React Native for seamless quiz experience on phones.",
      image: "/quizit.png",
      tags: ["Mobile", "React Native", "Health"],
      category: "mobile",
      url: "https://quizitt.com",
    },
    // {
    //   title: "Zecurity",
    //   description: "On-demand bodyguard booking for instant protection and peace of mind.",
    //   image: "/bodyguard_logo.png",
    //   tags: ["Mobile","Flutter","Security"],
    //   category: "mobile",
    //   url: "#",
    // },
    {
      title: "PetroGo",
      description: "PetroGo: The smarter way to manage petrol pumps—no paperwork, no Excel.",
      image: "/petrol_logo.png",
      tags: ["Mobile", "React Native"],
      category: "mobile", // CORRECTED CATEGORY
      url: "#",
    },
    // --- Branding Project ---
    {
      title: "Suraj Jamani - Personal Brand Development",
      description: "Virelity helped shape Suraj Jamani's digital identity through creative strategy, content planning, and impactful storytelling across platforms like LinkedIn and Instagram.",
      image: "/suraj.png",
      tags: ["Branding", "Personal Brand", "Storytelling"],
      category: "branding",
      url: "/suraj-branding.pdf",
    },
    // --- AR/VR PROJECTS ---
    {
      title: "Walk The Plank",
      description: "Experience the thrill of walking the plank on a 200th Storey Building in VR!",
      video: "/videos/walkThePlank.mp4",
      iconBg: "bg-blue-500",
      icon: <span className="inline-block text-white text-xl">⚡</span>,
      category: "ar-vr",
      tags: [],
      url: "#",
    },
    {
      title: "Roller Coaster Simulation",
      description: "Ride A Roller Coaster in the comfort of your Home",
      video: "/videos/roller.mp4",
      iconBg: "bg-yellow-400",
      icon: <span className="inline-block text-white text-xl">≡</span>,
      category: "ar-vr",
      tags: [],
      url: "#",
    },
    {
      title: "Tower Crane Simulation",
      description: "Our Industrial level Virtual Simulation for the piloting of a Crane",
      video: "/videos/craneSimulator.mp4",
      iconBg: "bg-red-500",
      icon: <span className="inline-block text-white text-xl">T</span>,
      category: "ar-vr",
      tags: [],
      url: "#",
    },
  ];

  const filteredProjects =
    filter === "all" ? projects : projects.filter((project) => project.category === filter);

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4">
                Our Work
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Portfolio</h1>
              <p className="text-xl text-muted-foreground">
                Explore our latest projects and see how we've helped businesses achieve their digital goals.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Filter */}
        <section className="py-10">
          <div className="container">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {["all", "web", "mobile", "branding", "ar-vr"].map((category) => (
                <Button
                  key={category}
                  variant={filter === category ? "default" : "outline"}
                  onClick={() => setFilter(category)}
                  className={cn(
                    filter === category
                      ? "bg-primary text-white"
                      : "border-muted-foreground/30 text-muted-foreground hover:border-primary hover:text-primary"
                  )}
                >
                  {category === 'ar-vr' ? 'AR/VR' : category.charAt(0).toUpperCase() + category.slice(1)}
                </Button>
              ))}
            </div>

            {/* Conditional Rendering Logic */}
            {filter === "branding" ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group border border-muted-foreground/10 rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
                  <div className="h-48 overflow-hidden">
                    <img
                      src="/suraj.png"
                      alt="Suraj Jamani"
                      className="w-full h-full object-contain bg-white p-4"
                    />
                  </div>
                  <div className="p-6 flex flex-col gap-3">
                    <h3 className="text-xl font-semibold">Suraj Jamani — Personal Brand</h3>
                    <p className="text-muted-foreground text-sm">
                      From digital presence to content strategy, Virelity built a personal brand for Suraj Jamani that connects and grows.
                    </p>
                    <a
                      href="/suraj-branding.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-2 text-sm font-medium text-primary hover:underline"
                    >
                      View Case Study →
                    </a>
                  </div>
                </div>
              </motion.div>
            ) : filter === "ar-vr" ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                <div className="text-center max-w-3xl mx-auto mb-12">
                  <h2 className="text-3xl font-bold mb-4">VR/AR Projects We've Built</h2>
                  <p className="text-lg text-muted-foreground">
                    Explore our portfolio of immersive experiences across different industries.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {filteredProjects.map((project, index) => (
                    <VideoProjectCard
                      key={`${project.title}-${project.category}`}
                      {...project}
                      index={index}
                    />
                  ))}
                </div>
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* This logic correctly renders different card types for the "All" filter */}
                {filteredProjects.map((project, index) => {
                  if (project.category === 'ar-vr') {
                    return (
                      <VideoProjectCard
                        key={`${project.title}-${project.category}`}
                        {...project}
                        index={index}
                      />
                    );
                  }
                  // This will render the branding card if it's in the filtered list
                  if (project.category === 'branding') {
                     // We return null here because the branding card has a special layout
                     // and shouldn't be rendered in the main grid.
                     return null;
                  }
                  return (
                    <ProjectCard
                      key={`${project.title}-${project.category}`}
                      {...project}
                      index={index}
                    />
                  );
                })}
              </motion.div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-muted/30 mt-20">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Have a project in mind?</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Let's discuss how we can help you achieve your goals with our expertise in digital solutions.
              </p>
              <Button asChild className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
                <a href="/contact">Start a Project</a>
              </Button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Portfolio;
