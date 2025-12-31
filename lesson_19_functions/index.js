// function happyBirthday(username, age) {
//   // parameters
//   console.log("Happy Birthday to you!");
//   console.log("Happy Birthday to you!");
//   console.log(`Happy Birthday Dear ${username}`);
//   console.log("Happy Birthday to you!");
//   console.log(`you are ${age} years old`);
// }

// let username = window.prompt("Enter your username");
// let age = window.prompt("Enter your age");
// happyBirthday(username, age); // aruguments

function add(a, b) {
  return a + b;
}

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function validEmail(email) {
  //   if (email.includes("@")) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  return email.includes("@") ? true : false;
}

console.log(validEmail("samip@gmail.com"));
// console.log(isEven(4));
// let result = add(12, 13);
// console.log(result);
