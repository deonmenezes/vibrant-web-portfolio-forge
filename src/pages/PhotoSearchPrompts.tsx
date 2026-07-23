import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";

type Prompt = {
  number: string;
  eyebrow: string;
  title: string;
  note: string;
  text: string;
  background: string;
};

const prompts: Prompt[] = [
  {
    number: "01",
    eyebrow: "Start here",
    title: "Analyze your selfie",
    note: "Upload a clear, recent photo first. A plain background works best.",
    text: "Analyze this photo and describe the visible, non-sensitive features that could help distinguish me in other public photos online. Focus on things like face shape, hairstyle, glasses, facial hair, clothing, accessories, and other visible details. Do not guess my identity, ethnicity, health, personality, or any other sensitive traits. Give me a concise search description I can review and edit.",
    background: "bg-[#fffaf2]",
  },
  {
    number: "02",
    eyebrow: "Search the web",
    title: "Look for possible matches",
    note: "Use ChatGPT's web or agent tools if they are available to you.",
    text: "Using the photo I uploaded and the search description we created, help me look for publicly accessible webpages that may contain this same photo or a visually similar photo of me. Use available web-search or reverse-image-search tools where supported. Search likely sources such as event galleries, public social profiles, news pages, blogs, and image results. Return a table with the page title, direct URL, where the image appears, why it might be a match, and a confidence level. Do not claim a match as certain based on appearance alone.",
    background: "bg-[#f4e9da]",
  },
  {
    number: "03",
    eyebrow: "Double-check",
    title: "Verify every result",
    note: "Never report or remove an image until you have checked it yourself.",
    text: "Review the possible matches one by one. For each result, compare only clearly visible details from my uploaded photo with the image on the page. List the details that match, the details that do not match, and anything that is unclear. Label each result as likely match, possible match, or unlikely match. Include the direct source link. Remind me that I need to make the final decision and that facial similarity is not proof of identity.",
    background: "bg-[#edf1e7]",
  },
  {
    number: "04",
    eyebrow: "Take action",
    title: "Write a takedown request",
    note: "Replace the brackets, then send it to the site owner or platform.",
    text: "Help me write a polite, clear photo-removal request for this webpage: [PASTE URL]. The photo appears here: [DESCRIBE WHERE]. My reason for requesting removal is: [YOUR REASON]. Write a short subject line and a human-sounding email. Ask them to remove the image and any cached copies they control, and to confirm when it is done. Do not make legal threats or claim rights I may not have. If the site has a specific privacy, copyright, or removal process, summarize the appropriate next step separately.",
    background: "bg-[#f9edcf]",
  },
  {
    number: "05",
    eyebrow: "Follow up",
    title: "Track everything",
    note: "Paste your results so ChatGPT can turn them into a simple checklist.",
    text: "Turn these photo-search results into a clean removal tracker. Use these columns: website, image URL, page URL, match confidence, contact or removal form, date contacted, response, status, and next follow-up date. Flag any result I have not personally verified. Then give me a short, prioritized action list, starting with the clearest matches and the simplest official removal processes.",
    background: "bg-[#f0e6e1]",
  },
];

const steps = [
  ["Upload a clear selfie", "Choose one you are comfortable sharing with ChatGPT."],
  ["Build a search description", "Prompt 01 helps describe only what is visibly useful."],
  ["Search for possible results", "Use web or agent tools when your ChatGPT plan supports them."],
  ["Verify every photo yourself", "AI can be wrong. Treat every result as a lead, not proof."],
  ["Request removal if needed", "Use the site's official process and keep a record."],
];

async function writeToClipboard(text: string) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.setAttribute("readonly", "");
  textArea.className = "fixed left-[-9999px] top-0";
  document.body.appendChild(textArea);
  textArea.select();
  const copied = document.execCommand("copy");
  textArea.remove();
  if (!copied) throw new Error("Copy failed");
}

