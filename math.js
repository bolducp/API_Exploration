
function sum(numbers){
  return numbers.reduce(function(a, b) {
    return parseInt(a) + parseInt(b);
  });
}

function subtract(numbers){
  return numbers.reduce(function(a, b) {
    return parseInt(a) - parseInt(b);
  });
}

function multiply(numbers){
  return numbers.reduce(function(a, b) {
    return parseInt(a) * parseInt(b);
  });
}

function divide(numbers){
  return numbers.reduce(function(a, b) {
    return parseInt(a) / parseInt(b);
  });
}

function square(num){
  return parseInt(num) * parseInt(num);
}

module.exports = {
  sum: sum,
  subtract: subtract,
  multiply: multiply,
  divide: divide,
  square: square
};
