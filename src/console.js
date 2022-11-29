import readlineSync from 'readline-sync';

const getUserName = () => {
  console.log('Welcome to the Brain Games!');
  let userName = readlineSync.question('May I have your name? ');
  while (userName === '') {
    console.log('Wrong name, please try again!');
    userName = readlineSync.question('May I have your name? ');
  }
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
const printWrongAnswer = (userName, wrongAnswer, rightAnswer) => {
  console.log(`'${wrongAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
  console.log(`Let's try again, ${userName}!`);
};
const printIfWinner = (userName, score, ROUNDS_COUNT) => {
  if (score === ROUNDS_COUNT) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export {
  getUserName, printRules, printQuestion, getUserAnswer, printWrongAnswer,
  printIfWinner,
};
