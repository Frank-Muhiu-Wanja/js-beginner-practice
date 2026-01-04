const fruits = [
  { name: "apple", color: "red", calories: 95 },
  { name: "orange", color: "orange", calories: 45 },
  { name: "banana", color: "yellow", calories: 105 },
  { name: "coconut", color: "white", calories: 159 },
  { name: "pineapple", color: "yellow", calories: 37 },
];

fruits.push({ name: "grapges", color: "purple", calories: 62 });
// fruits.splice(1, 2);

// .............forEach() .............
// fruits.forEach((fruit) => console.log(fruit.color));

// .............map() .............
// const fruitName = fruits.map((fruit) => fruit.name);
// const fruitColors = fruits.map((fruit) => fruit.color);
// const fruitCalories = fruits.map((fruit) => fruit.calories);
// console.log(fruitName);
// console.log(fruitColors);
// console.log(fruitCalories);

// .............filter() .............
// const yellowFruits = fruits.filter((fruit) => fruit.color === "yellow");
// const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100);
// const highCalFruits = fruits.filter((fruit) => fruit.calories >= 100);
// console.log(yellowFruits);
// console.log(lowCalFruits);
// console.log(highCalFruits);

// .............reduce() .............
const maxFruit = fruits.reduce((max, fruit) =>
  fruit.calories > max.calories ? fruit : max
);
const minCalories = fruits.reduce((previous, next) =>
  next.calories < previous.calories ? next : previous
);

console.log(maxFruit);
console.log(minCalories);
