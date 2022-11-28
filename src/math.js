const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 99;

const getRandomInt = (min, max) => {
  const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomInt;
};
const getDivisors = (num) => {
  const divisors = [1];
  for (let i = 1; i <= num / 2; i += 1) {
    if (num % i === 0) divisors.push(i);
  }
  return divisors;
};

export {
  MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER, getDivisors, getRandomInt,
};
