import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { BOOK_CALL_URL } from "@/lib/contact";

const navItems = [
  { name: "Services", path: "/#services" },
  { name: "How we work", path: "/#process" },
  { name: "Work", path: "/portfolio" },
  { name: "About", path: "/about" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname, location.hash]);

  const isActive = (path: string) => !path.includes("#") && location.pathname === path;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 border-b transition-colors duration-300",
        scrolled || mobileMenuOpen ? "bg-black border-white/15" : "bg-black/60 backdrop-blur-md border-transparent"
      )}
    >
      <nav className="container flex h-16 items-center justify-between md:h-20" aria-label="Main">
        <Link to="/" aria-label="Virelity home" className="shrink-0">
          <img src="/vireality_navbar.png" alt="Virelity" className="hidden h-8 w-auto md:block" height="32" />
          <img src="/virelity_favicon.png" alt="Virelity" className="h-9 w-9 md:hidden" width="36" height="36" />
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.path}
                aria-current={isActive(item.path) ? "page" : undefined}
                className={cn(
                  "text-sm font-semibold transition-colors hover:text-vision-gold",
                  isActive(item.path) ? "text-vision-gold" : "text-white/80"
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={BOOK_CALL_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden border-2 border-black bg-vision-gold px-5 py-2.5 text-sm font-black uppercase tracking-wider text-black shadow-[4px_4px_0_0_#fff] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[6px_6px_0_0_#fff] sm:block"
          >
            Book a call
          </a>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((open) => !open)}
            className="border-2 border-white/30 p-2 text-white lg:hidden"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="border-t border-white/15 bg-black lg:hidden">
          <ul className="container flex flex-col py-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block border-b border-white/10 py-4 text-lg font-bold text-white hover:text-vision-gold"
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li className="pt-5">
              <a
                href={BOOK_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center border-2 border-black bg-vision-gold py-4 text-base font-black uppercase tracking-wider text-black shadow-[4px_4px_0_0_#fff]"
              >
                Book a free call
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
