const fse = require('fs-extra')
const path = require('path')

const pkgDir = path.join(__dirname, '..', 'packages', 'observable-hooks-rxjs7')

fse.ensureDirSync(pkgDir)
fse.copySync(path.join(__dirname, '..', 'packages', 'observable-hooks'), pkgDir)

const pkgJson = require(path.resolve(pkgDir, 'package.json'))
pkgJson.private = true
pkgJson.name = 'observable-hooks-rxjs7'
pkgJson.devDependencies = Object.assign({}, pkgJson.devDependencies || {}, {
  rxjs: '^7.1.0',
  typescript: '^4.2.0'
})
fse.outputJSONSync(path.join(pkgDir, 'package.json'), pkgJson)

const jestConfig = fse.readFileSync(path.join(pkgDir, 'jest.config.js'), 'utf8')
fse.writeFileSync(
  path.join(pkgDir, 'jest.config.js'),
  jestConfig.replace('observable-hooks', 'observable-hooks-rxjs7')
)
