// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var personName = "Rabia";
//  upper case
console.log(personName.toUpperCase());
// lower case
console.log(personName.toLowerCase());
// titlecase
var firstLetter = personName.charAt(0).toUpperCase();
var restLetter = personName.slice(1).toLowerCase();
var titlecase = firstLetter + restLetter;
console.log(titlecase);
