import { useState, useRef } from "react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

// Minimal Text Reveal Component
const TextReveal = ({ children, className = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-20% 0px -20% 0px" });

  return (
    <p
      ref={ref}
      className={`text-4xl md:text-6xl lg:text-7xl font-semibold transition-all duration-1000 leading-tight tracking-tight ${
        isInView ? "text-white opacity-100 translate-y-0" : "text-white/10 opacity-0 translate-y-8"
      } ${className}`}
    >
      {children}
    </p>
  );
};

// Parallax Image Section
const ParallaxImage = ({ src, alt, caption }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className="relative w-full h-[70vh] md:h-[90vh] overflow-hidden">
      <motion.img
        src={src}
        alt={alt}
        style={{ y }}
        className="absolute inset-0 w-full h-[120%] object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
      {caption && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="absolute bottom-12 left-0 right-0 text-center text-white/60 text-lg md:text-xl font-light"
        >
          {caption}
        </motion.p>
      )}
    </div>
  );
};

// Feature Section with Large Image
const FeatureSection = ({ title, description, image, imageAlt, reverse = false }) => {
  return (
    <section className={`py-24 md:py-40 px-6 ${reverse ? 'bg-zinc-950' : 'bg-black'}`}>
      <div className={`max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
        <motion.div
          initial={{ opacity: 0, x: reverse ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`space-y-6 ${reverse ? 'md:order-2' : ''}`}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight">
            {title}
          </h2>
          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed">
            {description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: reverse ? -50 : 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className={`${reverse ? 'md:order-1' : ''}`}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/50">
            <img
              src={image}
              alt={imageAlt}
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const BookPage = () => {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white/20 overflow-x-hidden">
      <Navbar />

      <main>

        {/* Hero Section - Apple Style */}
        <motion.section
          ref={heroRef}
          style={{ opacity: heroOpacity, scale: heroScale }}
          className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-32 pb-20"
        >
          <div className="max-w-5xl mx-auto text-center space-y-8">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-zinc-500 text-lg md:text-xl tracking-wide"
            >
              A book by Deon Menezes
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tight leading-[0.95]"
            >
              Business in the
              <br />
              <span className="bg-gradient-to-r from-white via-zinc-300 to-zinc-500 bg-clip-text text-transparent">
                Age of AI
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl mx-auto"
            >
              The complete guide to building and scaling a business in 2026.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="pt-8"
            >
              <a
                href="https://www.amazon.in/gp/product/8199573775"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-zinc-200 transition-all duration-300 hover:scale-105"
              >
                <span>Buy the Book</span>
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <p className="text-zinc-600 text-sm mt-4">Available on Amazon India</p>
            </motion.div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <div className="w-6 h-10 border-2 border-zinc-700 rounded-full flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1.5 h-1.5 bg-zinc-500 rounded-full"
              />
            </div>
          </motion.div>
        </motion.section>

        {/* Book Visual - Full Width */}
        <section className="relative py-20 md:py-32 bg-gradient-to-b from-black via-zinc-950 to-black">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              {/* Book Image Container */}
              <div className="relative flex justify-center items-end gap-8 md:gap-16">
                {/* White Book */}
                <motion.div
                  initial={{ opacity: 0, x: -40, rotateY: 15 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 5 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative w-48 md:w-72 lg:w-80"
                >
                  <img
                    src="/whitebook.png"
                    alt="The Raw Draft"
                    className="w-full h-auto rounded-lg shadow-2xl shadow-amber-900/20"
                  />
                  <p className="text-center text-zinc-600 text-sm mt-6 tracking-wide">The Raw Draft</p>
                </motion.div>

                {/* Black Book - Featured */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="relative w-56 md:w-80 lg:w-96 -mb-4 z-10"
                >
                  <img
                    src="/blackbook.png"
                    alt="The Final Edition"
                    className="w-full h-auto rounded-lg shadow-2xl shadow-blue-900/30"
                  />
                  <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-blue-500/20 blur-3xl rounded-full" />
                  <p className="text-center text-white text-sm mt-8 tracking-wide font-medium">The Final Edition</p>
                </motion.div>

                {/* White Book Right */}
                <motion.div
                  initial={{ opacity: 0, x: 40, rotateY: -15 }}
                  whileInView={{ opacity: 1, x: 0, rotateY: -5 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative w-48 md:w-72 lg:w-80"
                >
                  <img
                    src="/whitebook.png"
                    alt="The Raw Draft"
                    className="w-full h-auto rounded-lg shadow-2xl shadow-amber-900/20"
                  />
                  <p className="text-center text-zinc-600 text-sm mt-6 tracking-wide">The Raw Draft</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Text Reveal Section */}
        <section className="py-40 md:py-64 px-6 bg-black">
          <div className="max-w-4xl mx-auto space-y-40 md:space-y-56 text-center">
            <TextReveal>
              The rules have changed.
            </TextReveal>
            <TextReveal>
              Old strategies don't work anymore.
            </TextReveal>
            <TextReveal>
              This book is your new playbook.
            </TextReveal>
          </div>
        </section>

        {/* What's Inside - Visual Grid */}
        <section className="py-24 md:py-40 px-6 bg-zinc-950">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-semibold text-white mb-6">What's inside</h2>
              <p className="text-xl text-zinc-500 max-w-2xl mx-auto">
                300+ pages of practical frameworks, real case studies, and actionable strategies.
              </p>
            </motion.div>

            {/* Visual Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

              {/* Large Feature Card */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="lg:col-span-2 lg:row-span-2 relative rounded-3xl overflow-hidden bg-gradient-to-br from-zinc-900 to-zinc-950 p-10 md:p-14 flex flex-col justify-end min-h-[400px] md:min-h-[500px] group"
              >
                <div className="absolute top-8 right-8 w-40 h-40 md:w-64 md:h-64 bg-gradient-to-br from-amber-500/10 to-orange-500/5 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700" />
                <span className="text-zinc-600 text-sm tracking-widest uppercase mb-4">Chapter 1-3</span>
                <h3 className="text-3xl md:text-4xl font-semibold text-white mb-4">Foundation</h3>
                <p className="text-lg text-zinc-400 max-w-md">
                  Understanding the new landscape. Why traditional business models are failing and what's replacing them.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative rounded-3xl overflow-hidden bg-zinc-900 p-8 min-h-[240px] flex flex-col justify-end group"
              >
                <div className="absolute top-4 right-4 w-20 h-20 bg-blue-500/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />
                <span className="text-zinc-600 text-sm tracking-widest uppercase mb-3">Chapter 4-6</span>
                <h3 className="text-2xl font-semibold text-white mb-2">Systems</h3>
                <p className="text-zinc-500 text-sm">Build operations that scale without you.</p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="relative rounded-3xl overflow-hidden bg-zinc-900 p-8 min-h-[240px] flex flex-col justify-end group"
              >
                <div className="absolute top-4 right-4 w-20 h-20 bg-purple-500/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />
                <span className="text-zinc-600 text-sm tracking-widest uppercase mb-3">Chapter 7-9</span>
                <h3 className="text-2xl font-semibold text-white mb-2">Growth</h3>
                <p className="text-zinc-500 text-sm">Strategies that compound over time.</p>
              </motion.div>

              {/* Card 4 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative rounded-3xl overflow-hidden bg-zinc-900 p-8 min-h-[240px] flex flex-col justify-end group"
              >
                <div className="absolute top-4 right-4 w-20 h-20 bg-green-500/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />
                <span className="text-zinc-600 text-sm tracking-widest uppercase mb-3">Chapter 10-12</span>
                <h3 className="text-2xl font-semibold text-white mb-2">Execution</h3>
                <p className="text-zinc-500 text-sm">Turn strategy into daily action.</p>
              </motion.div>

              {/* Card 5 */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="relative rounded-3xl overflow-hidden bg-zinc-900 p-8 min-h-[240px] flex flex-col justify-end group"
              >
                <div className="absolute top-4 right-4 w-20 h-20 bg-rose-500/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-700" />
                <span className="text-zinc-600 text-sm tracking-widest uppercase mb-3">Bonus</span>
                <h3 className="text-2xl font-semibold text-white mb-2">50+ Templates</h3>
                <p className="text-zinc-500 text-sm">Ready-to-use frameworks and checklists.</p>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Author Section */}
        <section className="py-24 md:py-40 px-6 bg-black">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden">
                <img
                  src="/deonmenezes.png"
                  alt="Deon Menezes"
                  className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-zinc-800/50 rounded-full blur-3xl -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <p className="text-zinc-500 text-sm tracking-widest uppercase mb-4">About the Author</p>
                <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">Deon Menezes</h2>
              </div>

              <p className="text-xl text-zinc-400 leading-relaxed">
                "I made every mistake in the book so you don't have to. Seven years of building, failing, and finally succeeding—all distilled into one comprehensive guide."
              </p>

              <div className="flex gap-12 pt-4">
                <div>
                  <p className="text-4xl font-semibold text-white">7+</p>
                  <p className="text-zinc-600 text-sm">Years in Business</p>
                </div>
                <div>
                  <p className="text-4xl font-semibold text-white">Founder</p>
                  <p className="text-zinc-600 text-sm">Virelity Solutions</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section className="py-32 md:py-48 px-6 bg-gradient-to-b from-black to-zinc-950">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight">
                Ready to build
                <br />
                something great?
              </h2>

              <p className="text-xl text-zinc-500 max-w-xl mx-auto">
                Get your copy today and start building the business you've always envisioned.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                <a
                  href="https://www.amazon.in/gp/product/8199573775"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-3 bg-white text-black px-10 py-5 rounded-full text-lg font-medium hover:bg-zinc-200 transition-all duration-300 hover:scale-105"
                >
                  <span>Buy on Amazon</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>

                <div className="inline-flex items-center justify-center gap-3 border border-zinc-800 text-zinc-500 px-10 py-5 rounded-full text-lg">
                  <span>Flipkart</span>
                  <span className="text-sm bg-zinc-800 px-3 py-1 rounded-full">Coming Soon</span>
                </div>
              </div>

              <p className="text-zinc-700 text-sm pt-8">
                Free delivery across India
              </p>
            </motion.div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default BookPage;
