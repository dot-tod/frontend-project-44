import {
  MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER, getRandomInt,
} from '../math.js';
import { ROUNDS_COUNT, playGame } from '../index.js';

const getQuestions = () => {
  const questions = [];
  for (let questionNumber = 0; questionNumber < ROUNDS_COUNT; questionNumber += 1) {
    const randomInt = getRandomInt(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
    questions.push(randomInt);
  }
  return questions;
};

const getRightAnswers = (questions) => {
  const rightAnswers = [];
  for (let questionNumber = 0; questionNumber < ROUNDS_COUNT; questionNumber += 1) {
    const rightAnswer = (questions[questionNumber] % 2 === 0) ? 'yes' : 'no';
    rightAnswers.push(rightAnswer);
  }
  return rightAnswers;
};

const GAME_RULES = 'Answer "yes" if the number is even, otherwise answer "no".';
const questions = getQuestions();
const rightAnswers = getRightAnswers(questions);

const brainEven = () => {
  playGame(GAME_RULES, questions, rightAnswers);
};

export default brainEven;
