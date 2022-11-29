import * as interactions from './interactions.js';

const ROUNDS_COUNT = 3;

const checkUserAnswer = (userAnswer, rightAnswer) => {
  if (userAnswer === rightAnswer) {
    console.log('Correct!');
    return true;
  }
  return false;
};

const playGame = (GAME_RULES, questions, rightAnswers) => {
  const userName = interactions.getUserName();
  interactions.printRules(GAME_RULES);
  let score = 0;
  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    interactions.printQuestion(questions[i]);
    const userAnswer = interactions.getUserAnswer();
    if (checkUserAnswer(userAnswer, rightAnswers[i])) {
      score += 1;
    } else {
      interactions.printWrongAnswer(userName, userAnswer, rightAnswers[i]);
      break;
    }
  }
  interactions.printIfWinner(userName, score, ROUNDS_COUNT);
};

export { ROUNDS_COUNT, playGame };
