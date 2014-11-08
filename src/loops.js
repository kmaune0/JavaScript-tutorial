// loops.js
// splashinn

// Loops in JavaScript are used to execute the same block of code a specified number of times or while a specified condition is true.
// 2 kinds of loops: for and while
// The for loop is used when you know in advance how many times the script should run.
// Example:
var i=0
for (i=0;i<=10;i++) {
  console.log("The number is " + i);
  console.log("<br />");
}

// The while loop is used when you want the loop to execute and continue executing while the specified condition is true. 
// Example:
var i=0
while (i<=10) {
  document.write("The number is " + i);
  document.write("<br />");
  i=i+1
}
