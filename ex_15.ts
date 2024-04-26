/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. 
You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/

let myGuests = ["Allama Iqbal" , "Galib" , "My Father"];

let message = "You are cordially invited for the dinner party at my place tomorrow";

console.log(` Dear ${myGuests[0]} , ${message} `);

console.log(` Dear ${myGuests[1]} , ${message} `);

console.log(` Dear ${myGuests[2]} , ${message} `);

console.log("But galib is not available for the dinner party so we need to make a new list")

let newGuests = ["Allama Iqbal" , "Tipu Sultan" , "My Father"];

console.log(` Dear ${newGuests[0]} , ${message} `);

console.log(` Dear ${newGuests[1]} , ${message} `);

console.log(` Dear ${newGuests[2]} , ${message} `);

