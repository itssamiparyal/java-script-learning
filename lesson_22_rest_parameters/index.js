// rest parameters are opposite to spread operator. it bundle seprate elements into a array
// rest operator are only used in parameters

// function openFrige(...foods) {
//   // this function can acpeat any number of arguments
//   console.log(...foods);
// }

// function getFood(...foods) {
//   return foods;
// }

// const food1 = "pizza";
// const food2 = "burger";
// const food3 = "shushi";
// const food4 = "mo-mo";

// // openFrige(food1, food2, food3, food4);

// const foods = getFood(food1, food2, food3, food4);
// console.log(foods);

// rest parameter can be used to make dynamic sum calcuation too

// function sum(...numbers) {
//   let result = 0;
//   for (let number of numbers) {
//     result += number;
//   }
//   return result;
// }

// const total = sum(1, 2, 3);

// console.log(`your total is $${total}`);

// function getAverage(...numbers) {
//   let result = 0;
//   for (number of numbers) {
//     result += number;
//   }
//   return result / numbers.length;
// }

// const avg = getAverage(1, 3);
// console.log(`the avgerage is ${avg}`);

// you can use rest parameters to combine strings

function combineStrings(...strings) {
  return strings.join(" ");
}

const fullName = combineStrings("Mr.", "Spongebob", "Squarepants", "III");
console.log(fullName);
