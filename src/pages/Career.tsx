import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Button } from "@/components/ui/button";
import { PageTransition } from "@/components/PageTransition";
import { m as motion } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  ArrowRight,
  Star,
  Award,
  Target,
  Lightbulb,
  Heart,
  Zap,
  Globe,
  Code,
  Palette,
  Database,
  Smartphone,
  Laptop,
  Sparkles
} from "lucide-react";

interface Position {
  title: string;
  location: string;
  type?: string;
  description?: string;
}

const Career = () => {
  const positionsRef = useRef<HTMLDivElement>(null);
  const [selectedPosition, setSelectedPosition] = useState<Position | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    coverLetter: '',
    resume: null as File | null
  });

  const scrollToPositions = () => {
    positionsRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  const handleShare = (position: Position) => {
    const shareText = `Check out this job opportunity at Virelity.com: ${position.title} - ${position.location}`;
    const shareUrl = window.location.href;
    
    if (navigator.share) {
      navigator.share({
        title: `${position.title} - Virelity.com`,
        text: shareText,
        url: shareUrl
      });
    } else {
      // Fallback: Copy to clipboard
      navigator.clipboard.writeText(`${shareText} - ${shareUrl}`);
      alert('Job link copied to clipboard!');
    }
  };

  const handleApply = (position: Position) => {
    setSelectedPosition(position);
    setFormData(prev => ({
      ...prev,
      position: position.title
    }));
    setIsDialogOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create email content
    const subject = `Application for ${selectedPosition?.title} - Virelity.com`;
    const body = `Dear Hiring Team,

I am writing to express my interest in the ${selectedPosition?.title} position at Virelity.com.

Application Details:
- Name: ${formData.fullName}
- Email: ${formData.email}
- Phone: ${formData.phone}
- Experience: ${formData.experience}

Cover Letter:
${formData.coverLetter}

I am excited about the opportunity to contribute to your innovative team and help build cutting-edge digital solutions.

Best regards,
${formData.fullName}`;
    
    const mailtoLink = `mailto:deon.menezes@virelity.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink);
    
    // Reset form and close dialog
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      coverLetter: '',
      resume: null
    });
    setIsDialogOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      resume: file
    }));
  };

  // Handle body scroll lock when modal is open
  useEffect(() => {
    if (isDialogOpen) {
      // Store the current scroll position
      const scrollY = window.scrollY;
      
      // Lock the body scroll
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
      document.body.style.overflow = 'hidden';
    } else {
      // Restore scroll position and unlock
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    // Cleanup on unmount
    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
    };
  }, [isDialogOpen]);
  const openPositions = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "3-5 years",
      description: "Join our team to build cutting-edge web applications using React, TypeScript, and modern frontend technologies.",
      requirements: [
        "3+ years experience with React and TypeScript",
        "Strong knowledge of CSS frameworks (Tailwind, Styled Components)",
        "Experience with state management (Redux, Zustand)",
        "Familiarity with testing frameworks (Jest, React Testing Library)",
        "Experience with build tools (Vite, Webpack)"
      ],
      benefits: ["Competitive salary", "Health insurance", "Flexible work hours", "Remote work options"]
    },
    {
      id: 2,
      title: "UI/UX Designer",
      department: "Design",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "2-4 years",
      description: "Create beautiful and intuitive user experiences that delight our clients and users.",
      requirements: [
        "2+ years of UI/UX design experience",
        "Proficiency in Figma, Adobe Creative Suite",
        "Strong portfolio showcasing design skills",
        "Understanding of design systems and accessibility",
        "Experience with prototyping tools"
      ],
      benefits: ["Creative freedom", "Latest design tools", "Professional development", "Team collaboration"]
    },
    {
      id: 3,
      title: "Backend Developer",
      department: "Engineering",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "2-4 years",
      description: "Build scalable and robust backend systems using Node.js, Python, and cloud technologies.",
      requirements: [
        "2+ years backend development experience",
        "Proficiency in Node.js, Python, or Java",
        "Database experience (PostgreSQL, MongoDB)",
        "API design and development",
        "Cloud platform experience (AWS, GCP, Azure)"
      ],
      benefits: ["Technical growth", "Cloud certifications", "Code reviews", "Architecture decisions"]
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "3-5 years",
      description: "Manage our infrastructure and deployment pipelines to ensure smooth operations.",
      requirements: [
        "3+ years DevOps experience",
        "Docker and Kubernetes expertise",
        "CI/CD pipeline experience",
        "Cloud infrastructure management",
        "Monitoring and logging tools"
      ],
      benefits: ["Infrastructure ownership", "Latest tools", "Automation focus", "Team support"]
    },
    {
      id: 5,
      title: "Project Manager",
      department: "Management",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "2-4 years",
      description: "Lead and coordinate projects from conception to completion, ensuring timely delivery and client satisfaction.",
      requirements: [
        "2+ years project management experience",
        "Experience with Agile/Scrum methodologies",
        "Strong communication and leadership skills",
        "Technical background preferred",
        "Client relationship management experience"
      ],
      benefits: ["Leadership opportunities", "Client interaction", "Project ownership", "Career growth"]
    },
    {
      id: 6,
      title: "AIML Developer",
      department: "Engineering",
      location: "Mumbai, India",
      type: "Full-time",
      experience: "10+ years",
      description: "Develop and implement AI/ML solutions to enhance our products and services with cutting-edge artificial intelligence.",
      requirements: [
        "1+ years experience in AI/ML development",
        "Proficiency in Python, TensorFlow, or PyTorch",
        "Experience with machine learning algorithms",
        "Knowledge of data preprocessing and model training",
        "Understanding of NLP or computer vision preferred"
      ],
      benefits: ["AI innovation", "Latest ML tools", "Research opportunities", "Technical growth"]
    }
  ];

  const companyValues = [
    {
      icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
      title: "Innovation",
      description: "We encourage creative thinking and embrace new technologies to solve complex problems."
    },
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Passion",
      description: "We're passionate about what we do and committed to delivering exceptional results."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-500" />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and open communication across all departments."
    },
    {
      icon: <Target className="h-8 w-8 text-green-500" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from code quality to client satisfaction."
    }
  ];

  const perks = [
    { icon: <Zap className="h-6 w-6" />, text: "Flexible working hours" },
    { icon: <Globe className="h-6 w-6" />, text: "Remote work options" },
    { icon: <Award className="h-6 w-6" />, text: "Professional development budget" },
    { icon: <Heart className="h-6 w-6" />, text: "Health insurance coverage" },
    { icon: <Star className="h-6 w-6" />, text: "Performance bonuses" },
    { icon: <Users className="h-6 w-6" />, text: "Team building activities" },
    { icon: <Laptop className="h-6 w-6" />, text: "Latest equipment and tools" },
    { icon: <TrendingUp className="h-6 w-6" />, text: "Career growth opportunities" }
  ];

  const technologies = [
    { icon: <Code className="h-8 w-8 text-blue-500" />, name: "React & TypeScript" },
    { icon: <Database className="h-8 w-8 text-green-500" />, name: "Node.js & Python" },
    { icon: <Palette className="h-8 w-8 text-purple-500" />, name: "Figma & Design Systems" },
    { icon: <Smartphone className="h-8 w-8 text-orange-500" />, name: "Mobile Development" },
    { icon: <Globe className="h-8 w-8 text-cyan-500" />, name: "Cloud & DevOps" }
  ];

  return (
    <PageTransition>
      <Navbar />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative overflow-hidden min-h-screen flex items-center">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Briefcase className="h-4 w-4" />
                Join Our Team
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent mb-6">
                Build the Future with Us
              </h1>
              
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                We're looking for passionate individuals who want to make a difference in the world of technology. 
                Join our innovative team and help us create amazing digital experiences.
              </p>

              <div className="flex flex-wrap justify-center gap-4 mb-12">
                <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
                  <MapPin className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Mumbai, India</span>
                </div>
                <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Flexible Hours</span>
                </div>
                <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm px-4 py-2 rounded-full border border-border">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">Growing Team</span>
                </div>
              </div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={scrollToPositions}
                  className="bg-gradient-to-r from-primary to-accent text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  View Open Positions
                  <ArrowRight className="inline-block ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 bg-card/50 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-foreground mb-4">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                These core values guide everything we do and shape our company culture
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-card/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border"
                >
                  <div className="mb-4">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies We Use */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-foreground mb-4">Technologies We Work With</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Join us and work with cutting-edge technologies that shape the future
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center border border-border"
                >
                  <div className="mb-4 flex justify-center">{tech.icon}</div>
                  <h3 className="font-semibold text-foreground">{tech.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Perks & Benefits */}
        <section className="py-20 bg-gradient-to-br from-card/50 to-muted/30">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-foreground mb-4">Perks & Benefits</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We believe in taking care of our team with comprehensive benefits and perks
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {perks.map((perk, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border flex items-center gap-3"
                >
                  <div className="text-primary">{perk.icon}</div>
                  <span className="font-medium text-foreground">{perk.text}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section ref={positionsRef} className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-foreground mb-4">Open Positions</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Find your perfect role and join our growing team of talented professionals
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-6">
              {openPositions.map((position, index) => (
                <motion.div
                  key={position.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  {/* Company Info */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center">
                      <img 
                        src="/logo.jpeg" 
                        alt="Virelity.com Logo" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">Virelity.com</h3>
                      <p className="text-sm text-muted-foreground">Competitive Salary</p>
                    </div>
                  </div>

                  {/* Job Title */}
                  <h2 className="text-xl font-bold text-foreground mb-4">{position.title}</h2>

                  {/* Job Details */}
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium text-foreground">Location:</span>
                      <span className="text-muted-foreground">{position.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium text-foreground">Type:</span>
                      <span className="text-muted-foreground">{position.type}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="font-medium text-foreground">Experience:</span>
                      <span className="text-muted-foreground">{position.experience}</span>
                    </div>
                  </div>

                  {/* Job Description */}
                  <p className="text-sm text-muted-foreground mb-6 line-clamp-3">{position.description}</p>

                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="flex-1"
                      onClick={() => handleShare(position)}
                    >
                      Share
                    </Button>
                    <Button 
                      size="sm" 
                      className="flex-1 bg-primary hover:bg-primary/90"
                      onClick={() => handleApply(position)}
                    >
                      Apply
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-primary-foreground"
            >
              <h2 className="text-4xl font-bold mb-4">Don't See Your Role?</h2>
              <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
                We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our team.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  onClick={() => {
                    const subject = "Resume Submission - Virelity.com";
                    const body = `Dear Hiring Team,

I am interested in joining your team at Virelity.com. Please find my resume attached for your review.

I am excited about the opportunity to contribute to your innovative team and help build cutting-edge digital solutions.

Best regards,
[Your Name]`;
                    
                    const mailtoLink = `mailto:deon.menezes@virelity.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                    window.open(mailtoLink);
                  }}
                  className="bg-background text-foreground px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Send Your Resume
                  <ArrowRight className="inline-block ml-2 h-5 w-5" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </div>
      
      {/* Application Form Modal */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent 
          className="max-w-2xl max-h-[90vh] p-0"
          onOpenAutoFocus={(e) => e.preventDefault()}
          onPointerDownOutside={(e) => e.preventDefault()}
          onEscapeKeyDown={(e) => e.preventDefault()}
        >
          <div className="max-h-[90vh] flex flex-col">
            <DialogHeader className="p-6 pb-4 border-b border-border">
              <DialogTitle className="text-2xl font-bold text-foreground">
                Apply for {selectedPosition?.title}
              </DialogTitle>
            </DialogHeader>
            
            <div className="flex-1 overflow-y-auto p-6">
              <form onSubmit={handleFormSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="position" className="text-foreground">Position Applied For *</Label>
              <Input
                id="position"
                name="position"
                value={formData.position}
                onChange={handleInputChange}
                required
                className="bg-background border-border"
                placeholder="Enter the position you're applying for"
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-foreground">Full Name *</Label>
                <Input
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  required
                  className="bg-background border-border"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">Email Address *</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-background border-border"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-foreground">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="bg-background border-border"
                  placeholder="Enter your phone number"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="experience" className="text-foreground">Years of Experience *</Label>
                <Input
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                  className="bg-background border-border"
                  placeholder="e.g., 3-5 years"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="resume" className="text-foreground">Resume/CV</Label>
              <Input
                id="resume"
                name="resume"
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="bg-background border-border"
              />
              <p className="text-sm text-muted-foreground">
                Upload your resume (PDF, DOC, or DOCX format)
              </p>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="coverLetter" className="text-foreground">Cover Letter *</Label>
              <Textarea
                id="coverLetter"
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                required
                rows={6}
                className="bg-background border-border"
                placeholder="Tell us why you're interested in this position and what makes you a great fit..."
              />
            </div>
            
                <div className="flex gap-4 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsDialogOpen(false)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    className="flex-1 bg-primary hover:bg-primary/90"
                  >
                    Submit Application
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      
      <Footer />
    </PageTransition>
  );
};

export default Career;
