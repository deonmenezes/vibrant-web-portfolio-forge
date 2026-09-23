/**
 * Post-build SEO pass.
 *
 * The site is a client-rendered SPA, so without this every URL would serve the
 * homepage <head> to crawlers and link-preview bots (LinkedIn, WhatsApp, X,
 * Slack) that do not run JavaScript. For each route in src/data/seo-routes.json
 * this writes dist/<route>/index.html with that route's title, description,
 * canonical, Open Graph / Twitter tags and JSON-LD, then regenerates
 * dist/sitemap.xml from the same config. Vercel serves these static files
 * ahead of the SPA rewrite in vercel.json.
 */
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");
const { site, routes } = JSON.parse(readFileSync(join(root, "src/data/seo-routes.json"), "utf8"));
const template = readFileSync(join(dist, "index.html"), "utf8");
const today = new Date().toISOString().slice(0, 10);

// Resource branch pages (/resources/:branchSlug) come from src/data/resources.ts.
const resourcesSrc = readFileSync(join(root, "src/data/resources.ts"), "utf8");
const branchRe = /^ {4}slug: "([^"]+)",\n {4}name: "([^"]+)",\n {4}shortName: "[^"]*",\n {4}tagline: "([^"]+)",/gm;
for (const [, slug, name, tagline] of resourcesSrc.matchAll(branchRe)) {
  const path = `/resources/${slug}`;
  if (routes[path]) continue;
  routes[path] = {
    title: `Free ${name} Resources & Courses | Virelity`,
    description: `Curated free ${name} study resources: ${tagline}. Courses, books, videos and tools from MIT OCW, Stanford, YouTube and GitHub.`,
    keywords: `free ${name.toLowerCase()} courses, learn ${name.toLowerCase()}, ${name.toLowerCase()} resources, ${tagline.toLowerCase()}`,
    priority: 0.6,
    changefreq: "monthly",
  };
}

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const abs = (path) => (path === "/" ? `${site.url}/` : `${site.url}${path}`);

const titleCase = (seg) =>
  seg.split("-").map((w) => (w.length <= 3 && w !== "pay" ? w.toUpperCase() : w[0].toUpperCase() + w.slice(1))).join(" ");

function breadcrumbs(path) {
  const items = [{ "@type": "ListItem", position: 1, name: "Home", item: `${site.url}/` }];
  let acc = "";
  path.split("/").filter(Boolean).forEach((seg, i) => {
    acc += `/${seg}`;
    const known = routes[acc];
    const name = known?.service ?? (known?.title ? known.title.split(" | ")[0].split(":")[0] : titleCase(seg));
    items.push({ "@type": "ListItem", position: i + 2, name, item: abs(acc) });
  });
  return { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items };
}

function jsonLd(path, meta) {
  const blocks = [];
  if (path !== "/") blocks.push(breadcrumbs(path));
  if (meta.service) {
    blocks.push({
      "@context": "https://schema.org",
      "@type": "Service",
      name: meta.service,
      serviceType: meta.service,
      description: meta.description,
      url: abs(path),
      provider: { "@id": `${site.url}/#organization` },
      areaServed: "Worldwide",
    });
  }
  if (meta.type === "article") {
    blocks.push({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: meta.title.split(" | ")[0],
      description: meta.description,
      url: abs(path),
      mainEntityOfPage: abs(path),
      image: meta.image ?? site.defaultImage,
      author: { "@type": "Person", name: "Deon Menezes", url: `${site.url}/deonmenezes` },
      publisher: { "@id": `${site.url}/#organization` },
    });
  }
  return blocks
    .map((b) => `<script type="application/ld+json">${JSON.stringify(b).replace(/</g, "\\u003c")}</script>`)
    .join("\n    ");
}

function setMeta(html, attr, key, value) {
  const re = new RegExp(`(<meta[^>]* ${attr}="${key}" content=")[^"]*(")`);
  if (!re.test(html)) throw new Error(`index.html is missing <meta ${attr}="${key}">`);
  return html.replace(re, `$1${esc(value)}$2`);
}

function render(path, meta) {
  const url = abs(meta.canonical ?? path);
  const image = meta.image ?? site.defaultImage;
  let html = template.replace(/<title[^>]*>[^<]*<\/title>/, `<title>${esc(meta.title)}</title>`);
  html = setMeta(html, "name", "description", meta.description);
  html = setMeta(html, "name", "keywords", meta.keywords ?? "");
  html = setMeta(html, "name", "robots", meta.noindex ? "noindex, follow" : "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1");
  html = setMeta(html, "property", "og:title", meta.title);
  html = setMeta(html, "property", "og:description", meta.description);
  html = setMeta(html, "property", "og:url", url);
  html = setMeta(html, "property", "og:image", image);
  html = setMeta(html, "property", "og:type", meta.type ?? "website");
  html = setMeta(html, "name", "twitter:title", meta.title);
  html = setMeta(html, "name", "twitter:description", meta.description);
  html = setMeta(html, "name", "twitter:image", image);
  html = html.replace(/(<link[^>]* rel="canonical" href=")[^"]*(")/, `$1${url}$2`);
  html = html.replace("<!--route-jsonld-->", jsonLd(path, meta));
  return html;
}

let written = 0;
for (const [path, entry] of Object.entries(routes)) {
  const meta = entry.alias ? { ...routes[entry.alias], canonical: entry.alias } : entry;
  const file = path === "/" ? join(dist, "index.html") : join(dist, path.slice(1), "index.html");
  mkdirSync(dirname(file), { recursive: true });
  writeFileSync(file, render(path, meta));
  written++;
}

const urls = Object.entries(routes)
  .filter(([, m]) => !m.alias && !m.noindex)
  .map(([path, m]) =>
    `  <url>\n    <loc>${abs(path)}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${m.changefreq ?? "monthly"}</changefreq>\n    <priority>${(m.priority ?? 0.5).toFixed(1)}</priority>\n  </url>`,
  );
writeFileSync(
  join(dist, "sitemap.xml"),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`,
);

console.log(`prerender-seo: wrote ${written} route pages and a ${urls.length}-URL sitemap`);
