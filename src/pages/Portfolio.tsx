
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
      description: "Interactive quiz platform with personalized learning paths and real-time feedback.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000",
      tags: ["Web App", "React", "Node.js"],
      category: "web",
      url: "https://quizitt.com",
    },
    {
      title: "Tech Finance Dashboard",
      description: "Real-time financial analytics platform for tech companies with AI predictions.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1000",
      tags: ["Web App", "React", "TypeScript"],
      category: "web",
      url: "#",
    },
    {
      title: "EcoTrack",
      description: "Mobile app for tracking environmental impact of daily activities and providing recommendations.",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=1000",
      tags: ["Mobile", "React Native", "AWS"],
      category: "mobile",
      url: "#",
    },
    {
      title: "Health Monitor",
      description: "Health tracking application with smart analytics and personalized recommendations.",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=1000",
      tags: ["Web App", "Mobile", "Vue.js"],
      category: "mobile",
      url: "#",
    },
    {
      title: "Smart Home Interface",
      description: "Intuitive UI design system for smart home devices with accessibility features.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=1000",
      tags: ["UI/UX", "Design System"],
      category: "design",
      url: "#",
    },
    {
      title: "Brand Evolution",
      description: "Complete brand refresh for a tech company entering a new market segment.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=1000",
      tags: ["Branding", "Identity", "Strategy"],
      category: "branding",
      url: "#",
    },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

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
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-muted/30 mt-20">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">
                Have a project in mind?
              </h2>
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
