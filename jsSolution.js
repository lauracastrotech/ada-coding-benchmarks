// JavaScript Coding Benchmark Solution Key

// 1. Variables and Data Types
// Declare a variable 'name' and assign your name to it
let name = "Ada Lovelace";

// 2. Strings
// Write a function that takes a string and returns it reversed
function reverseString(str) {
    return str.split('').reverse().join('');
}

// 3. Arrays
// Create an array of 5 fruits and log the third one
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
console.log(fruits[2]);  // cherry

// 4. Loops
// Write a for loop that logs numbers 1 to 10 (inclusive)
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 5. Conditionals
// Write a function that takes a number and returns "even" or "odd"
function evenOrOdd(n) {
    return n % 2 === 0 ? "even" : "odd";
}

// 6. Objects
// Create an object representing a dog with keys 'name', 'age', and 'breed'
let dog = {
    name: "Fido",
    age: 3,
    breed: "Beagle"
};

// 7. Functions
// Write a function that takes two numbers and returns their product
function multiply(a, b) {
    return a * b;
}

// 8. Array Methods
// Use .map to create an array of squares from 1 to 10
let squares = Array.from({ length: 10 }, (_, i) => (i + 1) ** 2);

// 9. Sets (using Set)
// Create two sets with overlapping numbers and log their intersection
let a = new Set([1, 2, 3, 4]);
let b = new Set([3, 4, 5, 6]);
let intersection = [...a].filter(x => b.has(x));
console.log(intersection);

// 10. Classes
// Define a class called Book with title and author properties
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

// 11. Intermediate: Nested Loops
// Write code that logs a multiplication table (1 through 5)
for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= 5; j++) {
        row += (i * j) + " ";
    }
    console.log(row);
}

// 12. Intermediate: String Processing
// Write a function that counts how many vowels are in a string
function countVowels(str) {
    return str.toLowerCase().split('').filter(c => 'aeiou'.includes(c)).length;
}

// 13. Intermediate: Slicing
// Given the string "Ada Developers Academy", slice and log only the word "Developers"
let s = "Ada Developers Academy";
console.log(s.slice(4, 14));  // Developers

// 14. Challenge: Recursion
// Problem: Write a recursive function that takes a non-negative integer n and returns the sum of its digits.
// Example: sumDigits(1234) -> 10
// Constraints: Do not use loops. Input will always be a non-negative integer.
function sumDigits(n) {
    if (n === 0) return 0;
    return (n % 10) + sumDigits(Math.floor(n / 10));
}

// 15. Challenge: Sorting
// Problem: Write a function that sorts an array of numbers in ascending order using in-place insertion sort.
// Example: insertionSort([5, 2, 9, 1]) -> modifies array to [1, 2, 5, 9]
// Constraints: Do not return a new array. Do not use built-in sort methods.
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}
