import { gzipSizeFromFileSync } from "gzip-size";
import { green, gray } from "yoctocolors";
import prettyBytes from "pretty-bytes";

console.log();
console.log(
  `${gray("gzip")} dist/index.mjs ${green(
    prettyBytes(gzipSizeFromFileSync("dist/index.mjs"))
  )}`
);
console.log(
  `${gray("gzip")} dist/index.js  ${green(
    prettyBytes(gzipSizeFromFileSync("dist/index.js"))
  )}`
);
