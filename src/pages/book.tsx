import React, { useState, useEffect, useRef } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Button } from "@/components/ui/button";
import { m as motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
import {
  TrendingUp, Clock, Activity, Cpu, Brain, Layers, ShoppingCart
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

// --- Sub-components ---

// 1. Text Reveal Component
const TextReveal = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-30% 0px -30% 0px" });

  return (
    <p 
      ref={ref}
      className={`text-4xl md:text-6xl font-bold transition-colors duration-1000 leading-tight tracking-tight ${
        isInView ? "text-white" : "text-white/20"
      }`}
    >
      {children}
    </p>
  );
};

// 2. Advanced Tech Card Component
const BlueprintCard = ({ title, desc, icon: Icon, id, className, delay, accent = "amber" }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.6 }}
            className={`group relative overflow-hidden bg-black/40 backdrop-blur-sm border border-white/10 p-8 flex flex-col justify-between ${className}`}
        >
            <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-white/30 group-hover:w-4 group-hover:h-4 transition-all duration-300" />
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white/30 group-hover:w-4 group-hover:h-4 transition-all duration-300" />
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-white/30 group-hover:w-4 group-hover:h-4 transition-all duration-300" />
            <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-white/30 group-hover:w-4 group-hover:h-4 transition-all duration-300" />

            <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${
                accent === "blue" ? "from-blue-500/10 via-transparent to-transparent" : "from-amber-500/10 via-transparent to-transparent"
            }`} />

            <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                    <div className={`p-3 rounded-lg border border-white/5 bg-zinc-900/50 ${
                        accent === "blue" ? "text-blue-400 group-hover:text-blue-300 group-hover:border-blue-500/30" : "text-amber-500 group-hover:text-amber-300 group-hover:border-amber-500/30"
                    } transition-colors duration-300`}>
                        <Icon className="w-8 h-8" strokeWidth={1.5} />
                    </div>
                    <span className="font-mono text-xs text-zinc-600 tracking-widest uppercase">
                        {id}
                    </span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:translate-x-1 transition-transform duration-300">
                    {title}
                </h3>
                <p className="text-zinc-400 leading-relaxed text-sm border-l-2 border-transparent pl-0 group-hover:pl-4 group-hover:border-white/10 transition-all duration-300">
                    {desc}
                </p>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:via-white/20" />
        </motion.div>
    );
};

// 3. Reusable 3D Book Component
const ThreeDBook = ({ image, spineColor, glowColor, delay }) => {
    const { scrollYProgress } = useScroll();
    const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
    const y = useTransform(smoothProgress, [0, 1], [0, -30]);

    return (
        <div className="relative w-[200px] md:w-[260px] aspect-[2/3] mx-auto perspective-1000 group cursor-pointer">
            <motion.div
                initial={{ opacity: 0, y: 50, rotateY: 0 }}
                animate={{ opacity: 1, y: 0, rotateY: -10 }}
                transition={{ duration: 1, delay: delay, ease: "easeOut" }}
                whileHover={{ rotateY: -25, scale: 1.05, y: -20 }}
                style={{ y }}
                className="relative w-full h-full transition-all duration-500 preserve-3d"
            >
                {/* Book Spine */}
                <div className={`absolute left-0 top-1 h-[98%] w-[20px] -translate-x-[10px] translate-z-[-10px] rotate-y-[-90deg] ${spineColor}`} />
                
                {/* Back Cover */}
                <div className="absolute right-1 top-1 h-[98%] w-[20px] bg-zinc-800 -translate-x-[-10px] translate-z-[-10px] rotate-y-[90deg] opacity-50" />

                {/* FRONT COVER */}
                <div className="absolute inset-0 rounded-r-md rounded-l-sm shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)] border-l-2 border-white/10 overflow-hidden bg-zinc-900">
                    <img 
                        src={image} 
                        alt="Book Cover" 
                        className="w-full h-full object-cover"
                    />
                    {/* Glossy Sheen */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                </div>
            </motion.div>

            {/* Floor Shadow */}
            <div className={`absolute -bottom-12 left-1/2 -translate-x-1/2 w-[80%] h-8 blur-2xl rounded-full opacity-60 transition-all duration-500 group-hover:scale-110 group-hover:opacity-80 ${glowColor}`} />
        </div>
    );
};

const BookPage = () => {
  // Waitlist State
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    note: ''
  });

  // --- Handlers for Waitlist ---
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleWaitlistSubmit = (e) => {
    e.preventDefault();
    
    // Construct Email
    const subject = "Waitlist Join Request: Business in the Age of AI";
    const body = `Dear Team,

