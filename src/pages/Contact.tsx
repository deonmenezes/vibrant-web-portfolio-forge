import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, Sparkles, Zap, Target, Users, ArrowUpRight } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { m as motion, useScroll, useSpring, useInView } from "framer-motion";
import { useRef, useState } from "react";

// Neobrutalist colors
const colors = {
  gold: "#D4AF37",
  electric: "#00FF87",
  coral: "#FF6B6B",
  violet: "#A855F7",
  cyan: "#00D4FF",
  lime: "#BFFF00",
};

// Marquee component
const ContactMarquee = ({ reverse = false }: { reverse?: boolean }) => (
  <div className="overflow-hidden whitespace-nowrap border-y-4 border-white bg-vision-gold py-4">
    <motion.div
      animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="inline-flex"
    >
      {[...Array(4)].map((_, idx) => (
        <span key={idx} className="inline-flex items-center gap-8 px-8 font-black text-2xl md:text-3xl text-black uppercase">
          <span>Let's Connect</span>
          <span className="w-4 h-4 bg-black rotate-45" />
          <span>Start Your Project</span>
          <span className="w-4 h-4 bg-black rotate-45" />
          <span>Get in Touch</span>
          <span className="w-4 h-4 bg-black rotate-45" />
        </span>
      ))}
    </motion.div>
  </div>
);

