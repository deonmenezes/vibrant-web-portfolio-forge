import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Sparkles, Zap, Target, TrendingUp, BookOpen, Award, ArrowRight, Check, Lock, Clock } from "lucide-react";

const BookPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isLocked, setIsLocked] = useState(true);
  
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  
  const backgroundY = useTransform(smoothProgress, [0, 1], ['0%', '50%']);
  const heroY = useTransform(smoothProgress, [0, 0.3], ['0%', '20%']);
  const heroOpacity = useTransform(smoothProgress, [0, 0.3], [1, 0]);

  // Countdown timer to New Year 2026
  useEffect(() => {
    const calculateTimeLeft = () => {
      const newYear2026 = new Date('2026-01-01T00:00:00').getTime();
      const now = new Date().getTime();
      const difference = newYear2026 - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
        setIsLocked(true);
      } else {
        setIsLocked(false);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
    }
  };

  const features = [
    { icon: Sparkles, title: "AI-First Approach", desc: "Learn to leverage AI as your operating layer" },
    { icon: Target, title: "System Mastery", desc: "Build businesses that work without you" },
    { icon: TrendingUp, title: "Scale Intelligently", desc: "From chaos to clarity to growth" },
    { icon: Zap, title: "Practical Frameworks", desc: "No theory—only battle-tested systems" }
  ];

  const benefits = [
    "Why NOW is the best time in history to build",
    "Transform from chaos to systematic growth",
    "Master the 7 foundational business functions",
    "Build systems that scale without burnout",
    "Leadership frameworks for modern founders",
    "AI integration for competitive advantage"
  ];

  // Countdown Timer Component
  const CountdownTimer = () => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 mb-8"
    >
      <div className="flex items-center justify-center gap-3 mb-6">
        <Clock className="w-5 h-5 text-gray-400" />
        <h3 className="text-lg font-semibold text-gray-300 tracking-tight">Available January 1, 2026</h3>
      </div>
      <div className="grid grid-cols-4 gap-3">
        {[
          { label: 'Days', value: timeLeft.days },
          { label: 'Hours', value: timeLeft.hours },
          { label: 'Min', value: timeLeft.minutes },
          { label: 'Sec', value: timeLeft.seconds }
        ].map((item, i) => (
          <div
            key={i}
            className="text-center"
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-4 border border-white/10 mb-2">
              <div className="text-4xl font-semibold text-white tabular-nums tracking-tight">
                {String(item.value).padStart(2, '0')}
              </div>
            </div>
            <div className="text-xs text-gray-500 font-medium tracking-wide">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden font-sans antialiased">
      {/* Subtle Background Gradient */}
      <motion.div 
        className="fixed inset-0 pointer-events-none"
        style={{ y: backgroundY }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 via-black to-black" />
        <div className="absolute top-0 left-1/3 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-1/3 w-[800px] h-[800px] bg-purple-500/5 rounded-full blur-[150px]" />
      </motion.div>

      {/* Minimal Grid Pattern */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} />
      </div>

      <Navbar />

      <main className="relative z-10">
        {/* Hero Section */}
        <motion.section 
          className="min-h-screen flex items-center justify-center px-4 pt-20"
          style={{ y: heroY, opacity: heroOpacity }}
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-7xl w-full"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left: Book Cover */}
              <motion.div 
                variants={itemVariants}
                className="flex justify-center md:justify-end"
              >
                <motion.div
                  className="relative group cursor-pointer"
                  whileHover={{ scale: 1.05, rotateY: 5 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  style={{
                    transform: `perspective(1000px) rotateY(${mousePosition.x * 0.5}deg) rotateX(${-mousePosition.y * 0.5}deg)`
                  }}
                >
                  {/* Glow Effect */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500" />
                  
                  {/* Book Cover */}
                  <div className="relative w-80 h-[480px] bg-gradient-to-br from-amber-500 via-orange-500 to-amber-600 rounded-2xl shadow-2xl overflow-hidden border border-amber-400/30">
                    {/* Shine Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent"
                      animate={{
                        x: ['-100%', '200%'],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatDelay: 5,
                        ease: "easeInOut"
                      }}
                    />
                    
                    {/* Book Content */}
                    <div className="relative h-full p-8 flex flex-col justify-between">
                      <div>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.5, duration: 0.6 }}
                          className="inline-block px-3 py-1 bg-black/30 backdrop-blur-sm rounded-full text-xs font-bold mb-4"
                        >
                          FOUNDER'S GUIDE
                        </motion.div>
                        <h3 className="text-4xl font-black leading-tight mb-3 drop-shadow-lg">
                          How to Build<br />a Business<br />in the Age<br />of AI
                        </h3>
                        <div className="h-1 w-20 bg-white/50 rounded-full" />
                      </div>
                      <div>
                        <p className="text-sm opacity-90 mb-2">Systems, Clarity & Leverage</p>
                        <p className="text-lg font-bold">Deon Menezes</p>
                      </div>
                    </div>
                    
                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 transform rotate-45 translate-x-16 -translate-y-16" />
                  </div>
                </motion.div>
              </motion.div>

              {/* Right: Hero Content */}
              <motion.div variants={itemVariants} className="space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 border border-amber-500/30 rounded-full text-amber-400 text-sm font-semibold"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>The Definitive Guide for Modern Founders</span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-black leading-tight">
                  Build a Business<br />
                  <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                    That Actually Works
                  </span>
                </h1>

                <p className="text-xl text-gray-400 leading-relaxed max-w-xl">
                  No shortcuts. No fantasies. Just proven frameworks for founders who are done with chaos and ready to build with clarity, systems, and AI leverage.
                </p>

                <div className="flex flex-wrap gap-4 pt-4">
                  {isLocked ? (
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="relative"
                    >
                      <Button 
                        disabled
                        className="bg-gray-800 text-gray-500 px-8 py-6 text-lg font-bold rounded-xl shadow-lg border border-gray-700 cursor-not-allowed relative overflow-hidden"
                      >
                        <Lock className="mr-2 w-5 h-5" />
                        Locked Until 2026
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.a
                      href="#buy"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-8 py-6 text-lg font-bold rounded-xl shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 border border-amber-400/30">
                        Get the Book
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </motion.a>
                  )}
                  <motion.a
                    href="#preview"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button variant="outline" className="border-amber-500/30 text-amber-400 hover:bg-amber-500/10 px-8 py-6 text-lg font-bold rounded-xl">
                      Preview Chapters
                      <BookOpen className="ml-2 w-5 h-5" />
                    </Button>
                  </motion.a>
                </div>

                {/* Countdown Timer */}
                {isLocked && <CountdownTimer />}

                {/* Stats */}
                <motion.div 
                  variants={itemVariants}
                  className="flex gap-8 pt-8 border-t border-gray-800"
                >
                  {[
                    { label: "Chapters", value: "12" },
                    { label: "Frameworks", value: "50+" },
                    { label: "Pages", value: "250+" }
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + i * 0.1 }}
                    >
                      <div className="text-3xl font-black text-amber-400">{stat.value}</div>
                      <div className="text-sm text-gray-500">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.section>

        {/* Features Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="py-24 px-4 relative"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-black mb-4">
                Why This Book Is <span className="text-amber-400">Different</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                This isn't theory. It's a battle-tested playbook for building real businesses in the AI era.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-amber-500/50 transition-all duration-300 overflow-hidden"
                >
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-orange-600/0 group-hover:from-amber-500/10 group-hover:to-orange-600/10 transition-all duration-500" />
                  
                  <div className="relative">
                    <div className="w-14 h-14 bg-amber-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500/20 transition-colors duration-300 border border-amber-500/30">
                      <feature.icon className="w-7 h-7 text-amber-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* What You'll Learn Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-24 px-4 relative"
        >
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              {/* Left: Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl md:text-5xl font-black mb-6">
                  What You'll <span className="text-amber-400">Master</span>
                </h2>
                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                  A comprehensive framework covering everything from clarity to capability to courage—the three transformations every founder must make.
                </p>
                
                <div className="space-y-4">
                  {benefits.map((benefit, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-amber-500/10 rounded-lg flex items-center justify-center border border-amber-500/30 group-hover:bg-amber-500/20 transition-colors duration-300">
                        <Check className="w-5 h-5 text-amber-400" />
                      </div>
                      <p className="text-gray-300 pt-1">{benefit}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right: Decorative Element */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative aspect-square">
                  {/* Rotating Ring */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-2 border-dashed border-amber-500/30 rounded-full"
                  />
                  <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-8 border-2 border-dashed border-orange-500/20 rounded-full"
                  />
                  
                  {/* Center Content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                        className="w-32 h-32 bg-gradient-to-br from-amber-500 to-orange-600 rounded-2xl shadow-2xl flex items-center justify-center mb-4 mx-auto"
                      >
                        <Award className="w-16 h-16 text-white" />
                      </motion.div>
                      <h3 className="text-2xl font-black text-amber-400">Proven</h3>
                      <p className="text-gray-400">Systems</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Author Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-24 px-4"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-sm rounded-3xl p-12 border border-gray-800 relative overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 20px 20px, rgba(251, 191, 36, 0.3) 1px, transparent 0)`,
                backgroundSize: '40px 40px'
              }} />
            </div>

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-black mb-6">
                About <span className="text-amber-400">Deon Menezes</span>
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                A founder and operator with hands-on experience building and scaling businesses using modern systems and AI. This book reflects his journey from chaos to clarity, combining real execution experience with practical frameworks for today's fast-moving business environment.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Not a theorist. Not a consultant. A founder who's been in the trenches and built the systems that work.
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* CTA Section */}
        <motion.section 
          id="buy"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="py-32 px-4 relative"
        >
          {/* Spotlight Effect */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[600px] h-[600px] bg-amber-500/20 rounded-full blur-[150px]" />
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center relative z-10"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ 
                duration: 5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="inline-block mb-8"
            >
              <div className="relative">
                <div className="absolute -inset-2 bg-gradient-to-r from-amber-500 to-orange-600 rounded-full blur-xl opacity-50" />
                <Sparkles className="relative w-16 h-16 text-amber-400" />
              </div>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-black mb-6">
              Ready to Build<br />
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                Something Real?
              </span>
            </h2>
            
            <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
              Stop guessing. Start building with systems that scale. Get the book that changes how you approach business forever.
            </p>

            {isLocked ? (
              <div className="space-y-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="inline-block"
                >
                  <Button 
                    disabled
                    className="bg-gray-800 text-gray-500 px-12 py-8 text-2xl font-black rounded-2xl shadow-2xl border-2 border-gray-700 cursor-not-allowed relative overflow-hidden"
                  >
                    <Lock className="mr-3 w-6 h-6" />
                    Locked Until New Year 2026
                  </Button>
                </motion.div>
                
                {/* Countdown Display */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-block bg-gradient-to-r from-red-500/10 to-orange-500/10 backdrop-blur-sm border border-red-500/30 rounded-xl px-8 py-4"
                >
                  <div className="flex items-center gap-4 text-red-400">
                    <Clock className="w-5 h-5 animate-pulse" />
                    <div className="flex gap-3 font-mono text-lg font-bold">
                      <span>{String(timeLeft.days).padStart(2, '0')}d</span>
                      <span>:</span>
                      <span>{String(timeLeft.hours).padStart(2, '0')}h</span>
                      <span>:</span>
                      <span>{String(timeLeft.minutes).padStart(2, '0')}m</span>
                      <span>:</span>
                      <span>{String(timeLeft.seconds).padStart(2, '0')}s</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            ) : (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Button className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-12 py-8 text-2xl font-black rounded-2xl shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/50 transition-all duration-300 border-2 border-amber-400/30">
                  Get Your Copy Now
                  <ArrowRight className="ml-3 w-6 h-6" />
                </Button>
              </motion.div>
            )}

            <p className="mt-6 text-gray-500 text-sm">
              {isLocked ? 'Pre-orders open January 1st, 2026' : 'Digital & print editions available now'}
            </p>

            {/* Decorative Elements */}
            <div className="flex justify-center gap-8 mt-16">
              {[
                { icon: BookOpen, text: "250+ Pages" },
                { icon: Target, text: "50+ Frameworks" },
                { icon: Zap, text: "Instant Access" }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 text-gray-400"
                >
                  <item.icon className="w-5 h-5 text-amber-400" />
                  <span className="text-sm font-semibold">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>
      </main>

      <Footer />

      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-500 to-orange-600 transform origin-left z-50"
        style={{ scaleX: smoothProgress }}
      />
    </div>
  );
};

export default BookPage;