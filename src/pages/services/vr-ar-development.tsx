import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import {
    Glasses,
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

const VRARDevelopmentService = () => {
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
            title: "Immersive Experiences",
            description: "Create captivating virtual worlds that transport users to new realities."
        },
        {
            icon: Smartphone,
            title: "Cross-Platform Support",
            description: "Compatible with major VR/AR platforms including Oculus, HTC Vive, and mobile AR."
        },
        {
            icon: Layers3,
            title: "3D Modeling & Animation",
            description: "High-quality 3D assets and realistic animations for immersive environments."
        },
        {
            icon: Gamepad2,
            title: "Interactive Elements",
            description: "Engaging user interactions and intuitive controls for seamless experiences."
        },
        {
            icon: Camera,
            title: "360° Content",
            description: "Stunning 360-degree videos and photography for immersive storytelling."
        },
        {
            icon: Headphones,
            title: "Spatial Audio",
            description: "3D positional audio that enhances immersion and realism."
        }
    ];

    const applications = [
        {
            title: "Training & Education",
            description: "Immersive learning experiences for corporate training and educational institutions.",
            examples: ["Medical training simulations", "Safety training programs", "Historical recreations", "Language learning environments"]
        },
        {
            title: "Marketing & Sales",
            description: "Revolutionary ways to showcase products and engage customers.",
            examples: ["Virtual showrooms", "Product demonstrations", "Interactive advertisements", "Brand experiences"]
        },
        {
            title: "Entertainment & Gaming",
            description: "Next-generation entertainment experiences and interactive games.",
            examples: ["VR games and experiences", "Virtual concerts", "Interactive storytelling", "Theme park attractions"]
        },
        {
            title: "Architecture & Real Estate",
            description: "Visualize spaces and properties before they're built.",
            examples: ["Virtual property tours", "Architectural walkthroughs", "Interior design visualization", "Urban planning models"]
        }
    ];

    const technologies = [
        { name: "Unity 3D", description: "Leading game engine for VR/AR development" },
        { name: "Unreal Engine", description: "High-fidelity graphics and realistic rendering" },
        { name: "ARCore", description: "Google's platform for building AR experiences on Android" },
        { name: "ARKit", description: "Apple's framework for iOS augmented reality apps" },
        { name: "WebXR", description: "Web-based VR/AR experiences accessible through browsers" },
        { name: "OpenXR", description: "Open standard for VR and AR platform access" },
        { name: "Blender", description: "3D modeling and animation software" },
        { name: "A-Frame", description: "Web framework for building virtual reality experiences" }
    ];

    const processSteps = [
        {
            step: "01",
            title: "Concept & Strategy",
            description: "Define objectives, target audience, and the type of VR/AR experience that best serves your goals.",
            duration: "1-2 weeks"
        },
        {
            step: "02",
            title: "Storyboarding & Design",
            description: "Create detailed storyboards, user journey maps, and design mockups for the experience.",
            duration: "2-3 weeks"
        },
        {
            step: "03",
            title: "3D Asset Creation",
            description: "Develop high-quality 3D models, textures, animations, and environmental assets.",
            duration: "4-6 weeks"
        },
        {
            step: "04",
            title: "Development & Integration",
            description: "Build the VR/AR application with interactive elements and platform optimization.",
            duration: "6-10 weeks"
        },
        {
            step: "05",
            title: "Testing & Deployment",
            description: "Comprehensive testing across devices and platforms, followed by deployment and support.",
            duration: "2-3 weeks"
        }
    ];

    const packages = [
        {
            name: "AR Mobile App",
            price: "$15,000",
            description: "Perfect for marketing and product visualization",
            features: [
                "iOS & Android compatibility",
                "Basic 3D models (up to 5)",
                "Image/object tracking",
                "Basic interactions",
                "App store deployment",
                "3 months support"
            ],
            highlighted: false
        },
        {
            name: "VR Experience",
            price: "$35,000",
            description: "Immersive VR solution for training or entertainment",
            features: [
                "Full VR environment",
                "Advanced 3D modeling",
                "Interactive elements",
                "Spatial audio integration",
                "Multi-platform support",
                "6 months support",
                "Analytics integration"
            ],
            highlighted: true
        },
        {
            name: "Enterprise Solution",
            price: "Custom",
            description: "Large-scale VR/AR implementation",
            features: [
                "Custom VR/AR solution",
                "Advanced interactions",
                "Multi-user support",
                "Cloud integration",
                "Admin dashboard",
                "12 months support",
                "Training & documentation",
                "Dedicated project manager"
            ],
            highlighted: false
        }
    ];

    const portfolio = [
        {
            title: "Walk The Plank",
            description: "Experience the thrill of walking the plank on a 200th Storey Building in VR!",
            video: "/videos/walkThePlank.mp4",
            iconBg: "bg-blue-500",
            icon: <span className="inline-block text-white text-xl">⚡</span>,
        },
        {
            title: "Roller Coaster Simulation",
            description: "Ride A Roller Coaster in the comfort of your Home",
            video: "/videos/roller.mp4",
            iconBg: "bg-yellow-400",
            icon: <span className="inline-block text-white text-xl">≡</span>,
        },
        {
            title: "Tower Crane Simulation",
            description: "Our Industrial level Virtual Simulation for the piloting of a Crane",
            video: "/videos/craneSimulator.mp4",
            iconBg: "bg-red-500",
            icon: <span className="inline-block text-white text-xl">T</span>,
        },
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Navbar */}
            <Navbar
                title="VR/AR Development Services - Virelity.com"
                description="Professional VR and AR development services. Create immersive virtual and augmented reality experiences that transform user engagement and business operations."
            />

            {/* Hero Section */}
            <section className="h-screen min-h-[500px] bg-gradient-to-br from-purple-600/10 to-pink-600/10 relative overflow-hidden flex items-center justify-center">
                {/* Background Video only in hero */}
                <video
                    className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-30"
                    src="/videos/vr-bg.MP4"
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
                            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600/10 to-pink-600/10 rounded-full px-6 py-3 mb-8">
                                <Glasses className="w-6 h-6 text-purple-400" />
                                <span className="text-purple-400 font-semibold">VR/AR Development</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Step Into the Future with VR & AR
                            </h1>

                            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                                Immerse your audience in cutting-edge virtual and augmented reality experiences that transform how they interact with your brand, products, and services.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                                    Start Your VR/AR Project
                                </button>
                                <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
                                    View Demo Experiences
                                </button>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* Portfolio Section - moved up */}
            <section className="py-20 bg-muted/30">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">VR/AR Projects We've Built</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Explore our portfolio of immersive experiences across different industries.
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
                                <div className="aspect-video overflow-hidden relative">
                                    <video
                                        src={project.video}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
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

            {/* Features Section - moved down */}
            <section className="py-20">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our VR/AR Development?</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            We create immersive experiences that captivate users and deliver measurable business results.
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
                                    <div className="bg-gradient-to-r from-purple-600/10 to-pink-600/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">VR/AR Applications</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Discover how VR and AR can transform your industry and business operations.
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Cutting-Edge Technologies</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            We use the latest VR/AR development tools and platforms to deliver exceptional experiences.
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our VR/AR Development Process</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            From concept to deployment, we follow a proven methodology for creating immersive experiences.
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">VR/AR Development Packages</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Choose the perfect package for your immersive experience needs.
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
                                    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
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
                                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white'
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">VR/AR Projects We've Built</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Explore our portfolio of immersive experiences across different industries.
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
                                <div className="aspect-video overflow-hidden relative">
                                    <video
                                        src={project.video}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute top-4 left-4">
                                        <span className={`inline-flex items-center justify-center rounded-md px-2 py-1 text-lg font-bold shadow ${project.iconBg}`}>{project.icon}</span>
                                    </div>
                                </div>
                                <div className="p-6 absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                                    <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">{project.title}</h3>
                                    <p className="text-white/90 mb-4 drop-shadow-lg">{project.description}</p>
                                    <a href="#" className="text-white font-semibold underline underline-offset-4">Learn more →</a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-purple-600/10 to-pink-600/10">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Create Your VR/AR Experience?
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            Let's discuss how virtual and augmented reality can transform your business and engage your audience like never before.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                                Schedule VR/AR Consultation
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

export default VRARDevelopmentService;