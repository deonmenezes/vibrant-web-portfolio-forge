import { useEffect } from 'react';
import { Helmet } from "react-helmet-async";
import { m as motion, useScroll, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { PageTransition } from "@/components/PageTransition";
import {
    Bug,
    ArrowRight,
    Target,
    GitBranch,
    Eye,
    CheckCircle2,
    AlertTriangle,
    Terminal,
    Lock,
    FileText,
    Award,
    Search,
    Rocket,
} from 'lucide-react';

const colors = {
    gold: "#F59E0B",
    goldMetallic: "#D4AF37",
    goldDark: "#B78628",
    electric: "#00FF87",
    coral: "#FF6B6B",
    violet: "#A855F7",
    cyan: "#00D4FF",
    lime: "#BFFF00",
};

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

const Bugbounty = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

    useEffect(() => {
        const lenis = (window as any).lenis;
        if (lenis && typeof lenis.scrollTo === 'function') {
            lenis.scrollTo(0, { immediate: true });
        } else {
            window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
        }
    }, []);

    const features = [
        { icon: Search, title: "Recon Agent", description: "Subfinder, httpx, katana, nuclei feed structured surface maps into the FSM.", color: colors.electric },
        { icon: Target, title: "Parallel Hunters", description: "Wave-based hunters dedupe surfaces and chase IDOR, auth, business logic in parallel.", color: colors.coral },
        { icon: Eye, title: "3-Round Verifier", description: "Adversarial re-runs replay PoCs with fresh HTTP requests to kill hallucinated findings.", color: colors.cyan },
        { icon: Award, title: "5-Axis Grader", description: "Independent grader scores severity and issues SUBMIT / HOLD / SKIP — no inflation.", color: colors.violet },
        { icon: Lock, title: "Scope Guard Hooks", description: "PreToolUse hooks block out-of-scope Bash before a single packet leaves your box.", color: colors.lime },
        { icon: FileText, title: "Submission-Ready Reports", description: "Markdown reports per platform — HackerOne, Bugcrowd, Intigriti — under 600 words.", color: colors.gold },
    ];

    const phases = [
        { num: "01", title: "Recon", desc: "Subdomain enum, live host probing, JS analysis", color: colors.electric },
        { num: "02", title: "Auth", desc: "Account provisioning, token capture, A/B setup", color: colors.coral },
        { num: "03", title: "Hunt", desc: "Parallel waves on assigned surfaces", color: colors.cyan },
        { num: "04", title: "Chain", desc: "Compose primitives into impactful exploits", color: colors.violet },
        { num: "05", title: "Verify", desc: "Three skeptical rounds replay every PoC", color: colors.lime },
        { num: "06", title: "Grade", desc: "5-axis rubric → SUBMIT / HOLD / SKIP", color: colors.gold },
        { num: "07", title: "Report", desc: "Platform-shaped markdown, ready to paste", color: colors.coral },
    ];

    const stats = [
        { value: "7", label: "Phase FSM" },
        { value: "10+", label: "Specialized Agents" },
        { value: "3×", label: "Verification Rounds" },
        { value: "5", label: "Axis Rubric" },
    ];

    const plans = [
        {
            name: "Solo",
            price: "Free",
            blurb: "MIT-licensed, run it on your own targets",
            features: ["Full 7-phase FSM", "Local MCP server", "Unlimited targets", "Community support"],
            cta: "Clone the Repo",
            href: "https://github.com/deonmenezes/bountyhunter",
            color: colors.electric,
            highlighted: false,
        },
        {
            name: "Pro",
            price: "$49",
            suffix: "/month",
            blurb: "For working hunters who ship reports daily",
            features: ["Cloud session sync", "Premium hunter prompts", "Priority verifier queue", "Slack/Discord alerts", "Email support"],
            cta: "Start 14-Day Trial",
            href: "/contact",
            color: colors.gold,
            highlighted: true,
        },
        {
            name: "Team",
            price: "Custom",
            blurb: "For internal red teams and AppSec orgs",
            features: ["SSO + audit logs", "Private LLM routing", "On-prem MCP server", "Custom rubrics", "Dedicated slack channel"],
            cta: "Talk to Us",
            href: "/contact",
            color: colors.violet,
            highlighted: false,
        },
    ];

    const trustedTools = ["nuclei", "subfinder", "httpx", "katana", "Claude Code", "MCP", "Foundry"];

    return (
        <PageTransition>
            <Helmet>
                <title>Bug Bounty Agent — Hunt bugs. Ship reports. On autopilot. | Virelity.com</title>
                <meta
                    name="description"
                    content="Bountyhunter is a 7-phase FSM that orchestrates AI agents — recon, parallel hunting, three-round verification, grading, and submission-ready reports. Neo-brutalist landing page, MIT-licensed framework."
                />
                <link rel="canonical" href="https://virelity.com/bugbounty" />
            </Helmet>

            <div className="min-h-screen flex flex-col bg-black">
                <motion.div
                    className="fixed top-0 left-0 right-0 h-2 bg-vision-gold z-50 origin-left"
                    style={{ scaleX }}
                />

                <Navbar />

                {/* HERO */}
                <section className="pt-32 pb-20 relative overflow-hidden">
                    <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.06]"
                        style={{
                            backgroundImage:
                                "linear-gradient(#F59E0B 1px, transparent 1px), linear-gradient(90deg, #F59E0B 1px, transparent 1px)",
                            backgroundSize: "40px 40px",
                        }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black via-black/95 to-black z-[1]" />

                    <motion.div
                        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                        transition={{ duration: 6, repeat: Infinity }}
                        className="absolute top-24 right-16 w-32 h-32 border-4 border-vision-gold hidden lg:block z-[2]"
                    />
                    <motion.div
                        animate={{ y: [0, 20, 0], rotate: [0, -10, 0] }}
                        transition={{ duration: 8, repeat: Infinity }}
                        className="absolute bottom-24 left-16 w-24 h-24 hidden lg:block z-[2]"
                        style={{ backgroundColor: colors.electric }}
                    />

                    <div className="container relative z-10">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            {/* LEFT — copy */}
                            <div>
                                <motion.div
                                    initial={{ opacity: 0, y: 30, rotate: -3 }}
                                    animate={{ opacity: 1, y: 0, rotate: -2 }}
                                    className="inline-block mb-8"
                                >
                                    <div className="relative group">
                                        <div className="absolute inset-0 translate-x-2 translate-y-2 bg-vision-gold" />
                                        <div className="relative bg-black border-4 border-vision-gold px-5 py-2 flex items-center gap-2">
                                            <Bug className="w-4 h-4 text-vision-gold" />
                                            <span className="font-black uppercase tracking-widest text-vision-gold text-xs">Bug Bounty Agent · v1</span>
                                        </div>
                                    </div>
                                </motion.div>

                                <motion.h1
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.1 }}
                                    className="text-5xl md:text-6xl lg:text-7xl font-black uppercase leading-[0.95] mb-6 tracking-tight"
                                >
                                    <span className="text-white block">Hunt bugs.</span>
                                    <span className="text-white block">Ship reports.</span>
                                    <span className="text-vision-gold block">On autopilot.</span>
                                </motion.h1>

                                <motion.p
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.3 }}
                                    className="text-lg md:text-xl text-white/70 font-medium max-w-xl mb-10"
                                >
                                    A 7-phase finite-state machine that orchestrates specialized AI agents — recon,
                                    parallel hunting, three-round verification, grading, and submission-ready reports.
                                    One slash command. Zero hallucinations.
                                </motion.p>

                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 }}
                                    className="flex flex-col sm:flex-row gap-4"
                                >
                                    <div className="relative group inline-block">
                                        <div className="absolute inset-0 translate-x-2 translate-y-2 bg-black border-4 border-vision-gold transition-all group-hover:translate-x-3 group-hover:translate-y-3" />
                                        <a
                                            href="https://github.com/deonmenezes/bountyhunter"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="relative bg-vision-gold text-black font-black uppercase tracking-wider px-8 py-4 text-base border-4 border-black inline-flex items-center gap-2"
                                        >
                                            Get the Agent
                                            <ArrowRight className="w-5 h-5" />
                                        </a>
                                    </div>
                                    <div className="relative group inline-block">
                                        <div className="absolute inset-0 translate-x-2 translate-y-2 bg-vision-gold transition-all group-hover:translate-x-3 group-hover:translate-y-3" />
                                        <Link
                                            to="/contact"
                                            className="relative bg-black text-white font-black uppercase tracking-wider px-8 py-4 text-base border-4 border-vision-gold inline-flex items-center gap-2"
                                        >
                                            Book a Demo
                                        </Link>
                                    </div>
                                </motion.div>

                                {/* trust badges */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.7 }}
                                    className="mt-10 flex flex-wrap items-center gap-3"
                                >
                                    <span className="text-xs uppercase tracking-widest text-white/40 font-bold">Powered by</span>
                                    {trustedTools.map((t) => (
                                        <span
                                            key={t}
                                            className="px-3 py-1 bg-black border-2 border-vision-gold/50 text-vision-gold text-xs font-mono"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </motion.div>
                            </div>

                            {/* RIGHT — dashboard mock */}
                            <motion.div
                                initial={{ opacity: 0, x: 50, rotate: 2 }}
                                animate={{ opacity: 1, x: 0, rotate: 1 }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                className="relative"
                            >
                                <div className="absolute inset-0 translate-x-3 translate-y-3 bg-vision-gold" />
                                <div className="relative bg-[#0A0805] border-4 border-vision-gold p-5">
                                    {/* mac dots */}
                                    <div className="flex items-center gap-2 mb-4 pb-3 border-b-2 border-vision-gold/30">
                                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: colors.coral }} />
                                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: colors.gold }} />
                                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: colors.electric }} />
                                        <div className="ml-3 flex items-center gap-2 text-vision-gold/70 text-xs font-mono">
                                            <Terminal className="w-3 h-3" />
                                            bountyagent · target.com
                                        </div>
                                    </div>

                                    {/* status row */}
                                    <div className="grid grid-cols-3 gap-3 mb-4">
                                        {[
                                            { label: "Phase", value: "5/7", color: colors.electric },
                                            { label: "Findings", value: "12", color: colors.gold },
                                            { label: "Verified", value: "8", color: colors.coral },
                                        ].map((s) => (
                                            <div key={s.label} className="border-2 border-vision-gold/40 bg-black p-3">
                                                <div className="text-[10px] uppercase tracking-widest text-white/50 font-bold">{s.label}</div>
                                                <div className="text-2xl font-black mt-1" style={{ color: s.color }}>{s.value}</div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* findings list */}
                                    <div className="space-y-2 mb-4">
                                        <div className="text-[10px] uppercase tracking-widest text-vision-gold font-black mb-2">Recent Findings</div>
                                        {[
                                            { sev: "CRITICAL", color: colors.coral,  title: "IDOR /api/v2/invoices/{id}", path: "auth-bypass · 9.1" },
                                            { sev: "HIGH",     color: colors.gold,   title: "Stored XSS profile.bio",      path: "priv-esc · 7.8" },
                                            { sev: "MEDIUM",   color: colors.cyan,   title: "SSRF /webhooks/test",         path: "ssrf-internal · 6.5" },
                                            { sev: "LOW",      color: colors.violet, title: "Open redirect /go",            path: "chained · 4.2" },
                                        ].map((f) => (
                                            <div key={f.title} className="flex items-center gap-3 bg-black border-2 border-vision-gold/20 px-3 py-2 hover:border-vision-gold transition-colors">
                                                <span
                                                    className="text-[9px] font-black tracking-widest border-2 px-2 py-0.5"
                                                    style={{ color: f.color, borderColor: f.color }}
                                                >
                                                    {f.sev}
                                                </span>
                                                <span className="text-white text-xs font-mono flex-1 truncate">{f.title}</span>
                                                <span className="text-white/40 text-[10px] font-mono">{f.path}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* progress bar */}
                                    <div>
                                        <div className="flex justify-between text-[10px] uppercase tracking-widest font-bold mb-1">
                                            <span className="text-white/50">Verification</span>
                                            <span className="text-vision-gold">round 2 of 3</span>
                                        </div>
                                        <div className="h-2 bg-black border-2 border-vision-gold/40 overflow-hidden">
                                            <motion.div
                                                className="h-full bg-vision-gold"
                                                initial={{ width: "0%" }}
                                                animate={{ width: "66%" }}
                                                transition={{ delay: 1, duration: 1.5 }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* GOLD MARQUEE */}
                <section className="py-4 bg-vision-gold border-y-4 border-black">
                    <Marquee speed={28}>
                        <span className="inline-flex items-center gap-8 px-8 font-black text-2xl md:text-3xl text-black uppercase">
                            <span>Recon</span>
                            <span className="w-3 h-3 bg-black rotate-45" />
                            <span>Hunt</span>
                            <span className="w-3 h-3 bg-black rotate-45" />
                            <span>Verify</span>
                            <span className="w-3 h-3 bg-black rotate-45" />
                            <span>Grade</span>
                            <span className="w-3 h-3 bg-black rotate-45" />
                            <span>Report</span>
                            <span className="w-3 h-3 bg-black rotate-45" />
                            <span>Cash Out</span>
                            <span className="w-3 h-3 bg-black rotate-45" />
                        </span>
                    </Marquee>
                </section>

                {/* STATS STRIP */}
                <section className="py-12 bg-black border-b-4 border-vision-gold">
                    <div className="container">
                        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                            {stats.map((s, i) => (
                                <motion.div
                                    key={s.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="relative"
                                >
                                    <div className="absolute inset-0 translate-x-2 translate-y-2 bg-vision-gold" />
                                    <div className="relative bg-black border-4 border-white px-6 py-6 text-center">
                                        <div className="text-4xl md:text-5xl font-black text-vision-gold">{s.value}</div>
                                        <div className="text-[11px] uppercase tracking-widest text-white/70 font-bold mt-1">{s.label}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FEATURES */}
                <section className="py-20 bg-white border-b-4 border-black">
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <div className="inline-block mb-6">
                                <div className="relative">
                                    <div className="absolute inset-0 translate-x-2 translate-y-2 bg-black" />
                                    <div className="relative bg-vision-gold border-4 border-black px-6 py-3">
                                        <span className="font-black uppercase tracking-widest text-black">Platform</span>
                                    </div>
                                </div>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black text-black uppercase mb-4 leading-tight">
                                All-in-one bug bounty <span className="text-vision-gold">orchestration</span>
                            </h2>
                            <p className="text-lg text-black/60 max-w-2xl mx-auto font-medium">
                                Specialized agents, narrow tool whitelists, structured JSON state.
                                No long-running monolithic prompt — no drift, no invented findings.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                const rotations = [-2, 1.5, -1, 2, -1.5, 1];
                                const rotation = rotations[index % rotations.length];
                                return (
                                    <motion.div
                                        key={feature.title}
                                        initial={{ opacity: 0, y: 30, rotate: rotation }}
                                        whileInView={{ opacity: 1, y: 0, rotate: rotation }}
                                        whileHover={{ rotate: 0, scale: 1.03, y: -5 }}
                                        transition={{ duration: 0.5, delay: index * 0.08 }}
                                        viewport={{ once: true }}
                                        className="relative"
                                    >
                                        <div className="absolute inset-0 translate-x-3 translate-y-3" style={{ backgroundColor: feature.color }} />
                                        <div className="relative bg-black border-4 border-black p-6 h-full">
                                            <div
                                                className="w-12 h-12 border-4 border-white flex items-center justify-center mb-4"
                                                style={{ backgroundColor: feature.color }}
                                            >
                                                <Icon className="w-6 h-6 text-black" />
                                            </div>
                                            <h3 className="text-xl font-black text-white uppercase mb-2 tracking-tight">{feature.title}</h3>
                                            <p className="text-white/70 text-sm leading-relaxed">{feature.description}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </section>

                {/* HOW IT WORKS — 7 PHASES */}
                <section className="py-20 bg-black border-b-4 border-vision-gold relative overflow-hidden">
                    <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.04]"
                        style={{
                            backgroundImage:
                                "linear-gradient(#F59E0B 1px, transparent 1px), linear-gradient(90deg, #F59E0B 1px, transparent 1px)",
                            backgroundSize: "32px 32px",
                        }}
                    />
                    <div className="container relative z-10">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <div className="inline-block mb-6">
                                <div className="relative">
                                    <div className="absolute inset-0 translate-x-2 translate-y-2 bg-vision-gold" />
                                    <div className="relative bg-black border-4 border-vision-gold px-6 py-3">
                                        <span className="font-black uppercase tracking-widest text-vision-gold">How it works</span>
                                    </div>
                                </div>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-4 leading-tight">
                                One command. <span className="text-vision-gold">Seven phases.</span>
                            </h2>
                            <p className="text-lg text-white/60 max-w-2xl mx-auto font-medium">
                                <span className="font-mono bg-vision-gold/10 border border-vision-gold/40 px-2 py-0.5 text-vision-gold">/bountyagent target.com</span>{" "}
                                kicks off the FSM. Every phase writes structured JSON you can inspect and resume.
                            </p>
                        </motion.div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                            {phases.map((p, i) => (
                                <motion.div
                                    key={p.num}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.07 }}
                                    className="relative"
                                    whileHover={{ y: -4 }}
                                >
                                    <div className="absolute inset-0 translate-x-2 translate-y-2 bg-vision-gold" />
                                    <div className="relative bg-black border-4 border-vision-gold p-5 h-full">
                                        <div className="flex items-baseline gap-3 mb-3">
                                            <span className="text-3xl font-black" style={{ color: p.color }}>{p.num}</span>
                                            <span className="text-lg font-black text-white uppercase tracking-tight">{p.title}</span>
                                        </div>
                                        <p className="text-white/60 text-sm">{p.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* terminal preview */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mt-12 max-w-3xl mx-auto"
                        >
                            <div className="relative">
                                <div className="absolute inset-0 translate-x-3 translate-y-3 bg-vision-gold" />
                                <div className="relative bg-black border-4 border-vision-gold p-6 font-mono text-sm">
                                    <div className="flex items-center gap-2 mb-4 text-white/50 text-xs">
                                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: colors.coral }} />
                                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: colors.gold }} />
                                        <span className="w-3 h-3 rounded-full" style={{ backgroundColor: colors.electric }} />
                                        <span className="ml-3">~/bounty-agent-sessions/target.com</span>
                                    </div>
                                    <div className="space-y-1 text-white/80">
                                        <div><span className="text-vision-gold">$</span> /bountyagent target.com</div>
                                        <div className="text-white/40">→ phase 1 · recon · spawning agents...</div>
                                        <div className="text-white/40">→ phase 2 · auth · provisioning a, b accounts</div>
                                        <div className="text-white/40">→ phase 3 · hunt · 4 waves dispatched</div>
                                        <div style={{ color: colors.electric }}>✓ finding: IDOR /api/v2/invoices/&#123;id&#125; · CVSS 6.5</div>
                                        <div style={{ color: colors.electric }}>✓ finding: stored XSS profile.bio · CVSS 7.8</div>
                                        <div className="text-white/40">→ phase 5 · verifying (round 2/3)</div>
                                        <div style={{ color: colors.gold }}>★ grade: SUBMIT · 8 verified · report.md ready</div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* SAFETY RAILS */}
                <section className="py-20 bg-vision-gold border-b-4 border-black">
                    <div className="container">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                            >
                                <div className="inline-block mb-6">
                                    <div className="relative">
                                        <div className="absolute inset-0 translate-x-2 translate-y-2 bg-black" />
                                        <div className="relative bg-white border-4 border-black px-5 py-2">
                                            <span className="font-black uppercase tracking-widest text-black text-xs">Safety Rails</span>
                                        </div>
                                    </div>
                                </div>
                                <h2 className="text-4xl md:text-5xl font-black text-black uppercase mb-6 leading-tight">
                                    In-scope only. <br />Always.
                                </h2>
                                <p className="text-black/80 text-lg font-medium mb-8 max-w-lg">
                                    PreToolUse hooks intercept every Bash call and check the program's scope file before it runs.
                                    One out-of-scope packet = one ban. We do not let that happen.
                                </p>

                                <div className="space-y-3">
                                    {[
                                        "Scope-guard hook on every Bash invocation",
                                        "Per-wave assignment files dedupe surfaces",
                                        "Three skeptical verification rounds, fresh HTTP each time",
                                        "5-axis grader rejects inflated severity",
                                        "Always-rejected list filters informational noise",
                                    ].map((point) => (
                                        <div key={point} className="flex items-start gap-3">
                                            <div className="w-5 h-5 bg-black border-2 border-black flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <CheckCircle2 className="w-3 h-3 text-vision-gold" />
                                            </div>
                                            <span className="text-black font-bold">{point}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="relative"
                            >
                                <div className="absolute inset-0 translate-x-3 translate-y-3 bg-black" />
                                <div className="relative bg-white border-4 border-black p-6">
                                    <div className="flex items-center gap-2 mb-4">
                                        <AlertTriangle className="w-5 h-5 text-black" />
                                        <span className="font-black uppercase tracking-widest text-xs">Always-Rejected List</span>
                                    </div>
                                    <div className="space-y-2 font-mono text-sm">
                                        {[
                                            "Missing headers (CSP, HSTS)",
                                            "GraphQL introspection alone",
                                            "Self-XSS",
                                            "Open redirect alone",
                                            "SSRF DNS-only",
                                            "Logout CSRF",
                                            "Missing cookie flags alone",
                                            "Banner / version disclosure",
                                        ].map((item) => (
                                            <div key={item} className="flex items-center gap-3 border-b-2 border-black/10 pb-2">
                                                <span className="font-black" style={{ color: colors.coral }}>✗</span>
                                                <span className="text-black/80">{item}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* PRICING */}
                <section className="py-20 bg-black border-b-4 border-vision-gold">
                    <div className="container">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-center mb-16"
                        >
                            <div className="inline-block mb-6">
                                <div className="relative">
                                    <div className="absolute inset-0 translate-x-2 translate-y-2 bg-vision-gold" />
                                    <div className="relative bg-black border-4 border-vision-gold px-6 py-3">
                                        <span className="font-black uppercase tracking-widest text-vision-gold">Pricing</span>
                                    </div>
                                </div>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-black text-white uppercase mb-4 leading-tight">
                                Free for solo. <span className="text-vision-gold">Scales with you.</span>
                            </h2>
                        </motion.div>

                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            {plans.map((plan, i) => (
                                <motion.div
                                    key={plan.name}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    whileHover={{ y: -8, rotate: 0 }}
                                    className={`relative ${plan.highlighted ? "lg:-mt-4" : ""}`}
                                    style={{ rotate: plan.highlighted ? "0deg" : i === 0 ? "-1deg" : "1deg" }}
                                >
                                    <div
                                        className="absolute inset-0 translate-x-3 translate-y-3"
                                        style={{ backgroundColor: plan.highlighted ? colors.gold : plan.color }}
                                    />
                                    <div
                                        className={`relative h-full p-8 border-4 ${
                                            plan.highlighted
                                                ? "bg-vision-gold border-black"
                                                : "bg-black border-vision-gold"
                                        }`}
                                    >
                                        {plan.highlighted && (
                                            <div className="absolute -top-3 right-4">
                                                <div className="relative">
                                                    <div className="absolute inset-0 translate-x-1 translate-y-1 bg-black" />
                                                    <div className="relative bg-white border-2 border-black px-3 py-1">
                                                        <span className="text-[10px] font-black uppercase tracking-widest text-black">Most Popular</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        <h3 className={`text-2xl font-black uppercase mb-1 ${plan.highlighted ? "text-black" : "text-white"}`}>
                                            {plan.name}
                                        </h3>
                                        <p className={`text-sm mb-6 ${plan.highlighted ? "text-black/70" : "text-white/60"}`}>{plan.blurb}</p>

                                        <div className="mb-6 flex items-baseline gap-1">
                                            <span className={`text-5xl font-black ${plan.highlighted ? "text-black" : "text-vision-gold"}`}>
                                                {plan.price}
                                            </span>
                                            {plan.suffix && (
                                                <span className={`text-base font-bold ${plan.highlighted ? "text-black/70" : "text-white/50"}`}>
                                                    {plan.suffix}
                                                </span>
                                            )}
                                        </div>

                                        <ul className="space-y-3 mb-8">
                                            {plan.features.map((f) => (
                                                <li key={f} className="flex items-start gap-2 text-sm font-medium">
                                                    <CheckCircle2
                                                        className={`w-4 h-4 mt-0.5 flex-shrink-0 ${plan.highlighted ? "text-black" : "text-vision-gold"}`}
                                                    />
                                                    <span className={plan.highlighted ? "text-black" : "text-white/80"}>{f}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {plan.href.startsWith("http") ? (
                                            <a
                                                href={plan.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`block text-center font-black uppercase tracking-wider py-3 border-4 transition-all ${
                                                    plan.highlighted
                                                        ? "bg-black text-vision-gold border-black hover:bg-vision-gold hover:text-black hover:border-black"
                                                        : "bg-vision-gold text-black border-vision-gold hover:bg-black hover:text-vision-gold"
                                                }`}
                                            >
                                                {plan.cta}
                                            </a>
                                        ) : (
                                            <Link
                                                to={plan.href}
                                                className={`block text-center font-black uppercase tracking-wider py-3 border-4 transition-all ${
                                                    plan.highlighted
                                                        ? "bg-black text-vision-gold border-black hover:bg-vision-gold hover:text-black hover:border-black"
                                                        : "bg-vision-gold text-black border-vision-gold hover:bg-black hover:text-vision-gold"
                                                }`}
                                            >
                                                {plan.cta}
                                            </Link>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* FINAL CTA */}
                <section className="py-20 bg-vision-gold relative overflow-hidden">
                    <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                        className="absolute -top-20 -right-20 w-80 h-80 border-4 border-black hidden lg:block"
                    />
                    <motion.div
                        animate={{ rotate: [360, 0] }}
                        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                        className="absolute -bottom-20 -left-20 w-64 h-64 border-4 border-black hidden lg:block"
                    />
                    <div className="container relative z-10">
                        <div className="text-center max-w-3xl mx-auto">
                            <Rocket className="w-12 h-12 text-black mx-auto mb-6" />
                            <h2 className="text-4xl md:text-6xl font-black text-black uppercase mb-6 leading-tight">
                                Ready to ship a report tonight?
                            </h2>
                            <p className="text-black/80 text-lg font-bold mb-10 max-w-xl mx-auto">
                                Clone the repo, run install.sh, and fire <span className="font-mono bg-black/10 px-2 py-0.5">/bountyagent</span> at your next program.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <div className="relative group inline-block">
                                    <div className="absolute inset-0 translate-x-2 translate-y-2 bg-vision-gold border-4 border-black transition-all group-hover:translate-x-3 group-hover:translate-y-3" />
                                    <a
                                        href="https://github.com/deonmenezes/bountyhunter"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="relative bg-black text-vision-gold font-black uppercase tracking-wider px-8 py-4 text-base border-4 border-black inline-flex items-center gap-2"
                                    >
                                        <GitBranch className="w-5 h-5" />
                                        Get the Repo
                                    </a>
                                </div>
                                <div className="relative group inline-block">
                                    <div className="absolute inset-0 translate-x-2 translate-y-2 bg-black transition-all group-hover:translate-x-3 group-hover:translate-y-3" />
                                    <Link
                                        to="/contact"
                                        className="relative bg-white text-black font-black uppercase tracking-wider px-8 py-4 text-base border-4 border-black inline-flex items-center gap-2"
                                    >
                                        Talk to Us
                                        <ArrowRight className="w-5 h-5" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </PageTransition>
    );
};

export default Bugbounty;
