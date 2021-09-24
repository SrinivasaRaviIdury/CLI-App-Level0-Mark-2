var readlineSync = require('readline-sync');
var chalk = require('chalk');
var log = console.log;
var score = 0;
var highScore = [
  {
    name: 'Ravi',
    score: 6,
  },
  {
    name: 'Akhil',
    score: 6,
  },
];
var userInput = readlineSync.question('What is Your Name? ').toUpperCase();
log(chalk.blue(`Welcome To Quiz About Java Script`, userInput));
