import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { m as motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ArrowRight } from "lucide-react";

type Post = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  dateLabel: string;
  category: string;
};

const posts: Post[] = [
  {
    slug: "gpt-5-5-party",
    title: "OpenAI GPT-5.5 Party",
    excerpt:
      "I went to Sam Altman's GPT-5.5 party with a brand-new MacBook and walked out with his signature on it. Full reel + breakdown of the OpenAI developers night.",
    date: "2026-05-08",
    dateLabel: "May 8, 2026",
    category: "OpenAI",
  },
];

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog | Virelity — Notes from Deon Menezes</title>
        <meta
          name="description"
          content="Field notes, launch reels, and developer-room dispatches from Deon Menezes — covering OpenAI, GPT-5.5, AI agents, and the engineering behind shipping them."
        />
        <link rel="canonical" href="https://virelity.com/blog" />
        <meta property="og:title" content="Blog | Virelity — Notes from Deon Menezes" />
        <meta
          property="og:description"
          content="Field notes, launch reels, and developer-room dispatches from Deon Menezes."
        />
        <meta property="og:url" content="https://virelity.com/blog" />
        <meta property="og:type" content="website" />
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
                Blog
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Notes from the room
                <span className="block bg-gradient-to-r from-primary to-pink-500 bg-clip-text text-transparent">
                  by Deon Menezes.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground">
                On-the-ground reels, launch dispatches, and engineering notes
                from the AI events that matter — OpenAI, agents, and
                everything we ship at Virelity.
              </p>
            </motion.div>
          </section>

          <section className="container mx-auto px-4">
            <div className="grid gap-6 max-w-3xl">
              {posts.map((post, idx) => (
                <motion.article
                  key={post.slug}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.05 * idx }}
                  className="group rounded-2xl border border-border bg-card/40 p-6 hover:border-primary transition-colors"
                >
                  <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                    <span className="px-2 py-1 rounded-full bg-primary/10 text-primary uppercase tracking-wider">
                      {post.category}
                    </span>
                    <time dateTime={post.date}>{post.dateLabel}</time>
                  </div>
                  <h2 className="text-2xl font-semibold mb-2">
                    <Link
                      to={`/blog/${post.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary"
                  >
                    Read post <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </motion.article>
              ))}
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Blog;
