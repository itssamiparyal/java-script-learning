// spread operator:- represnted as ... is like unpacking somthing to perform task in array we will first need to unpack it

let numbers = [1, 2, 3, 4, 5];
let maximum = Math.max(...numbers); //... is spread operator
let minimum = Math.min(...numbers);

console.log(maximum);
console.log(minimum);

// spread operator can be done for string also
let username = "Samip Aryal";
let letters = [...username].join("-");

console.log(letters);

// spread operator an be used to combine arrays
let fruits = ["apple", "orange", "bananna"];
let vegetables = ["carrot", "potato", "cauliflower"];

let foods = [...fruits, ...vegetables, "eggs", "milk"];

console.log(foods);
