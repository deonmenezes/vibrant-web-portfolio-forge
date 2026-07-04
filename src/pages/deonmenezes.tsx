import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { motion, useScroll, useSpring } from "framer-motion";
import { Award, BookOpen, Linkedin, Twitter, Mail, Instagram, Youtube, ArrowRight, Zap, Play, Globe } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";

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

const DeonMenezes = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  // Scroll progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const toggleVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
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

        {/* HERO SECTION - Neobrutalist with Video */}
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
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Content Side */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                {/* Badge */}
                <div className="inline-block">
                  <div className="relative group">
                    <div className="absolute inset-0 translate-x-2 translate-y-2 bg-vision-gold" />
                    <div className="relative bg-black border-4 border-white px-6 py-3 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-vision-gold" />
                      <span className="font-black uppercase tracking-widest text-white text-sm">Serial Entrepreneur & Author</span>
                    </div>
                  </div>
                </div>

                {/* Main Title */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-none">
                  <span className="text-white block">Deon</span>
                  <span className="text-vision-gold block">Menezes</span>
                </h1>

                {/* Subtitle */}
                <p className="text-xl md:text-2xl text-white/70 font-medium max-w-xl">
                  Founder of Virelity.com | AI Solutions Architect | Author of "Business in the Age of AI"
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-6">
                  <div className="relative">
                    <div className="absolute inset-0 translate-x-1 translate-y-1" style={{ backgroundColor: colors.electric }} />
                    <div className="relative bg-black border-2 border-white px-4 py-3">
                      <div className="text-2xl font-black text-vision-gold">7+</div>
                      <div className="text-xs text-white uppercase tracking-wider">Years Experience</div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 translate-x-1 translate-y-1" style={{ backgroundColor: colors.coral }} />
                    <div className="relative bg-black border-2 border-white px-4 py-3">
                      <div className="text-2xl font-black text-vision-gold">50+</div>
                      <div className="text-xs text-white uppercase tracking-wider">Projects Delivered</div>
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute inset-0 translate-x-1 translate-y-1" style={{ backgroundColor: colors.violet }} />
                    <div className="relative bg-black border-2 border-white px-4 py-3">
                      <div className="text-2xl font-black text-vision-gold">2026</div>
                      <div className="text-xs text-white uppercase tracking-wider">Book Launch</div>
                    </div>
                  </div>
                </div>

                {/* Social Links - Neobrutalist */}
                <div className="flex gap-4">
                  {[
                    { icon: <Globe className="w-5 h-5" />, href: "/deon", color: colors.gold },
                    { icon: <Instagram className="w-5 h-5" />, href: "https://instagram.com/deon_tech", color: colors.coral },
                    { icon: <Twitter className="w-5 h-5" />, href: "https://x.com/DeonMen", color: colors.cyan },
                    { icon: <Youtube className="w-5 h-5" />, href: "https://youtube.com/@deonmenezes", color: colors.coral },
                    { icon: <Linkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/deon-menezes-a82552254/", color: colors.electric },
                    { icon: <Mail className="w-5 h-5" />, href: "mailto:deon.menezes@virelity.com", color: colors.violet },
                  ].map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative group"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="absolute inset-0 translate-x-1 translate-y-1" style={{ backgroundColor: social.color }} />
                      <div className="relative w-12 h-12 bg-black border-2 border-white flex items-center justify-center text-white group-hover:text-vision-gold transition-colors">
                        {social.icon}
                      </div>
                    </motion.a>
                  ))}
                </div>

                {/* Full personal portfolio */}
                <motion.a
                  href="/deon"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group inline-block mt-6"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <div className="absolute inset-0 translate-x-1 translate-y-1" style={{ backgroundColor: colors.gold }} />
                  <div className="relative bg-black border-2 border-white px-6 py-3 text-white font-black uppercase tracking-wider text-sm flex items-center gap-2 group-hover:text-vision-gold transition-colors">
                    Full portfolio · virelity.com/deon <ArrowRight className="w-4 h-4" />
                  </div>
                </motion.a>
              </motion.div>

              {/* Video Side */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                {/* Neobrutalist Video Frame */}
                <div className="relative">
                  <div className="absolute inset-0 translate-x-4 translate-y-4 bg-vision-gold" />
                  <div className="relative border-4 border-white overflow-hidden">
                    <video
                      ref={videoRef}
                      src="/videos/deondoesresearch.mp4"
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full aspect-video object-cover"
                    />
                    {/* Play/Pause Button */}
                    <motion.button
                      onClick={toggleVideo}
                      className="absolute bottom-4 right-4 w-14 h-14 bg-black border-2 border-white flex items-center justify-center text-white hover:bg-vision-gold hover:text-black transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Play className={`w-6 h-6 ${isPlaying ? 'opacity-50' : ''}`} fill={isPlaying ? 'currentColor' : 'none'} />
                    </motion.button>
                  </div>
                </div>

                {/* Floating decoration */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-8 -right-8 w-24 h-24 border-4 border-vision-gold hidden lg:block"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* MARQUEE */}
        <section className="py-4 bg-vision-gold border-y-4 border-black">
          <Marquee speed={25}>
            <span className="inline-flex items-center gap-8 px-8 font-black text-2xl md:text-3xl text-black uppercase">
              <span>AI Solutions</span>
              <span className="w-4 h-4 bg-black rounded-full" />
              <span>Business Strategy</span>
              <span className="w-4 h-4 bg-black rounded-full" />
              <span>Systems Design</span>
              <span className="w-4 h-4 bg-black rounded-full" />
              <span>Author</span>
              <span className="w-4 h-4 bg-black rounded-full" />
              <span>Entrepreneur</span>
              <span className="w-4 h-4 bg-black rounded-full" />
            </span>
          </Marquee>
        </section>

        {/* About Section - Neobrutalist */}
        <section className="py-20 bg-white border-y-4 border-black">
          <div className="container max-w-6xl mx-auto px-4">
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
                    <span className="font-black uppercase tracking-widest text-white">About Me</span>
                  </div>
                </div>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-black uppercase mb-4">
                Meet <span className="text-vision-gold">Deon</span>
              </h2>
            </motion.div>

            {/* Bio Card - Neobrutalist */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="relative">
                <div className="absolute inset-0 translate-x-3 translate-y-3 bg-vision-gold" />
                <div className="relative bg-black border-4 border-black p-8 md:p-12">
                  <p className="text-lg text-white leading-relaxed mb-6">
                    Deon Menezes is a serial entrepreneur, author, and AI solutions architect with over 7 years of experience in building and scaling businesses. As the founder of Virelity.com, he has helped numerous organizations leverage technology and artificial intelligence to achieve operational excellence and growth.
                  </p>
                  <p className="text-lg text-white/80 leading-relaxed">
                    Deon's journey is marked by a relentless pursuit of innovation, a commitment to system clarity, and a passion for empowering the next generation of founders. His upcoming book, "Business in the Age of AI," distills his learnings, failures, and frameworks into actionable strategies for modern entrepreneurs.
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Profile Card */}
              <motion.div
                initial={{ opacity: 0, y: 30, rotate: -2 }}
                whileInView={{ opacity: 1, y: 0, rotate: -2 }}
                whileHover={{ rotate: 0, scale: 1.02 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 translate-x-3 translate-y-3" style={{ backgroundColor: colors.coral }} />
                <div className="relative bg-white border-4 border-black p-8">
                  <div className="flex flex-col items-center">
                    <div className="relative mb-6">
                      <div className="absolute inset-0 translate-x-2 translate-y-2 bg-vision-gold rounded-full" />
                      <img
                        src="/deonmenezes.png"
                        alt="Deon Menezes"
                        className="relative w-40 h-40 rounded-full object-cover border-4 border-black"
                      />
                    </div>
                    <h3 className="text-2xl font-black text-black uppercase mb-2">Founder & CEO</h3>
                    <p className="text-gray-700 font-medium mb-4">Virelity.com</p>
                    <div className="flex items-center gap-2 bg-vision-gold px-4 py-2 border-2 border-black">
                      <Award className="h-5 w-5 text-black" />
                      <span className="font-black text-black uppercase text-sm">7+ Years Experience</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Book Card */}
              <motion.div
                initial={{ opacity: 0, y: 30, rotate: 2 }}
                whileInView={{ opacity: 1, y: 0, rotate: 2 }}
                whileHover={{ rotate: 0, scale: 1.02 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 translate-x-3 translate-y-3" style={{ backgroundColor: colors.cyan }} />
                <div className="relative bg-black border-4 border-white p-8 h-full flex flex-col justify-center">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 flex items-center justify-center border-2 border-vision-gold" style={{ backgroundColor: colors.violet }}>
                      <BookOpen className="h-7 w-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white uppercase mb-1">Author</h3>
                      <p className="text-xl font-black text-vision-gold">Business in the Age of AI</p>
                      <div className="inline-block mt-2 bg-vision-gold px-3 py-1 border-2 border-black">
                        <span className="font-black text-black text-sm uppercase">Launching 2026</span>
                      </div>
                    </div>
                  </div>
                  <p className="text-white/80 leading-relaxed">
                    A founder's guide to system clarity, strategies, and operational frameworks for the AI era. Drawing from years of real-world experience building and scaling companies.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Second Marquee */}
        <section className="py-4 bg-black border-y-4 border-white">
          <Marquee reverse speed={20}>
            <span className="inline-flex items-center gap-8 px-8 font-black text-2xl md:text-3xl text-white uppercase">
              <span>Innovation</span>
              <span className="w-4 h-4 bg-vision-gold rounded-full" />
              <span>Leadership</span>
              <span className="w-4 h-4 bg-vision-gold rounded-full" />
              <span>Technology</span>
              <span className="w-4 h-4 bg-vision-gold rounded-full" />
              <span>Growth</span>
              <span className="w-4 h-4 bg-vision-gold rounded-full" />
            </span>
          </Marquee>
        </section>

        {/* Expertise Section - Neobrutalist */}
        <section className="py-20 bg-black">
          <div className="container max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-block mb-6">
                <div className="relative">
                  <div className="absolute inset-0 translate-x-2 translate-y-2" style={{ backgroundColor: colors.violet }} />
                  <div className="relative bg-black border-4 border-white px-6 py-3">
                    <span className="font-black uppercase tracking-widest text-white">What I Do</span>
                  </div>
                </div>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-4">
                Areas of <span className="text-vision-gold">Expertise</span>
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "AI Solutions",
                  description: "Architecting and implementing AI-powered systems that drive business transformation and operational efficiency.",
                  color: colors.electric,
                  rotation: -2
                },
                {
                  title: "Business Strategy",
                  description: "Developing comprehensive frameworks and strategies for sustainable growth in the age of artificial intelligence.",
                  color: colors.coral,
                  rotation: 1
                },
                {
                  title: "Systems Design",
                  description: "Creating clarity through well-designed systems that scale with your business and adapt to changing needs.",
                  color: colors.cyan,
                  rotation: -1
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, rotate: item.rotation }}
                  whileInView={{ opacity: 1, y: 0, rotate: item.rotation }}
                  whileHover={{ rotate: 0, scale: 1.05, y: -10 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <div className="absolute inset-0 translate-x-3 translate-y-3" style={{ backgroundColor: item.color }} />
                  <div className="relative bg-white border-4 border-black p-6 h-full">
                    <h3 className="text-xl font-black text-black uppercase mb-3">{item.title}</h3>
                    <p className="text-gray-700 font-medium leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
                Let's Work
                <br />
                <span className="text-white">Together</span>
              </h2>
              <p className="text-xl text-black/70 font-medium mb-10 max-w-2xl mx-auto">
                Ready to transform your business with AI and innovative strategies? Let's connect.
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <div className="relative group">
                  <div className="absolute inset-0 translate-x-2 translate-y-2 bg-black transition-transform group-hover:translate-x-3 group-hover:translate-y-3" />
                  <a
                    href="https://wa.me/918104796542?text=Hi%20Deon!%20I%27d%20love%20to%20connect%20and%20discuss%20potential%20collaboration."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="relative bg-white hover:bg-white text-black font-black uppercase tracking-wider px-12 py-6 text-xl border-4 border-black inline-flex items-center gap-3"
                  >
                    Get in Touch
                    <ArrowRight className="w-6 h-6" />
                  </a>
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

export default DeonMenezes;