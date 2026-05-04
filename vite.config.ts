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
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "next/navigation": path.resolve(__dirname, "./src/vite-mocks/next-navigation.ts"),
      "next/navigation.js": path.resolve(__dirname, "./src/vite-mocks/next-navigation.ts"),
    },
  },
  build: {
    target: "es2020",
    cssCodeSplit: true,
    sourcemap: false,
    chunkSizeWarningLimit: 1024,
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (!id.includes("node_modules")) return;
          if (id.includes("three") || id.includes("@react-three") || id.includes("@splinetool")) return "three";
          if (id.includes("framer-motion") || id.includes("lenis")) return "motion";
          if (id.includes("@radix-ui")) return "radix";
          if (id.includes("recharts") || id.includes("d3-")) return "charts";
          if (id.includes("react-router") || id.includes("react-dom") || id.includes("/react/")) return "react";
          return "vendor";
        },
      },
    },
  },
}));
