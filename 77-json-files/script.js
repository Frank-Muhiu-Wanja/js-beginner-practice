// JSON = (Javascript Object Notation) data-interchange format
//        Used for exchanging data between a server and a web application
//        JSON files {key:value} OR [value1, value2, value3]

//        JSON.stringify() = converts a JS object to a JSON string.
//        JSON.parse() = converts a JSON string to a JS object

/*
const names = ["Spongebob", "Patrick", "Squidward", "Sandy"];
const jsonString = JSON.stringify(names);
console.log(names);
console.log(jsonString);

const person = {
  name: "Spongebob",
  age: 30,
  isEmployed: true,
  hobbies: ["JellyFishing", "Karate", "Cooking"],
};
const jsonStringPerson = JSON.stringify(person);
console.log(person);
console.log(jsonStringPerson);

const people = [
  { name: "Spongebob", age: 30, isEmployed: true },
  { name: "Patrick", age: 34, isEmployed: false },
  { name: "Squidward", age: 50, isEmployed: true },
  { name: "Sandy", age: 27, isEmployed: false },
];

const jsonStringPeople = JSON.stringify(people);
console.log(people);
console.log(jsonStringPeople);
*/

/*
const jsonNames = `["Spongebob", "Patrick", "Squidward", "Sandy"]`;
const parsedData = JSON.parse(jsonNames);
console.log(jsonNames);
console.log(parsedData);

const jsonPerson = `{
  "name": "Spongebob",
  "age": 30,
  "isEmployed": true,
  "hobbies": ["JellyFishing", "Karate", "Cooking"]
}`;
const parsedData2 = JSON.parse(jsonPerson);
console.log(jsonPerson);
console.log(parsedData2);

const jsonPeople = `[
  { "name": "Spongebob", "age": 30, "isEmployed": true },
  { "name": "Patrick", "age": 34, "isEmployed": false },
  {"name": "Squidward", "age": 50, "isEmployed": true },
  {"name": "Sandy", "age": 27, "isEmployed": false }
]`;
const parsedData3 = JSON.parse(jsonPeople);
console.log(jsonPeople);
console.log(parsedData3);
*/

// fetch("person.json")
//   .then((response) => response.json())
//   .then((value) => console.log(value));

fetch("people.json")
  .then((response) => response.json())
  .then((values) => values.forEach((value) => console.log(value.name)))
  .catch((error) => console.error(error));

// fetch("names.json")
//   .then((response) => response.json())
//   .then((value) => console.log(value));
