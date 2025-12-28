// random number generator practice

// let randomNum = Math.random(); //creates random number between 0 and 1

// let randomNum = Math.floor(Math.random()*6) + 1;  // creates random number between 0 - 5 if +1 isn't there if +1 is the 1-6

// const max = 100;
// const min = 50;

// let randomNum = Math.floor(Math.random()*(max-min))+min; // creats a random numbeer between min and max value

// console.log(randomNum);


// random number generator that generates 3 number between 1 and 6 (basically rolls 3 dices)

const myButton = document.getElementById("myButton");
const Label1 = document.getElementById("label1");
const Label2 = document.getElementById("label2");
const Label3 = document.getElementById("label3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;


myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random()*max)+min;
    randomNum2 = Math.floor(Math.random()*max)+min;
    randomNum3 = Math.floor(Math.random()*max)+min;

    Label1.textContent = randomNum1;
    Label2.textContent = randomNum2;
    Label3.textContent = randomNum3;
}