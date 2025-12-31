// Static = keyword that defines properties or methods that belong
//          to a class itself rather than the objects created
//          from that (class owns anything static, not the objects)
/*
class MathUtil {
  static PI = 3.14159;

  static getDiameter(radius) {
    return radius * 2;
  }
  static getcircumference(radius) {
    return 2 * this.PI;
  }

  static getArea(radius) {
    return this.PI * radius * radius;
  }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(10));
console.log(MathUtil.getcircumference(10));
console.log(MathUtil.getArea(10));
*/

class User {
  static userCount = 0;

  constructor(username) {
    this.username = username;
    User.userCount++;
  }
  static getUserCount() {
    console.log(`There are ${User.userCount} users online`);
  }

  sayHello() {
    console.log(`Hello, my username is ${this.username}`);
  }
}

const user1 = new User("Spongebob");
const user2 = new User("Patrick");
const user3 = new User("Sandy");

user1.sayHello();
user2.sayHello();
user3.sayHello();

console.log(user1.username);
console.log(User.userCount);
User.getUserCount();
