// element selectors = Methods used to target and manipulate HTML elements
//                     They allow you to select one or multiple HTML elements
//                     from the DOM (Document Object Model)

// 1. document.getElementById()       // ELEMENT OR NULL
// 2. document.getElementsClassName() // HTML Collection
// 3. document.getElementByTagName()  // HTML COLLECTION
// 4. document.querySelector()        // ELEMENT OR NULL
// 5. document.querySelector()        // NODELIST
/*
const myHeading = document.getElementById("my-heading");
myHeading.style.backgroundColor = "yellow";
myHeading.style.textAlign = "center";

console.log(myHeading);
*/

// for (let fruit of fruits) {
//   fruit.style.backgroundColor = "brown";
// }
/*
const fruits = document.getElementsByClassName("fruits");

Array.from(fruits).forEach((fruit) => {
  fruit.style.backgroundColor = "yellow";
});
*/

const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

// console.log(h4Elements);
// h4Elements[0].style.backgroundColor = "pink";
// for (let h4Element of h4Elements) {
//   h4Element.style.backgroundColor = "pink";
// }

// for (let liElement of liElements) {
//   liElement.style.backgroundColor = "purple";
// }

// Array.from(h4Elements).forEach((h4Element) => {
//   h4Element.style.backgroundColor = "purple";
// });

// Array.from(liElements).forEach((liElement) => {
//   liElement.style.backgroundColor = "purple";
// });

const foods = document.querySelectorAll("li");

foods.forEach((food) => {
  food.style.backgroundColor = "purple";
});
