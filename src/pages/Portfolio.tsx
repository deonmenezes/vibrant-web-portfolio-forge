import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/PageTransition";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      title: "Quizitt",
      description: "AI-powered quiz platform generating personalized quizzes on any topic. Helps users learn efficiently with adaptive question paths and instant feedback.",
      image: "/quizitt.png",
      tags: ["AI", "EdTech", "React"],
      category: "web",
      url: "https://quizitt.com",
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
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000",
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
    {
      title: "Quizitt Mobile",
      description: "Mobile version of Quizitt app built with React Native for seamless quiz experience on phones.",
      image: "/quizit.png",
      tags: ["Mobile", "React Native", "Health"],
      category: "mobile",
      url: "https://quizitt.com",
    },
    {
      title: "Suraj Jamani - Personal Brand Development",
      description: "Virelity helped shape Suraj Jamani's digital identity through creative strategy, content planning, and impactful storytelling across platforms like LinkedIn and Instagram.",
      image: "/vision_logo.png",
      tags: ["Branding", "Personal Brand", "Storytelling"],
      category: "branding",
      url: "/suraj-branding.pdf",
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
              {["all", "web", "mobile", "design", "branding"].map((category) => (
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
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Button>
              ))}
            </div>

            {/* Conditional Rendering */}
            {filter === "branding" ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="group border border-muted-foreground/10 rounded-2xl overflow-hidden shadow hover:shadow-lg transition">
                  <div className="h-48 overflow-hidden">
                    <img
                      src="/vision_logo.png"
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
              </div>
            ) : (

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
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
