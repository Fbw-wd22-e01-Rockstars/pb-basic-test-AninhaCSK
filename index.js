// Add answers here 

// Conditional Algorithms

// 1. Los or New?

function nameOfCity(city) {
    if (city.toLowerCase().startsWith("los") || city.toLowerCase().startsWith("new")) {
        console.log(city);
    } else {
        console.log("The city name does not begin with Los or New")
    }
}
nameOfCity('New York')
nameOfCity('newark')
nameOfCity('London')

// 2. isDivisible?

function isDivisible(num) {
    if (num % 100 === 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}
isDivisible(1); // false
isDivisible(1000); // true
isDivisible(100); // true

// 4. What's the weather?

function isRaining(bool) {
    bool === true ? console.log("wet day - you need an umbrella_") : console.log("_dry day - leave your umbrella at home");
}

isRaining(true)

// Loops

// 1. Sequence

function geometricalSequence() {
    let sequence = "";
    for (let i = 1; i <= 8; i++) {
        console.log(sequence = Math.pow(2, i))
    }

}

geometricalSequence(); // 1 2 4 8 16 32 64 128 256

// 2. Multiples

function multiplesOfThree() {
    let sequence = "";
    for (let i = 1; i <= 5; i++) {
        console.log(sequence = i * 3)
    }
}
multiplesOfThree(); // 3 6 9 12 15

// Math

// 1. You've got the power

function powerOf(num) {
    console.log(Math.pow(num, num));
}

powerOf(3) // ➞ 27
powerOf(4) // ➞ 256

// Problem Solving

// 1. How many?

function vowelCount(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "a" || str[i] === "e" || str[i] === "i" || str[i] === "o" || str[i] === "u") {
            count++;
        }
    }
    console.log(count);
}
vowelCount("hello"); // 2
vowelCount("test"); // 1
vowelCount("fbw"); // 0






// DO NOT EDIT below this line - This will result in an automatic fail
// module.exports = {nameOfCity, isDivisible, missingAngle, isRaining, geometricalSequence, multiplesOfThree, powerOf, vowelCount};