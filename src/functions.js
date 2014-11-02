// A function is a reusable piece of code which can be called anywhere in the program.

// Function definition:
function sayHello() {
  console.log("Hello!");
}

// Another way to define a function:
var square = function(x) {
  return x * x;
}
console.log(square(12)); // -> 144

// Another function example:
function log(x, y) {
  y = y || "World";
  console.log(x, y);
}
console.log("Hello"); // -> Hello World
console.log("Hello", "Kyle"); // -> Hello Kyle
console.log("Hello", ""); // -> Hello World

// Yet another function example:
function log(x, y = "World") {
  console.log(x, y);
}
console.log("Hello"); // -> Hello World
console.log("Hello", "splashinn"); // -> Hello splashinn
console.log("Hello", "") // -> Hello 

// And another example showing scope:
var x = 1;

function foo(x, y = x) {
  console.log(y);
}
foo(2) // -> 2
