// .map() = accepts a callback and applies that function
//          to each element of an array, then return a new array

/*
const students = ["Spongebob", "Patrick", "Squidward", "Sandy"];

const studentsUpper = students.map(upperCase);
const studentsLower = students.map(lowerCase);
console.log(studentsUpper);
console.log(studentsLower);

function upperCase(element) {
  return element.toUpperCase();
}
function lowerCase(element) {
  return element.toLowerCase();
}
*/

const dates = ["2024-1-10", "2025-2-20", "2026-3-30"];
const formattedDates = dates.map(formatDates);
console.log(formattedDates);

function formatDates(element) {
  const parts = element.split("-");
  console.log(parts);
  return `${parts[1]}/${parts[2]}/${parts[0]}`;
}
