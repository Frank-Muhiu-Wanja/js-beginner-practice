// eventListener = listen for specific events to create interactive web pages
//                 events: click, mouseover, mouseout, keydown, keypress
//                 .addEventListener(event, callback/anonymous fnct/arrow fnct);
/*
const myBox = document.getElementById("myBox");

document.addEventListener("keydown", (event) => {
  myBox.textContent = "😁";
  myBox.style.backgroundColor = "tomato";
});

document.addEventListener("keyup", (event) => {
  myBox.textContent = "😉";
  myBox.style.backgroundColor = "lightblue";
});
*/

const myBox = document.getElementById("myBox");
const moveAmount = 15;
let x = 0;
let y = 0;

document.addEventListener("keydown", (event) => {
  myBox.textContent = "😁";
  myBox.style.backgroundColor = "tomato";
});

document.addEventListener("keyup", (event) => {
  myBox.textContent = "😉";
  myBox.style.backgroundColor = "purple";
});

document.addEventListener("keydown", (event) => {
  console.log(event.key);

  if (event.key.startsWith("Arrow")) {
    event.preventDefault();

    switch (event.key) {
      case "ArrowUp":
        y -= moveAmount;
        break;
      case "ArrowDown":
        y += moveAmount;
        break;
      case "ArrowLeft":
        x -= moveAmount;
        break;
      case "ArrowRight":
        x += moveAmount;
        break;
    }

    myBox.style.top = `${y}px`;
    myBox.style.left = `${x}px`;
  }
});
