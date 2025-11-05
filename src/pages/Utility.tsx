import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { ProjectCard } from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Sparkles, Wrench } from "lucide-react";

const utilityProjects = [
  {
    title: "AI Watermark Remover",
    description: "Advanced web application using computer vision and AI to intelligently remove watermarks from images while preserving quality and protecting faces.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000",
    tags: ["AI", "Computer Vision", "Web"],
    category: "utility",
    url: "https://the-auto-watermark.netlify.app/",
  },
  {
    title: "BackDrop",
    description: "Web-based tool for creating visually appealing text effects by placing text behind images, enhancing website aesthetics with seamless HTML, CSS, and JavaScript integration.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=1000",
    tags: ["Web Design", "CSS", "JavaScript"],
    category: "utility",
    url: "http://text-behind-image.ap-south-1.elasticbeanstalk.com/",
  },
];

const Utility = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Tools", icon: Wrench },
    { id: "utility", label: "Utility Tools", icon: Sparkles },
  ];

  const filteredProjects = selectedCategory === "all" 
    ? utilityProjects 
    : utilityProjects.filter(project => project.category === selectedCategory);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-vision-dark via-vision-black to-vision-dark">
      <Navbar 
        title="Utility Tools - Virelity.com | AI Watermark Remover, BackDrop & More"
        description="Explore our collection of utility tools including AI Watermark Remover, BackDrop text effects, and other helpful web applications"
      />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge className="mb-6 bg-vision-gold/20 text-vision-gold border-vision-gold/30">
              <Wrench className="w-4 h-4 mr-2" />
              Utility Tools
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Powerful <span className="text-vision-gold">Utility Tools</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Discover our collection of free utility tools designed to solve common problems and enhance your workflow. 
              From AI-powered image processing to creative text effects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`
                    flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300
                    ${selectedCategory === category.id
                      ? "bg-vision-gold text-vision-black hover:bg-vision-gold/90"
                      : "border-vision-gold/30 text-vision-gold hover:bg-vision-gold/10"
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  {category.label}
                </Button>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div key={project.title} variants={itemVariants}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 text-lg">
                No projects found in this category.
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-vision-gold/10 to-vision-gold/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Need a Custom Utility Tool?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We can build custom utility tools tailored to your specific needs. 
              Let's discuss your requirements and create something amazing together.
            </p>
            <div className="flex justify-center">
              <Button
                size="lg"
                className="gold-gradient hover:gold-glow text-vision-black transition-all duration-300"
                onClick={() => window.open("https://wa.me/918104796542?text=Hello! I'd like to discuss creating a custom utility tool.", '_blank')}
              >
                <ExternalLink className="w-5 h-5 mr-2" />
                Get Custom Tool
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Utility;
