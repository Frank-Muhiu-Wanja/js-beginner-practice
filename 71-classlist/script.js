// classList = Element property in Javascript used to interact
//             with an element's list of classes (css classes)
//             across your webpage

// add()
// remove()
// toggle(Remove if present, Add if not)
// replace(oldClass, newClass)
// contains()

/*
const myH1 = document.getElementById("myH1");
const myButton = document.getElementById("myButton");

myH1.classList.add("enabled");
myButton.classList.add("enabled");

myH1.addEventListener("click", (event) => {
  if (event.target.classList.contains("disabled")) {
    event.target.textContent += "🤬";
  } else {
    event.target.classList.replace("enabled", "disabled");
  }
});

myButton.addEventListener("click", (event) => {
  if (event.target.classList.contains("disabled")) {
    event.target.textContent += "🤬";
  } else {
    event.target.classList.replace("enabled", "disabled");
  }
});
*/

let buttons = document.querySelectorAll(".myButtons");

buttons.forEach((button) => {
  button.classList.add("enabled");
});

buttons.forEach((button) => {
  button.addEventListener("mouseover", (event) => {
    event.target.classList.toggle("hover");
  });
});

buttons.forEach((button) => {
  button.addEventListener("mouseout", (event) => {
    event.target.classList.toggle("hover");
  });
});

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    if (event.target.classList.contains("disabled")) {
      event.target.textContent += "🤬";
    } else {
      event.target.classList.replace("enabled", "disabled");
    }
  });
});

// buttons.forEach((button) => {
//   button.classList.remove("enabled");
// });
