import readlineSync from 'readline-sync';
import * as _ from 'lodash';

const roundsQnty = 3;

const getUserName = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};
const printRules = (rules) => {
  console.log(rules);
};
const printQuestion = (question) => {
  console.log(`Question: ${question}`);
};
const getUserAnswer = () => {
  const userAnswer = readlineSync.question('Your answer: ');
  return userAnswer;
};
const checkUserAnswer = (userAnswer, rightAnswer) => {
  if (userAnswer === rightAnswer) {
    console.log('Correct!');
    return true;
  }
  return false;
};
const printWrongAnswer = (userName, wrongAnswer, rightAnswer) => {
  console.log(`'${wrongAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
};
const printIfWinner = (userName, score) => {
  if (score === roundsQnty) {
    console.log(`Congratulations, ${userName}!`);
  }
};
const getDivisors = (num) => {
  const divisors = [];
  for (let i = 1; i <= num / 2; i += 1) {
    if (num % i === 0) divisors.push(i);
  }
  return divisors;
};
const getCommonDivisors = (firstNum, secondNum) => {
  const firstNumDivisors = getDivisors(firstNum);
  const secondNumDivisors = getDivisors(secondNum);
  const commonDivisors = _.intersection(firstNumDivisors, secondNumDivisors);
  return commonDivisors;
};
const getArithmeticSequence = (sequenceLength) => {
  let currentTerm = Math.floor(Math.random() * 10);
  const commonDifference = Math.floor(Math.random() * 9 + 1);
  const sequence = [];
  for (let i = 0; i < sequenceLength; i += 1) {
    sequence.push(currentTerm);
    currentTerm += commonDifference;
  }
  return sequence;
};

const game = (gameRules, questions, rightAnswers) => {
  const userName = getUserName();
  printRules(gameRules);
  let score = 0;
  for (let i = 0; i < roundsQnty; i += 1) {
    printQuestion(questions[i]);
    const userAnswer = getUserAnswer();
    if (checkUserAnswer(userAnswer, rightAnswers[i])) {
      score += 1;
    } else {
      printWrongAnswer(userName, userAnswer, rightAnswers[i]);
      break;
    }
  }
  printIfWinner(userName, score);
};

export {
  roundsQnty, getDivisors, getCommonDivisors, getArithmeticSequence, game,
};
