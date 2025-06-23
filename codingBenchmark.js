/* 

JavaScript Coding Benchmark
Time Limit: 90 minutes
Complete each task in order. Use console.log() to check your work unless otherwise instructed. 

*/

// 1. Variables and Data Types
// Declare a variable 'name' and assign your name to it

// 2. Strings
// Write a function that takes a string and returns it reversed

// 3. Arrays
// Create an array of 5 fruits and log the third one

// 4. Loops
// Write a for loop that logs numbers 1 to 10 (inclusive)

// 5. Conditionals
// Write a function that takes a number and returns "even" or "odd"

// 6. Objects
// Create an object representing a dog with keys 'name', 'age', and 'breed'

// 7. Functions
// Write a function that takes two numbers and returns their product

// 8. Array Methods
// Use .map to create an array of squares from 1 to 10

// 9. Sets (using Set)
// Create two sets with overlapping numbers and log their intersection

// 10. Classes
// Define a class called Book with title and author properties

// 11. Intermediate: Nested Loops
// Write code that logs a multiplication table (1 through 5)

// 12. Intermediate: String Processing
// Write a function that counts how many vowels are in this string "Change the Face of Tech"

// 13. Intermediate: Slicing
// Given the string "Ada Developers Academy", slice and log only the word "Developers"

// 14. Challenge: Recursion
// Problem: Write a recursive function that takes a non-negative integer n and returns the sum of its digits.
// Example: sumDigits(1234) -> 10
// Constraints: Do not use loops. Input will always be a non-negative integer.

function sumDigits(n) {
    // Replace with your code
}

module.exports.sumDigits = sumDigits;

if (typeof describe === 'function') {
    const { sumDigits } = require('./benchmark');
    describe('sumDigits', () => {
        test('base cases', () => {
            expect(sumDigits(0)).toBe(0);
            expect(sumDigits(5)).toBe(5);
        });
        test('recursive cases', () => {
            expect(sumDigits(1234)).toBe(10);
            expect(sumDigits(9999)).toBe(36);
        });
    });
}

// 15. Challenge: Sorting
// Problem: Write a function that sorts an array of numbers in ascending order using in-place insertion sort.
// Example: insertionSort([5, 2, 9, 1]) -> modifies array to [1, 2, 5, 9]
// Constraints: Do not return a new array. Do not use built-in sort methods.

function insertionSort(arr) {
    // Replace with your code
}

module.exports.insertionSort = insertionSort;

if (typeof describe === 'function') {
    const { insertionSort } = require('./benchmark');
    describe('insertionSort', () => {
        test('basic cases', () => {
            expect(insertionSort([5, 3, 8, 4, 2])).toEqual([2, 3, 4, 5, 8]);
            expect(insertionSort([])).toEqual([]);
            expect(insertionSort([1])).toEqual([1]);
            expect(insertionSort([3, 2, 1])).toEqual([1, 2, 3]);
        });
    });
}
