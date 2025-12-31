let x = 2; // here x is global variable. gloable variables  must be unique

function1();

function function1() {
  let x = 1; // here x is local variable. local variable can be same
  console.log(x);
}

function function2() {
  let x = 3;
  console.log(x);
}
