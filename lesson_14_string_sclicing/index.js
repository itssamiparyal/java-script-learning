// const fullName = "Samip Aryal";

// // let firstName = fullName.slice(0, 5); //includes the starting index excludes the starting index
// // let lastName = fullName.slice(6); // 6,11 and 6 gives same result
// // let firstChar = fullName.slice(0, 1); // displays first character
// // let lastChar = fullName.slice(-1); // displays last char -2 will be al and so on

// // console.log(firstChar);
// // console.log(lastChar);

// let firstName = fullName.slice(0, fullName.indexOf(" ")); // makes code dynamic it go till first index of " "
// let lastName = fullName.slice(fullName.indexOf(" ")).trim(); // or let lastName = fullName.slice(fullName.indexOf(" ") +1);

// console.log(firstName);
// console.log(lastName);

const email = "samiparyal25007@gmail.com";
let userName = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@"));

console.log(userName);
console.log(extension);
