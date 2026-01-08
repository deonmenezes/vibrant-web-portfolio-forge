import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { useBooking } from '@/contexts/BookingContext';
import {
    Brain,
    CheckCircle2,
    ArrowRight,
    Bot,
    Sparkles,
    MessageSquare,
    BarChart3,
    Clock,
    Workflow,
    Eye
} from 'lucide-react';

const AISolutionsService = () => {
    const { openBookingDialog } = useBooking();
    const navigate = useNavigate();

    // Scroll to top on mount
    useEffect(() => {
        // Use Lenis if available, else fallback
        const lenis = (window as any).lenis;
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
            description: "Intelligent conversational agents that handle customer inquiries 24/7 with human-like responses."
        },
        {
            icon: Sparkles,
            title: "Generative AI Integration",
            description: "Leverage GPT, Claude, and other LLMs to automate content creation and enhance productivity."
        },
        {
            icon: Eye,
            title: "Computer Vision",
            description: "Image recognition, object detection, and visual analysis solutions for your business needs."
        },
        {
            icon: BarChart3,
            title: "Predictive Analytics",
            description: "Data-driven insights and forecasting models to make smarter business decisions."
        },
        {
            icon: Workflow,
            title: "Process Automation",
            description: "AI-powered automation to streamline workflows and reduce manual tasks."
        },
        {
            icon: MessageSquare,
            title: "Natural Language Processing",
            description: "Text analysis, sentiment detection, and language understanding for your applications."
        }
    ];

    const applications = [
        {
            title: "Customer Service AI",
            description: "Transform your customer support with intelligent AI agents that never sleep.",
            examples: ["AI chatbots", "Voice assistants", "Email automation", "Ticket routing"]
        },
        {
            title: "Business Intelligence",
            description: "Turn your data into actionable insights with AI-powered analytics.",
            examples: ["Sales forecasting", "Market analysis", "Risk assessment", "Trend prediction"]
        },
        {
            title: "Content Generation",
            description: "Scale your content creation with AI-assisted writing and media generation.",
            examples: ["Marketing copy", "Product descriptions", "Social media posts", "Report generation"]
        },
        {
            title: "Automation & Integration",
            description: "Connect AI capabilities to your existing tools and workflows.",
            examples: ["CRM integration", "Document processing", "Data extraction", "Workflow automation"]
        }
    ];

    const technologies = [
        { name: "OpenAI GPT", description: "Advanced language models for text generation and understanding" },
        { name: "Claude AI", description: "Anthropic's AI assistant for complex reasoning tasks" },
        { name: "TensorFlow", description: "Open-source machine learning framework" },
        { name: "PyTorch", description: "Deep learning framework for research and production" },
        { name: "LangChain", description: "Framework for building LLM-powered applications" },
        { name: "Hugging Face", description: "Open-source NLP models and tools" },
        { name: "AWS AI Services", description: "Cloud-based AI and ML services" },
        { name: "Vector Databases", description: "Pinecone, Weaviate for semantic search and RAG" }
    ];

    const processSteps = [
        {
            step: "01",
            title: "Discovery & Assessment",
            description: "Analyze your business needs and identify AI opportunities that deliver real value.",
            duration: "1-2 weeks"
        },
        {
            step: "02",
            title: "Strategy & Design",
            description: "Design the AI solution architecture and define success metrics.",
            duration: "1-2 weeks"
        },
        {
            step: "03",
            title: "Development & Training",
            description: "Build and train AI models tailored to your specific use cases.",
            duration: "4-8 weeks"
        },
        {
            step: "04",
            title: "Integration & Testing",
            description: "Integrate AI into your systems and conduct thorough testing.",
            duration: "2-3 weeks"
        },
        {
            step: "05",
            title: "Deployment & Optimization",
            description: "Launch your AI solution and continuously optimize performance.",
            duration: "Ongoing"
        }
    ];

    const packages = [
        {
            name: "AI Starter",
            price: "$5,000",
            description: "Perfect for businesses starting their AI journey",
            features: [
                "Custom AI chatbot",
                "Basic NLP integration",
                "Single platform deployment",
                "Knowledge base training",
                "Basic analytics dashboard",
                "3 months support"
            ],
            highlighted: false
        },
        {
            name: "AI Business",
            price: "$15,000",
            description: "Comprehensive AI solution for growing businesses",
            features: [
                "Advanced AI chatbot",
                "Multi-channel deployment",
                "Custom LLM fine-tuning",
                "Process automation",
                "Advanced analytics",
                "API integrations",
                "6 months support"
            ],
            highlighted: true
        },
        {
            name: "Enterprise AI",
            price: "Custom",
            description: "Full-scale AI transformation for enterprises",
            features: [
                "Custom AI models",
                "Multi-system integration",
                "Predictive analytics",
                "Computer vision solutions",
                "Dedicated AI team",
                "12 months support",
                "Training & documentation",
                "SLA guarantees"
            ],
            highlighted: false
        }
    ];

    const portfolio = [
        {
            title: "AI Customer Service Bot",
            description: "Intelligent chatbot handling 10,000+ customer inquiries monthly with 95% resolution rate",
            image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800",
            tech: ["OpenAI GPT", "LangChain", "Python", "React"]
        },
        {
            title: "Predictive Sales Platform",
            description: "ML-powered sales forecasting system improving prediction accuracy by 40%",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
            tech: ["TensorFlow", "Python", "AWS", "Tableau"]
        },
        {
            title: "Document Intelligence System",
            description: "Automated document processing and data extraction for a legal firm",
            image: "https://images.unsplash.com/photo-1568952433726-3896e3881c65?auto=format&fit=crop&q=80&w=800",
            tech: ["Claude AI", "OCR", "Python", "PostgreSQL"]
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            {/* Navbar */}
            <Navbar
                title="AI Solutions - Virelity.com"
                description="Transform your business with custom AI solutions including chatbots, automation, predictive analytics, and generative AI integration."
            />

            {/* Hero Section */}
            <section className="h-screen min-h-[500px] bg-gradient-to-br from-purple-600/10 to-cyan-600/10 relative overflow-hidden flex items-center justify-center">
                {/* Background gradient animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-background to-cyan-900/20 z-0" />
                <div className="absolute inset-0 bg-grid-pattern opacity-5 z-10" />

                {/* Animated particles/orbs effect */}
                <div className="absolute inset-0 overflow-hidden z-5">
                    <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                </div>

                <div className="container relative z-20 flex flex-col items-center justify-center h-full">
                    <div className="max-w-4xl mx-auto text-center w-full">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-600/10 to-cyan-600/10 rounded-full px-6 py-3 mb-8">
                                <Brain className="w-6 h-6 text-purple-400" />
                                <span className="text-purple-400 font-semibold">AI Solutions</span>
                            </div>

                            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                                Transform Your Business With Intelligent AI
                            </h1>

                            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                                Harness the power of artificial intelligence to automate processes, enhance customer experiences, and unlock data-driven insights that drive growth.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button
                                    onClick={() => openBookingDialog()}
                                    className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                                    Start Your AI Journey
                                </button>
                                <button
                                    onClick={() => navigate('/portfolio')}
                                    className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
                                    View AI Projects
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Capabilities We Deliver</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            From conversational AI to predictive analytics, we build intelligent solutions that solve real business problems.
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
                                    <div className="bg-gradient-to-r from-purple-600/10 to-cyan-600/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Solutions For Your Business</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Practical AI applications that deliver measurable results and competitive advantages.
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Technologies We Use</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            We leverage the latest AI frameworks and platforms to build powerful, scalable solutions.
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AI Development Process</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            A structured approach to delivering AI solutions that meet your business objectives.
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Solution Packages</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Flexible AI packages designed to meet businesses at every stage of their AI journey.
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
                                    <div className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
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

                                <button
                                    onClick={openBookingDialog}
                                    className={`w-full px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${pkg.highlighted
                                        ? 'bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white'
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
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Projects We've Delivered</h2>
                        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                            Real-world AI implementations that have transformed businesses across industries.
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
            <section className="py-20 bg-gradient-to-r from-purple-600/10 to-cyan-600/10">
                <div className="container">
                    <div className="text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Ready to Embrace AI?
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            Let's explore how AI can transform your business operations, enhance customer experiences, and drive innovation.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => openBookingDialog()}
                                className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                                Schedule AI Consultation
                            </button>
                            <button
                                onClick={() => navigate('/portfolio')}
                                className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
                                View More Projects
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AISolutionsService;
