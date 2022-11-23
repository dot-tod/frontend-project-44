import { roundsQnty, getRandomInt, game } from '../index.js';

const getQuestions = () => {
  const questions = [];
  const operators = ['+', '-', '*'];
  for (let i = 0; i < roundsQnty; i += 1) {
    const firstRandomOperand = getRandomInt(0, 99);
    const secondRandomOperand = getRandomInt(0, 99);
    const randomOperator = operators[getRandomInt(0, 2)];
    questions.push(`${firstRandomOperand} ${randomOperator} ${secondRandomOperand}`);
  }
  return questions;
};

const getRightAnswers = (questions) => {
  const rightAnswers = [];
  for (let i = 0; i < 3; i += 1) {
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

const gameRules = 'What is the result of the expression?';
const questions = getQuestions();
const rightAnswers = getRightAnswers(questions);

const brainCalc = () => {
  game(gameRules, questions, rightAnswers);
};

export default brainCalc;
