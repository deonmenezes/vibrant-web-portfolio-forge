import { Helmet } from "react-helmet-async";
import { Link, useParams, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { branchBySlug, Difficulty, ResourceLink } from "@/data/resources";
import { ArrowLeft, ExternalLink, ChevronRight } from "lucide-react";

const difficultyColor: Record<Difficulty, string> = {
  Beginner: "bg-emerald-500/15 text-emerald-500 border-emerald-500/30",
  Intermediate: "bg-amber-500/15 text-amber-500 border-amber-500/30",
  Advanced: "bg-rose-500/15 text-rose-500 border-rose-500/30",
};

const LinkCard = ({ link }: { link: ResourceLink }) => (
  <a
    href={link.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex flex-col gap-2 p-5 rounded-xl border border-border bg-card hover:border-primary/60 hover:shadow-lg transition-all"
  >
    <div className="flex items-center justify-between">
      <span className="text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full bg-primary/10 text-primary">
        {link.platform}
      </span>
      <span
        className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded-full border ${difficultyColor[link.difficulty]}`}
      >
        {link.difficulty}
      </span>
    </div>
    <h4 className="font-semibold text-base leading-snug group-hover:text-primary transition-colors">
      {link.title}
    </h4>
    <p className="text-sm text-muted-foreground flex-1">{link.description}</p>
    <div className="flex items-center justify-between mt-2">
      {link.free && (
        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-500">
          Free
        </span>
      )}
      <span className="ml-auto inline-flex items-center gap-1 text-xs text-muted-foreground group-hover:text-primary">
        Visit <ExternalLink className="w-3 h-3" />
      </span>
    </div>
  </a>
);

const ResourceBranch = () => {
  const { branchSlug } = useParams<{ branchSlug: string }>();
  const branch = branchSlug ? branchBySlug(branchSlug) : undefined;

  if (!branch) return <Navigate to="/resources" replace />;

  const totalLinks = branch.topics.reduce((s, t) => s + t.links.length, 0);

  return (
    <>
      <Helmet>
        <title>{branch.name} Resources | Virelity Engineering Hub</title>
        <meta
          name="description"
          content={`${branch.name} study resources: ${branch.tagline}. ${totalLinks}+ curated links across ${branch.topics.length} topics.`}
        />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Navbar />

        <main className="pt-28 pb-20">
          <section className="relative">
            <div className="absolute inset-0 h-[420px] overflow-hidden">
              <img
                src={branch.heroImage}
                alt={branch.name}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-br ${branch.accent} opacity-70 mix-blend-multiply`} />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
            </div>

            <div className="container mx-auto px-4 relative pt-12">
              <nav className="text-sm text-white/90 mb-6 flex items-center gap-2">
                <Link to="/resources" className="hover:underline inline-flex items-center gap-1">
                  <ArrowLeft className="w-4 h-4" /> All Resources
                </Link>
                <ChevronRight className="w-4 h-4" />
                <span>{branch.name}</span>
              </nav>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-3xl pb-16"
              >
                <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg mb-4">
                  {branch.name}
                </h1>
                <p className="text-lg md:text-xl text-white/90 max-w-2xl">
                  {branch.description}
                </p>
                <div className="mt-4 inline-flex items-center gap-3 text-sm text-white/80">
                  <span>{branch.topics.length} topics</span>
                  <span>·</span>
                  <span>{totalLinks} curated links</span>
                </div>
              </motion.div>
            </div>
          </section>

          <section className="container mx-auto px-4 relative z-10">
            <div className="space-y-16">
              {branch.topics.map((topic, i) => (
                <motion.div
                  key={topic.slug}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  id={topic.slug}
                >
                  <div className="flex flex-col md:flex-row gap-6 mb-6">
                    <div className="md:w-1/3 rounded-2xl overflow-hidden h-48 md:h-auto">
                      <img
                        src={topic.image}
                        alt={topic.name}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="md:w-2/3">
                      <h2 className="text-2xl md:text-3xl font-bold mb-2">
                        {topic.name}
                      </h2>
                      <p className="text-muted-foreground">{topic.description}</p>
                      <div className="mt-3 text-xs text-muted-foreground">
                        {topic.links.length} resources
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {topic.links.map((link) => (
                      <LinkCard key={link.url} link={link} />
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ResourceBranch;
