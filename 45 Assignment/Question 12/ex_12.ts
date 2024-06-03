//Question 12
/*
Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, 
print a message to them. The text of each message should be the same,
but each message should be personalized with the person’s name.
*/

let friend: string[] = ["Abdullah","Nouman", "Muzammil","Hammad","Saad"];

for (let index = 0; index < friend.length; index++) {
    console.log(friend[index]);
    
}

//for each
friend.forEach(name => {
    console.log(`hello, ${name}! how are you today`);
    
});

