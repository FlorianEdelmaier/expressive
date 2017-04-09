'use strict';
const args = require('args');
const chalk = require('chalk');
const clear = require('clear');
const figlet = require('figlet');
const fs = require('fs');
const inquirer = require('inquirer');

clear();
console.log(chalk.blue(figlet.textSync('Expressive', {horizontalLayout: 'full'})));

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

getNextAction(() => console.log(arguments));