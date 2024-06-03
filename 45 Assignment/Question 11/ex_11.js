//Question 11
/*
Names: Store the names of a few of your friends in a array called names.
Print each person’s name by accessing each element in the list, one at a time.
*/
// array
// Defines an array of names
let names = ["Abdullah", "Nouman", "Muzammil", "Hammad", "Saad"];
//loop
//for loop
//for each 
for (let index = 0; index < names.length; index++) {
    console.log(names[index]);
}
//for each
names.forEach(name => {
    console.log(name);
});
//for of loop
for (let friendName of names) {
    console.log(friendName);
}
export {};
