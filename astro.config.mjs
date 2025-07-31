// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

import globalConfig from "./src/config/global";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  site: globalConfig.siteInfos.siteLink,
  // base: globalConfig.siteInfos.siteGitHubRepo,

  integrations: [mdx(), sitemap(), react()],
  i18n: {
    locales: ["en", "zh"],
    defaultLocale: "zh",
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: true,
    },
  },

  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: "Bitcount Single",
        cssVariable: "--google-font-bitcount-single"
      },
      {
        provider: fontProviders.google(),
        name: "Fira Code",
        cssVariable: "--google-font-fira-code"
      }
    ],
    headingIdCompat: true,
  },

  prefetch: true,
});
