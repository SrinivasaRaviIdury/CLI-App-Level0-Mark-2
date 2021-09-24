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
function play(question, answer) {
  var userResponse = readlineSync.question(question);
  if (answer.toUpperCase() === userResponse.toUpperCase()) {
    log(chalk.green('Correct!'));
    score = score + 1;
  } else {
    log(chalk.red('Wrong!!'));
    score = score - 1;
  }
  log('---------------');
}

quizQuestions = [
  {
    question: 'How do you take input from CLI(library name)  ',
    answer: 'readlineSync',
  },
  {
    question: 'Using Which function you show output to console ',
    answer: 'console.log',
  },
  {
    question: 'How do you take input from browser console ',
    answer: 'prompt',
  },
  {
    question: 'How do you alert user in Javascript (keyword) ',
    answer: 'alert',
  },
  {
    question:
      'Index of first element in array starts from in javascript (Number) ',
    answer: '0',
  },
  {
    question: 'Is Javascript case sensitive (Yes or No) ',
    answer: 'Yes',
  },
];
for (let i = 0; i < quizQuestions.length; i++) {
  var que = quizQuestions[i];
  play(que.question, que.answer);
}
log('Your Score is', score > 0 ? score : 0);

for (let i = 0; i < highScore.length; i++) {
  log('High Score ' + highScore[i].name + ' ' + highScore[i].score);
}
log('Send Screen Shot If You Beaten High Score ');
