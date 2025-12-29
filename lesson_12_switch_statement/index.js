// let day = 1;

// switch(day){
//     case 1:
//         console.log("It is Monday!");
//         break;
//     case 2:
//         console.log("It is tuesday!");
//         break;
//     case 3:
//         console.log("It is Wednesday!");
//         break;
//     case 4:
//         console.log("It is Thursday!");
//         break;
//     case 5:
//         console.log("It is Friday!");
//         break;
//     case 6:
//         console.log("It is Saturday!");
//         break;
//     case 7:
//         console.log("It is Sunday!");
//         break;
//     default:
//         console.lo("Enter valid input (1-7)"); 
// }

let testscore = 92;
let lettergrade;

switch(true){
    case testscore >= 90:
        lettergrade = "A";
        break;
    case testscore >= 80:
        lettergrade = "B";
        break;
    case testscore >= 60:
        lettergrade = "c";
        break;
    case testscore >= 40:
        lettergrade = "D";
        break;
    default:
        lettergrade = "F"
}

console.log(`you have scored ${lettergrade}`)
