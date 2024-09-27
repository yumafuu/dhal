// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import deno from "@deno/astro-adapter";

export default defineConfig({
  output: "server",
  adapter: deno(),
  site: 'https://lexingtonthemes.com',
  integrations: [tailwind(),  sitemap()]
});
