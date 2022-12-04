import {
  MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER, getRandomInt,
} from '../math.js';
import { ROUNDS_COUNT, playGame } from '../index.js';

const calc = (operator, firstOperand, secondOperand) => {
  let result;
  switch (operator) {
    case '+': result = firstOperand + secondOperand;
      break;
    case '-': result = firstOperand - secondOperand;
      break;
    default: result = firstOperand * secondOperand;
      break;
  }
  return result;
};

const getQuestions = () => {
  const questions = [];
  const operators = ['+', '-', '*'];
  for (let questionNumber = 0; questionNumber < ROUNDS_COUNT; questionNumber += 1) {
    const firstRandomOperand = getRandomInt(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
    const secondRandomOperand = getRandomInt(MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER);
    const randomOperator = operators[getRandomInt(0, operators.length - 1)];
    questions.push(`${firstRandomOperand} ${randomOperator} ${secondRandomOperand}`);
  }
  return questions;
};

const getRightAnswers = (questions) => {
  const rightAnswers = [];
  const FIRST_OPERAND_INDEX = 0;
  const SECOND_OPERAND_INDEX = 2;
  const OPERATOR_INDEX = 1;

  for (let questionNumber = 0; questionNumber < ROUNDS_COUNT; questionNumber += 1) {
    const question = questions[questionNumber].split(' ');
    const firstOperand = Number(question[FIRST_OPERAND_INDEX]);
    const secondOperand = Number(question[SECOND_OPERAND_INDEX]);
    const operator = question[OPERATOR_INDEX];
    const rightAnswer = calc(operator, firstOperand, secondOperand);
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
