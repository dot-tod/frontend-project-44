import { roundsQnty, getDivisors, game } from '../index.js';

const getQuestions = () => {
  const questions = [];
  for (let i = 0; i < roundsQnty; i += 1) {
    const question = Math.floor(Math.random() * 100);
    questions.push(question);
  }
  return questions;
};

const getRightAnswers = (questions) => {
  const rightAnswers = [];
  for (let i = 0; i < 3; i += 1) {
    const question = questions[i];
    const divisors = getDivisors(question);
    const rightAnswer = divisors.length === 1 ? 'yes' : 'no';
    rightAnswers.push(rightAnswer);
  }
  return rightAnswers;
};

const brainPrime = () => {
  const gameRules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  const questions = getQuestions();
  const rightAnswers = getRightAnswers(questions);
  game(gameRules, questions, rightAnswers);
};

export default brainPrime;
