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

// ─── Mock product previews ──────────────────────────────────────────────────

const ReconMock = () => {
  const rows = [
    { host: "api.acme.com", status: "live", code: 200, tone: accent.electric },
    { host: "staging.acme.com", status: "live", code: 200, tone: accent.electric },
    { host: "internal-vpn.acme.com", status: "exposed", code: 401, tone: accent.coral },
    { host: "old-admin.acme.com", status: "leak", code: 200, tone: accent.gold },
    { host: "ci.acme.com", status: "redirect", code: 308, tone: accent.cyan },
    { host: "metrics.acme.com", status: "live", code: 200, tone: accent.electric },
    { host: "s3-archive.acme.com", status: "expired", code: 410, tone: "#9ca3af" },
  ];
  return (
    <div className="rounded-2xl border border-white/10 bg-black/60 backdrop-blur p-5 font-mono text-xs">
      <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-white/40 mb-4">
        <span>discovered surface</span>
        <span>47 hosts · 0:00:11</span>
      </div>
      <div className="space-y-1.5">
        {rows.map((r, i) => (
          <motion.div
            key={r.host}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.06 }}
            className="flex items-center justify-between rounded-md bg-white/[0.02] border border-white/5 px-3 py-2"
          >
            <div className="flex items-center gap-2 text-white/80 truncate">
              <span className="w-1 h-1 rounded-full" style={{ background: r.tone }} />
              <span className="truncate">{r.host}</span>
            </div>
            <div className="flex items-center gap-3 shrink-0 text-white/50">
              <span className="text-[10px] uppercase tracking-wider" style={{ color: r.tone }}>{r.status}</span>
              <span>{r.code}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const PentestMock = () => (
  <div className="rounded-2xl border border-white/10 bg-black/60 backdrop-blur p-5">
    <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-white/40 mb-4">
      <span>finding · vrl-2451</span>
      <span style={{ color: accent.coral }}>● critical · cvss 9.1</span>
    </div>
    <div className="text-white text-sm font-semibold">IDOR on /api/v2/users/{`{id}`}/billing</div>
    <div className="mt-1 text-xs text-white/50">CWE-639 · auth-broken-object-level · researcher @0xfaye</div>
    <div className="mt-4 rounded-lg bg-white/[0.03] border border-white/5 p-3 font-mono text-[11px] leading-relaxed text-white/80">
      <div><span className="text-white/40">$ curl</span> -H "Auth: $A" \</div>
      <div className="pl-4">api.acme.com/api/v2/users/<span style={{ color: accent.coral }}>9821</span>/billing</div>
      <div className="text-white/40 mt-1">{"// returns another tenant's invoices"}</div>
    </div>
    <div className="mt-4 flex items-center justify-between text-xs">
      <span className="text-white/50">patch suggested · PR ready</span>
      <span className="rounded-full bg-white/[0.05] border border-white/10 px-2.5 py-0.5 text-white/70">$1,200</span>
    </div>
  </div>
);

const CloudMock = () => {
  const node = "rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-xs text-white/80 font-mono";
  return (
    <div className="rounded-2xl border border-white/10 bg-black/60 backdrop-blur p-5">
      <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-white/40 mb-4">
        <span>aws · us-east-1</span>
        <span style={{ color: accent.gold }}>3 misconfigurations</span>
      </div>
      <div className="grid grid-cols-3 gap-3 items-center">
        <div className={node}>VPC<br /><span className="text-white/40">10.0.0.0/16</span></div>
        <div className="flex items-center justify-center text-white/30 text-xs">→</div>
        <div className={node + " border-l-2"} style={{ borderLeftColor: accent.coral }}>
          IGW <span className="text-[10px]" style={{ color: accent.coral }}>open 0.0.0.0/0:22</span>
        </div>
        <div className={node}>RDS<br /><span className="text-white/40">prod-db</span></div>
        <div className="flex items-center justify-center text-white/30 text-xs">↘</div>
        <div className={node + " border-l-2"} style={{ borderLeftColor: accent.gold }}>
          IAM <span className="text-[10px]" style={{ color: accent.gold }}>* on s3:*</span>
        </div>
        <div className={node}>S3<br /><span className="text-white/40">archive-2024</span></div>
        <div className="flex items-center justify-center text-white/30 text-xs">→</div>
        <div className={node + " border-l-2"} style={{ borderLeftColor: accent.coral }}>
          PUBLIC <span className="text-[10px]" style={{ color: accent.coral }}>list+get</span>
        </div>
      </div>
    </div>
  );
};

const TriageMock = () => {
  const rows = [
    { id: "VRL-2451", title: "IDOR on /billing", sev: "critical", tone: accent.coral, asg: "@deon" },
    { id: "VRL-2440", title: "Reflected XSS — /search", sev: "high", tone: "#fb923c", asg: "@team" },
    { id: "VRL-2438", title: "SSRF — /webhook/test", sev: "medium", tone: accent.gold, asg: "@cloud" },
    { id: "VRL-2433", title: "Stale npm token in CI log", sev: "medium", tone: accent.gold, asg: "@sec" },
    { id: "VRL-2430", title: "Missing rate-limit on /login", sev: "low", tone: accent.cyan, asg: "@team" },
  ];
  return (
    <div className="rounded-2xl border border-white/10 bg-black/60 backdrop-blur p-5">
      <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-white/40 mb-4">
        <span>triage queue</span>
        <span className="flex items-center gap-3">
          <span style={{ color: accent.coral }}>1c</span>
          <span style={{ color: "#fb923c" }}>1h</span>
          <span style={{ color: accent.gold }}>2m</span>
          <span style={{ color: accent.cyan }}>1l</span>
        </span>
      </div>
      <div className="space-y-1.5">
        {rows.map((r) => (
          <div key={r.id} className="flex items-center justify-between rounded-md bg-white/[0.02] border border-white/5 px-3 py-2">
            <div className="flex items-center gap-3 min-w-0">
              <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: r.tone }} />
              <span className="font-mono text-[11px] text-white/40">{r.id}</span>
              <span className="text-xs text-white/85 truncate">{r.title}</span>
            </div>
            <span className="text-[10px] text-white/40 shrink-0">{r.asg}</span>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-widest text-white/40">
        <span>auto-deduped 12 → 5</span>
        <span style={{ color: accent.electric }}>SLA on track</span>
      </div>
    </div>
  );
};

const modules = [
  {
    n: "01",
    name: "Recon",
    headline: "Map every door before someone else finds the unlocked one.",
    body: "Continuous external discovery — subdomains, cloud assets, leaked credentials, rogue dev environments — with provenance you can audit.",
    bullets: ["Subdomain & ASN sweep", "Cert transparency watch", "Public paste / repo scan", "Stale env detection"],
    icon: Search,
    tone: accent.cyan,
    Mock: ReconMock,
    flip: false,
  },
  {
    n: "02",
    name: "Pentest",
    headline: "Humans break what scanners can't.",
    body: "Vetted offensive engineers chain logic flaws scanners can't reach — IDOR, SSRF, auth bypass, race conditions, business-logic abuse.",
    bullets: ["OSCP / CRTP-grade researchers", "PoC + reproduction script", "CVSS-scored, severity-capped", "Fix recommendation per finding"],
    icon: Bug,
    tone: accent.coral,
    Mock: PentestMock,
    flip: true,
  },
  {
    n: "03",
    name: "Cloud",
    headline: "See your real blast radius.",
    body: "Misconfig hunting across AWS, GCP, Azure, plus IaC drift on Terraform and Pulumi. Find the one IAM star that exposes everything.",
    bullets: ["IAM blast-radius graph", "Public bucket / endpoint sweep", "K8s RBAC + admission audit", "Drift on every PR"],
    icon: Cloud,
    tone: accent.gold,
    Mock: CloudMock,
    flip: false,
  },
  {
    n: "04",
    name: "Triage",
    headline: "Engineers see signal — never noise.",
    body: "Every finding is deduped, validated, severity-capped, assigned, and tracked to fix. Regressions auto-reopen the original ticket.",
    bullets: ["Auto-dedupe + cluster", "PoC validation before dispatch", "Slack / Jira / Linear sync", "Reward on validated patch"],
    icon: Shield,
    tone: accent.electric,
    Mock: TriageMock,
    flip: true,
  },
];

const tiers = [
  {
    name: "Pilot",
    price: "Free",
    cadence: "14-day trial",
    blurb: "Run an automated sweep on a single target. No card, no contract.",
    features: ["1 production target", "Automated recon + SAST", "Email triage", "Findings export (PDF / CSV)"],
    cta: "Start pilot",
    href: "/contact",
    highlight: false,
  },
  {
    name: "Growth",
    price: "$1,999",
    cadence: "/ month",
    blurb: "Vetted researchers + automation working in parallel for fast-moving teams.",
    features: ["5 targets", "Researcher pool + auto recon", "Shared Slack triage channel", "Jira / Linear sync", "Quarterly red-team day"],
    cta: "Talk to sales",
    href: "/contact",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    cadence: "annual",
    blurb: "Dedicated team, SLA, compliance evidence — for security-critical orgs.",
    features: ["Unlimited targets", "Dedicated researcher squad", "On-call SLA + executive reporting", "SOC 2 / ISO / HIPAA bundles", "Bring-your-own researcher option"],
    cta: "Contact us",
    href: "/contact",
    highlight: false,
  },
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

        {/* MODULES */}
        <section className="relative py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="mb-16 max-w-2xl">
              <div className="text-xs uppercase tracking-[0.22em] text-white/50">Modules</div>
              <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                One platform.{" "}
                <span className="bg-gradient-to-r from-cyan-300 via-violet-300 to-yellow-200 bg-clip-text text-transparent">
                  Four lenses on your security.
                </span>
              </h2>
              <p className="mt-4 text-white/60 leading-relaxed">
                Subscribe to one module or stack the whole pipeline — every layer reports
                into the same triage queue.
              </p>
            </div>

            <div className="space-y-20 md:space-y-28">
              {modules.map((m, i) => {
                const Mock = m.Mock;
                return (
                  <motion.div
                    key={m.n}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${m.flip ? "lg:[&>*:first-child]:order-2" : ""}`}
                  >
                    {/* copy column */}
                    <div>
                      <div className="flex items-center gap-3 text-xs uppercase tracking-[0.22em] text-white/50">
                        <span className="font-mono">{m.n}</span>
                        <span className="h-px w-8 bg-white/15" />
                        <span style={{ color: m.tone }}>{m.name}</span>
                      </div>
                      <h3 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight max-w-xl">
                        {m.headline}
                      </h3>
                      <p className="mt-4 text-white/65 leading-relaxed max-w-lg">{m.body}</p>
                      <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-lg">
                        {m.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2 text-sm text-white/75">
                            <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: m.tone }} />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-white/80 hover:text-white transition-colors group cursor-default">
                        Learn more about {m.name}
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>

                    {/* mock column */}
                    <div className="relative">
                      <div
                        className="absolute -inset-2 rounded-3xl blur-2xl opacity-40 pointer-events-none"
                        style={{ background: `radial-gradient(circle at 30% 0%, ${m.tone}66, transparent 70%)` }}
                      />
                      <div className="relative">
                        <Mock />
                      </div>
                    </div>
                  </motion.div>
                );
              })}
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

        {/* PRICING */}
        <section className="relative py-20 md:py-28">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center max-w-2xl mx-auto">
              <div className="text-xs uppercase tracking-[0.22em] text-white/50">Pricing</div>
              <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
                Pay only when a bug is real.
              </h2>
              <p className="mt-4 text-white/60">
                No retainer for unread reports. Every plan caps your spend at the reward
                bands you set.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-6xl mx-auto">
              {tiers.map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className={`relative rounded-2xl p-7 ${
                    t.highlight
                      ? "bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/20"
                      : "bg-white/[0.02] border border-white/10"
                  }`}
                >
                  {t.highlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-white px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-black">
                      Most picked
                    </div>
                  )}
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="mt-4 flex items-baseline gap-1.5">
                    <span className="text-4xl md:text-5xl font-bold tracking-tight text-white">{t.price}</span>
                    <span className="text-sm text-white/50">{t.cadence}</span>
                  </div>
                  <p className="mt-3 text-sm text-white/60 leading-relaxed">{t.blurb}</p>
                  <ul className="mt-6 space-y-2.5">
                    {t.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-white/80">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" style={{ color: t.highlight ? accent.cyan : "rgba(255,255,255,0.6)" }} />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={t.href}
                    className={`mt-7 w-full inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                      t.highlight
                        ? "bg-white text-black hover:bg-white/90"
                        : "border border-white/20 bg-white/[0.04] text-white hover:bg-white/[0.08]"
                    }`}
                  >
                    {t.cta}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>

            <p className="mt-8 text-center text-xs text-white/40">
              All plans include SOC 2-ready evidence pack · researcher payouts handled by Virelity ·
              cancel anytime.
            </p>
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
