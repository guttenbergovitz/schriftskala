#!/usr/bin/env node

import * as fs from 'fs';
import beautify from 'cssbeautify';

import { Command } from 'commander'
import { Skala } from './dist/index.mjs'
import chalk from 'chalk'
import figlet from 'figlet'
import inquirer from 'inquirer'

const program = new Command()

program
  .command('manual')
  .description('run skala by manual params')
  .requiredOption('-b, --base <base>', 'base size')
  .option('-s, --scale <scale>', 'scale', 1.313)
  .option('-lh, --lineheight <lineheight>', 'line height', 1.2)
  .option('-u, --unit <unit>', 'unit', 'px')
  .option('-p, --precision <precision>', 'output file', 2)
  .option('-f, --output <file>', 'file name', 'skala.css')
  .action((options) => {
    const { base, scale, lineheight, unit, precision } = options
    console.log(options)
    const skala = (new Skala(parseFloat(base), parseFloat(scale), parseFloat(lineheight), unit, parseFloat(precision))).generate(10,3)
    console.log(JSON.stringify(options, null, 2))
    console.log(chalk.green(figlet.textSync('SchriftSkala', { horizontalLayout: 'full', font: 'Caligraphy' })))
    console.dir(skala, { depth: null })
    const css = `
      :root {
        --ss-base: ${skala.base.printFontSize};
        ${skala.up.map((size, index) => ` --ss-up-${index}-fs: ${size.printFontSize};`).join('\n')}
        ${skala.up.map((size, index) => ` --ss-up-${index}-lh: ${size.printLineHeight};`).join('\n')}
        ${skala.down.map((size, index) => ` --ss-down-${index}-fs: ${size.printFontSize};`).join('\n')}
        ${skala.down.map((size, index) => ` --ss-down-${index}-lh: ${size.printLineHeight};`).join('\n')}
      }
    `
    const cleanCSS = beautify(css, { indent: '  ', autosemicolon: true })
    fs.writeFileSync(options.output, cleanCSS, (err) => {
      console.log(err)
      process.exit(1)
    })
  })



program
  .command('guided')
  .description('run skala in guided mode')
  .action(() => {
    console.log(chalk.green(figlet.textSync('SchriftSkala', { horizontalLayout: 'full', font: 'Caligraphy' })))
    inquirer.prompt([{
      type: 'number',
      name: 'base',
      message: 'Base size',
      default: 16
    }, {
      type: 'number',
      name: 'scale',
      message: 'Scale',
      default: 1.25
    }]).then((answers) => {
      const skala = new Skala(answers.base, parseFloat(answers.scale) )
      console.dir(skala, { depth: null })
      console.dir(skala.generate(5, 2), { depth: null })
      console.dir(skala.down(2).lh, { depth: null })
    })
  })

program.parse(process.argv)
