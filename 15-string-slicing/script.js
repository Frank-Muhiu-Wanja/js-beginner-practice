// String Slicing = creating a substring
//                  from a portion of another string

//                  string.slice(start, end)

/*
const fullName = "Frank Wanja";

let firstName = fullName.slice(0, 5);
let lastName = fullName.slice(6, 11);
let firstChar = fullName.slice(0, 1);
let lastChar = fullName.slice(-5);

console.log(firstName);
console.log(lastName);
console.log(firstChar);
console.log(lastChar);
*/

/*
const fullName = "Frank Wanja";
let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);

console.log(firstName);
console.log(lastName);
*/

const email = "Bro1@gmail.com";

let userName = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1);

console.log(userName);
console.log(extension);
