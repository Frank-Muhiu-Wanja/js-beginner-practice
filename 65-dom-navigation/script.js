// DOM Navigation = The process of navigating through the structure
//                  of an HTML document using JavaScript.

// .firstElementChild
// .lastElementChild
// .nextElementSibling
// .previousElementSibling
// .parentElement
// .children

/*
// ---------- .firstElementChild ---------
const element = document.getElementById("desserts");
const firstChild = element.firstElementChild;
firstChild.style.backgroundColor = "purple";

const ulElements = document.querySelectorAll("ul");
ulElements.forEach((ulElement) => {
  const firstChild = ulElement.firstElementChild;
  firstChild.style.backgroundColor = "purple";
});
*/

/*
// ---------- .lastElementChild ---------
const element = document.getElementById("vegetables");
const lastChild = element.lastElementChild;
lastChild.style.backgroundColor = "purple";

const ulElements = document.querySelectorAll("ul");
ulElements.forEach((ulElement) => {
  const lastChild = ulElement.lastElementChild;
  lastChild.style.backgroundColor = "purple";
});
*/

/*
// ---------- .nextElementSibling ---------
const element = document.getElementById("vegetables");
const nextSibling = element.nextElementSibling;

nextSibling.style.backgroundColor = "purple";
*/

/*
// ---------- .previousElementSibling ------------
const element = document.getElementById("desserts");
const prevSibling = element.previousElementSibling;

prevSibling.style.backgroundColor = "purple";
*/

/*
// ----------- .parentElement ----------
const element = document.getElementById("fruits");
const parent = element.parentElement;
parent.style.backgroundColor = "purple";
*/

// ---------- .children ---------

const element = document.getElementById("desserts");
const children = element.children;

Array.from(children).forEach((child) => {
  child.style.backgroundColor = "purple";
});
