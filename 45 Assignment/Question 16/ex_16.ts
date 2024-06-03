//Question 16

/*
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.

• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger
  dinner table.
• Add one new guest to the beginning of your array.
• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
• Print a new set of invitation messages, one for each person in your list.

*/


let guestBiglists: string[] = ["Abdullah","Hina Naseer","Saad","Miss Hina"];

console.log("Great News! we found a bigger table");

// unshift
guestBiglists.unshift("Muhammad Saad")

//splice()
guestBiglists.splice(Math.floor(guestBiglists.length/2),0,"Alyan")

//push()
guestBiglists.push("Cheetah")


//for each
guestBiglists.forEach(guest => {
    console.log(`Dear ${guest}, you all are cordilly invited to dinner`);
    
});
