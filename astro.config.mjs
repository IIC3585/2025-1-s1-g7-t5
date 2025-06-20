// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://iic3585-t5-g7.netlify.app",
  integrations: [preact()],
});