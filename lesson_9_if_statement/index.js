// if statment

// let age = 25;

// if(age >= 18){
//     console.log("you can vote");
// }
// else{
//     console.log("you can't vote");
// }


// let isStudent = true;

// if (isStudent){
//     console.log("you are a student");
// }
// else{
//     console.log("you are not a student");
// }


const mySubmit = document.getElementById("mySubmit");
const myText =  document.getElementById("myText");
const resultElement = document.getElementById("resultElement");
let age;

mySubmit.onclick = function(){
    age = Number(myText.value);
    if(age>=100){
        resultElement.textContent = ("you are too old to take license")
    }
    else if(age < 0){
        resultElement.textContent = ("Enter valid age. you can't be less than age 0")
    }

    else if (age == 0){
        resultElement.textContent = ("You can't enter. you were just born");
    }

    else if(age >= 16){
        resultElement.textContent = ("you are old enough to drive");
    }
    else{
        resultElement.textContent = ("you need to be 16+ to drive");
    }
    
}

