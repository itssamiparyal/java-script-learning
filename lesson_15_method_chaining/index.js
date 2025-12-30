// method chaining

// no method chaining

let username = window.prompt("Enter usernam: ");
// username = username.trim();
// let letter = username.slice(0, 1).toUpperCase();
// let extraChars = username.slice(1).toLowerCase();
// username = letter + extraChars;

// console.log(username);

// method chaining

username =
  username.trim().charAt(0).toUpperCase() +
  username.trim().slice(1).toLowerCase();
console.log(username);
