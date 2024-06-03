//Question 14
/*
Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner.
*/
// Define array of guest
let guestlist = ["Abdullah", "Hammad", "Saad", "Miss Hina"];
//Invite each guest for dinner
guestlist.forEach(guest => {
    console.log(`Dear ${guest}, you are cordilly invited for dinner`);
});
//map()
// Invite Guest
let invitation = guestlist.map(guest => `Dear ${guest}, you are cordilly invited for dinner`);
invitation.forEach(invitations => {
    console.log(invitations);
});
export {};
