// function declaration = defines a reusable block of code
//
/*                    that performs a specific task
hello();
function hello() {
  console.log("hello");
}
*/

// function expressions = a way to define functions as
//                        values or variabless
/*
const hello = function () {
  console.log("hello2");
};

hello();
*/
/*
setTimeout(hello, 3000);

function hello() {
  console.log("hello");
}
*/
/*
setTimeout(function () {
  console.log("hello after 3 sec");
}, 3000);
*/
/*

const numbers = [1, 2, 3, 4, 5, 6];
const squares = numbers.map(function (element) {
  return Math.pow(element, 2);
});

console.log(squares);
*/
/*
const numbers = [1, 2, 3, 4, 5, 6];

const cubes = numbers.map(function (element) {
  return Math.pow(element, 3);
});

console.log(cubes);
*/
const numbers = [1, 2, 3, 4, 5, 6];

const evenNums = numbers.filter(function (elements) {
  return elements % 2 === 0;
});
const oddNums = numbers.filter(function (elements) {
  return elements % 2 !== 0;
});
const total = numbers.reduce(function (previous, next) {
  return previous + next;
});

console.log(evenNums);
console.log(oddNums);
console.log(total);
