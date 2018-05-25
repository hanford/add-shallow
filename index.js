#!/usr/bin/env node

const { join, resolve } = require('path')
const fs = require('fs')
const toTitleCase = require('titlecase')
const chalk = require('chalk')
const { version } = require('./package.json')

let componentName

const program = require('commander')
  .version(version)
  .option('-p, --path [type]', 'generate shall render test in a custom path')
  // .arguments('<component-directory>')
  // .action(name => componentName = name)
  .parse(process.argv)

createTest()

function createTest () {
  const customPath = ('%s', program.path)

  if (customPath) {
    console.log(chalk.yellow(`using custom path: ${customPath}`))
  }

  const file = join(customPath || process.cwd(), 'index.test.js')
  const body = fs.readFileSync(resolve(__dirname, './test-template.js'), 'utf-8')

  fs.writeFileSync(file, body)

  console.log(chalk.green(`shallow render test created`))
}
