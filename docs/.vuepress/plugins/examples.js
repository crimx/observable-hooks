const path = require('path')
const fs = require('fs')

module.exports = {
  additionalPages: [...examplePages(), ...examplePages('-rxjs7')]
}

function examplePages(suffix = '') {
  return fs
    .readdirSync(path.resolve(__dirname, `../../../examples${suffix}`))
    .filter(name => !/\.md$/i.test(name))
    .map(name => ({
      path: `/examples/${name}${suffix}.html`,
      filePath: path.resolve(__dirname, `../../../examples${suffix}/${name}/README.md`)
    }))
}
