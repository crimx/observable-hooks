const fs = require('fs').promises
const path = require('path')
const Terser = require('terser')
const gzipSize = require('gzip-size')
const prettyBytes = require('pretty-bytes')

const esmDir = path.join(__dirname, '../dist/esm')
const readmePath = path.join(__dirname, '../README.md')

main()

async function main() {
  const names = (await fs.readdir(esmDir)).filter(name => name.endsWith('.js'))
  let file = ''
  for (const name of names) {
    file += Terser.minify(await fs.readFile(path.join(esmDir, name), 'utf-8'))
      .code
  }

  const size = prettyBytes(await gzipSize(file))
  const readme = await fs.readFile(readmePath, 'utf-8')
  await fs.writeFile(
    readmePath,
    readme.replace(
      /\*\*.+\*\* compressed & gzipped/,
      `**${size}** compressed & gzipped`
    )
  )

  console.log(`\nGzipped size: ${size}\n`)
}