function CopyButton({ prompt }: { prompt: Prompt }) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const timeoutRef = useRef<number>();

  useEffect(() => () => window.clearTimeout(timeoutRef.current), []);

  const copy = async () => {
    window.clearTimeout(timeoutRef.current);
    try {
      await writeToClipboard(prompt.text);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
    timeoutRef.current = window.setTimeout(() => setStatus("idle"), 2200);
  };

  const label =
    status === "copied" ? "Copied!" : status === "error" ? "Select and copy the text above" : "Copy prompt";

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy ${prompt.title} prompt`}
      className="mt-auto flex min-h-11 w-full items-center justify-center gap-2 rounded-full border-2 border-[#171613] px-5 text-sm font-bold transition-colors hover:bg-[#171613] hover:text-white focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#ff5a36] sm:w-fit"
    >
      <span aria-hidden="true">{status === "copied" ? "✓" : "⧉"}</span>
      {label}
    </button>
  );
}

const PhotoSearchPrompts = () => (
  <main className="min-h-screen bg-[#f7f0e5] font-sans text-[#171613] selection:bg-[#f6c84b]">
    <Helmet>
      <title>Find Photos of You Online: 5 ChatGPT Prompts | Deon Menezes</title>
      <meta
        name="description"
        content="Copy five human-sounding ChatGPT prompts to search for possible photos of you online, verify results, request removal, and track follow-ups."
      />
      <link rel="canonical" href="https://virelity.com/reseources" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="5 ChatGPT Prompts to Find Photos of You Online" />
      <meta
        property="og:description"
        content="A simple, privacy-conscious workflow to find possible photos, verify matches, and request removal."
      />
      <meta property="og:url" content="https://virelity.com/reseources" />
      <meta property="og:image" content="https://virelity.com/photo-search-prompts-og.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="5 ChatGPT Prompts to Find Photos of You Online" />
      <meta
        name="twitter:description"
        content="Copy the prompts and take more control of your digital footprint."
      />
      <meta name="twitter:image" content="https://virelity.com/photo-search-prompts-og.png" />
    </Helmet>

    <header className="absolute left-1/2 top-0 z-10 flex w-full max-w-[1180px] -translate-x-1/2 items-center justify-between px-5 py-5 sm:px-7 sm:py-6">
      <a href="#top" aria-label="Deon Menezes resources home" className="font-mono text-lg font-black tracking-tighter">
        DEON<span className="text-[#ff5a36]">+</span>
      </a>
      <a href="#prompts" className="border-b border-current pb-1 text-xs font-bold sm:text-sm">
        Get the prompts <span aria-hidden="true">↓</span>
      </a>
    </header>

    <section
      id="top"
      className="relative flex min-h-[680px] flex-col items-center justify-center overflow-hidden bg-[linear-gradient(118deg,#f9f1e4,#f7eee1_55%,#edddc9)] px-5 pb-24 pt-32 text-center sm:min-h-[760px] sm:px-7 sm:pb-28 sm:pt-36"
    >
      <div aria-hidden="true" className="absolute -left-20 top-1/3 h-44 w-44 rotate-[18deg] border-2 border-[#171613]/10" />
      <div aria-hidden="true" className="absolute -bottom-24 -right-14 h-44 w-44 rotate-[18deg] border-2 border-[#171613]/10" />
      <p className="mb-6 flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-[0.15em]">
        <span className="text-base text-[#ff5a36]" aria-hidden="true">✦</span> Free creator resource
      </p>
      <h1 className="max-w-6xl font-serif text-[clamp(3.25rem,15vw,5.3rem)] font-normal leading-[0.92] tracking-[-0.065em] sm:text-[clamp(4rem,8.2vw,7.5rem)] sm:leading-[0.87]">
        Find photos of you
        <br />
        <em className="font-normal text-[#ff5a36]">across the internet.</em>
      </h1>
      <p className="mb-8 mt-8 max-w-xl text-base leading-relaxed sm:text-xl">
        Here are the exact ChatGPT prompts from my video—cleaned up, ready to copy, and actually easy to use.
      </p>
      <a href="#quick-start" className="flex min-h-[52px] items-center gap-5 rounded-full border-2 border-[#171613] bg-[#171613] px-6 text-sm font-extrabold text-white transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#ff5a36]">
        Show me how <span aria-hidden="true">↘</span>
      </a>
      <p className="mt-3 text-xs opacity-60">No sign-up. No fluff. Just the prompts.</p>
    </section>

    <section id="quick-start" className="mx-auto grid max-w-[1180px] gap-12 px-5 py-20 md:grid-cols-[0.8fr_1.2fr] md:gap-20 md:px-7 md:py-28">
      <div className="max-w-xl">
        <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#ff5a36]">Before you copy</p>
        <h2 className="font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-normal leading-none tracking-[-0.055em]">How this works</h2>
        <p className="mt-5 leading-relaxed opacity-70">Five simple steps. You stay in control the whole time.</p>
      </div>
      <ol>
        {steps.map(([title, description], index) => (
          <li key={title} className="grid grid-cols-[38px_1fr] gap-5 border-t border-[#171613]/15 py-5 last:border-b">
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f6c84b] font-mono text-xs font-black">{index + 1}</span>
            <div>
              <strong className="block pt-1">{title}</strong>
              <p className="mt-1 text-sm leading-relaxed opacity-65">{description}</p>
            </div>
          </li>
        ))}
      </ol>
    </section>

    <section id="prompts" className="border-t border-[#171613]/15 px-5 py-20 md:px-7 md:py-28">
      <div className="mx-auto mb-12 max-w-[1124px]">
        <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#ff5a36]">Copy + paste</p>
        <h2 className="max-w-2xl font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-normal leading-none tracking-[-0.055em]">All the prompts you need</h2>
        <p className="mt-5 leading-relaxed opacity-70">Work through these in order for the cleanest result.</p>
      </div>
      <div className="mx-auto grid max-w-[1124px] gap-6 md:grid-cols-2">
        {prompts.map((prompt) => (
          <article key={prompt.number} className={`flex min-h-0 flex-col rounded-sm border border-[#171613]/15 p-6 md:min-h-[510px] md:p-8 ${prompt.background}`}>
            <div className="mb-8 flex items-center justify-between">
              <span className="font-serif text-2xl italic text-[#ff5a36]">{prompt.number}</span>
              <span className="font-mono text-[0.65rem] font-bold uppercase tracking-[0.15em]">{prompt.eyebrow}</span>
            </div>
            <h3 className="font-serif text-[clamp(2rem,3vw,2.75rem)] font-normal leading-tight tracking-[-0.04em]">{prompt.title}</h3>
            <p className="mb-6 mt-3 text-sm leading-relaxed opacity-65">{prompt.note}</p>
            <div className="mb-6 flex-1 border-l-[3px] border-[#ff5a36] bg-white/60 p-5">
              <p className="text-sm leading-relaxed">{prompt.text}</p>
            </div>
            <CopyButton prompt={prompt} />
          </article>
        ))}
      </div>
    </section>

    <section className="mx-auto grid max-w-4xl gap-6 px-5 py-20 md:grid-cols-[70px_1fr] md:gap-10 md:px-7 md:py-28">
      <div aria-hidden="true" className="flex h-14 w-14 items-center justify-center rounded-full bg-[#ff5a36] font-serif text-3xl text-white md:h-16 md:w-16">!</div>
      <div>
        <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.15em] text-[#ff5a36]">A quick reality check</p>
        <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] font-normal leading-none tracking-[-0.055em]">Useful? Yes. Magic face scanner? No.</h2>
        <p className="mt-6 text-sm leading-relaxed opacity-75 sm:text-base">
          ChatGPT cannot guarantee it will find every photo of you, and tool access varies by plan and location. Reverse-image and visual matching can miss results—or mistake someone else for you. Review links yourself before contacting anyone.
        </p>
        <p className="mt-4 text-sm leading-relaxed opacity-75 sm:text-base">
          Only upload a photo you have the right to use. Avoid children's photos, intimate images, IDs, or anything sensitive. Never use these prompts to identify, track, harass, or investigate another person without their consent. A removal request is not a guarantee that a website must take content down; local laws and platform policies differ.
        </p>
      </div>
    </section>

    <section className="flex flex-col items-center bg-[#ff5a36] px-5 py-20 text-center md:px-7 md:py-28">
      <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.15em]">That's it</p>
      <h2 className="max-w-4xl font-serif text-[clamp(2.5rem,5vw,4.5rem)] font-normal leading-none tracking-[-0.055em] text-white">Take back a little control of your digital footprint.</h2>
      <a href="#prompts" className="mt-8 flex min-h-[52px] items-center gap-5 rounded-full border-2 border-[#171613] bg-[#fffaf2] px-6 text-sm font-extrabold transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-white">
        Copy the prompts <span aria-hidden="true">↑</span>
      </a>
    </section>

    <footer className="bg-[#171613] px-5 py-8 text-white sm:px-7">
      <div className="mx-auto flex min-h-14 max-w-[1124px] flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <a href="#top" className="font-mono text-lg font-black tracking-tighter">DEON<span className="text-[#ff5a36]">+</span></a>
        <p className="text-xs opacity-60">Practical AI tips, made human.</p>
        <p className="text-xs opacity-60">© {new Date().getFullYear()} Deon Menezes</p>
      </div>
    </footer>
  </main>
);

export default PhotoSearchPrompts;
