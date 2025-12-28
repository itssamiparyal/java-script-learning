// let userName;
// userName = window.prompt(`what's your user name? `)

// document.getElementById("p1").textContent = (`your name is ${userName}`)

// let userName;
// document.getElementById("mySubmit").onclick = function(){
//     userName = document.getElementById("myText").value;
//     document.getElementById("myH1").textContent = `Hello ${userName}`
// }


// let num1 , num2
// num1 = parseFloat(window.prompt("Enter first num"))
// num2 = parseFloat(window.prompt("Enter second num"))

// let sum = num1 + num2

// document.getElementById("myH1").textContent = `the sum is ${sum}`

let num1, num2 , sum;
document.getElementById("mySubmit").onclick = function(){
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById("num2").value);

    sum = num1 + num2;

    document.getElementById("myH1").textContent = `${num1} + ${num2} = ${sum}`

}
