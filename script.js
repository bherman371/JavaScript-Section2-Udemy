/* #17: Truthy and Falsy Values and Equality Operators */
// Falsy Values: Undefined, null, 0, "", NaN
// Truthy Values: NOT falsy values

// Falsy Value Example
var height;

if (height) {
    console.log("Variable is defined.");
} else {
    console.log("Variable has NOT been defined.");
}

// Another Falsy Value Example
height = 0;
if (height || height === 0) {
    console.log("Variable is defined.");
} else {
    console.log("Variable has NOT been defined.");
}

// Truthy Value Example
height = 23;

if (height) {
    console.log("Variable is defined.");
} else {
    console.log("Variable has NOT been defined.");
}

// Equality Operators
// === - Strict Equality Operator
// == - Does type coercion. Example: Can compare a number to a string
if (height === "23") {
    console.log("The == operator does type coercion!");
}

/* #25: Objects and Properties */

// Object literal: defining an object with the curly brackets
var john = {
    firstName: "John",
    lastName: "Smith",
    birthYear: 1990,
    family: ["Jane", "Mark", "Bob", "Emily"],
    job: "Teacher",
    isMarried: false
};

console.log(john);
console.log(john.firstName);
console.log(john["lastName"]);
var x = "birthYear";
console.log(john[x]);

// Mutating object variables
john.job = "Designer";
john["isMarried"] = true;
console.log(john);

// new Object syntax
var jane = new Object();
jane.firstName = "Jane";
jane.birthYear = 1969;
jane["lastName"] = "Smith";
console.log(jane);

/* #26: Objects and Methods */

var john = {
    firstName: "John",
    lastName: "Smith",
    birthYear: 1992,
    family: ["Jane", "Mark", "Bob", "Emily"],
    job: "Teacher",
    isMarried: false,
    calcAge: function(birthYear) {
        this.age = 2018 - this.birthYear;
    }
};

john.calcAge();
console.log(john);