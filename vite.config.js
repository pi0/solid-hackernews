import { defineConfig } from "vite";
import solid from "solid-start/vite";
import deno from "solid-start-deno";

export default defineConfig({
  plugins: [solid({ adapter: deno() })],
});
