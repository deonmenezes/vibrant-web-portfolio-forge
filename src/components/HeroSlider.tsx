import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, PanInfo } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, ChevronLeft, ChevronRight } from 'lucide-react';
import { HoverImageEffect } from '@/components/custom/HoverImageEffect';

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2, suffix = "", className = "" }) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!hasAnimated) {
      let startTime;
      const step = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * end));
        if (progress >= 1) {
          setHasAnimated(true);
        } else {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    }
  }, [end, duration, hasAnimated]);

  return (
    <span className={className}>
      {count}
      {suffix}
    </span>
  );
};

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides = [
    {
      id: 1,
      badge: "Digital Innovation Agency",
      title: "We build AI Agents and Digital Marketing that transform businesses",
      highlights: [
        { text: "Increase productivity by", value: 100, suffix: "%", description: "through AI integration" },
        { text: "Boost sales by", value: 200, suffix: "%", description: "with our digital solutions" }
      ],
      description: "Virelity.com delivers cutting-edge AI agents, web solutions, mobile apps, and digital strategies that drive growth and innovation for modern businesses.",
      video: "/videos/homepage.mp4",
      poster: "/virelity_navbar.png",
      buttonText: "Explore AI Solutions",
      buttonLink: "/services/web-development"
    },
    {
      id: 2,
      badge: "AR/VR Innovation Studio",
      title: "Step Into the Future with Immersive AR & VR Experiences",
      highlights: [
        { text: "Increase engagement by", value: 300, suffix: "%", description: "with AR/VR marketing campaigns" },
        { text: "Reduce training costs by", value: 60, suffix: "%", description: "with VR simulations" }
      ],
      description: "Create unforgettable brand experiences and transform customer interactions with cutting-edge virtual and augmented reality solutions that captivate and convert.",
      video: "/videos/arservice.mp4",
      poster: "/virelity_navbar.png",
      buttonText: "Discover AR/VR",
      buttonLink: "/services/vr-ar-development"
    },
    {
      id: 3,
      badge: "3D Development Studio",
      title: "Bring Your Vision to Life in Three Dimensions",
      highlights: [
        { text: "Reduce development time by", value: 40, suffix: "%", description: "with 3D prototyping" },
        { text: "Increase conversions by", value: 150, suffix: "%", description: "with interactive 3D product views" }
      ],
      description: "From interactive 3D models to immersive environments, we create stunning three-dimensional experiences that captivate audiences and drive business results.",
      video: "/videos/3dservice.mp4",
      poster: "/virelity_navbar.png",
      buttonText: "View 3D Projects",
      buttonLink: "/services/3d-development"
    },
    {
      id: 4,
      badge: "UI/UX Design Agency",
      title: "Design Experiences That Users Love and Remember",
      highlights: [
        { text: "Improve user satisfaction by", value: 85, suffix: "%", description: "with UX optimization" },
        { text: "Increase user retention by", value: 200, suffix: "%", description: "with intuitive design" }
      ],
      description: "Human-centered design solutions that create engaging, intuitive, and conversion-focused digital experiences that users love to interact with.",
      video: "/videos/uiux.mp4",
      poster: "/virelity_navbar.png",
      buttonText: "See Design Work",
      buttonLink: "/services/ui-ux-design"
    },
    {
      id: 5,
      badge: "Mobile App Development",
      title: "Native & Cross-Platform Apps That Deliver Results",
      highlights: [
        { text: "Faster development by", value: 50, suffix: "%", description: "with cross-platform solutions" },
        { text: "App store approval rate", value: 98, suffix: "%", description: "for our mobile apps" }
      ],
      description: "Build powerful mobile applications for iOS and Android that provide seamless user experiences and drive business growth through innovative features.",
      video: "/videos/mobile.mp4",
      poster: "/virelity_navbar.png",
      buttonText: "Build Mobile App",
      buttonLink: "/services/mobile-apps"
    },
    {
      id: 6,
      badge: "Video Production Studio",
      title: "Professional Video Content That Tells Your Story",
      highlights: [
        { text: "Increase video engagement by", value: 250, suffix: "%", description: "with professional editing" },
        { text: "Boost brand awareness by", value: 180, suffix: "%", description: "with compelling videos" }
      ],
      description: "Create stunning video content, from promotional videos to educational content, that captures attention and communicates your message effectively.",
      video: "/videos/videoservice.mp4",
      poster: "/virelity_navbar.png",
      buttonText: "Watch Our Work",
      buttonLink: "/services/video-editing"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000); // Change slide every 6 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  // Navigation functions
  const nextSlide = () => {
    console.log('Next slide clicked, current:', currentSlide); // Debug log
    setCurrentSlide((prev) => {
      const next = (prev + 1) % slides.length;
      console.log('Moving to slide:', next); // Debug log
      return next;
    });
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    console.log('Previous slide clicked, current:', currentSlide); // Debug log
    setCurrentSlide((prev) => {
      const next = (prev - 1 + slides.length) % slides.length;
      console.log('Moving to slide:', next); // Debug log
      return next;
    });
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    console.log('Go to slide:', index); // Debug log
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-vision-purple/30 to-vision-blue/30 opacity-10" />
        <motion.div
          className="absolute w-72 h-72 rounded-full bg-primary/10 -top-20 -left-20 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div
          className="absolute w-60 h-60 rounded-full bg-vision-gold/10 bottom-20 right-10 blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 10,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>

      <div className="container relative z-10 pt-20 pb-24 md:pt-40 md:pb-36">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Content Side */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 50 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 300, damping: 30 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                {/* Neobrutalist Badge */}
                <span className="inline-block px-4 py-2 bg-yellow-400 text-black font-black uppercase tracking-wider text-sm border-[3px] border-black shadow-[4px_4px_0px_0px_#000]">
                  {currentSlideData.badge}
                </span>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase leading-tight tracking-tight">
                  {currentSlideData.title.split(' ').map((word, index) => {
                    const isHighlight = ['AI', 'Agents', 'Digital', 'Marketing', 'AR', 'VR', 'Immersive', '3D', 'Three', 'Dimensions', 'UI/UX', 'Design'].includes(word);
                    return (
                      <span key={index} className={isHighlight ? 'text-yellow-400' : ''}>
                        {word}{' '}
                      </span>
                    );
                  })}
                </h1>
                <div className="flex flex-col space-y-2 text-xl text-muted-foreground max-w-lg">
                  {currentSlideData.highlights.map((highlight, index) => (
                    <p key={index} className="font-medium">
                      {highlight.text} <AnimatedCounter
                        end={highlight.value}
                        suffix={highlight.suffix}
                        className="text-vision-gold font-bold"
                        duration={1.5 + index * 0.5}
                      /> {highlight.description}
                    </p>
                  ))}
                  <p>{currentSlideData.description}</p>
                </div>
              </div>

              {/* Neobrutalist CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <div className="relative group">
                  <div className="absolute inset-0 translate-x-2 translate-y-2 bg-black transition-all group-hover:translate-x-3 group-hover:translate-y-3" />
                  <Button asChild className="relative bg-yellow-400 hover:bg-yellow-400 text-black font-black uppercase tracking-wider px-8 py-6 text-lg border-[3px] border-black rounded-none">
                    <Link to={currentSlideData.buttonLink} title={`${currentSlideData.buttonText} - Virelity`}>
                      {currentSlideData.buttonText}
                    </Link>
                  </Button>
                </div>
                <HoverImageEffect>
                  <div className="relative group">
                    <div className="absolute inset-0 translate-x-2 translate-y-2 bg-green-800 transition-all group-hover:translate-x-3 group-hover:translate-y-3" />
                    <a
                      href="https://wa.me/918104796542?text=Hi%20Virelity!%20%F0%9F%91%8B%0A%0AI'm%20interested%20in%20your%20services%20and%20would%20like%20to%20book%20a%20free%2015-minute%20consultation%20call.%0A%0ALooking%20forward%20to%20hearing%20from%20you!"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative bg-green-500 hover:bg-green-500 text-black font-black uppercase tracking-wider px-8 py-6 text-lg flex items-center gap-2 border-[3px] border-black rounded-none"
                      title="Book a free 15-minute consultation call via WhatsApp"
                    >
                      <Calendar className="h-5 w-5" />
                      Book a Free 15-min Call
                    </a>
                  </div>
                </HoverImageEffect>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Video Side */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`video-${currentSlide}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 300, damping: 30 }}
              className="relative"
            >
              {/* Neobrutalist Video Frame */}
              <div className="relative z-10 border-[4px] border-black dark:border-yellow-400 shadow-[8px_8px_0px_0px_#000] dark:shadow-[8px_8px_0px_0px_#facc15] overflow-hidden animate-floating">
                <video
                  src={currentSlideData.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full min-h-[320px] md:min-h-[420px] lg:min-h-[480px] xl:min-h-[520px] object-cover aspect-video"
                  poster={currentSlideData.poster}
                  aria-label={`${currentSlideData.badge} showcase video`}
                  title={`Watch ${currentSlideData.badge} transformation showcase`}
                >
                  Sorry, your browser does not support embedded videos.
                </video>
              </div>
              <div className="absolute -top-8 -right-8 w-40 h-40 bg-primary/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-vision-blue/30 rounded-full blur-3xl" />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Neobrutalist Slider Controls */}
        <div className="flex justify-center items-center mt-12 space-x-6">
          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              prevSlide();
            }}
            className="p-3 bg-black border-[3px] border-yellow-400 shadow-[4px_4px_0px_0px_#facc15] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#facc15] transition-all duration-200"
            aria-label="Previous slide"
            type="button"
          >
            <ChevronLeft className="w-6 h-6 text-yellow-400" />
          </button>

          {/* Slide Indicators - Neobrutalist */}
          <div className="flex space-x-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  goToSlide(index);
                }}
                className={`w-4 h-4 border-2 border-black transition-all duration-200 ${
                  index === currentSlide
                    ? 'bg-yellow-400 scale-125 shadow-[2px_2px_0px_0px_#000]'
                    : 'bg-white/40 hover:bg-yellow-400/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
                type="button"
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              nextSlide();
            }}
            className="p-3 bg-black border-[3px] border-yellow-400 shadow-[4px_4px_0px_0px_#facc15] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#facc15] transition-all duration-200"
            aria-label="Next slide"
            type="button"
          >
            <ChevronRight className="w-6 h-6 text-yellow-400" />
          </button>
        </div>
      </div>
    </div>
  );
};
