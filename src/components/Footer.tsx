import { Link } from "react-router-dom";
import { Instagram, Linkedin } from "lucide-react";
import { BOOK_CALL_URL, CONTACT_EMAIL } from "@/lib/contact";

const columns = [
  {
    title: "Company",
    links: [
      { name: "About", to: "/about" },
      { name: "Work", to: "/portfolio" },
      { name: "Careers", to: "/career" },
      { name: "Contact", to: "/contact" },
    ],
  },
  {
    title: "Explore",
    links: [
      { name: "Resources", to: "/resources" },
      { name: "Blog", to: "/blog" },
      { name: "Will it go viral?", to: "/viral", external: true },
      { name: "Founder", to: "/deonmenezes" },
    ],
  },
];

export const Footer = () => (
  <footer className="border-t border-white/10 bg-black text-white">
    <div className="container grid gap-12 py-16 md:grid-cols-[2fr_1fr_1fr_1.4fr]">
      <div>
        <img src="/virelity_logo_transparent.png" alt="Virelity" className="h-8 w-auto" height="32" />
        <p className="mt-5 max-w-xs leading-relaxed text-white/55">
          An AI transformation company. We help businesses put AI to work, from first audit to full rollout.
        </p>
        <div className="mt-6 flex gap-3">
          <a
            href="https://www.instagram.com/_virelity_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="border-2 border-white/20 p-2 text-white/70 transition-colors hover:border-vision-gold hover:text-vision-gold"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/company/quizitt"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="border-2 border-white/20 p-2 text-white/70 transition-colors hover:border-vision-gold hover:text-vision-gold"
          >
            <Linkedin className="h-5 w-5" />
          </a>
        </div>
      </div>

      {columns.map((col) => (
        <nav key={col.title} aria-label={col.title}>
          <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/40">{col.title}</h3>
          <ul className="space-y-3">
            {col.links.map((link) => (
              <li key={link.name}>
                {link.external ? (
                  <a href={link.to} className="text-white/75 transition-colors hover:text-vision-gold">
                    {link.name}
                  </a>
                ) : (
                  <Link to={link.to} className="text-white/75 transition-colors hover:text-vision-gold">
                    {link.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      ))}

      <div>
        <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-white/40">Get in touch</h3>
        <ul className="space-y-3 text-white/75">
          <li>
            <a href={`mailto:${CONTACT_EMAIL}`} className="break-all transition-colors hover:text-vision-gold">
              {CONTACT_EMAIL}
            </a>
          </li>
          <li>
            <a href={BOOK_CALL_URL} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-vision-gold">
              WhatsApp +91 81047 96542
            </a>
          </li>
          <li className="text-white/50">San Francisco · Mumbai</li>
        </ul>
      </div>
    </div>

    <div className="border-t border-white/10">
      <div className="container flex flex-col gap-3 py-6 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Virelity. All rights reserved.</p>
        <div className="flex gap-6">
          <Link to="/privacy" className="hover:text-white">Privacy</Link>
          <Link to="/pay" className="hover:text-white">Pay an invoice</Link>
        </div>
      </div>
    </div>
  </footer>
);
