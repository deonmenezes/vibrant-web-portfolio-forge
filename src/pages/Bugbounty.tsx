import { Helmet } from "react-helmet-async";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import {
  Shield,
  Bug,
  Search,
  Lock,
  Cloud,
  Code2,
  Eye,
  Terminal,
  Zap,
  CheckCircle2,
  ArrowRight,
  ArrowUpRight,
  AlertTriangle,
  Target,
  GitBranch,
  Container,
  ScanLine,
  KeyRound,
  Github,
} from "lucide-react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { PageTransition } from "@/components/PageTransition";

const accent = {
  cyan: "#00D4FF",
  gold: "#D4AF37",
  electric: "#00FF87",
  violet: "#A855F7",
  coral: "#FF6B6B",
};

const HeroOrbs = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div
      className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full blur-3xl opacity-30"
      style={{ background: `radial-gradient(circle, ${accent.cyan} 0%, transparent 70%)` }}
    />
    <div
      className="absolute top-1/3 -right-32 w-[500px] h-[500px] rounded-full blur-3xl opacity-25"
      style={{ background: `radial-gradient(circle, ${accent.violet} 0%, transparent 70%)` }}
    />
    <div
      className="absolute bottom-0 left-1/3 w-[450px] h-[450px] rounded-full blur-3xl opacity-20"
      style={{ background: `radial-gradient(circle, ${accent.gold} 0%, transparent 70%)` }}
    />
    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:64px_64px]" />
  </div>
);

const TerminalPreview = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className="relative max-w-4xl mx-auto"
  >
    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/40 via-violet-500/40 to-yellow-500/40 blur-xl" />
    <div className="relative rounded-2xl bg-black/80 backdrop-blur border border-white/10 shadow-2xl overflow-hidden">
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/[0.02]">
        <span className="w-3 h-3 rounded-full bg-red-500/80" />
        <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
        <span className="w-3 h-3 rounded-full bg-green-500/80" />
        <span className="ml-3 text-xs font-mono text-white/50">virelity-scan ~ recon.sh</span>
      </div>
      <pre className="p-6 text-sm font-mono leading-relaxed text-white/90 overflow-x-auto">
{`$ virelity scan --target acme.com --scope full
`}
<span style={{ color: accent.cyan }}>{`[recon]   `}</span>{`enumerating subdomains... 47 found
`}
<span style={{ color: accent.cyan }}>{`[crawl]   `}</span>{`mapping endpoints... 2,318 routes
`}
<span style={{ color: accent.gold }}>{`[fuzz]    `}</span>{`probing /api/v2/users?id=…
`}
<span style={{ color: accent.coral }}>{`[finding] `}</span>
<span className="text-red-400">{`CRITICAL`}</span>{` IDOR — /api/v2/users/{id}/billing
`}
<span style={{ color: accent.coral }}>{`[finding] `}</span>
<span className="text-orange-400">{`HIGH    `}</span>{` reflected XSS — /search?q=<svg/onload>
`}
<span style={{ color: accent.coral }}>{`[finding] `}</span>
<span className="text-yellow-400">{`MEDIUM  `}</span>{` SSRF on /webhook/test
`}
<span style={{ color: accent.electric }}>{`[triage]  `}</span>{`auto-deduped 12 → 9 unique findings
`}
<span style={{ color: accent.electric }}>{`[triage]  `}</span>{`PoCs verified · CVSS scored · severity capped
`}
<span style={{ color: accent.gold }}>{`[reward]  `}</span>{`bounty payout queued — $4,750 across 3 researchers
`}<span className="text-white/40">{`✔ report ready in 11m 04s — virelity.com/r/0x9aF12B
`}</span>
      </pre>
    </div>
  </motion.div>
);

const StatCard = ({ value, label, accent: color }: { value: string; label: string; accent: string }) => (
  <div className="relative">
    <div className="absolute inset-0 rounded-xl opacity-20 blur-xl" style={{ background: color }} />
    <div className="relative rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur px-6 py-5">
      <div className="text-3xl md:text-4xl font-bold tracking-tight text-white">{value}</div>
      <div className="mt-1 text-xs uppercase tracking-[0.18em] text-white/50">{label}</div>
      <div className="mt-3 h-px w-10" style={{ background: color }} />
    </div>
  </div>
);

