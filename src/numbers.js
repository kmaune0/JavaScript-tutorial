/*
JavaScript Numbers

JavaScript does not distinguish between integers and reals. All numbers are represented in 8 byte IEEE floating point numberic format, regardless of how they are written in the program. It is important not to rely on exact integer arithmetic when writing JavaScript. For example, it is dangerous to test computed numerical values for equality, even if it appears that only integer operations have been carried out.

IEEE floating point numbers include values displayed in JavaScript as Infinity, -Infinity and NaN (Not a Number).
*/

var result = 2 / 0;  // result has the value Infinity
var result = -2 / 0;  // result has the value -Infinity
var result = 0 / 0;  // result has the value NaN

/*
JavaScript has many predefined objects and classes, among them Number and Math. Number.POSITIVE_INFINTY, Number.NEGATIVE_INFINITY and Number.NaN provide another way of creating the three special numerical values. Note that although equality tests work for Infinity and -Infinity, they do not for NaN; a build in function, isNaN, must be used:
*/

2 / 0 == Number.POSITIVE_INFINITY  // has the value true
-2 / 0 == Number.NEGATIVE_INFINITY // has the value true
0 / 0 == Number.NaN  // has the value false
isNaN(0 / 0)  // has the value true
