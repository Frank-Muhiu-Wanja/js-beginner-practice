// function = A section of reusable code.
//            Declare code once, use it whenever you want.
//            Call the function to execute that code.

/*
const username = window.prompt("Enter your Name");

let age = window.prompt("Enter your age");
age = Number(age);*/

/*
function happyBirthday(username, age) {
  console.log("Happy birthday to you!");
  console.log("Happy birthday to you!");
  console.log(`Happy birthday dear ${username}!`);
  console.log(`You are ${age} years old`);
}

happyBirthday("Desmond", 17);
happyBirthday("Frank", 25);
happyBirthday("Jane", 45);
*/

/*
function add(x, y) {
  let result = x + y;
  return result;
}

let answer = add(2, 3);
console.log(answer);
*/

function add(x, y) {
  return x + y;
}
function substract(x, y) {
  return x - y;
}
function multiply(x, y) {
  return x * y;
}
function divide(x, y) {
  return x / y;
}
/*
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}*/

function isEven(number) {
  return number % 2 === 0 ? true : false;
}
function isValidEmail(email) {
  return email.includes("@") ? true : false;
}

let answer = add(2, 3);
console.log(answer);

let answer2 = substract(2, 3);
console.log(answer2);

console.log(multiply(2, 3));

console.log(divide(2, 3));

console.log(isEven(91));

console.log(isValidEmail("Desmond@fake.com"));
