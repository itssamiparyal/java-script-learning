// forEach() = method used to iterate over the elements of an array and apply a specificed function (callback) to each element
// array.forEach(callback)

// let numbers = [1, 2, 3, 4, 5];

// numbers.forEach(triple); //here triple is callback
// numbers.forEach(square);
// numbers.forEach(display);

// function double(element, index, array) {
//   array[index] = element * 2;
// }
// function triple(element, index, array) {
//   array[index] = element * 3;
// }

// function square(element, index, array) {
//   array[index] = Math.pow(element, 2);
// }

// function cube(element, index, array) {
//   array[index] = Math.pow(element, 3);
// }

// function display(element) {
//   console.log(element);
// }

let fruits = ["apple", "orange", "bananna", "coconut"];

fruits.forEach(capitalize);
fruits.forEach(display); //jere display is callback

function display(element) {
  console.log(element);
}

function upperCase(element, index, array) {
  array[index] = element.toUpperCase();
}

function lowerrCase(element, index, array) {
  array[index] = element.toLowerCase();
}

function capitalize(element, index, array) {
  array[index] = element.charAt(0).toUpperCase() + element.slice(1);
}
