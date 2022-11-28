import {
  MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER, getRandomInt,
} from '../math.js';
import { ROUNDS_COUNT, playGame } from '../index.js';

const getQuestions = () => {
  const questions = [];
  const operators = ['+', '-', '*'];
  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const firstRandomOperand = getRandomInt(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
    const secondRandomOperand = getRandomInt(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
    const randomOperator = operators[getRandomInt(0, operators.length)];
    questions.push(`${firstRandomOperand} ${randomOperator} ${secondRandomOperand}`);
  }
  return questions;
};

const getRightAnswers = (questions) => {
  const rightAnswers = [];
  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    const question = questions[i].split(' ');
    const firstOperand = Number(question[0]);
    const secondOperand = Number(question[2]);
    let rightAnswer;
    if (question[1] === '+') rightAnswer = firstOperand + secondOperand;
    if (question[1] === '-') rightAnswer = firstOperand - secondOperand;
    if (question[1] === '*') rightAnswer = firstOperand * secondOperand;
    rightAnswers.push(String(rightAnswer));
  }
  return rightAnswers;
};

const GAME_RULES = 'What is the result of the expression?';
const questions = getQuestions();
const rightAnswers = getRightAnswers(questions);

const brainCalc = () => {
  playGame(GAME_RULES, questions, rightAnswers);
};

export default brainCalc;
