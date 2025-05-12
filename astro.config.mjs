// @ts-check
import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
    vite: {
        plugins: [tailwindcss()],
    },

    integrations: [mdx(), sitemap(), react()],
    i18n: {
        locales: ["en", "zh-CN"],
        defaultLocale: "en",
    },
});
