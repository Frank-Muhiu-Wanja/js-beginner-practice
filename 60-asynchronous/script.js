// synchronous = Execute line by line consecutively in a sequential manner
//               Code that waits for an operation to complete

// asynchronous = Allow multiple operations to be performed concurrently without waiting
//                Doesn't block the execution flow and allows the program to continue
//                (I/O operations, network requests, fetching data)
//                Handled with: Callbacks, Promises, Async/Await

function func1(Callback) {
  setTimeout(() => {
    console.log("Task 1");
    Callback();
  }, 3000);
}
function func2() {
  console.log("Task 2");
  console.log("Task 3");
  console.log("Task 4");
}
func1(func2);
