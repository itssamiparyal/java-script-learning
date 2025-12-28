// Type casting

// let age = window.prompt("Enter you age?");
// age = Number(age);
// age+=1;

// console.log(age , typeof age)

// let x = "0";
// let y = "0";
// let z = "";

// x = Number(x);
// y = String(y);
// z = Boolean(z); // if variabl isn't empty it will be true else false.

// console.log(x,typeof x);
// console.log(y,typeof y);
// console.log(z,typeof z);

//constants

const  PI = 3.14159;
let radius;
let circumfernece;
let area;

document.getElementById("calculate").onclick = function(){
    radius = Number(document.getElementById("radius").value);
    circumfernece = 2 * PI * radius;
    area = PI * radius **2;


    document.getElementById("calculationArea").textContent = `The Area is ${area}cm^2`;
    document.getElementById("calculationCircumfernece").textContent = `The Circumference is ${circumfernece}cm`;

}


