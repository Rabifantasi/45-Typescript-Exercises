/*City Names: Write a function called city_country() that takes in the name of a city and its country.
The function should return a string formatted like this:


"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value that’s returned.*/
function cityCountry(city, country) {
    return "".concat(city.toUpperCase(), ", ").concat(country.toUpperCase());
}
var lahorePakistan = cityCountry('Lahore', 'Pakistan');
var torontoCanada = cityCountry('Toronto', 'Canada');
var parisFrance = cityCountry('Paris', 'France');
console.log(lahorePakistan);
console.log(torontoCanada);
console.log(parisFrance);
