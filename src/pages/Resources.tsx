import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { m as motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { branches, communities } from "@/data/resources";
import { ArrowRight, ExternalLink, BookOpen, Users, Sparkles, Code2 } from "lucide-react";

const Resources = () => {
  return (
    <>
      <Helmet>
        <title>Engineering Resources — Curated Study Hub | Virelity</title>
        <meta
          name="description"
          content="Curated engineering study resources across CS, EE, ME, AI/ML, Robotics, Cybersecurity, and XR — sourced from MIT OCW, Stanford, Reddit, GitHub, LinkedIn and more."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30 text-foreground">
        <Navbar />

        <main className="pt-28 pb-20">
          <section className="container mx-auto px-4 mb-16">
            <Link to="/resources/security" className="group flex flex-col justify-between gap-8 rounded-2xl border border-emerald-400/40 bg-gradient-to-br from-[#07130f] to-[#0d211a] p-6 text-white shadow-xl transition-transform hover:-translate-y-1 md:flex-row md:items-center md:p-10"><div className="max-w-3xl"><span className="mb-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-emerald-400"><Sparkles className="h-4 w-4" /> New security field guide</span><h2 className="text-3xl font-black leading-tight md:text-5xl">AI security & bug bounty resources</h2><p className="mt-4 text-base text-white/65 md:text-lg">Codex Security, Strix, Raptor, MantisHack, hands-on labs, authorized programs, and a responsible disclosure roadmap.</p></div><span className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 font-black text-black transition-transform group-hover:translate-x-1">Open field guide <ArrowRight className="h-5 w-5" /></span></Link>
          </section>

          <section className="container mx-auto px-4 mb-16">
            <Link to="/resources/build-your-own" className="group flex flex-col justify-between gap-8 rounded-2xl border-2 border-foreground bg-[#ffbe0b] p-6 text-black shadow-[7px_7px_0_hsl(var(--foreground))] transition-transform hover:-translate-y-1 md:flex-row md:items-center md:p-10"><div className="max-w-3xl"><span className="mb-4 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em]"><Code2 className="h-4 w-4" /> Interactive directory</span><h2 className="text-3xl font-black leading-tight md:text-5xl">Build Your Own X</h2><p className="mt-4 text-base font-semibold text-black/70 md:text-lg">Hundreds of free tutorials for building databases, operating systems, games, programming languages, AI systems, and more from scratch.</p></div><span className="inline-flex shrink-0 items-center gap-2 border-2 border-black bg-white px-5 py-3 font-black shadow-[4px_4px_0_#000] transition-transform group-hover:translate-x-1">Explore projects <ArrowRight className="h-5 w-5" /></span></Link>
          </section>

          <section className="container mx-auto px-4 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl"
            >
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-4">
                Resources Hub
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                The Engineering Study Library
                <span className="block bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
                  every student needs.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-6">
                Hand-picked courses, textbooks, hands-on platforms, and
                communities across eight engineering disciplines. Seeded from an
                Engineering Student Resource Guide, heavily augmented with the
                best of Reddit, GitHub, LinkedIn, and official university
                sources.
              </p>
              <div className="flex flex-wrap gap-6 text-sm">
                <div>
                  <div className="text-3xl font-bold text-primary">{branches.length}</div>
                  <div className="text-muted-foreground">disciplines</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">
                    {branches.reduce((n, b) => n + b.topics.length, 0)}
                  </div>
                  <div className="text-muted-foreground">topics</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">
                    {branches.reduce(
                      (n, b) => n + b.topics.reduce((m, t) => m + t.links.length, 0),
                      0
                    )}
                  </div>
                  <div className="text-muted-foreground">vetted links</div>
                </div>
              </div>
            </motion.div>
          </section>

          <section className="container mx-auto px-4 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22 }}
            >
              <Link
                to="/resources/humanizer"
                className="group grid overflow-hidden rounded-2xl border border-primary/40 bg-card shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background md:grid-cols-[minmax(320px,0.9fr)_minmax(0,1.1fr)]"
              >
                <div className="relative min-h-64 overflow-hidden md:min-h-full">
                  <img
                    src="/humanizer-prompts-og.png"
                    alt="Preview of the AI writing humanizer prompt guide"
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent md:bg-gradient-to-r" />
                </div>
                <div className="flex flex-col justify-center p-6 md:p-10">
                  <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                    New creator resource
                  </span>
                  <h2 className="mb-4 text-3xl font-bold leading-tight md:text-4xl">
                    Make AI writing sound more like you
                  </h2>
                  <p className="mb-6 max-w-2xl text-muted-foreground">
                    Seven copyable prompts for natural captions, emails, voice
                    matching, concise rewrites, and a strong final edit.
                  </p>
                  <span className="inline-flex items-center gap-2 font-semibold text-primary transition-all group-hover:gap-3">
                    Open the humanizer toolkit
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>
              </Link>
            </motion.div>
          </section>

          <section className="container mx-auto px-4 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <Link
                to="/resources/reverse-image"
                className="group grid overflow-hidden rounded-2xl border border-primary/40 bg-card shadow-lg transition-all duration-300 hover:-translate-y-1 hover:border-primary hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-4 focus-visible:ring-offset-background md:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]"
              >
                <div className="flex flex-col justify-center p-6 md:p-10">
                  <span className="mb-4 inline-flex w-fit items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                    Featured creator resource
                  </span>
                  <h2 className="mb-4 text-3xl font-bold leading-tight md:text-4xl">
                    Find possible photos of you online with ChatGPT
                  </h2>
                  <p className="mb-6 max-w-2xl text-muted-foreground">
                    Five copy-and-paste prompts to search more thoughtfully,
                    verify every result, write a removal request, and keep track
                    of what happens next.
                  </p>
                  <span className="inline-flex items-center gap-2 font-semibold text-primary transition-all group-hover:gap-3">
                    Open the free prompt guide
                    <ArrowRight className="h-5 w-5" aria-hidden="true" />
                  </span>
                </div>
                <div className="relative min-h-64 overflow-hidden md:min-h-full">
                  <img
                    src="/photo-search-prompts-og.png"
                    alt="Preview of the ChatGPT reverse image search prompt guide"
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent md:bg-gradient-to-l" />
                </div>
              </Link>
            </motion.div>
          </section>

          <section className="container mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-primary" />
              Browse by Discipline
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {branches.map((b, i) => (
                <motion.div
                  key={b.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                >
                  <Link
                    to={`/resources/${b.slug}`}
                    className="group block rounded-2xl overflow-hidden border border-border bg-card hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={b.heroImage}
                        alt={`${b.name} resources`}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-gradient-to-t ${b.accent} opacity-60 mix-blend-multiply`} />
                      <div className="absolute bottom-3 left-4 right-4">
                        <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                          {b.name}
                        </h3>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="text-sm text-muted-foreground mb-4">
                        {b.tagline}
                      </p>
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span>
                          {b.topics.length} topic{b.topics.length === 1 ? "" : "s"} ·{" "}
                          {b.topics.reduce((s, t) => s + t.links.length, 0)} links
                        </span>
                        <span className="inline-flex items-center gap-1 text-primary font-semibold group-hover:gap-2 transition-all">
                          Explore <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </section>

          <section className="container mx-auto px-4 mt-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 flex items-center gap-3">
              <Users className="w-6 h-6 text-primary" />
              Communities & Competitions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {communities.map((c) => (
                <a
                  key={c.url}
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start justify-between gap-4 p-5 rounded-xl border border-border bg-card hover:border-primary/60 transition-all"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold">{c.title}</h3>
                      <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                        {c.platform}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{c.description}</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary shrink-0 mt-1" />
                </a>
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Resources;