I would like to join the priority waitlist for Deon Menezes' new book.

Details:
- Name: ${formData.fullName}
- Email: ${formData.email}
- Phone: ${formData.phone}

Note:
${formData.note}

Please notify me when the book launches.`;
    
    // Trigger Mailto
    window.open(`mailto:deon.menezes@virelity.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    
    // Reset and Close
    setIsWaitlistOpen(false);
    setFormData({ fullName: '', email: '', phone: '', note: '' });
  };

  return (
    // Added overflow-x-hidden and w-full here as well to prevent scrollbars
    <div className="min-h-screen bg-black text-white font-sans selection:bg-amber-500/30 overflow-x-hidden w-full">
      <Navbar />

      <main className="relative z-10">
        
        {/* --- MEGA HERO SECTION --- */}
        <section className="relative min-h-screen flex flex-col items-center justify-between pt-32 pb-12 overflow-hidden px-4">
          
          {/* Background Ambience */}
          <div className="absolute inset-0 pointer-events-none">
             <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-amber-900/10 rounded-full blur-[120px] opacity-40" />
             <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-900/10 rounded-full blur-[120px] opacity-40" />
             <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
          </div>

          <div className="max-w-7xl mx-auto w-full relative z-20 flex flex-col items-center flex-grow justify-center gap-12">
            
            {/* 1. HERO TEXT */}
            <div className="text-center space-y-6 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-zinc-500">
                        The Only Book <br className="hidden md:block" />
                        You Need to Start <br className="hidden md:block" />
                        a Business in 2026
                    </h1>
                </motion.div>
                
                <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="text-lg md:text-2xl text-zinc-400 font-light tracking-wide max-w-2xl mx-auto"
                >
                    The Founder's Guide to <span className="text-white font-medium">System Clarity</span> & <span className="text-white font-medium">Strategies</span>
                </motion.p>
            </div>

            {/* 2. DUAL BOOK VISUALS */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-32 w-full max-w-5xl items-center justify-center my-4">
                
                {/* Left: Raw */}
                <div className="flex flex-col items-center">
                    <ThreeDBook 
                        image="/whitebook.png" 
                        spineColor="bg-zinc-900" 
                        glowColor="bg-amber-600/40"
                        delay={0.2} 
                    />
                    <p className="mt-8 text-sm font-mono text-amber-500 uppercase tracking-widest opacity-60">The Raw Draft</p>
                </div>

                {/* Right: Polished */}
                <div className="flex flex-col items-center">
                    <ThreeDBook 
                        image="/blackbook.png" 
                        // CHANGED: spineColor to bg-zinc-900 (Dark Grey) to remove the white bar
                        spineColor="bg-zinc-900" 
                        glowColor="bg-blue-600/40"
                        delay={0.4} 
                    />
                    <p className="mt-8 text-sm font-mono text-blue-400 uppercase tracking-widest opacity-60">The AI Masterpiece</p>
                </div>

            </div>

            {/* 3. BUY NOW SECTION */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="w-full max-w-4xl mx-auto"
            >
                {/* Main Purchase Card */}
                <div className="relative p-8 rounded-3xl bg-gradient-to-br from-zinc-900/80 via-zinc-900/60 to-zinc-950/80 border border-white/10 backdrop-blur-xl overflow-hidden">

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-48 h-48 bg-amber-500/10 rounded-full blur-[80px] pointer-events-none" />

                    <div className="relative z-10">
                        {/* Header */}
                        <div className="text-center mb-8">
                            <motion.div
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-4"
                            >
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                <span className="text-green-400 text-sm font-medium">Black Edition Available Now</span>
                            </motion.div>
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Get Your Copy Today</h3>
                            <p className="text-zinc-400">The AI Masterpiece Edition is now available for purchase</p>
                        </div>

                        {/* Purchase Options */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                            {/* Amazon Button - Primary */}
                            <motion.a
                                href="https://www.amazon.in/gp/product/8199573775/ref=cx_skuctr_share_ls_srb?smid=A3U30B7Y7STKIV&tag=ShopReferral_3ecc4584-e5b7-421e-93c3-24acf2931a1c"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.03, y: -4 }}
                                whileTap={{ scale: 0.98 }}
                                className="group relative flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-gradient-to-br from-[#FF9900] via-[#FFB347] to-[#FF9900] text-black font-bold overflow-hidden shadow-[0_0_40px_-10px_rgba(255,153,0,0.5)] hover:shadow-[0_0_60px_-10px_rgba(255,153,0,0.7)] transition-all duration-300 cursor-pointer"
                            >
                                {/* Shine Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />

                                {/* Amazon Logo */}
                                <div className="text-black font-black text-4xl tracking-tight flex items-center gap-1">
                                    amazon
                                    <svg className="w-20 h-4 -mt-2" viewBox="0 0 100 30" fill="currentColor">
                                        <path d="M60 22c-12 9-29 14-44 14-21 0-39-8-53-21-1-1 0-2 1-2 15 9 34 14 53 14 13 0 27-3 40-8 2-1 4 1 3 3z"/>
                                        <path d="M65 18c-2-2-10-1-14-1-1 0-1-1 0-1 7-5 18-4 20-2 1 2 0 13-7 18-1 1-2 0-1-1 1-3 5-12 3-14z"/>
                                    </svg>
                                </div>

                                <div className="flex items-center gap-2">
                                    <ShoppingCart className="w-5 h-5" />
                                    <span className="text-lg">Buy the Book Now</span>
                                </div>

                                <span className="text-sm opacity-80">Available on Amazon India</span>
                            </motion.a>

                            {/* Flipkart - Coming Soon */}
                            <motion.div
                                initial={{ opacity: 0.6 }}
                                className="relative flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 text-zinc-400 cursor-not-allowed"
                            >
                                <div className="absolute inset-0 bg-zinc-900/50 backdrop-blur-sm rounded-2xl" />
                                <div className="relative z-10 flex flex-col items-center gap-3">
                                    {/* Flipkart Logo */}
                                    <div className="opacity-50">
                                        <div className="flex items-center gap-2">
                                            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-yellow-400 rounded flex items-center justify-center">
                                                <span className="text-white font-black text-xl italic">F</span>
                                            </div>
                                            <span className="text-2xl font-bold">Flipkart</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" />
                                        <span className="text-sm font-medium">Coming Soon</span>
                                    </div>

                                    <span className="text-xs text-zinc-500">Flipkart</span>
                                </div>
                            </motion.div>

                            {/* Website Purchase - Coming Soon */}
                            <motion.div
                                initial={{ opacity: 0.6 }}
                                className="relative flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 text-zinc-400 cursor-not-allowed"
                            >
                                <div className="absolute inset-0 bg-zinc-900/50 backdrop-blur-sm rounded-2xl" />
                                <div className="relative z-10 flex flex-col items-center gap-3">
                                    <div className="w-12 h-12 rounded-xl bg-zinc-700/50 flex items-center justify-center">
                                        <ShoppingCart className="w-6 h-6 opacity-50" />
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <Clock className="w-4 h-4" />
                                        <span className="text-sm font-medium">Coming Soon</span>
                                    </div>

                                    <span className="text-xs text-zinc-500">Website Purchase</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Note */}
                        <p className="text-center text-zinc-500 text-sm mt-6">
                            The Black Edition (AI Masterpiece) is exclusively available on Amazon India
                        </p>
                    </div>
                </div>
            </motion.div>

          </div>
        </section>

        {/* --- SCROLL REVEAL SECTION --- */}
        <section className="min-h-screen py-48 md:py-64 px-4 relative z-20 bg-black flex flex-col items-center justify-center border-t border-white/5">
          <div className="max-w-4xl mx-auto space-y-40 text-center">
            <TextReveal>The old playbooks are dead.</TextReveal>
            <TextReveal>Hustle culture is burning you out.</TextReveal>
            <TextReveal>
              You need a <span className="text-amber-500">System</span>.
            </TextReveal>
          </div>
        </section>

        {/* --- ADVANCED BLUEPRINT SECTION (HUD Style) --- */}
        <section className="py-32 px-4 bg-zinc-950 relative overflow-hidden">
          {/* Tech Background Grid */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black via-transparent to-black pointer-events-none" />

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="mb-20 text-center">
                <motion.div 
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }} 
                    className="inline-block mb-4"
                >
                    <span className="font-mono text-xs text-amber-500 uppercase tracking-[0.3em] border border-amber-500/20 px-4 py-2 rounded">System Architecture</span>
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-white">Inside the Blueprint</h2>
                <p className="text-zinc-400 max-w-xl mx-auto">Decode the operational framework used to scale high-leverage businesses.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
              
              <BlueprintCard 
                id="MOD-01"
                title="AI-First Core" 
                desc="Restructure your entire operation with AI as the central nervous system, not just a plugin."
                icon={Cpu}
                className="md:col-span-2 bg-zinc-900/20"
                accent="blue"
                delay={0.1}
              />
              
              <BlueprintCard 
                id="SYS-07"
                title="The 7 Engines" 
                desc="Sales, Fulfillment, Retention, Finance. The exact code to run your business machine."
                icon={Layers}
                className="md:row-span-2"
                accent="amber"
                delay={0.2}
              />

              <BlueprintCard 
                id="LOOP-X"
                title="Growth Loops" 
                desc="Construct self-reinforcing viral loops that compound without manual input."
                icon={TrendingUp}
                className=""
                accent="blue"
                delay={0.3}
              />

              <BlueprintCard 
                id="MIND-OS"
                title="Founder OS" 
                desc="Upgrade your mental firmware to handle high-stakes decision making."
                icon={Brain}
                className=""
                accent="amber"
                delay={0.4}
              />

              <BlueprintCard 
                id="DATA-LIB"
                title="Battle Frameworks" 
                desc="Access 50+ copy-paste SOPs, prompt libraries, and execution protocols."
                icon={Activity}
                className="md:col-span-2"
                accent="blue"
                delay={0.5}
              />
            </div>
          </div>
        </section>

        {/* --- AUTHOR SECTION --- */}
        <section className="py-32 px-4 bg-black border-y border-white/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zinc-800/20 rounded-full blur-[100px]" />
          
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="max-w-md mx-auto md:max-w-none"
            >
              <div className="w-full h-auto rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 relative group border border-white/10 shadow-2xl shadow-black/50">
                <img 
                    src="/deonmenezes.png" 
                    alt="Deon Menezes" 
                    className="w-full h-auto object-center scale-100 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
            </motion.div>
            
            <div className="space-y-8">
              <h2 className="text-4xl font-bold tracking-tight">Written by <span className="text-white">Deon Menezes</span></h2>
              <p className="text-xl text-zinc-400 leading-relaxed">
                "I committed a thousand mistakes, faced hard failures, and learned from rare wins. I wrote everything down, built systems that created stability and consistent growth, and shaped them for the new generation navigating the AI revolution written in one book."
              </p>
              
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div>
                  <h4 className="text-3xl font-bold text-white">7+</h4>
                  <p className="text-zinc-500 text-sm">Years Experience in Business</p>
                </div>
                <div>
                  <h4 className="text-3xl font-bold text-white">Founder</h4>
                  <p className="text-zinc-500 text-sm">AI Virelity Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* --- WAITLIST MODAL --- */}
      <Dialog open={isWaitlistOpen} onOpenChange={setIsWaitlistOpen}>
        <DialogContent className="sm:max-w-md bg-zinc-950 border border-zinc-800 text-white p-8">
            <DialogHeader className="space-y-4">
                <DialogTitle className="text-4xl font-black tracking-tighter text-white leading-none">
                    Join the <br />
                    Waitlist.
                </DialogTitle>
                <DialogDescription className="text-lg text-zinc-400 font-medium tracking-wide">
                    Secure your priority access for the 2026 launch.
                </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleWaitlistSubmit} className="space-y-5 mt-6">
                <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Full Name</Label>
                    <Input
                        id="fullName"
                        name="fullName"
                        placeholder="Deon Menezes"
                        required
                        value={formData.fullName}
                        onChange={handleInputChange}
                        className="bg-zinc-900/50 border-zinc-800 focus:border-white/20 text-white placeholder:text-zinc-700 h-12 text-lg"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email" className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Email Address</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="deon@virelity.com"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-zinc-900/50 border-zinc-800 focus:border-white/20 text-white placeholder:text-zinc-700 h-12 text-lg"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="phone" className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Phone (Optional)</Label>
                    <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91..."
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="bg-zinc-900/50 border-zinc-800 focus:border-white/20 text-white placeholder:text-zinc-700 h-12 text-lg"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="note" className="text-xs uppercase tracking-widest text-zinc-500 font-semibold">Intent</Label>
                    <Textarea
                        id="note"
                        name="note"
                        placeholder="I'm building a business and..."
                        value={formData.note}
                        onChange={handleInputChange}
                        className="bg-zinc-900/50 border-zinc-800 focus:border-white/20 text-white placeholder:text-zinc-700 min-h-[80px] text-base resize-none"
                    />
                </div>

                <Button 
                    type="submit" 
                    className="w-full bg-white text-black hover:bg-zinc-200 h-14 rounded-xl text-lg font-bold tracking-tight transition-all mt-4"
                >
                    Confirm Registration
                </Button>
            </form>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
};

export default BookPage;