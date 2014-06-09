/* Data types in JavaScript

Variables are not confined to one type.
Variables should normally be declared using the keyword var.
The following is legal in JavaScript:
*/

var count = 0;  // declared and initialized to a number value
count = count + 1;
count = 'Error: too many values entered.';  // given a string value

/* During execution, JavaScript values are automatically converted from one type to another to ensure type compatibilty. Usually this has the expected effect, but care is needed. Consider the following code:
*/

var product = 2 * '10' + 3;
var sum = 2 + '10' + 3;
var msg = 'Distance is ' + (2+3) + 'km';

/*This results in product having the numberical value 23, since the string '10' is converted to a number to be compatible w/ the * operator. However, sum has the string value '2103', since the + operator is overloaded and is assumed to refer to string concatenation if either of its arguments is a string. The parantheses are essential if the value of msg is to be 'Distance is 5 km'; if they are omitted the value will be 'Distance is 23 km'.

JavaScript has three non-composite data types" numbers, strings, and booleans, and one composite type: object. Arrays are a special kind of object, as are functions.

The distinction is important when considering the effect functions can have on the values of their arguments:
- If a variable has a non-composite data value, then if it is used as the argument of a function, its value outside the function cannot be changed.
- If a variable has a composite data value, then changing a component of that value inside a function changes the value outside the function.
