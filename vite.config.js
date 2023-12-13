import { defineConfig } from "@solidjs/start/config";
import { netlify } from 'unenv'

export default defineConfig({
  start: {
    server: {
      preset: "netlify-edge",
      minify: false,
      unenv: netlify
    }
  }
});
