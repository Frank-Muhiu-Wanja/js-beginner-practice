// this = reference to the object where THIS is used
//        (the object depends on the immediate context)
//        person.name = this.name
//        this key word doesn't work with arrow functions

/*
const person1 = {
  name: "Spongebob",
  favFood: "hamburgers",
  sayHello: function () {
    console.log(`Hi! I am ${this.favFood}`);
  },
  eat: function () {
    console.log(`${this.name} is eating ${this.favFood}`);
  },
};

person1.sayHello();
person1.eat();
*/
/*
const person2 = {
  name: "Patrick",
  favFood: "pizza",
  sayHello: function () {
    console.log(`Hi! I am ${person2.favFood}`);
  },
  eat: function () {
    console.log(`${person2.name} is eating ${person2.favFood}`);
  },
};

person2.sayHello();
person2.eat();
*/

console.log(this);
