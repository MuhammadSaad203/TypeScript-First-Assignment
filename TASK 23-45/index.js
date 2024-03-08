// TASK 23 : " Conditional Tests "
// Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test.
var car = "corolla";
console.log("Is car == 'corolla'? I predict True.");
console.log(car == "corolla");
console.log("Is car == 'corolla'? I predict True.");
console.log(car == "Civic");
var number = 7;
console.log("Is number == '7'? I predict True.");
console.log(number == 7);
console.log("Is number == '7'? I predict True.");
console.log(number !== 7);
var str1 = "Usman";
console.log("Is str1 == 'Usman'? I predict True.");
console.log(str1 == "Usman");
console.log("Is str1 == 'Usman'? I predict True.");
console.log(str1 == "Hamza");
var str2 = "Ahmed";
console.log("Is str2 == 'Ahmed'? I predict True.");
console.log(str2 == "Ahmed");
console.log("Is str2 == 'Ahmed'? I predict True.");
console.log(str2 != "Ahmed");
var fruit = "Guava";
console.log("Is fruit == 'Guava'? I predict True.");
console.log(fruit == "Guava");
console.log("Is fruit == 'Guava'? I predict True.");
console.log(fruit == "Banana");
// TASK 24 : "More Conditional Tests"
// You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// Tests for equality and inequality with strings
var str3 = "Apples";
var str4 = "Bananas";
console.log("Is str3==str4");
console.log(str3 == str4);
console.log("Is str3!=str4");
console.log(str3 != str4);
// Tests using the lower case function
var str5 = "world";
var str6 = "WORLD";
console.log("Is str5 is equal str6 suing lower case function");
console.log(str5 == str6.toLowerCase());
console.log("Is str5 is not equal str6 suing lower case function");
console.log(str5 != str6.toLowerCase());
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
var num1 = 2;
var num2 = 3;
var num3 = 4;
var num4 = 2;
console.log("Is it true that num1 is equal to num4");
console.log(num1 == num4);
console.log("Is it true that num1 is  equal to num2");
console.log(num1 == num2);
console.log("Is it true that num1 is greater than num2");
console.log(num1 > num2);
console.log("Is it true that num1 is less than num2");
console.log(num1 < num2);
console.log("Is it true that num1 is less than or equal to num2");
console.log(num1 <= num2);
console.log("Is it true that num2 is greater than or equal to num3");
console.log(num2 >= num3);
//  Tests using "and" and "or" operators
console.log(" num3 less than 10 AND num4 greater than 1. Is it True?");
console.log(num3 < 10 && num4 > 1);
console.log(" num3 greater than 10 AND num4 less than 1. Is it True?");
console.log(num3 > 10 && num4 < 1);
console.log(" num1 less than 10 OR num2 less than 1. Is it True?");
console.log(num1 < 10 || num2 < 1);
console.log(" num1 greater than 10 OR num2 less than 1. Is it True?");
console.log(num1 > 10 || num2 < 1);
// Test whether an item is in a array
var cities = ["Karachi", "Lahore", "Quetta", "Sukkur"];
console.log("Is 'Sukkur' in cities ");
console.log(cities.includes("Sukkur"));
console.log("Is 'Abbotabad' in cities ");
console.log(cities.includes("Abbotabad"));
// TASK 25 : "Alien Colors #1:"
// Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red
var alien_color = "green";
if (alien_color === "green") {
    console.log("player just earned 5 points.");
}
if (alien_color === "red") {
    console.log("player just earned 5 points.");
}
// TASK 26 : "Alien Colors #2"
// Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
if (alien_color = "green") {
    console.log("the player just earned 5 points for shooting the alien.");
}
else {
    console.log("the player just earned 10 points.");
}
if (alien_color != "green") {
    console.log("the player just earned 10 points.");
}
else {
    console.log("the player just earned 5 points for shooting the alien.");
}
// TASK 27 : "Alien Colors #3"
var alien_color1 = "green";
if (alien_color1 === "green") {
    console.log(" the player earned 5 points.");
}
else if (alien_color === " yellow") {
    console.log(" the player earned 10 points.");
}
else {
    console.log("the player earned 15 points.");
}
var alien_color2 = "yellow";
if (alien_color2 === "green") {
    console.log(" the player earned 5 points.");
}
else if (alien_color2 === "yellow") {
    console.log(" the player earned 10 points.");
}
else {
    console.log("the player earned 15 points.");
}
var alien_color3 = "red";
if (alien_color3 === "green") {
    console.log(" the player earned 5 points.");
}
else if (alien_color3 === " yellow") {
    console.log(" the player earned 10 points.");
}
else {
    console.log("the player earned 15 points.");
}
// TASK 28 : "Stages of Life"
// Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
var age = 21;
if (age < 2) {
    console.log("the person is a baby.");
}
else if (age >= 2 && age <= 4) {
    console.log("the person is a toddler.");
}
else if (age >= 4 && age <= 13) {
    console.log("the person is a kid.");
}
else if (age >= 13 && age <= 20) {
    console.log(" person is a teenager.");
}
else if (age >= 20 && age <= 65) {
    console.log("the person is an adult.");
}
else {
    console.log("the person is an elder.");
}
// TASK 29 : "Favorite Fruit"
// Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
var favorite_fruits = ["banana", "strawberry", "cherry"];
if (favorite_fruits.includes("banana")) {
    console.log("You really like banana");
}
if (favorite_fruits.includes("strawberry")) {
    console.log("You really like strawberry");
}
if (favorite_fruits.includes("cherry")) {
    console.log("You really like cherry!");
}
if (favorite_fruits.includes("watermelon")) {
    console.log("You really like watermelon!");
}
if (favorite_fruits.includes("guava")) {
    console.log("You really like guava!");
}
// TASK 30 : "Hello Admin"
// Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
var usernames = ["admin", "Noman", "Mukarram", "Ehthisham", "Osama"];
for (var i = 0; i < usernames.length; i++) {
    if (usernames[i] == "admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(usernames[i], " thank you for logging in again."));
    }
}
// TASK 31 : "No Users:"
// Add an if test to Exercise 28 to make sure the list of users is not empty.
if (usernames.length === 0) {
    console.log("List is empty");
}
else {
    console.log("List is not empty");
}
usernames = [];
if (usernames.length === 0) {
    console.log("List is empty");
}
else {
    console.log("List is not empty");
}
// TASK 32 : "Checking Usernames"
//  Do the following to create a program that simulates how websites ensure that everyone has a unique username.
var current_users = ["Osama", "Noman", "Hamza", "Shayan", "Rizwan"];
var new_users = ["Amir", "Ali", "Noman", "Hamza", "Jamil"];
var lower_current_users = current_users.map(function (current_user) { return current_user.toLowerCase(); });
new_users.forEach(function (new_user) {
    if (lower_current_users.includes(new_user.toLowerCase())) {
        console.log("The ".concat(new_user, " will need a new user name"));
    }
    else {
        console.log("The ".concat(new_user, " the username is available."));
    }
});
// TASK 33 : "Ordinal Numbers"
// Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach(function (number) {
    if (number === 1) {
        console.log(1 + "st");
    }
    else if (number === 2) {
        console.log(2 + "nd");
    }
    else if (number === 3) {
        console.log(number + "rd");
    }
    else {
        console.log(number + "th");
    }
});
//TASK 34 : "Pizzas"
// Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
var pizzas = ["Supreme", "BBQ Chicken", "Four Cheese"];
for (var i = 0; i < pizzas.length; i++) {
    console.log(pizzas[i]);
}
for (var i = 0; i < pizzas.length; i++) {
    console.log("I like ".concat(pizzas[i], " pizza"));
}
console.log("I am so found of pizzas. \nI like BBQ chicken falavor the most.\nI really love Pizza");
// TASK 35 : "Animals"
// Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
var animals = ["Dog", "Cat", "Rabbit"];
for (var _i = 0, animals_1 = animals; _i < animals_1.length; _i++) {
    var animal = animals_1[_i];
    console.log("The name of animal is ".concat(animal));
}
for (var _a = 0, animals_2 = animals; _a < animals_2.length; _a++) {
    var animal = animals_2[_a];
    console.log("A ".concat(animal, " would make a great pet"));
}
console.log("All these animals are harmless.\n Cats and Dogs are omnivores\n but Rabbits are herbivores.");
// TASK 36 : "T-Shirt "
// Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
var make_shirt = function (size, message) {
    return "A" + " " + size + " " + " shirt with the message " + message;
};
console.log(make_shirt("medium", "Never Give up"));
// TASK 37 : "Large Shirts"
//Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
var makeShirt = function (size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love Tpe Script"; }
    console.log("We have ".concat(size, " size shirts with message ").concat(message));
};
makeShirt();
makeShirt('medium');
makeShirt("large", "Keep Calm");
// TASK 38 : "Cities"
//Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
var describe_city = function (city, Country) {
    if (city === void 0) { city = " String "; }
    if (Country === void 0) { Country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(Country));
};
describe_city("Karachi");
describe_city("Sukkur", "Pakistan");
describe_city("Istanbul", "Turkey");
// TASK 39 : "City Names"
// Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
var city_country = function (city, country) {
    if (city === void 0) { city = "String"; }
    if (country === void 0) { country = "String"; }
    console.log("\"".concat(city, ",").concat(country, "\""));
};
city_country("Karachi", "Pakistan");
city_country("Jeddah", "Saudi Arabia");
city_country("Istanbul", "Turkey");
// TASK 40 : "Album"
// Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
var make_album = function (artist_name, album_title) {
    return {
        artist_name: artist_name,
        album_title: album_title
    };
};
console.log(make_album('Talha', 'Album1'));
console.log(make_album('Noman', 'Album2'));
console.log(make_album('Talha', 'Album3'));
var make_album_tracks = function (artist_name, album_title, tracks) {
    return {
        artist_name: artist_name,
        album_title: album_title,
        tracks: tracks
    };
};
console.log(make_album_tracks('Talha', 'Album4', 5));
console.log(make_album_tracks('Noman', 'Album5', 10));
console.log(make_album_tracks('Anjum', 'Album6', 15));
// TASK 41 : "Magicians"
// Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician_1 = magicians_1[_i];
        console.log(magician_1);
    }
}
var magician = ["Babar", "Saeed", "Murtaza"];
show_magicians(magician);
// TASK 42 : "Great Magicians"
// Start with a copy of your program from Exercise 41. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "Great" + " " + magicians[i];
    }
}
var Great_magician = ["Babar", "Saeed", "Murtaza"];
make_great(Great_magician);
show_magicians(Great_magician);
// TASK 43 : "Unchanged Magicians"
// Start with your work from Exercise 41. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function make_greats(magicians) {
    var greatMagicians = [];
    for (var i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] + " " + "Great");
    }
    return greatMagicians;
}
var magicians2 = ["Babar", "Saeed", "Murtaza"];
var Great_Magicians = make_greats(magicians2);
show_magicians(magicians2);
show_magicians(Great_Magicians);
// TASK 44 : "Sandwiches"
var make_sandwhich = function (item1, item2) {
    if (item1 === void 0) { item1 = ""; }
    if (item2 === void 0) { item2 = ""; }
    console.log("".concat(item1, " and ").concat(item2, " are required to make sandwhich"));
};
make_sandwhich("Cheese", "Chicken");
make_sandwhich("Bread", "Sauce");
make_sandwhich("Butter", "Mayonnise");
function createCar(manufacturer, model) {
    var option = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        option[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    option.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        car[key] = value;
    });
    return car;
}
console.log(createCar('Audi', 'A4', ['color', 'black'], ['year', 2023]));
