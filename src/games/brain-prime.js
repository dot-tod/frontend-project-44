import {
  MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER, getRandomInt,
} from '../math.js';
import { ROUNDS_COUNT, playGame } from '../index.js';

const getDivisors = (num) => {
  const divisors = [];
  for (let i = 1; i <= num / 2; i += 1) {
    if (num % i === 0) divisors.push(i);
  }
  return divisors;
};

const getQuestions = () => {
  const questions = [];
  for (let questionNumber = 0; questionNumber < ROUNDS_COUNT; questionNumber += 1) {
    const question = getRandomInt(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
    questions.push(question);
  }
  return questions;
};

const getRightAnswers = (questions) => {
  const rightAnswers = [];
  for (let questionNumber = 0; questionNumber < ROUNDS_COUNT; questionNumber += 1) {
    const question = questions[questionNumber];
    const divisors = getDivisors(question);
    const rightAnswer = divisors.length === 1 ? 'yes' : 'no';
    rightAnswers.push(rightAnswer);
  }
  return rightAnswers;
};

const GAME_RULES = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const questions = getQuestions();
const rightAnswers = getRightAnswers(questions);

const brainPrime = () => {
  playGame(GAME_RULES, questions, rightAnswers);
};

export default brainPrime;
