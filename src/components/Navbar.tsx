import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, Calendar, BookOpen } from "lucide-react";
import { HoverImageEffect } from "@/components/custom/HoverImageEffect";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Helmet } from "react-helmet-async";
import { useBooking } from "@/contexts/BookingContext";

const navItems = [
  { name: "Home", path: "/", title: "Virelity.com Homepage - AI Agents & Digital Solutions" },
  { name: "Services", path: "/services", title: "Our AI & Digital Services - Web Development, Mobile Apps, AI Solutions" },
  { name: "Portfolio", path: "/portfolio", title: "View Our Portfolio - Success Stories & Project Case Studies" },
  { name: "Utility", path: "/utility", title: "Utility Tools - AI Watermark Remover, BackDrop & More" },
  { name: "About", path: "/about", title: "About Virelity.com - Our Story, Mission & Expert Team" },
  // { name: "Career", path: "/career", title: "Join Our Team - Career Opportunities at Virelity.com" },
  // { name: "Team", path: "/team", title: "Meet Our Team - AI & Digital Experts" },
  { name: "Contact", path: "/contact", title: "Contact Us - Get in Touch for Free Consultation" },
  { name: "Book", path: "/book", title: "Business in the Age of AI - Book by Deon Menezes", isBook: true },
];

type NavbarProps = {
  title?: string;
  description?: string;
};

export const Navbar = ({ title = "Virelity.com - AI Agents that transform businesses", description = "We build AI Agents that transform businesses. Increase productivity by 100% through AI integration and boost sales by 100% with our solutions." }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { openBookingDialog } = useBooking();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
      // Service Pages
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
        // Home page or fallback
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
        {/* Primary Meta Tags */}
        <title>{pageTitle}</title>
        <meta name="title" content={pageTitle} />
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        
        {/* Canonical URL */}
        <link rel="canonical" href={`https://virelity.com${location.pathname}`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://virelity.com${location.pathname}`} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content="https://virelity.com/virelity_logo_transparent.png" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://virelity.com${location.pathname}`} />
        <meta property="twitter:title" content={pageTitle} />
        <meta property="twitter:description" content={pageDescription} />
        <meta property="twitter:image" content="https://virelity.com/virelity_logo_transparent.png" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
        
        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="author" content="Virelity.com" />
        <meta name="revisit-after" content="7 days" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Helmet>

      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
          scrolled
            ? "py-2 bg-background/90 backdrop-blur-lg shadow-md border-b border-vision-gold/20"
            : "py-4 bg-transparent"
        )}
        role="banner"
      >
        <nav className="container flex items-center justify-between" role="navigation" aria-label="Main Navigation">
          <Link
            to="/"
            className="flex items-center gap-2 font-bold gold-shine"
            aria-label="Virelity.com Homepage"
            title="Virelity.com - AI Agents that Transform Businesses"
          >
            {/* Mobile view: Show favicon only */}
            <img src="/virelity_favicon.png" alt="Virelity.com - AI Agents & Digital Solutions Logo" className="h-12 md:hidden" width="48" height="48" />
            
            {/* Desktop view: Show full navbar logo */}
            <img src="/vireality_navbar.png" alt="Virelity.com - AI Agents & Digital Solutions Company Logo" className="hidden md:block h-10" width="auto" height="40" />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center gap-8" role="menubar">
            {navItems.map((item) => (
              <li key={item.name} role="none">
                {item.isBook ? (
                  <Link
                    to={item.path}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-lg transition-all duration-200 border border-amber-400/30 bg-gradient-to-r from-amber-400/10 to-amber-200/5 hover:bg-amber-400/20 hover:text-amber-500 shadow-sm relative",
                      location.pathname === item.path
                        ? "text-amber-500 border-amber-400 bg-amber-400/10"
                        : "text-amber-400"
                    )}
                    role="menuitem"
                    title={item.title}
                    aria-current={location.pathname === item.path ? "page" : undefined}
                  >
                    <BookOpen className="h-5 w-5" />
                    <span>Book</span>
                    <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-amber-500 text-black font-bold animate-pulse">NEW</span>
                  </Link>
                ) : (
                  <Link
                    to={item.path}
                    className={cn(
                      "text-lg font-medium transition-colors hover:text-vision-gold-light relative animated-underline",
                      location.pathname === item.path
                        ? "text-vision-gold"
                        : "text-muted-foreground"
                    )}
                    role="menuitem"
                    title={item.title}
                    aria-current={location.pathname === item.path ? "page" : undefined}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <HoverImageEffect isNavbar={true}>
              <Button 
                onClick={openBookingDialog}
                className="gold-gradient hover:gold-glow text-vision-black transition-all duration-300 shadow-lg flex items-center gap-2"
                aria-label="Book a free consultation call"
              >
                <Calendar className="h-4 w-4" aria-hidden="true" />
                Book a Free Call
              </Button>
            </HoverImageEffect>
          </div>

          {/* Mobile Navigation */}
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Open navigation menu"
              >
                <Menu className="h-6 w-6" aria-hidden="true" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col h-full" aria-label="Mobile Navigation">
                <Link to="/" className="flex items-center gap-2 font-bold py-4 border-b" aria-label="Virelity.com Homepage" title="Virelity.com - AI Agents that Transform Businesses">
                  <img src="/virelity_logo_transparent.png" alt="Virelity.com - AI Agents & Digital Solutions Mobile Logo" className="h-6" width="24" height="24" />
                </Link>
                <div className="flex flex-col gap-3 py-4" role="menu">
                  {navItems.map((item) => (
                    item.isBook ? (
                      <Link
                        key={item.name}
                        to={item.path}
                        className={cn(
                          "flex items-center gap-2 px-4 py-2 rounded-lg font-semibold text-lg transition-all duration-200 border border-amber-400/30 bg-gradient-to-r from-amber-400/10 to-amber-200/5 hover:bg-amber-400/20 hover:text-amber-500 shadow-sm relative",
                          location.pathname === item.path
                            ? "text-amber-500 border-amber-400 bg-amber-400/10"
                            : "text-amber-400"
                        )}
                        role="menuitem"
                        title={item.title}
                        aria-current={location.pathname === item.path ? "page" : undefined}
                      >
                        <BookOpen className="h-5 w-5" />
                        <span>Book</span>
                        <span className="ml-2 px-2 py-0.5 text-xs rounded-full bg-amber-500 text-black font-bold animate-pulse">NEW</span>
                      </Link>
                    ) : (
                      <Link
                        key={item.name}
                        to={item.path}
                        className={cn(
                          "text-lg py-2 px-4 rounded-lg transition-colors",
                          location.pathname === item.path
                            ? "bg-vision-gold/20 text-vision-gold font-medium"
                            : "text-muted-foreground hover:bg-muted"
                        )}
                        role="menuitem"
                        title={item.title}
                        aria-current={location.pathname === item.path ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    )
                  ))}
                </div>
                <div className="mt-auto">
                  <HoverImageEffect>
                    <Button
                      onClick={openBookingDialog}
                      className="gold-gradient hover:gold-glow text-vision-black flex items-center gap-2 justify-center"
                      aria-label="Book a free consultation call"
                    >
                      <Calendar className="h-4 w-4" aria-hidden="true" />
                      Book a Free Call
                    </Button>
                  </HoverImageEffect>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </nav>
      </header>
    </>
  );
};
