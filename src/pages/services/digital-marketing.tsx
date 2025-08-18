import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import {
    TrendingUp,
    CheckCircle2,
    ArrowRight,
    Eye,
    Smartphone,
    Zap,
    Shield,
    Target,
    Layers3,
    BarChart3,
    Clock,
    MessageSquare,
    Globe
} from 'lucide-react';

const DigitalMarketingService = () => {
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
            icon: TrendingUp,
            title: "Data-Driven Strategy",
            description: "Comprehensive digital marketing strategies backed by analytics and performance data."
        },
        {
            icon: Target,
            title: "Targeted Campaigns",
            description: "Precision-targeted campaigns that reach your ideal audience and drive conversions."
        },
        {
            icon: BarChart3,
            title: "Performance Analytics",
            description: "Real-time tracking and detailed analytics to measure campaign success and ROI."
        },
        {
            icon: MessageSquare,
            title: "Social Media Marketing",
            description: "Engaging social media campaigns that build brand awareness and community."
        },
        {
            icon: Globe,
            title: "SEO & Content Marketing",
            description: "Search engine optimization and content strategies that improve online visibility."
        },
        {
            icon: Zap,
            title: "PPC & Advertising",
            description: "Pay-per-click campaigns and digital advertising that deliver immediate results."
        }
    ];

    const applications = [
        {
            title: "Search Engine Optimization (SEO)",
            description: "Improve your website's visibility in search engines and drive organic traffic.",
            examples: ["Keyword research", "On-page optimization", "Technical SEO", "Local SEO"]
        },
        {
            title: "Social Media Marketing",
            description: "Build brand presence and engage with your audience across social platforms.",
            examples: ["Content creation", "Community management", "Paid social ads", "Influencer partnerships"]
        },
        {
            title: "Pay-Per-Click (PPC) Advertising",
            description: "Targeted paid advertising campaigns that deliver immediate traffic and conversions.",
            examples: ["Google Ads", "Facebook Ads", "LinkedIn Ads", "Remarketing campaigns"]
        },
        {
            title: "Content Marketing",
            description: "Strategic content creation that educates, engages, and converts your audience.",
            examples: ["Blog content", "Email marketing", "Video content", "Infographics"]
        }
    ];

    const technologies = [
        { name: "Google Analytics", description: "Web analytics service for tracking website performance" },
        { name: "Google Ads", description: "Online advertising platform for PPC campaigns" },
        { name: "Facebook Ads", description: "Social media advertising platform for targeted campaigns" },
        { name: "Mailchimp", description: "Email marketing platform for newsletter and campaign management" },
        { name: "SEMrush", description: "SEO and competitive research tool for keyword analysis" },
        { name: "Hootsuite", description: "Social media management platform for scheduling and monitoring" },
        { name: "HubSpot", description: "Inbound marketing and sales platform for lead generation" },
        { name: "Canva", description: "Graphic design tool for creating marketing materials" }
    ];

    const processSteps = [
        {
            step: "01",
            title: "Audit & Analysis",
            description: "Comprehensive analysis of current digital presence, competitors, and market opportunities.",
            duration: "1-2 weeks"
        },
        {
            step: "02",
            title: "Strategy Development",
            description: "Create data-driven marketing strategies tailored to your business goals and target audience.",
            duration: "2-3 weeks"
        },
        {
            step: "03",
            title: "Campaign Implementation",
            description: "Execute multi-channel marketing campaigns across various digital platforms.",
            duration: "4-8 weeks"
        },
        {
            step: "04",
            title: "Monitoring & Optimization",
            description: "Continuous monitoring of campaign performance and optimization for better results.",
            duration: "Ongoing"
        },
        {
            step: "05",
            title: "Reporting & Analysis",
            description: "Regular reporting on campaign performance, ROI, and strategic recommendations.",
            duration: "Monthly"
        }
    ];

    const packages = [
        {
            name: "Starter Marketing",
            price: "$1,200",
            description: "Perfect for small businesses starting their digital marketing journey",
            features: [
                "Basic SEO optimization",
                "Social media management (2 platforms)",
                "Monthly content creation",
                "Google Analytics setup",
                "Monthly reporting",
                "3 months support"
            ],
            highlighted: false
        },
        {
            name: "Growth Marketing",
            price: "$3,500",
            description: "Comprehensive digital marketing solution for growing businesses",
            features: [
                "Full SEO strategy",
                "Social media marketing (all platforms)",
                "PPC campaign management",
                "Content marketing strategy",
                "Email marketing campaigns",
                "6 months support",
                "Weekly performance calls"
            ],
            highlighted: true
        },
        {
            name: "Enterprise Marketing",
            price: "Custom",
            description: "Full-service digital marketing for large organizations",
            features: [
                "Custom marketing strategy",
                "Multi-channel campaigns",
                "Advanced analytics & reporting",
                "Marketing automation",
                "Dedicated account manager",
                "12 months support",
                "Quarterly strategy reviews",
                "Custom reporting dashboard"
            ],
            highlighted: false
        }
    ];

    const portfolio = [
        {
            title: "E-commerce SEO Campaign",
            description: "Increased organic traffic by 300% for an online retail store through comprehensive SEO strategy",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
            tech: ["Google Analytics", "SEMrush", "Technical SEO"]
        },
        {
            title: "Social Media Growth",
            description: "Built engaged social media community of 50K+ followers for a B2B software company",
            image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=800",
            tech: ["Facebook Ads", "LinkedIn Marketing", "Content Strategy"]
        },
        {
            title: "PPC Lead Generation",
            description: "Generated 200+ qualified leads per month through targeted PPC campaigns",
            image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
            tech: ["Google Ads", "Facebook Ads", "Conversion Optimization"]
        }
    ];

    // Lenis smooth scroll integration
    const lenisRef = useRef(null);
    useEffect(() => {
        import('lenis').then(({ default: Lenis }) => {
            if (!lenisRef.current) {
                lenisRef.current = new Lenis({
                    // smooth: true, // Removed invalid property
                    lerp: 0.08,
                });
                function raf(time) {
                    lenisRef.current.raf(time);
                    requestAnimationFrame(raf);
                }
                requestAnimationFrame(raf);
            }
        });
        return () => {
            if (lenisRef.current) {
                lenisRef.current.destroy();
                lenisRef.current = null;
            }
        };
    }, []);

    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            {/* Navbar */}
            <Navbar 
                title="Digital Marketing Services - Virelity.com"
                description="Comprehensive digital marketing services including SEO, PPC, social media marketing, and content marketing to drive business growth."
            />
            
            {/* Hero Section */}
            <section className="h-screen min-h-[500px] bg-gradient-to-br from-green-600/10 to-emerald-600/10 relative overflow-hidden flex items-center justify-center">
                {/* Background Video only in hero */}
                <video
                    className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-30"
                    src="/videos/digital-market.mp4"
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
                            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-green-600/10 to-emerald-600/10 rounded-full px-6 py-3 mb-8">
                                <TrendingUp className="w-6 h-6 text-green-400" />
                                <span className="text-green-400 font-semibold">Digital Marketing</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-green-400 to-emerald-400 bg-clip-text text-transparent">
                                Drive Growth with Data-Driven Marketing
                            </h1>

                            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                                Comprehensive digital marketing strategies that increase your online visibility, drive qualified traffic, and convert visitors into loyal customers through targeted campaigns and measurable results.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                                    Start Your Marketing Campaign
                                </button>
                                <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
                                    View Marketing Results
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Digital Marketing?</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            We create data-driven marketing strategies that deliver measurable results and drive sustainable business growth.
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
                                    className="bg-card border border-border rounded-xl p-6 hover:border-green-400/30 hover:shadow-lg transition-all duration-300"
                                >
                                    <div className="bg-gradient-to-r from-green-600/10 to-emerald-600/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                                        <IconComponent className="w-6 h-6 text-green-400" />
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Digital Marketing Services</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Discover how our comprehensive digital marketing services can transform your online presence and drive business growth.
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
                                className="bg-card border border-border rounded-xl p-8 hover:border-green-400/30 hover:shadow-lg transition-all duration-300"
                            >
                                <h3 className="text-2xl font-semibold mb-4 text-green-400">{app.title}</h3>
                                <p className="text-muted-foreground mb-6">{app.description}</p>
                                <ul className="space-y-2">
                                    {app.examples.map((example, idx) => (
                                        <li key={idx} className="flex items-center space-x-3">
                                            <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Marketing Technologies & Tools</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            We leverage industry-leading marketing tools and platforms to deliver exceptional results and provide detailed insights.
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
                                className="bg-card border border-border rounded-lg p-6 text-center hover:border-green-400/30 hover:shadow-lg transition-all duration-300"
                            >
                                <h3 className="text-lg font-semibold mb-2 text-green-400">{tech.name}</h3>
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Digital Marketing Process</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            We follow a proven methodology to create and execute successful digital marketing campaigns that deliver measurable results.
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
                                <div className="bg-card border border-border rounded-xl p-6 hover:border-green-400/30 hover:shadow-lg transition-all duration-300 h-full">
                                    <div className="text-3xl font-bold text-green-400 mb-3">{step.step}</div>
                                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                    <p className="text-muted-foreground mb-4">{step.description}</p>
                                    <div className="flex items-center text-sm text-green-400">
                                        <Clock className="w-4 h-4 mr-2" />
                                        {step.duration}
                                    </div>
                                </div>
                                {index < processSteps.length - 1 && (
                                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                                        <ArrowRight className="w-8 h-8 text-green-400/30" />
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Digital Marketing Packages</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Choose the perfect package for your digital marketing needs and start driving growth today.
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
                                className={`bg-card border rounded-xl p-8 hover:shadow-lg transition-all duration-300 ${pkg.highlighted ? 'border-green-400 shadow-lg scale-105' : 'border-border'
                                    }`}
                            >
                                {pkg.highlighted && (
                                    <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                                        Most Popular
                                    </div>
                                )}
                                <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                                <div className="text-3xl font-bold text-green-400 mb-2">{pkg.price}</div>
                                <p className="text-muted-foreground mb-6">{pkg.description}</p>

                                <ul className="space-y-3 mb-8">
                                    {pkg.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start space-x-3">
                                            <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <button className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${pkg.highlighted
                                        ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white'
                                        : 'border border-green-400 text-green-400 hover:bg-green-400 hover:text-white'
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Digital Marketing Success Stories</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Explore our portfolio of successful digital marketing campaigns that delivered exceptional results for our clients.
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
                                className="group relative overflow-hidden rounded-xl bg-card border border-border hover:border-green-400/30 hover:shadow-lg transition-all duration-300"
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
                                            <span key={tech} className="bg-green-400/10 text-green-400 text-xs px-2 py-1 rounded-full">
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
            <section className="py-20 bg-gradient-to-r from-green-600/10 to-emerald-600/10">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Accelerate Your Growth?
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            Let's discuss how our data-driven digital marketing strategies can increase your online visibility, drive qualified traffic, and boost your business growth.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                                Schedule Marketing Consultation
                            </button>
                            <button className="border border-green-400 text-green-400 hover:bg-green-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
                                View More Results
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default DigitalMarketingService;
