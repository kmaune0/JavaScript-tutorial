/*

JavaScript Strings

JavaScript does not have a character type, so there is no distinction between 'a' and "a"; both are ways of writing the same string. For example, the word don't can be represented in JavaScript as "don't" or as 'don\'t'.

*/

// The == operator can be used w/ strings. Using this code:
var s1 = 'Hello!';
var s2 = 'Hello!';
var s3 = s1;

// all of the following expressions are true:
s1 == s2
s1 == s3
s3 == 'Hello!'

/*

The expression 3 == '3' is also true because JavaScript applies type conversion to the operands of the == operator

All the comparison operators work w/ strings; type conversion will be applied so that the expression 'Aa' > 'AA' && '30' > 30 - 1 is true.

*/
