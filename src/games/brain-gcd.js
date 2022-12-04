import {
  MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER, getRandomInt,
} from '../math.js';
import { ROUNDS_COUNT, playGame } from '../index.js';

const getCommonDivisor = (firstNum, secondNum) => {
  if (secondNum === 0) {
    return firstNum;
  }
  return getCommonDivisor(secondNum, firstNum % secondNum);
};

const getQuestions = () => {
  const questions = [];
  for (let questionNumber = 0; questionNumber < ROUNDS_COUNT; questionNumber += 1) {
    const firstRandomNumber = getRandomInt(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
    const secondRandomNumber = getRandomInt(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
    questions.push(`${firstRandomNumber} ${secondRandomNumber}`);
  }
  return questions;
};

const getRightAnswers = (questions) => {
  const rightAnswers = [];
  const FIRST_NUMBER_INDEX = 0;
  const SECOND_NUMBER_INDEX = 1;
  for (let questionNumber = 0; questionNumber < ROUNDS_COUNT; questionNumber += 1) {
    const question = questions[questionNumber].split(' ');
    const firstNum = Number(question[FIRST_NUMBER_INDEX]);
    const secondNum = Number(question[SECOND_NUMBER_INDEX]);
    const commonDivisor = getCommonDivisor(firstNum, secondNum);
    rightAnswers.push(String(commonDivisor));
  }
  return rightAnswers;
};

const GAME_RULES = 'Find the greatest common divisor of given numbers.';
const questions = getQuestions();
const rightAnswers = getRightAnswers(questions);

const brainGcd = () => {
  playGame(GAME_RULES, questions, rightAnswers);
};

export default brainGcd;
