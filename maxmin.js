const numberArray = [2, 9, 16, -5, 10];

const highestNumber = (numbers) => {
  let currentMax = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > currentMax) {
      currentMax = numbers[i];
    }
  }
  return currentMax;
};

const lowestNumber = (numbers) => {
  let currentMin = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < currentMin) {
      currentMin = numbers[i];
    }
  }
  return currentMin;
};

console.log(`The maximum value in the array is ${highestNumber(numberArray)}.`);
console.log(`The minimum value in the array is ${lowestNumber(numberArray)}.`);
