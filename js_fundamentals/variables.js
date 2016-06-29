// Exercises: Variables

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Store the following into variables: job title, geographic location, partner's name, number of children.
// Output your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
var x = "Farmer"
var y = "Antarctica"
var z = "a penguin"
var kidsNum = "no"
console.log("you will be a " + x + " in " + y +" and married to " + z, "with " +kidsNum, "kids.")

// EXERCISE: The Age Calculator

// Forgot how old someone is? Calculate it!

// Store the current year in a variable.
var currentYear = 2016
var birthYear = 1992
var age = currentYear-birthYear
console.log("They appear to be "+age+ " years old.")

// Store their birth year in a variable.
// Calculate their age based on the stored values.
// Output them to the screen like so: "They are NN years old.", substituting the values.

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!
var currentAge = 24
var maximumAge = 93
var costPerDay = 3
var costForLife = (maximumAge-currentAge)*365.25*costPerDay
console.log("You would need "+costForLife+" dollars to last you a lifetime of coffee.")
// Store your current age into a variable.
// Store a maximum age into a variable.
// Store an estimated amount per day (as a number).
// Calculate how many you would eat total for the rest of your life.
// Output the result to the screen like so: "You will need NN to last you until the ripe old age of X".

// EXERCISE: The Geometrizer

// Calculate properties of a circle, using the definitions here.

// Store a radius into a variable.
var radius = 34
var circumference = Math.PI*(2*radius)
var area = Math.PI*(radius*radius)

console.log ("the circumference is " +circumference)
console.log ("The area is "+area )
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Calculate the area based on the radius, and output "The area is NN".

// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

var tempInC = 50
var tempInF = (tempInC*1.8) + 32

console.log (tempInC+"°C is " + tempInF + "°F")
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."
