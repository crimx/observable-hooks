import { defineConfig } from "tsup";
import mangleCache from "./mangle-cache.json";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["cjs", "esm"],
  target: "esnext",
  clean: true,
  treeshake: true,
  dts: true,
  splitting: false,
  sourcemap: false,
  minify: Boolean(process.env.MINIFY),
  esbuildOptions: options => {
    options.mangleProps = /[^_]_$/;
    options.mangleCache = mangleCache;
  },
});
