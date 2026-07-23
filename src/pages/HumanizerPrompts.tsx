import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

type Prompt = {
  number: string;
  use: string;
  title: string;
  tip: string;
  text: string;
  color: string;
};

const prompts: Prompt[] = [
  {
    number: "01",
    use: "Best all-rounder",
    title: "The master humanizer",
    tip: "Paste your draft below the prompt.",
    text: `Rewrite the text below so it sounds like a thoughtful person wrote it—not a polished AI template.

Keep the original facts, meaning, and intent. Use natural sentence variety, specific language, and a conversational rhythm. Remove filler, repetition, clichés, generic transitions, and exaggerated claims. Prefer clear everyday words over corporate language. It is okay to use contractions and the occasional short sentence when they feel natural.

Do not invent personal stories, opinions, facts, statistics, or sources. Do not imitate a named living person. If anything is unclear or unsupported, flag it instead of guessing.

Return:
1. The rewritten version
2. A short list of any claims or details I should verify

Text:
[PASTE YOUR DRAFT]`,
    color: "bg-[#fff8ed]",
  },
  {
    number: "02",
    use: "Sound like you",
    title: "Match my voice",
    tip: "Give it 2–3 real samples you wrote yourself.",
    text: `Study the writing samples below and create a short voice guide based only on observable patterns: tone, sentence length, word choice, pacing, humor, formatting, and level of formality.

Then rewrite my draft using that guide. Preserve every fact and the original meaning. Do not copy distinctive phrases from the samples, invent experiences, or mimic a named person. Keep any uncertainty or nuance in the original.

My writing samples:
[PASTE 2–3 SAMPLES]

Draft to rewrite:
[PASTE DRAFT]

Return the voice guide first, followed by the rewrite.`,
    color: "bg-[#f2eadf]",
  },
  {
    number: "03",
    use: "Instagram • LinkedIn • X",
    title: "Natural social caption",
    tip: "Add your platform and audience before running it.",
    text: `Turn the notes below into a natural social caption for [PLATFORM] aimed at [AUDIENCE].

Lead with a specific, honest hook—not clickbait. Keep the voice warm, direct, and conversational. Use short paragraphs and varied sentence lengths. Make the takeaway genuinely useful. Avoid generic motivation, forced vulnerability, engagement bait, excessive emojis, and phrases like “game-changer,” “in today's fast-paced world,” or “here's the thing.”

Preserve the facts and do not invent results, experiences, quotes, or opinions. End with a simple, relevant question only if it feels natural.

Length: [SHORT / MEDIUM / LONG]
Notes:
[PASTE NOTES]`,
    color: "bg-[#eef2e8]",
  },
  {
    number: "04",
    use: "Clear + professional",
    title: "Human professional email",
    tip: "Replace the brackets with real context.",
    text: `Rewrite this email so it sounds professional, clear, and genuinely human.

Keep the request and all important details intact. Start with the reason for writing, use plain language, and make the next step obvious. Be warm without overdoing pleasantries. Remove corporate filler, unnecessary apologies, vague wording, and stiff phrases such as “I hope this email finds you well” unless they truly fit.

Do not change dates, names, commitments, prices, or facts. Do not make promises I did not make.

Relationship to recipient: [CONTEXT]
Desired tone: [FRIENDLY / DIRECT / FORMAL]
Email:
[PASTE EMAIL]

Return a subject line and the revised email.`,
    color: "bg-[#f9edcf]",
  },
  {
    number: "05",
    use: "Clean the giveaway phrases",
    title: "Remove common AI tells",
    tip: "Useful after you already like the structure.",
    text: `Edit the draft below to remove common AI-writing tells while preserving its meaning, facts, and tone.

Look for:
• repetitive sentence patterns and paragraph structures
• unnecessary headings, summaries, and “not only...but also” constructions
• generic transitions such as “moreover,” “furthermore,” and “in conclusion”
• empty intensifiers, inflated claims, and vague abstract language
• overused em dashes, forced three-item lists, and constant rhetorical questions
• canned openings and endings

Replace them only where needed with direct, specific, natural wording. Do not deliberately add typos, slang, fake anecdotes, or random quirks to “beat” detectors. Do not invent or remove factual claims.

Return the edited draft, then list the five most important changes.

Draft:
[PASTE DRAFT]`,
    color: "bg-[#f0e6e1]",
  },
  {
    number: "06",
    use: "Say more with less",
    title: "Concise rewrite",
    tip: "Choose a word limit that fits the format.",
    text: `Cut this draft to approximately [WORD COUNT] words without making it sound robotic.

Keep the core message, essential facts, names, numbers, qualifications, and call to action. Remove repetition, throat-clearing, filler, obvious explanations, and weak modifiers. Combine ideas where that improves flow, but keep enough sentence variety to sound natural.

Use plain, precise language. Do not add new claims or make the message more certain than the source. If the word limit would require dropping an important detail, tell me what would be lost.

Draft:
[PASTE DRAFT]`,
    color: "bg-[#eee9f5]",
  },
  {
    number: "07",
    use: "Last check before posting",
    title: "Final self-edit pass",
    tip: "Run this last, then read the result aloud yourself.",
    text: `Act as a careful human editor. Review the draft below one final time before I publish it.

Check for clarity, natural flow, repetition, awkward phrasing, unsupported claims, factual inconsistencies, accidental changes in meaning, and anything that sounds generic or performative. Preserve my voice and do not rewrite simply to show activity.

Make only changes that materially improve the piece. Do not invent facts, citations, personal experiences, or certainty. Flag anything I need to verify.

Return:
1. The final edited draft
2. “Verify before publishing” with any questionable claims, links, names, dates, or numbers
3. A one-sentence explanation of the most important edit

Draft:
[PASTE FINAL DRAFT]`,
    color: "bg-[#e9f0ef]",
  },
];

