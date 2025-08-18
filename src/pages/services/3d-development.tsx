import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
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

// Interactive 3D Background Component
const Interactive3DBackground = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const modelRef = useRef(null);
  const animationIdRef = useRef(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0a0a0a);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      mountRef.current.clientWidth / mountRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 15);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true 
    });
    renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    rendererRef.current = renderer;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0x8b5cf6, 1.0, 20);
    pointLight.position.set(0, 0, 10);
    scene.add(pointLight);

    // Load GLTF Model
    const loader = new GLTFLoader();
    loader.load(
      '/models/scene.gltf',
      (gltf) => {
        const model = gltf.scene;
        
        // Scale and position the model
        model.scale.set(5, 5, 5);
        model.position.set(0, 0, 0);
        
        // Enable shadows for all meshes
        model.traverse((child) => {
          if (child instanceof THREE.Mesh) {
            child.castShadow = true;
            child.receiveShadow = true;
          }
        });
        
        scene.add(model);
        modelRef.current = model;
        setIsLoading(false);
      },
      (progress) => {
        console.log('Loading progress:', (progress.loaded / progress.total * 100) + '%');
      },
      (error) => {
        console.error('Error loading model:', error);
        setIsLoading(false);
      }
    );

    // Mouse interaction
    const handleMouseMove = (event) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    mountRef.current.appendChild(renderer.domElement);

    // Animation loop
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);

      const time = Date.now() * 0.001;
      const mouse = mouseRef.current;

      if (modelRef.current) {
        const model = modelRef.current;
        
        // Gentle auto-rotation
        model.rotation.y += 0.005;
        
        // Mouse interaction - subtle movement
        const targetX = mouse.x * 2;
        const targetY = mouse.y * 1;
        
        model.position.x += (targetX - model.position.x) * 0.02;
        model.position.y += (targetY - model.position.y) * 0.02;
        
        // Gentle floating motion
        model.position.y += Math.sin(time * 2) * 0.01;
      }

      // Move camera slightly based on mouse
      camera.position.x = mouse.x * 3;
      camera.position.y = mouse.y * 2;
      camera.lookAt(0, 0, 0);

      // Animate point light based on mouse
      pointLight.position.x = mouse.x * 15;
      pointLight.position.y = mouse.y * 10;

      renderer.render(scene, camera);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!mountRef.current || !camera || !renderer) return;
      
      camera.aspect = mountRef.current.clientWidth / mountRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mountRef.current.clientWidth, mountRef.current.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full z-0">
      <div 
        ref={mountRef} 
        className="w-full h-full"
        style={{ touchAction: 'none' }}
      />
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
          <div className="text-white text-lg">Loading 3D Model...</div>
        </div>
      )}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5" />
    </div>
  );
};

