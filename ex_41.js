/*Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which
prints the name of each magician in the array.*/
var magicians = [
    "Shahrukh Zahoor",
    "Munawar Khan",
    "Mian Afzal Rasheed",
];
function showMagicians(magicians) {
    console.log("Here is a list of Pakistani magicians (more may exist!):");
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
showMagicians(magicians);