async function copyText(text: string) {
  if (navigator.clipboard && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return;
  }
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.readOnly = true;
  textarea.className = "fixed left-[-9999px] top-0";
  document.body.appendChild(textarea);
  textarea.select();
  const copied = document.execCommand("copy");
  textarea.remove();
  if (!copied) throw new Error("Unable to copy");
}

function CopyButton({ prompt }: { prompt: Prompt }) {
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const timeout = useRef<number>();

  useEffect(() => () => window.clearTimeout(timeout.current), []);

  const copy = async () => {
    window.clearTimeout(timeout.current);
    try {
      await copyText(prompt.text);
      setStatus("copied");
    } catch {
      setStatus("error");
    }
    timeout.current = window.setTimeout(() => setStatus("idle"), 2400);
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={`Copy ${prompt.title}`}
      aria-live="polite"
      className="mt-auto flex min-h-12 w-full items-center justify-center gap-2 rounded-full border-2 border-[#17211d] px-5 text-sm font-black transition hover:bg-[#17211d] hover:text-white focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#fa6b45] sm:w-fit"
    >
      <span aria-hidden="true">{status === "copied" ? "✓" : "⧉"}</span>
      {status === "copied" ? "Copied!" : status === "error" ? "Select the prompt and copy" : "Copy prompt"}
    </button>
  );
}

