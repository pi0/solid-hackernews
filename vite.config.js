import { defineConfig } from "vite";
import solid from "solid-start";
import deno from "solid-start-deno";

export default defineConfig({
  plugins: [solid({ adapter: deno() })],
});
