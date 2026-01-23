import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
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
  ArrowRight,
  ArrowUpRight,
  Zap,
  Cpu,
} from "lucide-react";
import { PageTransition } from "../components/PageTransition";

// Neobrutalist colors
const colors = {
  gold: "#D4AF37",
  electric: "#00FF87",
  coral: "#FF6B6B",
  violet: "#A855F7",
  cyan: "#00D4FF",
  lime: "#BFFF00",
};

// Marquee component
const Marquee = ({ children, reverse = false, speed = 30 }: { children: React.ReactNode; reverse?: boolean; speed?: number }) => (
  <div className="overflow-hidden whitespace-nowrap">
    <motion.div
      animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
      transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
      className="inline-flex"
    >
      {children}
      {children}
    </motion.div>
  </div>
);

const Services = () => {
  // Scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  // Google Analytics for Services page
  useEffect(() => {
    const GA_ID = 'G-T8DLRPD9T2';
    if (!document.querySelector(`script[src*="${GA_ID}"]`)) {
      const script = document.createElement('script');
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      document.head.appendChild(script);
    }
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    gtag('js', new Date());
    gtag('config', 'G-T8DLRPD9T2');
  }, []);

  const services = [
    {
      title: "AI Solutions",
      description: "Intelligent automation & AI agents that transform your business operations.",
      icon: <Cpu className="h-8 w-8" />,
      link: "/services/ai-solutions",
      bgImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
      bgVideo: undefined,
      accentColor: colors.violet,
    },
    {
      title: "Web Development",
      description: "Modern, responsive, and custom-built solutions that engage users and drive conversions.",
      icon: <Code className="h-8 w-8" />,
      link: "/services/web-development",
      bgImage: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?auto=format&fit=crop&q=80&w=1000",
      bgVideo: "/videos/homepage.mp4",
      accentColor: colors.electric,
    },
    {
      title: "VR/AR Development",
      description: "Immerse your audience in cutting-edge virtual and augmented reality experiences.",
      icon: <Boxes className="h-8 w-8" />,
      link: "/services/vr-ar-development",
      bgImage: "/videos/vr-bg.MP4",
      bgVideo: undefined,
      accentColor: colors.cyan,
    },
    {
      title: "3D Development",
      description: "Captivating models and interactive experiences in three dimensions.",
      icon: <Layers className="h-8 w-8" />,
      link: "/services/3d-development",
      bgImage: "https://images.unsplash.com/photo-1635322966219-b75ed372eb01?auto=format&fit=crop&q=80&w=1000",
      bgVideo: "/videos/3dservice.mp4",
      accentColor: colors.violet,
    },
    {
      title: "Video Editing",
      description: "Professional edits and post-production with cinematic quality.",
      icon: <Film className="h-8 w-8" />,
      link: "/services/video-editing",
      bgImage: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=1000",
      bgVideo: "/videos/videoservice.mp4",
      accentColor: colors.coral,
    },
    {
      title: "Design Services",
      description: "Stunning visuals tailored to your brand that communicate effectively.",
      icon: <Palette className="h-8 w-8" />,
      link: "/services/design-services",
      bgImage: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?auto=format&fit=crop&q=80&w=1000",
      bgVideo: "/videos/design.mp4",
      accentColor: colors.lime,
    },
    {
      title: "Digital Marketing",
      description: "Smart strategies to boost your online presence and drive measurable results.",
      icon: <BarChart3 className="h-8 w-8" />,
      link: "/services/digital-marketing",
      bgImage: "https://images.unsplash.com/photo-1572025442646-866d16c84a54?auto=format&fit=crop&q=80&w=1000",
      bgVideo: "/videos/digital-market.mp4",
      accentColor: colors.electric,
    },
    {
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for seamless experiences.",
      icon: <Smartphone className="h-8 w-8" />,
      link: "/services/mobile-apps",
      bgImage: "/videos/mobile.gif",
      bgVideo: undefined,
      accentColor: colors.coral,
    },
    {
      title: "UI/UX Design",
      description: "Human-centered design solutions that create engaging digital experiences.",
      icon: <PenTool className="h-8 w-8" />,
      link: "/services/ui-ux-design",
      bgImage: "/videos/UI.gif",
      bgVideo: undefined,
      accentColor: colors.cyan,
    },
    {
      title: "AR/VR Marketing",
      description: "Innovative marketing campaigns using immersive AR/VR technology.",
      icon: <Boxes className="h-8 w-8" />,
      link: "/services/ar-vr-marketing",
      bgImage: "/videos/craneSimulator.mp4",
      bgVideo: undefined,
      accentColor: colors.violet,
    },
  ];

  // Neobrutalist Service Card
  const ServiceCard = ({ service, index }: { service: any; index: number }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: true, margin: "-50px" });
    const [isHovered, setIsHovered] = useState(false);

    const rotations = [-2, 1.5, -1, 2, -1.5, 1, -0.5, 2.5, -2, 1];
    const rotation = rotations[index % rotations.length];

    return (
      <Link to={service.link} className="block">
        <motion.div
          ref={cardRef}
          initial={{ opacity: 0, y: 100, rotate: rotation * 2 }}
          animate={isInView ? { opacity: 1, y: 0, rotate: rotation } : {}}
          transition={{
            duration: 0.7,
            delay: index * 0.08,
            type: "spring",
            stiffness: 100,
            damping: 15
          }}
          whileHover={{
            rotate: 0,
            scale: 1.03,
            y: -10,
            transition: { duration: 0.3, type: "spring", stiffness: 300 }
          }}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          className="relative group cursor-pointer h-full"
        >
          {/* Shadow layer */}
          <motion.div
            className="absolute inset-0"
            animate={{
              x: isHovered ? 6 : 3,
              y: isHovered ? 6 : 3,
            }}
            style={{ backgroundColor: service.accentColor }}
          />

          {/* Main card */}
          <div className="relative bg-black border-4 border-white overflow-hidden h-full">
            {/* Background */}
            <div className="relative h-48 overflow-hidden">
              {service.bgVideo ? (
                <motion.video
                  src={service.bgVideo}
                  className="w-full h-full object-cover"
                  autoPlay
                  muted
                  loop
                  playsInline
                  animate={{ scale: isHovered ? 1.15 : 1 }}
                  transition={{ duration: 0.6 }}
                />
              ) : (
                <motion.img
                  src={service.bgImage}
                  alt={service.title}
                  className="w-full h-full object-cover"
                  animate={{ scale: isHovered ? 1.15 : 1 }}
                  transition={{ duration: 0.6 }}
                />
              )}
              <motion.div
                className="absolute inset-0 bg-black"
                animate={{ opacity: isHovered ? 0.3 : 0.5 }}
              />

              {/* Icon badge */}
              <motion.div
                className="absolute top-4 left-4 w-14 h-14 flex items-center justify-center border-2 border-black"
                style={{ backgroundColor: service.accentColor }}
                animate={{
                  rotate: isHovered ? [0, -10, 10, 0] : 0,
                  scale: isHovered ? 1.1 : 1,
                }}
                transition={{ duration: 0.5 }}
              >
                <div className="text-black">{service.icon}</div>
              </motion.div>

              {/* Hover arrow */}
              <motion.div
                className="absolute bottom-4 right-4 w-12 h-12 bg-vision-gold flex items-center justify-center border-2 border-black"
                initial={{ scale: 0, rotate: -180 }}
                animate={{
                  scale: isHovered ? 1 : 0,
                  rotate: isHovered ? 0 : -180
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <ArrowUpRight className="w-6 h-6 text-black" />
              </motion.div>
            </div>

            {/* Content */}
            <motion.div
              className="p-6 bg-white"
              animate={{ backgroundColor: isHovered ? "#FFFBF0" : "#FFFFFF" }}
            >
              <motion.h3
                className="text-xl font-black uppercase tracking-tight text-black mb-2"
                animate={{ x: isHovered ? 4 : 0 }}
              >
                {service.title}
              </motion.h3>
              <p className="text-gray-700 font-medium text-sm line-clamp-2">
                {service.description}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </Link>
    );
  };

  return (
    <PageTransition>
      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-vision-gold z-50 origin-left"
        style={{ scaleX }}
      />

      <div className="min-h-screen flex flex-col bg-black">
        <Navbar />

        {/* HERO SECTION */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          {/* Background shapes */}
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity }}
            className="absolute top-20 right-20 w-32 h-32 border-4 border-vision-gold hidden lg:block"
          />
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute bottom-20 left-20 w-24 h-24 hidden lg:block"
            style={{ backgroundColor: colors.cyan }}
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-1/2 right-1/4 w-16 h-16 hidden lg:block"
            style={{ backgroundColor: colors.coral }}
          />

          <div className="container relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, y: 30, rotate: -3 }}
                animate={{ opacity: 1, y: 0, rotate: 0 }}
                className="inline-block mb-8"
              >
                <div className="relative group">
                  <div className="absolute inset-0 translate-x-2 translate-y-2 bg-vision-gold" />
                  <div className="relative bg-black border-4 border-white px-6 py-3 flex items-center gap-2">
                    {/* <Zap className="w-5 h-5 text-vision-gold" /> */}
                    <span className="font-black uppercase tracking-widest text-white text-sm">Our Services</span>
                  </div>
                </div>
              </motion.div>

              {/* Main Title */}
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-none mb-6"
              >
                <span className="text-white block">Transform</span>
                <span className="text-vision-gold block">Ideas Into</span>
                <span className="text-white block">Reality</span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-white/70 font-medium max-w-2xl mx-auto"
              >
                Comprehensive digital solutions to help businesses thrive in today's competitive landscape.
              </motion.p>
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <section className="py-4 bg-vision-gold border-y-4 border-black">
          <Marquee speed={25}>
            <span className="inline-flex items-center gap-8 px-8 font-black text-2xl md:text-3xl text-black uppercase">
              <span>AI Solutions</span>
              <span className="w-4 h-4 bg-black rounded-full" />
              <span>Web Development</span>
              <span className="w-4 h-4 bg-black rounded-full" />
              <span>Mobile Apps</span>
              <span className="w-4 h-4 bg-black rounded-full" />
              <span>VR/AR</span>
              <span className="w-4 h-4 bg-black rounded-full" />
              <span>Digital Marketing</span>
              <span className="w-4 h-4 bg-black rounded-full" />
            </span>
          </Marquee>
        </section>

        {/* SERVICES GRID */}
        <section className="py-20 bg-white border-y-4 border-black">
          <div className="container">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-block mb-6">
                <div className="relative">
                  <div className="absolute inset-0 translate-x-2 translate-y-2" style={{ backgroundColor: colors.electric }} />
                  <div className="relative bg-black border-4 border-black px-6 py-3">
                    <span className="font-black uppercase tracking-widest text-white">Services We Offer</span>
                  </div>
                </div>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-black uppercase mb-4">
                What We <span className="text-vision-gold">Build</span>
              </h2>
              <p className="text-xl text-gray-700 font-medium max-w-2xl mx-auto">
                Looking to grow your business or bring your creative ideas to life? We're here to help you stand out in the digital world.
              </p>
            </motion.div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <ServiceCard key={service.title} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* SECOND MARQUEE */}
        <section className="py-4 bg-black border-y-4 border-white">
          <Marquee reverse speed={20}>
            <span className="inline-flex items-center gap-8 px-8 font-black text-2xl md:text-3xl text-white uppercase">
              <span>Innovation</span>
              <span className="w-4 h-4 bg-vision-gold rounded-full" />
              <span>Creativity</span>
              <span className="w-4 h-4 bg-vision-gold rounded-full" />
              <span>Excellence</span>
              <span className="w-4 h-4 bg-vision-gold rounded-full" />
              <span>Results</span>
              <span className="w-4 h-4 bg-vision-gold rounded-full" />
            </span>
          </Marquee>
        </section>

        {/* CTA SECTION */}
        <section className="py-24 bg-vision-gold relative overflow-hidden">
          {/* Background shapes */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 w-64 h-64 border-8 border-black opacity-20"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-20 -left-20 w-48 h-48 bg-black opacity-10"
          />

          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-5xl md:text-7xl font-black text-black uppercase mb-6 leading-none">
                Ready to
                <br />
                <span className="text-white">Get Started?</span>
              </h2>
              <p className="text-xl text-black/70 font-medium mb-10 max-w-2xl mx-auto">
                Let's discuss how we can help transform your business with our digital solutions.
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <div className="relative group">
                  <div className="absolute inset-0 translate-x-2 translate-y-2 bg-black transition-transform group-hover:translate-x-3 group-hover:translate-y-3" />
                  <Button
                    asChild
                    className="relative bg-white hover:bg-white text-black font-black uppercase tracking-wider px-12 py-8 text-xl border-4 border-black rounded-none"
                  >
                    <Link to="/contact">
                      Contact Us
                      <ArrowRight className="w-6 h-6 ml-3" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Services;
