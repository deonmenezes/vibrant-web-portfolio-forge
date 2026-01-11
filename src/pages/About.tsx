import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PageTransition } from "@/components/PageTransition";
import Example from "../components/image-gallery";
import { motion, useScroll, useSpring, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Users,
  Target,
  Award,
  TrendingUp,
  Lightbulb,
  CheckCircle,
  Users2,
  Heart,
  Sparkles,
  Star,
  Zap,
  Shield,
  ArrowRight,
  ArrowUpRight
} from "lucide-react";

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
const AboutMarquee = ({ text, reverse = false }: { text: string; reverse?: boolean }) => (
  <div className="overflow-hidden whitespace-nowrap border-y-4 border-white bg-black py-4">
    <motion.div
      animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      className="inline-flex"
    >
      {[...Array(4)].map((_, idx) => (
        <span key={idx} className="inline-flex items-center gap-8 px-8 font-black text-2xl md:text-3xl text-white uppercase">
          <span>{text}</span>
          <span className="w-4 h-4 bg-vision-gold rotate-45" />
          <span>{text}</span>
          <span className="w-4 h-4 bg-electric rotate-45" style={{ backgroundColor: colors.electric }} />
        </span>
      ))}
    </motion.div>
  </div>
);

// Neobrutalist stat block
const NeoStatBlock = ({ value, label, color, index }: { value: string; label: string; color: string; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, rotate: -5 }}
      animate={isInView ? { opacity: 1, y: 0, rotate: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      <motion.div
        className="absolute inset-0"
        animate={{
          x: isHovered ? 8 : 4,
          y: isHovered ? 8 : 4,
        }}
        style={{ backgroundColor: color }}
      />
      <div className="relative bg-black border-4 border-white p-6 md:p-8 text-center">
        <motion.div
          animate={{ scale: isHovered ? 1.1 : 1 }}
          className="text-4xl md:text-6xl font-black text-vision-gold mb-2"
        >
          {value}
        </motion.div>
        <div className="text-white font-bold uppercase tracking-wider text-sm md:text-base">
          {label}
        </div>
      </div>
    </motion.div>
  );
};

// Neobrutalist value card
const NeoValueCard = ({ title, description, icon: Icon, color, index }: { title: string; description: string; icon: any; color: string; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const rotations = [-2, 1.5, -1];
  const rotation = rotations[index % rotations.length];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, rotate: rotation }}
      animate={isInView ? { opacity: 1, y: 0, rotate: rotation } : {}}
      whileHover={{ rotate: 0, scale: 1.02 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group cursor-pointer"
    >
      <motion.div
        className="absolute inset-0"
        animate={{
          x: isHovered ? 10 : 5,
          y: isHovered ? 10 : 5,
        }}
        style={{ backgroundColor: color }}
      />
      <div className="relative bg-black border-4 border-white p-8">
        {/* Icon */}
        <motion.div
          animate={{ rotate: isHovered ? 360 : 0 }}
          transition={{ duration: 0.6 }}
          className="w-16 h-16 border-4 border-white flex items-center justify-center mb-6"
          style={{ backgroundColor: color }}
        >
          <Icon className="w-8 h-8 text-black" />
        </motion.div>

        <h3 className="text-2xl font-black text-white uppercase mb-4">{title}</h3>
        <p className="text-white/70 font-medium leading-relaxed">{description}</p>

        {/* Hover indicator */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isHovered ? "100%" : 0 }}
          className="absolute bottom-0 left-0 h-1"
          style={{ backgroundColor: color }}
        />
      </div>
    </motion.div>
  );
};

