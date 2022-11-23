import {
  roundsQnty, getCommonDivisors, getRandomInt, game,
} from '../index.js';

const getQuestions = () => {
  const questions = [];
  for (let i = 0; i < roundsQnty; i += 1) {
    const firstRandomNumber = getRandomInt(0, 99);
    const secondRandomNumber = getRandomInt(0, 99);
    questions.push(`${firstRandomNumber} ${secondRandomNumber}`);
  }
  return questions;
};

const getRightAnswers = (questions) => {
  const rightAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const question = questions[i].split(' ');
    const commonDivisors = getCommonDivisors(question);
    const maxCommonDivisor = commonDivisors.at(-1);
    rightAnswers.push(String(maxCommonDivisor));
  }
  return rightAnswers;
};

const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const questions = getQuestions();
const rightAnswers = getRightAnswers(questions);

const brainGcd = () => {
  game(gameRules, questions, rightAnswers);
};

export default brainGcd;
