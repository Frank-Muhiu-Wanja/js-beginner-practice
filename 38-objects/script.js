// Object = A collection of related properties and/or methods
//          Can represent real world objects (people, products, places)
//          object = {key: value,
//          function ()}
/*
const person = {
  firstName: "Spongebob",
  lastName: "Squarepants",
  age: 30,
  isEmployed: true,
};

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.isEmployed);
*/

const person2 = {
  firstName: "Patrick",
  lastName: "star",
  age: 42,
  isEmployed: false,
  sayHello: () => {
    console.log(`Hi! am Patrick....`);
  },
  eat: () => console.log(`I am eating a Krabby Patty`),
};

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();
person2.eat();

/*
const person = {
  firstName: "Spongebob",
  lastName: "Squarepants",
  age: 30,
  isEmployed: true,
  sayHello: function () {
    console.log("Hi! am Spongebob!");
  },
};

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.isEmployed);
person.sayHello();
*/
