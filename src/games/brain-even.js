import { roundsQnty, game } from '../index.js';

const getQuestions = () => {
  const questions = [];
  for (let i = 0; i < roundsQnty; i += 1) {
    const randomInt = Math.floor(Math.random() * 100);
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

const brainEven = () => {
  const gameRules = 'Answer "yes" if the number is even, otherwise answer "no".';
  const questions = getQuestions();
  const rightAnswers = getRightAnswers(questions);
  game(gameRules, questions, rightAnswers);
};

export default brainEven;