const HumanizerPrompts = () => (
  <main className="min-h-screen bg-[#f7f0e5] font-sans text-[#17211d] selection:bg-[#ffd05b]">
    <Helmet>
      <title>7 AI Humanizer Prompts That Sound Like You | Deon Menezes</title>
      <meta name="description" content="Copy seven practical prompts to make AI-assisted writing clearer, more natural, and more like your own voice—without inventing facts." />
      <link rel="canonical" href="https://virelity.com/resources/humanizer" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="7 AI Humanizer Prompts That Actually Sound Human" />
      <meta property="og:description" content="Copy-and-paste prompts for natural captions, emails, concise rewrites, voice matching, and a final self-edit." />
      <meta property="og:url" content="https://virelity.com/resources/humanizer" />
      <meta property="og:image" content="https://virelity.com/humanizer-prompts-og.png" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="7 AI Humanizer Prompts That Actually Sound Human" />
      <meta name="twitter:description" content="Make AI-assisted writing sound clearer, warmer, and more like you." />
      <meta name="twitter:image" content="https://virelity.com/humanizer-prompts-og.png" />
    </Helmet>

    <header className="absolute left-1/2 top-0 z-10 flex w-full max-w-[1180px] -translate-x-1/2 items-center justify-between px-5 py-5 sm:px-7 sm:py-6">
      <Link to="/resources" aria-label="Back to resources" className="font-mono text-lg font-black tracking-tighter">
        DEON<span className="text-[#fa6b45]">+</span>
      </Link>
      <a href="#prompts" className="border-b border-current pb-1 text-xs font-bold sm:text-sm">Get the prompts ↓</a>
    </header>

    <section id="top" className="relative flex min-h-[720px] flex-col items-center justify-center overflow-hidden bg-[radial-gradient(circle_at_75%_20%,#ffd05b_0,transparent_24%),linear-gradient(135deg,#f8efdf,#efe6d8)] px-5 pb-24 pt-32 text-center sm:min-h-[780px] sm:px-7">
      <div aria-hidden="true" className="absolute -left-16 top-1/3 h-48 w-48 rotate-12 rounded-full border-2 border-[#17211d]/10" />
      <p className="mb-6 font-mono text-xs font-black uppercase tracking-[0.17em] text-[#d94b2c]">Free writing toolkit · 7 prompts</p>
      <h1 className="max-w-6xl font-serif text-[clamp(3.5rem,14vw,5.5rem)] font-normal leading-[0.9] tracking-[-0.065em] sm:text-[clamp(4.5rem,8.5vw,8rem)]">
        Make AI writing
        <br />
        sound more like <em className="font-normal text-[#e95431]">you.</em>
      </h1>
      <p className="mb-8 mt-8 max-w-2xl text-base leading-relaxed sm:text-xl">
        Prompts that cut the robotic filler, keep your meaning intact, and help your real voice come through.
      </p>
      <a href="#prompts" className="flex min-h-[52px] items-center gap-5 rounded-full bg-[#17211d] px-7 text-sm font-black text-white transition-transform hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-4 focus-visible:outline-offset-4 focus-visible:outline-[#fa6b45]">
        Pick a prompt <span aria-hidden="true">↘</span>
      </a>
      <p className="mt-3 text-xs opacity-60">No sign-up. Copy, customize, and review.</p>
    </section>

    <section className="mx-auto grid max-w-[1124px] gap-8 px-5 py-20 md:grid-cols-3 md:px-7 md:py-24">
      {[
        ["Start with your words", "Give the AI a real draft, notes, or writing samples. Your input is the voice."],
        ["Tell it what to protect", "Names, numbers, facts, meaning, nuance, and your intended audience all matter."],
        ["Read it before you post", "AI is an editor, not the author of your life. Check every claim and make the final call."],
      ].map(([title, text], index) => (
        <div key={title} className="border-t-2 border-[#17211d] pt-5">
          <span className="font-mono text-xs font-black text-[#e95431]">0{index + 1}</span>
          <h2 className="mt-4 font-serif text-3xl leading-none tracking-[-0.04em]">{title}</h2>
          <p className="mt-4 text-sm leading-relaxed opacity-70">{text}</p>
        </div>
      ))}
    </section>

    <section id="prompts" className="border-t border-[#17211d]/15 px-5 py-20 md:px-7 md:py-28">
      <div className="mx-auto mb-12 max-w-[1124px]">
        <p className="mb-4 font-mono text-xs font-black uppercase tracking-[0.17em] text-[#e95431]">Copy · fill the brackets · paste</p>
        <h2 className="max-w-3xl font-serif text-[clamp(2.75rem,6vw,5rem)] font-normal leading-[0.95] tracking-[-0.055em]">Choose the job your draft needs.</h2>
      </div>
      <div className="mx-auto grid max-w-[1124px] gap-6 md:grid-cols-2">
        {prompts.map((prompt) => (
          <article key={prompt.number} className={`flex flex-col rounded-sm border border-[#17211d]/15 p-6 md:min-h-[590px] md:p-8 ${prompt.color}`}>
            <div className="mb-8 flex items-start justify-between gap-4">
              <span className="font-serif text-3xl italic text-[#e95431]">{prompt.number}</span>
              <span className="text-right font-mono text-[0.65rem] font-black uppercase tracking-[0.14em]">{prompt.use}</span>
            </div>
            <h3 className="font-serif text-[clamp(2rem,4vw,3rem)] font-normal leading-none tracking-[-0.045em]">{prompt.title}</h3>
            <p className="mb-6 mt-3 text-sm leading-relaxed opacity-65">{prompt.tip}</p>
            <div className="mb-6 flex-1 overflow-auto border-l-[3px] border-[#fa6b45] bg-white/65 p-5">
              <pre className="whitespace-pre-wrap font-sans text-sm leading-relaxed">{prompt.text}</pre>
            </div>
            <CopyButton prompt={prompt} />
          </article>
        ))}
      </div>
    </section>

    <section className="bg-[#17211d] px-5 py-20 text-[#f7f0e5] md:px-7 md:py-24">
      <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-[80px_1fr]">
        <div aria-hidden="true" className="flex h-16 w-16 items-center justify-center rounded-full bg-[#ffd05b] font-serif text-3xl text-[#17211d]">!</div>
        <div>
          <p className="mb-4 font-mono text-xs font-black uppercase tracking-[0.17em] text-[#ffd05b]">Keep it honest</p>
          <h2 className="font-serif text-[clamp(2.5rem,5vw,4rem)] font-normal leading-none tracking-[-0.05em]">Humanizing is editing—not pretending.</h2>
          <p className="mt-6 leading-relaxed text-white/70">
            Use these prompts to clarify your own ideas and voice. Review the output, verify every fact, and keep responsibility for what you publish. Don’t use AI to impersonate someone, fabricate lived experience, hide plagiarism, or deceive people about expertise or authorship where disclosure is required.
          </p>
        </div>
      </div>
    </section>

    <footer className="bg-[#fa6b45] px-5 py-8 text-[#17211d] sm:px-7">
      <div className="mx-auto flex min-h-14 max-w-[1124px] flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <Link to="/resources" className="font-mono text-lg font-black tracking-tighter">DEON+</Link>
        <p className="text-xs font-semibold">Practical AI tips, made human.</p>
        <p className="text-xs">© {new Date().getFullYear()} Deon Menezes</p>
      </div>
    </footer>
  </main>
);

export default HumanizerPrompts;
