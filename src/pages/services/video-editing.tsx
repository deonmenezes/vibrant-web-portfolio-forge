import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '@/components/Navbar';
import {
    Video,
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

const VideoEditingService = () => {
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
            icon: Video,
            title: "Professional Editing",
            description: "High-quality video editing with advanced techniques and cinematic effects."
        },
        {
            icon: Camera,
            title: "Color Grading",
            description: "Professional color correction and grading for stunning visual appeal."
        },
        {
            icon: Layers3,
            title: "Motion Graphics",
            description: "Custom animations, titles, and visual effects to enhance your content."
        },
        {
            icon: Gamepad2,
            title: "Audio Enhancement",
            description: "Professional audio editing, mixing, and sound design for clear audio."
        },
        {
            icon: Eye,
            title: "Visual Effects",
            description: "Advanced VFX and compositing to create stunning visual experiences."
        },
        {
            icon: Headphones,
            title: "Multi-Format Export",
            description: "Export in multiple formats optimized for different platforms and devices."
        }
    ];

    const applications = [
        {
            title: "Commercial & Advertising",
            description: "Professional video content for marketing campaigns and brand promotion.",
            examples: ["TV commercials", "Social media ads", "Product videos", "Brand stories"]
        },
        {
            title: "Corporate & Business",
            description: "Professional business videos for training, presentations, and communication.",
            examples: ["Training videos", "Company presentations", "Product demos", "Corporate events"]
        },
        {
            title: "Entertainment & Content",
            description: "Creative video content for entertainment and digital media platforms.",
            examples: ["YouTube content", "Short films", "Music videos", "Documentaries"]
        },
        {
            title: "Social Media",
            description: "Optimized video content for various social media platforms and audiences.",
            examples: ["Instagram reels", "TikTok videos", "Facebook content", "LinkedIn posts"]
        }
    ];

    const technologies = [
        { name: "Adobe Premiere Pro", description: "Professional video editing software" },
        { name: "Adobe After Effects", description: "Motion graphics and visual effects" },
        { name: "DaVinci Resolve", description: "Professional color grading and editing" },
        { name: "Final Cut Pro", description: "Apple's professional video editing suite" },
        { name: "Adobe Audition", description: "Professional audio editing and mixing" },
        { name: "Cinema 4D", description: "3D motion graphics and animation" },
        { name: "Blender", description: "Free 3D animation and visual effects" },
        { name: "OBS Studio", description: "Screen recording and live streaming" }
    ];

    const processSteps = [
        {
            step: "01",
            title: "Concept & Planning",
            description: "Define video objectives, target audience, and creative direction for the project.",
            duration: "1-2 weeks"
        },
        {
            step: "02",
            title: "Pre-Production",
            description: "Script development, storyboarding, and preparation for video production.",
            duration: "2-3 weeks"
        },
        {
            step: "03",
            title: "Production",
            description: "Video recording, audio capture, and gathering all necessary footage and assets.",
            duration: "1-4 weeks"
        },
        {
            step: "04",
            title: "Post-Production",
            description: "Video editing, color grading, audio mixing, and adding visual effects.",
            duration: "2-6 weeks"
        },
        {
            step: "05",
            title: "Review & Delivery",
            description: "Client review, revisions, and final delivery in multiple formats.",
            duration: "1-2 weeks"
        }
    ];

    const packages = [
        {
            name: "Basic Video Edit",
            price: "$500",
            description: "Perfect for simple video editing needs",
            features: [
                "Basic video editing",
                "Color correction",
                "Audio enhancement",
                "2 revision rounds",
                "HD export",
                "1 week delivery"
            ],
            highlighted: false
        },
        {
            name: "Professional Edit",
            price: "$1,500",
            description: "Complete video production with advanced editing",
            features: [
                "Advanced video editing",
                "Professional color grading",
                "Motion graphics",
                "Audio mixing",
                "Visual effects",
                "3 revision rounds",
                "Multiple formats"
            ],
            highlighted: true
        },
        {
            name: "Premium Production",
            price: "Custom",
            description: "Full video production from concept to delivery",
            features: [
                "Custom video production",
                "Advanced VFX",
                "Cinematic color grading",
                "Professional audio",
                "Multiple formats",
                "Unlimited revisions",
                "Project management",
                "Dedicated editor"
            ],
            highlighted: false
        }
    ];

    const portfolio = [
        {
            title: "Commercial Video",
            description: "Professional product commercial with cinematic editing and effects",
            image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=800",
            tech: ["Premiere Pro", "After Effects", "Color Grading"]
        },
        {
            title: "Corporate Presentation",
            description: "Professional business video with motion graphics and branding",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
            tech: ["Final Cut Pro", "Motion Graphics", "Audio Mixing"]
        },
        {
            title: "Social Media Content",
            description: "Engaging short-form video content for social media platforms",
            image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
            tech: ["DaVinci Resolve", "Visual Effects", "Multi-Format"]
        }
    ];

    return (
        <div className="min-h-screen bg-background relative overflow-hidden">
            {/* Navbar */}
            <Navbar 
                title="Video Editing Services - Virelity.com"
                description="Professional video editing services including corporate videos, promotional content, and cinematic productions with stunning visual effects."
            />
            
            {/* Hero Section */}
            <section className="h-screen min-h-[500px] bg-gradient-to-br from-orange-600/10 to-red-600/10 relative overflow-hidden flex items-center justify-center">
                {/* Background Video only in hero */}
                <video
                    className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-30"
                    src="/videos/video-edit.mp4"
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
                            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-orange-600/10 to-red-600/10 rounded-full px-6 py-3 mb-8">
                                <Video className="w-6 h-6 text-orange-400" />
                                <span className="text-orange-400 font-semibold">Video Editing</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-orange-400 to-red-400 bg-clip-text text-transparent">
                                Transform Your Vision Into Cinematic Reality
                            </h1>

                            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                                Professional video editing services that bring your stories to life with stunning visuals, compelling narratives, and cinematic quality that captivates your audience.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                                    Start Your Video Project
                                </button>
                                <button className="border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
                                    View Video Portfolio
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Video Editing?</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            We create compelling video content that tells your story with professional quality and engaging visuals.
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Video Editing Applications</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Discover how professional video editing can enhance your brand and engage your audience.
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Video Technologies</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            We use industry-standard video editing software and tools to deliver exceptional results.
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Video Editing Process</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            We follow a comprehensive approach to create high-quality video content that meets your requirements.
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Video Editing Packages</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Choose the perfect package for your video editing needs.
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

            {/* Portfolio Section */}
            <section className="py-20 bg-muted/30">
                <div className="container">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Video Projects We've Created</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Explore our portfolio of stunning video editing projects across different industries.
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
                                            <span key={tech} className="bg-orange-400/10 text-orange-400 text-xs px-2 py-1 rounded-full">
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
            <section className="py-20 bg-gradient-to-r from-orange-600/10 to-red-600/10">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Create Your Video Content?
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            Let's discuss how professional video editing can bring your vision to life and create compelling content that engages your audience.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                                Schedule Video Editing Consultation
                            </button>
                            <button className="border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
                                View More Projects
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default VideoEditingService;