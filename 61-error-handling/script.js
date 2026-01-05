// Error = An object that is created to represent a problem that occurs
//         Occur often with user input or establishing a connection
// NETWORK ERRORS
// PROMISES REJECTION
// SECURITY ERRORS
/*
try {
  console.log("hello");
} catch (error) {
  console.error(error);
} finally {
  // CLOSE FILES
  // CLOSE CONNECTIONS
  // RELEASE RESOURCES
  console.log("This always executes");
}
console.log("You have reached the end!");
*/
try {
  const dividend = Number(window.prompt("Enter a dividend: "));
  const divisor = Number(window.prompt("Enter a divisor: "));
  if (divisor == 0) {
    throw new Error("You can't divide by zero");
  }
  if (isNaN(dividend) || isNaN(divisor)) {
    throw new Error("Values must be a number");
  }

  const result = dividend / divisor;
  console.log(result);
} catch (error) {
  console.error(error);
}

console.log("You have reached the end!");

/*
try {
  const dividend = Number(window.prompt("Enter a dividend: "));
  const divisor = Number(window.prompt("Enter a divisor: "));

  if (isNaN(dividend) || isNaN(divisor)) {
    throw new Error("Values must be numbers!");
  }
  if (divisor === 0) {
    throw new Error("You cannot divide by zero!");
  }

  const result = dividend / divisor;
  console.log(result);
} catch (error) {
  // This now catches the errors we manually threw above
  console.error(`Error: ${error.message}`);
} finally {
  // This block runs no matter what happens
  console.log("Calculation attempt finished.");
}

console.log("You have reached the end!");
*/
