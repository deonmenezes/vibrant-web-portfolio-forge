import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Code,
  PenTool,
  Video,
  Smartphone,
  BarChart3,
  Layers,
  Boxes,
  Film,
  Palette,
} from "lucide-react";
import { PageTransition } from "../components/PageTransition";

const Services = () => {
  const services = [
    {
      title: "Web Development",
      description:
        "Modern, responsive, and custom-built solutions that engage users and drive conversions.",
      icon: <Code className="h-8 w-8 text-vision-gold" />,
      link: "/services/web-development",
      bgImage:
        "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "VR/AR Development",
      description:
        "Immerse your audience in a whole new reality with cutting-edge virtual and augmented reality experiences.",
      icon: <Boxes className="h-8 w-8 text-vision-gold" />,
      link: "/services/vr-ar-development",
      bgImage:
        "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "3D Development",
      description:
        "Captivating models and interactive experiences that bring your vision to life in three dimensions.",
      icon: <Layers className="h-8 w-8 text-vision-gold" />,
      link: "/services/3d-development",
      bgImage:
        "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Video Editing",
      description:
        "Professional edits and post-production to tell your story with impact and cinematic quality.",
      icon: <Film className="h-8 w-8 text-vision-gold" />,
      link: "/services/video-editing",
      bgImage:
        "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Design Services",
      description:
        "Stunning visuals tailored to your brand that communicate your message effectively and memorably.",
      icon: <Palette className="h-8 w-8 text-vision-gold" />,
      link: "/services/design-services",
      bgImage:
        "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Digital Marketing",
      description:
        "Smart strategies to boost your online presence, reach your target audience, and drive measurable results.",
      icon: <BarChart3 className="h-8 w-8 text-vision-gold" />,
      link: "/services/digital-marketing",
      bgImage:
        "https://images.unsplash.com/photo-1572025442646-866d16c84a54?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "Mobile Apps",
      description:
        "Native and cross-platform mobile applications designed for seamless user experiences.",
      icon: <Smartphone className="h-8 w-8 text-vision-gold" />,
      link: "/services/mobile-apps",
      bgImage:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1000",
    },
    {
      title: "UI/UX Design",
      description:
        "Human-centered design solutions that create engaging and intuitive digital experiences.",
      icon: <PenTool className="h-8 w-8 text-vision-gold" />,
      link: "/services/ui-ux-design",
      bgImage:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1000",
    },
  ];

  const ServiceCard = ({ title, description, icon, index, bgImage, link }) => {
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
            to={link}
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
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Transforming Ideas Into Digital Reality
              </h1>
              <p className="text-xl text-muted-foreground">
                We offer comprehensive digital solutions to help businesses
                thrive in today's competitive landscape.
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
                Looking to grow your business or bring your creative ideas to
                life? We're here to help you stand out in the digital world with
                our wide range of professional services.
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
                  link={service.link} // ✅ Added here
                />
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Services;
