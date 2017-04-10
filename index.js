'use strict';
const args = require('args');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const fs = require('fs');
const inquirer = require('inquirer');
const lounger = require('./src/lounger');

args.option('version', 'get version of cli');

const flags = args.parse(process.argv);

clear();
console.log(chalk.blue(figlet.textSync('Expressive', {horizontalLayout: 'full'})));

lounger.load().then(() => {
  if(flags.version) console.log(lounger.commands.version());
});

function getNextAction(callback) {
  var questions = [
    {
      name: 'action',
      type: 'input',
      message: 'enter the next action you want to perform:',
      validate: function( value ) {
        if (value.length) {
          return true;
        } else {
          return 'Please enter the next action';
        }
      }
    }
  ];

  inquirer.prompt(questions).then(callback);
}

//getNextAction(() => console.log(arguments));