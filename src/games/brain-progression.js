import { getRandomInt } from '../math.js';
import { ROUNDS_COUNT, playGame } from '../index.js';

const getArithmeticSequence = (sequenceLength) => {
  const MIN_FIRST_TERM = 0;
  const MAX_FIRST_TERM = 10;
  const MIN_DIFFERENCE = 1;
  const MAX_DIFFERENCE = 9;
  let currentTerm = getRandomInt(MIN_FIRST_TERM, MAX_FIRST_TERM);
  const commonDifference = getRandomInt(MIN_DIFFERENCE, MAX_DIFFERENCE);
  const sequence = [];
  for (let i = 0; i < sequenceLength; i += 1) {
    sequence.push(currentTerm);
    currentTerm += commonDifference;
  }
  return sequence;
};

const getQuestionsAndAnswers = () => {
  const MIN_SEQUENCE_LENGTH = 5;
  const MAX_SEQUENCE_LENGTH = 10;
  const questions = [];
  const sequences = [];
  const hiddenTerms = [];
  for (let questionNumber = 0; questionNumber < ROUNDS_COUNT; questionNumber += 1) {
    const sequenceLength = getRandomInt(MIN_SEQUENCE_LENGTH, MAX_SEQUENCE_LENGTH);
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

const QUESTIONS_INDEX = 0;
const ANSWERS_INDEX = 1;
const questionsAndAnswers = getQuestionsAndAnswers();
const GAME_RULES = 'What number is missing in the progression?';
const questions = questionsAndAnswers[QUESTIONS_INDEX];
const rightAnswers = questionsAndAnswers[ANSWERS_INDEX];

const brainProgression = () => {
  playGame(GAME_RULES, questions, rightAnswers);
};

export default brainProgression;
