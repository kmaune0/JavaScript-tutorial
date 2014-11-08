// loops.js
// splashinn

// Loops in JavaScript are used to execute the same block of code a specified number of times or while a specified condition is true.
// 2 kinds of loops: for and while
// The for loop is used when you know in advance how many times the script should run.
// Examples:
var i=0
for (i=0;i<=10;i++) {
  console.log("The number is " + i);
  console.log("<br />");
}

var index;
var a = ["a", "b", "c"];
for (index = 0; index < a.length; ++index) {
    console.log(a[index]);
}

// If you're using an environment that supports the Array features of ECMAScript5 (directly or using a shim), you can use the new forEach function:
var a = ["a", "b", "c"];
a.forEach(function(entry) {
    console.log(entry);
});

// for-in loops through the enumerable properties of an object, not the indexes of an array.
var key;
var a = [];
a[0] = "a";
a[10] = "b";
a[10000] = "c";
for (key in a) {
    if (a.hasOwnProperty(key)  &&        // These are explained
        /^0$|^[1-9]\d*$/.test(key) &&    // and then hidden
        key <= 4294967294                // away below
        ) {
        console.log(a[key]);
    }
}

// The while loop is used when you want the loop to execute and continue executing while the specified condition is true. 
// Example:
var i=0
while (i<=10) {
  document.write("The number is " + i);
  document.write("<br />");
  i=i+1
}
