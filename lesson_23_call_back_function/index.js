// callback is a function passed as argument to another function
// use to handle asychronous operation:(operation that take a long time)
// 1. reading a file
// 2. network request
// 3. Interfering with databases

// hello(wait);

// function hello(callback) {
//   console.log("hello");
//   callback();
// }

// function goodbye() {
//   console.log("goodbye");
// }

// function leave() {
//   console.log("Leave!");
// }

// function wait() {
//   console.log("wait!");
// }

sum(displayPage, 1, 4);

function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}

function displayConsole(result) {
  console.log(result);
}

function displayPage(result) {
  document.getElementById("myH1").textContent = result;
}
