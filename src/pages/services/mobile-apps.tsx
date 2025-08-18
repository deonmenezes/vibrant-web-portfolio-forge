import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import {
    Smartphone,
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
    Code
} from 'lucide-react';

const MobileAppsService = () => {
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
            icon: Smartphone,
            title: "Native & Cross-Platform",
            description: "Develop native iOS and Android apps or cross-platform solutions for maximum reach."
        },
        {
            icon: Zap,
            title: "Performance Optimized",
            description: "High-performance mobile applications with smooth animations and fast loading times."
        },
        {
            icon: Shield,
            title: "Security First",
            description: "Built-in security features and data protection to keep user information safe."
        },
        {
            icon: Target,
            title: "User-Centric Design",
            description: "Intuitive user interfaces designed for mobile-first experiences and engagement."
        },
        {
            icon: Layers3,
            title: "Scalable Architecture",
            description: "Modular app architecture that grows with your business and user base."
        },
        {
            icon: BarChart3,
            title: "Analytics & Insights",
            description: "Built-in analytics to track user behavior and app performance metrics."
        }
    ];

    const applications = [
        {
            title: "iOS App Development",
            description: "Native iOS applications built with Swift and SwiftUI for iPhone and iPad.",
            examples: ["iPhone apps", "iPad applications", "Apple Watch apps", "iOS widgets"]
        },
        {
            title: "Android App Development",
            description: "Native Android applications using Kotlin and Jetpack Compose for modern UI.",
            examples: ["Android apps", "Material Design", "Android widgets", "Google Play Store"]
        },
        {
            title: "Cross-Platform Development",
            description: "Single codebase applications that work on both iOS and Android platforms.",
            examples: ["React Native", "Flutter apps", "Xamarin", "Ionic framework"]
        },
        {
            title: "App Maintenance & Updates",
            description: "Ongoing support, maintenance, and feature updates for existing applications.",
            examples: ["Bug fixes", "Feature updates", "Performance optimization", "App store updates"]
        }
    ];

    const technologies = [
        { name: "React Native", description: "Cross-platform mobile app development framework" },
        { name: "Flutter", description: "Google's UI toolkit for building natively compiled apps" },
        { name: "Swift", description: "Apple's programming language for iOS development" },
        { name: "Kotlin", description: "Modern programming language for Android development" },
        { name: "Firebase", description: "Backend services for mobile app development" },
        { name: "Xcode", description: "Apple's IDE for iOS and macOS development" },
        { name: "Android Studio", description: "Google's IDE for Android development" },
        { name: "Ionic", description: "Cross-platform mobile app framework using web technologies" }
    ];

    const processSteps = [
        {
            step: "01",
            title: "Discovery & Planning",
            description: "Understand your requirements, target audience, and define app features and functionality.",
            duration: "1-2 weeks"
        },
        {
            step: "02",
            title: "UI/UX Design",
            description: "Create wireframes, mockups, and user experience design for your mobile app.",
            duration: "2-3 weeks"
        },
        {
            step: "03",
            title: "Development & Testing",
            description: "Build the mobile application with regular testing and quality assurance.",
            duration: "6-12 weeks"
        },
        {
            step: "04",
            title: "App Store Submission",
            description: "Prepare and submit your app to Apple App Store and Google Play Store.",
            duration: "1-2 weeks"
        },
        {
            step: "05",
            title: "Launch & Support",
            description: "App launch, monitoring, and ongoing support for updates and maintenance.",
            duration: "Ongoing"
        }
    ];

    const packages = [
        {
            name: "Basic Mobile App",
            price: "$8,000",
            description: "Perfect for startups and small businesses",
            features: [
                "Single platform (iOS or Android)",
                "Basic features and functionality",
                "UI/UX design",
                "App store submission",
                "3 months support",
                "Basic analytics"
            ],
            highlighted: false
        },
        {
            name: "Cross-Platform App",
            price: "$15,000",
            description: "Complete mobile solution for growing businesses",
            features: [
                "iOS and Android platforms",
                "Advanced features",
                "Custom UI/UX design",
                "Backend integration",
                "6 months support",
                "Advanced analytics",
                "Push notifications"
            ],
            highlighted: true
        },
        {
            name: "Enterprise Mobile App",
            price: "Custom",
            description: "Complex mobile solutions for large organizations",
            features: [
                "Custom mobile solution",
                "Advanced integrations",
                "Enterprise security",
                "Custom backend",
                "12 months support",
                "Dedicated project manager",
                "Training & documentation",
                "API development"
            ],
            highlighted: false
        }
    ];

    const portfolio = [
        {
            title: "E-commerce Mobile App",
            description: "Cross-platform shopping app with payment integration and inventory management",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
            tech: ["React Native", "Firebase", "Stripe Integration"]
        },
        {
            title: "Fitness Tracking App",
            description: "iOS fitness app with workout tracking, progress monitoring, and social features",
            image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=800",
            tech: ["Swift", "Core Data", "HealthKit"]
        },
        {
            title: "Food Delivery App",
            description: "Android food delivery app with real-time tracking and payment processing",
            image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
            tech: ["Kotlin", "Google Maps", "Payment Gateway"]
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Navbar */}
            <Navbar 
                title="Mobile App Development - Virelity.com"
                description="Professional mobile app development services for iOS and Android. Create powerful, user-friendly mobile applications that drive business growth."
            />
            
            {/* Hero Section */}
            <section className="h-screen min-h-[500px] bg-gradient-to-br from-blue-600/10 to-indigo-600/10 relative overflow-hidden flex items-center justify-center">
                {/* Background Video only in hero */}
                <video
                    className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-30"
                    src="/videos/mobile.mp4"
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
                            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600/10 to-indigo-600/10 rounded-full px-6 py-3 mb-8">
                                <Smartphone className="w-6 h-6 text-blue-400" />
                                <span className="text-blue-400 font-semibold">Mobile App Development</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                Build Powerful Mobile Experiences
                            </h1>

                            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                                Create engaging mobile applications that connect with your users, drive business growth, and deliver exceptional experiences across iOS and Android platforms with cutting-edge technology and intuitive design.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                                    Start Your Mobile App
                                </button>
                                <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
                                    View App Portfolio
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Mobile App Development?</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            We create mobile applications that deliver exceptional user experiences and drive business results.
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
                                    <div className="bg-gradient-to-r from-blue-600/10 to-indigo-600/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Mobile App Development Services</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Discover how our mobile app development services can transform your business and engage your users across all devices.
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Mobile Development Technologies</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            We use the latest mobile development technologies and frameworks to build high-quality applications.
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Mobile App Development Process</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            We follow a proven methodology to create successful mobile applications that meet your business goals.
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Mobile App Development Packages</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Choose the perfect package for your mobile app development needs and bring your ideas to life.
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
                                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
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
                                        ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white'
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Mobile Apps We've Built</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Explore our portfolio of successful mobile applications across different industries and platforms.
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
            <section className="py-20 bg-gradient-to-r from-blue-600/10 to-indigo-600/10">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Build Your Mobile App?
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            Let's discuss how our mobile app development expertise can transform your business and create engaging experiences for your users.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                                Schedule App Consultation
                            </button>
                            <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
                                View More Apps
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MobileAppsService;
