// string method allows us to work with or manipulate string/ text

let userName = "Samip Aryal"

console.log(userName.charAt(4)); // returns char at certain index starts form 0

console.log(userName.indexOf("a"));// returns index of certain chars's first occurance. it is case sensitive

console.log(userName.lastIndexOf("a")); // returns the last index of certain char

console.log(userName.length); //gives length of string

console.log(userName);
console.log(userName.trim()); // trims space infornt or at last of string

console.log(userName.toLocaleUpperCase()); //convert string to uppercase
console.log(userName.toLocaleLowerCase()); //convert string to lower case

console.log(userName.repeat(3)); //repeats a string 3 times. 3 can be changed to any number/ variables

let result = userName.startsWith(" "); // it has 2 possible outcomes true or false and it check if somthing that is inside "" starts for a string
console.log(result);

let result1 = userName.endsWith(" ") // same as startswith but for last char in string
console.log(result1);

let result2 = userName.includes(" ") // check if string contains the char that is enclosed inside ""
console.log(result2);

let phoneNumber = "123-234-5679";
phoneNumber = phoneNumber.replaceAll("-",""); // replace all replaces all the char inside first "" with chars inside second ""
console.log(phoneNumber)

console.log(phoneNumber.padStart(15,"0")); // the left side of , inside() is the number of character the string needs to be while right side is char that is replaced if string is lower than req amount. it adds to start

console.log(phoneNumber.padEnd(20,"0")); // same like padstart but adds to end