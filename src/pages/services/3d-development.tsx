import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import {
    Glasses,
    CheckCircle2,
    ArrowRight,
    Eye,
    Smartphone,
    Gamepad2,
    Layers3,
    Headphones,
    Camera
} from 'lucide-react';

// Neobrutalist colors
const colors = {
    gold: "#D4AF37",
    electric: "#00FF87",
    coral: "#FF6B6B",
    violet: "#A855F7",
    cyan: "#00D4FF",
    lime: "#BFFF00",
};

// Marquee component
const Marquee = ({ children, reverse = false, speed = 30 }: { children: React.ReactNode; reverse?: boolean; speed?: number }) => (
    <div className="overflow-hidden whitespace-nowrap">
        <motion.div
            animate={{ x: reverse ? ["0%", "-50%"] : ["-50%", "0%"] }}
            transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
            className="inline-flex"
        >
            {children}
            {children}
        </motion.div>
    </div>
);

const ThreeDDevelopmentService = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

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
            title: "3D Modeling & Design",
            description: "High-quality 3D models and designs for various applications and industries.",
            color: colors.violet
        },
        {
            icon: Smartphone,
            title: "Cross-Platform Support",
            description: "Compatible with major platforms and devices for maximum reach and accessibility.",
            color: colors.electric
        },
        {
            icon: Layers3,
            title: "Advanced Rendering",
            description: "High-fidelity rendering with realistic lighting, materials, and textures.",
            color: colors.cyan
        },
        {
            icon: Gamepad2,
            title: "Interactive Elements",
            description: "Engaging interactive 3D elements and animations for immersive experiences.",
            color: colors.coral
        },
        {
            icon: Camera,
            title: "3D Visualization",
            description: "Stunning 3D visualizations for product showcases and architectural designs.",
            color: colors.lime
        },
        {
            icon: Headphones,
            title: "Spatial Audio",
            description: "3D spatial audio integration for enhanced immersive experiences.",
            color: colors.violet
        }
    ];

    const applications = [
        {
            title: "Product Visualization",
            description: "Create detailed 3D models and visualizations for product marketing and design.",
            examples: ["Product renders", "3D prototypes", "Virtual showrooms", "Interactive demos"],
            color: colors.electric
        },
        {
            title: "Architectural Visualization",
            description: "3D architectural models and walkthroughs for real estate and construction.",
            examples: ["Building models", "Interior design", "Virtual tours", "Construction planning"],
            color: colors.coral
        },
        {
            title: "Gaming & Entertainment",
            description: "3D assets and environments for games, VR experiences, and entertainment.",
            examples: ["Game assets", "VR environments", "3D animations", "Character models"],
            color: colors.cyan
        },
        {
            title: "Medical & Scientific",
            description: "3D models for medical visualization, training, and scientific research.",
            examples: ["Medical models", "Training simulations", "Research visualization", "Educational content"],
            color: colors.violet
        }
    ];

    const technologies = [
        { name: "Blender", description: "Open-source 3D modeling and animation" },
        { name: "Maya", description: "Professional 3D animation software" },
        { name: "3ds Max", description: "3D modeling and rendering" },
        { name: "Unity 3D", description: "Game engine for real-time 3D" },
        { name: "Unreal Engine", description: "High-fidelity graphics engine" },
        { name: "Cinema 4D", description: "3D motion graphics software" },
        { name: "Houdini", description: "Procedural 3D and VFX" },
        { name: "ZBrush", description: "Digital sculpting software" }
    ];

    const processSteps = [
        { step: "01", title: "Concept", description: "Define requirements and create concept sketches", color: colors.electric },
        { step: "02", title: "Modeling", description: "Create detailed 3D models with proper topology", color: colors.coral },
        { step: "03", title: "Texturing", description: "Apply realistic textures and materials", color: colors.cyan },
        { step: "04", title: "Rendering", description: "Set up lighting and produce final outputs", color: colors.violet },
        { step: "05", title: "Integration", description: "Integrate into target platforms and test", color: colors.lime }
    ];

    const packages = [
        {
            name: "Basic 3D Model",
            price: "$2,000",
            description: "Perfect for simple 3D modeling needs",
            features: [
                "Single 3D model",
                "Basic texturing",
                "Standard rendering",
                "2 revision rounds",
                "Source files",
                "3 months support"
            ],
            color: colors.electric
        },
        {
            name: "Professional 3D",
            price: "$8,000",
            description: "Complete 3D development solution for businesses",
            features: [
                "Multiple 3D models",
                "Advanced texturing",
                "High-quality rendering",
                "Animation sequences",
                "Interactive elements",
                "6 months support",
                "Platform integration"
            ],
            highlighted: true,
            color: colors.violet
        },
        {
            name: "Enterprise 3D",
            price: "Custom",
            description: "Comprehensive 3D development for large organizations",
            features: [
                "Custom 3D solution",
                "Advanced animations",
                "Real-time rendering",
                "VR/AR integration",
                "12 months support",
                "Dedicated project manager",
                "Training & documentation",
                "API development"
            ],
            color: colors.coral
        }
    ];

    return (
        <div className="min-h-screen flex flex-col bg-black">
            {/* Scroll Progress */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-2 bg-vision-gold z-50 origin-left"
                style={{ scaleX }}
            />

            <Navbar />

            {/* HERO SECTION - Neobrutalist */}
            <section className="pt-32 pb-20 relative overflow-hidden">
                {/* Background shapes */}
                <motion.div
                    animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="absolute top-20 right-20 w-32 h-32 border-4 border-vision-gold hidden lg:block"
                />
                <motion.div
                    animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute bottom-20 left-20 w-24 h-24 hidden lg:block"
                    style={{ backgroundColor: colors.cyan }}
                />

                <div className="container relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 30, rotate: -3 }}
                            animate={{ opacity: 1, y: 0, rotate: 0 }}
                            className="inline-block mb-8"
                        >
                            <div className="relative group">
                                <div className="absolute inset-0 translate-x-2 translate-y-2" style={{ backgroundColor: colors.cyan }} />
                                <div className="relative bg-black border-4 border-white px-6 py-3 flex items-center gap-2">
                                    <Glasses className="w-5 h-5 text-vision-gold" />
                                    <span className="font-black uppercase tracking-widest text-white text-sm">3D Development</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Main Title */}
                        <motion.h1
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-5xl md:text-7xl lg:text-8xl font-black uppercase leading-none mb-6"
                        >
                            <span className="text-white block">Bring Ideas</span>
                            <span className="text-vision-gold block">To Life In 3D</span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-2xl text-white/70 font-medium max-w-2xl mx-auto mb-10"
                        >
                            Create stunning 3D models, visualizations, and interactive experiences that captivate your audience with cutting-edge 3D development technology.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6 }}
                            className="flex flex-col sm:flex-row gap-4 justify-center"
                        >
                            <div className="relative group inline-block">
                                <div className="absolute inset-0 translate-x-2 translate-y-2 bg-green-800 transition-all group-hover:translate-x-3 group-hover:translate-y-3" />
                                <a
                                    href="https://wa.me/918104796542?text=Hi%20Virelity!%20I'm%20interested%20in%203D%20Development%20services.%20Can%20we%20discuss?"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative bg-green-500 hover:bg-green-500 text-black font-black uppercase tracking-wider px-8 py-4 text-lg border-[3px] border-black inline-flex items-center gap-2"
                                >
                                    Start Your 3D Project
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>
                            <div className="relative group inline-block">
                                <div className="absolute inset-0 translate-x-2 translate-y-2 bg-black transition-all group-hover:translate-x-3 group-hover:translate-y-3" />
                                <Link
                                    to="/portfolio"
                                    className="relative bg-white hover:bg-white text-black font-black uppercase tracking-wider px-8 py-4 text-lg border-[3px] border-black inline-flex items-center gap-2"
                                >
                                    View 3D Portfolio
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* MARQUEE */}
            <section className="py-4 bg-vision-gold border-y-4 border-black">
                <Marquee speed={25}>
                    <span className="inline-flex items-center gap-8 px-8 font-black text-2xl md:text-3xl text-black uppercase">
                        <span>3D Modeling</span>
                        <span className="w-4 h-4 bg-black rounded-full" />
                        <span>Visualization</span>
                        <span className="w-4 h-4 bg-black rounded-full" />
                        <span>Animation</span>
                        <span className="w-4 h-4 bg-black rounded-full" />
                        <span>VR/AR</span>
                        <span className="w-4 h-4 bg-black rounded-full" />
                        <span>Rendering</span>
                        <span className="w-4 h-4 bg-black rounded-full" />
                    </span>
                </Marquee>
            </section>

            {/* FEATURES SECTION */}
            <section className="py-20 bg-white border-y-4 border-black">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="inline-block mb-6">
                            <div className="relative">
                                <div className="absolute inset-0 translate-x-2 translate-y-2" style={{ backgroundColor: colors.cyan }} />
                                <div className="relative bg-black border-4 border-black px-6 py-3">
                                    <span className="font-black uppercase tracking-widest text-white">Capabilities</span>
                                </div>
                            </div>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-black uppercase mb-4">
                            3D <span className="text-vision-gold">Capabilities</span>
                        </h2>
                        <p className="text-xl text-gray-700 font-medium max-w-2xl mx-auto">
                            We create high-quality 3D content that delivers exceptional visual experiences and drives engagement.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {features.map((feature, index) => {
                            const IconComponent = feature.icon;
                            const rotations = [-2, 1.5, -1, 2, -1.5, 1];
                            const rotation = rotations[index % rotations.length];
                            return (
                                <motion.div
                                    key={feature.title}
                                    initial={{ opacity: 0, y: 30, rotate: rotation }}
                                    whileInView={{ opacity: 1, y: 0, rotate: rotation }}
                                    whileHover={{ rotate: 0, scale: 1.03, y: -5 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                    className="relative"
                                >
                                    <div className="absolute inset-0 translate-x-3 translate-y-3" style={{ backgroundColor: feature.color }} />
                                    <div className="relative bg-black border-4 border-black p-6 h-full">
                                        <div
                                            className="w-14 h-14 flex items-center justify-center border-2 border-vision-gold mb-4"
                                            style={{ backgroundColor: feature.color }}
                                        >
                                            <IconComponent className="w-7 h-7 text-black" />
                                        </div>
                                        <h3 className="text-xl font-black text-white uppercase mb-2">{feature.title}</h3>
                                        <p className="text-white/70 font-medium">{feature.description}</p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Second Marquee */}
            <section className="py-4 bg-black border-y-4 border-white">
                <Marquee reverse speed={20}>
                    <span className="inline-flex items-center gap-8 px-8 font-black text-2xl md:text-3xl text-white uppercase">
                        <span>Blender</span>
                        <span className="w-4 h-4 bg-vision-gold rounded-full" />
                        <span>Unity</span>
                        <span className="w-4 h-4 bg-vision-gold rounded-full" />
                        <span>Unreal</span>
                        <span className="w-4 h-4 bg-vision-gold rounded-full" />
                        <span>Maya</span>
                        <span className="w-4 h-4 bg-vision-gold rounded-full" />
                    </span>
                </Marquee>
            </section>

            {/* APPLICATIONS SECTION */}
            <section className="py-20 bg-black">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-4">
                            3D <span className="text-vision-gold">Applications</span>
                        </h2>
                        <p className="text-xl text-white/70 font-medium max-w-2xl mx-auto">
                            Discover how our 3D development services can transform your business and create immersive experiences.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {applications.map((app, index) => (
                            <motion.div
                                key={app.title}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="absolute inset-0 translate-x-3 translate-y-3" style={{ backgroundColor: app.color }} />
                                <div className="relative bg-white border-4 border-black p-8">
                                    <h3 className="text-2xl font-black text-black uppercase mb-4">{app.title}</h3>
                                    <p className="text-gray-700 font-medium mb-6">{app.description}</p>
                                    <ul className="space-y-2">
                                        {app.examples.map((example, idx) => (
                                            <li key={idx} className="flex items-center gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-vision-gold flex-shrink-0" />
                                                <span className="text-gray-800 font-medium">{example}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PROCESS SECTION */}
            <section className="py-20 bg-vision-gold border-y-4 border-black">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-black uppercase mb-4">
                            Our <span className="text-white">Process</span>
                        </h2>
                        <p className="text-xl text-black/70 font-medium max-w-2xl mx-auto">
                            A systematic approach to create high-quality 3D content that meets your requirements.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
                        {processSteps.map((step, index) => (
                            <motion.div
                                key={step.step}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                whileHover={{ y: -10 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="absolute inset-0 translate-x-2 translate-y-2 bg-black" />
                                <div className="relative bg-white border-4 border-black p-6 h-full">
                                    <div
                                        className="text-4xl font-black mb-3"
                                        style={{ color: step.color }}
                                    >
                                        {step.step}
                                    </div>
                                    <h3 className="text-lg font-black text-black uppercase mb-2">{step.title}</h3>
                                    <p className="text-gray-700 text-sm font-medium">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* PRICING SECTION */}
            <section className="py-20 bg-white border-y-4 border-black">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <div className="inline-block mb-6">
                            <div className="relative">
                                <div className="absolute inset-0 translate-x-2 translate-y-2" style={{ backgroundColor: colors.coral }} />
                                <div className="relative bg-black border-4 border-black px-6 py-3">
                                    <span className="font-black uppercase tracking-widest text-white">Packages</span>
                                </div>
                            </div>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-black uppercase mb-4">
                            3D <span className="text-vision-gold">Packages</span>
                        </h2>
                        <p className="text-xl text-gray-700 font-medium max-w-2xl mx-auto">
                            Choose the perfect package for your 3D development needs and bring your ideas to life.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {packages.map((pkg, index) => (
                            <motion.div
                                key={pkg.name}
                                initial={{ opacity: 0, y: 30, rotate: index === 1 ? 0 : (index === 0 ? -2 : 2) }}
                                whileInView={{ opacity: 1, y: 0, rotate: index === 1 ? 0 : (index === 0 ? -2 : 2) }}
                                whileHover={{ rotate: 0, scale: 1.03, y: -10 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`relative ${pkg.highlighted ? 'z-10' : ''}`}
                            >
                                <div
                                    className="absolute inset-0 translate-x-3 translate-y-3"
                                    style={{ backgroundColor: pkg.color }}
                                />
                                <div className={`relative border-4 border-black p-8 h-full ${pkg.highlighted ? 'bg-black' : 'bg-white'}`}>
                                    {pkg.highlighted && (
                                        <div className="bg-vision-gold text-black text-sm font-black uppercase px-4 py-2 border-2 border-black inline-block mb-4">
                                            Most Popular
                                        </div>
                                    )}
                                    <h3 className={`text-2xl font-black uppercase mb-2 ${pkg.highlighted ? 'text-white' : 'text-black'}`}>
                                        {pkg.name}
                                    </h3>
                                    <div className="text-4xl font-black text-vision-gold mb-2">{pkg.price}</div>
                                    <p className={`mb-6 font-medium ${pkg.highlighted ? 'text-white/70' : 'text-gray-700'}`}>
                                        {pkg.description}
                                    </p>

                                    <ul className="space-y-3 mb-8">
                                        {pkg.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-3">
                                                <CheckCircle2 className="w-5 h-5 text-vision-gold flex-shrink-0 mt-0.5" />
                                                <span className={`text-sm font-medium ${pkg.highlighted ? 'text-white' : 'text-gray-800'}`}>
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>

                                    <a
                                        href="https://wa.me/918104796542?text=Hi%20Virelity!%20I'm%20interested%20in%20the%203D%20Development%20package.%20Can%20we%20discuss?"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-full px-6 py-4 font-black uppercase text-center border-4 border-black inline-block transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_#000] ${pkg.highlighted
                                            ? 'bg-vision-gold text-black'
                                            : 'bg-black text-white'
                                            }`}
                                    >
                                        Get Started
                                    </a>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TECHNOLOGIES SECTION */}
            <section className="py-20 bg-black">
                <div className="container">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-4">
                            Tech <span className="text-vision-gold">Stack</span>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                whileHover={{ scale: 1.05 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="absolute inset-0 translate-x-2 translate-y-2 bg-vision-gold" />
                                <div className="relative bg-white border-4 border-black p-4 text-center">
                                    <h3 className="text-lg font-black text-black uppercase mb-1">{tech.name}</h3>
                                    <p className="text-sm text-gray-700 font-medium">{tech.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-24 bg-vision-gold relative overflow-hidden">
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-20 -right-20 w-64 h-64 border-8 border-black opacity-20"
                />
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-20 -left-20 w-48 h-48 bg-black opacity-10"
                />

                <div className="container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center max-w-4xl mx-auto"
                    >
                        <h2 className="text-5xl md:text-7xl font-black text-black uppercase mb-6 leading-none">
                            Ready to
                            <br />
                            <span className="text-white">Create In 3D?</span>
                        </h2>
                        <p className="text-xl text-black/70 font-medium mb-10 max-w-2xl mx-auto">
                            Let's discuss how our 3D development expertise can transform your ideas into stunning visual experiences.
                        </p>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block"
                        >
                            <div className="relative group">
                                <div className="absolute inset-0 translate-x-2 translate-y-2 bg-black transition-transform group-hover:translate-x-3 group-hover:translate-y-3" />
                                <a
                                    href="https://wa.me/918104796542?text=Hi%20Virelity!%20I'm%20interested%20in%203D%20Development.%20Let's%20schedule%20a%20consultation!"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative bg-white hover:bg-white text-black font-black uppercase tracking-wider px-12 py-6 text-xl border-4 border-black inline-flex items-center gap-3"
                                >
                                    Schedule 3D Consultation
                                    <ArrowRight className="w-6 h-6" />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ThreeDDevelopmentService;
