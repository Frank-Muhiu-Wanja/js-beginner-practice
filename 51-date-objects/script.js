// Date Objects = Objects that contains values that represents dates and times
//                These date objects can be changed and formatted
/*
// Date(year, month, day, hour, minutes, seconds, ms)
const date = new Date();
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minutes = date.getMinutes();
const seconds = date.getSeconds();

console.log(date);
console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(minutes);
console.log(seconds);
const dayOfWeek = date.getDay();
console.log(dayOfWeek);
*/

/*
const date = new Date();
date.setFullYear(2024);
date.setMonth(0);
date.setDate(1);
date.setHours(2);
date.setMinutes(3);
date.setSeconds(00);
console.log(date);
*/

const date1 = new Date("2023-12-31");
const date2 = new Date("2024-10-01");

if (date2 > date1) {
  console.log("Happy New Year!");
}
