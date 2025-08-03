import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const vitePWA = VitePWA({
  registerType: "autoUpdate",
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
  workbox: {
    runtimeCaching: [
      {
        urlPattern: ({ url }) => {
          return url.pathname.startsWith("/image");
        },
        handler: "CacheFirst",
        options: {
          cacheName: "runtime-cache",
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
  devOptions: { enabled: true },
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
});
