import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock, MessageSquare, Send, Sparkles, Zap, Target, Users } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email Us",
      details: "deon.menezes@virelity.com",
      description: "We'll respond within 24 hours",
      gradient: "from-blue-500 to-cyan-500",
      hoverGradient: "from-blue-600 to-cyan-600",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Call Us",
      details: "+918104796542",
      description: "Mon-Fri from 9am to 6pm",
      gradient: "from-green-500 to-emerald-500",
      hoverGradient: "from-green-600 to-emerald-600",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Visit Us ",
      details: "Mumbai, India",
      description: "Get in touch for our exact location",
      gradient: "from-purple-500 to-pink-500",
      hoverGradient: "from-purple-600 to-pink-600",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      title: "WhatsApp",
      details: "+918104796542",
      description: "Chat anytime",
      gradient: "from-orange-500 to-red-500",
      hoverGradient: "from-orange-600 to-red-600",
    },
  ];

  return (
    <PageTransition>
      <div ref={containerRef} className="min-h-screen flex flex-col relative overflow-hidden">
        <Navbar />

        {/* Animated Background Elements */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        {/* Hero Section with 3D Effect */}
        <section className="pt-32 pb-20 relative">
          <motion.div 
            style={{ y, opacity }}
            className="container relative z-10"
          >
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                  <Sparkles className="h-8 w-8 text-yellow-400 animate-spin" />
                </div>
                <span className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-primary/10 text-primary font-medium mb-6 border border-primary/30 backdrop-blur-sm">
                  <Zap className="inline h-4 w-4 mr-2" />
                Get in Touch
              </span>
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-primary to-white bg-clip-text text-transparent"
              >
                Let's Create
                <br />
                <span className="text-primary">Something Amazing</span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
              >
                Have a question, need a quote, or want to discuss your project? 
                <br />
                <span className="text-primary font-semibold">We're here to help!</span>
              </motion.p>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap justify-center gap-8 mt-12"
              >
                {[
                  { icon: <Users className="h-5 w-5" />, text: "500+ Happy Clients", color: "text-blue-400" },
                  { icon: <Target className="h-5 w-5" />, text: "24hr Response", color: "text-green-400" },
                  { icon: <Zap className="h-5 w-5" />, text: "Free Consultation", color: "text-yellow-400" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
                  >
                    <span className={stat.color}>{stat.icon}</span>
                    <span className="text-sm font-medium">{stat.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Contact Information Cards - Redesigned */}
        <section className="py-20 relative">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                Choose Your Preferred Way
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Multiple ways to reach us - pick what works best for you
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {contactInfo.map((item, index) => {
                // Determine link and click behavior for each card
                let cardProps = {};
                if (item.title === "Email Us") {
                  cardProps = {
                    as: 'a',
                    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${item.details}`,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    style: { cursor: 'pointer', textDecoration: 'none' },
                  };
                } else if (item.title === "Call Us") {
                  cardProps = {
                    as: 'a',
                    href: `tel:${item.details.replace(/\s+/g, '')}`,
                    style: { cursor: 'pointer', textDecoration: 'none' },
                  };
                } else if (item.title === "Visit Us") {
                  cardProps = {
                    as: 'a',
                    href: 'https://maps.app.goo.gl/wHLjQ1UsfPixzmSPA',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    style: { cursor: 'pointer', textDecoration: 'none' },
                  };
                } else if (item.title === "WhatsApp") {
                  cardProps = {
                    as: 'a',
                    href: `https://wa.me/${item.details.replace(/\D/g, '')}`,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    style: { cursor: 'pointer', textDecoration: 'none' },
                  };
                }
                return (
                  <motion.a
                    key={item.title}
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative block"
                    {...cardProps}
                  >
                    <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 hover:border-white/40 transition-all duration-500 overflow-hidden">
                      {/* Animated Background Gradient */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                      
                      {/* Floating Particles */}
                      <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full animate-ping"></div>
                      <div className="absolute bottom-6 left-6 w-1 h-1 bg-primary/50 rounded-full animate-pulse delay-300"></div>
                      
                      {/* Icon Container */}
                      <div className={`relative h-16 w-16 rounded-2xl bg-gradient-to-br ${item.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                        <div className="h-full w-full flex items-center justify-center text-white">
                      {item.icon}
                        </div>
                        {/* Glow Effect */}
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-30 blur-xl transition-opacity duration-300`}></div>
                      </div>
                      
                      {/* Content */}
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="font-semibold mb-2 text-lg group-hover:text-white transition-colors duration-300">
                        {item.details}
                      </p>
                      <p className="text-sm text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300">
                        {item.description}
                      </p>
                      
                      {/* Hover Arrow */}
                      <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                        <Send className="h-5 w-5 text-primary" />
                      </div>
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form and Map - Redesigned */}
        <section className="py-20 relative">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                Let's Start a Conversation
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ready to bring your ideas to life? Send us a message and let's create something amazing together.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 overflow-hidden">
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 opacity-50"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-blue-500/20 to-transparent rounded-full blur-xl"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-8">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center">
                        <Send className="h-6 w-6 text-white" />
                      </div>
                <div>
                        <h3 className="text-2xl font-bold">Send us a message</h3>
                        <p className="text-muted-foreground">We'll get back to you within 24 hours</p>
                      </div>
                    </div>
                    <ContactForm />
                  </div>
                </div>
              </motion.div>

              {/* Map Section */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >

                <div className="relative h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20">
                  {/* Map Container */}
                  <div className="w-full h-full relative">
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

                  {/* Map Footer */}
                  <div className="absolute bottom-0 left-0 right-0 z-10 p-6 bg-gradient-to-t from-black/50 to-transparent">
                    <div className="text-center">
                      <p className="text-white/90 text-sm font-medium mb-2">Our Office Location</p>
                      <p className="text-white/70 text-xs">
                        Piramal Revanta Tower 2 - Rohin, Piramal Revanta, Moti Nagar, Mulund Colony, Mulund West, Mumbai, Maharashtra 400080
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section - Redesigned */}
        <section className="py-20 relative">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground">
                Find quick answers to some of our most commonly asked questions.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  q: "What services does Virelity.com offer?",
                  a: "We offer a comprehensive range of digital services including web development, mobile app development, UI/UX design, branding, and digital strategy consulting.",
                  icon: <Zap className="h-5 w-5" />,
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  q: "How long does a typical project take?",
                  a: "Project timelines vary depending on complexity and scope. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
                  icon: <Clock className="h-5 w-5" />,
                  color: "from-green-500 to-emerald-500"
                },
                {
                  q: "How do you price your services?",
                  a: "We offer both project-based and retainer pricing models. Each quote is tailored to the specific needs and scope of your project. We're transparent about our pricing and will provide detailed breakdowns.",
                  icon: <Target className="h-5 w-5" />,
                  color: "from-purple-500 to-pink-500"
                },
                {
                  q: "Do you offer maintenance and support after launch?",
                  a: "Yes, we offer various support and maintenance packages to ensure your digital product continues to perform optimally after launch. We can discuss these options based on your specific needs.",
                  icon: <Users className="h-5 w-5" />,
                  color: "from-orange-500 to-red-500"
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="group relative"
                >
                  <div className="relative p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 hover:border-white/40 transition-all duration-500 overflow-hidden">
                    {/* Animated Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${faq.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    
                    {/* Floating Elements */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full animate-ping"></div>
                    <div className="absolute bottom-6 left-6 w-1 h-1 bg-primary/50 rounded-full animate-pulse delay-300"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start gap-4">
                        <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${faq.color} p-3 flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                          <div className="h-full w-full flex items-center justify-center text-white">
                            {faq.icon}
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                            {faq.q}
                          </h3>
                          <p className="text-muted-foreground group-hover:text-muted-foreground/80 transition-colors duration-300 leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
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
