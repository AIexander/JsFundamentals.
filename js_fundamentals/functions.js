// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.
var tellFortune = function(childs, partner, geo, job) {
  console.log ("You will be a "+job+" in "+geo+", and married to " +partner+" with " + childs + " kids.");
}
tellFortune("five","Meowth","zootopia","Penguin Herder")

// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!
var calculateAge = function(birthyear, thisyear){
  console.log ("You are either " + (thisyear-birthyear)+ " or "+ (thisyear-birthyear-1) +" years old");
}
calculateAge(1992, 2016)
calculateAge(1984, 2116)
calculateAge(2012, 1932)

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
var penguin = new Date();
var n = penguin.getFullYear();

var calculateSupply = function(age, amountPD){
  console.log("You will need "+(((100-age)*365.25)*amountPD)+" dollars to last to the age of 100" + " spending "+amountPD+" per day" );
}
calculateSupply(24, 100)
calculateSupply(43, 50)
calculateSupply(24,15.8)

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
