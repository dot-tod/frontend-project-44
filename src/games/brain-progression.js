import { getRandomInt } from '../math.js';
import { ROUNDS_COUNT, playGame } from '../index.js';

const getArithmeticSequence = (sequenceLength) => {
  let currentTerm = getRandomInt(0, 10);
  const commonDifference = getRandomInt(1, 9);
  const sequence = [];
  for (let i = 0; i < sequenceLength; i += 1) {
    sequence.push(currentTerm);
    currentTerm += commonDifference;
  }
  return sequence;
};

const getQuestionsAndAnswers = () => {
  const questions = [];
  const sequences = [];
  const hiddenTerms = [];
  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
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
const GAME_RULES = 'What number is missing in the progression?';
const questions = questionsAndAnswers[0];
const rightAnswers = questionsAndAnswers[1];

const brainProgression = () => {
  playGame(GAME_RULES, questions, rightAnswers);
};

export default brainProgression;
