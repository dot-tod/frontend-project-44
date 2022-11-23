import { roundsQnty, getGcd, game } from '../index.js';

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