const CapabilityCard = ({
  icon: Icon,
  title,
  description,
  tone,
  index,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  tone: string;
  index: number;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] p-6 hover:border-white/20 transition-colors"
    >
      <div
        className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl pointer-events-none"
        style={{ background: `radial-gradient(circle at 30% 0%, ${tone}33, transparent 70%)` }}
      />
      <div className="relative">
        <div
          className="inline-flex items-center justify-center w-11 h-11 rounded-xl border border-white/10"
          style={{ background: `${tone}1a`, color: tone }}
        >
          <Icon className="w-5 h-5" />
        </div>
        <h3 className="mt-5 text-lg font-semibold text-white">{title}</h3>
        <p className="mt-2 text-sm text-white/60 leading-relaxed">{description}</p>
        <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-white/70 group-hover:text-white transition-colors">
          Learn more
          <ArrowUpRight className="w-3.5 h-3.5" />
        </div>
      </div>
    </motion.div>
  );
};

const capabilities = [
  { icon: Search, title: "Recon & Attack Surface", description: "Continuous external discovery — subdomains, exposed services, leaked secrets across the public attack surface.", tone: accent.cyan },
  { icon: Bug, title: "Manual Pentesting", description: "OSCP/CRTP-grade researchers chain vulnerabilities humans find but scanners miss — IDOR, SSRF, auth bypass, race conditions.", tone: accent.coral },
  { icon: Code2, title: "SAST & Code Review", description: "Static analysis tuned for your stack with manual review of auth, crypto, and trust boundaries.", tone: accent.violet },
  { icon: Cloud, title: "Cloud & IaC Audit", description: "AWS / GCP / Azure misconfig hunting — IAM blast radius, public buckets, exposed metadata, drifted Terraform.", tone: accent.electric },
  { icon: Container, title: "Container & K8s", description: "Image CVEs, runtime escapes, pod-to-cluster privilege paths, and admission policy review.", tone: accent.gold },
  { icon: KeyRound, title: "Secrets Hunting", description: "Repo, build log, container layer, and public paste sweeps for tokens, keys, and credentials.", tone: accent.cyan },
  { icon: Eye, title: "Continuous Monitoring", description: "Real-time alerts on new exposure — fresh subdomains, expired certs, leaked tokens, regression of fixed bugs.", tone: accent.violet },
  { icon: Shield, title: "Triage & Disclosure", description: "Dedupe, severity-cap, PoC validation, and coordinated disclosure handling so your team only sees signal.", tone: accent.coral },
];

const workflow = [
  {
    step: "01",
    icon: Target,
    title: "Scope & onboard",
    body: "Define targets, exclusions, and reward bands. Connect GitHub, GitLab, AWS, GCP, Slack, Jira in one session.",
    tone: accent.cyan,
  },
  {
    step: "02",
    icon: ScanLine,
    title: "Hunt continuously",
    body: "Vetted researchers + automated recon work in parallel. Findings are deduped, validated, and severity-capped before they reach you.",
    tone: accent.gold,
  },
  {
    step: "03",
    icon: CheckCircle2,
    title: "Fix & reward",
    body: "Patch suggestions ship with each report. Rewards are paid on validation. Regressions auto-reopen the original ticket.",
    tone: accent.electric,
  },
];

const integrations = [
  "GitHub", "GitLab", "Bitbucket", "Jira", "Linear", "Slack", "Teams",
  "AWS", "GCP", "Azure", "Vercel", "Cloudflare", "Datadog", "Sentry",
  "PagerDuty", "Okta", "1Password", "HackerOne",
];