const About = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const stats = [
    { value: "50+", label: "Projects Completed", color: colors.gold },
    { value: "15+", label: "Expert Team Members", color: colors.electric },
    { value: "10+", label: "Years Experience", color: colors.coral },
    { value: "30+", label: "Happy Clients", color: colors.violet },
  ];

  const values = [
    {
      title: "Innovation",
      description: "We stay at the forefront of technology trends and continuously explore new approaches to solve complex problems.",
      icon: Lightbulb,
      color: colors.electric,
    },
    {
      title: "Quality",
      description: "We never compromise on quality, ensuring every project meets the highest standards of performance and reliability.",
      icon: Award,
      color: colors.coral,
    },
    {
      title: "Collaboration",
      description: "We believe in working closely with our clients as true partners fostering open communication and mutual respect.",
      icon: Users,
      color: colors.violet,
    },
  ];

  return (
    <PageTransition>
      <div ref={containerRef} className="min-h-screen flex flex-col bg-black">
        {/* Progress Bar */}
        <motion.div
          style={{ scaleX }}
          className="fixed top-0 left-0 right-0 h-2 bg-vision-gold origin-left z-[60]"
        />

        <Navbar />

        {/* Hero Section - Neobrutalist */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
          {/* Animated grid background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(${colors.gold}40 1px, transparent 1px), linear-gradient(90deg, ${colors.gold}40 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }} />
          </div>

          {/* Floating shapes */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-20 right-20 w-32 h-32 border-4 border-vision-gold"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-40 left-20 w-24 h-24"
            style={{ backgroundColor: colors.electric }}
          />
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute top-1/3 left-1/4 w-16 h-16 bg-coral rotate-45"
            style={{ backgroundColor: colors.coral }}
          />

          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-5xl mx-auto"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: -2 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block relative mb-8"
              >
                <div className="absolute inset-0 translate-x-2 translate-y-2 bg-vision-gold" />
                <div className="relative bg-black border-4 border-white px-6 py-3 flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-vision-gold" />
                  <span className="text-white font-black uppercase tracking-wider">About Virelity</span>
                </div>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 uppercase"
              >
                <span className="text-white">Our</span>
                <br />
                <span className="text-vision-gold relative inline-block">
                  Story
                  <motion.div
                    className="absolute -bottom-2 left-0 h-4 bg-vision-gold/30 w-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  />
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-medium mb-12"
              >
                Learn about our journey, our mission, and the values that drive us to create exceptional digital experiences.
              </motion.p>

              {/* Scroll indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
                className="inline-flex flex-col items-center gap-2"
              >
                <span className="text-white/50 font-bold uppercase text-sm tracking-widest">Scroll</span>
                <div className="w-6 h-12 border-4 border-white/50 relative">
                  <motion.div
                    animate={{ y: [0, 20, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="w-2 h-2 bg-vision-gold absolute top-2 left-1/2 -translate-x-1/2"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Marquee */}
        <AboutMarquee text="Digital Excellence" />

        {/* Stats Section */}
        <section className="py-20 md:py-32 bg-black">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 translate-x-2 translate-y-2 bg-electric" style={{ backgroundColor: colors.electric }} />
                <h2 className="relative bg-black border-4 border-white px-8 py-4 text-3xl md:text-4xl font-black text-white uppercase">
                  Our Impact
                </h2>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => (
                <NeoStatBlock key={stat.label} {...stat} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-20 md:py-32 bg-black border-y-4 border-white">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Gallery Section */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 translate-x-4 translate-y-4 bg-vision-gold" />
                <div className="relative bg-black border-4 border-white p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 bg-vision-gold border-4 border-white flex items-center justify-center">
                      <Users2 className="w-7 h-7 text-black" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white uppercase">Meet Our Team</h3>
                      <p className="text-white/60 font-medium">The talented individuals behind our success</p>
                    </div>
                  </div>
                  <Example />
                </div>
              </motion.div>

              {/* Content Section */}
              <div className="space-y-8">
                {/* Who We Are */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute inset-0 translate-x-4 translate-y-4 transition-all duration-300 group-hover:translate-x-6 group-hover:translate-y-6" style={{ backgroundColor: colors.electric }} />
                  <div className="relative bg-black border-4 border-white p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 border-4 border-white flex items-center justify-center" style={{ backgroundColor: colors.electric }}>
                        <Target className="w-7 h-7 text-black" />
                      </div>
                      <h3 className="text-2xl font-black text-white uppercase">Who We Are</h3>
                    </div>
                    <p className="text-white/70 font-medium mb-4 leading-relaxed">
                      Founded in 2025, Virelity.com has been at the forefront of digital innovation, helping businesses transform their online presence and leverage technology to achieve their goals.
                    </p>
                    <p className="text-white/70 font-medium leading-relaxed">
                      Our team of expert designers, developers, and strategists combines creativity with technical expertise to deliver solutions that not only look great but perform exceptionally well.
                    </p>
                  </div>
                </motion.div>

                {/* Our Mission */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute inset-0 translate-x-4 translate-y-4 transition-all duration-300 group-hover:translate-x-6 group-hover:translate-y-6" style={{ backgroundColor: colors.violet }} />
                  <div className="relative bg-black border-4 border-white p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 border-4 border-white flex items-center justify-center" style={{ backgroundColor: colors.violet }}>
                        {/* <Zap className="w-7 h-7 text-black" /> */}
                      </div>
                      <h3 className="text-2xl font-black text-white uppercase">Our Mission</h3>
                    </div>
                    <p className="text-white/70 font-medium mb-6 leading-relaxed">
                      To empower businesses through innovative digital solutions that drive growth, enhance user experiences, and create lasting value in an ever-evolving digital landscape.
                    </p>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="relative inline-block group/btn">
                      <div className="absolute inset-0 translate-x-2 translate-y-2 bg-white transition-all duration-200 group-hover/btn:translate-x-3 group-hover/btn:translate-y-3" />
                      <Link
                        to="/team"
                        className="relative flex items-center gap-2 bg-vision-gold text-black font-black uppercase tracking-wider px-6 py-3 border-4 border-black"
                      >
                        Meet Our Team
                        <ArrowRight className="w-5 h-5" />
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Marquee */}
        <AboutMarquee text="Innovation & Quality" reverse />

        {/* Our Values Section */}
        <section className="py-20 md:py-32 bg-black">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: 3 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 2 }}
                viewport={{ once: true }}
                className="inline-block relative mb-6"
              >
                <div className="absolute inset-0 translate-x-2 translate-y-2" style={{ backgroundColor: colors.coral }} />
                <div className="relative bg-black border-4 border-white px-6 py-3 flex items-center gap-3">
                  <Star className="w-6 h-6 text-vision-gold" />
                  <span className="text-white font-black uppercase tracking-wider">Our Values</span>
                </div>
              </motion.div>

              <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-6">
                What <span className="text-vision-gold">Drives</span> Us
              </h2>
              <p className="text-xl text-white/60 max-w-2xl mx-auto font-medium">
                Our core values shape everything we do and guide our approach to creating exceptional digital experiences.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <NeoValueCard key={value.title} {...value} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-vision-gold border-y-4 border-black relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(black 2px, transparent 2px), linear-gradient(90deg, black 2px, transparent 2px)`,
              backgroundSize: '40px 40px'
            }} />
          </div>

          {/* Floating shapes */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="absolute top-10 right-10 w-40 h-40 border-4 border-black opacity-20"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-10 left-10 w-32 h-32 bg-black opacity-10"
          />

          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-block relative mb-8"
              >
                <div className="absolute inset-0 translate-x-2 translate-y-2 bg-black" />
                <div className="relative bg-white border-4 border-black px-6 py-3 flex items-center gap-3">
                  <Shield className="w-6 h-6 text-black" />
                  <span className="text-black font-black uppercase tracking-wider">Ready to Start?</span>
                </div>
              </motion.div>

              <h2 className="text-5xl md:text-7xl font-black text-black uppercase mb-6">
                Ready to Work<br />With Us?
              </h2>
              <p className="text-xl md:text-2xl text-black/70 mb-12 max-w-2xl mx-auto font-medium">
                Let's collaborate to create digital solutions that elevate your brand and drive results.
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative inline-block group"
              >
                <div className="absolute inset-0 translate-x-3 translate-y-3 bg-black transition-all duration-200 group-hover:translate-x-4 group-hover:translate-y-4" />
                <Button
                  asChild
                  className="relative bg-white hover:bg-white text-black font-black uppercase tracking-wider px-12 py-8 text-xl border-4 border-black rounded-none"
                >
                  <Link to="/contact" className="flex items-center gap-3">
                    Get in Touch
                    <ArrowUpRight className="w-6 h-6" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default About;
