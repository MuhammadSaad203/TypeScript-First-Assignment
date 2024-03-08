// TASK 2 : "PERSONAL MESSAGE"
// Question : Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

let personName : string = "Osman";
console.log( `Hello ${personName} would you like to learn some Python today ? ` );

// TASK 3 : "Name Cases"
// Question : Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName2 : string = "Shayan";
// To Upper Case
console.log("The person's name in Upper Case would be ", personName2.toUpperCase());
// To Lower Case
console.log("The person's name in Lower Case would be ", personName2.toLowerCase());
// to Title Case
console.log("The person's name in Title Case would be ", personName2.replace(/\bw/g,c => c.toUpperCase()));

// TASK 4 : "Famous Quote"
// Question : Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks
console.log("Albert Einstein once said, “In the middle of difficulty lies oppurtunity.”")

// TASK 5 : " Famous Quote 2 "
// Question : Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message
let famous_Person : string = "Albert Einstein";
let message = "In the middle of diificulty lies oppurtunity."
console.log(`${famous_Person} once said, "${message}"  `)