const ThreeDDevelopmentService = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, []);
    const features = [
        {
            icon: Eye,
            title: "3D Modeling & Design",
            description: "High-quality 3D models and designs for various applications and industries."
        },
        {
            icon: Smartphone,
            title: "Cross-Platform Support",
            description: "Compatible with major platforms and devices for maximum reach and accessibility."
        },
        {
            icon: Layers3,
            title: "Advanced Rendering",
            description: "High-fidelity rendering with realistic lighting, materials, and textures."
        },
        {
            icon: Gamepad2,
            title: "Interactive Elements",
            description: "Engaging interactive 3D elements and animations for immersive experiences."
        },
        {
            icon: Camera,
            title: "3D Visualization",
            description: "Stunning 3D visualizations for product showcases and architectural designs."
        },
        {
            icon: Headphones,
            title: "Spatial Audio",
            description: "3D spatial audio integration for enhanced immersive experiences."
        }
    ];

    const applications = [
        {
            title: "Product Visualization",
            description: "Create detailed 3D models and visualizations for product marketing and design.",
            examples: ["Product renders", "3D prototypes", "Virtual showrooms", "Interactive demos"]
        },
        {
            title: "Architectural Visualization",
            description: "3D architectural models and walkthroughs for real estate and construction.",
            examples: ["Building models", "Interior design", "Virtual tours", "Construction planning"]
        },
        {
            title: "Gaming & Entertainment",
            description: "3D assets and environments for games, VR experiences, and entertainment.",
            examples: ["Game assets", "VR environments", "3D animations", "Character models"]
        },
        {
            title: "Medical & Scientific",
            description: "3D models for medical visualization, training, and scientific research.",
            examples: ["Medical models", "Training simulations", "Research visualization", "Educational content"]
        }
    ];

    const technologies = [
        { name: "Blender", description: "Open-source 3D modeling and animation software" },
        { name: "Maya", description: "Professional 3D animation and modeling software" },
        { name: "3ds Max", description: "3D modeling, animation, and rendering software" },
        { name: "Unity 3D", description: "Game engine for 3D development and real-time rendering" },
        { name: "Unreal Engine", description: "Advanced 3D engine for high-fidelity graphics" },
        { name: "Cinema 4D", description: "3D modeling, animation, and motion graphics software" },
        { name: "Houdini", description: "Procedural 3D modeling and visual effects software" },
        { name: "ZBrush", description: "Digital sculpting and 3D modeling software" }
    ];

    const processSteps = [
        {
            step: "01",
            title: "Concept & Planning",
            description: "Define project requirements, create concept sketches, and plan the 3D development approach.",
            duration: "1-2 weeks"
        },
        {
            step: "02",
            title: "3D Modeling",
            description: "Create detailed 3D models with proper topology, UV mapping, and texture preparation.",
            duration: "3-5 weeks"
        },
        {
            step: "03",
            title: "Texturing & Materials",
            description: "Apply realistic textures, materials, and lighting to achieve desired visual quality.",
            duration: "2-3 weeks"
        },
        {
            step: "04",
            title: "Rendering & Animation",
            description: "Set up rendering parameters, create animations, and produce final outputs.",
            duration: "2-4 weeks"
        },
        {
            step: "05",
            title: "Integration & Testing",
            description: "Integrate 3D content into target platforms and conduct thorough testing.",
            duration: "1-2 weeks"
        }
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
            highlighted: false
        },
        {
            name: "Professional 3D Package",
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
            highlighted: true
        },
        {
            name: "Enterprise 3D Solution",
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
            highlighted: false
        }
    ];

    const portfolio = [
        {
            title: "Product 3D Visualization",
            description: "High-quality 3D product renders for e-commerce and marketing campaigns",
            image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
            tech: ["Blender", "Substance Painter", "Cycles Renderer"]
        },
        {
            title: "Architectural 3D Model",
            description: "Detailed architectural visualization with realistic lighting and materials",
            image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&q=80&w=800",
            tech: ["3ds Max", "V-Ray", "AutoCAD Integration"]
        },
        {
            title: "Game 3D Assets",
            description: "Optimized 3D models and environments for gaming and VR applications",
            image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=800",
            tech: ["Maya", "Unity 3D", "ZBrush"]
        }
    ];

    return (
        <div className="min-h-screen bg-background relative">
            {/* Navbar */}
            <Navbar 
                title="3D Development Services - Virelity.com"
                description="Professional 3D modeling, visualization, and interactive 3D development services. Create stunning 3D content for your business."
            />
            
            {/* 3D Background */}
            <Interactive3DBackground />
            
            {/* Content Overlay */}
            <div className="relative z-10">
                {/* Hero Section */}
                <section className="h-screen min-h-[500px] bg-gradient-to-br from-purple-600/10 to-pink-600/10 relative overflow-hidden flex items-center justify-center">
                    {/* Background Video only in hero */}
                   
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
                                    <span className="text-purple-400 font-semibold">3D Development</span>
                                </div>

                                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    Bring Your Ideas to Life in 3D
                                </h1>

                                <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                                    Create stunning 3D models, visualizations, and interactive experiences that captivate your audience and bring your concepts to life with cutting-edge 3D development technology.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                                        Start Your 3D Project
                                    </button>
                                    <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
                                        View 3D Portfolio
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
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our 3D Development?</h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                We create high-quality 3D content that delivers exceptional visual experiences and drives engagement.
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
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">3D Development Applications</h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                Discover how our 3D development services can transform your business and create immersive experiences.
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
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">3D Development Technologies</h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                We use industry-leading 3D software and tools to create exceptional 3D content.
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
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our 3D Development Process</h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                We follow a systematic approach to create high-quality 3D content that meets your requirements.
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
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">3D Development Packages</h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                Choose the perfect package for your 3D development needs and bring your ideas to life.
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
                            <h2 className="text-3xl md:text-4xl font-bold mb-4">3D Projects We've Created</h2>
                            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                                Explore our portfolio of successful 3D development projects across different industries.
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
                <section className="py-20 bg-gradient-to-r from-purple-600/10 to-pink-600/10">
                    <div className="container">
                        <div className="text-center max-w-3xl mx-auto">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Ready to Create in 3D?
                            </h2>
                            <p className="text-xl text-muted-foreground mb-8">
                                Let's discuss how our 3D development expertise can transform your ideas into stunning visual experiences.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                                    Schedule 3D Consultation
                                </button>
                                <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-300">
                                    View More Projects
                                </button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ThreeDDevelopmentService;