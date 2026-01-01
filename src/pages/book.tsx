import React, { useState, useEffect, useRef } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, useSpring, useInView } from "framer-motion";
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
                                <svg className="w-28 h-10" viewBox="0 0 603 182" fill="currentColor">
                                    <path d="M374.006 142.184c-34.784 25.702-85.144 39.38-128.574 39.38-60.858 0-115.656-22.52-157.14-59.99-3.256-2.942-.338-6.962 3.572-4.668 44.764 26.052 100.11 41.73 157.244 41.73 38.54 0 80.932-7.988 119.916-24.546 5.876-2.5 10.81 3.858 5.014 8.094h-.032z"/>
                                    <path d="M388.002 126.166c-4.434-5.688-29.368-2.694-40.568-1.358-3.404.416-3.924-2.556-.858-4.694 19.858-13.962 52.436-9.93 56.232-5.252 3.798 4.702-.994 37.28-19.646 52.842-2.866 2.392-5.59 1.118-4.324-2.052 4.194-10.478 13.6-33.962 9.162-39.486h.002zM348.312 20.972V6.584c0-2.184 1.654-3.642 3.64-3.642h64.382c2.068 0 3.724 1.486 3.724 3.642v12.318c-.022 2.086-1.78 4.818-4.894 9.088l-33.358 47.622c12.39-.302 25.47 1.546 36.698 7.894 2.532 1.432 3.222 3.538 3.418 5.614v15.346c0 2.106-2.322 4.566-4.76 3.294-19.886-10.422-46.296-11.56-68.296.108-2.244 1.214-4.594-1.212-4.594-3.32v-14.574c0-2.36.032-6.388 2.442-9.974l38.64-55.428h-33.628c-2.068 0-3.724-1.458-3.724-3.614l-.002.006.314-.006h.002zm-237.326 85.69h-19.584c-1.872-.142-3.36-1.544-3.5-3.332V6.802c0-2.012 1.676-3.614 3.76-3.614h18.254c1.902.084 3.424 1.544 3.566 3.362v14.008h.366c4.774-13.37 13.756-19.612 25.854-19.612 12.282 0 19.966 6.242 25.488 19.612 4.746-13.37 15.532-19.612 27.202-19.612 8.252 0 17.264 3.406 22.776 11.048 6.244 8.506 4.978 20.884 4.978 31.726l-.022 59.372c0 2.01-1.676 3.642-3.758 3.642h-19.558c-1.948-.142-3.51-1.7-3.51-3.642V54.198c0-4.268.366-14.91-.548-18.936-1.466-6.74-5.856-8.632-11.55-8.632-4.758 0-9.722 3.166-11.744 8.252-2.022 5.086-1.832 13.584-1.832 19.316v48.916c0 2.01-1.676 3.642-3.758 3.642h-19.558c-1.962-.142-3.508-1.7-3.508-3.642l-.022-48.916c0-11.304 1.852-27.948-12.098-27.948-14.132 0-13.576 16.264-13.576 27.948v48.916c0 2.01-1.676 3.642-3.758 3.642l.092-.02zm360.066-85.69c29.08 0 44.808 24.978 44.808 56.704 0 30.67-17.38 55.02-44.808 55.02-28.528 0-44.064-24.978-44.064-56.076 0-31.284 15.724-55.648 44.064-55.648zm.182 20.52c-14.5 0-15.414 19.754-15.414 32.082 0 12.342-.184 38.696 15.232 38.696 15.232 0 15.964-21.256 15.964-34.214 0-8.524-.366-18.71-2.938-26.842-2.208-7.072-6.6-10.722-12.844-10.722v1zM522.494 106.662h-19.482c-1.948-.142-3.51-1.7-3.51-3.642l-.024-96.236c.168-1.87 1.792-3.334 3.76-3.334h18.148c1.706.084 3.104 1.256 3.482 2.828v14.72h.366c5.49-13.246 13.21-19.612 26.78-19.612 8.8 0 17.382 3.166 22.896 11.924 5.124 8.134 5.124 21.824 5.124 31.726v58.112c-.21 1.8-1.82 3.214-3.76 3.214h-19.662c-1.814-.142-3.304-1.472-3.486-3.214V53.196c0-11.048 1.28-27.21-12.282-27.21-4.774 0-9.172 3.194-11.366 8.036-2.754 6.114-3.108 12.202-3.108 19.174v49.902c-.024 2.012-1.724 3.642-3.784 3.642l-.092-.078zm-227.376-38.7c0 7.704.184 14.136-3.692 21.01-3.142 5.602-8.134 9.054-13.662 9.054-7.574 0-12.012-5.772-12.012-14.3 0-16.82 15.068-19.876 29.366-19.876v4.112zm19.9 48.118c-1.304 1.16-3.19 1.242-4.664.468-6.554-5.448-7.738-7.976-11.328-13.166-10.836 11.052-18.52 14.362-32.56 14.362-16.628 0-29.558-10.262-29.558-30.794 0-16.036 8.684-26.956 21.064-32.296 10.732-4.712 25.722-5.554 37.186-6.856v-2.556c0-4.696.366-10.252-2.39-14.314-2.392-3.638-6.966-5.138-11.012-5.138-7.48 0-14.148 3.838-15.78 11.798-.334 1.77-1.632 3.514-3.408 3.602l-18.998-2.052c-1.606-.36-3.39-1.656-2.932-4.114C250.05 9.546 273.21.946 293.864.946c10.364 0 23.912 2.76 32.096 10.614 10.364 9.68 9.378 22.604 9.378 36.66v33.216c0 9.984 4.142 14.362 8.038 19.764 1.362 1.924 1.66 4.228-.07 5.666-4.324 3.614-12.012 10.322-16.248 14.088l-.044-.058v-.016z"/>
                                </svg>

                                <div className="flex items-center gap-2">
                                    <ShoppingCart className="w-5 h-5" />
                                    <span className="text-lg">Buy Now on Amazon</span>
                                </div>

                                <span className="text-sm opacity-80">Instant Delivery Available</span>
                            </motion.a>

                            {/* Flipkart - Coming Soon */}
                            <motion.div
                                initial={{ opacity: 0.6 }}
                                className="relative flex flex-col items-center justify-center gap-3 p-6 rounded-2xl bg-zinc-800/50 border border-zinc-700/50 text-zinc-400 cursor-not-allowed"
                            >
                                <div className="absolute inset-0 bg-zinc-900/50 backdrop-blur-sm rounded-2xl" />
                                <div className="relative z-10 flex flex-col items-center gap-3">
                                    {/* Flipkart Logo */}
                                    <svg className="w-28 h-10 opacity-50" viewBox="0 0 244 60" fill="currentColor">
                                        <path d="M27.4 0H2.7C1.2 0 0 1.2 0 2.7v24.7C0 28.8 1.2 30 2.7 30h24.7c1.5 0 2.7-1.2 2.7-2.7V2.7C30 1.2 28.8 0 27.4 0zM15 25.5c-5.8 0-10.5-4.7-10.5-10.5S9.2 4.5 15 4.5 25.5 9.2 25.5 15 20.8 25.5 15 25.5z"/>
                                        <path d="M51.2 8.6h-8.1v2.6h8.1v2.9h-8.1v6.4h-3.3V5.7h11.4v2.9zm8.7 11.9h-3.1V5.7h3.1v14.8zm4.7-7.1v7.1h-3.1V5.7h3.1v5.9c.5-.4 1.1-.7 1.8-.9.7-.2 1.4-.3 2.1-.3 1.5 0 2.7.5 3.5 1.4.8.9 1.3 2.2 1.3 3.8v5h-3.1v-4.6c0-.9-.2-1.5-.6-2-.4-.4-.9-.7-1.6-.7-.5 0-1 .1-1.4.3-.4.2-.8.5-1 .9zm23.3 2.8c0 .4 0 .7-.1 1h-9.1c.1.8.4 1.4.9 1.8.5.4 1.1.6 1.9.6.6 0 1.1-.1 1.5-.4.4-.2.7-.6.9-1h3.2c-.3 1.1-.9 2-1.8 2.7-.9.7-2 1-3.5 1-1.1 0-2.1-.2-2.9-.7-.8-.5-1.5-1.1-2-2-.5-.9-.7-1.9-.7-3s.2-2.1.7-3c.5-.9 1.1-1.5 2-2 .9-.5 1.8-.7 2.9-.7s2.1.2 2.9.7c.8.5 1.5 1.1 1.9 1.9.5.8.7 1.7.7 2.8v.3zm-3.2-.8c0-.7-.2-1.3-.7-1.7-.4-.4-1-.6-1.7-.6-.6 0-1.2.2-1.6.6-.4.4-.7 1-.8 1.7h4.8z"/>
                                    </svg>

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