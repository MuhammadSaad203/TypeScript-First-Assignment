var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// TASK 11 : "NAMES"
// QUESTION : Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var names = ["Shaher Yar", "Naimat", "Faizan", "Abdullah"];
// Using For Loop for printing the names
var array_lenght = names.length;
for (var i = 0; i < array_lenght; i++) {
    console.log(names[i]);
}
// TASK 12 : "GREETINGS"
// QUESTION Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var message = ",you are hardworking";
for (var i = 0; i < array_lenght; i++) {
    console.log(names[i] + message);
}
// TASK 13 : "Your Own Array"
// QUESTION : Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var modes = ["Audi", "Civic", "Corolla", "Buggati"];
var message_2 = " I would like to own";
for (var i = 0; i < modes.length; i++) {
    console.log(message_2 + " " + modes[i]);
}
// TASK 14 : "Guest List"
//QUESTION : If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var friends = ["Anas", "Azban", "Kashif"];
var invite = "You are invited to dinner Mr.";
for (var i = 0; i < friends.length; i++) {
    console.log(invite + friends[i]);
}
// TASK 15 : "Changing Guest List"
// QUESTION : You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// Person who can't make it to the dinner
console.log("".concat(friends[2], " can not make it to the dinner"));
// Replacing that guest with the new one
friends[2] = "Saboor";
console.log(friends);
// printing Modified Guest List
for (var i = 0; i < friends.length; i++) {
    console.log(invite + friends[i]);
}
// TASK 16 : "More Guests"
console.log("".concat(friends, ", I found a bigger dinner table"));
// Adding Sabbir at the beginning
friends.unshift("Sabbir");
// Adding Hassan in middle
friends.splice(2, 0, "Hassan");
// Adding Rauf at the end
friends.push("Rauf"); // using push because of strings
// The new guest list will be
for (var i = 0; i < friends.length; i++) {
    console.log(invite + friends[i]);
}
// TASK 17 : "Shrinking Guest List"
// QUESTION : You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
console.log("Sorry, I just found out that my new dinner table won't arrive in time for the dinner, and I have space for only two guests.");
//using while loop for dropping the guests
while (friends.length > 2) {
    console.log("Sorry, Mr.".concat(friends.pop(), " due to dinnner table issue you are no longer invited. "));
}
// printing the name of those who are still invited
for (var i = 0; i < friends.length; i++) {
    console.log("Mr.".concat(friends[i], " you are still invited at our dinner."));
}
// keeping the list empty
friends.pop();
friends.pop();
console.log(friends);
// TASK 18 : "Seeing the World"
var places = ["Turkey", "Saudi Arabia", "London", "Paris", "America"];
// Printing  array in its original order.
console.log(places);
//  Printing array in alphabetical order without modifying the actual list.
console.log(__spreadArray([], places, true).sort());
// Showing that our array is still in its original order by printing it.
console.log(places);
// Printing array in reverse alphabetical order without modifying the actual list.
console.log(__spreadArray([], places, true).sort().reverse());
// Showing that our array is still in its original order by printing it again.
console.log(places);
// Reversing the order of our list. Print the array to show that its order has changed.
console.log(places.reverse());
//  Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(places.reverse());
// Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
console.log(places.sort());
// Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
console.log(places.sort().reverse());
// TASK 19
//QUESTION : Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log("I am inviting ".concat(names.length, " people to the dinner "));
// TASK 20 
// Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
var cities = ["Karachi", "Lahore", "Peshawar", "Sindh", "Sukkur"];
for (var _i = 0, cities_1 = cities; _i < cities_1.length; _i++) {
    var city = cities_1[_i];
    console.log(city);
}
// TASK 21
// think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var student = {
    Name: "Muhammad Saad",
    University: "NEDUET",
    Year: "Final Year"
};
console.log(student);

// TASK 22 : "Intentional Error"
// QUESTION : If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
var color = ["Red", "White", "Black", "Golden"];
// Creating an indexing error
// console.log(color{5}) This will throw me error because we used curly brackets and called element 5 but it only contains 4 elements
// Correct Form will be
console.log(color[2]);
