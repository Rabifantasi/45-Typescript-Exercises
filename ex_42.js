/*Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the
array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has
actually been modified.*/
var newMagicians = [
    "Shahrukh Zahoor",
    "Munawar Khan",
    "Mian Afzal Rasheed",
];
function makeGreat(newMagicians) {
    for (var i = 0; i < newMagicians.length; i++) {
        newMagicians[i] = "The Great ".concat(newMagicians[i]);
    }
}
function showMagician(newMagicians) {
    console.log("Here is a list of the Great Pakistani Magicians:");
    for (var _i = 0, newMagicians_1 = newMagicians; _i < newMagicians_1.length; _i++) {
        var magician = newMagicians_1[_i];
        console.log(magician);
    }
}
// Call the functions with the correct variable
makeGreat(newMagicians);
showMagician(newMagicians);
