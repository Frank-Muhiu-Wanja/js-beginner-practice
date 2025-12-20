// array = a variable like structure that can hold
//         more than 1  value

/*
let fruits = ["apple", "orange", "banana", "coconut"];

fruits.push("coconut"); add a fruit in the end
fruits.pop(); remove a fruit in the end
fruits.unshift("mango"); add a fruit in the beginning
fruits.shift(); remove a fruit in the beginning

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

let numOfFruits = fruits.length;
let index = fruits.indexOf("mango");

console.log(index);
*/

let fruits = ["apple", "orange", "banana", "coconut"];
fruits.sort().reverse();

for (let fruit of fruits) {
  console.log(fruit);
}
