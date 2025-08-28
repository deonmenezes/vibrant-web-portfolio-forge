import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Mail, Phone, MapPin, Clock, MessageSquare } from "lucide-react";
import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email Us",
      details: "deon.menezes@virelity.com",
      description: "We'll respond within 24 hours",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Call Us",
      details: "+918104796542",
      description: "Mon-Fri from 9am to 6pm",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Visit Us ",
      details: "Mumbai, India",
      description: "Get in touch for our exact location",
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-primary" />,
      title: "WhatsApp",
      details: "+918104796542",
      description: "Chat anytime",
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium mb-4">
                Get in Touch
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-xl text-muted-foreground">
                Have a question, need a quote, or want to discuss your project? We're here to help!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information Cards */}
        <section className="py-12">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-card border border-border rounded-xl p-6 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 block"
                    {...cardProps}
                  >
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="font-medium mb-1">{item.details}</p>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </motion.a>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form and Map */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">Send us a message</h2>
                  <p className="text-muted-foreground mb-8">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </div>
                <ContactForm />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="h-full min-h-[400px]"
              >
                <div className="bg-muted h-full rounded-xl overflow-hidden">
                  {/* Replace with actual map or iframe */}
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <div className="text-center p-8">
                      <h3 className="text-xl font-semibold mb-2">Find Us On The Map</h3>
                      <p className="text-muted-foreground mb-4">
                        Piramal Revanta Tower 2 - Rohin, Piramal Revanta, Moti Nagar, Mulund Colony, Mulund West, Mumbai, Maharashtra 400080
                      </p>
                      <div className="w-full h-[300px] bg-muted-foreground/20 rounded-lg overflow-hidden">
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
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground">
                Find quick answers to some of our most commonly asked questions.
              </p>
            </div>

            <div className="max-w-3xl mx-auto space-y-6">
              {[
                {
                  q: "What services does Virelity.com offer?",
                  a: "We offer a comprehensive range of digital services including web development, mobile app development, UI/UX design, branding, and digital strategy consulting.",
                },
                {
                  q: "How long does a typical project take?",
                  a: "Project timelines vary depending on complexity and scope. A simple website might take 4-6 weeks, while a complex web application could take 3-6 months. We'll provide a detailed timeline during our initial consultation.",
                },
                {
                  q: "How do you price your services?",
                  a: "We offer both project-based and retainer pricing models. Each quote is tailored to the specific needs and scope of your project. We're transparent about our pricing and will provide detailed breakdowns.",
                },
                {
                  q: "Do you offer maintenance and support after launch?",
                  a: "Yes, we offer various support and maintenance packages to ensure your digital product continues to perform optimally after launch. We can discuss these options based on your specific needs.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-card border border-border rounded-xl p-6"
                >
                  <h3 className="text-lg font-bold mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
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
