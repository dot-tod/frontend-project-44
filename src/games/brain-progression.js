import {
  roundsQnty, getArithmeticSequence, getRandomInt, game,
} from '../index.js';

const getQuestionsAndAnswers = () => {
  const questions = [];
  const sequences = [];
  const hiddenTerms = [];
  for (let i = 0; i < roundsQnty; i += 1) {
    const sequenceLength = getRandomInt(5, 10);
    const sequence = getArithmeticSequence(sequenceLength);
    const randomIndex = getRandomInt(0, sequenceLength - 1);
    const hiddenTerm = sequence[randomIndex];
    sequence[randomIndex] = '..';
    sequences.push(sequence.join(' '));
    hiddenTerms.push(String(hiddenTerm));
  }
  questions.push(sequences, hiddenTerms);
  return questions;
};

const questionsAndAnswers = getQuestionsAndAnswers();
const gameRules = 'What is the result of the expression?';
const questions = questionsAndAnswers[0];
const rightAnswers = questionsAndAnswers[1];

const brainProgression = () => {
  game(gameRules, questions, rightAnswers);
};

export default brainProgression;
