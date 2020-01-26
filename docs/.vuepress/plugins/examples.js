const path = require('path')
const fs = require('fs')

module.exports = {
  additionalPages: fs
    .readdirSync(path.resolve(__dirname, '../../../examples'))
    .map(name => ({
      path: `/examples/${name}.html`,
      filePath: path.resolve(__dirname, `../../../examples/${name}/README.md`)
    }))
}
