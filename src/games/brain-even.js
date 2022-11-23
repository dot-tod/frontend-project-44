import { roundsQnty, getRandomInt, game } from '../index.js';

const getQuestions = () => {
  const questions = [];
  for (let i = 0; i < roundsQnty; i += 1) {
    const randomInt = getRandomInt(0, 99);
    questions.push(randomInt);
  }
  return questions;
};

const getRightAnswers = (questions) => {
  const rightAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const rightAnswer = (questions[i] % 2 === 0) ? 'yes' : 'no';
    rightAnswers.push(rightAnswer);
  }
  return rightAnswers;
};

const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
const questions = getQuestions();
const rightAnswers = getRightAnswers(questions);

const brainEven = () => {
  game(gameRules, questions, rightAnswers);
};

export default brainEven;
