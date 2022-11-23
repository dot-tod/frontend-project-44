import { roundsQnty, game } from '../index.js';

const getGcd = (arr) => {
  const commonDividers = [];
  if (arr[0] % arr[1] === 0) return arr[1];
  if (arr[1] % arr[0] === 0) return arr[0];
  for (let i = 1; i <= arr[0] / 2; i += 1) {
    if (arr[0] % i === 0 && arr[1] % i === 0) commonDividers.push(i);
  }
  return commonDividers.at(-1);
};

const getQuestions = () => {
  const questions = [];
  for (let i = 0; i < roundsQnty; i += 1) {
    const firstRandomNumber = Math.floor(Math.random() * 100);
    const secondRandomNumber = Math.floor(Math.random() * 100);
    questions.push(`${firstRandomNumber} ${secondRandomNumber}`);
  }
  return questions;
};

const getRightAnswers = (questions) => {
  const rightAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const question = questions[i].split(' ');
    const rightAnswer = getGcd(question);
    rightAnswers.push(String(rightAnswer));
  }
  return rightAnswers;
};

const brainGcd = () => {
  const gameRules = 'Find the greatest common divisor of given numbers.';
  const questions = getQuestions();
  const rightAnswers = getRightAnswers(questions);
  game(gameRules, questions, rightAnswers);
};

export default brainGcd;
