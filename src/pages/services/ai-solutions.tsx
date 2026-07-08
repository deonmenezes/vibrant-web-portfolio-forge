import { useEffect } from 'react';
import { m as motion, useScroll, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import {
    Brain,
    CheckCircle2,
    ArrowRight,
    Bot,
    Sparkles,
    MessageSquare,
    BarChart3,
    Workflow,
    Eye
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

const AISolutionsService = () => {
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
            icon: Bot,
            title: "Custom AI Chatbots",
            description: "Intelligent conversational agents that handle customer inquiries 24/7 with human-like responses.",
            color: colors.violet
        },
        {
            icon: Sparkles,
            title: "Generative AI Integration",
            description: "Leverage GPT, Claude, and other LLMs to automate content creation and enhance productivity.",
            color: colors.electric
        },
        {
            icon: Eye,
            title: "Computer Vision",
            description: "Image recognition, object detection, and visual analysis solutions for your business needs.",
            color: colors.cyan
        },
        {
            icon: BarChart3,
            title: "Predictive Analytics",
            description: "Data-driven insights and forecasting models to make smarter business decisions.",
            color: colors.coral
        },
        {
            icon: Workflow,
            title: "Process Automation",
            description: "AI-powered automation to streamline workflows and reduce manual tasks.",
            color: colors.lime
        },
        {
            icon: MessageSquare,
            title: "Natural Language Processing",
            description: "Text analysis, sentiment detection, and language understanding for your applications.",
            color: colors.violet
        }
    ];

    const applications = [
        {
            title: "Customer Service AI",
            description: "Transform your customer support with intelligent AI agents that never sleep.",
            examples: ["AI chatbots", "Voice assistants", "Email automation", "Ticket routing"],
            color: colors.electric
        },
        {
            title: "Business Intelligence",
            description: "Turn your data into actionable insights with AI-powered analytics.",
            examples: ["Sales forecasting", "Market analysis", "Risk assessment", "Trend prediction"],
            color: colors.coral
        },
        {
            title: "Content Generation",
            description: "Scale your content creation with AI-assisted writing and media generation.",
            examples: ["Marketing copy", "Product descriptions", "Social media posts", "Report generation"],
            color: colors.cyan
        },
        {
            title: "Automation & Integration",
            description: "Connect AI capabilities to your existing tools and workflows.",
            examples: ["CRM integration", "Document processing", "Data extraction", "Workflow automation"],
            color: colors.violet
        }
    ];

    const technologies = [
        { name: "OpenAI GPT", description: "Advanced language models for text generation" },
        { name: "Claude AI", description: "AI assistant for complex reasoning tasks" },
        { name: "TensorFlow", description: "Open-source machine learning framework" },
        { name: "PyTorch", description: "Deep learning framework" },
        { name: "LangChain", description: "LLM-powered applications framework" },
        { name: "Hugging Face", description: "Open-source NLP models" },
        { name: "AWS AI Services", description: "Cloud-based AI and ML services" },
        { name: "Vector Databases", description: "Semantic search and RAG" }
    ];

    const processSteps = [
        { step: "01", title: "Discovery", description: "Analyze business needs and identify AI opportunities", color: colors.electric },
        { step: "02", title: "Strategy", description: "Design solution architecture and define success metrics", color: colors.coral },
        { step: "03", title: "Development", description: "Build and train AI models for your use cases", color: colors.cyan },
        { step: "04", title: "Integration", description: "Integrate AI into your systems with thorough testing", color: colors.violet },
        { step: "05", title: "Optimization", description: "Launch and continuously optimize performance", color: colors.lime }
    ];

    const packages = [
        {
            name: "AI Starter",
            price: "$5,000",
            description: "Perfect for businesses starting their AI journey",
            features: ["Custom AI chatbot", "Basic NLP integration", "Single platform deployment", "Knowledge base training", "3 months support"],
            color: colors.electric
        },
        {
            name: "AI Business",
            price: "$15,000",
            description: "Comprehensive AI solution for growing businesses",
            features: ["Advanced AI chatbot", "Multi-channel deployment", "Custom LLM fine-tuning", "Process automation", "Advanced analytics", "6 months support"],
            highlighted: true,
            color: colors.violet
        },
        {
            name: "Enterprise AI",
            price: "Custom",
            description: "Full-scale AI transformation for enterprises",
            features: ["Custom AI models", "Multi-system integration", "Predictive analytics", "Computer vision", "Dedicated AI team", "12 months support"],
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
                    style={{ backgroundColor: colors.violet }}
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
                                <div className="absolute inset-0 translate-x-2 translate-y-2" style={{ backgroundColor: colors.violet }} />
                                <div className="relative bg-black border-4 border-white px-6 py-3 flex items-center gap-2">
                                    <Brain className="w-5 h-5 text-vision-gold" />
                                    <span className="font-black uppercase tracking-widest text-white text-sm">AI Solutions</span>
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
                            <span className="text-white block">Transform With</span>
                            <span className="text-vision-gold block">Intelligent AI</span>
                        </motion.h1>

                        {/* Subtitle */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-xl md:text-2xl text-white/70 font-medium max-w-2xl mx-auto mb-10"
                        >
                            Harness the power of artificial intelligence to automate processes, enhance customer experiences, and unlock data-driven insights.
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
                                    href="https://wa.me/918104796542?text=Hi%20Virelity!%20I'm%20interested%20in%20AI%20Solutions%20for%20my%20business.%20Can%20we%20discuss?"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative bg-green-500 hover:bg-green-500 text-black font-black uppercase tracking-wider px-8 py-4 text-lg border-[3px] border-black inline-flex items-center gap-2"
                                >
                                    Start Your AI Journey
                                    <ArrowRight className="w-5 h-5" />
                                </a>
                            </div>
                            <div className="relative group inline-block">
                                <div className="absolute inset-0 translate-x-2 translate-y-2 bg-black transition-all group-hover:translate-x-3 group-hover:translate-y-3" />
                                <Link
                                    to="/portfolio"
                                    className="relative bg-white hover:bg-white text-black font-black uppercase tracking-wider px-8 py-4 text-lg border-[3px] border-black inline-flex items-center gap-2"
                                >
                                    View AI Projects
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
                        <span>AI Chatbots</span>
                        <span className="w-4 h-4 bg-black rounded-full" />
                        <span>Machine Learning</span>
                        <span className="w-4 h-4 bg-black rounded-full" />
                        <span>NLP</span>
                        <span className="w-4 h-4 bg-black rounded-full" />
                        <span>Computer Vision</span>
                        <span className="w-4 h-4 bg-black rounded-full" />
                        <span>Automation</span>
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
                                <div className="absolute inset-0 translate-x-2 translate-y-2" style={{ backgroundColor: colors.electric }} />
                                <div className="relative bg-black border-4 border-black px-6 py-3">
                                    <span className="font-black uppercase tracking-widest text-white">Capabilities</span>
                                </div>
                            </div>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-black uppercase mb-4">
                            AI <span className="text-vision-gold">Capabilities</span>
                        </h2>
                        <p className="text-xl text-gray-700 font-medium max-w-2xl mx-auto">
                            From conversational AI to predictive analytics, we build intelligent solutions that solve real business problems.
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
                        <span>GPT Integration</span>
                        <span className="w-4 h-4 bg-vision-gold rounded-full" />
                        <span>Claude AI</span>
                        <span className="w-4 h-4 bg-vision-gold rounded-full" />
                        <span>LangChain</span>
                        <span className="w-4 h-4 bg-vision-gold rounded-full" />
                        <span>TensorFlow</span>
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
                            AI <span className="text-vision-gold">Applications</span>
                        </h2>
                        <p className="text-xl text-white/70 font-medium max-w-2xl mx-auto">
                            Practical AI applications that deliver measurable results and competitive advantages.
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
                            A structured approach to delivering AI solutions that meet your business objectives.
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
                            AI <span className="text-vision-gold">Packages</span>
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

                                    <a
                                        href="https://wa.me/918104796542?text=Hi%20Virelity!%20I'm%20interested%20in%20the%20AI%20Solutions%20package.%20Can%20we%20discuss?"
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
                            <span className="text-white">Embrace AI?</span>
                        </h2>
                        <p className="text-xl text-black/70 font-medium mb-10 max-w-2xl mx-auto">
                            Let's explore how AI can transform your business operations, enhance customer experiences, and drive innovation.
                        </p>

                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="inline-block"
                        >
                            <div className="relative group">
                                <div className="absolute inset-0 translate-x-2 translate-y-2 bg-black transition-transform group-hover:translate-x-3 group-hover:translate-y-3" />
                                <a
                                    href="https://wa.me/918104796542?text=Hi%20Virelity!%20I'm%20interested%20in%20AI%20Solutions.%20Let's%20schedule%20a%20consultation!"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="relative bg-white hover:bg-white text-black font-black uppercase tracking-wider px-12 py-6 text-xl border-4 border-black inline-flex items-center gap-3"
                                >
                                    Schedule AI Consultation
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

export default AISolutionsService;
