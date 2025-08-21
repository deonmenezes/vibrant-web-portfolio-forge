import { Link } from "react-router-dom";
import { Mail, Phone, User, Home, Info, Briefcase, MessageSquare, Calendar, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HoverImageEffect } from "@/components/custom/HoverImageEffect";

export const Footer = () => {
  const openWhatsAppBooking = () => {
    const message = "Hello! I'd like to book a 15-minute free consultation call. Please let me know your available time slots. Thank you!";
    const phoneNumber = "918104796542";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <footer className="bg-vision-dark text-white pt-16 pb-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="mb-4">
              <img src="/virelity_logo_transparent.png" alt="Virelity.com Logo" className="h-12 mb-2" />
            </div>
            <p className="text-gray-300 mb-6">
              Creating innovative digital experiences that transform businesses and delight users.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/virelity_?igsh=MWo0dDR5aXhjajY1dA=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gradient-to-r from-purple-500 to-pink-500 transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/quizitt/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[

                { name: "Home", url: "/", icon: Home },
                { name: "About Us", url: "/about", icon: Info },
                { name: "Services", url: "/services", icon: Briefcase },
                { name: "Portfolio", url: "/portfolio", icon: Briefcase },
                { name: "Contact", url: "/contact", icon: Mail },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.url}
                    className="flex items-center text-gray-300 hover:text-primary transition-colors duration-300"
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
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
                
                <a
                  href="https://maps.app.goo.gl/sZanUiqZVm1bJ5rc6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-300"
                >
                  Mumbai, India
                </a>
              </li>
              <li className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-primary" />
                <span>+918104796542</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Phone className="w-5 h-5 mr-3 text-primary" />
                <span>+919167342135</span>
              </li>
              <li className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-primary" />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=deon.menezes@virelity.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-300"
                >
                  deon.menezes@virelity.com
                </a>
              </li>
              <li className="flex items-center text-gray-300">
                <Mail className="w-5 h-5 mr-3 text-primary" />
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=floyadelys@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary transition-colors duration-300"
                >
                  floyadelys@gmail.com
                </a>
              </li>
              <li className="flex items-center text-gray-300">
                <MessageSquare className="w-5 h-5 mr-3 text-primary" />
                <a 
                  href={`https://wa.me/918104796542`}
                  className="hover:text-primary transition-colors duration-300"
                >
                  WhatsApp Support
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Book a Free Call</h3>
            <p className="text-gray-300 mb-4">
              Get a free 15-minute consultation to discuss your project needs and how we can help.
            </p>
            <HoverImageEffect>
              <Button 
                onClick={openWhatsAppBooking}
                className="bg-green-600 hover:bg-green-700 w-full transition-colors duration-300 flex items-center justify-center gap-2"
              >
                <Calendar className="h-4 w-4" />
                Schedule Consultation
              </Button>
            </HoverImageEffect>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; 2025 Virelity.com. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#privacy" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300">Privacy Policy</a>
            <a href="#terms" className="text-gray-400 hover:text-primary text-sm transition-colors duration-300">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
