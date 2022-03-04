const add = function(num1, num2) {

  return num1 + num2;

};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  let total = 0;
	for (const arr in array) {
    total += array[arr];
  }

  return total;
};

const multiply = function(array) {
  let multiple = 1;
  for (let arr in array) {
    multiple *= array[arr]; 
  }
  
  return multiple;
};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
