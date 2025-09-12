import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, Calendar } from "lucide-react";
import { HoverImageEffect } from "@/components/custom/HoverImageEffect";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Helmet } from "react-helmet-async";

const navItems = [
  { name: "Home", path: "/", title: "Virelity.com Homepage - AI Agents & Digital Solutions" },
  { name: "Services", path: "/services", title: "Our AI & Digital Services - Web Development, Mobile Apps, AI Solutions" },
  { name: "Portfolio", path: "/portfolio", title: "View Our Portfolio - Success Stories & Project Case Studies" },
  { name: "About", path: "/about", title: "About Virelity.com - Our Story, Mission & Expert Team" },
  // { name: "Team", path: "/team", title: "Meet Our Team - AI & Digital Experts" },
  { name: "Contact", path: "/contact", title: "Contact Us - Get in Touch for Free Consultation" },
];

type NavbarProps = {
  title?: string;
  description?: string;
};

export const Navbar = ({ title = "Virelity.com - AI Agents that transform businesses", description = "We build AI Agents that transform businesses. Increase productivity by 100% through AI integration and boost sales by 100% with our solutions." }: NavbarProps) => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openWhatsAppBooking = () => {
    const message = "Hello! I'd like to book a 15-minute free consultation call. Please let me know your available time slots. Thank you!";
    const phoneNumber = "918104796542";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

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
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-4">
            <HoverImageEffect isNavbar={true}>
              <Button 
                onClick={openWhatsAppBooking}
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
                  ))}
                </div>
                <div className="mt-auto">
                  <HoverImageEffect>
                    <Button
                      onClick={openWhatsAppBooking}
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
