/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons,
write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/
// Tests for equality and inequality with strings
// Equality
var myName = "Rabia";
console.log("is myName == 'Rabia' ? I predict True.");
console.log(myName == "Rabia");
// inequality
var yourName = "Rabia";
console.log("is yourName != 'Rabia' ? I predict False.");
console.log(yourName != "Rabia");
// Tests using the lower case function
var fruit = "mango";
console.log("Is fruit == 'mango' ? I predict True");
console.log(fruit == "mango");
var fruit2 = "mango";
console.log("Is fruit2 != 'mango' ? I predict False.");
console.log(fruit2 != "mango");
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var number = 100;
console.log("Is number == '100' ? I predict True");
console.log(number == 100);
console.log("Is number != '100' ? I predict False");
console.log(number != 100);
console.log("Is number '50' < '100' ? I predict False");
console.log(number < 100);
console.log("Is number '50' > '100' ? I predict False");
console.log(number > 100);
console.log("Is number '50' >= '100' ? I predict True");
console.log(number >= 100);
console.log("Is number '50' <= '100' ? I predict True");
console.log(number <= 100);
// Tests using "and" and "or" operators
var no1 = 50;
var no2 = 25;
console.log(no1 > 35 && no2 > 35); // I predict False
console.log(no1 < 35 || no2 < 35); // I predict True
// Test whether an item is in a array
var myArray = ["KamranTessori", "DaniyalNagori", "Zia"];
console.log(Array.isArray(myArray)); // I predict True
// Test whether an item is not in a array
var greatPerson = "KamranTessori" + "Zia" + "DaniyalNagori";
console.log(Array.isArray(greatPerson)); // I predict False
