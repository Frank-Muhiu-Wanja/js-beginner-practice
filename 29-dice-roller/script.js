// DICE ROLLER PROGRAM
// Unicode dice faces

function rollDice() {
  const numOfDice = document.getElementById("numOfDice").value;
  const diceResult = document.getElementById("diceResult");
  const diceImages = document.getElementById("diceImages");

  const values = [];
  const images = [];

  const diceFaces = [
    "&#9856;",
    "&#9857;",
    "&#9858;",
    "&#9859;",
    "&#9860;",
    "&#9861;",
  ];

  for (let i = 0; i < numOfDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<span class="dice" >${diceFaces[value - 1]}</span>`);
  }

  diceResult.textContent = `You rolled: ${values.join(", ")}`;
  diceImages.innerHTML = images.join(" ");
}
