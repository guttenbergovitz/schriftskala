#!/usr/bin/env node

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
  .requiredOption('-s, --scale <scale>', 'scale')
  .requiredOption('-lh, --line-height <lineHeight>', 'line height')
  .option('-u, --unit <unit>', 'unit')
  .action((options) => {
    const { base, scale, lineHeight, unit } = options
    const skala = new Skala(base, scale, lineHeight, unit)
    console.log(JSON.stringify(options, null, 2))
    console.log(chalk.green(figlet.textSync('SchriftSkala', { horizontalLayout: 'full', font: 'Caligraphy' })))
    console.dir(skala, { depth: null })
    console.dir(skala.up(2), { depth: null })
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
