import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import {
    Palette,
    CheckCircle2,
    ArrowRight,
    Eye,
    Zap,
    Shield,
    Target,
    Layers3,
    BarChart3,
    Clock,
    MessageSquare,
    Globe,
    Users
} from 'lucide-react';

const UIUXDesignService = () => {
    // Scroll to top on mount
    useEffect(() => {
        const lenis = (window as any).lenis;
        if (lenis && typeof lenis.scrollTo === 'function') {
            lenis.scrollTo(0, { immediate: true });
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        }
    }, []);
    const features = [
        {
            icon: Eye,
            title: "User-Centered Design",
            description: "Design solutions focused on user needs, behaviors, and preferences for optimal experiences."
        },
        {
            icon: Palette,
            title: "Visual Design Excellence",
            description: "Stunning visual designs that create strong brand connections and user engagement."
        },
        {
            icon: Target,
            title: "Usability & Accessibility",
            description: "Intuitive interfaces that are easy to use and accessible to all users."
        },
        {
            icon: BarChart3,
            title: "Data-Driven Insights",
            description: "User research and analytics to inform design decisions and improve user experience."
        },
        {
            icon: Layers3,
            title: "Design Systems",
            description: "Comprehensive design systems that ensure consistency across all touchpoints."
        },
        {
            icon: Users,
            title: "User Research",
            description: "In-depth user research and testing to understand user needs and pain points."
        }
    ];

    const applications = [
        {
            title: "Web UI/UX Design",
            description: "User interface and user experience design for websites and web applications.",
            examples: ["Website design", "Web app interfaces", "Landing pages", "E-commerce UX"]
        },
        {
            title: "Mobile UI/UX Design",
            description: "Mobile-first design solutions for iOS and Android applications.",
            examples: ["Mobile app design", "Responsive design", "Touch interfaces", "Mobile UX"]
        },
        {
            title: "Design Systems & Guidelines",
            description: "Comprehensive design systems and style guides for consistent branding.",
            examples: ["Design systems", "Style guides", "Component libraries", "Brand guidelines"]
        },
        {
            title: "User Research & Testing",
            description: "User research, usability testing, and user experience optimization.",
            examples: ["User interviews", "Usability testing", "A/B testing", "User journey mapping"]
        }
    ];

    const technologies = [
        { name: "Figma", description: "Collaborative design tool for UI/UX and prototyping" },
        { name: "Adobe XD", description: "User experience design and prototyping platform" },
        { name: "Sketch", description: "Design tool for digital interfaces and user experience" },
        { name: "InVision", description: "Digital product design and collaboration platform" },
        { name: "Adobe Creative Suite", description: "Professional design software for visual design" },
        { name: "Principle", description: "Animation and interaction design tool" },
        { name: "Framer", description: "Interactive prototyping and design tool" },
        { name: "Zeplin", description: "Design handoff and collaboration platform" }
    ];

    const processSteps = [
        {
            step: "01",
            title: "Research & Discovery",
            description: "Understand user needs, business goals, and project requirements through research and analysis.",
            duration: "1-2 weeks"
        },
        {
            step: "02",
            title: "User Research",
            description: "Conduct user interviews, surveys, and research to understand user behaviors and needs.",
            duration: "2-3 weeks"
        },
        {
            step: "03",
            title: "Wireframing & Prototyping",
            description: "Create wireframes, user flows, and interactive prototypes to visualize the user experience.",
            duration: "3-4 weeks"
        },
        {
            step: "04",
            title: "Visual Design",
            description: "Develop high-fidelity designs with attention to visual hierarchy, typography, and branding.",
            duration: "2-3 weeks"
        },
        {
            step: "05",
            title: "Testing & Iteration",
            description: "Conduct usability testing and iterate based on user feedback and performance data.",
            duration: "1-2 weeks"
        }
    ];

    const packages = [
        {
            name: "Basic UI/UX Design",
            price: "$2,500",
            description: "Perfect for small projects and startups",
            features: [
                "User research",
                "Wireframes & prototypes",
                "Visual design",
                "Usability testing",
                "Design handoff",
                "2 revision rounds"
            ],
            highlighted: false
        },
        {
            name: "Professional UI/UX",
            price: "$6,000",
            description: "Comprehensive design solution for growing businesses",
            features: [
                "Comprehensive user research",
                "Interactive prototypes",
                "Visual design system",
                "Usability testing",
                "Design system creation",
                "3 revision rounds",
                "Design handoff support"
            ],
            highlighted: true
        },
        {
            name: "Enterprise UI/UX",
            price: "Custom",
            description: "Full-service design strategy for large organizations",
            features: [
                "Custom design strategy",
                "Complete design system",
                "User research & testing",
                "Design team training",
                "Ongoing design support",
                "Unlimited revisions",
                "Dedicated designer",
                "Design documentation"
            ],
            highlighted: false
        }
    ];

    const portfolio = [
        {
            title: "E-commerce Website Design",
            description: "User-centered e-commerce website with optimized conversion funnel and mobile-first design",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
            tech: ["Figma", "User Research", "Prototyping"]
        },
        {
            title: "Mobile Banking App",
            description: "Intuitive mobile banking interface with seamless user experience and accessibility features",
            image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=800",
            tech: ["Sketch", "InVision", "User Testing"]
        },
        {
            title: "Design System Creation",
            description: "Comprehensive design system for a SaaS platform with component library and guidelines",
            image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
            tech: ["Figma", "Design Systems", "Component Library"]
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Navbar */}
            <Navbar 
                title="UI/UX Design Services - Virelity.com"
                description="Professional UI/UX design services that create intuitive, beautiful, and user-centered digital experiences for web and mobile applications."
            />
            
            {/* Hero Section */}
            <section className="h-screen min-h-[500px] bg-gradient-to-br from-purple-600/10 to-violet-600/10 relative overflow-hidden flex items-center justify-center">
                {/* Background Video only in hero */}
                <video
                    className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-30"
                    src="/videos/uiux.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-grid-pattern opacity-5 z-10" />
                <div className="container relative z-20 flex flex-col items-center justify-center h-full">
                    <div className="max-w-4xl mx-auto text-center w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600/10 to-violet-600/10 rounded-full px-6 py-3 mb-8">
                                <Palette className="w-6 h-6 text-purple-400" />
                                <span className="text-purple-400 font-semibold">UI/UX Design</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-purple-400 to-violet-400 bg-clip-text text-transparent">
                                Design Experiences That Delight Users
                            </h1>

                            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                                Create intuitive, beautiful, and user-centered designs that drive engagement, improve usability, and deliver exceptional user experiences across all digital platforms with our comprehensive UI/UX design services.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                                    Start Your Design Project
                                </button>
                                <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
                                    View Design Portfolio
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our UI/UX Design?</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            We create user-centered designs that deliver exceptional experiences and drive business results.
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
                                    className="bg-card border border-border rounded-xl p-6 hover:border-purple-400/30 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="bg-gradient-to-r from-purple-600/10 to-violet-600/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                        <IconComponent className="w-6 h-6 text-purple-400" />
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">UI/UX Design Services</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Discover how our comprehensive UI/UX design services can transform your digital products and create meaningful user experiences.
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
                                className="bg-card border border-border rounded-xl p-8 hover:border-purple-400/30 hover:shadow-lg transition-all duration-300"
                            >
                                <h3 className="text-2xl font-semibold mb-4 text-purple-400">{app.title}</h3>
                                <p className="text-muted-foreground mb-6">{app.description}</p>
                                <ul className="space-y-2">
                                    {app.examples.map((example, idx) => (
                                        <li key={idx} className="flex items-center space-x-3">
                                            <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0" />
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Design Technologies & Tools</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            We use industry-leading design tools and platforms to create exceptional user experiences.
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
                                className="bg-card border border-border rounded-lg p-6 text-center hover:border-purple-400/30 hover:shadow-lg transition-all duration-300"
                            >
                                <h3 className="text-lg font-semibold mb-2 text-purple-400">{tech.name}</h3>
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our UI/UX Design Process</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            We follow a user-centered design methodology to create exceptional user experiences that meet business goals.
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
                                <div className="bg-card border border-border rounded-xl p-6 hover:border-purple-400/30 hover:shadow-lg transition-all duration-300 h-full">
                                    <div className="text-3xl font-bold text-purple-400 mb-3">{step.step}</div>
                                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                    <p className="text-muted-foreground mb-4">{step.description}</p>
                                    <div className="flex items-center text-sm text-purple-400">
                                        <Clock className="w-4 h-4 mr-2" />
                                        {step.duration}
                                    </div>
                                </div>
                                {index < processSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                                        <ArrowRight className="w-8 h-8 text-purple-400/30" />
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">UI/UX Design Packages</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Choose the perfect package for your UI/UX design needs and create exceptional user experiences.
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
                                className={`bg-card border rounded-xl p-8 hover:shadow-lg transition-all duration-300 ${pkg.highlighted ? 'border-purple-400 shadow-lg scale-105' : 'border-border'
                                    }`}
                            >
                                {pkg.highlighted && (
                                    <div className="bg-gradient-to-r from-purple-600 to-violet-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                                <div className="text-3xl font-bold text-purple-400 mb-2">{pkg.price}</div>
                                <p className="text-muted-foreground mb-6">{pkg.description}</p>

                                <ul className="space-y-3 mb-8">
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start space-x-3">
                                            <CheckCircle2 className="w-5 h-5 text-purple-400 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${pkg.highlighted
                                        ? 'bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white'
                                        : 'border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white'
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">UI/UX Design Projects</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Explore our portfolio of successful UI/UX design projects that delivered exceptional user experiences.
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
                                className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-purple-400/30 hover:shadow-lg transition-all duration-300"
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
                                            <span key={tech} className="bg-purple-400/10 text-purple-400 text-xs px-2 py-1 rounded-full">
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
            <section className="py-20 bg-gradient-to-r from-purple-600/10 to-violet-600/10">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Design Exceptional Experiences?
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            Let's discuss how our UI/UX design expertise can transform your digital products and create meaningful connections with your users.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-gradient-to-r from-purple-600 to-violet-600 hover:from-purple-700 hover:to-violet-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                                Schedule Design Consultation
                            </button>
                            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
                                View More Projects
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default UIUXDesignService;
