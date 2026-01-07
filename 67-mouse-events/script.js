// eventListener = listen for specific events to create interactive web pages
//                 events: click, mouseover, mouseout
//                 .addEventListener(event, callback/anonymous fnct/arrow fnct);

const myBox = document.getElementById("myBox");
const myButton = document.getElementById("myButton");

// function changeColor(event) {
//   event.target.style.backgroundColor = "tomato";
//   event.target.textContent = "OUCH! 🥲";
// }

myBox.addEventListener("click", (event) => {
  event.target.style.backgroundColor = "tomato";
  event.target.textContent = "OUCH! 🥲";
});

myBox.addEventListener("mouseover", (event) => {
  event.target.style.backgroundColor = "yellow";
  event.target.textContent = "NOO! 😥";
});

myBox.addEventListener("mouseout", (event) => {
  event.target.backgroundColor = "lightgreen";
  event.target.textContent = "Click me 😊";
});

myButton.addEventListener("click", (event) => {
  myBox.style.backgroundColor = "tomato";
  myBox.textContent = "OUCH! 🥲";
});

myButton.addEventListener("mouseover", (event) => {
  myBox.style.backgroundColor = "yellow";
  myBox.textContent = "NOO! 😥";
});

myButton.addEventListener("mouseout", (event) => {
  myBox.backgroundColor = "lightgreen";
  myBox.textContent = "Click me 😊";
});
