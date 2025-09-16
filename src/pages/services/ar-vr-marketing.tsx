import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import {
    Megaphone,
    CheckCircle2,
    ArrowRight,
    Target,
    Users,
    Zap,
    BarChart3,
    Smartphone,
    TrendingUp,
    Clock,
    Eye,
    Share2,
    Camera,
    Heart
} from 'lucide-react';

const ARVRMarketingService = () => {
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
            icon: Target,
            title: "Immersive Brand Experiences",
            description: "Create unforgettable brand interactions that deeply engage customers and build lasting connections."
        },
        {
            icon: Users,
            title: "Interactive Product Demos",
            description: "Let customers explore and interact with products in virtual environments before making purchase decisions."
        },
        {
            icon: Eye,
            title: "Virtual Showrooms",
            description: "Showcase your entire product catalog in immersive 3D environments accessible from anywhere."
        },
        {
            icon: Share2,
            title: "Social AR Campaigns",
            description: "Viral AR filters and experiences that encourage user-generated content and social sharing."
        },
        {
            icon: BarChart3,
            title: "Data-Driven Insights",
            description: "Track engagement metrics and user behavior to optimize your AR/VR marketing campaigns."
        },
        {
            icon: Smartphone,
            title: "Cross-Platform Reach",
            description: "Deploy campaigns across mobile AR, web-based experiences, and VR headsets for maximum reach."
        }
    ];

    const applications = [
        {
            title: "Retail & E-commerce",
            description: "Transform online shopping with immersive product visualization and virtual try-ons.",
            examples: ["Virtual try-on experiences", "3D product configurators", "AR furniture placement", "Virtual shopping assistants"]
        },
        {
            title: "Real Estate Marketing",
            description: "Showcase properties with virtual tours and interactive experiences.",
            examples: ["Virtual property walkthroughs", "Neighborhood exploration", "Interior design visualization", "Development previews"]
        },
        {
            title: "Event Marketing",
            description: "Create memorable event experiences and extend reach beyond physical limitations.",
            examples: ["Virtual event spaces", "Interactive brand activations", "AR photo experiences", "Remote product launches"]
        },
        {
            title: "Brand Campaigns",
            description: "Engage audiences with innovative storytelling and interactive brand narratives.",
            examples: ["AR social filters", "Immersive brand stories", "Interactive advertisements", "Gamified experiences"]
        }
    ];

    const technologies = [
        { name: "Instagram AR", description: "Create viral AR filters for Instagram and Facebook" },
        { name: "Snapchat Lens", description: "Develop engaging Snapchat AR experiences" },
        { name: "WebAR", description: "Browser-based AR accessible without app downloads" },
        { name: "Unity AR Foundation", description: "Cross-platform AR development framework" },
        { name: "8th Wall", description: "Web-based AR platform for immersive experiences" },
        { name: "Spark AR", description: "Meta's platform for creating AR effects" },
        { name: "ARCore/ARKit", description: "Native mobile AR development platforms" },
        { name: "WebXR", description: "Immersive web experiences for VR and AR" }
    ];

    const processSteps = [
        {
            step: "01",
            title: "Strategy & Planning",
            description: "Define marketing objectives, target audience, and choose the best AR/VR approach for your campaign.",
            duration: "1-2 weeks"
        },
        {
            step: "02",
            title: "Creative Concept",
            description: "Develop compelling storylines, user journeys, and interactive elements that align with your brand.",
            duration: "2-3 weeks"
        },
        {
            step: "03",
            title: "Content Creation",
            description: "Build 3D assets, animations, and interactive elements optimized for marketing performance.",
            duration: "3-5 weeks"
        },
        {
            step: "04",
            title: "Platform Development",
            description: "Deploy experiences across chosen platforms with tracking and analytics integration.",
            duration: "4-6 weeks"
        },
        {
            step: "05",
            title: "Launch & Optimization",
            description: "Campaign launch with real-time monitoring, performance analysis, and ongoing optimization.",
            duration: "2-4 weeks"
        }
    ];

    const packages = [
        {
            name: "AR Social Campaign",
            price: "$8,000",
            description: "Perfect for social media marketing and brand awareness",
            features: [
                "Instagram/Snapchat AR filter",
                "Basic 3D animations",
                "Brand integration",
                "Social sharing features",
                "Performance analytics",
                "2 months support"
            ],
            highlighted: false
        },
        {
            name: "Interactive Product Demo",
            price: "$18,000",
            description: "Immersive product visualization for sales conversion",
            features: [
                "WebAR product showcase",
                "3D product configurator",
                "Interactive features",
                "Mobile optimization",
                "Lead generation forms",
                "Analytics dashboard",
                "4 months support"
            ],
            highlighted: true
        },
        {
            name: "Full VR Campaign",
            price: "Custom",
            description: "Complete immersive marketing solution",
            features: [
                "Custom VR experience",
                "Multi-platform deployment",
                "Advanced interactions",
                "Brand storytelling",
                "Event integration",
                "Comprehensive analytics",
                "12 months support",
                "Dedicated account manager"
            ],
            highlighted: false
        }
    ];

    const portfolio = [
        {
            title: "AR Product Showcase",
            description: "Interactive AR experience allowing customers to visualize products in their space",
            video: "/videos/ar-smart-home-demo.gif",
            iconBg: "bg-green-500",
            icon: <span className="inline-block text-white text-xl">📱</span>,
        },
        {
            title: "Virtual Showroom",
            description: "Immersive VR showroom for luxury brands to showcase their collections",
            video: "/videos/arservice.mp4",
            iconBg: "bg-purple-500",
            icon: <span className="inline-block text-white text-xl">🏪</span>,
        },
        {
            title: "Interactive Brand Experience",
            description: "Gamified AR experience that tells brand story through interactive elements",
            video: "/videos/AR.gif",
            iconBg: "bg-blue-500",
            icon: <span className="inline-block text-white text-xl">🎯</span>,
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Navbar */}
            <Navbar
                title="AR/VR Marketing Services - Virelity.com"
                description="Revolutionary AR and VR marketing solutions that transform customer engagement and drive conversions through immersive brand experiences."
            />

            {/* Hero Section */}
            <section className="h-screen min-h-[500px] bg-gradient-to-br from-orange-600/10 to-red-600/10 relative overflow-hidden flex items-center justify-center">
                {/* Background Video */}
                <video
                    className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-30"
                    src="/videos/arservice.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                <div className="absolute inset-0 bg-grid-pattern opacity-5 z-10" />
                <div className="container relative z-20 flex flex-col items-center justify-center h-full">
                    <div className="max-w-4xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-600/10 to-red-600/10 rounded-full px-6 py-3 mb-8">
                                <Megaphone className="w-6 h-6 text-orange-400" />
                                <span className="text-orange-400 font-semibold">AR/VR Marketing</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-orange-400 to-red-400 bg-clip-text text-transparent">
                                Marketing That Breaks Reality
                            </h1>

                            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                                Transform your marketing campaigns with immersive AR and VR experiences that captivate audiences, boost engagement, and drive unprecedented conversion rates.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                                    Launch AR/VR Campaign
                                </button>
                                <button className="border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
                                    View Campaign Examples
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section className="py-20 bg-muted/30">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">AR/VR Marketing Campaigns We've Created</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Explore our portfolio of immersive marketing experiences that drove real business results.
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
                                className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-orange-400/30 hover:shadow-lg transition-all duration-300"
                            >
                                <div className="aspect-video overflow-hidden relative">
                                    {project.video.endsWith('.gif') ? (
                                        <img
                                            src={project.video}
                                            alt={project.title}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    ) : (
                                        <video
                                            src={project.video}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                        />
                                    )}
                                    <div className="absolute top-4 left-4">
                                        <span className={`inline-flex items-center justify-center rounded-md px-2 py-1 text-lg font-bold shadow ${project.iconBg}`}>{project.icon}</span>
                                    </div>
                                </div>
                                <div className="p-6 absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                                    <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">{project.title}</h3>
                                    <p className="text-white/90 mb-4 drop-shadow-lg">{project.description}</p>
                                    <a href="#" className="learn-more-btn">
                                        <span>Learn more</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={4}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why AR/VR Marketing Works</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Immersive technologies create deeper connections, higher engagement, and better conversion rates than traditional marketing.
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
                                    className="bg-card border border-border rounded-xl p-6 hover:border-orange-400/30 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="bg-gradient-to-r from-orange-600/10 to-red-600/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                        <IconComponent className="w-6 h-6 text-orange-400" />
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">AR/VR Marketing Applications</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Discover how immersive marketing can transform your industry and customer relationships.
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
                                className="bg-card border border-border rounded-xl p-8 hover:border-orange-400/30 hover:shadow-lg transition-all duration-300"
                            >
                                <h3 className="text-2xl font-semibold mb-4 text-orange-400">{app.title}</h3>
                                <p className="text-muted-foreground mb-6">{app.description}</p>
                                <ul className="space-y-2">
                                    {app.examples.map((example, idx) => (
                                        <li key={idx} className="flex items-center space-x-3">
                                            <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0" />
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Marketing Platforms & Technologies</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            We leverage the latest AR/VR platforms and tools to maximize your marketing reach and impact.
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
                                className="bg-card border border-border rounded-lg p-6 text-center hover:border-orange-400/30 hover:shadow-lg transition-all duration-300"
                            >
                                <h3 className="text-lg font-semibold mb-2 text-orange-400">{tech.name}</h3>
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AR/VR Marketing Process</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            From strategy to launch, we follow a proven methodology for creating impactful immersive marketing campaigns.
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
                                <div className="bg-card border border-border rounded-xl p-6 hover:border-orange-400/30 hover:shadow-lg transition-all duration-300 h-full">
                                    <div className="text-3xl font-bold text-orange-400 mb-3">{step.step}</div>
                                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                    <p className="text-muted-foreground mb-4">{step.description}</p>
                                    <div className="flex items-center text-sm text-orange-400">
                                        <Clock className="w-4 h-4 mr-2" />
                                        {step.duration}
                                    </div>
                                </div>
                                {index < processSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                                        <ArrowRight className="w-8 h-8 text-orange-400/30" />
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">AR/VR Marketing Packages</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Choose the perfect package to transform your marketing with immersive experiences.
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
                                className={`bg-card border rounded-xl p-8 hover:shadow-lg transition-all duration-300 ${pkg.highlighted ? 'border-orange-400 shadow-lg scale-105' : 'border-border'
                                    }`}
                            >
                                {pkg.highlighted && (
                                    <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                                <div className="text-3xl font-bold text-orange-400 mb-2">{pkg.price}</div>
                                <p className="text-muted-foreground mb-6">{pkg.description}</p>

                                <ul className="space-y-3 mb-8">
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start space-x-3">
                                            <CheckCircle2 className="w-5 h-5 text-orange-400 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${pkg.highlighted
                                    ? 'bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white'
                                    : 'border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white'
                                    }`}>
                                    Get Started
                                </button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-orange-600/10 to-red-600/10">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Revolutionize Your Marketing?
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            Let's create an immersive AR/VR marketing campaign that captivates your audience and drives unprecedented engagement.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                                Schedule Marketing Consultation
                            </button>
                            <button className="border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
                                View Campaign Portfolio
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ARVRMarketingService;
