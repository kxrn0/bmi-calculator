import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

const options = {
  workbox: { globPatterns: ["**/*"] },
  includeAssets: ["**/*"],
  manifest: {
    theme_color: "#232241",
    background_color: "#777777",
    display: "standalone",
    scope: "/bmi-calculator",
    start_url: "/bmi-calculator",
    short_name: "BMI",
    description: "BMI Calculator",
    name: "BMI Calculator",
    icons: [
      {
        src: "/icons/manifest-icon-192.maskable.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/manifest-icon-192.maskable.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable",
      },
      {
        src: "/icons/manifest-icon-512.maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icons/manifest-icon-512.maskable.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  },
};

// https://vitejs.dev/config/
export default defineConfig({
  base: "/bmi-calculator/",
  plugins: [react(), VitePWA(options)],
});
