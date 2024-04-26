/* More Guests: You just found a bigger dinner table, so now more space is available.
Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your
 program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.
• Print a new set of invitation messages, one for each person in your list.*/
var newGuests = ["Allama Iqbal", "Tipu Sultan", "My Father"];
var message = "You are cordially invited for the dinner party at my place tomorrow";
newGuests.unshift("PARSI");
console.log(newGuests);
newGuests.splice(2, 0, "farooq");
console.log(newGuests);
newGuests.push("sindhi");
console.log(newGuests);
console.log("Dear ".concat(newGuests[0], " , ").concat(message, "}"));
console.log("Dear ".concat(newGuests[1], " , ").concat(message, "}"));
console.log("Dear ".concat(newGuests[2], " , ").concat(message, "}"));
console.log("Dear ".concat(newGuests[3], " , ").concat(message, "}"));
console.log("Dear ".concat(newGuests[4], " , ").concat(message, "}"));
