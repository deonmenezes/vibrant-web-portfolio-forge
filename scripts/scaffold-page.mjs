#!/usr/bin/env node
// Scaffold a new page (or service page) and print the exact <Route> line
// to add to src/App.tsx. Keeps lazy-route discipline by default.
//
// Usage: node scripts/scaffold-page.mjs <PageName> [--service]

import { writeFileSync, existsSync, mkdirSync } from "node:fs";
import { resolve, dirname } from "node:path";

const args = process.argv.slice(2).filter((a) => a !== "--");
const isService = args.includes("--service");
const name = args.find((a) => !a.startsWith("--"));

if (!name) {
  console.error("usage: scaffold-page.mjs <PageName> [--service]");
  process.exit(2);
}

if (!/^[A-Z][A-Za-z0-9]*$/.test(name)) {
  console.error(`name must be PascalCase, got: ${name}`);
  process.exit(2);
}

const slug = name
  .replace(/([a-z0-9])([A-Z])/g, "$1-$2")
  .replace(/([A-Z])([A-Z][a-z])/g, "$1-$2")
  .toLowerCase();

const dir = isService ? "src/pages/services" : "src/pages";
const filename = isService ? `${slug}.tsx` : `${name}.tsx`;
const filepath = resolve(process.cwd(), dir, filename);

if (existsSync(filepath)) {
  console.error(`refusing to overwrite: ${filepath}`);
  process.exit(1);
}

const importPath = isService ? `./pages/services/${slug}` : `./pages/${name}`;
const routePath = isService ? `/services/${slug}` : `/${slug}`;

const template = `import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ${name}() {
  return (
    <>
      <Helmet>
        <title>${name} | Virelity.com</title>
        <meta name="description" content="${name} — describe this page in 150 chars." />
        <link rel="canonical" href="https://virelity.com${routePath}" />
      </Helmet>

      <Navbar />

      <motion.main
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.4 }}
        className="min-h-screen pt-24 pb-16"
      >
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">${name}</h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Replace this placeholder with the page content.
          </p>
        </div>
      </motion.main>

      <Footer />
    </>
  );
}
`;

mkdirSync(dirname(filepath), { recursive: true });
writeFileSync(filepath, template);

console.log(`✓ wrote ${dir}/${filename}`);
console.log("");
console.log("Add this line to src/App.tsx (next to the other lazy imports):");
console.log("");
console.log(`  const ${name} = lazy(() => import("${importPath}"));`);
console.log("");
console.log("And register the route inside <Routes>:");
console.log("");
console.log(`  <Route path="${routePath}" element={<${name} />} />`);
console.log("");
console.log(`Then: npm run verify:fast`);
