/*Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of
magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array.
Call show_magicians() with each array to
show that you have one array of the original names and one array with the Great added to each magician’s name.*/
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var originalMagicians = ["Shahrukh Zahoor", "Munawar Khan", "Mian Afzal Rasheed"];
function makeGreat(magicians) {
    //   """Modifies a list of magicians by adding 'The Great' before each name.
    //   This function creates a copy of the original list to avoid modifying it, 
    //   then adds 'The Great' to each name in the copied list, and returns the modified list.
    //   """
    // Create a copy of the list using spread syntax
    var greatMagicians = __spreadArray([], magicians, true);
    for (var i = 0; i < greatMagicians.length; i++) {
        greatMagicians[i] = "The Great ".concat(greatMagicians[i]); // Fix the error (if any)
    }
    return greatMagicians;
}
function showMagicians(magicians) {
    //   """Prints a list of magicians."""
    console.log("Here is a list of the Magicians:");
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Make a copy of the magicians list and add 'The Great' to each name
var greatMagicians = makeGreat(originalMagicians);
// Show the original magicians (unchanged)
showMagicians(originalMagicians);
// Show the great magicians (modified list)
showMagicians(greatMagicians);
