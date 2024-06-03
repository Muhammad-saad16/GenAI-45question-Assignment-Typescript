//Question 17
/*
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list,
  print a message to that person letting them know you’re sorry you can’t invite them to dinner.
• Print a message to each of the two people still on your list, letting them know they’re still invited.
• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty
  list at the end of your program
*/
let guestslists = ["Abdullah", "Hina Naseer", "Saad", "Miss Hina"];
//print message
console.log("unfortunately! the new dinner table wont arrive so we can invited only");
guestslists.unshift("alice", "bob");
// print message updated list
console.log("Updated list of guest:", guestslists);
// remove guest from the list
while (guestslists.length > 2) {
    let removedGuest = guestslists.pop();
    if (removedGuest !== undefined) {
        console.log(`Sorry ${removedGuest},we cant invite you`);
    }
}
//Print a message to each of the two people still on your list, letting them know they’re still invited.
guestslists.forEach(guest => {
    console.log(`Dear ${guest}, you both are invited for the dinner`);
});
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program
guestslists.splice(0, guestslists.length);
//print updated empty list
console.log("updated list of guest:", guestslists);
export {};
