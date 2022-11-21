#!/usr/bin/env node
import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hello, ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');
let count = 0;
while (count < 3) {
  const randomInt = Math.floor(Math.random() * 100);
  console.log(`Question: ${randomInt}`);
  const userAnswer = readlineSync.question('Your answer: ');
  if ((userAnswer === 'yes' && randomInt % 2 === 0)
    || (userAnswer === 'no' && randomInt % 2 !== 0)) {
    console.log('Correct!');
    count += 1;
    continue;
  } else if (userAnswer === 'yes') {
    console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
  } else if (userAnswer === 'no') {
    console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
  }
  console.log(`Let's try again, ${userName}!`);
  break;
}
if (count === 3) console.log(`Congratulations, ${userName}!`);
