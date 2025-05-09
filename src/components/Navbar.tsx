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

const navItems = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "About", path: "/about" },
  // { name: "Team", path: "/team" },
  { name: "Contact", path: "/contact" },
];

export const Navbar = () => {
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

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled
          ? "py-2 bg-background/90 backdrop-blur-lg shadow-md border-b border-vision-gold/20"
          : "py-4 bg-transparent"
      )}
    >
      <nav className="container flex items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 font-bold gold-shine"
        >
          <img src="/virelity_logo_transparent.png" alt="Virelity.com Logo" className="h-12" />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                className={cn(
                  "text-lg font-medium transition-colors hover:text-vision-gold-light relative animated-underline",
                  location.pathname === item.path
                    ? "text-vision-gold"
                    : "text-muted-foreground"
                )}
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
            >
              <Calendar className="h-4 w-4" />
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
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col h-full">
              <Link to="/" className="flex items-center gap-2 font-bold py-4 border-b">
                <img src="/virelity_logo_transparent.png" alt="Virelity.com Logo" className="h-6" />
              </Link>
              <div className="flex flex-col gap-3 py-4">
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
                  >
                    <Calendar className="h-4 w-4" />
                    Book a Free Call
                  </Button>
                </HoverImageEffect>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  );
};
