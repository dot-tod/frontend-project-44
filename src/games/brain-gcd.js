import {
  MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER, getRandomInt, getDivisors,
} from '../math.js';
import { ROUNDS_COUNT, playGame } from '../index.js';

const getCommonDivisors = (firstNum, secondNum) => {
  const firstNumDivisors = getDivisors(firstNum);
  const secondNumDivisors = getDivisors(secondNum);
  const commonDivisors = [];
  for (let i = 0; i < firstNumDivisors.length; i += 1) {
    if (secondNumDivisors.includes(firstNumDivisors[i])) commonDivisors.push(firstNumDivisors[i]);
  }
  if (firstNum % secondNum === 0) commonDivisors.push(secondNum);
  if (secondNum % firstNum === 0) commonDivisors.push(firstNum);
  return commonDivisors;
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
    const commonDivisors = getCommonDivisors(firstNum, secondNum);
    const maxCommonDivisor = commonDivisors.at(-1);
    rightAnswers.push(String(maxCommonDivisor));
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