// Neobrutalist contact card
const NeoContactCard = ({ icon: Icon, title, details, description, color, href, index }: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  details: string;
  description: string;
  color: string;
  href: string;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const rotations = [-2, 1.5, -1, 2];
  const rotation = rotations[index % rotations.length];

  return (
    <motion.a
      ref={ref}
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      initial={{ opacity: 0, y: 50, rotate: rotation }}
      animate={isInView ? { opacity: 1, y: 0, rotate: rotation } : {}}
      whileHover={{ rotate: 0, scale: 1.02 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group block cursor-pointer"
    >
      <motion.div
        className="absolute inset-0"
        animate={{
          x: isHovered ? 10 : 5,
          y: isHovered ? 10 : 5,
        }}
        style={{ backgroundColor: color }}
      />
      <div className="relative bg-black border-4 border-white p-8">
        {/* Icon */}
        <motion.div
          animate={{ rotate: isHovered ? 360 : 0, scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.5 }}
          className="w-16 h-16 border-4 border-white flex items-center justify-center mb-6"
          style={{ backgroundColor: color }}
        >
          <Icon className="w-8 h-8 text-black" />
        </motion.div>

        <h3 className="text-2xl font-black text-white uppercase mb-3">{title}</h3>
        <p className="text-vision-gold font-bold text-lg mb-2">{details}</p>
        <p className="text-white/60 font-medium">{description}</p>

        {/* Hover arrow */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
          className="absolute bottom-6 right-6"
        >
          <ArrowUpRight className="w-6 h-6 text-vision-gold" />
        </motion.div>

        {/* Bottom accent bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: isHovered ? "100%" : 0 }}
          className="absolute bottom-0 left-0 h-1"
          style={{ backgroundColor: color }}
        />
      </div>
    </motion.a>
  );
};

// Neobrutalist FAQ card
const NeoFAQCard = ({ q, a, icon: Icon, color, index }: {
  q: string;
  a: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      <motion.div
        className="absolute inset-0"
        animate={{
          x: isHovered ? 8 : 4,
          y: isHovered ? 8 : 4,
        }}
        style={{ backgroundColor: color }}
      />
      <div className="relative bg-black border-4 border-white p-8">
        <div className="flex items-start gap-6">
          <motion.div
            animate={{ rotate: isHovered ? 360 : 0 }}
            transition={{ duration: 0.6 }}
            className="w-14 h-14 border-4 border-white flex-shrink-0 flex items-center justify-center"
            style={{ backgroundColor: color }}
          >
            <Icon className="w-6 h-6 text-black" />
          </motion.div>
          <div className="flex-1">
            <h3 className="text-xl font-black text-white uppercase mb-3">{q}</h3>
            <p className="text-white/70 font-medium leading-relaxed">{a}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "deon.menezes@virelity.com",
      description: "We'll respond within 24 hours",
      color: colors.cyan,
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=deon.menezes@virelity.com",
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+918104796542",
      description: "Mon-Fri from 9am to 6pm",
      color: colors.electric,
      href: "tel:+918104796542",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Mumbai, India",
      description: "Get in touch for our exact location",
      color: colors.violet,
      href: "https://maps.app.goo.gl/wHLjQ1UsfPixzmSPA",
    },
    {
      icon: MessageSquare,
      title: "WhatsApp",
      details: "+918104796542",
      description: "Chat anytime",
      color: colors.coral,
      href: "https://wa.me/918104796542",
    },
  ];

  const faqs = [
    {
      q: "What services does Virelity.com offer?",
      a: "We offer a comprehensive range of digital services including web development, mobile app development, UI/UX design, branding, and digital strategy consulting.",
      icon: Zap,
      color: colors.cyan,
    },
    {
      q: "How long does a typical project take?",
      a: "Project timelines vary depending on complexity and scope. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
      icon: Clock,
      color: colors.electric,
    },
    {
      q: "How do you price your services?",
      a: "We offer both project-based and retainer pricing models. Each quote is tailored to the specific needs and scope of your project. We're transparent about our pricing and will provide detailed breakdowns.",
      icon: Target,
      color: colors.violet,
    },
    {
      q: "Do you offer maintenance and support after launch?",
      a: "Yes, we offer various support and maintenance packages to ensure your digital product continues to perform optimally after launch. We can discuss these options based on your specific needs.",
      icon: Users,
      color: colors.coral,
    },
  ];

  return (
    <PageTransition>
      <div ref={containerRef} className="min-h-screen flex flex-col bg-black relative overflow-hidden">
        {/* Progress Bar */}
        <motion.div
          style={{ scaleX }}
          className="fixed top-0 left-0 right-0 h-2 bg-vision-gold origin-left z-[60]"
        />

        <Navbar />

        {/* Hero Section - Neobrutalist */}
        <section className="pt-32 pb-20 relative bg-black">
          {/* Animated grid background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `linear-gradient(${colors.gold}40 1px, transparent 1px), linear-gradient(90deg, ${colors.gold}40 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }} />
          </div>

          {/* Floating shapes */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-40 right-20 w-32 h-32 border-4 border-vision-gold hidden md:block"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 left-20 w-24 h-24 hidden md:block"
            style={{ backgroundColor: colors.electric }}
          />

          <div className="container relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                animate={{ opacity: 1, scale: 1, rotate: -2 }}
                transition={{ duration: 0.6 }}
                className="inline-block relative mb-8"
              >
                <div className="absolute inset-0 translate-x-2 translate-y-2 bg-vision-gold" />
                <div className="relative bg-black border-4 border-white px-6 py-3 flex items-center gap-3">
                  <Sparkles className="w-6 h-6 text-vision-gold" />
                  <span className="text-white font-black uppercase tracking-wider">Get in Touch</span>
                </div>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 uppercase"
              >
                <span className="text-white">Let's Create</span>
                <br />
                <span className="text-vision-gold relative inline-block">
                  Something Amazing
                  <motion.div
                    className="absolute -bottom-2 left-0 h-4 bg-vision-gold/30 w-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                  />
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto font-medium mb-12"
              >
                Have a question, need a quote, or want to discuss your project?
                <br />
                <span className="text-vision-gold font-bold">We're here to help!</span>
              </motion.p>

              {/* Stats badges */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap justify-center gap-4"
              >
                {[
                  { icon: Users, text: "500+ Happy Clients", color: colors.cyan },
                  { icon: Target, text: "24hr Response", color: colors.electric },
                  { icon: Zap, text: "Free Consultation", color: colors.coral },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 translate-x-1 translate-y-1" style={{ backgroundColor: stat.color }} />
                    <div className="relative bg-black border-2 border-white px-4 py-2 flex items-center gap-2">
                      <stat.icon className="w-4 h-4 text-vision-gold" />
                      <span className="text-white font-bold text-sm uppercase">{stat.text}</span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Marquee */}
        <ContactMarquee />

        {/* Contact Cards Section */}
        <section className="py-20 md:py-32 bg-black">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 translate-x-2 translate-y-2" style={{ backgroundColor: colors.electric }} />
                <h2 className="relative bg-black border-4 border-white px-8 py-4 text-3xl md:text-4xl font-black text-white uppercase">
                  Choose Your Way
                </h2>
              </div>
              <p className="text-xl text-white/60 max-w-2xl mx-auto font-medium">
                Multiple ways to reach us - pick what works best for you
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {contactInfo.map((item, index) => (
                <NeoContactCard key={item.title} {...item} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Map Section */}
        <section className="py-20 md:py-32 bg-black border-y-4 border-white">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 translate-x-2 translate-y-2" style={{ backgroundColor: colors.violet }} />
                <h2 className="relative bg-black border-4 border-white px-8 py-4 text-3xl md:text-4xl font-black text-white uppercase">
                  Start a Conversation
                </h2>
              </div>
              <p className="text-xl text-white/60 max-w-2xl mx-auto font-medium">
                Ready to bring your ideas to life? Send us a message and let's create something amazing together.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 translate-x-4 translate-y-4" style={{ backgroundColor: colors.cyan }} />
                <div className="relative bg-black border-4 border-white p-6 md:p-8">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 border-4 border-white flex items-center justify-center" style={{ backgroundColor: colors.cyan }}>
                      <Send className="w-7 h-7 text-black" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white uppercase">Send a Message</h3>
                      <p className="text-white/60 font-medium">We'll get back to you within 24 hours</p>
                    </div>
                  </div>
                  <ContactForm />
                </div>
              </motion.div>

              {/* Map Section */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 translate-x-4 translate-y-4" style={{ backgroundColor: colors.violet }} />
                <div className="relative bg-black border-4 border-white overflow-hidden">
                  {/* Map header */}
                  <div className="flex items-center gap-4 p-6 border-b-4 border-white">
                    <div className="w-14 h-14 border-4 border-white flex items-center justify-center" style={{ backgroundColor: colors.violet }}>
                      <MapPin className="w-7 h-7 text-black" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white uppercase">Our Location</h3>
                      <p className="text-white/60 font-medium">Mumbai, India</p>
                    </div>
                  </div>

                  {/* Map iframe */}
                  <div className="h-[400px] md:h-[500px] relative">
                    <iframe
                      title="Virelity Mumbai Location"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      src="https://www.google.com/maps/embed/v1/place?q=Piramal%20Revanta%20Tower%202%20-%20Rohin%2C%20Piramal%20Revanta%2C%20Moti%20Nagar%2C%20Mulund%20Colony%2C%20Mulund%20West%2C%20Mumbai%2C%20Maharashtra%20400080&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                    ></iframe>
                  </div>

                  {/* Map footer */}
                  <div className="p-6 border-t-4 border-white bg-black">
                    <p className="text-white/70 font-medium text-sm">
                      Piramal Revanta Tower 2 - Rohin, Piramal Revanta, Moti Nagar, Mulund Colony, Mulund West, Mumbai, Maharashtra 400080
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Marquee */}
        <ContactMarquee reverse />

        {/* FAQ Section */}
        <section className="py-20 md:py-32 bg-black">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="relative inline-block mb-6">
                <div className="absolute inset-0 translate-x-2 translate-y-2" style={{ backgroundColor: colors.coral }} />
                <h2 className="relative bg-black border-4 border-white px-8 py-4 text-3xl md:text-4xl font-black text-white uppercase">
                  FAQ
                </h2>
              </div>
              <p className="text-xl text-white/60 max-w-2xl mx-auto font-medium">
                Find quick answers to some of our most commonly asked questions.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-6">
              {faqs.map((faq, index) => (
                <NeoFAQCard key={index} {...faq} index={index} />
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Contact;
