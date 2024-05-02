//Making array with random number
let sumArr = [];
let sumArr1 = [];

function generateUniqueNumbers(quantity, min, max, NoRepetition, sorted) {
  let uniqueNumbers;
  let num;
  if (NoRepetition == true) {
    uniqueNumbers = new Set();
    while (uniqueNumbers.size < quantity) {
      num = Math.floor(Math.random() * (max - min + 1)) + min;
      uniqueNumbers.add(num);
    }
  } else {
    uniqueNumbers = [];
    for (let i = 0; i < quantity; i++) {
      let num;
      num = Math.floor(Math.random() * (max - min + 1)) + min;
      uniqueNumbers[i] = num;
    }
  }
  if (sorted == true) {
    if (NoRepetition == false) {
      uniqueNumbers.sort((a, b) => a - b);
    } else {
      uniqueNumbers = Array.from(uniqueNumbers).sort((a, b) => a - b);
    }
  }
  return Array.from(uniqueNumbers);
}

function loops(uniqueNumbers) {
  console.time("forLoop");
  for (let i = 0; i < uniqueNumbers; i++) {
    sumArr[i] = uniqueNumbers[i];
  }
  console.timeEnd("forLoop");

  console.time("forEach");
  uniqueNumbers.forEach((item) => {
    sumArr1.push(item);
  });
  console.timeEnd("forEach");
}

let uniqueNumbers = generateUniqueNumbers(1000, 1, 10000, true, true);
let uniqueNumbers1 = generateUniqueNumbers(1000, 1, 10000, false, true);
loops(uniqueNumbers);
loops(uniqueNumbers1);
