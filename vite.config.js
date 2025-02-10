import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/blake-nelson-dev.github.io/",
  css: {
    postcss: './postcss.config.js'
  }
});