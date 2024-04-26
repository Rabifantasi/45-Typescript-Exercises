/*Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
The function should have one parameter that collects as many items as the function call provides,
 and it should print a summary of the sandwich that is being ordered. Call the function three times,
using a different number of arguments each time.*/
function buildSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    if (items.length === 0) {
        console.log("You forgot to order a sandwich!");
        return;
    }
    console.log("You ordered a sandwich with:");
    for (var _a = 0, items_1 = items; _a < items_1.length; _a++) {
        var item = items_1[_a];
        console.log("- ".concat(item));
    }
}
// Call the function three times with different numbers of arguments
buildSandwich("bread", "cheese", "turkey");
buildSandwich("bread", "lettuce", "tomato", "mustard");
buildSandwich(); // No arguments
