import * as interaction from './interaction.js';

const ROUNDS_COUNT = 3;

const checkUserAnswer = (userAnswer, rightAnswer) => {
  if (userAnswer === rightAnswer) {
    console.log('Correct!');
    return true;
  }
  return false;
};

const playGame = (GAME_RULES, questions, rightAnswers) => {
  const userName = interaction.getUserName();
  interaction.printRules(GAME_RULES);
  let score = 0;
  for (let i = 0; i < ROUNDS_COUNT; i += 1) {
    interaction.printQuestion(questions[i]);
    const userAnswer = interaction.getUserAnswer();
    if (checkUserAnswer(userAnswer, rightAnswers[i])) {
      score += 1;
    } else {
      interaction.printWrongAnswer(userName, userAnswer, rightAnswers[i]);
      break;
    }
  }
  interaction.printIfWinner(userName, score, ROUNDS_COUNT);
};

export { ROUNDS_COUNT, playGame };
