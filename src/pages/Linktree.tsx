import { PageTransition } from "@/components/PageTransition";
import { m as motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { ArrowUpRight, Github, Linkedin, MessageCircle, Twitter, Youtube } from "lucide-react";

const links = [
  {
    name: "X",
    subtitle: "@DeonMen",
    href: "https://x.com/DeonMen",
    icon: Twitter,
  },
  {
    name: "Discord",
    subtitle: "Join the server",
    href: "https://discord.gg/Sz6VMY5Jm",
    icon: MessageCircle,
  },
  {
    name: "GitHub",
    subtitle: "deonmenezes",
    href: "https://github.com/deonmenezes",
    icon: Github,
  },
  {
    name: "LinkedIn",
    subtitle: "Deon Menezes",
    href: "https://www.linkedin.com/in/deon-menezes-a82552254/",
    icon: Linkedin,
  },
  {
    name: "YouTube",
    subtitle: "@DeonMenezes",
    href: "https://www.youtube.com/@DeonMenezes",
    icon: Youtube,
  },
];

const Linktree = () => {
  return (
    <PageTransition>
      <>
        <Helmet>
          <title>Deon Menezes Linktree | X, Discord, GitHub, LinkedIn, YouTube</title>
          <meta
            name="description"
            content="One simple page to find Deon Menezes on X, Discord, GitHub, LinkedIn, and YouTube."
          />
          <link rel="canonical" href="https://virelity.com/linktree" />
          <meta property="og:title" content="Deon Menezes Linktree" />
          <meta
            property="og:description"
            content="One simple page to find Deon Menezes on X, Discord, GitHub, LinkedIn, and YouTube."
          />
          <meta property="og:url" content="https://virelity.com/linktree" />
          <meta property="og:type" content="website" />
        </Helmet>

        <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#121212] px-4 py-6 text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#2f2f2f,transparent_40%),linear-gradient(180deg,#1a1a1a_0%,#101010_100%)]" />
          <motion.div
            animate={{ scale: [1, 1.08, 1], opacity: [0.18, 0.28, 0.18] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute left-1/2 top-16 h-56 w-56 -translate-x-1/2 rounded-full bg-[#d4af37] blur-3xl"
          />

          <section className="relative z-10 w-full max-w-md">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-[0_20px_80px_rgba(0,0,0,0.45)] backdrop-blur-md"
            >
              <div className="mb-5 text-center">
                <img
                  src="/deonmenezes.png"
                  alt="Deon Menezes"
                  className="mx-auto mb-4 h-24 w-24 rounded-full border-4 border-white object-cover shadow-lg"
                />
                <h1 className="text-2xl font-black tracking-tight text-white">Deon Menezes</h1>
                <p className="mt-1 text-sm font-medium text-white/70">
                  Founder, builder, creator. Pick a platform below.
                </p>
              </div>

              <div className="space-y-3">
                {links.map((link, index) => {
                  const Icon = link.icon;

                  return (
                    <motion.a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.08 * index, duration: 0.35 }}
                      whileHover={{ y: -2, scale: 1.01 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex items-center justify-between rounded-2xl border border-white/10 bg-white px-4 py-4 text-black shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-colors hover:bg-[#f4f1e8]"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#121212] text-white">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="text-left">
                          <div className="text-base font-black">{link.name}</div>
                          <div className="text-sm font-medium text-black/60">{link.subtitle}</div>
                        </div>
                      </div>

                      <ArrowUpRight className="h-5 w-5 shrink-0 text-black/60" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          </section>
        </main>
      </>
    </PageTransition>
  );
};

export default Linktree;
