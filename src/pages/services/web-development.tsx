import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import {
    Code,
    CheckCircle2,
    ArrowRight,
    Globe,
    Smartphone,
    Zap,
    Shield,
    Database,
    Layers3,
    TrendingUp,
    Clock,
    Search,
    Palette
} from 'lucide-react';

const WebDevelopmentService = () => {
    // Scroll to top on mount
    useEffect(() => {
        // Use Lenis if available, else fallback
        const lenis = (window as any).lenis;
        if (lenis && typeof lenis.scrollTo === 'function') {
            lenis.scrollTo(0, { immediate: true });
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        }
    }, []);
    const features = [
        {
            icon: Globe,
            title: "Responsive Design",
            description: "Websites that look and work perfectly on all devices and screen sizes."
        },
        {
            icon: Smartphone,
            title: "Mobile-First Approach",
            description: "Optimized for mobile devices with touch-friendly interfaces and fast loading."
        },
        {
            icon: Database,
            title: "Modern Technologies",
            description: "Built with the latest frameworks and technologies for optimal performance."
        },
        {
            icon: Shield,
            title: "Security & Performance",
            description: "Secure, fast-loading websites with SEO optimization and analytics."
        },
        {
            icon: Search,
            title: "SEO Optimized",
            description: "Search engine optimized to improve visibility and drive organic traffic."
        },
        {
            icon: Palette,
            title: "Custom Design",
            description: "Unique, branded designs that reflect your business identity."
        }
    ];

    const applications = [
        {
            title: "E-commerce Solutions",
            description: "Complete online stores with payment processing and inventory management.",
            examples: ["Online stores", "Payment gateways", "Inventory systems", "Order management"]
        },
        {
            title: "Corporate Websites",
            description: "Professional websites that establish credibility and showcase your business.",
            examples: ["Company websites", "Landing pages", "Portfolio sites", "Business directories"]
        },
        {
            title: "Web Applications",
            description: "Custom web applications that streamline business processes.",
            examples: ["CRM systems", "Project management", "Booking systems", "Admin dashboards"]
        },
        {
            title: "Content Management",
            description: "Easy-to-manage websites with powerful content management systems.",
            examples: ["Blog platforms", "News sites", "Educational portals", "Community forums"]
        }
    ];

    const technologies = [
        { name: "React", description: "Modern JavaScript library for building user interfaces" },
        { name: "Next.js", description: "Full-stack React framework for production" },
        { name: "Node.js", description: "Server-side JavaScript runtime environment" },
        { name: "TypeScript", description: "Typed JavaScript for better development experience" },
        { name: "Tailwind CSS", description: "Utility-first CSS framework for rapid development" },
        { name: "MongoDB", description: "NoSQL database for scalable applications" },
        { name: "PostgreSQL", description: "Advanced open-source relational database" },
        { name: "AWS/Vercel", description: "Cloud hosting and deployment platforms" }
    ];

    const processSteps = [
        {
            step: "01",
            title: "Discovery & Planning",
            description: "Understand your requirements, goals, and target audience to create a strategic plan.",
            duration: "1-2 weeks"
        },
        {
            step: "02",
            title: "Design & Prototyping",
            description: "Create wireframes, mockups, and interactive prototypes for your approval.",
            duration: "2-3 weeks"
        },
        {
            step: "03",
            title: "Development",
            description: "Build your website using modern technologies and best practices.",
            duration: "4-8 weeks"
        },
        {
            step: "04",
            title: "Testing & Optimization",
            description: "Comprehensive testing across devices and browsers, performance optimization.",
            duration: "1-2 weeks"
        },
        {
            step: "05",
            title: "Launch & Support",
            description: "Deploy your website and provide ongoing maintenance and support.",
            duration: "Ongoing"
        }
    ];

    const packages = [
        {
            name: "Basic Website",
            price: "$3,500",
            description: "Perfect for small businesses and startups",
            features: [
                "Responsive design",
                "Up to 5 pages",
                "Contact forms",
                "Basic SEO setup",
                "Social media integration",
                "3 months support"
            ],
            highlighted: false
        },
        {
            name: "E-commerce Website",
            price: "$8,500",
            description: "Complete online store with payment processing",
            features: [
                "Full e-commerce functionality",
                "Payment gateway integration",
                "Inventory management",
                "Order tracking",
                "Admin dashboard",
                "6 months support",
                "Analytics integration"
            ],
            highlighted: true
        },
        {
            name: "Custom Web App",
            price: "Custom",
            description: "Tailored web application for your specific needs",
            features: [
                "Custom functionality",
                "Database design",
                "User authentication",
                "API development",
                "Advanced features",
                "12 months support",
                "Training & documentation",
                "Dedicated project manager"
            ],
            highlighted: false
        }
    ];

    const portfolio = [
        {
            title: "E-commerce Platform",
            description: "Modern online store with advanced product filtering and payment processing",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
            tech: ["React", "Node.js", "Stripe", "MongoDB"]
        },
        {
            title: "Corporate Website",
            description: "Professional business website with lead generation and analytics",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
            tech: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"]
        },
        {
            title: "Web Application",
            description: "Custom CRM system for managing customer relationships and sales",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            tech: ["React", "Firebase", "Material-UI", "Chart.js"]
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Navbar */}
            <Navbar 
                title="Web Development Services - Virelity.com"
                description="Professional web development services including responsive websites, web applications, and e-commerce solutions built with modern technologies."
            />
            
            {/* Hero Section */}
            <section className="h-screen min-h-[500px] bg-gradient-to-br from-blue-600/10 to-purple-600/10 relative overflow-hidden flex items-center justify-center">
                {/* Background Video only in hero */}
                <video
                    className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-30"
                    src="/videos/website.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/virelity_navbar.png"
                />
                <div className="absolute inset-0 bg-grid-pattern opacity-5 z-10" />
                <div className="container relative z-20 flex flex-col items-center justify-center h-full">
                    <div className="max-w-4xl mx-auto text-center w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full px-6 py-3 mb-8">
                                <Code className="w-6 h-6 text-blue-400" />
                                <span className="text-blue-400 font-semibold">Web Development</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-blue-400 to-purple-400 bg-clip-text text-transparent">
                                Modern Web Solutions That Drive Results
                            </h1>

                            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                                We build responsive, fast, and user-friendly websites and web applications that help your business grow and succeed in the digital world.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                                    Start Your Web Project
                                </button>
                                <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
                                    View Our Portfolio
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Web Development?</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            We create modern, responsive websites that deliver exceptional user experiences and drive business growth.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => {
                            const IconComponent = feature.icon;
                            return (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="bg-card border border-border rounded-xl p-6 hover:border-blue-400/30 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="bg-gradient-to-r from-blue-600/10 to-purple-600/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                        <IconComponent className="w-6 h-6 text-blue-400" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-muted-foreground">{feature.description}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Applications Section */}
            <section className="py-20 bg-muted/30">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Web Development Solutions</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            From simple websites to complex web applications, we deliver solutions that meet your business needs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {applications.map((app, index) => (
                            <motion.div
                                key={app.title}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-card border border-border rounded-xl p-8 hover:border-blue-400/30 hover:shadow-lg transition-all duration-300"
                            >
                                <h3 className="text-2xl font-semibold mb-4 text-blue-400">{app.title}</h3>
                                <p className="text-muted-foreground mb-6">{app.description}</p>
                                <ul className="space-y-2">
                                    {app.examples.map((example, idx) => (
                                        <li key={idx} className="flex items-center space-x-3">
                                            <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0" />
                                            <span className="text-sm">{example}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className="py-20">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Modern Technologies</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            We use cutting-edge technologies to build fast, scalable, and maintainable web solutions.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-card border border-border rounded-lg p-6 text-center hover:border-blue-400/30 hover:shadow-lg transition-all duration-300"
                            >
                                <h3 className="text-lg font-semibold mb-2 text-blue-400">{tech.name}</h3>
                                <p className="text-sm text-muted-foreground">{tech.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-20 bg-muted/30">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Web Development Process</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            We follow a proven methodology to deliver high-quality web solutions on time and within budget.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={step.step}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="bg-card border border-border rounded-xl p-6 hover:border-blue-400/30 hover:shadow-lg transition-all duration-300 h-full">
                                    <div className="text-3xl font-bold text-blue-400 mb-3">{step.step}</div>
                                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                    <p className="text-muted-foreground mb-4">{step.description}</p>
                                    <div className="flex items-center text-sm text-blue-400">
                                        <Clock className="w-4 h-4 mr-2" />
                                        {step.duration}
                                    </div>
                                </div>
                                {index < processSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                                        <ArrowRight className="w-8 h-8 text-blue-400/30" />
                                    </div>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section className="py-20">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Web Development Packages</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Choose the perfect package for your web development needs.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {packages.map((pkg, index) => (
                            <motion.div
                                key={pkg.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`bg-card border rounded-xl p-8 hover:shadow-lg transition-all duration-300 ${pkg.highlighted ? 'border-blue-400 shadow-lg scale-105' : 'border-border'
                                    }`}
                            >
                                {pkg.highlighted && (
                                    <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                                <div className="text-3xl font-bold text-blue-400 mb-2">{pkg.price}</div>
                                <p className="text-muted-foreground mb-6">{pkg.description}</p>

                                <ul className="space-y-3 mb-8">
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start space-x-3">
                                            <CheckCircle2 className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${pkg.highlighted
                                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white'
                                        : 'border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white'
                                    }`}>
                                    Get Started
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section className="py-20 bg-muted/30">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Web Projects We've Built</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Explore our portfolio of successful web development projects across different industries.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {portfolio.map((project, index) => (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-blue-400/30 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="aspect-video overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                    <p className="text-muted-foreground mb-4">{project.description}</p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span key={tech} className="bg-blue-400/10 text-blue-400 text-xs px-2 py-1 rounded-full">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-blue-600/10 to-purple-600/10">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Build Your Website?
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            Let's discuss how we can create a powerful web presence that drives your business forward and engages your audience effectively.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                                Schedule Web Development Consultation
                            </button>
                            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
                                View More Projects
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default WebDevelopmentService;