import { roundsQnty, getArithmeticSequence, game } from '../index.js';

const getQuestionsAndAnswers = () => {
  const questions = [];
  const sequences = [];
  const hiddenTerms = [];
  for (let i = 0; i < roundsQnty; i += 1) {
    const sequenceLength = Math.floor(Math.random() * 5 + 5);
    const sequence = getArithmeticSequence(sequenceLength);
    const randomIndex = Math.floor(Math.random() * sequenceLength);
    const hiddenTerm = sequence[randomIndex];
    sequence[randomIndex] = '..';
    sequences.push(sequence.join(' '));
    hiddenTerms.push(String(hiddenTerm));
  }
  questions.push(sequences, hiddenTerms);
  return questions;
};

const brainProgression = () => {
  const questionsAndAnswers = getQuestionsAndAnswers();
  const gameRules = 'What is the result of the expression?';
  const questions = questionsAndAnswers[0];
  const rightAnswers = questionsAndAnswers[1];
  game(gameRules, questions, rightAnswers);
};

export default brainProgression;
