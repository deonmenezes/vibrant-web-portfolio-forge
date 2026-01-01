import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";
import { Sparkles, Award, BookOpen, Linkedin, Twitter, Mail, Instagram, Youtube } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const DeonMenezes = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [currentPos, setCurrentPos] = useState({ x: 0, y: 0 });
  const [trails, setTrails] = useState<Array<{ x: number; y: number; opacity: number; scale: number }>>([]);
  const animationFrameRef = useRef<number>();
  const trailPositions = useRef<Array<{ x: number; y: number; scale: number }>>([]);

  useEffect(() => {
    // Initialize trail positions
    trailPositions.current = Array(8).fill(null).map(() => ({ 
      x: window.innerWidth / 2, 
      y: window.innerHeight / 2, 
      scale: 1 
    }));

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const animate = () => {
      setCurrentPos((prev) => {
        const ease = 0.12;
        const newX = prev.x + (mousePos.x - prev.x) * ease;
        const newY = prev.y + (mousePos.y - prev.y) * ease;

        // Calculate speed for trail effect
        const speed = Math.sqrt(
          Math.pow(newX - mousePos.x, 2) + Math.pow(newY - mousePos.y, 2)
        );

        // Update reveal clip path
        if (revealRef.current) {
          const blobSize = 200 + Math.min(speed * 2, 100);
          revealRef.current.style.clipPath = `circle(${blobSize}px at ${newX}px ${newY}px)`;
        }

        // Update trail positions
        trailPositions.current.unshift({ 
          x: newX, 
          y: newY, 
          scale: 1 - (speed / 100) * 0.3 
        });
        trailPositions.current.pop();

        // Update trails state
        const newTrails = trailPositions.current.map((pos, index) => {
          const opacity = 1 - (index / 8);
          const scale = pos.scale - (index / 8) * 0.2;
          return { x: pos.x, y: pos.y, opacity: opacity * 0.5, scale };
        });
        setTrails(newTrails);

        // Check element inversion
        checkElementInversion(nameRef.current, newX, newY);
        checkElementInversion(socialRef.current, newX, newY);

        return { x: newX, y: newY };
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const checkElementInversion = (element: HTMLElement | null, cursorX: number, cursorY: number) => {
      if (!element) return;
      const rect = element.getBoundingClientRect();
      const blobRadius = 100;
      
      const isInside = (
        cursorX > rect.left - blobRadius &&
        cursorX < rect.right + blobRadius &&
        cursorY > rect.top - blobRadius &&
        cursorY < rect.bottom + blobRadius
      );

      if (isInside) {
        element.classList.add('text-inverted');
      } else {
        element.classList.remove('text-inverted');
      }
    };

    document.addEventListener('mousemove', handleMouseMove);
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [mousePos]);

  return (
    <PageTransition>
      <Navbar />
      <style>{`
        .hero-section {
          cursor: none;
        }
        
        .text-inverted {
          color: white !important;
          transition: color 0.3s ease;
        }

        .text-inverted .lucide {
          color: white !important;
        }

        .wave-line {
          position: absolute;
          width: 200%;
          height: 2px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          left: -50%;
          pointer-events: none;
        }

        .wave-line:nth-child(1) {
          top: 20%;
          animation: wave1 8s ease-in-out infinite;
        }

        .wave-line:nth-child(2) {
          top: 40%;
          animation: wave2 10s ease-in-out infinite;
          animation-delay: -2s;
        }

        .wave-line:nth-child(3) {
          top: 60%;
          animation: wave3 12s ease-in-out infinite;
          animation-delay: -4s;
        }

        .wave-line:nth-child(4) {
          top: 80%;
          animation: wave1 9s ease-in-out infinite;
          animation-delay: -6s;
        }

        @keyframes wave1 {
          0%, 100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(-25%) translateY(-10px); }
        }

        @keyframes wave2 {
          0%, 100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(-30%) translateY(15px); }
        }

        @keyframes wave3 {
          0%, 100% { transform: translateX(0) translateY(0); }
          50% { transform: translateX(-20%) translateY(-15px); }
        }

        .blob-trail {
          position: fixed;
          border-radius: 50%;
          pointer-events: none;
          background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%);
          mix-blend-mode: screen;
        }
      `}</style>

      <div className="min-h-screen bg-background">
        {/* Hero Section with Blob Cursor Effect */}
        <section 
          ref={heroRef}
          className="hero-section relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        >
          {/* Primary Background Layer */}
          <div 
            className="absolute inset-0 z-0"
            style={{
              backgroundImage: 'url(/deonmenezes.png)',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundColor: '#ffffff',
              transform: `translate(${-(mousePos.x / window.innerWidth - 0.5) * 30}px, ${-(mousePos.y / window.innerHeight - 0.5) * 30}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          />

          {/* Reveal Layer with Clip Path */}
          <div 
            ref={revealRef}
            className="absolute inset-0 z-10"
            style={{
              backgroundImage: 'url(/deonmenezes.png)',
              backgroundSize: 'contain',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              backgroundColor: '#ffffff',
              clipPath: 'circle(0% at 50% 50%)',
              filter: 'grayscale(100%) contrast(1.2)',
              transform: `translate(${-(mousePos.x / window.innerWidth - 0.5) * 30}px, ${-(mousePos.y / window.innerHeight - 0.5) * 30}px)`,
              transition: 'transform 0.1s ease-out'
            }}
          />

          {/* Animated Wave Lines */}
          <div className="absolute inset-0 z-20 pointer-events-none opacity-30">
            <div className="wave-line"></div>
            <div className="wave-line"></div>
            <div className="wave-line"></div>
            <div className="wave-line"></div>
          </div>

          {/* Blob Trails */}
          {trails.map((trail, index) => (
            <div
              key={index}
              className="blob-trail z-30"
              style={{
                left: `${trail.x}px`,
                top: `${trail.y}px`,
                width: '180px',
                height: '180px',
                opacity: trail.opacity,
                transform: `translate(-50%, -50%) scale(${trail.scale})`,
              }}
            />
          ))}

          {/* Name in Top Left */}
          <motion.div
            ref={nameRef}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed top-12 left-12 z-40 pointer-events-none"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: '4rem',
              fontWeight: 600,
              lineHeight: 0.95,
              letterSpacing: '-1px',
              color: '#000000',
              transition: 'color 0.3s ease'
            }}
          >
            <div>Deon</div>
            <div>Menezes</div>
          </motion.div>

          {/* Portfolio Link Top Right */}
          <motion.a
            href="#portfolio"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed top-16 right-12 z-40 text-xl font-medium tracking-wider hover:translate-y-[-2px] transition-all"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: '#000000',
              transition: 'color 0.3s ease, transform 0.3s ease'
            }}
          >
            PORTFOLIO
          </motion.a>

          {/* Social Icons Bottom Right */}
          <motion.div
            ref={socialRef}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="fixed bottom-12 right-12 z-40 flex gap-6"
          >
            <a 
              href="https://instagram.com/deonmenezes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:translate-y-[-4px] hover:scale-110 transition-all"
              style={{ color: '#000000', transition: 'color 0.3s ease, transform 0.3s ease' }}
            >
              <Instagram className="w-7 h-7" fill="currentColor" />
            </a>
            <a 
              href="https://x.com/DeonMen" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:translate-y-[-4px] hover:scale-110 transition-all"
              style={{ color: '#000000', transition: 'color 0.3s ease, transform 0.3s ease' }}
            >
              <Twitter className="w-7 h-7" fill="currentColor" />
            </a>
            <a 
              href="https://youtube.com/@deonmenezes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:translate-y-[-4px] hover:scale-110 transition-all"
              style={{ color: '#000000', transition: 'color 0.3s ease, transform 0.3s ease' }}
            >
              <Youtube className="w-7 h-7" fill="currentColor" />
            </a>
            <a 
              href="https://www.linkedin.com/in/deon-menezes-a82552254/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:translate-y-[-4px] hover:scale-110 transition-all"
              style={{ color: '#000000', transition: 'color 0.3s ease, transform 0.3s ease' }}
            >
              <Linkedin className="w-7 h-7" fill="currentColor" />
            </a>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-40"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-sm tracking-widest text-gray-800" style={{ mixBlendMode: 'difference' }}>SCROLL</span>
              <div className="w-px h-16 bg-gradient-to-b from-gray-800 to-transparent animate-pulse" style={{ mixBlendMode: 'difference' }}></div>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-background">
          <div className="container max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-blue-500/20 border border-primary/30 backdrop-blur-sm mb-8">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">About</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
                Meet Deon Menezes
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 opacity-50"></div>
                <div className="relative z-10">
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    Deon Menezes is a serial entrepreneur, author, and AI solutions architect with over 7 years of experience in building and scaling businesses. As the founder of Virelity.com, he has helped numerous organizations leverage technology and artificial intelligence to achieve operational excellence and growth.
                  </p>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    Deon's journey is marked by a relentless pursuit of innovation, a commitment to system clarity, and a passion for empowering the next generation of founders. His upcoming book, "Business in the Age of AI," distills his learnings, failures, and frameworks into actionable strategies for modern entrepreneurs.
                  </p>
                </div>
              </div>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-border"
              >
                <div className="flex flex-col items-center">
                  <img 
                    src="/deonmenezes.png" 
                    alt="Deon Menezes" 
                    className="w-48 h-48 rounded-full mb-6 object-cover border-4 border-primary shadow-xl" 
                  />
                  <h3 className="text-2xl font-bold text-foreground mb-2">Founder & CEO</h3>
                  <p className="text-muted-foreground text-center mb-4">Virelity.com</p>
                  <div className="flex items-center gap-2">
                    <Award className="h-6 w-6 text-yellow-500" />
                    <span className="font-medium text-yellow-500">7+ Years Experience</span>
                  </div>
                  <div className="mt-6 flex gap-4">
                    <a href="mailto:deon.menezes@virelity.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      <Mail className="h-6 w-6" />
                    </a>
                    <a href="https://www.linkedin.com/in/deon-menezes-a82552254/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      <Linkedin className="h-6 w-6" />
                    </a>
                    <a href="https://x.com/DeonMen" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                      <Twitter className="h-6 w-6" />
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-border flex flex-col justify-center"
              >
                <div className="flex items-start gap-3 mb-6">
                  <BookOpen className="h-8 w-8 text-blue-500 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Author</h3>
                    <p className="text-xl font-medium text-blue-500 mb-2">Business in the Age of AI</p>
                    <p className="text-muted-foreground mb-4">Launching 2026</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  A founder's guide to system clarity, strategies, and operational frameworks for the AI era. Drawing from years of real-world experience building and scaling companies, this book provides actionable insights for modern entrepreneurs navigating the rapidly evolving landscape of artificial intelligence.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Expertise Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900/50 to-black/50">
          <div className="container max-w-6xl mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                Areas of Expertise
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  title: "AI Solutions",
                  description: "Architecting and implementing AI-powered systems that drive business transformation and operational efficiency."
                },
                {
                  title: "Business Strategy",
                  description: "Developing comprehensive frameworks and strategies for sustainable growth in the age of artificial intelligence."
                },
                {
                  title: "Systems Design",
                  description: "Creating clarity through well-designed systems that scale with your business and adapt to changing needs."
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card/60 backdrop-blur-sm p-6 rounded-xl border border-border hover:border-primary/50 transition-all hover:transform hover:scale-105"
                >
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </PageTransition>
  );
};

export default DeonMenezes;