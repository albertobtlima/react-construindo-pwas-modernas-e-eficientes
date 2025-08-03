import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const vitePWA = VitePWA({
  registerType: "autoUpdate",
  strategies: "injectManifest",
  manifest: {
    id: "/",
    name: "Jornada Milhas",
    short_name: "Jornada",
    theme_color: "#5a189a",
    background_color: "#09001a",
    display: "standalone",
    description: "Site do Jornada Milhas",
    orientation: "portrait",
    start_url: "/",
    icons: [
      {
        purpose: "maskable",
        sizes: "512x512",
        src: "icon512_maskable.png",
        type: "image/png",
      },
      {
        purpose: "any",
        sizes: "512x512",
        src: "icon512_rounded.png",
        type: "image/png",
      },
    ],
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitePWA],
});
