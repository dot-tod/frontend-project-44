import * as console from './console.js';

const ROUNDS_COUNT = 3;

const checkUserAnswer = (userAnswer, rightAnswer) => {
  if (userAnswer === rightAnswer) {
    console.log('Correct!');
    return true;
  }
  return false;
};

const playGame = (GAME_RULES, questions, rightAnswers) => {
  const userName = console.getUserName();
  console.printRules(GAME_RULES);
  let score = 0;
  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    console.printQuestion(questions[i]);
    const userAnswer = console.getUserAnswer();
    if (checkUserAnswer(userAnswer, rightAnswers[i])) {
      score += 1;
    } else {
      console.printWrongAnswer(userName, userAnswer, rightAnswers[i]);
      break;
    }
  }
  console.printIfWinner(userName, score, ROUNDS_COUNT);
};

export { ROUNDS_COUNT, playGame };
