import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      // Provide a local mock for Next's `next/navigation` so packages that
      // import it (like @vercel/speed-insights) don't break in a non-Next
      // Vite environment. We alias both with and without the `.js` extension
      // because some packages import `next/navigation.js` explicitly.
      "next/navigation": path.resolve(__dirname, "./src/vite-mocks/next-navigation.ts"),
      "next/navigation.js": path.resolve(__dirname, "./src/vite-mocks/next-navigation.ts"),
    },
  },
}));
