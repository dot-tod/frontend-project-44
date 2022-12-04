const MIN_RANDOM_NUMBER = 1;
const MAX_RANDOM_NUMBER = 99;

const getRandomInt = (min, max) => {
  const randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomInt;
};

export {
  MIN_RANDOM_NUMBER, MAX_RANDOM_NUMBER, getRandomInt,
};
