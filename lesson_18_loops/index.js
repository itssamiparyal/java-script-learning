// loops = 2 types
// while loop - repat until condition is true

// let userName = "";

// while (userName === "" || userName === null) {
//   userName = window.prompt("Enter your username: ");
// }

// console.log(`Hello  ${userName}`);

// let userName;

// do {
//   // do will first do 1st iteration  then only check the while condition
//   userName = window.prompt("Enter your username: ");
// } while (userName === "" || userName === null);

// console.log(`Hello  ${userName}`);

// let loggedIn = false;
// let userName;
// let password;

// while (!loggedIn) {
//   userName = window.prompt("Enter your User Name: ");
//   password = window.prompt("Enter yoru passwrod: ");

//   if (userName === "samip" && password === "1234") {
//     console.log("Sucessfully Loged IN");
//     loggedIn = true;
//   } else {
//     console.log("You have entered wrong username or passwrod!");
//   }
// }

// let loggedIn = false;
// let userName;
// let password;

// do {
//   userName = window.prompt("Enter your User Name: ");
//   password = window.prompt("Enter yoru passwrod: ");

//   if (userName === "samip" && password === "1234") {
//     console.log("Sucessfully Loged IN");
//     loggedIn = true;
//   } else {
//     console.log("You have entered wrong username or passwrod!");
//   }
// } while (!loggedIn);

// for (let i = 0; i < 10; i++) {
//   console.log("hello world!");
// }

// for (let i = 0; i < 10; i += 2) {
//   console.log(i);
// }

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }
// console.log("Happy New Year!");

for (let i = 0; i < 20; i++) {
  if (i === 13) {
    continue; // continute skips over the iteration break; will stop the loop
  }
  console.log(i);
}
