const add = function(num1, num2) {
	let added = num1 + num2;
  return added;
};

const subtract = function(num1, num2) {
  let subtracted = num1 - num2;
  return subtracted;
};

const sum = function(numArray) {
  let summed = 0
  numArray.forEach(myFunction)

  function myFunction(item) {
    summed += item;
  }

  return summed;
};

const multiply = function(numArray) {
  let multiplied = 1
  numArray.forEach(myFunction)

  function myFunction(item) {
    multiplied *= item;
  }

  return multiplied;
};

const power = function(num1, num2) {
	let powered = num1 ** num2;
  return powered;
};

const factorial = function(num1) {
	let factorialed = 1;
  if (num1 > 1) {
    for (let i = 1; num1 >= i; i++) {
      factorialed = factorialed * i
    }
  }
  return factorialed
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
