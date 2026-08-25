import { useEffect } from 'react';
import { m as motion, useScroll, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { CheckoutButton } from '@/components/CheckoutButton';
import { Footer } from '@/components/Footer';
import {
    Video,
    CheckCircle2,
    ArrowRight,
    Eye,
    Gamepad2,
    Layers3,
    Clock,
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

const VideoEditingService = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    // Scroll to top on mount
    useEffect(() => {
        const lenis = window.lenis;
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
            description: "High-quality video editing with advanced techniques and cinematic effects.",
            color: colors.coral
        },
        {
            icon: Camera,
            title: "Color Grading",
            description: "Professional color correction and grading for stunning visual appeal.",
            color: colors.electric
        },
        {
            icon: Layers3,
            title: "Motion Graphics",
            description: "Custom animations, titles, and visual effects to enhance your content.",
            color: colors.cyan
        },
        {
            icon: Gamepad2,
            title: "Audio Enhancement",
            description: "Professional audio editing, mixing, and sound design for clear audio.",
            color: colors.violet
        },
        {
            icon: Eye,
            title: "Visual Effects",
            description: "Advanced VFX and compositing to create stunning visual experiences.",
            color: colors.lime
        },
        {
            icon: Headphones,
            title: "Multi-Format Export",
            description: "Export in multiple formats optimized for different platforms and devices.",
            color: colors.coral
        }
    ];

    const applications = [
        {
            title: "Commercial & Advertising",
            description: "Professional video content for marketing campaigns and brand promotion.",
            examples: ["TV commercials", "Social media ads", "Product videos", "Brand stories"],
            color: colors.electric
        },
        {
            title: "Corporate & Business",
            description: "Professional business videos for training, presentations, and communication.",
            examples: ["Training videos", "Company presentations", "Product demos", "Corporate events"],
            color: colors.coral
        },
        {
            title: "Entertainment & Content",
            description: "Creative video content for entertainment and digital media platforms.",
            examples: ["YouTube content", "Short films", "Music videos", "Documentaries"],
            color: colors.cyan
        },
        {
            title: "Social Media",
            description: "Optimized video content for various social media platforms and audiences.",
            examples: ["Instagram reels", "TikTok videos", "Facebook content", "LinkedIn posts"],
            color: colors.violet
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
        { step: "01", title: "Concept", description: "Define video objectives and creative direction", color: colors.electric },
        { step: "02", title: "Pre-Production", description: "Script development and storyboarding", color: colors.coral },
        { step: "03", title: "Production", description: "Video recording and asset gathering", color: colors.cyan },
        { step: "04", title: "Post-Production", description: "Editing, color grading, and VFX", color: colors.violet },
        { step: "05", title: "Delivery", description: "Review, revisions, and final export", color: colors.lime }
    ];

    const packages = [
        {
            name: "Basic Video Edit",
            price: "$0",
            description: "Perfect for simple video editing needs",
            features: [
                "Basic video editing",
                "Color correction",
                "Audio enhancement",
                "2 revision rounds",
                "HD export",
                "1 week delivery"
            ],
            color: colors.electric
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
            highlighted: true,
            color: colors.violet
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
                {/* Background Video */}
                <video
                    className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none opacity-20"
                    src="/videos/video-edit.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/virelity_navbar.png"
                />
                <div className="absolute inset-0 bg-black/60 z-[1]" />

                {/* Background shapes */}
                <motion.div
                    animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 6, repeat: Infinity }}
                    className="absolute top-20 right-20 w-32 h-32 border-4 border-vision-gold hidden lg:block z-[2]"
                />
                <motion.div
                    animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                    transition={{ duration: 8, repeat: Infinity }}
                    className="absolute bottom-20 left-20 w-24 h-24 hidden lg:block z-[2]"
                    style={{ backgroundColor: colors.coral }}
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
                                <div className="absolute inset-0 translate-x-2 translate-y-2" style={{ backgroundColor: colors.coral }} />
                                <div className="relative bg-black border-4 border-white px-6 py-3 flex items-center gap-2">
                                    <Video className="w-5 h-5 text-vision-gold" />
                                    <span className="font-black uppercase tracking-widest text-white text-sm">Video Editing</span>
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
                            <span className="text-white block">Cinematic</span>
                            <span className="text-vision-gold block">Video Magic</span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-2xl text-white/70 font-medium max-w-2xl mx-auto mb-10"
                        >
                            Professional video editing services that bring your stories to life with stunning visuals, compelling narratives, and cinematic quality.
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
                                    href="https://wa.me/918104796542?text=Hi%20Virelity!%20I'm%20interested%20in%20Video%20Editing%20services.%20Can%20we%20discuss?"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative bg-green-500 hover:bg-green-500 text-black font-black uppercase tracking-wider px-8 py-4 text-lg border-[3px] border-black inline-flex items-center gap-2"
                                >
                                    Start Your Video Project
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>
                            <div className="relative group inline-block">
                                <div className="absolute inset-0 translate-x-2 translate-y-2 bg-black transition-all group-hover:translate-x-3 group-hover:translate-y-3" />
                                <Link
                                    to="/portfolio"
                                    className="relative bg-white hover:bg-white text-black font-black uppercase tracking-wider px-8 py-4 text-lg border-[3px] border-black inline-flex items-center gap-2"
                                >
                                    View Video Portfolio
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
                        <span>Premiere Pro</span>
                        <span className="w-4 h-4 bg-black rounded-full" />
                        <span>After Effects</span>
                        <span className="w-4 h-4 bg-black rounded-full" />
                        <span>DaVinci Resolve</span>
                        <span className="w-4 h-4 bg-black rounded-full" />
                        <span>Color Grading</span>
                        <span className="w-4 h-4 bg-black rounded-full" />
                        <span>Motion Graphics</span>
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
                                <div className="absolute inset-0 translate-x-2 translate-y-2" style={{ backgroundColor: colors.coral }} />
                                <div className="relative bg-black border-4 border-black px-6 py-3">
                                    <span className="font-black uppercase tracking-widest text-white">Why Choose Us</span>
                                </div>
                            </div>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-black uppercase mb-4">
                            Video <span className="text-vision-gold">Capabilities</span>
                        </h2>
                        <p className="text-xl text-gray-700 font-medium max-w-2xl mx-auto">
                            We create compelling video content that tells your story with professional quality and engaging visuals.
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
                        <span>VFX</span>
                        <span className="w-4 h-4 bg-vision-gold rounded-full" />
                        <span>Sound Design</span>
                        <span className="w-4 h-4 bg-vision-gold rounded-full" />
                        <span>4K Export</span>
                        <span className="w-4 h-4 bg-vision-gold rounded-full" />
                        <span>Cinematic</span>
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
                            Video <span className="text-vision-gold">Applications</span>
                        </h2>
                        <p className="text-xl text-white/70 font-medium max-w-2xl mx-auto">
                            Discover how professional video editing can enhance your brand and engage your audience.
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
                            A comprehensive approach to create high-quality video content that meets your requirements.
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
                            Video <span className="text-vision-gold">Packages</span>
                        </h2>
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

                                    <CheckoutButton
                                        service="video-editing"
                                        packageName={pkg.name}
                                        fallbackHref="https://wa.me/918104796542?text=Hi%20Virelity!%20I'm%20interested%20in%20the%20Video%20Editing%20package.%20Can%20we%20discuss?"
                                        className={`w-full px-6 py-4 font-black uppercase text-center border-4 border-black inline-block transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[4px_4px_0px_0px_#000] ${pkg.highlighted
                                            ? 'bg-vision-gold text-black'
                                            : 'bg-black text-white'
                                            }`}
                                    >
                                        Get Started
                                    </CheckoutButton>
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
                            <span className="text-white">Create Magic?</span>
                        </h2>
                        <p className="text-xl text-black/70 font-medium mb-10 max-w-2xl mx-auto">
                            Let's discuss how professional video editing can bring your vision to life and create compelling content that engages your audience.
                        </p>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block"
                        >
                            <div className="relative group">
                                <div className="absolute inset-0 translate-x-2 translate-y-2 bg-black transition-transform group-hover:translate-x-3 group-hover:translate-y-3" />
                                <a
                                    href="https://wa.me/918104796542?text=Hi%20Virelity!%20I'm%20interested%20in%20Video%20Editing.%20Let's%20schedule%20a%20consultation!"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative bg-white hover:bg-white text-black font-black uppercase tracking-wider px-12 py-6 text-xl border-4 border-black inline-flex items-center gap-3"
                                >
                                    Schedule Video Consultation
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

export default VideoEditingService;
