import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// for GitHub Pages deployment
const isGitHubPages = process.env.GITHUB_PAGES === "true";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: isGitHubPages ? "/portfolio/" : "/", // Adjust the base path for GitHub Pages
});
