import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { PageTransition } from "@/components/PageTransition";
import Example from "../components/image-gallery";
import { motion } from "framer-motion";
import { 
  Users, 
  Target, 
  Award, 
  TrendingUp, 
  Lightbulb, 
  CheckCircle, 
  Users2, 
  Heart,
  Sparkles,
  Star,
  Zap,
  Shield
} from "lucide-react";

const About = () => {
  const stats = [
    { value: "50+", label: "Projects Completed" },
    { value: "15+", label: "Expert Team Members" },
    { value: "1+", label: "Years Experience" },
    { value: "30+", label: "Happy Clients" },
  ];

  const values = [
    {
      title: "Innovation",
      description:
        "We stay at the forefront of technology trends and continuously explore new approaches to solve complex problems.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
        </svg>
      ),
    },
    {
      title: "Quality",
      description:
        "We never compromise on quality, ensuring every project meets the highest standards of performance and reliability.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
          <polyline points="22 4 12 14.01 9 11.01"></polyline>
        </svg>
      ),
    },
    {
      title: "Collaboration",
      description:
        "We believe in working closely with our clients as true partners fostering open communication and mutual respect.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-primary"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        {/* Hero Section - Redesigned */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-full blur-2xl animate-pulse delay-500"></div>
          </div>

          {/* Floating Particles */}
          <div className="absolute inset-0">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white/20 rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              />
            ))}
          </div>

          <div className="container relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              {/* Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-blue-500/20 border border-primary/30 backdrop-blur-sm mb-8"
              >
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">About Virelity</span>
              </motion.div>

              {/* Main Heading */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold mb-8"
              >
                <span className="bg-gradient-to-r from-white via-primary to-blue-400 bg-clip-text text-transparent">
                  Our Story
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
              >
                Learn about our journey, our mission, and the values that drive us to create exceptional digital experiences.
              </motion.p>

              {/* Floating Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="flex flex-wrap justify-center gap-8 mt-12"
              >
                {[
                  { icon: Users, label: "Expert Team", value: "15+" },
                  { icon: Award, label: "Projects", value: "50+" },
                  { icon: TrendingUp, label: "Years", value: "1+" },
                  { icon: Heart, label: "Happy Clients", value: "30+" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="flex flex-col items-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/30 transition-all duration-300"
                  >
                    <stat.icon className="w-8 h-8 text-primary mb-2" />
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>
        {/* About Us Content - Redesigned */}
        <section className="py-20 relative overflow-hidden">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                Who We Are & Our Mission
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover the story behind Virelity and the mission that drives our passion for digital excellence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Gallery Section */}
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
                        <Users2 className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold">Meet Our Team</h3>
                        <p className="text-muted-foreground">The talented individuals behind our success</p>
                      </div>
                    </div>
                    <Example />
                  </div>
                </div>
              </motion.div>

              {/* Content Section */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Who We Are Card */}
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-emerald-500/5 opacity-50"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500/20 to-transparent rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center">
                        <Target className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold">Who We Are</h3>
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Founded in 2025, Virelity.com has been at the forefront of digital innovation, helping businesses transform their online presence and leverage technology to achieve their goals.
                    </p>
                    <p className="text-muted-foreground">
                      Our team of expert designers, developers, and strategists combines creativity with technical expertise to deliver solutions that not only look great but perform exceptionally well.
                    </p>
                  </div>
                </div>

                {/* Our Mission Card */}
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-50"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                        <Zap className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold">Our Mission</h3>
                    </div>
                    <p className="text-muted-foreground mb-6">
                      To empower businesses through innovative digital solutions that drive growth, enhance user experiences, and create lasting value in an ever-evolving digital landscape.
                    </p>
                    <Button className="bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white">
                      Learn About Our Team
                    </Button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Remove duplicate About Us section. Only keep the previous one with gallery. */}

        {/* Stats Section - Redesigned */}
        <section className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                Our Impact in Numbers
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                The results speak for themselves - here's what we've achieved together with our clients.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 text-center overflow-hidden hover:border-primary/30 transition-all duration-300"
                >
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-primary bg-clip-text text-transparent mb-2">
                      {stat.value}
                    </div>
                    <div className="text-lg text-gray-300 group-hover:text-white transition-colors duration-300">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values - Redesigned */}
        <section className="py-20 relative overflow-hidden">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-blue-500/20 border border-primary/30 backdrop-blur-sm mb-8"
              >
                <Star className="w-5 h-5 text-primary" />
                <span className="text-primary font-semibold">Our Values</span>
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                What Drives Us
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our core values shape everything we do and guide our approach to creating exceptional digital experiences.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, staggerChildren: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 30, scale: 0.8 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/20 overflow-hidden hover:border-primary/30 transition-all duration-300"
                >
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex flex-col items-start space-y-6">
                      <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-blue-500/20 group-hover:from-primary/30 group-hover:to-blue-500/30 transition-all duration-300">
                        {value.icon}
                      </div>
                      <h3 className="text-xl font-semibold text-white group-hover:text-primary transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="text-gray-300 group-hover:text-white transition-colors duration-300 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Call to Action - Redesigned */}
        <section className="py-20 relative overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto"
            >
              {/* Animated Background Elements */}
              <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-primary/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
              </div>

              <div className="relative z-10">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-blue-500/20 border border-primary/30 backdrop-blur-sm mb-8"
                >
                  <Shield className="w-5 h-5 text-primary" />
                  <span className="text-primary font-semibold">Ready to Start?</span>
                </motion.div>

                <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-primary bg-clip-text text-transparent">
                  Ready to work with us?
                </h2>
                <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
                  Let's collaborate to create digital solutions that elevate your brand and drive results.
                </p>
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  <Button asChild className="bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 text-white px-12 py-6 text-lg rounded-2xl shadow-2xl hover:shadow-primary/25 transition-all duration-300">
                    <Link to="/contact">Get in Touch</Link>
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default About;
