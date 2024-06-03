//Question 19
/*
Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people
you are inviting to dinner.
*/

let guestslists: string[] = ["Abdullah","Hina Naseer","Saad","Miss Hina"];


//print message
console.log("unfortunately! the new dinner table wont arrive so we can invited only");

guestslists.unshift("alice","bob")

// print message updated list
console.log("Updated list of guest:",guestslists);

// remove guest from the list
while (guestslists.length > 2) {
    let removedGuest: string | undefined = guestslists.pop();
    if (removedGuest !== undefined) {
        console.log(`Sorry ${removedGuest},we cant invite you`);
    }
}

//Print a message to each of the two people still on your list, letting them know they’re still invited.
guestslists.forEach(guest => {
   console.log(`Dear ${guest}, you both are invited for the dinner`);    
});

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program

guestslists.splice(0, guestslists.length)

//print updated empty list

console.log("updated list of guest:", guestslists);
