import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, Calendar, BookOpen, X, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";

const navItems = [
  { name: "Home", path: "/", title: "Virelity.com Homepage - AI Agents & Digital Solutions" },
  { name: "Services", path: "/services", title: "Our AI & Digital Services - Web Development, Mobile Apps, AI Solutions" },
  { name: "Portfolio", path: "/portfolio", title: "View Our Portfolio - Success Stories & Project Case Studies" },
  { name: "Utility", path: "/utility", title: "Utility Tools - AI Watermark Remover, BackDrop & More" },
  { name: "About", path: "/about", title: "About Virelity.com - Our Story, Mission & Expert Team" },
  { name: "Contact", path: "/contact", title: "Contact Us - Get in Touch for Free Consultation" },
  { name: "Book", path: "/book", title: "Business in the Age of AI - Book by Deon Menezes", isBook: true },
];

type NavbarProps = {
  title?: string;
  description?: string;
};

export const Navbar = ({ title = "Virelity.com - AI Agents that transform businesses", description = "We build AI Agents that transform businesses. Increase productivity by 100% through AI integration and boost sales by 100% with our solutions." }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // Create page-specific metadata based on current path
  const getPageMetadata = () => {
    const path = location.pathname;
    let pageTitle = title;
    let pageDescription = description;
    let pageKeywords = "AI Agents, web development, digital solutions, business transformation";

    switch(path) {
      case "/services":
        pageTitle = "Services - Virelity.com | AI Agents, Web Development & Digital Solutions";
        pageDescription = "Explore our comprehensive range of services including AI Agents, web development, mobile apps, UI/UX design, and more to transform your business";
        pageKeywords = "AI Agents, web development, mobile apps, UI/UX design, digital marketing, business transformation";
        break;
      case "/portfolio":
        pageTitle = "Portfolio - Virelity.com | Our Projects & Case Studies";
        pageDescription = "View our portfolio of successful projects including AI applications, websites, mobile apps and digital solutions delivered to clients";
        pageKeywords = "portfolio, projects, case studies, web development projects, AI projects, digital solutions";
        break;
      case "/utility":
        pageTitle = "Utility Tools - Virelity.com | AI Watermark Remover, BackDrop & More";
        pageDescription = "Explore our collection of utility tools including AI Watermark Remover, BackDrop text effects, and other helpful web applications";
        pageKeywords = "utility tools, AI watermark remover, backdrop, text effects, web tools, free tools";
        break;
      case "/about":
        pageTitle = "About Us - Virelity.com | Our Story & Values";
        pageDescription = "Learn about our team of experts, mission, values and our journey to becoming a leading AI and digital solutions provider";
        pageKeywords = "about us, company story, mission, values, team, digital agency";
        break;
      case "/contact":
        pageTitle = "Contact Us - Virelity.com | Get in Touch";
        pageDescription = "Contact our team for inquiries, quotes or to discuss your project. Book a free 15-minute consultation call.";
        pageKeywords = "contact, support, inquiry, consultation, free call, project discussion";
        break;
      case "/career":
        pageTitle = "Career Opportunities - Virelity.com | Join Our Team";
        pageDescription = "Join our innovative team of AI and digital experts. Explore career opportunities in web development, design, and technology at Virelity.com";
        pageKeywords = "career, jobs, employment, web development jobs, AI jobs, tech careers, join our team";
        break;
      case "/book":
        pageTitle = "Business in the Age of AI - Book by Deon Menezes | Virelity.com";
        pageDescription = "Get your copy of 'Business in the Age of AI' by Deon Menezes. Learn how to transform your business with artificial intelligence strategies.";
        pageKeywords = "AI book, business AI, Deon Menezes, artificial intelligence business, AI transformation guide";
        break;
      case "/services/ai-solutions":
        pageTitle = "AI Solutions & Chatbots - Virelity.com | Custom AI Development";
        pageDescription = "Transform your business with custom AI solutions. We build intelligent chatbots, automation systems, and predictive analytics to boost productivity by 100%.";
        pageKeywords = "AI solutions, AI chatbots, custom AI development, business automation, predictive analytics, GPT integration, machine learning";
        break;
      case "/services/web-development":
        pageTitle = "Web Development Services - Virelity.com | Modern Websites & Web Apps";
        pageDescription = "Professional web development services. We build responsive websites, e-commerce platforms, and custom web applications using React, Next.js, and modern technologies.";
        pageKeywords = "web development, website design, React development, Next.js, e-commerce, custom web apps, responsive design";
        break;
      case "/services/mobile-apps":
        pageTitle = "Mobile App Development - Virelity.com | iOS & Android Apps";
        pageDescription = "Expert mobile app development for iOS and Android. We create high-performance native and cross-platform apps using React Native and Flutter.";
        pageKeywords = "mobile app development, iOS apps, Android apps, React Native, Flutter, cross-platform apps, app design";
        break;
      case "/services/ui-ux-design":
        pageTitle = "UI/UX Design Services - Virelity.com | User Experience Design";
        pageDescription = "Create exceptional user experiences with our UI/UX design services. We design intuitive interfaces that convert visitors into customers.";
        pageKeywords = "UI design, UX design, user experience, interface design, wireframing, prototyping, Figma design";
        break;
      case "/services/digital-marketing":
        pageTitle = "Digital Marketing Services - Virelity.com | SEO, PPC & Social Media";
        pageDescription = "Grow your business with our digital marketing services. Expert SEO, Google Ads, social media marketing, and content strategy to increase leads and sales.";
        pageKeywords = "digital marketing, SEO services, Google Ads, PPC, social media marketing, content marketing, lead generation";
        break;
      case "/services/vr-ar-development":
        pageTitle = "VR/AR Development - Virelity.com | Virtual & Augmented Reality";
        pageDescription = "Immersive VR and AR development services. We create virtual reality experiences, augmented reality apps, and 3D interactive content for businesses.";
        pageKeywords = "VR development, AR development, virtual reality, augmented reality, immersive experiences, 3D apps, metaverse";
        break;
      case "/services/ar-vr-marketing":
        pageTitle = "AR/VR Marketing - Virelity.com | Immersive Marketing Solutions";
        pageDescription = "Engage customers with AR/VR marketing experiences. Create memorable brand interactions with augmented and virtual reality campaigns.";
        pageKeywords = "AR marketing, VR marketing, immersive marketing, interactive campaigns, brand experiences, AR filters";
        break;
      case "/services/3d-development":
        pageTitle = "3D Development Services - Virelity.com | 3D Modeling & Animation";
        pageDescription = "Professional 3D development services including 3D modeling, animation, product visualization, and interactive 3D experiences for web and apps.";
        pageKeywords = "3D development, 3D modeling, 3D animation, product visualization, WebGL, Three.js, 3D rendering";
        break;
      case "/services/video-editing":
        pageTitle = "Video Editing Services - Virelity.com | Professional Video Production";
        pageDescription = "Professional video editing and production services. We create engaging video content, motion graphics, and promotional videos for your business.";
        pageKeywords = "video editing, video production, motion graphics, promotional videos, corporate videos, video content";
        break;
      case "/services/design-services":
        pageTitle = "Design Services - Virelity.com | Graphic Design & Branding";
        pageDescription = "Creative design services including logo design, branding, graphic design, and visual identity creation for businesses of all sizes.";
        pageKeywords = "graphic design, logo design, branding, visual identity, brand design, creative design, marketing design";
        break;
      default:
        pageTitle = "Virelity.com | AI Agents that Transform Businesses";
        pageDescription = "We build AI Agents that transform businesses. Increase productivity by 100% through AI integration and boost sales by 100% with our solutions.";
        pageKeywords = "AI Agents, digital transformation, web development, business solutions, productivity increase";
    }

    return { pageTitle, pageDescription, pageKeywords };
  };

  const { pageTitle, pageDescription, pageKeywords } = getPageMetadata();

  // Create structured data for organization
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Virelity.com",
    "url": "https://virelity.com",
    "logo": "https://virelity.com/favicon.png",
    "description": "We build AI Agents that transform businesses",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "addressCountry": "India"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+918104796542",
      "contactType": "customer service",
      "email": "deonmenezescodes@gmail.com"
    },
    "sameAs": [
      "https://www.linkedin.com/company/virelity",
      "https://www.instagram.com/virelity"
    ]
  };

  return (
    <>
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <link rel="canonical" href={`https://virelity.com${location.pathname}`} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://virelity.com${location.pathname}`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content="https://virelity.com/virelity_logo_transparent.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://virelity.com${location.pathname}`} />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
        <meta property="twitter:image" content="https://virelity.com/virelity_logo_transparent.png" />
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="Virelity.com" />
        <meta name="revisit-after" content="7 days" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      {/* NEOBRUTALIST NAVBAR */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-black border-b-4 border-vision-gold"
            : "bg-black/90 backdrop-blur-sm border-b-4 border-white"
        )}
        role="banner"
      >
        <nav className="container flex items-center justify-between py-3 md:py-4" role="navigation" aria-label="Main Navigation">
          {/* Logo - Neobrutalist style */}
          <Link
            to="/"
            className="relative group"
            aria-label="Virelity.com Homepage"
            title="Virelity.com - AI Agents that Transform Businesses"
          >
            <motion.div
              whileHover={{ scale: 1.05, rotate: [-1, 1, 0] }}
              whileTap={{ scale: 0.98 }}
              className="relative"
            >
              {/* Mobile: Favicon with neobrutalist frame */}
              <div className="md:hidden relative">
                <div className="absolute inset-0 translate-x-1 translate-y-1 bg-vision-gold" />
                <div className="relative border-2 border-white p-1 bg-black">
                  <img src="/virelity_favicon.png" alt="Virelity.com" className="h-10 w-10" width="40" height="40" />
                </div>
              </div>

              {/* Desktop: Full logo with neobrutalist treatment */}
              <div className="hidden md:block relative">
                <motion.div
                  className="absolute inset-0 bg-vision-gold"
                  animate={{ x: hoveredItem === 'logo' ? 3 : 2, y: hoveredItem === 'logo' ? 3 : 2 }}
                  transition={{ duration: 0.2 }}
                />
                <div
                  className="relative border-2 border-white px-3 py-2 bg-black flex items-center gap-2"
                  onMouseEnter={() => setHoveredItem('logo')}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {/* <Zap className="w-5 h-5 text-vision-gold" /> */}
                  <img src="/vireality_navbar.png" alt="Virelity.com" className="h-8" width="auto" height="32" />
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation - Neobrutalist */}
          <ul className="hidden lg:flex items-center gap-2" role="menubar">
            {navItems.map((item, index) => (
              <li key={item.name} role="none">
                {item.isBook ? (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, rotate: [-1, 1, 0] }}
                    whileTap={{ scale: 0.95 }}
                    className="relative group"
                  >
                    <div className="absolute inset-0 translate-x-1 translate-y-1 bg-amber-400 transition-all group-hover:translate-x-2 group-hover:translate-y-2" />
                    <Link
                      to={item.path}
                      className={cn(
                        "relative flex items-center gap-2 px-4 py-2 font-bold uppercase tracking-wider text-sm border-2 border-black bg-black text-amber-400 transition-colors",
                        location.pathname === item.path && "bg-amber-400 text-black"
                      )}
                      role="menuitem"
                      title={item.title}
                      aria-current={location.pathname === item.path ? "page" : undefined}
                    >
                      <BookOpen className="h-4 w-4" />
                      <span>Book</span>
                      <span className="px-2 py-0.5 text-[10px] bg-amber-500 text-black font-black animate-pulse">
                        NEW
                      </span>
                    </Link>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className="relative"
                  >
                    <motion.div
                      className="absolute inset-0 bg-vision-gold"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: hoveredItem === item.name || location.pathname === item.path ? 1 : 0,
                        x: hoveredItem === item.name ? 2 : 1,
                        y: hoveredItem === item.name ? 2 : 1,
                      }}
                      transition={{ duration: 0.15 }}
                    />
                    <Link
                      to={item.path}
                      className={cn(
                        "relative block px-4 py-2 font-bold uppercase tracking-wider text-sm border-2 transition-all duration-200",
                        location.pathname === item.path
                          ? "bg-vision-gold text-black border-black"
                          : "bg-black text-white border-transparent hover:border-white"
                      )}
                      role="menuitem"
                      title={item.title}
                      aria-current={location.pathname === item.path ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                )}
              </li>
            ))}
          </ul>

          {/* Desktop CTA Button - Neobrutalist */}
          <div className="hidden lg:block">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="relative group"
            >
              <div className="absolute inset-0 translate-x-2 translate-y-2 bg-white transition-all duration-200 group-hover:translate-x-3 group-hover:translate-y-3" />
              <a
                href="https://wa.me/918104796542?text=Hi%20Virelity!%20%F0%9F%91%8B%0A%0AI'm%20interested%20in%20your%20services%20and%20would%20like%20to%20book%20a%20free%20consultation%20call.%0A%0ALooking%20forward%20to%20hearing%20from%20you!"
                target="_blank"
                rel="noopener noreferrer"
                className="relative bg-vision-gold hover:bg-vision-gold text-black font-black uppercase tracking-wider px-6 py-5 border-2 border-black rounded-none flex items-center gap-2"
                aria-label="Book a free consultation call via WhatsApp"
              >
                <Calendar className="h-5 w-5" aria-hidden="true" />
                Book Free Call
              </a>
            </motion.div>
          </div>

          {/* Mobile Menu Button - Neobrutalist */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden relative group"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            <div className="absolute inset-0 translate-x-1 translate-y-1 bg-vision-gold transition-all group-hover:translate-x-2 group-hover:translate-y-2" />
            <div className="relative border-2 border-white p-3 bg-black">
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="h-6 w-6 text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="h-6 w-6 text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.button>
        </nav>

        {/* Mobile Menu - Neobrutalist Full Screen */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden bg-black border-t-4 border-vision-gold overflow-hidden"
            >
              <nav className="container py-6" aria-label="Mobile Navigation">
                <div className="flex flex-col gap-3">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {item.isBook ? (
                        <div className="relative group">
                          <div className="absolute inset-0 translate-x-2 translate-y-2 bg-amber-400" />
                          <Link
                            to={item.path}
                            className={cn(
                              "relative flex items-center gap-3 px-5 py-4 font-black uppercase tracking-wider text-lg border-2 border-black",
                              location.pathname === item.path
                                ? "bg-amber-400 text-black"
                                : "bg-black text-amber-400"
                            )}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            <BookOpen className="h-5 w-5" />
                            <span>Book</span>
                            <span className="px-2 py-1 text-xs bg-amber-500 text-black font-black">NEW</span>
                          </Link>
                        </div>
                      ) : (
                        <div className="relative group">
                          <motion.div
                            className="absolute inset-0 bg-vision-gold"
                            initial={{ x: 2, y: 2 }}
                            whileHover={{ x: 4, y: 4 }}
                          />
                          <Link
                            to={item.path}
                            className={cn(
                              "relative flex items-center px-5 py-4 font-black uppercase tracking-wider text-lg border-2 transition-colors",
                              location.pathname === item.path
                                ? "bg-vision-gold text-black border-black"
                                : "bg-black text-white border-white hover:bg-vision-gold hover:text-black"
                            )}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Link>
                        </div>
                      )}
                    </motion.div>
                  ))}

                  {/* Mobile CTA */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navItems.length * 0.05 }}
                    className="mt-4"
                  >
                    <div className="relative group">
                      <div className="absolute inset-0 translate-x-3 translate-y-3 bg-white" />
                      <a
                        href="https://wa.me/918104796542?text=Hi%20Virelity!%20%F0%9F%91%8B%0A%0AI'm%20interested%20in%20your%20services%20and%20would%20like%20to%20book%20a%20free%20consultation%20call.%0A%0ALooking%20forward%20to%20hearing%20from%20you!"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setMobileMenuOpen(false)}
                        className="relative w-full bg-vision-gold hover:bg-vision-gold text-black font-black uppercase tracking-wider py-6 text-lg border-2 border-black rounded-none flex items-center justify-center gap-3"
                      >
                        <Calendar className="h-6 w-6" />
                        Book Free Call
                      </a>
                    </div>
                  </motion.div>
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
};
