'use strict';
const args = require('args');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
//const inquirer = require('inquirer');
const lounger = require('./src/lounger');


const start = async(opts) => {
  clear();
  console.log(chalk.blue(figlet.textSync('Expressive', {horizontalLayout: 'full'})));
  await lounger.load();
  console.log(chalk.green(await lounger.commands.version()));
}

start({});