const Bugbounty = () => {
  return (
    <PageTransition>
      <Helmet>
        <title>Bug Bounty & Offensive Security | Virelity.com</title>
        <meta
          name="description"
          content="Run a continuous bug bounty and offensive-security program with Virelity. Recon, manual pentesting, cloud audits, triage, and rewards in one platform."
        />
        <link rel="canonical" href="https://virelity.com/bugbounty" />
      </Helmet>

      <Navbar />

      <main className="bg-[#070914] text-white antialiased">
        {/* HERO */}
        <section className="relative pt-32 pb-24 md:pt-40 md:pb-32">
          <HeroOrbs />
          <div className="container relative mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-medium text-white/70"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#00FF87] animate-pulse" />
              Researchers online · auto-triage active
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-6 text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight max-w-4xl"
            >
              Find every bug.{" "}
              <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-yellow-200 bg-clip-text text-transparent">
                Reward what matters.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-6 max-w-2xl text-lg md:text-xl text-white/70 leading-relaxed"
            >
              A continuous bug-bounty and offensive-security program in one place.
              Vetted researchers, automated recon, deduped findings — and only the signal
              reaches your engineers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.18 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90 transition-colors"
              >
                Start for free
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/book"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white hover:bg-white/[0.08] transition-colors"
              >
                Book a demo
              </Link>
              <a
                href="https://github.com/deonmenezes/bountyhunter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-transparent px-5 py-3 text-sm font-semibold text-white/80 hover:text-white hover:border-white/30 transition-colors"
              >
                <Github className="w-4 h-4" />
                View on GitHub
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <span className="text-xs text-white/40">No credit card · 14-day pilot</span>
            </motion.div>

            {/* trust bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24 }}
              className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4"
            >
              <StatCard value="2,400+" label="Vetted researchers" accent={accent.cyan} />
              <StatCard value="$1.8M+" label="Bounties paid" accent={accent.gold} />
              <StatCard value="11 min" label="Median triage" accent={accent.electric} />
              <StatCard value="99.4%" label="Signal-to-noise" accent={accent.violet} />
            </motion.div>
          </div>
        </section>

        {/* TERMINAL */}
        <section className="relative py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-10 max-w-2xl">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-white/50">
                <Terminal className="w-3.5 h-3.5" /> live recon
              </div>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
                One pass — recon to reward.
              </h2>
              <p className="mt-3 text-white/60">
                Every scan auto-deduplicates findings, validates PoCs, and queues bounty
                payouts. Engineers see triaged, ranked vulnerabilities. Nothing else.
              </p>
            </div>
            <TerminalPreview />
            <div className="mt-8 flex justify-center">
              <a
                href="https://github.com/deonmenezes/bountyhunter"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white transition-colors"
              >
                <Github className="w-4 h-4" />
                bountyhunter — open-source recon CLI
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* CAPABILITIES */}
        <section className="relative py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="mb-12 max-w-2xl">
              <div className="text-xs uppercase tracking-[0.22em] text-white/50">Capabilities</div>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
                Coverage across code, cloud, and runtime.
              </h2>
              <p className="mt-3 text-white/60">
                Eight modules, one program. Subscribe to the entire spectrum or pick
                only the surface that matters this quarter.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {capabilities.map((c, i) => (
                <CapabilityCard key={c.title} {...c} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* WORKFLOW */}
        <section className="relative py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="mb-12 max-w-2xl">
              <div className="text-xs uppercase tracking-[0.22em] text-white/50">Workflow</div>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">
                From scope to reward in under a day.
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {workflow.map((w, i) => (
                <motion.div
                  key={w.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs tracking-widest text-white/40">{w.step}</span>
                    <div
                      className="w-10 h-10 rounded-lg border border-white/10 flex items-center justify-center"
                      style={{ background: `${w.tone}1a`, color: w.tone }}
                    >
                      <w.icon className="w-5 h-5" />
                    </div>
                  </div>
                  <h3 className="mt-5 text-xl font-semibold">{w.title}</h3>
                  <p className="mt-3 text-sm text-white/60 leading-relaxed">{w.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* INTEGRATIONS */}
        <section className="relative py-16 md:py-20 border-y border-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center text-xs uppercase tracking-[0.24em] text-white/40 mb-8">
              Plugs into the tools you already run
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              {integrations.map((name) => (
                <span
                  key={name}
                  className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-xs font-medium text-white/70 hover:bg-white/[0.06] transition-colors"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-24 md:py-32">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[400px] rounded-full blur-3xl opacity-30"
              style={{ background: `radial-gradient(ellipse, ${accent.cyan}55 0%, transparent 70%)` }}
            />
          </div>
          <div className="container relative mx-auto px-4">
            <div className="rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.05] to-white/[0.01] p-10 md:p-16 text-center max-w-4xl mx-auto">
              <div className="mx-auto inline-flex items-center justify-center w-12 h-12 rounded-xl border border-white/10" style={{ background: `${accent.gold}1a`, color: accent.gold }}>
                <AlertTriangle className="w-5 h-5" />
              </div>
              <h2 className="mt-6 text-3xl md:text-5xl font-bold tracking-tight">
                Spin up your program in a Slack message.
              </h2>
              <p className="mt-4 text-white/60 max-w-2xl mx-auto">
                Onboarding takes one call. Your first triaged finding lands within 48 hours
                or the pilot is free.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black hover:bg-white/90 transition-colors"
                >
                  Start for free
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="https://wa.me/918104796542?text=Hi%20Virelity!%20I%27d%20like%20to%20kick%20off%20a%20bug%20bounty%20program."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white hover:bg-white/[0.08] transition-colors"
                >
                  Talk to a researcher
                </a>
              </div>
              <div className="mt-8 flex items-center justify-center gap-6 text-xs text-white/40">
                <span className="inline-flex items-center gap-1.5"><Lock className="w-3.5 h-3.5" /> SOC 2 ready</span>
                <span className="inline-flex items-center gap-1.5"><Zap className="w-3.5 h-3.5" /> 48h to first finding</span>
                <span className="inline-flex items-center gap-1.5"><GitBranch className="w-3.5 h-3.5" /> Patches with PRs</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </PageTransition>
  );
};

export default Bugbounty;
