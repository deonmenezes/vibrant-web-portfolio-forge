import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import {
    Palette,
    CheckCircle2,
    ArrowRight,
    Eye,
    Smartphone,
    Zap,
    Shield,
    Gamepad2,
    Layers3,
    TrendingUp,
    Clock,
    Headphones,
    Camera
} from 'lucide-react';

const DesignServices = () => {
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
            icon: Palette,
            title: "Brand Identity Design",
            description: "Complete brand identity including logos, color schemes, and visual guidelines."
        },
        {
            icon: Eye,
            title: "UI/UX Design",
            description: "User-centered design solutions for web and mobile applications."
        },
        {
            icon: Layers3,
            title: "Print Design",
            description: "Professional print materials including business cards, brochures, and marketing collateral."
        },
        {
            icon: Camera,
            title: "Digital Design",
            description: "Digital assets for web, social media, and digital marketing campaigns."
        },
        {
            icon: Shield,
            title: "Design Systems",
            description: "Comprehensive design systems and style guides for consistent branding."
        },
        {
            icon: Headphones,
            title: "Creative Direction",
            description: "Strategic creative direction and design consultation for your brand."
        }
    ];

    const applications = [
        {
            title: "Brand Identity & Logo Design",
            description: "Complete brand identity packages including logos, color palettes, and brand guidelines.",
            examples: ["Logo design", "Brand identity", "Style guides", "Brand guidelines"]
        },
        {
            title: "Web & Mobile Design",
            description: "User interface and user experience design for digital platforms.",
            examples: ["Website design", "Mobile app design", "UI/UX design", "Prototyping"]
        },
        {
            title: "Marketing & Advertising",
            description: "Design solutions for marketing campaigns and advertising materials.",
            examples: ["Social media graphics", "Advertisements", "Marketing collateral", "Campaign design"]
        },
        {
            title: "Print & Packaging",
            description: "Professional print design and packaging solutions for physical products.",
            examples: ["Business cards", "Brochures", "Packaging design", "Print materials"]
        }
    ];

    const technologies = [
        { name: "Adobe Creative Suite", description: "Professional design software including Photoshop, Illustrator, and InDesign" },
        { name: "Figma", description: "Collaborative design tool for UI/UX and prototyping" },
        { name: "Sketch", description: "Design tool for digital interfaces and user experience" },
        { name: "Adobe XD", description: "User experience design and prototyping platform" },
        { name: "Canva Pro", description: "Graphic design platform for marketing materials" },
        { name: "InVision", description: "Digital product design and collaboration platform" },
        { name: "Procreate", description: "Digital illustration and painting for iPad" },
        { name: "Affinity Designer", description: "Professional vector graphics and illustration software" }
    ];

    const processSteps = [
        {
            step: "01",
            title: "Discovery & Research",
            description: "Understand your brand, target audience, and design requirements through research and analysis.",
            duration: "1-2 weeks"
        },
        {
            step: "02",
            title: "Concept Development",
            description: "Create initial design concepts and explore different creative directions for your project.",
            duration: "2-3 weeks"
        },
        {
            step: "03",
            title: "Design Creation",
            description: "Develop the final design solutions with attention to detail and brand consistency.",
            duration: "3-4 weeks"
        },
        {
            step: "04",
            title: "Refinement & Testing",
            description: "Refine designs based on feedback and test usability for digital projects.",
            duration: "1-2 weeks"
        },
        {
            step: "05",
            title: "Delivery & Guidelines",
            description: "Deliver final designs with comprehensive guidelines and asset packages.",
            duration: "1 week"
        }
    ];

    const packages = [
        {
            name: "Basic Design Package",
            price: "$800",
            description: "Perfect for small businesses and startups",
            features: [
                "Logo design",
                "Basic brand identity",
                "Business card design",
                "2 revision rounds",
                "Source files",
                "1 month support"
            ],
            highlighted: false
        },
        {
            name: "Professional Design",
            price: "$2,500",
            description: "Complete design solution for established businesses",
            features: [
                "Full brand identity",
                "UI/UX design",
                "Marketing materials",
                "Design system",
                "3 revision rounds",
                "3 months support",
                "Brand guidelines"
            ],
            highlighted: true
        },
        {
            name: "Enterprise Design",
            price: "Custom",
            description: "Comprehensive design strategy for large organizations",
            features: [
                "Custom design strategy",
                "Complete brand overhaul",
                "Design systems",
                "Creative direction",
                "Unlimited revisions",
                "6 months support",
                "Project management",
                "Dedicated designer"
            ],
            highlighted: false
        }
    ];

    const portfolio = [
        {
            title: "Brand Identity Design",
            description: "Complete brand identity for a tech startup with modern, clean aesthetic",
            image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=800",
            tech: ["Adobe Illustrator", "Brand Guidelines", "Logo Design"]
        },
        {
            title: "UI/UX Design",
            description: "User interface design for a mobile banking application with intuitive navigation",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
            tech: ["Figma", "Prototyping", "User Research"]
        },
        {
            title: "Marketing Design",
            description: "Comprehensive marketing campaign design for a retail brand",
            image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
            tech: ["Adobe Creative Suite", "Print Design", "Digital Assets"]
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Navbar */}
            <Navbar 
                title="Design Services - Virelity.com"
                description="Professional design services including brand identity, UI/UX design, print design, and creative solutions for your business."
            />
            
            {/* Hero Section */}
            <section className="h-screen min-h-[500px] bg-gradient-to-br from-teal-600/10 to-cyan-600/10 relative overflow-hidden flex items-center justify-center">
                {/* Background Video only in hero */}
                <video
                    className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-30"
                    src="/videos/design.mp4"
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
                            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-teal-600/10 to-cyan-600/10 rounded-full px-6 py-3 mb-8">
                                <Palette className="w-6 h-6 text-teal-400" />
                                <span className="text-teal-400 font-semibold">Design Services</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-teal-400 to-cyan-400 bg-clip-text text-transparent">
                                Transform Your Brand with Stunning Design
                            </h1>

                            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                                Professional design services that create compelling visual experiences, build strong brand identities, and deliver designs that connect with your audience and drive results.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                                    Start Your Design Project
                                </button>
                                <button className="border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Design Services?</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            We create visually stunning designs that communicate your message effectively and build lasting brand connections.
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
                                    className="bg-card border border-border rounded-xl p-6 hover:border-teal-400/30 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="bg-gradient-to-r from-teal-600/10 to-cyan-600/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                        <IconComponent className="w-6 h-6 text-teal-400" />
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Design Services Applications</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Discover how professional design services can enhance your brand and create meaningful connections with your audience.
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
                                className="bg-card border border-border rounded-xl p-8 hover:border-teal-400/30 hover:shadow-lg transition-all duration-300"
                            >
                                <h3 className="text-2xl font-semibold mb-4 text-teal-400">{app.title}</h3>
                                <p className="text-muted-foreground mb-6">{app.description}</p>
                                <ul className="space-y-2">
                                    {app.examples.map((example, idx) => (
                                        <li key={idx} className="flex items-center space-x-3">
                                            <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0" />
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Design Technologies</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            We use industry-standard design software and tools to deliver exceptional creative results.
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
                                className="bg-card border border-border rounded-lg p-6 text-center hover:border-teal-400/30 hover:shadow-lg transition-all duration-300"
                            >
                                <h3 className="text-lg font-semibold mb-2 text-teal-400">{tech.name}</h3>
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Design Process</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            We follow a systematic approach to create high-quality designs that meet your requirements and exceed expectations.
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
                                <div className="bg-card border border-border rounded-xl p-6 hover:border-teal-400/30 hover:shadow-lg transition-all duration-300 h-full">
                                    <div className="text-3xl font-bold text-teal-400 mb-3">{step.step}</div>
                                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                    <p className="text-muted-foreground mb-4">{step.description}</p>
                                    <div className="flex items-center text-sm text-teal-400">
                                        <Clock className="w-4 h-4 mr-2" />
                                        {step.duration}
                                    </div>
                                </div>
                                {index < processSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                                        <ArrowRight className="w-8 h-8 text-teal-400/30" />
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Design Services Packages</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Choose the perfect package for your design needs.
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
                                className={`bg-card border rounded-xl p-8 hover:shadow-lg transition-all duration-300 ${pkg.highlighted ? 'border-teal-400 shadow-lg scale-105' : 'border-border'
                                    }`}
                            >
                                {pkg.highlighted && (
                                    <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                                <div className="text-3xl font-bold text-teal-400 mb-2">{pkg.price}</div>
                                <p className="text-muted-foreground mb-6">{pkg.description}</p>

                                <ul className="space-y-3 mb-8">
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start space-x-3">
                                            <CheckCircle2 className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${pkg.highlighted
                                        ? 'bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white'
                                        : 'border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white'
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Design Projects We've Created</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Explore our portfolio of stunning design projects across different industries and applications.
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
                                className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-teal-400/30 hover:shadow-lg transition-all duration-300"
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
                                            <span key={tech} className="bg-teal-400/10 text-teal-400 text-xs px-2 py-1 rounded-full">
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
            <section className="py-20 bg-gradient-to-r from-teal-600/10 to-cyan-600/10">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Transform Your Brand?
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            Let's discuss how professional design services can elevate your brand and create meaningful connections with your audience.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                                Schedule Design Consultation
                            </button>
                            <button className="border border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
                                View More Projects
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DesignServices;
