import { Link } from "react-router-dom";
import { Mail, Phone, Home, Info, Briefcase, MessageSquare, Calendar, Instagram, Linkedin, ArrowRight, ArrowUpRight, Zap, MapPin } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

// Neobrutalist colors
const colors = {
  gold: "#D4AF37",
  electric: "#00FF87",
  coral: "#FF6B6B",
  violet: "#A855F7",
  cyan: "#00D4FF",
};

// Marquee component
const FooterMarquee = () => (
  <div className="overflow-hidden whitespace-nowrap border-y-4 border-white bg-vision-gold py-3">
    <motion.div
      animate={{ x: ["-50%", "0%"] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="inline-flex"
    >
      {[...Array(2)].map((_, idx) => (
        <span key={idx} className="inline-flex items-center gap-8 px-8 font-black text-xl md:text-2xl text-black uppercase">
          <span>Let's Work Together</span>
          <span className="w-3 h-3 bg-black rounded-full" />
          <span>Build Something Great</span>
          <span className="w-3 h-3 bg-black rounded-full" />
          <span>Transform Your Business</span>
          <span className="w-3 h-3 bg-black rounded-full" />
          <span>AI Powered Solutions</span>
          <span className="w-3 h-3 bg-black rounded-full" />
        </span>
      ))}
    </motion.div>
  </div>
);

// Neobrutalist Link component
const NeoLink = ({ href, children, external = false, color = colors.gold }: { href: string; children: React.ReactNode; external?: boolean; color?: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  const linkProps = external
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  const Wrapper = external ? "a" : Link;
  const wrapperProps = external ? linkProps : { to: href };

  return (
    <motion.div
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      <Wrapper
        {...(wrapperProps as any)}
        className="relative flex items-center gap-2 text-white font-medium hover:text-vision-gold transition-colors py-1"
        onClick={() => {
          if (!external) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        }}
      >
        <motion.span
          animate={{ x: isHovered ? 5 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex items-center gap-2"
        >
          {children}
        </motion.span>
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
          transition={{ duration: 0.2 }}
        >
          <ArrowRight className="w-4 h-4 text-vision-gold" />
        </motion.div>
      </Wrapper>
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-vision-gold"
        initial={{ width: 0 }}
        animate={{ width: isHovered ? "100%" : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

// Social button
const SocialButton = ({ href, icon: Icon, label, color }: { href: string; icon: any; label: string; color: string }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="relative group"
    >
      <motion.div
        className="absolute inset-0"
        animate={{
          x: isHovered ? 3 : 2,
          y: isHovered ? 3 : 2,
        }}
        style={{ backgroundColor: color }}
      />
      <div className="relative w-12 h-12 bg-black border-2 border-white flex items-center justify-center">
        <Icon className="w-5 h-5 text-white" />
      </div>
    </motion.a>
  );
};

export const Footer = () => {
  const footerRef = useRef(null);
  const isInView = useInView(footerRef, { once: true, margin: "-100px" });

  const quickLinks = [
    { name: "Home", url: "/", icon: Home },
    { name: "About Us", url: "/about", icon: Info },
    { name: "Services", url: "/services", icon: Briefcase },
    { name: "Portfolio", url: "/portfolio", icon: Briefcase },
    { name: "Contact", url: "/contact", icon: Mail },
  ];

  const contactInfo = [
    { icon: MapPin, text: "Mumbai, India", href: "https://maps.app.goo.gl/sZanUiqZVm1bJ5rc6" },
    { icon: Phone, text: "+918104796542", href: "tel:+918104796542" },
    { icon: Phone, text: "+919167342135", href: "tel:+919167342135" },
    { icon: Mail, text: "deon.menezes@virelity.com", href: "https://mail.google.com/mail/?view=cm&fs=1&to=deon.menezes@virelity.com" },
    { icon: MessageSquare, text: "WhatsApp Support", href: "https://wa.me/918104796542" },
  ];

  return (
    <footer ref={footerRef} className="bg-black">
      {/* Marquee Banner */}
      <FooterMarquee />

      {/* Main Footer Content */}
      <div className="container mx-auto pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            {/* Logo with neobrutalist frame */}
            <div className="mb-6">
              <div className="inline-block relative group">
                <div className="absolute inset-0 translate-x-2 translate-y-2 bg-vision-gold" />
                <div className="relative border-2 border-white p-3 bg-black flex items-center gap-2">
                  {/* <Zap className="w-6 h-6 text-vision-gold" /> */}
                  <img src="/virelity_logo_transparent.png" alt="Virelity.com" className="h-8" />
                </div>
              </div>
            </div>

            <p className="text-white/70 font-medium mb-6 leading-relaxed">
              Creating innovative digital experiences that transform businesses and delight users.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <SocialButton
                href="https://www.instagram.com/virelity"
                icon={Instagram}
                label="Instagram"
                color={colors.coral}
              />
              <SocialButton
                href="https://www.linkedin.com/company/virelity"
                icon={Linkedin}
                label="LinkedIn"
                color={colors.cyan}
              />
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 translate-x-1 translate-y-1 bg-electric" style={{ backgroundColor: colors.electric }} />
              <h3 className="relative bg-black border-2 border-white px-4 py-2 text-white font-black uppercase tracking-wider text-sm">
                Quick Links
              </h3>
            </div>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <NeoLink href={link.url}>
                    <link.icon className="w-4 h-4" />
                    {link.name}
                  </NeoLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 translate-x-1 translate-y-1 bg-coral" style={{ backgroundColor: colors.coral }} />
              <h3 className="relative bg-black border-2 border-white px-4 py-2 text-white font-black uppercase tracking-wider text-sm">
                Contact Us
              </h3>
            </div>

            <ul className="space-y-3">
              {contactInfo.map((item, index) => (
                <li key={index}>
                  <NeoLink href={item.href} external color={colors.coral}>
                    <item.icon className="w-4 h-4 text-vision-gold flex-shrink-0" />
                    <span className="text-sm">{item.text}</span>
                  </NeoLink>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CTA Column */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 translate-x-1 translate-y-1 bg-violet" style={{ backgroundColor: colors.violet }} />
              <h3 className="relative bg-black border-2 border-white px-4 py-2 text-white font-black uppercase tracking-wider text-sm">
                Book a Call
              </h3>
            </div>

            <p className="text-white/70 font-medium mb-6">
              Get a free 15-minute consultation to discuss your project needs.
            </p>

            {/* CTA Button - Neobrutalist */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative group"
            >
              <div className="absolute inset-0 translate-x-2 translate-y-2 bg-white transition-all duration-200 group-hover:translate-x-3 group-hover:translate-y-3" />
              <a
                href="https://wa.me/918104796542?text=Hi%20Virelity!%20%F0%9F%91%8B%0A%0AI'm%20interested%20in%20your%20services%20and%20would%20like%20to%20schedule%20a%20call.%0A%0ALooking%20forward%20to%20hearing%20from%20you!"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full bg-vision-gold hover:bg-vision-gold text-black font-black uppercase tracking-wider py-6 border-2 border-black rounded-none flex items-center justify-center gap-2"
              >
                <Calendar className="h-5 w-5" />
                Schedule Call
              </a>
            </motion.div>

            {/* WhatsApp Quick Link */}
            <motion.a
              href="https://wa.me/918104796542"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="relative group mt-4 block"
            >
              <div className="absolute inset-0 translate-x-2 translate-y-2 bg-green-500 transition-all duration-200 group-hover:translate-x-3 group-hover:translate-y-3" />
              <div className="relative w-full bg-black border-2 border-white py-4 flex items-center justify-center gap-2 text-white font-bold uppercase tracking-wider">
                <MessageSquare className="h-5 w-5 text-green-400" />
                WhatsApp Us
                <ArrowUpRight className="h-4 w-4" />
              </div>
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="border-t-4 border-white mt-12 pt-6"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="relative inline-block">
              <div className="absolute inset-0 translate-x-1 translate-y-1 bg-vision-gold" />
              <p className="relative bg-black border-2 border-white px-4 py-2 text-white font-bold text-sm">
                &copy; 2025 Virelity.com. All rights reserved.
              </p>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center gap-4">
              <motion.div whileHover={{ scale: 1.05 }} className="relative group">
                <div className="absolute inset-0 translate-x-1 translate-y-1 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <Link
                  to="/privacy"
                  className="relative block px-4 py-2 text-white/70 hover:text-white font-medium text-sm border border-white/20 hover:border-white transition-colors"
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                >
                  Privacy Policy
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="relative group">
                <div className="absolute inset-0 translate-x-1 translate-y-1 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                <a
                  href="#terms"
                  className="relative block px-4 py-2 text-white/70 hover:text-white font-medium text-sm border border-white/20 hover:border-white transition-colors"
                >
                  Terms & Conditions
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
