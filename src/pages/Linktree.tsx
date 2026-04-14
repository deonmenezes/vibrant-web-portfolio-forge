import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { PageTransition } from "@/components/PageTransition";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, MessageCircle, Twitter, Youtube } from "lucide-react";

const accentColors = {
  gold: "#D4AF37",
  electric: "#00FF87",
  coral: "#FF6B6B",
  violet: "#A855F7",
  cyan: "#00D4FF",
};

const links = [
  {
    name: "X",
    handle: "@DeonMen",
    href: "https://x.com/DeonMen",
    icon: Twitter,
    color: accentColors.cyan,
    description: "Short thoughts, updates, and internet experiments.",
  },
  {
    name: "Discord",
    handle: "Join the server",
    href: "https://discord.gg/Gkx8aKDQ",
    icon: MessageCircle,
    color: accentColors.violet,
    description: "Community chats, collabs, and real-time conversations.",
  },
  {
    name: "GitHub",
    handle: "deonmenezes",
    href: "https://github.com/deonmenezes",
    icon: Github,
    color: accentColors.electric,
    description: "Projects, experiments, and code shipped in public.",
  },
  {
    name: "LinkedIn",
    handle: "Deon Menezes",
    href: "https://www.linkedin.com/in/deon-menezes-a82552254/",
    icon: Linkedin,
    color: accentColors.gold,
    description: "Professional background, wins, and business updates.",
  },
  {
    name: "YouTube",
    handle: "@DeonMenezes",
    href: "https://www.youtube.com/@DeonMenezes",
    icon: Youtube,
    color: accentColors.coral,
    description: "Videos, breakdowns, and things worth showing visually.",
  },
];

const Linktree = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-black text-white">
        <Navbar
          title="Deon Menezes Linktree | Social Links and Profiles"
          description="One place to find Deon Menezes across X, Discord, GitHub, LinkedIn, and YouTube."
        />

        <main className="relative overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="absolute -top-24 -right-24 h-64 w-64 border-8 border-white/10"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
            className="absolute left-[-5rem] top-72 h-40 w-40 bg-vision-gold/10"
          />

          <section className="container relative z-10 px-4 pb-24 pt-32 md:pt-40">
            <div className="mx-auto max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="mb-16 text-center"
              >
                <div className="mb-6 inline-block">
                  <div className="relative">
                    <div className="absolute inset-0 translate-x-2 translate-y-2 bg-vision-gold" />
                    <div className="relative border-4 border-white bg-black px-6 py-3">
                      <span className="font-black uppercase tracking-[0.35em] text-white">Linktree</span>
                    </div>
                  </div>
                </div>

                <h1 className="mb-6 text-5xl font-black uppercase leading-none md:text-7xl">
                  <span className="block text-white">Find</span>
                  <span className="block text-vision-gold">Deon Online</span>
                </h1>

                <p className="mx-auto max-w-2xl text-lg font-medium text-white/70 md:text-xl">
                  One clean hub for all the places I post, build, and hang out online.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15 }}
                className="mb-16"
              >
                <div className="relative">
                  <div className="absolute inset-0 translate-x-3 translate-y-3 bg-vision-gold" />
                  <div className="relative grid gap-6 border-4 border-white bg-black p-6 md:p-10">
                    {links.map((link, index) => {
                      const Icon = link.icon;

                      return (
                        <motion.a
                          key={link.name}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.25 + index * 0.08, duration: 0.45 }}
                          whileHover={{ y: -6 }}
                          whileTap={{ scale: 0.98 }}
                          className="group relative block"
                        >
                          <div
                            className="absolute inset-0 translate-x-2 translate-y-2 transition-transform duration-200 group-hover:translate-x-3 group-hover:translate-y-3"
                            style={{ backgroundColor: link.color }}
                          />
                          <div className="relative flex flex-col gap-5 border-4 border-white bg-black p-6 md:flex-row md:items-center md:justify-between">
                            <div className="flex items-start gap-4">
                              <div
                                className="flex h-14 w-14 shrink-0 items-center justify-center border-2 border-black"
                                style={{ backgroundColor: link.color }}
                              >
                                <Icon className="h-7 w-7 text-black" />
                              </div>

                              <div>
                                <div className="mb-1 flex flex-wrap items-center gap-3">
                                  <h2 className="text-2xl font-black uppercase text-white">{link.name}</h2>
                                  <span className="bg-white px-3 py-1 text-xs font-black uppercase tracking-wider text-black">
                                    {link.handle}
                                  </span>
                                </div>
                                <p className="max-w-xl text-sm font-medium text-white/70 md:text-base">
                                  {link.description}
                                </p>
                              </div>
                            </div>

                            <div className="flex items-center gap-3 self-end md:self-auto">
                              <span className="text-sm font-black uppercase tracking-[0.2em] text-vision-gold">
                                Open
                              </span>
                              <div className="flex h-12 w-12 items-center justify-center border-2 border-white bg-white text-black">
                                <ArrowUpRight className="h-6 w-6" />
                              </div>
                            </div>
                          </div>
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.35 }}
                className="grid gap-6 md:grid-cols-3"
              >
                <div className="relative md:col-span-2">
                  <div className="absolute inset-0 translate-x-2 translate-y-2 bg-white" />
                  <div className="relative border-4 border-white bg-vision-gold p-8 text-black">
                    <p className="mb-2 text-sm font-black uppercase tracking-[0.3em]">Direct Link</p>
                    <p className="break-all text-2xl font-black uppercase md:text-3xl">virelity.com/linktree</p>
                  </div>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 translate-x-2 translate-y-2 bg-white" />
                  <div className="relative border-4 border-white bg-black p-8">
                    <p className="mb-2 text-sm font-black uppercase tracking-[0.3em] text-white/70">Built For</p>
                    <p className="text-2xl font-black uppercase text-white">Fast Sharing</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default Linktree;
