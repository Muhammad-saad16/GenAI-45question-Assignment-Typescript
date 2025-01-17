//Question 24:
/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests.
Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/
const string1 = "Hello";
const string2 = "World";
console.log(string1 === string2); //false
console.log(string1 !== string2); //true
//Test using lower case  function
const upperCase = "HELLO";
const lowerCase = "hello";
console.log(upperCase.toLowerCase() === lowerCase); //true
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to,
// and less than or equal to
const num1 = 5;
const num2 = 5;
console.log(num1 == num2); //true
console.log(num1 != num2); //false
console.log(num1 > num2); //false
console.log(num1 < num2); //false
console.log(num1 >= num2); //true
console.log(num1 <= num2); //true
//Tests using "and" and "or" operators
const x = 5;
const y = 10;
const z = 15;
console.log(x < y && y > z); //false
console.log(x < y || y > z); //true
//Test whether an item is in a array
const array1 = [1, 2, 3, 4, 5];
const itemToFind = 3;
console.log(array1.indexOf(itemToFind) !== -1); //true
//Test whether an item is not in a array
console.log(array1.indexOf(10) === -1); //true
export {};
