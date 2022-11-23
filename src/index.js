import readlineSync from 'readline-sync';

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
const getGcd = (arr) => {
  const commonDividers = [];
  if (arr[0] % arr[1] === 0) return arr[1];
  if (arr[1] % arr[0] === 0) return arr[0];
  for (let i = 1; i <= arr[0] / 2; i += 1) {
    if (arr[0] % i === 0 && arr[1] % i === 0) commonDividers.push(i);
  }
  return commonDividers.at(-1);
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
  roundsQnty, getGcd, getArithmeticSequence, game,
};
