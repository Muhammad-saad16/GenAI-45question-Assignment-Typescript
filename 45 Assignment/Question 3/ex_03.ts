//Question 3
/*
Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase,
and titlecase
*/

const personName: string = "Muhammad Saad";

//lowercase
console.log(personName.toLowerCase())

//uppercase
console.log(personName.toUpperCase())

//titlecase
let firstLetter: string = personName.charAt(0).toUpperCase();
let restLetters: string = personName.slice(1).toLowerCase();

let titleCase = firstLetter + restLetters;

console.log(titleCase);


