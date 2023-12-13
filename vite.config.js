import { defineConfig } from "@solidjs/start/config";
import { deno } from 'unenv'

console.log('>>', deno)

export default defineConfig({
  start: {
    server: {
      preset: "netlify-edge",
      minify: false,
      unenv: deno
    }
  }
});
