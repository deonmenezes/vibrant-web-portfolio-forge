import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { m as motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { branches, communities } from "@/data/resources";
import { ArrowRight, ExternalLink, BookOpen, Users } from "lucide-react";

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
