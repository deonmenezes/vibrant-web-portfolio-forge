
import { Link } from "react-router-dom";
import { Mail, Phone, User, Home, Info, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-vision-dark text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gradient">Team Vision</h2>
            <p className="text-gray-300 mb-6">
              Creating innovative digital experiences that transform businesses and delight users.
            </p>
            <div className="flex space-x-4">
              {["twitter", "facebook", "instagram", "linkedin"].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors duration-300"
                >
                  <span className="sr-only">{social}</span>
                  <div className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/", icon: Home },
                { name: "Portfolio", path: "/portfolio", icon: Briefcase },
                { name: "About Us", path: "/about", icon: Info },
                { name: "Our Team", path: "/team", icon: User },
                { name: "Contact", path: "/contact", icon: Mail },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="flex items-center text-gray-300 hover:text-primary transition-colors duration-300"
                  >
                    <link.icon className="w-4 h-4 mr-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-300">
                <Home className="w-5 h-5 mr-3 mt-1 text-primary" />
                <span>123 Tech Avenue, Silicon Valley, CA 94043</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-primary" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-primary" />
                <span>info@teamvision.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <div className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 bg-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button className="bg-primary hover:bg-primary/90 transition-colors duration-300">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; 2025 Team Vision. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#privacy" className="text-gray-400 text-sm hover:text-primary transition-colors duration-300">
              Privacy Policy
            </a>
            <a href="#terms" className="text-gray-400 text-sm hover:text-primary transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#cookies" className="text-gray-400 text-sm hover:text-primary transition-colors duration-300">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
