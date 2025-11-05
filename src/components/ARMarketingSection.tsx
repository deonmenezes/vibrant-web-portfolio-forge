import { motion } from "framer-motion";
import { useState } from "react";

const ARMarketingSection = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const arMarketingWorks = [
    {
      id: 1,
      title: "AR Home Automation",
      image: "/videos/AR.gif",
      description: "Smart home control through augmented reality interfaces"
    },
    {
      id: 2,
      title: "3D Product Showcase",
      image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?auto=format&fit=crop&q=80&w=500",
      description: "Interactive 3D product demonstrations"
    },
    {
      id: 3,
      title: "AR Try-On Experience",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=500",
      description: "Virtual try-on solutions for retail brands"
    },
    {
      id: 4,
      title: "Location-Based AR",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&q=80&w=500",
      description: "Geo-located augmented reality experiences"
    },
    {
      id: 5,
      title: "AR Brand Engagement",
      image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=500",
      description: "Interactive brand campaigns with AR"
    },
    {
      id: 6,
      title: "Educational AR",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=500",
      description: "Learning experiences through augmented reality"
    },
    {
      id: 7,
      title: "AR Gaming",
      image: "/videos/mobile.gif",
      description: "Immersive AR gaming experiences"
    },
    {
      id: 8,
      title: "Virtual Showrooms",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=500",
      description: "Virtual spaces for product exhibitions"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-vision-purple to-vision-gold bg-clip-text text-transparent">
            SELECTED AR MARKETING WORKS
          </h2>
          <p className="text-xl text-muted-foreground">
            Innovative augmented reality solutions that transform marketing campaigns and customer engagement
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {arMarketingWorks.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredItem(work.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Image/GIF Container */}
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-muted/30 border border-vision-gold/20 mb-4">
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Description */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm opacity-90">{work.description}</p>
                </div>
              </div>

              {/* Title */}
              <div className="text-center">
                <h3 className={`text-lg font-semibold transition-colors duration-300 ${
                  hoveredItem === work.id ? 'text-vision-gold' : 'text-foreground'
                }`}>
                  {work.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-vision-purple/10 to-vision-gold/10 rounded-2xl p-8 border border-vision-gold/20">
            <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Marketing?</h3>
            <p className="text-muted-foreground mb-6">
              Let's create immersive AR experiences that captivate your audience and drive results
            </p>
            <button className="bg-gradient-to-r from-vision-purple to-vision-gold text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-vision-gold/25 transition-all duration-300">
              Start Your AR Journey
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ARMarketingSection;
