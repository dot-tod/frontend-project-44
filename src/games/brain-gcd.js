import {
  roundsQnty, getCommonDivisors, getRandomInt, game,
} from '../index.js';

const getQuestions = () => {
  const questions = [];
  for (let i = 0; i < roundsQnty; i += 1) {
    const firstRandomNumber = getRandomInt(1, 99);
    const secondRandomNumber = getRandomInt(1, 99);
    questions.push(`${firstRandomNumber} ${secondRandomNumber}`);
  }
  return questions;
};

const getRightAnswers = (questions) => {
  const rightAnswers = [];
  for (let i = 0; i < roundsQnty; i += 1) {
    const question = questions[i].split(' ');
    const firstNum = Number(question[0]);
    const secondNum = Number(question[1]);
    const commonDivisors = getCommonDivisors(firstNum, secondNum);
    const maxCommonDivisor = commonDivisors.at(-1);
    rightAnswers.push(String(maxCommonDivisor));
  }
  return rightAnswers;
};

const gameRules = 'Find the greatest common divisor of given numbers.';
const questions = getQuestions();
const rightAnswers = getRightAnswers(questions);

const brainGcd = () => {
  game(gameRules, questions, rightAnswers);
};

export default brainGcd;
