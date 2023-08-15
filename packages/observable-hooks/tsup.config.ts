import { defineConfig } from "tsup";

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
});
