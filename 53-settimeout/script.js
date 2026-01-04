// setTimeout() = function in JavaScript that allows you to schedule
//                the execution of a function after an amount of time (milliseconds)

//                setTimeout(callback, delay);
/*
function sayHello() {
  window.alert("Hello1");
}
setTimeout(sayHello, 3000);
*/
/*
setTimeout(function () {
  window.alert("Hello");
}, 3000);
*/

/*
const timeoutId = setTimeout(() => window.alert("Hello"), 3000);
clearTimeout(timeoutId);
*/
let timeoutId;

function startTimer() {
  timeoutId = setTimeout(() => window.alert("Hello"), 3000);
  console.log("STARTED");
}

function clearTimer() {
  clearTimeout(timeoutId);
  console.log("CLEARED");
}
