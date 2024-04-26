/*Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite?
 Make a list that includes at least three people you’d like to invite to dinner.
Then use your list to print a message to each person, inviting them to dinner.*/
var myGuests = ["Allama Iqbal", "Galib", "My Father"];
var message = "You are cordially invited for the dinner party at my place tomorrow";
console.log(" Dear ".concat(myGuests[0], " , ").concat(message, " "));
