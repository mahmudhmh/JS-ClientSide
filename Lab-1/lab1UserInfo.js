var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
confirm("Is your full name " + fullName + "?");

var birthYear = prompt("Enter your birth year:");
var currentYear = new Date().getFullYear();
var age = currentYear - birthYear;

alert("Welcome " + fullName + "! You are " + age + " years old.");
