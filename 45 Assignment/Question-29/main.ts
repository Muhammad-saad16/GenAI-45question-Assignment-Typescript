//Question 29
/*
Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check
for certain fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.
• Write five if statements. Each should check whether a certain kind of fruit is in your array.
 If the fruit is in your array, the if block should print a statement, such as You really like bananas!
*/

let favorite_fruits = ["apple", "Mango", "orange"];

if (favorite_fruits.includes("apple")) {
    console.log("I like apple too");
} else {
    console.log("I don't like apple");
}

if (favorite_fruits.includes("Mango")) {
    console.log("I like Mango too");
} else {
    console.log("I don't like Mango");
}   

if (favorite_fruits.includes("orange")) {  
    console.log("I like orange too");
} else {
    console.log("I don't like orange");
}  

if (favorite_fruits.includes("Banana")) {  
    console.log("I like Banana too");
} else {
    console.log("I don't like Banana");
}  
