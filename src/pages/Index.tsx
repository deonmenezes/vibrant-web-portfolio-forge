import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Bot, GraduationCap, Layers, Search } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { SEOBreadcrumbs } from "@/components/SEOBreadcrumbs";
import { useAnalyticsEvents } from "@/hooks/use-analytics";
import { BOOK_CALL_URL } from "@/lib/contact";

const clients = [
  { name: "Callbook.ai", url: "https://www.callbook.ai/" },
  { name: "RentAHuman", url: "https://rentahuman.ai/" },
  { name: "Tenkara", url: "https://app.tenkara.ai/" },
  { name: "SecureNetMe", url: "https://securenetme.com/" },
  { name: "Naytive", url: "https://naytive.com/" },
  { name: "Arqio", url: "https://www.arqio.ai/" },
];

const services = [
  {
    icon: Search,
    title: "AI strategy & audit",
    text: "We map how your business runs today and find the work AI can take off your team's plate, ranked by payoff.",
  },
  {
    icon: Bot,
    title: "AI agents & automation",
    text: "Agents that answer customers, qualify leads, read documents and move data between the tools you already use.",
  },
  {
    icon: Layers,
    title: "Custom AI products",
    text: "AI built into your website, app or internal tools, trained on your own data and connected to your systems.",
  },
  {
    icon: GraduationCap,
    title: "Training & adoption",
    text: "Hands-on sessions so your people actually use what we build, plus support and tuning after launch.",
  },
];

const steps = [
  {
    title: "Find",
    text: "Short workshops with your team. You get a clear plan: which processes to automate first and what each one saves.",
  },
  {
    title: "Build",
    text: "We ship the first automation fast, measure it against the old way, and only expand what works.",
  },
  {
    title: "Scale",
    text: "Roll it out across teams, train everyone who touches it, and keep improving it as your business changes.",
  },
];

const Index = () => {
  const { trackButtonClick } = useAnalyticsEvents();
  const location = useLocation();

  // Navbar links like /#services land here; scroll to the section once rendered.
  useEffect(() => {
    if (!location.hash) return;
    const el = document.getElementById(location.hash.slice(1));
    if (el) requestAnimationFrame(() => el.scrollIntoView({ behavior: "smooth" }));
  }, [location.hash]);

  const bookCall = (where: string) => () => trackButtonClick("Book a call", where);

  return (
    <>
      <SEOBreadcrumbs title="Home" />
      <div className="flex min-h-screen flex-col bg-black text-white">
        <Navbar />

        <main className="flex-1">
          {/* Hero */}
          <section className="relative overflow-hidden border-b border-white/10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:64px_64px]">
            <div className="container flex min-h-[min(88vh,860px)] flex-col justify-center pb-20 pt-32 md:pt-40">
              <p className="mb-6 inline-flex w-fit items-center gap-2 border-2 border-white/20 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-white/70">
                <span className="h-2 w-2 bg-vision-gold" aria-hidden="true" />
                AI transformation company
              </p>
              <h1 className="max-w-5xl text-5xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
                Put <span className="text-vision-gold">AI to work</span> in your business
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-white/70 md:text-xl">
                Virelity finds where AI will save your team the most time and money, builds it into the tools you
                already use, and trains your people to run it.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href={BOOK_CALL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={bookCall("Hero")}
                  className="inline-flex items-center justify-center gap-2 border-2 border-black bg-vision-gold px-8 py-4 text-base font-black uppercase tracking-wider text-black shadow-[6px_6px_0_0_#fff] transition-transform hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[8px_8px_0_0_#fff]"
                >
                  Book a free call <ArrowRight className="h-5 w-5" />
                </a>
                <Link
                  to="/#process"
                  className="inline-flex items-center justify-center gap-2 border-2 border-white/30 px-8 py-4 text-base font-bold uppercase tracking-wider text-white transition-colors hover:border-white"
                >
                  How it works
                </Link>
              </div>
            </div>
          </section>

          {/* Clients */}
          <section className="border-b border-white/10 py-12">
            <div className="container">
              <p className="mb-8 text-center text-xs font-bold uppercase tracking-[0.2em] text-white/40">
                Trusted by teams at
              </p>
              <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
                {clients.map((c) => (
                  <li key={c.name}>
                    <a
                      href={c.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xl font-black tracking-tight text-white/50 transition-colors hover:text-white"
                    >
                      {c.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Services */}
          <section id="services" className="scroll-mt-20 py-24 md:py-32">
            <div className="container">
              <div className="mb-14 max-w-2xl">
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-vision-gold">What we do</p>
                <h2 className="text-4xl font-black uppercase leading-none md:text-6xl">One partner for your whole AI shift</h2>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {services.map(({ icon: Icon, title, text }) => (
                  <article
                    key={title}
                    className="group border-2 border-white/15 bg-white/[0.02] p-8 transition-all hover:-translate-x-1 hover:-translate-y-1 hover:border-white hover:shadow-[6px_6px_0_0_#F59E0B]"
                  >
                    <Icon className="mb-6 h-8 w-8 text-vision-gold" aria-hidden="true" />
                    <h3 className="mb-3 text-2xl font-black uppercase">{title}</h3>
                    <p className="leading-relaxed text-white/65">{text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Process */}
          <section id="process" className="scroll-mt-20 border-y border-white/10 bg-white/[0.02] py-24 md:py-32">
            <div className="container">
              <div className="mb-14 max-w-2xl">
                <p className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-vision-gold">How it works</p>
                <h2 className="text-4xl font-black uppercase leading-none md:text-6xl">Three steps, no guesswork</h2>
              </div>
              <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
                {steps.map((step, i) => (
                  <li key={step.title} className="border-t-4 border-vision-gold pt-6">
                    <span className="text-sm font-black text-white/40">0{i + 1}</span>
                    <h3 className="mb-3 mt-2 text-3xl font-black uppercase">{step.title}</h3>
                    <p className="leading-relaxed text-white/65">{step.text}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Testimonial */}
          <section className="py-24 md:py-32">
            <div className="container max-w-4xl text-center">
              <blockquote className="text-2xl font-bold leading-snug md:text-4xl">
                “We needed a reliable partner to scale quickly. The solution shipped on time and performed even better
                than we hoped.”
              </blockquote>
              <div className="mt-8 flex items-center justify-center gap-3">
                <img src="/francis.jpg" alt="" className="h-12 w-12 border-2 border-vision-gold object-cover" width="48" height="48" loading="lazy" />
                <div className="text-left">
                  <p className="font-bold">Francis</p>
                  <p className="text-sm text-white/50">Operations Lead</p>
                </div>
              </div>
              <Link
                to="/portfolio"
                className="mt-12 inline-flex items-center gap-2 font-bold uppercase tracking-wider text-vision-gold hover:underline"
              >
                See our work <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </section>

          {/* Final CTA */}
          <section className="container pb-24 md:pb-32">
            <div className="border-2 border-black bg-vision-gold px-6 py-16 text-center text-black shadow-[10px_10px_0_0_#fff] md:py-20">
              <h2 className="mx-auto max-w-3xl text-4xl font-black uppercase leading-none md:text-6xl">
                Where could AI save you time?
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg font-medium text-black/75">
                Book a free call. We'll look at how your business runs and point out the first things worth
                automating.
              </p>
              <a
                href={BOOK_CALL_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={bookCall("Final CTA")}
                className="mt-10 inline-flex items-center gap-2 border-2 border-black bg-black px-8 py-4 font-black uppercase tracking-wider text-white transition-transform hover:-translate-y-0.5"
              >
                Book a free call <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Index;
